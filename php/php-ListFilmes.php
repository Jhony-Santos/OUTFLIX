<?php
include "php-ConexaoBanco.php";



$filmes = mysqli_query($rcon, "SELECT * FROM filmes;");

$id=1;
while($info = mysqli_fetch_assoc($filmes)){
    $retorno[$id]["nomeFilme"] = $info["nome"];
    $retorno[$id]["nomeID"] = $info["nomeID"];
    $retorno[$id]["arquivoIMG"] = $info["arquivoIMG"];
    $retorno[$id]["linkYoutube"] = $info["linkYoutube"];

    $id++;
}

$retorno[0]["totalFilmes"] = mysqli_num_rows($filmes);

echo json_encode($retorno);

?>
