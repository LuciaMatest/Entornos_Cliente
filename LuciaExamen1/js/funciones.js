"use strict";
// PARTE 1
document.body.style.backgroundColor = "cornflowerblue";
document.body.style.textAlign = "center";

function crearDivPrincipal() {
  let divLista = document.createElement("div");
  divLista.setAttribute("style", "display: flex; justify-content: center");

  let primeraLista = document.getElementById("idCiudades");
  let segundaLista = document.getElementById("idHabitantes");
  primeraLista.parentElement.insertBefore(divLista, primeraLista);

  divLista.appendChild(primeraLista);
  divLista.appendChild(segundaLista);
  primeraLista.style = "text-align: left";
  segundaLista.style = "text-align: right";
}

function crearArrayCiudades(listaNombres, listaHabitantes) {
  let ciudades = [];
  return ciudades;
  
}

let listaNombres = document.getElementById("idCiudades").querySelectorAll("li");
let listaHabitantes = document.getElementById("idHabitantes").querySelectorAll("li");

crearDivPrincipal();


// // PARTE 2
// let listaDesordenada = Array.from(document.getElementsByTagName("OL"));
// let listaOrdenada = Array.from(document.getElementsByTagName("UL"));

// let btnSO = document.createElement('button');
// btnSO.type = 'radio';
// btnSO.id = 'sinOrdenar';
// btnSO.innerText = "Sin ordenar";

// let btnNombre = document.createElement('button');
// btnNombre.type = 'radio';
// btnNombre.id = 'porNombre';
// btnNombre.innerText = 'Por nombre';

// let btnHabitantes = document.createElement('button');
// btnHabitantes.type = 'radio';
// btnHabitantes.id = 'porHabitantes';
// btnHabitantes.innerText = 'Por habitantes';

// document.body.appendChild(btnHabitantes);
// document.body.appendChild(btnNombre);
// document.body.appendChild(btnSO);

// btnNombre.addEventListener('click', function (divLista) {
//     listaDesordenada.sort();
// });

// btnHabitantes.addEventListener('click', function (divLista) {
//     listaOrdenada.sort();
// });
