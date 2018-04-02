<?php
$to = "vedlap84@romanlaptev.ru";

if (trim($_POST["type"]) == "question") {

    $tema = "Сообщение с сайта: «Задать мне вопрос»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Комментарий: " . $_POST['text'] . "<br>";

} elseif (trim($_POST["type"]) == "meet") {

    $tema = "Сообщение с сайта: «Записаться на встречу»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Комментарий: " . $_POST['text'] . "<br>";

} elseif (trim($_POST["type"]) == "pricetandart") {

    $tema = "Сообщение с сайта: «Цена. Стандарт»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Комментарий: " . $_POST['text'] . "<br>";

} elseif (trim($_POST["type"]) == "priceopt") {

    $tema = "Сообщение с сайта: «Цена. Оптимальный»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Комментарий: " . $_POST['text'] . "<br>";

} elseif (trim($_POST["type"]) == "priceprem") {

    $tema = "Сообщение с сайта: «Цена. Премиум»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Комментарий: " . $_POST['text'] . "<br>";

} elseif (trim($_POST["type"]) == "event") {

    $tema = "Сообщение с сайта: «Цена. Мероприятие»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Комментарий: " . $_POST['text'] . "<br>";

} elseif (trim($_POST["type"]) == "reg") {

    $tema = "Сообщение с сайта: «Цена. Регистрация»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Комментарий: " . $_POST['text'] . "<br>";

} elseif (trim($_POST["type"]) == "charity") {

    $tema = "Сообщение с сайта: «Благотворительность»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Комментарий: " . $_POST['text'] . "<br>";

} elseif (trim($_POST["type"]) == "date") {

    $tema = "Сообщение с сайта: «Узнать свободна ли дата»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Дата мероприятия: " . $_POST['date'] . "<br>";

} elseif (trim($_POST["type"]) == "gift") {

    $tema = "Сообщение с сайта: «Получить подарок»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Почта: " . $_POST['mail'] . "<br>";

} else  {

    $tema = "Сообщение с сайта: «Обратный звонок»";
    $message = "Ваше имя: " . $_POST['name'] . "<br>";
    $message .= "Телефон: " . $_POST['tel'] . "<br>";
    $message .= "Комментарий: " . $_POST['text'] . "<br>";
}

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
header("HTTP/1.0 301 Moved Permanently");
header("Location: /");
die("Redirect");
?>