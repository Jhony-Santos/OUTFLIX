<?php



$usuario=$_POST['nome'];
$senha=$_POST['senha'];


$conexao=mysqli_connect("localhost:3306","root","","users");

$tabela=mysqli_query($conexao, "SELECT * FROM  adm WHERE id='1' ");




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















