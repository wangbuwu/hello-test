
<?php
//header("content-type:application/json;charset=utf-8")
$con=mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
  	mysql_select_db("xampp", $con);

//$sql="INSERT INTO news (newstitle, newsimg,newscontent,newstime)
//VALUES
//('$_POST[newstitle]','$_POST[newsimg]','$_POST[newscontent]','$_POST[newstime]')";

//if (!mysql_query($sql,$con))
  //{
  //die('Error: ' . mysql_error());
 // }else{
  	//echo "1 record added";
  $sql="select*from news";
  mysql_query("set name 'utf-8'");
  $result=mysql_query($sql,$con);
  $arr=array();
  while ($row=mysql_fetch_array($result))
  {
  	array_push($arr,array("newstitle"=>$row['newstitle'],"newsimg"=>$row['newsimg']));
  }
  $result = array("errcode" =>0,"result"=>$arr );
  echo json_encode($result);
  }

mysql_close($con);
?>
