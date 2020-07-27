$(document).ready(function(){    
    $("#SALVAR").click(function(){           
       //alert("VOCÊ CLICOU NO BOTÃO SALVAR");

        login=$("#login").val();
        nome=$("#nome").val();
        email=$("#email").val();
        cpf=$("#cpf").val();
        rg=$("#rg").val();
        nascimento=$("#nascimento").val();
        cep=$("#cep").val();
        rua=$("#rua").val();
        numero=$("#numero").val();
        complemento=$("#complemento").val();
        senha=$("#senha").val();
        confSenha=$("#confSenha").val();
        fConferirCampos(login,nome,nascimento,email,cpf,rg,cep,rua,numero,complemento,senha,confSenha);
    });
});


function fCamposVazios(){
    if(login==""){
     $("#login").addClass("campoSemPreenchimento");        
    }else{
        $("#nome").removeClass("campoSemPreenchimento");
    }    
    if(nome==""){
        $("#nome").addClass("campoSemPreenchimento");
    }else{
        $("#nome").removeClass("campoSemPreenchimento");
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
    if(confSenha==""){
        $("#confSenha").addClass("campoSemPreenchimento");
    }
    else{
        $("#confSenha").removeClass("campoSemPreenchimento");
    }



}



function fConferirCampos(login,nome,nascimento,email,cpf,rg,cep,rua,numero,complemento,senha,confSenha){
    if(login !="" && nome != "" && email  !="" && cpf != "" && rg != "" && nascimento != "" && cep != "" && rua != "" && numero != "" && senha != "" && confSenha != ""){
        if(senha != confSenha){
            alert("Senhas não coincidem");   
        }else{
            fCadastrar(login,nome,nascimento,email,cpf,rg,cep,rua,numero,complemento,senha,confSenha);                    
        }
    }else if(login == ""|| nome == "" || email == "" || cpf == "" || rg == "" || nascimento == "" || cep == "" || rua == "" || numero == "" ||senha == "" || confSenha == "") {            
            alert("PREENCHA CORRETAMENTE, POR FAVOR");
            fCamposVazios();
    }
}


function fCadastrar(login,nome,nascimento,email,cpf,rg,cep,rua,numero,complemento,senha){
     
    $.ajax({
        data:{
            ajax_login: login,
            ajax_nome: nome,
            ajax_nascimento: nascimento,
            ajax_email: email,
            ajax_cpf: cpf,
            ajax_rg: rg,
            ajax_cep: cep,
            ajax_rua: rua,
            ajax_numero: numero,
            ajax_complemento: complemento,   
            ajax_senha: senha,
            
        },
        type:"POST",
        url:'php/cadastrar-user.php',
        success: function(){
            alert("Cadastrado com Sucesso!");
            window.location.href = "index-login.html";
        }
    });
};

