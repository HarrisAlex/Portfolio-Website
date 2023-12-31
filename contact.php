<?php
/*
    Response Codes:
    0 - Success
    1 - Error
*/

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input fields
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    sanitize_input($name);
    sanitize_input($email);
    sanitize_input($subject);
    sanitize_input($message);

    // Validate input
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "1";
    } else {
        // Send email (or handle the data in the way you prefer)
        $messageToSend = "
            <html>
                <head>
                    <title>Message from {$name}</title>
                </head>
                <body>
                    <h2>Message from: {$name}</h2>
                    <h3>Subject: {$subject}</h3>
                    <br>
                    <p>{$message}</p>
                    <br><br>
                    <p><i>You can reply to them at: {$email}</i></p>
                </body>
            </html>
        ";
        
        
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=iso-8859-1';
        $headers[] = 'From: Personal Website <alexharris.design>';
        
        mail(getenv('EMAIL'), "Personal Website Contact Form", $messageToSend, implode("\r\n", $headers));

        echo "0";
    }
}

function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>