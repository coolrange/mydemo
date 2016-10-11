var num =["a","b","c","d","e","f","g"],
	timer=null,
	flag=0;

window.onload=function(){
	var title=document.getElementById("title"),
		play =document.getElementById("play"),
		stop =document.getElementById("stop");
		//点击事件
	play.onclick=playFun;
	stop.onclick=stopFun;

	//键盘事件
	document.onkeyup=function(event){
		event= event || window.event;
		if (event.keyCode==13){
			if(flag==0){
				playFun();
				flag=1;
			}
			else {
				stopFun();
				flag=0;
			}
		}
	}
}
function playFun(){
	var title =document.getElementById("title"),
		play=document.getElementById("play");
	clearInterval(timer);
	timer =setInterval(function(){
		i =Math.floor(Math.random()*num.length);
		title.innerHTML=num[i];
	},50);
	play.style.backgroundColor="#999";
}

function stopFun(){
	var play =document.getElementById("play");
	clearInterval(timer);
	play.style.backgroundColor="#036";

}