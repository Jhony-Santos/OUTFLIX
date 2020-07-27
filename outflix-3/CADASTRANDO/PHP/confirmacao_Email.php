<?php


$host="mysql:dbname=users; host=localhost";
$usuario="root";
$password="";



try{
     $pdo=new PDO($host,$usuario,$password);

}catch(PDOExecption $e ){
     echo "falha:".$e->getMessage();

}


$id= $pdo->lastInsertId();
$md5=md5($id); 


$u = $_GET['u']; 

 
     
     if(!empty($u)){	
	     $pdo->query(" UPDATE usuarios SET confirmado='1' WHERE md5(id)='$u' ");
          echo "CADASTRADO COM SUCESSO, BORA ASSISTIR";
          header('Location:http://localhost/outflix_empresa_atual_v3/indexxxx.html');
     }else{
          echo "ERRO. NÃO CONSEGUIMOS CONFIRMAR SEU CADASTRO";
     }





	  
?>

