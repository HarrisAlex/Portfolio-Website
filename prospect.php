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