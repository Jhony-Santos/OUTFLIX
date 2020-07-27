<?php
include "php-ConexaoBanco.php";
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}
$User = $_SESSION['usuario'];

$ListUser = mysqli_query($rcon,"SELECT permissao FROM usuarios WHERE login = '$User';");
$permissao = mysqli_fetch_assoc($ListUser);
/*
if($Perm == 10){
    $retorno[0]["perm"]="true";
}else{
    $retorno[0]["perm"]="false";
}*/
echo json_encode($retorno[0]["perm"] = $permissao["permissao"]);
?>

