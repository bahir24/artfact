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
$mail->Username = 'artefaktspbsite@mail.ru';
$mail->Password = '91VpgS3G2Gxg7KDi5Hbf';

// От кого
$mail->setFrom('artefaktspbsite@mail.ru');

// Кому
$mail->addAddress('artifact.spb@gmail.com ');
//$mail->addAddress('7074033@gmail.com ');

$mail->isHTML(true);
//Тема письма (добавить "Заявка №счетчик")
$mail->Subject = "Заявка с сайта №" . time();

if($data['email'] === '' || $data['name'] === ''){
    echo false;
    return;
}

$tmp = "Email: " . $data['email'];
$tmp .= "<br>";
$tmp .= "Имя: " . $data['name'];
$tmp .= "<br>";
$tmp .= "Сообщение: " . $data['message'];
$tmp .= "<br>";
$mail->Body = $tmp;

if(!$mail->send()){
    echo false;
} else {
    echo true;
}
return;
//Проверка отправки в консоли

// echo true;
} catch (Exception $e) {
    echo false;
}
?>