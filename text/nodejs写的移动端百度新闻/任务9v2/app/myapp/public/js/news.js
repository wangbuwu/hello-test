/*标检切换*/
$(document).ready(function(){

$("#tabsecond span").each(function(index){
 	$(this).click(function(){
        $("#tabsecond span.tabin").removeClass("tabin");
        $(this).addClass("tabin");
 		var type=$(this).text();
 	

 	   refreshNews(type);	
});
 });
  refreshNews('推荐');
  });
function refreshNews(type){


var $lists=$('article ul');
   $lists.empty();
   $.ajax({
   	url:'/news',
   	type:'get',
   	datatype:'json',
   	data:{newstype:type},
   	success:function(data){
   		console.log(data);
   		data.forEach(function(item,index,array){
   		var $list=$('<li></li>').addClass('news-list').prependTo($lists);
   		var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);
   		var $img=$('<img>').attr('src',data[index].newsimg).css("width","100%").appendTo($newsImg);
   		var $newsContent=$('<div><div>').addClass('newscontent').appendTo($list);
   	    var $h1=$('<h1></h1>').html(data[index].newstitle).appendTo($newsContent);
   		var $p=$('<p></p>').appendTo($newsContent);
   		var $newsTime=$('<span></span>').addClass('newstime').html(data[index].newstime).appendTo($p);
   		var $newsSrc=$('<span></span>').addClass('newssrc').html(data[index].newssrc).appendTo($p);
   	});
   		
}
});
}
/*轮播图*/
$(function(){
	var i=0;
	var clone=$(".banner .img li").first().clone();
	$(".banner .img").append(clone);	
	var size=$(".banner .img li").size();	
	for(var j=0;j<size-1;j++){
		$(".banner .num").append("<li></li>");
	}
	$(".banner .num li").first().addClass("on");
	/*鼠标划入圆点*/
	$(".banner .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner .img").stop().animate({left:-index*550},500)	
		$(this).addClass("on").siblings().removeClass("on")		
	})
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move()
	},2000)
	/*对banner定时器的操作*/
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},2000)
	})
	
	
	
	/*向左的按钮*/
	$(".banner .btn_l").click(function(){
		i++
		move();	
	})
	
	
	
	/*向右的按钮*/
	$(".banner .btn_r").click(function(){
		i--
		move()				
	})
	function move(){
		
		if(i==size){
			$(".banner  .img").css({left:0})			
			i=1;
		}
		
		
		if(i==-1){
			$(".banner .img").css({left:-(size-1)*550})
			i=size-2;
		}
		
		$(".banner .img").stop().animate({left:-i*550},500)	
		
		if(i==size-1){
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")	
		}
	}
});
 

   
   
