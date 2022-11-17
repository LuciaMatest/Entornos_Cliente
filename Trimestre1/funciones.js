"use strict";
function cambiarColor() {
  this.style.backgroundColor = "gray";
  this.style.color = "white";
}

let arrayP = Array.from(document.getElementsByTagName("P"));

for (const key in arrayP) {
  let element = arrayP[key];

  element.addEventListener("mouseover", cambiarColor);
  console.log(element);
}
//CUADRADO
let arrayCuadrados = [];

function crearCuadrado(idCuadrado, lado, fondo) {
  let nuevoCuadrado = document.createElement("div");
  // nuevoTexNode=document.createTextNode('Palabras...');
  // nuevoCuadrado.appendChild(nuevoTexNode);
  nuevoCuadrado.setAttribute("id", idCuadrado);
  nuevoCuadrado.setAttribute(
    "style",
    `width: ${lado}px; background-color: ${fondo}`
  );
  nuevoCuadrado.style.height = `${lado}px`;
  nuevoCuadrado.style.margin = "10px";
  nuevoCuadrado.draggable = "true";
  nuevoCuadrado.setAttribute(
    "style",
    `${nuevoCuadrado.getAttribute("style")} ; float: left `
  );
  document.body.appendChild(nuevoCuadrado);
  return nuevoCuadrado;
}

//crearCuadrado('cuadrado1', 50, 'blue');

for (let i = 0; i < 25; i++) {
  //arrayCuadrados.push(crearCuadrado(`cuadrado${i}`, 50, 'blue'));
  arrayCuadrados[i] = crearCuadrado(`cuadrado${i}`, 50, "blue");
}

for (let index = 0; index < arrayCuadrados.length; index++) {
  arrayCuadrados[index].addEventListener("mousemove", function () {
    this.style.backgroundColor = "black";
    this.setAttribute('pepe', `${this.style.backgroundColor}`);
  });
  arrayCuadrados[index].addEventListener("mouseout", function () {
    this.style.backgroundColor = "pepe";

  });
  if (index % 2 == 0) {
    arrayCuadrados[index].style.backgroundColor = "red";
    console.log(arrayCuadrados[0]);
  }
}
