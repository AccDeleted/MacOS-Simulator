<?php
//Database connection
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$db = 'macos';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass , $db); 
 
//insert into database
if(!empty($_POST)) {
 $name = $_POST['name'];
 $message = $_POST['message']; 
 mysqli_query($conn, "INSERT into comments(comment_user, comment_content,comment_time) values ('$name', '$message', now())"); 
}else {
    echo "sorry i could not do it";
}
?>
<div class="bubble"><div class="namebubble" style="margin-bottom: 5px; font-size: 15px;"><?php echo $name; ?></div><div style="font-size: 17px;"><?php echo $message; ?></div></div><br>