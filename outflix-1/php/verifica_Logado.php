<?php

if(session_status()===PHP_SESSIONS_NONE){
    session_start();

}

if(empty($_SESSION['usuario'])){
        header("Location:http://localhost/OUTFLIX_empresa_atual_v3/indexxxx.php");

}




?>