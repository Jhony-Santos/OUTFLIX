<?php
    
$host="mysql:dbname=users; host=localhost";
$usuario="root";
$password="";
       
    try{
         $pdo=new PDO($host,$usuario,$password);
    
    }catch(PDOExecption $e ){
         echo "falha:".$e->getMessage();
    
    }
    
$nome=addslashes($_POST['nome']);
$senha=md5($_POST['senha']);




$sql = $pdo->query(" SELECT * FROM usuarios WHERE confirmado='1' and nome='$nome' and senha='$senha' ");

if($sql->rowCount() > 0 ){ 
    header("Location:http://localhost/versionamento/OUTFLIX_v4/PAGINAS/filmesPublicos.html");      
    //iniciar_Sessao($nome);   

}else{    
    echo "LOGIN/SENHA INCORRETOS";
}



function iniciar_Sessao($nome){
    if(session_status() !== PHP_SESSION_ACTIVE){
        session_start();    
    }
    
   echo $_SESSION['NOME DO USUÁRIO']=$nome;






}




?>