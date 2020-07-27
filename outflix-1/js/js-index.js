$(document).ready(function(){
    $("#logar").click(function(){
        var usuario=$("#usuario").val();
        var senha=$("#senha").val();
        funcaoEntrar(usuario,senha);
    });
    $("#bCadastrar").click(function(){   
        alert("PARABÉNS VOCÊ É UM USUÁRIO 10.000 E GANHARÁ UM DESCONTO ESPECIAL");
        window.location.href="CADASTRANDO/cadastrar.html";        
    });
    $("#btRecSenha").click(function(){   
        window.location.href="paginas/pag-RecSenha.html";
    });




    
});



