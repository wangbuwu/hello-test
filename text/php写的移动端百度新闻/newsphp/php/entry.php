<?php  
// Session需要先启动。
 session_start();
 //判断uname和pwd是否赋值
 if(isset($_POST['username']) && isset($_POST['password'])){
 $name = $_POST['username'];
 $pwd = $_POST['password'];
 //连接数据库
 $conn = new mysqli('localhost', 'root','', 'xampp');
 if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
 }
 //验证内容是否与数据库的记录吻合。
 $sql = "SELECT * FROM login WHERE (username='$name') AND (password='$pwd')";
 //执行上面的sql语句并将结果集赋给result。
 $result = $conn->query($sql);
 //判断结果集的记录数是否大于0
 if ($result->num_rows > 0) {
   echo "<script>alert('欢迎进入新闻后台管理系统');location='../news.html';</script>";
  }
 else {
  echo "<script>alert('用户或密码错误')</script>";
 }
}

?> 

</html>
<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
	<title>新闻后台登录</title>
	<link rel="stylesheet" type="text/css" href="../css/entry.css">
</head>
<body>
 <form class="box" action="entry.php" method="POST">
 <div class="text">
 <span>用户:</span><br><br>
 <span>密码:</span>
 </div>
 <table>
  <tr>
  	<td><input type="text" name="username"></td>
  </tr>
  <tr>
  	<td></td>
  </tr>
  <tr>
  	<td></td>
  </tr>
  <tr>
  	<td></td>
  </tr>
    <tr>
  	<td><input type="password" name="password"></td>
  </tr>
  <tr>
  	<td><input class="submit" type="submit" name="submit" value="登录"></td>
  </tr>
 </table>
 </form>
</body>
</html>