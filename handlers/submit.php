<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


$name = $_POST["name"];
$tel = $_POST["tel"];
$city = $_POST["city"];
$email = $_POST["email"];
$message = $_POST["message"];

$mail = new PHPMailer;
$mail->CharSet = "UTF-8";
$mail->setFrom('hello@aldani.ae', 'aldani');
// $mail->addAddress('derepa.evgeniy@gmail.com', '');

$mail->addAddress('7074033@gmail.com', 'order');
//$mail->addAddress('hello@aldani.ae', '');



$mail->Subject = 'Order from aldani.ae';



$mail->msgHTML(
    "Name: ".$name."<br>
City: ".$city."<br>
Phone: ".$tel."<br>
Email: ".$email."<br><br>
Comment: ".$message
);

if (isset( $_POST['my_file_upload'])) {

    $uploaddir = 'uploads';

    if( ! is_dir( $uploaddir ) ) mkdir( $uploaddir, 0777 );

    $files      = $_FILES;
    $done_files = array();

    foreach( $files as $file ){
        $file_name = $file['name'];

        if( move_uploaded_file( $file['tmp_name'], "$uploaddir/$file_name" ) ){
            $done_files[] = realpath( "$uploaddir/$file_name" );
        }
        $mail->addAttachment($uploaddir."/".$file_name);
    }


    $data = $mail->send();

    foreach( $files as $file ){
        $file_name = $file['name'];
        unlink($uploaddir."/".$file_name);
    }
    die (json_encode($data));
}
else {
    $data = $mail->send();
    die (json_encode($data));
}

