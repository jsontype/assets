<?php

// variable
$fromemail = 'any_site@my_site_com'; // from mail
$to = "your_email@site.com"; // to mail


// check data
if (!isset($_POST["fields"])) {
	die("No data"); 
}

$fields = $_POST["fields"];

if( empty($fields['name']) ) { 
	die("Please enter your name"); 
}

if( empty($fields['email']) ) { 
	die("No email"); 
}

if (!empty( $fields['code'] ) ) {
	die("ok"); 
}



$subject = "Site mail: " . $fields['subject'];
// subject massege
$subject = '=?utf-8?Q?'."\"".urlencode($subject)."\"".'?=';
$subject= str_replace("%","=",$subject);
$subject = str_replace("+","_",$subject);

// content massage
$name = $name ? $name : 'unknown';
$from   = 'Mail from'."<".$fromemail.">";
$mess = $mess ? $mess : 'unknown';
$message = "<b>Client name: </b> " . $fields['name'] . "<br>";
$message .= "<b>Client email: </b> " . $fields['email'] . "<br>";
/*$message .= "<b>Client phone: </b> ".$site."<br>";*/
$message .= "<b>Subject: </b> " . $fields['subject'] . "<br>";
$message .= "<b>Text:</b>\n" . $fields['text'] . "<br>";

$message .= "Sent: ".strftime("%a, %d %b %Y %H:%M:%S");
// end content massage


$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: Site Mail <" . $fromemail . ">\r\n"; 

if(mail($to, $subject, $message, $headers)){
	print 'Thank you for your message. It has been sent.';
} else {
	print 'email not send';
}

?>