$(document).ready(function(){
    $("#logar").click(function(){
        var usuario=$("#usuario").val();
        var senha=$("#senha").val();
        funcaoEntrar(usuario,senha);
    });
    $("#bCadastrar").click(function(){   
        alert("CALMA!!! AINDA NAO TERMINAMOS O PROJETO ");
        window.location.href="PAGINADECADASTRO/cadastrando.html";        
    });
    $("#btRecSenha").click(function(){   
        window.location.href="paginas/pag-RecSenha.html";
    });




    
});



