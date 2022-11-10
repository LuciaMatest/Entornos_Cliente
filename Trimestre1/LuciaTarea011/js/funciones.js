"use strict";
let diametroDiana = 40;
let velocidadDiana = 10;
let xDiana = 0;
function dibujarDiana() {
  document.getElementById("Diana").style.position = "absolute";
  document.getElementById("Diana").style.width = `${diametroDiana}px`;
  document.getElementById(
    "Diana"
  ).style.height = `${diametroDiana}px`;
  document.getElementById("Diana").style.backgroundColor = "yellow";
  document.getElementById("Diana").style.border = `${
    diametroDiana / 5
  }px`;
  document.getElementById("Diana").style.borderColor = "red";
  document.getElementById("Diana").style.borderStyle = "solid";
  document.getElementById("Diana").style.borderRadius = "50%";

  document.getElementById("centroDiana").style.position = "absolute";
  document.getElementById("centroDiana").style.width = `${diametroDiana / 2}px`;
  document.getElementById("centroDiana").style.height = `${
    diametroDiana / 2
  }px`;
  document.getElementById("centroDiana").style.backgroundColor = "red";
  document.getElementById("centroDiana").style.left = `${diametroDiana / 4}px`;
  document.getElementById("centroDiana").style.top = `${diametroDiana / 4}px`;
  document.getElementById("centroDiana").style.borderRadius = "50%";
}
const desplazarDiana = () => {
  xDiana += velocidadDiana;
  document.getElementById("Diana").style.left = `${xDiana}px`;
  if (xDiana + diametroDiana >= document.documentElement.clientWidth - 20) {
    //da la vuelta
    velocidadDiana = velocidadDiana * -1;
  }

  if (xDiana <= 0) {
    //da la vuelta
    velocidadDiana = velocidadDiana * -1;
  }
};

function dibujarFlecha(ancho, alto, color) {
  document.getElementById("Flecha").style.width = `${ancho}px`;
  document.getElementById("Flecha").style.height = `${alto}px`;
  document.getElementById("Flecha").style.backgroundColor = color;
  document.getElementById("Flecha").style.position = "absolute";
  document.getElementById("Flecha").style.left = `${
    document.documentElement.clientWidth / 2
  }px`;
}
function comenzar() {
  console.log("comenzar");
  document.getElementById("Espacio").style.height = "400px";
  document.getElementById("Espacio").style.backgroundColor = "bisque";
  document.getElementsByTagName("Encabezado")[0].style.backgroundColor = "cyan";
  dibujarDiana();
  dibujarFlecha(5, 35, "blue");
  const intervalDiana = setInterval(desplazarDiana, 50);
}

document.addEventListener("load", comenzar());
