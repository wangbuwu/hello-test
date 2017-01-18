<!DOCTYPE html>
<html>
<meta charset="utf-8">
<head>
	<title>本地</title>
	<link rel="stylesheet" type="text/css" href="./index.css">
</head>
<body>
	<?php
	$con=mysql_connect("localhost","root","");
	mysql_select_db("xampp", $con);
	mysql_query("set names utf8");
	$sql="select * from news3";
	$result=mysql_query($sql);
	while($row=mysql_fetch_array($result))
	{
		?>   
		<div class="newslist-container">
			<div class="index-list-item" style="display: block;">
				<div class="index-list-main showleft">
					<div class="index-list-image">
						<i class="ivideoplay"></i>
						<img class="img" src="<?php echo $row['img']; ?>" data-save="true" class="">
					</div>
					<div class="index-list-main-text">
						<div class="index-list-main-title">
							<span class="span"><?php echo $row['title']; ?></span>
							<div class="index-list-bottom">
								<div class="index-list-main-time">
									<b class="tip-time"><?php echo $row['time']; ?></b>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>  
		</div>  
		<?php
	}  
	?>
</body>
</html>