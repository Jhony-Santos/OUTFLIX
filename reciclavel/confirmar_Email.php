<?php
include "php-ConexaoBanco.php";


$id= $pdo->lastInsertId();
$md5=md5($id); 


$u = $_GET['u']; 

 
     
     if(!empty($u)){	
	     $pdo->query(" UPDATE usuarios SET confirmado='1' WHERE md5(id)='$u' ");
          echo "CADASTRADO COM SUCESSO, BORA ASSISTIR";
          //header('Location: http://localhost/projeto/OUTFLIX_empresa_atual_v9/index-login.html');
     }else{
          echo "ERRO. NÃO CONSEGUIMOS CONFIRMAR SEU CADASTRO";
     }


    



	  
?>

