<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $fullName = htmlspecialchars($_POST['fullName']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "support@gemasupaint.co.ke";
    $subject = "New Message from Gemasu Website";

    $body = "Full Name: $fullName\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n\n";
    $body .= "Message:\n$message";

    $headers = "From: support@gemasupaint.co.ke\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>