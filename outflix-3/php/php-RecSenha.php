<?php
include "php-ConexaoBanco.php";
$emailDig = $_POST["ajax_email"];

$result = mysqli_query($rcon, "SELECT * FROM Usuarios");


while($conta = mysqli_fetch_assoc($result)){
  echo $conta["nome"]."<br>";
  echo $conta["senha"]."<br>";
  echo $conta["email"]."<br>";


  $emailBanco = $conta["email"];


  if ($emailDig == $emailBanco ){
    echo json_encode("Email Existe");
  }
  else{
    echo json_encode("Conta Inexistente");
  }
  



}







?>