<?php
include "php-ConexaoBanco.php";
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}
$User = $_SESSION['usuario'];
$EscolhaFilme = $_POST["ajax_nomeFilme"];

$ListUser = mysqli_query($rcon,"SELECT permissao FROM usuarios WHERE login = '$User';");
$permissao = mysqli_fetch_assoc($ListUser);

$Perm = $permissao["permissao"];

if($Perm <= 1) {
    $retorno[0]["perm"] = "free";
    echo json_encode($retorno);
}
if($Perm >= 2){
    $query = mysqli_query($rcon,"SELECT linkYoutube FROM filmes WHERE nomeID = '$EscolhaFilme';");
    $info = mysqli_fetch_assoc($query);

    $retorno[0]["perm"] = "prime";
    $retorno[1]["link"] = $info["linkYoutube"];
    echo json_encode($retorno);
}

?>


