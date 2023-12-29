<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['action']) and $_POST['action'] == 'subscribe' ) {
        $email = $_POST["email"];
        $subject = "New Client Ababil"; // Replace your Subject Here
        $to = "masrizalwae@gmail.com"; // Replace your Email Here
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/html\r\n";
        $message = "Subscribe Message"; // Replace Your Message Subscribe

        $messageBody = "Email: $email<br>Message: $pesan";

        if (mail($to, $subject, $messageBody, $headers)) {
            echo "success"; // Send response Success
        } else {
            echo "error"; // Send Response Failed Send Mail
        }
    } else {
        $nama = $_POST["nama"];
        $email = $_POST["email"];
        $nomorWA = $_POST["nomorWA"];
        $alamat = $_POST['alamat'];
        $paket = $_POST['paket']; 
        $pesan = $_POST['pesan'];
        
        /*$name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $subject = $_POST['subject']; // Replace your Subject Here*/

        $to = "masrizalwae@gmail.com"; // Replace your Email Here
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/html\r\n";

        $messageBody = "Name: $nama<br>Email: $email<br>Message: $pesan";

        if (mail($to, $subject, $messageBody, $headers)) {
            echo "success"; // Send response Success
        } else {
            echo "error"; // Send Response Failed Send Mail
        }
    }
}
