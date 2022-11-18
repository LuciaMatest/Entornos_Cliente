"use strict";
// PARTE 1
document.body.style.backgroundColor = 'cornflowerblue';
document.body.style.textAlign = 'center';

let divLista = document.createElement('div');
divLista.setAttribute("id", divLista);
divLista.style.display = 'flex';
divLista.style.justifyContent = 'center';
document.body.appendChild(divLista);

let primeraLista = document.getElementById('idCiudades');
primeraLista.style.textAlign = 'left';

let segundaLista = document.getElementById('idHabitantes');
segundaLista.style.textAlign = 'right';

divLista.appendChild(primeraLista);
divLista.appendChild(segundaLista);

// PARTE 2
let listaOrdenada = [];
let listaDesordenada = [];

let btnSO = document.createElement('input');
btnSO.type = 'radio';
btnSO.id = 'sinOrdenar';
btnSO.innerText = "Sin ordenar";

let btnNombre = document.createElement('input');
btnNombre.type = 'radio';
btnNombre.id = 'porNombre';
btnNombre.innerText = 'Por nombre';

let btnHabitantes = document.createElement('input');
btnHabitantes.type = 'radio';
btnHabitantes.id = 'porHabitantes';
btnHabitantes.innerText = 'Por habitantes';

document.body.appendChild(btnHabitantes);
document.body.appendChild(btnNombre);
document.body.appendChild(btnSO);
