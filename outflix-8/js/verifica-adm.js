$(document).ready(function(){

    $("#bMaster").click(function(){  

        nome=$("#loginAdm").val(),
        senha=$("#senhaAdm").val(),

        verificaAdm();


    });
});    



function verificaAdm(){   
     
    $.ajax({ 
        data:{
            nome:$("#loginAdm").val(),
            senha:$("#senhaAdm").val(),
        },
        type:"POST",    
        url:'php/login-adm.php',
        dataType:"json",
        error:function(){
            alert("DEU ERRRRROOOR"); //não está havendo retorno
        },
        success:function(retorno){      
             if(retorno==true){
               window.location.href="cadastro-filmes.html";
            }else{
                alert("LOGIN/SENHA INCORRETOS!!")
            }
            
                                 
        }
        


     
    });
};
 	

      