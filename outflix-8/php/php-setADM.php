<?php
include "php-ConexaoBanco.php";
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}
$User = $_SESSION["usuario"];
mysqli_query($rcon,"UPDATE usuarios SET permissao = 10 WHERE login = '$User';");
?>