<?php
include "php-ConexaoBanco.php";

$nomeFilme = $_POST["ajax_nomeFilme"];
$nomeID = $_POST["ajax_nomeID"];
$genero = $_POST["ajax_genero"];
$dataLanc = $_POST["ajax_dataLanc"];
$linkYoutube = $_POST["ajax_link"];
$img = $_POST["ajax_nomeIMG"];

mysqli_query($rcon,"CREATE TABLE IF NOT EXISTS filmes(
    ID INT NOT NULL AUTO_INCREMENT UNIQUE,
    nome VARCHAR(60) NOT NULL UNIQUE,
    genero VARCHAR(20) NOT NULL,
    data_lancamento VARCHAR(15) NOT NULL,
    linkYoutube VARCHAR(80) NOT NULL UNIQUE,
    arquivoIMG VARCHAR(40) NOT NULL UNIQUE,
    nomeID VARCHAR(30) NOT NULL UNIQUE
    );");

mysqli_query($rcon, 
"INSERT INTO filmes (nome,genero,data_lancamento,linkYoutube,arquivoIMG,nomeID) 
VALUES ('$nomeFilme','$genero','$dataLanc','$linkYoutube','$img','$nomeID');");







?>