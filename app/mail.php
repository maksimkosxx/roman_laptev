
<?php
$to = "maksimkosxx@gmail.com";
$tema = "Сообщение с сайта Laptev";
$message = "Ваше имя: " . $_POST['name'] . "<br>";
$message .= "Телефон: " . $_POST['tel'] . "<br>";
$message .= "Почта: " . $_POST['mail'] . "<br>";
$message .= "Дата мероприятия: " . $_POST['date'] . "<br>";
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
header("HTTP/1.0 301 Moved Permanently");
header("Location: /");
die("Redirect");
?>