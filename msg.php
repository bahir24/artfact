<?php
require 'PHPMailer/PHPMailerAutoload.php';
$json=file_get_contents('php://input');
$data=json_decode($json,true);


$mail = new PHPMailer;

$mail->CharSet = 'UTF-8';

// Настройки SMTP
try {
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->Host = 'smtp.mail.ru';
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->Username = 'user@mail.ru';
$mail->Password = '123456';

// От кого
$mail->setFrom('user@mail.ru');

// Кому
$mail->addAddress('touser@gmail.com');

$mail->isHTML(true);
//Тема письма (добавить "Заявка №счетчик")
$mail->Subject = "Заявка с сайта";

$tmp = "Email: " . $data['email'];
$tmp .= "<br>";
$tmp .= "Имя: " . $data['name'];
$tmp .= "<br>";
$tmp .= "Сообщение: " . $data['message'];
$tmp .= "<br>";
$mail->Body = $tmp;

if(!$mail->send()){
    return false;
} else {
    return true;
}
//Проверка отправки в консоли

// echo true;
} catch (Exception $e) {
echo false;
}
?>