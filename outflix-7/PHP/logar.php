<?php
    

    
$nome=trim($_POST['nome']);
$senha=trim(md5($_POST['senha']));




$conexao=mysqli_connect("localhost:3306","root","","users");

$banco=mysqli_query($conexao,"SELECT * FROM usuarios WHERE confirmado='1' ");



//echo "<pre>";

$retorno=array();
$retorno['autenticado']=false;
while($contador = mysqli_fetch_assoc($banco)){ 
    //var_dump($contador);
    //var_dump($_POST);
    //var_dump($senha);
    if($contador['nome'] == $nome && $contador['senha'] == $senha){          
      $retorno['autenticado'] = true;       
    break;
    }   
 
}  

echo json_encode($retorno);















?>