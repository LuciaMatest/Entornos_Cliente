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
let listaDesordenada = Array.from(document.getElementsByTagName("OL"));
let listaOrdenada = Array.from(document.getElementsByTagName("UL"));

let btnSO = document.createElement('button');
btnSO.type = 'radio';
btnSO.id = 'sinOrdenar';
btnSO.innerText = "Sin ordenar";

let btnNombre = document.createElement('button');
btnNombre.type = 'radio';
btnNombre.id = 'porNombre';
btnNombre.innerText = 'Por nombre';

let btnHabitantes = document.createElement('button');
btnHabitantes.type = 'radio';
btnHabitantes.id = 'porHabitantes';
btnHabitantes.innerText = 'Por habitantes';

document.body.appendChild(btnHabitantes);
document.body.appendChild(btnNombre);
document.body.appendChild(btnSO);

btnNombre.addEventListener('click', function (divLista) {
    listaDesordenada.sort();
});

btnHabitantes.addEventListener('click', function (divLista) {
    listaOrdenada.sort();
});