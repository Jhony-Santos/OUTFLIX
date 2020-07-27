<?php



$usuario=$_POST['nome'];
$senha=$_POST['senha'];


$conexao=mysqli_connect("localhost:3306","root","","users");

$tabela=mysqli_query($conexao, "SELECT * FROM  adm  ");



$retorno=array();
$retorno['autenticado']=false;
while($contador = mysqli_fetch_assoc($tabela)){ 

    if($contador['usuario'] == $usuario && $contador['senha'] == $senha){          
      $retorno['autenticado'] = true;       
    break;
    }   
 
}  

echo json_encode($retorno);





?>















