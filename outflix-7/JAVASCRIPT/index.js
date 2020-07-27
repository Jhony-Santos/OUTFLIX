$(document).ready(function(){ 
    
   $("#entrar").click(function(){
    
    
    nome=$("#nome").val(),
    senha=$("#senha").val(),
    
    conferirUsuario();
    

   });

    $("#bCadastrar").click(function(){   
        alert("PARABÉNS VOCÊ É UM USUÁRIO DE NÚMERO ONEEEE E GANHARÁ UM MUITOOO DESCONTO ESPECIAL");
        window.location.href="../PAGINAS/cadastrar.html";        
    });
    $("#btRecSenha").click(function(){   
        window.location.href="../PAGINAS/pag-RecSenha.html";
    });


    
});


function conferirUsuario(){
   $.ajax({
    data:{
        nome:$("#nome").val(),
        senha:$("#senha").val(),
    },
    type:"POST",
    url:"../PHP/logar.php",
    dataType:"json",

    error:function(){ 
        alert("NÃO ESTÁ HAVENDO RETORNO DO PHP !!!");
    }, 
    
    success:function(retorno){
        if(retorno['autenticado']){
            alert("USUÁRIO AUTENTICADO");   
            window.location.href="../PAGINAS/filmesPublicos.html"; 

        }else{            
            alert("USUÁRIO NÃO AUTENTICADO");
        }
    }



   });

};

