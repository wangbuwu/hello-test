//指针颜色变化
$(document).ready(function(){
	$(".submenu school-list").hide();
$(".ue-bar-nav2"). mouseover(function(){
  $("#arrow-icon1").css("border-color","rgb(53, 181, 88)");
 $(".ue-bar-nav2"). mouseout(function(){
  $("#arrow-icon1").css("border-color","#c1c1c1"); 
});
 });
$(".ue-bar-nav4"). mouseover(function(){
  $("#arrow-icon3").css("border-color","rgb(53, 181, 88)");
$(".ue-bar-nav4"). mouseout(function(){
  $("#arrow-icon3").css("border-color","#c1c1c1"); 
});
});

});



//指针旋转
$(document).ready(function(){
	if (true) {}
$(".ue-bar-nav2"). mouseover(function(){
$('#arrow-icon1').animate({ textIndent: 400 }, { 
step: function(now,fx) { 
$(this).css('-webkit-transform','rotate('+now+'3deg)'); 
}, 
duration:'slow' 
},'linear'); 
$(".ue-bar-nav2"). mouseout(function(){
  	$('#arrow-icon1').animate({ textIndent: -50 }, { 
step: function(now,fx) { 
$(this).css('-webkit-transform','rotate('+now+'175deg)'); 
}, 
duration:1 
},'linear');
});});});

$(document).ready(function(){
$(".ue-bar-nav3"). mouseover(function(){
$('#arrow-icon2').animate({ textIndent: 400 }, { 
step: function(now,fx) { 
$(this).css('-webkit-transform','rotate('+now+'3deg)'); 
}, 
duration:'slow' 
},'linear'); 
$(".ue-bar-nav3"). mouseout(function(){
  	$('#arrow-icon2').animate({ textIndent: -50 }, { 
step: function(now,fx) { 
$(this).css('-webkit-transform','rotate('+now+'175deg)'); 
}, 
duration:1 
},'linear');
});});});
$(document).ready(function(){
$(".ue-bar-nav4"). mouseover(function(){
$('#arrow-icon3').animate({ textIndent: 400 }, { 
step: function(now,fx) { 
$(this).css('-webkit-transform','rotate('+now+'3deg)'); 
}, 
duration:'slow' 
},'linear'); 
$(".ue-bar-nav4"). mouseout(function(){
  	$('#arrow-icon3').animate({ textIndent: -50 }, { 
step: function(now,fx) { 
$(this).css('-webkit-transform','rotate('+now+'175deg)'); 
}, 
duration:1 
},'linear');
});});});
//导航显示第一条

