$(document).ready(function(){
    $("#btConfirmar").click(function(){
        alert("Operação confirmada!");
        fLocalCadastrar();
    });
    $("#btCancelar").click(function(){
        alert("Operação cancelada!");
    });
});


function fLocalCadastrar(){
    $.ajax({
        type: "POST",
        beforeSend : function(){
            //TELA DE LOADING
            $("#carregando").html(
            '<div id="loader" class="loader">'+
                '<div class="loader-inner">'+
                    '<div class="loader-line-wrap">'+
                        '<div class="loader-line"></div>'+
                    '</div>'+
                    '<div class="loader-line-wrap">'+
                        '<div class="loader-line"></div>'+
                    '</div>'+
                    '<div class="loader-line-wrap">'+
                        '<div class="loader-line"></div>'+
                    '</div>'+
                    '<div class="loader-line-wrap">'+
                        '<div class="loader-line"></div>'+
                    '</div>'+
                    '<div class="loader-line-wrap">'+
                        '<div class="loader-line"></div>'+
                    '</div>'+
                '</div>'+
            '</div>'
            );
            //FIM DA TELA DE LOGIN - INCLUI CODIGO NO CSS
        },
        data: {
        ajax_nomeFilme: $("#inpNomeFilme").val(),
        ajax_nomeID: $("#inpNomeID").val(),
        ajax_genero: $("#inpGenero").val(),
        ajax_dataLanc: $("#inpData").val(),
        ajax_link: $("#inpLink").val(),
        ajax_nomeIMG: $("#inpNomeIMG").val()
        },
        url: "php/php-cadastrar.php",
        //dataType: "json",
        error: function(){
            alert("Infelizmente não houve conexão com o servidor, tente novamente mais tarde.");
        },
        success: function(){
            setTimeout(function(){
                $("#loader").remove();
                conteudo = "<p><h3><b>FILME CADASTRADO COM SUCESSO!</b></h3></p>";
                alert(conteudo);
                $("#divResposta").html(conteudo);
            },1000);
        }
    });

}