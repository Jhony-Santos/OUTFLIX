<?php
include 'php-ConexaoBanco.php';


$login = $_POST['ajax_login'];
$sobrenome = $_POST['ajax_sobrenome'];
$email = $_POST['ajax_email'];
$cpf = $_POST['ajax_cpf'];
$rg = $_POST['ajax_rg'];
$nascimento =  $_POST['ajax_nascimento'];
$cep =  $_POST['ajax_cep'];
$rua =  $_POST['ajax_rua'];
$numero = $_POST['ajax_numero'];
$complemento =$_POST['ajax_complemento'];
$senha = md5($_POST['ajax_senha']);

//VALOR INICIAL
$permissao="1";#VALOR
# 1 = CONTRA FREE
# 2 = CONTA PRIME
# 10 = CONTA ADM/PRIME



mysqli_query($rcon, "CREATE TABLE IF NOT EXISTS usuarios (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    login varchar(20) UNIQUE DEFAULT NULL,
    nome varchar(20) DEFAULT NULL,
    email varchar(25) DEFAULT NULL,
    cpf varchar(20) UNIQUE DEFAULT NULL,
    rg varchar(20) UNIQUE DEFAULT NULL,
    nascimento varchar(10) DEFAULT NULL,
    cep varchar(30) DEFAULT NULL,
    rua varchar(30) DEFAULT NULL,
    numero varchar(20) DEFAULT NULL,
    complemento varchar(30) DEFAULT NULL,
    confirmado tinyint DEFAULT 0,
    senha varchar(50) DEFAULT NULL,
    permissao int
);");

mysqli_query($rcon, "INSERT INTO usuarios (login,nome,email,cpf,rg,nascimento,cep,rua,numero,complemento,senha,permissao)
values ('$login','$nome','$email','$cpf','$rg','$nascimento','$cep','$rua','$numero','$complemento','$senha', '$permissao');");


$id=$rcon->insert_id; 
$md5=md5($id);

$link='http://localhost/projeto/OUTFLIX_empresa_atual_v11/php/confirmar_Email.php?usr='.$md5;


//  <<<<< DEFINIÇÕES DE EMAIL >>>>>
$tituloEmail = "CONFIRMAÇÃO DE CADASTRO ";
$mensagem="Clique no link abaixo para confirmar seu e-mail na TwoBrothers Streams:<br>
<a href=".$link.">Confirmar Email TwoBrothers</a>";



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





?>








