var intervalo;

function scrollDireitaAcao(){
  intervalo = setInterval(function(){ document.getElementById('scrollerAcao').scrollLeft += 1 }  , 5);
};
function scrollEsquerdaAcao(){
  intervalo = setInterval(function(){ document.getElementById('scrollerAcao').scrollLeft -= 1 }  , 5);
};
function scrollDireitaComedia(){
  intervalo = setInterval(function(){ document.getElementById('scrollerComedia').scrollLeft += 1 }  , 5);
};
function scrollEsquerdaComedia(){
  intervalo = setInterval(function(){ document.getElementById('scrollerComedia').scrollLeft -= 1 }  , 5);
};
function clearScroll(){
  clearInterval(intervalo);
};
