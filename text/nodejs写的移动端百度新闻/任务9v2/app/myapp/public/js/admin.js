//打开后台页面的时候 发送请求 刷新新闻列表
$(document).ready(function(){
 var $newsTable = $('#newstable tbody');
 refreshNews();
   //添加新闻
   $('#btnsubmit').click(function(e){
    e.preventDefault();
    //输入判断
    if ($('#newstitle').val()==="" ||$('#newimg').val()===""|| $('#newscontent').val()==="" ||$('#newstime').val()==="" ||$('#newstype').val()===""||$('#newssrc').val()==="") {
     if ($('#newstype').val()==="") {
      $('#newstype').parent().addClass('has-error');
    }else{
      $('#newstype').parent().removeClass('has-error');
    }
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
    if ($('#newssrc').val()==="") {
      $('#newssrc').parent().addClass('has-error');
    }else{
      $('#newssrc').parent().removeClass('has-error');
    }
  }else{
      //提交添加
      var jsonNews={
        newstype:$('#newstype').val(),
        newstitle:$('#newstitle').val(),
        newsimg:$('#newsimg').val(),
        newscontent:$('#newscontent').val(),
        newstime:$('#newstime').val(),
        newssrc:$('#newssrc').val(),
      }
      $.ajax({
       url:'/admin/insert',
       type:'post',
       data:jsonNews,
       datatype:'json',
       success:function(data){
        refreshNews();
      }
    });
    }
  });
  //删除新闻的功能
  var deleteId=null;
  $newsTable.on('click','.btn-danger',function(e){
    $('#deleteModal').modal('show');
    deleteId=$(this).parent().prevAll().eq(4).html();
  });
  $('#deleteModal #confirmDelete').click(function(e){
    if (deleteId) {
      $.ajax({
       url:'/admin/delete',
       type:'post',
       data:{newsid:deleteId},
      success:function(data){
       console.log('删除成功');
     }
   });
      $('#deleteModal').modal('hide');  
    }
    refreshNews();
  });
  //编辑更新新闻的功能
  var updateId=null;
  $newsTable.on('click','.btn-primary',function(e){
    $('#updateModal').modal('show');
    updateId=$(this).parent().prevAll().eq(4).html();
    $.ajax({
      url:'/admin/curnews',
      type:'get',
      datatype:'json',
      data:{newsid:updateId},
      success:function(data){
        $('#unewstype').val(data[0].newstype);
        $('#unewstitle').val(data[0].newstitle);
        $('#unewsimg').val(data[0].newsimg);
        $('#unewscontent').val(data[0].newscontent);
        $('#unewstime').val(data[0].newstime); 
       // var unewstime=data[0].newstime.split('T')[0];
        $('#unewssrc').val(data[0].newssrc);        
      }  
    });
  });
  //新闻更新
  $('#confirmUpdate').click(function(e){
   $.ajax({
    url:'/admin/update',
    type:'POST',
    datatype:'json',
    data:{
     newstitle:$('#unewstitle').val(),
     newstype:$('#unewstype').val(),
     newscontent:$('#unewscontent').val(),
     newsimg:$('#unewsimg').val(),
     newstime:$('#unewstime').val(),
     newssrc:$('#unewssrc').val(),
     newsid:updateId
   },
   success:function(data){
    console.log(1);
    $('#updateModal').modal('hide'); 
    refreshNews();    
  } 
});
 });
   //新闻列表显示
   function refreshNews(){
    $newsTable.empty();
    $.ajax({
      type:'get',
      url:'/admin/getnews',
      datatype:'json',
      success:function(data){
        console.log(data);
        data.forEach(function(item,index,array){
          var $tdid=$('<td>').html(item.newsid);
          var $tdtitle=$('<td>').html(item.newstitle);
          var $tdtype=$('<td>').html(item.newstype);      
          var $tdtime=$('<td>').html(item.newstime);
          var $tdcontent=$('<td>').html(item.newscontent);
          var $btnupdata=$('<button>').addClass('bin btn-primary btn-xs').html('修改');
          var $btndelete=$('<button>').addClass('bin btn-danger btn-xs').html('删除');
          var $tdctrl=$('<td>');
          $tdctrl.append($btnupdata,$btndelete);
          var $tRow=$('<tr>');
          $tRow.append($tdid,$tdtitle,$tdtype,$tdcontent,$tdtime,$tdctrl);
          $newsTable.append($tRow);
        });
      }
    });
  }
});
//删除取消自动刷新页面 
function reload(){
   location.reload(); 
}