<?php
    $adminMail = "admin@serwer37973.lh.pl";

    function checkPost($arg)
    {
        if(isset($_POST[$arg]) && !empty($_POST[$arg]))
            return true;
        else
		{
			echo $arg." is missing";
            return false;
		}
    }

    function scriptEscaper(&$arg)
    {
        $arg = str_ireplace("script", "S_C_R_I_P_T",$arg);
    }
    
    if(checkPost("name") &&
    checkPost("email") &&
    checkPost("email-content"))
    {
        $message = $_POST["email-content"];
        $subject = $_POST["name"];
        $from = $_POST["email"];
        $headers = "From: ".$from;

        scriptEscaper($message);
        scriptEscaper($subject);
        scriptEscaper($headers);

        mail($adminMail,$subject,$message,$headers);
		header("Location: index.html");
    }
    else
    {
        echo "data_error";
        exit();
    }
    
?>