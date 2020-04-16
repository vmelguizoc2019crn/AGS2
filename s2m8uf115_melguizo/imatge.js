var imagen=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');


tirador[0].addEventListener('input',des);
function des(){
  valor[0].innerHTML=tirador[0].value;
  imagen[0].style.webkitFilter="blur("+tirador[0].value+"px)";
}

tirador[1].addEventListener('input',griser);
function griser(){
  valor[1].innerHTML=tirador[1].value;
  imagen[1].style.webkitFilter="grayscale("+tirador[1].value+"%)";
}

tirador[2].addEventListener('input',hombra);
function hombra(){
  valor[2].innerHTML=tirador[2].value;
  imagen[2].style.webkitFilter="drop-shadow("+tirador[2].value+"px "+tirador[2].value+"px "+tirador[2].value+"px)";
}

tirador[3].addEventListener('input',sepiar);
function sepiar(){
  valor[3].innerHTML=tirador[3].value;
  imagen[3].style.webkitFilter="sepia("+tirador[3].value+"%)";
}

tirador[4].addEventListener('input',ilu);
function ilu(){
  valor[4].innerHTML=tirador[4].value;
  imagen[4].style.webkitFilter="brightness("+tirador[4].value+"%)";
}

tirador[5].addEventListener('input',contra);
function contra(){
  valor[5].innerHTML=tirador[5].value;
  imagen[5].style.webkitFilter="contrast("+tirador[5].value+"%)";
}

tirador[6].addEventListener('input',to);
function to(){
  valor[6].innerHTML=tirador[6].value;
  imagen[6].style.webkitFilter="hue-rotate("+tirador[6].value+"deg)";
}

tirador[7].addEventListener('input',inv);
function inv(){
  valor[7].innerHTML=tirador[7].value;
  imagen[7].style.webkitFilter="invert("+tirador[7].value+"%)";
}

tirador[8].addEventListener('input',satu);
function satu(){
  valor[8].innerHTML=tirador[8].value;
  imagen[8].style.webkitFilter="saturate("+tirador[8].value+"%)";
}






tirador[9].addEventListener('input',opacar);
function opacar(){
  valor[9].innerHTML=tirador[9].value;
  imagen[9].style.webkitFilter="opacity("+tirador[9].value+"%)";
}
