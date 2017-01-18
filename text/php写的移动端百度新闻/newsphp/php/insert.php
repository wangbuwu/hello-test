<?php
   header("Content-type: text/html;charset=utf-8");
   //header("Content-type:application/json; charset=utf-8");
    require_once('db.php');
   if ($link) {
   	
   	  $newstitle=$_POST['newstitle'];
   	   $newsimg=$_POST['newsimg'];
   	    $newscontent=$_POST['newscontent'];
   	     $newstime=$_POST['newstime'];
   
   	     $sql="INSERT INTO `news`( `newstitle`, `newsimg`, `newscontent`, `newstime`) VALUES ('{$newstitle}','{$newsimg}','{$newscontent}','{$newstime}') ";
   	     mysqli_query($link,"set names utf8;");
   	     $result=mysqli_query($link,$sql);
   	     echo json_encode(array('success' =>'ok'  ));
   }




?>