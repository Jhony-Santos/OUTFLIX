$(document).ready(function(){ 

   $("#entrar").click(function(){
    nome=$("#login").val();
    senha=$("#senha").val();
    
    conferirUsuario(nome,senha);

   });

    $("#btVerFilmes").click(function(){
        window.location.href="index.html";
    });
    $("#btCadastrar").click(function(){   
        window.location.href="cadastro-user.html";        
    });
    $("#btRecSenha").click(function(){   
        window.location.href="pag-RecSenha.html";
    });
    $("#btAdmLogin").click(function(){   
        window.location.href="login-adm.html";
    });
    
});


function conferirUsuario(nome,senha){
   $.ajax({
    data:{
        ajax_login: nome,
        ajax_senha: senha,
    },
    type:"POST",
    url:"php/index-login.php",
    dataType:"json",

    error:function(){ 
        alert("NÃO ESTÁ HAVENDO RETORNO DO PHP !!!");
    }, 
    
    success:function(retorno){
        if(retorno['autenticado']){
            alert("USUÁRIO AUTENTICADO");   
            window.location.href="index.html"; 

        }else{            
            alert("USUÁRIO NÃO AUTENTICADO");
        }
    }



   });

};