<?php
include "php-ConexaoBanco.php";
     
$nome = $_POST['ajax_nome'];
$sobrenome = $_POST['ajax_sobrenome'];
$email = $_POST['ajax_email'];
$cpf = $_POST['ajax_cpf'];
$senha= md5($_POST['ajax_senha']);
$perm = $_POST['ajax_perm'];
$confirmado = $_POST['ajax_confirm'];

mysqli_query($rcon,"CREATE TABLE IF NOT EXISTS usuarios(
     ID INT NOT NULL AUTO_INCREMENT UNIQUE,
     nome VARCHAR(60) ,
     sobrenome VARCHAR(60) ,
     email VARCHAR(40) ,
     cpf VARCHAR(20) ,
     senha VARCHAR(15) ,
     perm VARCHAR(2) ,
     confirmado VARCHAR(2) 
     );"
 );

/*
mysqli_query($rcon,
     "INSERT INTO usuarios (nome, sobrenome, email, cpf, senha, perm, confirmado) 
     VALUES ('$nome','$sobrenome','$email','$cpf','$senha','$perm','$confirmado');"); */

$query = mysqli_query($rcon, "INSERT INTO usuarios (nome,sobrenome,email,cpf,senha,perm,confirmado) 
VALUES ('123','123','123','123','123','123','123');");





/*
 $id = $pdo->lastInsertId(); 
 $md5=md5($id);

 $tituloEmail = "CONFIRMAÇÃO DE CADASTRO";
 
 $emailDigitado=$_POST['ajax_email'];


$link='http://localhost/projeto/OUTFLIX_empresa_atual_v9/php/confirmacao_Email.php?u='.$md5;



$mensagem="CLIQUE AQUI PARA CONFIRMAR ".$link;

date_default_timezone_set('Etc/UTC');
require 'PHPMailer/PHPMailerAutoload.php';
$mail= new PHPMailer;
$mail->IsSMTP(); 
$mail->CharSet = 'UTF-8';   
$mail->SMTPDebug = 2;       // 0 = nao mostra o debug, 2 = mostra o debug
$mail->SMTPAuth = true;     
$mail->SMTPSecure = 'ssl';  
$mail->Host = 'smtp.gmail.com'; 
$mail->Port = 465; 
$mail->Username = 'jhony.jpn@gmail.com'; 
$mail->Password = 'united2828';
$mail->SetFrom('jhony.jpn@gmail.com', 'TwoBrothers');
$mail->addAddress($email);
$mail->Subject = $tituloEmail;
$mail->msgHTML($mensagem);       
$mail->send();
*/

?>