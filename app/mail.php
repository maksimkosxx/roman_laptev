<?php
$to = "maksimkosxx@gmail.com";
$tema = "Сообщение с сайта Alandr";
$message = "Ваше имя: " . $_POST['name'] . "<br>";
$message = "Телефон: " . $_POST['phone'] . "<br>";
$message = "Почта: " . $_POST['mail'] . "<br>";
//$message = "Метро / город: " . $_POST['location'] . "<br>";
//$message = "Сообщение: " . $_POST['message'] . "<br>";
//$uploaddir = getcwd().DIRECTORY_SEPARATOR.'upload'.DIRECTORY_SEPARATOR;
//$uploadfile = $uploaddir.basename($_FILES['file']['name']);
//move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
header("HTTP/1.0 301 Moved Permanently");
header("Location: /");
die("Redirect");
?>
