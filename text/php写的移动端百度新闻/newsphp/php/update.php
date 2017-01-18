<?php
   header("Content-type: text/html;charset=utf-8");
   //header("Content-type:application/json; charset=utf-8");
    require_once('db.php');
   if ($link) {
   	
   	  $newstitle=$_POST['newstitle'];
   	   $newsimg=$_POST['newsimg'];
   	    $newscontent=$_POST['newscontent'];
   	     $newstime=$_POST['newstime'];
    $newsid=$_POST['newsid'];
   	     $sql="UPDATE `news`SET `newstitle`='{$newstitle}',`newsimg`='{$newsimg}',`newscontent`='{$newscontent}',`newstime`='{$newstime}' WHERE `id`={$newsid} ";
   	     mysqli_query($link,"set names utf8;");
   	     $result=mysqli_query($link,$sql);
   	     echo json_encode(array('success' =>'ok'  ));
   }




?>