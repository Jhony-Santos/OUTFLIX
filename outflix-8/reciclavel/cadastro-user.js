$(document).ready(function(){    
    $("#SALVAR").click(function(){           
        nome=$("#nome").val();
        sobrenome=$("#sobrenome").val();
        email=$("#email").val();
        cpf=$("#cpf").val();
        senha=$("#senha").val();
        perm=$("#perm").val();
        confirmado=$("#confirmado").val();
         
        fConferirCampos();
        fCamposVazios(nome, sobrenome, email, cpf, perm, confirmado);        
        
       

    });
});


function fCamposVazios(){
    if(nome==""){
     $("#nome").addClass("campoSemPreenchimento");        
    }else{
        $("#nome").removeClass("campoSemPreenchimento");
    }    
    if(sobrenome==""){
        $("#sobrenome").addClass("campoSemPreenchimento");
    }else{
        $("#sobrenome").removeClass("campoSemPreenchimento");
    }
    if(email==""){
        $("#email").addClass("campoSemPreenchimento");
    }else{
        $("#email").removeClass("campoSemPreenchimento");
    }
    if(cpf==""){
        $("#cpf").addClass("campoSemPreenchimento");
    }else{
        $("#cpf").removeClass("campoSemPreenchimento");
    }
    if(senha==""){
        $("#senha").addClass("campoSemPreenchimento");
    }
    else{
        $("#senha").removeClass("campoSemPreenchimento");
    }



}



function fConferirCampos(){
    if(nome !="" && sobrenome != "" && email  !="" && cpf != "" && senha!=""){
        fCadastrar(nome,sobrenome,email,cpf,senha,perm,confirmado);                    
    }else if(nome == ""|| sobrenome == "" || email == "" || cpf == "" ||senha==""){            
            alert("PREENCHA CORRETAMENTE, POR FAVOR");
            fCamposVazios();
    }else{
           alert("NÃO HÁ PORQUE CHEGAR ATÉ AQUI");
        }
}


function fCadastrar(){
     
    $.ajax({
        data:{
            ajax_nome: nome,
            ajax_sobrenome: sobrenome,
            ajax_email: email,
            ajax_cpf: cpf, 
            ajax_senha: senha, 
            ajax_perm: perm,
            ajax_confirm: confirmado  
        },
        type:"POST",
        url:"php/cadastrar-user.php",
        error: function(){
            alert("Infelizmente não houve conexão com o servidor, tente novamente mais tarde.");
        },
        succes: function(){
            alert("Deu Boa");    
        }
        
    });
};

