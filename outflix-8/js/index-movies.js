$(document).ready(function(){  
    fLocalListarFilmes() 

    $(document).on('click','#divBotaoFilmes',function(){
        var escolhaFilme = $(this).data('target');
        alert("Você Selecionou o Filme: "+escolhaFilme);
        fLocalPlayFilme(escolhaFilme);
    });
    //Cadastrar Filmes
    $("#btCadastroFilmes").click(function(){
        fLocalCadastroFilmes();
    });
    //Tornar-se ADM
    $("#btVirarADM").click(function(){
        fLocalVirarADM();
    });
    //COMPRAR PRIME
    $("#btComprar").click(function(){
        fLocalComprar();
    });
    //ESCOLHA TODOS
    $("#btGenTodos").click(function(){
        var escolha = "todos";
        var titulo = "Todos os Filmes";
        fLocalFiltro(escolha,titulo);
    });
    //ESCOLHA COMÉDIA
    $("#btGenComedia").click(function(){
        var escolha = "comedia";
        var titulo = "Filmes de Comédia";
        fLocalFiltro(escolha,titulo);
    });
    //ESCOLHA AÇÃO
    $("#btGenAcao").click(function(){
        var escolha = "acao";
        var titulo = "Filmes de Ação";
        fLocalFiltro(escolha,titulo);
    });
    //ESCOLHA TERROR
    $("#btGenTerror").click(function(){
        var escolha = "terror";
        var titulo = "Filmes de Terror";
        fLocalFiltro(escolha,titulo);
    });
    //ESCOLHA INFANTIL
    $("#btGenInfantil").click(function(){
        var escolha = "infantil";
        var titulo = "Filmes para a criançada";
        fLocalFiltro(escolha,titulo);
    });
});
function fLocalFiltro(escolha,titulo){
    $.ajax({
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
        type: "POST",
        url: "php/php-filtro.php",
        dataType: "json",
        data: {
            ajax_gen: escolha,
        },
        error: function(){
            alert("Houve um erro em sua requisição");
        },
        success: function(retorno){
            setTimeout(function(){
                $("#loader").remove();
                
                var totalFilmes = retorno[0].totalFilmes;
                var conteudo = "";
                var i = 1;

                $("#divTituloGen").html("<h3>"+titulo+"</h3>");
                while(i <= totalFilmes)
                { // <h3>Todos os Filmes</h3>
                    conteudo += "<div class='gui-card'>"
                    conteudo += "    <div class='gui-card__media'>"
                    conteudo += "      <img class='gui-card__img' src='img/"+retorno[i].arquivoIMG+"' alt=''  />"
                    conteudo += "    </div>"
                    conteudo += "    <div class='gui-card__details' data-target='"+retorno[i].nomeID+"' id='divBotaoFilmes'>"
                    conteudo += "        <div class='gui-card__title' id='link' data-target='"+retorno[i].linkYoutube+"'>"
                    conteudo += "            "+retorno[i].nomeFilme+""
                    conteudo += "        </div>"
                    conteudo += "    </div>"
                    conteudo += "</div>"

                    i++;
                }
                $("#divListFilmesTodos").html(conteudo);

            },500);
        }
    });
};

function fLocalListarFilmes(){

    $.ajax({
        type: "GET",
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
        url: "php/php-ListFilmes.php",
        dataType: "json",
        error: function() {
            alert("Infelizmente o servidor não conseguiu computar os dados!");
        },
        success: function(retorno){
            setTimeout(function(){
                $("#loader").remove();
                var totalFilmes = retorno[0].totalFilmes;
                var conteudo = "";
                var i = 1;
                $("#divTituloGen").html("<h3>Todos os Filmes</h3>");
                while(i <= totalFilmes)
                {
                    conteudo += "<div class='gui-card'>"
                    conteudo += "    <div class='gui-card__media'>"
                    conteudo += "      <img class='gui-card__img' src='img/"+retorno[i].arquivoIMG+"' alt=''  />"
                    conteudo += "    </div>"
                    conteudo += "    <div class='gui-card__details' data-target='"+retorno[i].nomeID+"' id='divBotaoFilmes'>"
                    conteudo += "        <div class='gui-card__title' id='link' data-target='"+retorno[i].linkYoutube+"'>"
                    conteudo += "            "+retorno[i].nomeFilme+""
                    conteudo += "        </div>"
                    conteudo += "    </div>"
                    conteudo += "</div>"

                    i++;
                }

                $("#divListFilmesTodos").html(conteudo);

            },2000);
        }
    });


}

function fLocalPlayFilme(escolhaFilme){
    $.ajax({
        type: "POST",
        data: {
            ajax_nomeFilme: escolhaFilme,
        },
        url: "php/php-PlayFilmes.php",
        dataType: "json",
        success: function(retorno){
            
            if(retorno[0].perm == "prime"){
                window.location.href = retorno[1].link; 
            }
            else if(retorno[0].perm == "free"){
                alert("Infelizmente você ainda não comprou prime para acessar este filme, você pode apenas visualizar. Compre clicando no botão acima 'COMPRAR PRIME'");
            }
        },
        error: function(){
            alert("Infelizmente não foi possivel conectar-se agora, tente novamente mais tarde");
        }
    });
};
function fLocalComprar(){
    $.ajax({
       url: "php/php-SetPrime.php",
       success: function(){
        alert("Parabens você acaba de comprar Prime!");
       },   
       error: function(){
        alert("Houve um erro em sua requisição, tente novamente mais tarde");
       }
    });
};
function fLocalVirarADM(){  
    $.ajax({
        url: "php/php-SetADM.php",
        success: function(){
         alert("Parabens você acaba de tornar-se um administrador!");
        },   
        error: function(){
         alert("Houve um erro em sua requisição, tente novamente mais tarde");
        }
     });
};
function fLocalCadastroFilmes(){
    $.ajax({
        dataType:"GET",
        type:"json",
        url:"php/directCadastroFilmes.php",
        success: function(retorno){
            if(retorno==true){
                window.location.href="http://localhost/projeto/OUTFLIX_empresa_atual_v11/cadastro-filmes.html";
            }else{
                alert("Você não tem permissão para acessar esta página");
            }
        },
        error: function(retorno){
            if(retorno[0].perm == 10){
                alert("q droga em...");
                window.location.href="http://localhost/projeto/OUTFLIX_empresa_atual_v11/cadastro-filmes.html";
            }else{
                alert("Você não tem permissão para acessar esta página");
            }
        },
    });
};