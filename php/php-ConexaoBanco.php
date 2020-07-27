<?php
$user_SQL = "root";
$password_SQL = "";
$database = "twobrothers";
date_default_timezone_set("America/Sao_Paulo");

# O hostname deve ser sempre localhost 
$hostname = "localhost:3306";

# Conecta com o servidor de banco de dados 
$rcon = mysqli_connect($hostname, "root", "") or die(' Erro na conexão ');

try{
    $pdo=new PDO('mysql:host=localhost;dbname=twobrothers', 'root', '');

}catch(PDOExecption $e ){
    echo "falha:".$e->getMessage();

}

?>