$(document).ready(function(){ 
	$(".submenu").hide()
  $(".ue-bar-nav2").hover(
  function () {
    $(".submenu").show();
    
  },
   function () {
    $(".submenu").hide();
   
  });
  $(".submenu ").hover(
  function () {
    $(".submenu").show();
     
  },
  function () {
    $(".submenu").hide();
     
  }
); 
});
//第二条
$(document).ready(function(){ 
	$(".submenuvip-lesson3").hide()
  $(".ue-bar-nav3").hover(
  function () {
    $(".submenuvip-lesson3").show();
    
  },
  function () {
    $(".submenuvip-lesson3").hide();
   
  }
);
  $(".submenuvip-lesson3").hover(
  function () {
    $(".submenuvip-lesson3").show();
     
  },
  function () {
    $(".submenuvip-lesson3").hide();
     
  }
);});
//第三条
$(document).ready(function(){ 
  $(".submenuvip-lesson3").hide()
  $(".ue-bar-nav4").hover(
  function () {
    $(".submenuvip-lesson3").show();
    
  },
  function () {
    $(".submenuvip-lesson3").hide();
   
  }
);
  $(".submenuvip-lesson3").hover(
  function () {
    $(".submenuvip-lesson3").show();
     
  },
  function () {
    $(".submenuvip-lesson3").hide();
     
  }
); 
});
//垂直导航
$(document).ready(function(){
	$(".list-show").hide();
$("#menu1"). mouseover(function(){
  $(".list-show").show();
 $("#menu1"). mouseout(function(){
  $(".list-show").hide();
});
 });
$(".list-show"). mouseover(function(){
  $(".list-show").show();
 $(".list-show"). mouseout(function(){
  $(".list-show").hide();
});
 });
$("#menu2"). mouseover(function(){
  $(".list-show").show();
 $("#menu2"). mouseout(function(){
  $(".list-show").hide();
});
 });
$("#menu3"). mouseover(function(){
  $(".list-show").show();
 $("#menu3"). mouseout(function(){
  $(".list-show").hide();
});
 });
$("#menu4"). mouseover(function(){
  $(".list-show").show();
 $("#menu4"). mouseout(function(){
  $(".list-show").hide();
});
 });
$("#menu5"). mouseover(function(){
  $(".list-show").show();
 $("#menu5"). mouseout(function(){
  $(".list-show").hide();
});
 });
$("#menu6"). mouseover(function(){
  $(".list-show").show();
 $("#menu6"). mouseout(function(){
  $(".list-show").hide();
});
 });
$("#menu7"). mouseover(function(){
  $(".list-show").show();
 $("#menu7"). mouseout(function(){
  $(".list-show").hide();
});
 });
$("#menu8"). mouseover(function(){
  $(".list-show").show();
 $("#menu8"). mouseout(function(){
  $(".list-show").hide();
});
 });
$("#menu9"). mouseover(function(){
  $(".list-show").show();
 $("#menu9"). mouseout(function(){
  $(".list-show").hide();
});
 });
$("#menu10"). mouseover(function(){
  $(".list-show").show();
 $("#menu10"). mouseout(function(){
  $(".list-show").hide();
});
 });
});
//内容切换
$(document).ready(function(){
    $(".list-1").bind("click",function(){
        $(".list-1").css("backgroundPosition","0px -26px");
        $(".list-2").css("backgroundPosition","-30px -26px");
        $(".changelist").children().removeClass("list-2-v").addClass("list-1-o");
        $(".changelist2").children().removeClass("list-2-v").addClass("list-1-o");

    })
    $(".list-2").bind("click",function(){
        $(".list-1").css("backgroundPosition","0px 0px");
        $(".list-2").css("backgroundPosition","-30px 0px")
        $(".changelist").children().removeClass("list-1-o").addClass("list-2-v");
        $(".changelist2").children().removeClass("list-1-o").addClass("list-2-v");  
    })
});
//下级导航菜单显示
$(document).ready(function(){
	$(".list-box-li").hide();
	$(".list-box-li1").hide();
	$(".list-box-li2").hide();
	$(".list-box-li3").hide();
$("#box-ull1"). mouseover(function(){
  $(".list-box-li").show();
  $(".list-box-li"). mouseover(function(){
  $(".list-box-li").show();
 $(".list-box-li"). mouseout(function(){
  $(".list-box-li").hide();
});
 });});
$("#box-ull2"). mouseover(function(){
  $(".list-box-li1").show();
  $(".list-box-li1"). mouseover(function(){
  $(".list-box-li1").show();
 $(".list-box-li1"). mouseout(function(){
  $(".list-box-li1").hide();
});
 });});
$("#box-ull3"). mouseover(function(){
  $(".list-box-li2").show();
  $(".list-box-li2"). mouseover(function(){
  $(".list-box-li2").show();
 $(".list-box-li2"). mouseout(function(){
  $(".list-box-li2").hide();
});
 });});
$("#box-ull4"). mouseover(function(){
  $(".list-box-li3").show();
  $(".list-box-li3"). mouseover(function(){
  $(".list-box-li3").show();
 $(".list-box-li3"). mouseout(function(){
  $(".list-box-li3").hide();
});
 });});
});
//内容滑过显示
$(document).ready(function(){
$("#list-a"). mouseover(function(){
  $(".p1 ").css("height","120");
  $(".p1 ").css("opacity","1");
   $(".p1 ").css("display","block");
 $("#list-a"). mouseout(function(){
  $(".p1 ").css("height","0");
  $(".p1 ").css("opacity","0");
   $(".p1 ").css("display","none");
});});});
$(document).ready(function(){
$("#list-b"). mouseover(function(){
  $(".p2 ").css("height","120");
  $(".p2 ").css("opacity","1");
   $(".p2 ").css("display","block");
 $("#list-b"). mouseout(function(){
  $(".p2 ").css("height","0");
  $(".p2 ").css("opacity","0");
   $(".p2 ").css("display","none");
});});});
$(document).ready(function(){
$("#list-c"). mouseover(function(){
  $(".p3 ").css("height","120");
  $(".p3 ").css("opacity","1");
   $(".p3 ").css("display","block");
 $("#list-c"). mouseout(function(){
  $(".p3 ").css("height","0");
  $(".p3 ").css("opacity","0");
   $(".p3 ").css("display","none");
});});});


 