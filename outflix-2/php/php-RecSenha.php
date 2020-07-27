<?php
//PUXANDO DO JS
$emailDig = $_POST["ajax_Email"];


$user_SQL = "root"; 
$password_SQL = "root"; 
$database = "Contas"; 

# O hostname deve ser sempre localhost 
$hostname = "localhost"; 

# Conecta com o servidor de banco de dados 
$rcon = mysqli_connect($hostname, $user_SQL, $password_SQL) or die(' Erro na conexão '); 

# Seleciona o banco de dados 
mysql_select_db($database) or die('Erro na seleção do banco');

# Executa a query desejada
$query = "SELECT email FROM tabela";  //VERIFICAR SE IRÁ FUNCIONAR COM $EmailDig!!!!!!!!!!!!!!
$resultado = mysql_query($rcon,$query) or die('Erro na query:'.$query.' '.mysql_error()); 

# Exibe os registros na tela 
while ($registro = mysql_fetch_array($result_query)){ 
  $email = $registro[email];

  //Esse
  print $mail;
  //ou
  print $registro[email];

}


?>