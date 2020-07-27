<?php
include "php-ConexaoBanco.php";

$id=$rcon->insert_id;

$md5=md5($id);

$usr = $_GET['usr'];   
     if(!empty($usr)){	
	     mysqli_query($rcon, "UPDATE usuarios SET confirmado='1' WHERE md5(id)='$usr' ");
          echo "CADASTRADO COM SUCESSO, BORA ASSISTIR";
          header('Location: http://localhost/projeto/OUTFLIX_empresa_atual_v11/index-login.html');
     }else{
          echo "ERRO. NÃO CONSEGUIMOS CONFIRMAR SEU CADASTRO";
     }



     







	  
?>

