$(document).ready(function(){    
    //$("#logar").click(function(){
    //    //alert ("fazendo autenticação");
    //    
    //    nome=$("#nome").val();
    //    senha=$("#senha").val();
        

        //Autenticacao(); 


    
    $("#bCadastrar").click(function(){   
        alert("PARABÉNS VOCÊ É UM USUÁRIO DE NÚMERO ONEEEE E GANHARÁ UM MUITOOO DESCONTO ESPECIAL");
        window.location.href="../PAGINAS/cadastrar.html";        
    });
    $("#btRecSenha").click(function(){   
        window.location.href="../PAGINAS/pag-RecSenha.html";
    });


    
});

//function Autenticacao(){
//    $.ajax({dos
//    data:{
//        nome:$("#nome").val(),
//        senha:$("#senha").val(),
//    },
//    type:"POST",
//    url:'PHP/verificarUsuario.php',
//    dataType:"json",    
//
//    });
//
//};

