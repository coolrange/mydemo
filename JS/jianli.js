;$(document).ready(function(){
	// alert($);
	new WOW().init();

	(function(){
		var beforeScrollTop = $(window).scrollTop();
			// console.log("qiana" + beforeScrollTop);
		var $focus_btn_box =$(".focus_btn-box"), 
				$focus_btn	= $('.focus_btn ul li'),
				$message_ul = $(".message .message-box"),
				$message_li = $(".message .message-box > li");
				// console.log($focus_btn);
		var roatateFlag = true;

		if((beforeScrollTop + 100) >= ($message_ul.offset().top)) {
				$focus_btn_box.css("display","block");
			}else {
				$focus_btn_box.css("display","none");
			}



		// 屏幕滚动事件
		$(window).on("scroll",function(){
			//获取数据
			var afterScrollTop =$(window).scrollTop(),
				scrollResult = afterScrollTop - beforeScrollTop;
			
				// console.log($focus_btn);
				// console.log($message_li);
				// console.log("hou" + afterScrollTop);
				// console.log("jieguo" + scrollResult);
				var self = this;
				// console.log($message_ul);
			// 判断是否滚动了
			if(scrollResult === 0) {
				return false;
			}

			// 焦点按钮显示或隐藏
			// console.log($(window).resize().offset().top)
			if((afterScrollTop + 100) >= ($message_ul.offset().top)) {
				$focus_btn_box.css("display","block");
			}else {
				$focus_btn_box.css("display","none");
			}


			// 判断上下滚动得情况
			if(scrollResult > 0) {
				// console.log(scrollResult);
				// console.log("down");
				$message_li.each(function(){
					sTop = $(this);
					if(($(this).offset().top - 200) < afterScrollTop){
						// console.log($(this).offset().top);
						$focus_btn.eq(sTop.index()).css("background-color","yellow").siblings().css("background-color","");
						// console.log(sTop.index());
					}
				});
			}else if(scrollResult < 0){
				// console.log("up");
				$message_li.each(function(){
					sTop = $(this);
					if($(this).offset().top < afterScrollTop){
						// console.log($(this).offset().top);
						$focus_btn.eq(sTop.index()).css("background-color","yellow").siblings().css("background-color","");
						// console.log(sTop.index());
					}
				});
			}
			beforeScrollTop = afterScrollTop;
			// console.log("qianb" + beforeScrollTop);
		});


		// 焦点按钮点击滚动
		$focus_btn.each(function(){
			// console.log($(this));
			$(this).on("click",function(){
				console.log($(this));
				if (roatateFlag) {
					roatateFlag = false;
					$("body").animate({
					scrollTop : $message_li.eq($(this).index()).offset().top
					},1500,function(){
						roatateFlag =true;
					});
				}
			});
		});
	}());




});