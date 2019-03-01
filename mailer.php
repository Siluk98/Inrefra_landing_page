<?php
    $adminMail = "akulis@akulis.cba.pl";

    function checkPost($arg)
    {
        if(isset($_POST[$arg]) && !empty($_POST[$arg]))
            return true;
        else
            return false;
    }

    function scriptEscaper(&$arg)
    {
        $arg = str_ireplace("script", "S_C_R_I_P_T",$arg);
    }
    
    if(checkPost("subject") &&
    checkPost("message") &&
    checkPost("from"))
    {
        $message = $_POST["message"];
        $subject = $_POST["subject"];
        $from = $_POST["from"];
        $headers = "From: ".$from;

        scriptEscaper($message);
        scriptEscaper($subject);
        scriptEscaper($headers);

        mail($adminMail,$subject,$message,$headers);
    }
    else
    {
        echo "data_error";
        exit();
    }
    
?>