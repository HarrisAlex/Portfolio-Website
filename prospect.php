<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_input(INPUT_POST, 'name');
        $company = filter_input(INPUT_POST, 'company');
        $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
        $description = filter_input(INPUT_POST, 'description');

        $email = filter_var($email, FILTER_VALIDATE_EMAIL);

        sanitize_input($name);
        sanitize_input($company);
        sanitize_input($email);
        sanitize_input($description);

        if (!empty($name) && !empty($company) && !empty($email) && !empty($description)) {
            $message = "
                <html>
                    <head>
                        <title>Message from {$name}</title>
                    </head>
                    <body>
                        <h2>Message from: {$name}</h2>
                        <p>{$name} has reached out about a project, representing {$company}. They supplied {$email} as a way to contact them.</p>
                        <br>
                        <p>Here's what they need:</p>
                        <br>
                        <p>{$description}</p>
                    </body>
                </html>
            ";

            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=iso-8859-1';
            $headers[] = 'From: Personal Website <alexharris.design>';

            mail(getenv('EMAIL'), "Personal Website Prospect", $message, implode("\r\n", $headers));

            echo 200;
        } else {
            echo 400;
        }
    }

    function sanitize_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>