<?php
include "php-ConexaoBanco.php";

$usuario=$_POST['nome'];
$senha=$_POST['senha'];

$tabela=mysqli_query($rcon, "SELECT * FROM contas WHERE perm='10' ");




while($contador = mysqli_fetch_assoc($tabela)){
   
    $retorno=false;
    if($contador['usuario'] == $usuario && $contador['senha'] == $senha){          
      $retorno=true;
      echo json_encode($retorno);   
    break;
    }else{
      echo json_encode($retorno=false);
    }    
   
 
}  








?>















