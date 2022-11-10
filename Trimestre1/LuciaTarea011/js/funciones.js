"use strict";
let diametroDiana = 40;
let velocidadDiana = 10;
let xDiana = 0;
function dibujarDiana() {
  document.getElementById("contenedorDiana").style.position = "absolute";
  document.getElementById("contenedorDiana").style.width = `${diametroDiana}px`;
  document.getElementById(
    "contenedorDiana"
  ).style.height = `${diametroDiana}px`;
  document.getElementById("contenedorDiana").style.backgroundColor = "yellow";
  document.getElementById("contenedorDiana").style.border = `${
    diametroDiana / 5
  }px`;
  document.getElementById("contenedorDiana").style.borderColor = "red";
  document.getElementById("contenedorDiana").style.borderStyle = "solid";
  document.getElementById("contenedorDiana").style.borderRadius = "50%";

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
  document.getElementById("contenedorDiana").style.left = `${xDiana}px`;
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
  document.getElementById("contenedorFlecha").style.width = `${ancho}px`;
  document.getElementById("contenedorFlecha").style.height = `${alto}px`;
  document.getElementById("contenedorFlecha").style.backgroundColor = color;
  document.getElementById("contenedorFlecha").style.position = "absolute";
  document.getElementById("contenedorFlecha").style.left = `${
    document.documentElement.clientWidth / 2
  }px`;
}
function comenzar() {
  console.log("comenzar");
  document.getElementById("contenedorHueco").style.height = "400px";
  document.getElementById("contenedorHueco").style.backgroundColor = "bisque";
  document.getElementsByTagName("header")[0].style.backgroundColor = "cyan";
  dibujarDiana();
  dibujarFlecha(5, 35, "blue");
  const intervalDiana = setInterval(desplazarDiana, 50);
}

document.addEventListener("load", comenzar());
