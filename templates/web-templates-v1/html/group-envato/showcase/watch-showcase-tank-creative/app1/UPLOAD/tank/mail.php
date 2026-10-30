<?php 

// ==================================================
// uniMail - v.1.0.1
// Universal PHP Mail Feedback Script
// More info: https://github.com/agragregra/uniMail
// ==================================================


$method = $_SERVER['REQUEST_METHOD'];

// Initialize the message variable
$message = "";

// Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$value = nl2br(htmlspecialchars($value)); // Convert newlines to <br> and escape HTML special characters
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f3f3f3;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid; width: 100px; vertical-align: top;'><strong>$key:</strong></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
		}
	}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$value = nl2br(htmlspecialchars($value)); // Convert newlines to <br> and escape HTML special characters
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f3f3f3;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid; width: 100px; vertical-align: top;'><strong>$key:</strong></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
		}
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

// Set content-type header for sending HTML email 
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
 
// Additional headers 
$headers .= 'From: <'.$admin_email.'>' . "\r\n"; 
$headers .= $reply_email . "\r\n";

mail($admin_email, adopt($form_subject), $message, $headers );
