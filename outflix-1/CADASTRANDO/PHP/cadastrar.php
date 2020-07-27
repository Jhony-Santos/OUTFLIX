<?php
    $nome=$_POST['nome'];
    //$sobrenome=$_POST["sobrenome"];
    //$email=$_POST["email"];
    //$cpf=$_POST["cpf"];
    //$rg=$_POST["rg"];
    //$cep=$_POST["cep"];
    //$rua=$_POST["rua"];
    //$numero=$_POST["numero"];
    //$complemento=$_POST["complemento"];
    //$nascimento=$_POST["nascimento"];    

    $conexao = mysqli_connect("localhost:3306", "root", "", "database");
    mysqli_query($conexao, "insert into usuarios(nome) values('".$nome."')");  





?>








