 //监视窗口变化
 $(document).ready(function() {
     $(".scrollTop").hide();
 });
 $(function() {
     showScroll();

     function showScroll() {
         $(window).scroll(function() {
             var scrollValue = $(window).scrollTop();
             scrollValue > 100 ? $('div[class=scrollTop]').fadeIn() : $('div[class=scrollTop]').fadeOut();
         });

     }
 });
 //右边弹出菜单
 $(document).ready(function() {
     $(".sn").mouseover(function() {
         $(".MenuList").show();
         $(".sn").mouseout(function() {
             $(".MenuList").hide();
         });
     });
     $(".MenuList").mouseover(function() {
         $(".MenuList").show();
         $(".MenuList").mouseout(function() {
             $(".MenuList").hide();
         });
     });
 })
 $(function() {
     //当鼠标滑入时将div的class换成divOver
     $(".page1").hover(function() {
         $(this).addClass('divOver');
     }, function() {
         //鼠标离开时移除divOver样式
         $(this).removeClass('divOver');
     });
     $(".page2").hover(function() {
         $(this).addClass('divOver');
     }, function() {
         //鼠标离开时移除divOver样式
         $(this).removeClass('divOver');
     });
 });

 $(document).ready(function() {
         $("#myDiv1").show();
         $("#myDiv2").hide();
         $("#myDiv3").hide();
         $("#myDiv4").hide();
         $("#myDiv5").hide();
         $("#myDiv6").hide();
     })
     //导航切换不同内容
 $(function() {
     //初始化div，并注册事件
     var initDiv = function() {
         $(".Navigation div").css("background", "");
         $(".Navigation div").css("color", "");
         $(".Navigation div").mouseover(function() {
                 $(this).css("background", "rgba(118, 120, 123, 0.95)");
                 $(this).css("color", "white");
             })
             .mouseout(function() {
                 $(this).css("background", "");
                 $(this).css("color", "");
             })
     };
     initDiv();
     $(".Navigation div")
         .click(function() {
             initDiv();
             //当前被点击的div改变背景色
             $(this).css("background", "rgba(118, 120, 123, 0.95)");
             $(this).css("color", "white");
             $(".page1").on("click", function() {
                 $("#myDiv1").show();
                 $("#myDiv2").hide();
                 $("#myDiv3").hide();
                 $("#myDiv4").hide();
                 $("#myDiv5").hide();
                 $("#myDiv6").hide();
             });
             $(".page2").on("click", function() {
                 $("#myDiv2").show();
                 $("#myDiv1").hide();
                 $("#myDiv3").hide();
                 $("#myDiv4").hide();
                 $("#myDiv5").hide();
                 $("#myDiv6").hide();

             });
             $(".page3").on("click", function() {
                 $("#myDiv3").show();
                 $("#myDiv2").hide();
                 $("#myDiv1").hide();
                 $("#myDiv4").hide();
                 $("#myDiv5").hide();
                 $("#myDiv6").hide();

             });
             $(".page4").on("click", function() {
                 $("#myDiv4").show();
                 $("#myDiv2").hide();
                 $("#myDiv3").hide();
                 $("#myDiv1").hide();
                 $("#myDiv5").hide();
                 $("#myDiv6").hide();

             });
             $(".page5").on("click", function() {
                 $("#myDiv5").show();
                 $("#myDiv2").hide();
                 $("#myDiv3").hide();
                 $("#myDiv4").hide();
                 $("#myDiv1").hide();
                 $("#myDiv6").hide();

             });
             $(".page6").on("click", function() {
                 $("#myDiv6").show();
                 $("#myDiv2").hide();
                 $("#myDiv3").hide();
                 $("#myDiv4").hide();
                 $("#myDiv5").hide();
                 $("#myDiv1").hide();

             });
             //取消当前div的mouseout和mouseover事件
             $(this).unbind("mouseout");
             $(this).unbind("mouseover");
         });
 });
 //获取天气
 $(document).ready(function() {
     var cityUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js';
     $.getScript(cityUrl, function(script, textStatus, jqXHR) {
         var citytq = remote_ip_info.city; // 获取城市
         var url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + citytq + "&day=0&dfc=3";
         $.ajax({
             url: url,
             dataType: "script",
             scriptCharset: "gbk",
             success: function(data) {
                 var _w = window.SWther.w[citytq][0];
                 var _f = _w.f1 + "_0.png";
                 if (new Date().getHours() > 17) {
                     _f = _w.f2 + "_1.png";
                 }
                 var img = "<img width='16px' height='16px' src='http://i2.sinaimg.cn/dy/main/weather/weatherplugin/wthIco/20_20/" + _f + "' />";
                 var tq = citytq + ":" + " " + img + " " + " " + _w.t1 + "℃～" + _w.t2 + "℃  " + _w.d1;
                 //#weather自己修改,天气样式自己打断点调试
                 $('#weather').html(tq);
             }
         });
     });

 });
 //加载换肤界面
 $(document).ready(function() {
     $(".background-color").hide();
     $(".bgcolor").click(function() {
         $(".background-color").show();
     });
 });
 //换肤
 $(document).ready(function() {
     $(".pg1").click(function() {
         $("body").css("background-image", "url(" + './img/pg01.jpg' + ")");
         document.getElementById('simg').src = "./img/logo_white_fe6da1ec.png";
         //$("img[src='./img/bd_logo1.png']").attr('src','./img/logo_white_fe6da1ec.png');
         setCookie("theme", background - image);
     });
     $(".pg2").click(function() {
         $("body").css("background-image", "url(" + './img/pg02.jpg' + ")");
         document.getElementById('simg').src = "./img/logo_white_fe6da1ec.png";
         setCookie("theme", background - image);
     });
     $(".pg3").click(function() {
         $("body").css("background-image", "url(" + './img/pg03.jpg' + ")");
         document.getElementById('simg').src = "./img/logo_white_fe6da1ec.png";
         setCookie("theme", background - image);
     });
     $(".pg4").click(function() {
         $("body").css("background-image", "url(" + './img/pg04.jpg' + ")");
         document.getElementById('simg').src = "./img/logo_white_fe6da1ec.png";
         setCookie("theme", background - image);
     });
     $(".pg5").click(function() {
         $("body").css("background-image", "url(" + './img/pg05.jpg' + ")");
         document.getElementById('simg').src = "./img/logo_white_fe6da1ec.png";
         setCookie("theme", background - image);
     });

 });
 //cookie
 window.onload = function() {

     var theme = getCookie("theme")

 }

 function setCookie(c_name, value, expiredays) {
     var exdate = new Date()
     exdate.setDate(exdate.getDate() + expiredays)
     document.cookie = c_name + "=" + escape(value) +
         ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
 }

 function getCookie(c_name) {
     if (document.cookie.length > 0) {
         c_start = document.cookie.indexOf(c_name + "=")
         if (c_start != -1) {
             c_start = c_start + c_name.length + 1
             c_end = document.cookie.indexOf(";", c_start)
             if (c_end == -1) c_end = document.cookie.length
             return unescape(document.cookie.substring(c_start, c_end))
         }
     }
     return ""
 }
 //收起
 $(document).ready(function() {
     $(".no").click(function() {
         $(".background-color").hide();

     });
 });
 //不换肤
 $(document).ready(function() {
     $(".white").click(function() {
         $("body").css("background-image", "url(" + '' + ")");
         $("img[src='./img/logo_white_fe6da1ec.png']").attr('src', './img/bd_logo1.png');

     });
 });
