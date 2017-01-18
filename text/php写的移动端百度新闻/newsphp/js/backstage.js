//打开后台页面的时候 发送请求 刷新新闻列表
$(document).ready(function(){
   var $newsTable = $('#newstable tbody');
   
   refreshNews();
   //添加新闻
   $('#btnsubmit').click(function(e){
    e.preventDefault();
    //输入判断
    if ($('#newstitle').val()==="" ||$('#newimg').val()===""|| $('#newscontent').val()==="" ||$('#newstime').val()==="" ) {
         if ($('#newstitle').val()==="") {
          $('#newstitle').parent().addClass('has-error');
         }else{
              $('#newstitle').parent().removeClass('has-error');
         }
          if ($('#newsimg').val()==="") {
          $('#newsimg').parent().addClass('has-error');
         }else{
              $('#newsimg').parent().removeClass('has-error');
         }
          if ($('#newscontent').val()==="") {
          $('#newscontent').parent().addClass('has-error');
         }else{
              $('#newscontent').parent().removeClass('has-error');
         }
          if ($('#newstime').val()==="") {
          $('#newstime').parent().addClass('has-error');
         }else{
              $('#newstime').parent().removeClass('has-error');
         }
    }else{
      //提交添加
       var jsonNews={
        newstitle:$('#newstitle').val(),
        newsimg:$('#newsimg').val(),
        newscontent:$('#newscontent').val(),
        newstime:$('#newstime').val(),
       }
       $.ajax({
           url:'./php/insert.php',
           type:'post',
           data:jsonNews,
           datatype:'json',
           success:function(data){
            console.log(data);
            refreshNews();
           }
       });
    }
   });
  //删除新闻的功能
  var deleteId=null;
  $newsTable.on('click','.btn-danger',function(e){
        $('#deleteModal').modal('show');
       deleteId=$(this).parent().prevAll().eq(3).html();

  });

  $('#deleteModal #confirmDelete').click(function(e){
     
      if (deleteId) {
        $.ajax({
             url:'./php/delete.php',
             type:'POST',
             data:{newsid:deleteId},
             success:function(data){
               
             }
        });
         
        $('#deleteModal').modal('hide');
      
      }
       refreshNews();
 });

  //编辑新闻的功能
  var updateId=null;
  $newsTable.on('click','.btn-primary',function(e){
        $('#updateModal').modal('show');
        updateId=$(this).parent().prevAll().eq(3).html();
        $.ajax({
          url:'./php/curnews.php',
          type:'get',
          datatype:'json',
          data:{newsid:updateId},
          success:function(data){
            console.log(data);
            $('#unewstitle').val(data[0].newstitle);
             $('#unewsimg').val(data[0].newsimg);
            $('#unewscontent').val(data[0].newscontent);
            var unewstime=data[0].newstime.split(' ')[0];
            $('#unewstime').var(unewstime);         
          }  
        });
     });
     $('#updateModal #confirmUpdate').click(function(e){
         $.ajax({
          url:'./php/update.php',
          type:'POST',
          datatype:'json',
          data:{
            newstitle:$('#newstitle').val(),
             newsimg:$('#newsimg').val(),
              newscontent:$('#newscontent').val(),
               newstime:$('#newstime').val(),
               id:updateId


          },
          success:function(data){
                 $('#updateModal').modal('hide'); 
                  refreshNews();    
          } 
         
        });
        

       });
  
  
 
   //新闻显示
   function refreshNews(){
      $newsTable.empty();
      $.ajax({
          type:'get',
          url:'./php/getnews.php',
         datatype:'json',
          success:function(data){
            console.log(data);
            data.forEach(function(item,index,array){
                var $tdid=$('<td>').html(item.newsid);
      var $tdtitle=$('<td>').html(item.newstitle);
      var $tdcontent=$('<td>').html(item.newscontent);
      var $tdtime=$('<td>').html(item.newstime);
      var $btnupdata=$('<button>').addClass('bin btn-primary btn-xs').html('修改');
      var $btndelete=$('<button>').addClass('bin btn-danger btn-xs').html('删除');
      var $tdctrl=$('<td>');
      $tdctrl.append($btnupdata,$btndelete);
      var $tRow=$('<tr>');
      $tRow.append($tdid,$tdtitle,$tdcontent,$tdtime,$tdctrl);
      $newsTable.append($tRow);
            });
          }

      });
  }
  }); 
 