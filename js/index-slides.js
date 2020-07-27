var intervalo;

function scrollDireitaTodos(){
  intervalo = setInterval(function(){ document.getElementById('scrollerTodos').scrollLeft += 1 }  , 5);
};
function scrollEsquerdaTodos(){
  intervalo = setInterval(function(){ document.getElementById('scrollerTodos').scrollLeft -= 1 }  , 5);
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
