$(document).ready(function(){
    $("#btRecSenha").click(function(){
        alert("Botão funcionando");      
        var email = $("#inpEmail").val();
        fLocalEnviar(email);
    });
});

function fLocalEnviar(email){
    $.ajax({
        type: "POST",
        url: "../php/php-RecSenha.php",
        data: {
            ajax_email: email,
        },
        success: function(){
            alert("E-mail enviado, caso você não receba, tente novamente mais tarde, caso persista, seu e-mail não está cadastrado.")
        },
        
    });

}

