<?php
     
    
$host="mysql:dbname=users; host=localhost";
$usuario="root";
$password="";



try{
     $pdo=new PDO($host,$usuario,$password);

}catch(PDOExecption $e ){
     echo "falha:".$e->getMessage();

}

     
$nome = addslashes($_POST['nome']);
$sobrenome = addslashes($_POST['sobrenome']);
$email = addslashes($_POST['email']);
$cpf = addslashes($_POST['cpf']);
$rg = addslashes($_POST['rg']);
$nascimento = addslashes($_POST['nascimento']);
$cep = addslashes($_POST['cep']);
$rua = addslashes($_POST['rua']);
$numero = addslashes($_POST['numero']);
$complemento = addslashes($_POST['complemento']);
$senha=md5(addslashes($_POST['senha']));


$pdo->query("INSERT  into  usuarios SET nome='$nome',sobrenome='$sobrenome', email='$email', cpf='$cpf', rg='$rg', nascimento='$nascimento',
cep='$cep', rua='$rua', numero='$numero', complemento='$complemento', senha='$senha'");


 

 $id= $pdo->lastInsertId(); 
 $md5=md5($id); 

 $tituloEmail = "CONFIRMAÇÃO DE CADASTRO ";
 
 $emailDigitado=$_POST['email'];



$link='http://localhost/outflix_empresa_atual_v3/CADASTRANDO/PHP/confirmacao_Email.php?u='.$md5;

$mensagem="CLIQUE AQUI PARA CONFIRMAR ".$link;

date_default_timezone_set('Etc/UTC');
require '../PHPMailer/PHPMailerAutoload.php';
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








