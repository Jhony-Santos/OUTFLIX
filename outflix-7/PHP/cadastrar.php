<?php

     
     
$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$email = $_POST['email'];
$cpf = $_POST['cpf'];
$rg = $_POST['rg'];
$nascimento =  $_POST['nascimento'];
$cep =  $_POST['cep'];
$rua =  $_POST['rua'];
$numero = $_POST['numero'];
$complemento =$_POST['complemento'];
$senha=md5($_POST['senha']);


$conn = mysqli_connect("localhost:3306", "root", "", "users");
 
mysqli_query($conn, "INSERT INTO usuarios(nome,sobrenome,email,cpf,rg,nascimento,cep,rua,numero,complemento,senha)values
('$nome','$sobrenome','$email','$cpf','$rg','$nascimento','$cep','$rua','$numero','$complemento','$senha') ");

 
//mysqli_query($conn, " INSERT into usuarios SET  (nome='$nome', sobrenome='$sobrenome', email='$email', cpf='$cpf', rg='$rg', nascimento='$nascimento', cep='$cep',
//rua='$rua', numero='$numero', complemento='$complemento', senha='$senha' ) ");



 $id= $conn->insert_id; 
 $md5=md5($id); 

 $tituloEmail = "CONFIRMAÇÃO DE CADASTRO ";
 
 //$emailDigitado=$_POST['email'];



$link='http://localhost/versionamento/OUTFLIX_v6/PHP/confirmacao_Email.php?u='.$md5;



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





?>








