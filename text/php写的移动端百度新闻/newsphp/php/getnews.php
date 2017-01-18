<?php
    header("Content-type:application/json; charset=utf-8");
   require_once('db.php');
    if ($link) {
      $newsid=$_GET['newsid'];
      $newstitle=$_GET['newstitle'];
      $newscontent=$_GET['newscontent'];
      $newstime=$_GET['newstime'];
      $sql='SELECT * FROM `news`';
     mysqli_query($link,"set names utf8;");
      $result=mysqli_query($link,$sql);
      $senddata=array();
      while ($row=mysqli_fetch_assoc($result)) {
        array_push($senddata, array(
                   'newsid' => $row['newsid'],
                   'newstitle' => $row['newstitle'],
                   'newscontent' => $row['newscontent'],
                  'newstime' => $row['newstime'],
       
          ));
      }
      echo json_encode($senddata);
    }else{
      echo json_encode(array('success'=>'none'));
    }

   mysqli_close($link);
?>







