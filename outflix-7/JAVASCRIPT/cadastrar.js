$(document).ready(function(){    
    $("#SALVAR").click(function(){           
       //alert("VOCÊ CLICOU NO BOTÃO SALVAR");

        nome=$("#nome").val();
        sobrenome=$("#sobrenome").val();
        email=$("#email").val();
        cpf=$("#cpf").val();
        rg=$("#rg").val();
        nascimento=$("#nascimento").val();
        cep=$("#cep").val();
        rua=$("#rua").val();
        numero=$("#numero").val();
        complemento=$("#complemento").val();
        senha=$("#senha").val();
     
         
        //fConferirCampos();
        //fCamposVazios(nome, sobrenome, email, cpf, rg, nascimento, cep, rua, numero);        
        fCadastrar();
       

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
    if(rg == ""){
        $("#rg").addClass("campoSemPreenchimento");
    }else{
        $("#rg").removeClass("campoSemPreenchimento");
    }
    if(nascimento == ""){
        $("#nascimento").addClass("campoSemPreenchimento");
    }else{
        $("#nascimento").removeClass("campoSemPreenchimento");
    }
    if(cep==""){
        $("#cep").addClass("campoSemPreenchimento");
    }else{
        $("#cep").removeClass("campoSemPreenchimento");
    }
    if(rua==""){
        $("#rua").addClass("campoSemPreenchimento");
    }else{
        $("#rua").removeClass("campoSemPreenchimento");
    }
    if(numero==""){
        $("#numero").addClass("campoSemPreenchimento");
    }else{
        $("#numero").removeClass("campoSemPreenchimento");
    }
    if(senha==""){
        $("#senha").addClass("campoSemPreenchimento");
    }
    else{
        $("#senha").removeClass("campoSemPreenchimento");
    }



}



function fConferirCampos(){
    if(nome !="" && sobrenome != "" && email  !="" && cpf != "" && rg != "" && nascimento != "" && cep != "" && rua != "" && numero != "" && senha!=""){
        fCadastrar();                    
    }else if(nome == ""|| sobrenome == "" || email == "" || cpf == "" || rg == "" || nascimento == "" || cep == "" || rua == "" || numero == "" ||senha==""){            
            alert("PREENCHA CORRETAMENTE, POR FAVOR");
            fCamposVazios();
    }else{
           alert("NÃO HÁ PORQUE CHEGAR ATÉ AQUI");
        }
}


function fCadastrar(){
     
    $.ajax({
        data:{
            nome:$("#nome").val(),
            sobrenome:$("#sobrenome").val(),
            nascimento:$("#nascimento").val(),
            email:$("#email").val(),
            cpf:$("#cpf").val(),
            rg:$("#rg").val(),
            cep:$("#cep").val(),
            rua:$("#rua").val(),
            numero:$("#numero").val(),
            complemento:$("#complemento").val(),   
            senha:$("#senha").val(),                 
            
        },
        type:"POST",
        url:'../PHP/cadastrar.php',
        dataType:"json",
        
    });
};

