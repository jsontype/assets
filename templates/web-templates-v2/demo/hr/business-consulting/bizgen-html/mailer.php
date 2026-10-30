<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize form fields
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r", "\n"), array(" ", " "), $name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $query = htmlspecialchars(trim($_POST["query"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validate required fields
    if (empty($name) || empty($message) || empty($query) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Oops! Please complete all required fields correctly.";
        exit;
    }

    // Recipient email
    $recipient = "support@reactheme.com";

    // Email subject
    $subject = "Bizgen Contact Form Submission: $name";

    // Build email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Query: $query\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $email_headers = "From: $name <$email>";

    // Send email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>