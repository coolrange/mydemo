
var i =-1,
	j =-1;
var menuflag = true,
	b_top = true;
$(document).ready(function(){

	$(".owl-carousel").owlCarousel({
 		 			center:true,
 		 			items: 5,
 		 			autoplay:true,
 		 			loop:true,
				    margin:100,
				    nav:false,
				    dots:false,
				    autoplayHoverPause:true,
				    autoWidth:true,
				    responsive:{
					    0:{
					       items:1
					    },
				          600:{
				              items:3
				          },
				          1000:{
				              items:5
				          },

				    }
 		 	});


	move();
	timer=setInterval("move()",5000);
	$(".header .top-banner li").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval("move()",5000);
	});
	// search-btn open or close
	search();
	new WOW().init();
	// menu-bar fix top
	
	$(window).on('scroll', function(){
		// console.log($(window).scrollTop());
		var $get_touch = $(".get-touch"),
			$backtop = $(".footer-bottom .backtop"),
			$content = $(".content").offset().top;
		
		 if( $(window).scrollTop()> $content && menuflag == true){
		    $('.navbar').addClass('menu-bar-fixed');
		    menuflag = false;
		    console.log(1);
		    console.log($content);
		  } else if ($(window).scrollTop() < $content && menuflag ==false){
		    $('.navbar').removeClass('menu-bar-fixed');
		    menuflag = true;
		  }

		  if($(window).scrollTop() > $content && b_top ==true) {
		  	$backtop.addClass("fixBottom");
		  	b_top = false;
		  	// if ($(window).scrollTop() > $get_touch.offset().top) {
		  	// 	$backtop.removeClass("fixBottom");

		  	// }
		  }else if($(window).scrollTop() < $content && b_top == false) {
		  	$backtop.removeClass("fixBottom");
		  	b_top = true;
		  }

	});

	(function(){
		$(".nav .page-scroll").on("click",function(e){
			var $anchor =$(this);
			$("body").animate({
				scrollTop: $($anchor.attr('href')).offset().top
			},1500);
			e.preventDefault();
		});
	}());

	// backtop
	(function(){
		$backtop = $(".footer-bottom .backtop");
		$backtop.on("click",function(){
		  	$("body").animate({
		  		scrollTop: 0
		  	},2000);
		  });
	}());

	// grid
	(function () {
    
        /* initialize shuffle plugin */
        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('.works-btn-box button').click(function (e) {
            e.preventDefault();

            // set active class
            $('.works-btn-box button').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });
    
    }());
    //grid



//count
    (function () {
    	var $count1 = $("#count1").html(),
	    	 $count2 = $("#count2").html(),
	    	 $count3 = $("#count3").html(),
	    	 $count4 = $("#count4").html();

    	var demo1 = new countUp("count1",$count1),
	    	 demo2 = new countUp("count2",$count2),
	    	 demo3 = new countUp("count3",$count3),
	    	 demo4 = new countUp("count4",$count4);
    	demo1.start();
    	demo2.start();
    	demo3.start();
    	demo4.start();
    })();
    //count

  //comment  
 (function(){
    	com_move();
    	com_time =setInterval("com_move()",5000);
    	$(".comment-message li,.btn-box .fbtn,.btn-box .sbtn").hover(function(){
    		clearInterval(com_time);
    	},function(){
    		com_time =setInterval("com_move()",5000);
    	})
    	var $comment_li = $(".comment-message li");
	    var	$comment_prebtn =$(".btn-box .fbtn"),
	    	$comment_nextbtn =$(".btn-box .sbtn");
	    	$comment_prebtn.on("click",function(){
	    		com_move();
	    	});

	    	$comment_nextbtn.on("click",function(){
	    		com_move();
	    	});
    }());


  // comment
})




function com_move(){
    		var $comment_li = $(".comment-message li");
    			

    		$comment_li.each(function(){
    			$(this).css("opacity","0");
    		});

    		j++;
    		if(j>1){
    			j=0;
    		}
    		if(j==0) {
    			$comment_li.eq(j).fadeIn(300).siblings().fadeOut();
    			$comment_li
    		}
    		if(j==1){
    			$comment_li.eq(j).fadeIn(300).siblings().fadeOut();
    		}
    	}

function search(){
	var $search_btn = $(".navbar-nav .search-btn span");
	$search_btn.click(function(){
		$(".search-btn .search-input").fadeToggle("slow","linear");
	});
}



function move(){
	i++;
	var $banner_li = $(".top-banner li"),
		$mobile_img = $(".mobile-img"),
		$fbanner_img =$(".phone .box-img img"),
		$phone_text =$(".header .top-banner li .phone-text").children(),
		$sec_title_h1 = $(".second-banner .sec-title h1"),
		$sec_title_span = $(".second-banner .sec-title h1 span"),
		$sec_tips = $(".sec-tips-box");
	$phone_text.css("display","none");
	$mobile_img.css("display","none");
	$fbanner_img.each(function(){
		$(this).css("display","none");
	});
	
	if(i>2){
		i=0;
	}

	if(i<2){
		if(i==0){
			$banner_li.eq(i).fadeIn(200).siblings().fadeOut();
			$mobile_img.fadeIn(800);
			$fbanner_img.each(function(){
				$(this).css("display","inline-block");
				$(this).addClass("animated rotateIn");
			});
			$phone_text.eq(0).addClass("animated fadeInRight").fadeIn(1500,function(){
				$phone_text.eq(1).addClass("animated fadeInRight").fadeIn(1000,function(){
					$phone_text.eq(2).addClass("animated fadeInRight").fadeIn(800,function(){
						$phone_text.eq(3).addClass("animated fadeInRight").fadeIn(600,function(){
							$phone_text.eq(4).addClass("animated fadeInRight").fadeIn();
						});
					});
				});
			});
		}

		if(i==1){
			$banner_li.eq(i).fadeIn(200).siblings().fadeOut()
			$sec_title_span.addClass("animated bounceInUp").fadeIn(1500,function(){
				$sec_title_h1.addClass("animated bounceInRight").fadeIn(500)
			});
			$sec_tips.eq(0).addClass("animated fadeInRight").fadeIn(1000,function(){
				$sec_tips.eq(1).addClass("animated fadeInRight").fadeIn(800,function(){
					$sec_tips.eq(2).addClass("animated fadeInRight").fadeIn(600,function(){
							$sec_btn.addClass("animated fadeInLeft").fadeIn();
					});
				});
			});
		}
	}
	
};


