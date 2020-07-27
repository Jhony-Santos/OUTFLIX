$(document).ready(function(){
    $("#btEnviar").click(function(){
        var email = $("inpEmail").val();
        fLocalEnviar();
    });



});

function fLocalEnviar(){
    $.ajax({
        type: "POST",
        url: "../php/EnviarEmail.php",
        data: {
            ajax_Email: $("inpEmail").val(),
        },
        success: function(){
            alert("E-mail enviado, caso você não receba, tente novamente mais tarde, caso persista, seu e-mail não está cadastrado.")
        }
    });

}

