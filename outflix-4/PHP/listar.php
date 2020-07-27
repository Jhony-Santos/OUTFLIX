<?php



$conexao=mysqli_connect("localhost:3306","root","","users");


$filmes=mysqli_query($conexao, "SELECT * FROM  adm");

$i=0;

while($contador = mysqli_fetch_assoc($filmes)){


  $retorno[$i]['id do filme']=$contador["id filme"];
  $retorno[$i]["nome do filme"]=$contador["nome do filme"];

  $i++;
    
   
}
    
echo json_encode($retorno);

?>



<script>

success:function($retorno){

  var conteudo="";

  for ( var cont=0; cont<retorno.length;cont++){

    conteudo+="<tr>";
    conteudo += "<td>" + retorno[i]["id do filme"]  + "</td>";
    conteudo += "<td>" + retorno[i]["nome do filme"] + "</td>";
    conteudo+="<tr>";
  }

  $("#tabelaFilmes").html(conteudo);

  // tabela filmes é a sua table

}




</script>







