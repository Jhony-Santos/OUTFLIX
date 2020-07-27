<?php

if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}   



$User =$_POST['nome'];

$_SESSION['usuario'] = $User;

$conexao=mysqli_connect("localhost:3306","root","","users");

$retornoBanco=mysqli_query($conexao, " SELECT permissao FROM  usuarios where usuario=$User ");



$_SESSION['permissao'] = $retornoBanco;


















?>