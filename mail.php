<?php
require ("PHPMailer-master/src/PHPMailer.php");
require ("PHPMailer-master/src/SMTP.php");
if (isset($_POST['name']) && isset($_POST['contact'])) {
    $name = $_POST['name'];
    $contact = $_POST['contact'];
    $text = 'С нами хочет связаться ' . $name . ', контактные данные: ' . $contact;
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = 'ssl://smtp.mail.ru';
    $mail->Port = 465;
    $mail->Username = 'venafed@mail.ru';
    $mail->Password = 'qwer1234';
    $mail->IsHTML(true);
    $mail->SetFrom("venafed@mail.ru");
    $mail->Subject = "Туры в Австралию";
    $mail->Body = $text;
    $mail->AddAddress("gorkundp@yandex.ru");
    if (!$mail->Send()) {
        $result = "Ошибка отправки формы: " . $mail->ErrorInfo;
    } else {
        $result = 'Спасибо, ' . $_POST['name'] . '! Скоро мы с Вами свяжемся!';
    }
} else {
    $result = 'Ой, что-то пошло не так. Отправка данных не выполнена, попробуйте позднее!';
}
echo $result;
?>