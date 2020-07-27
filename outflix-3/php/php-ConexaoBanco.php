<?php
$user_SQL = "root"; 
$password_SQL = "root"; 
$database = "contas"; 

# O hostname deve ser sempre localhost 
$hostname = "localhost:3306"; 

# Conecta com o servidor de banco de dados 
$rcon = mysqli_connect($hostname,$user_SQL,$password_SQL,$database) or die(' Erro na conexão '); 


?>