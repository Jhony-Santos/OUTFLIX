$(document).ready(function(){
    $("#SALVAR").click(function(){
        alert("eu amo isso, eu faço isso, na outra parte eu nem existo");
        fCadastrarSQL();
    });
});

function fCadastrarSQL(){

    $.ajax({
        data:{
            nome:$("#nome").val(),
            sobrenome:$("#sobrenome").val(),
            email:$("#email").val(),
            cpf:$("#cpf").val(),
            rg:$("#rg").val(),
            cep:$("#cep").val(),
            rua:$("#rua").val(),
            numero:$("#numero").val(),
            complemento:$("#complemento").val(),
            nascimento:$("#nascimento").val(), 
         
        },
        type:"POST",
        url:'PHP/cadastrar.php',
        dataType:"json",


    });

}

	

