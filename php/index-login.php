<?php
include "php-ConexaoBanco.php";
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

$User=trim($_POST['ajax_login']);
$senha=trim(md5($_POST['ajax_senha']));

$_SESSION['usuario'] = $User;




$banco=mysqli_query($rcon,"SELECT * FROM usuarios WHERE confirmado='1'");


$retorno=array();
$retorno['autenticado']=false;
while($info = mysqli_fetch_assoc($banco)){

    if($info['login'] == $User && $info['senha'] == $senha){
        $retorno['autenticado'] = true;
    break;
    }
}
echo json_encode($retorno);
?>


