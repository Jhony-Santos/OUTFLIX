<?php
    


$conexao=mysqli_connect("Localhost:3306","root","","users");

$id= $conexao->insert_id;

$md5=md5($id);



$u = $_GET['u'];   





     if(!empty($u)){	
	     mysqli_query($conexao, "UPDATE usuarios SET confirmado='1' WHERE md5(id)='$u' ");
          echo "CADASTRADO COM SUCESSO, BORA ASSISTIR";
          header('Location: http://localhost/versionamento/OUTFLIX_v6/PAGINAS/indexxxx.html');
     }else{
          echo "ERRO. NÃO CONSEGUIMOS CONFIRMAR SEU CADASTRO";
     }



     







	  
?>

