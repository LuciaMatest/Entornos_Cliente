"use strict";
document.body.style.backgroundColor = "cornflowerblue";
document.body.style.textAlign = "center";

function crearDivPrincipal() {
  let divLista = document.createElement("div");
  divLista.setAttribute("style", "display: flex; justify-content: center");

  let primeraLista = document.getElementById("idCiudades");
  let segundaLista = document.getElementsByTagName("ul")[0];
  primeraLista.parentElement.insertBefore(divLista, primeraLista);

  divLista.appendChild(primeraLista);
  divLista.appendChild(segundaLista);
  primeraLista.style = "text-align: left";
  segundaLista.style = "text-align: right";
}

function crearDivBotones() {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style.textAlign = 'center';
    let footer = document.getElementsByTagName("footer")[0];
    footer.parentElement.insertBefore(nuevoDiv, footer);
    return nuevoDiv;
}

function crearArrayCiudades(listaNombres, listaHabitantes) {
  let ciudades = [];
  for (let i = 0; i < listaNombres.lengt++; i++) {
    let nuevaCiudad = {
        nombre: listaNombres[i].innerText,
        habitantes: parseInt(listaHabitantes[i].innerText),
    };
    ciudades.push(nuevaCiudad);
  }
  return ciudades;
}

function comprobarBotones() {
    if (rb1.checked) {
        console.log ('Sin ordenar');
        for (let i = 0; i < ciudades.length; i++) {
            listaNombres[i].innerText = ciudades[i].nombre;
            listaHabitantes[i].innerText = ciudades[i].habitantes;
        }
    }
    if (rb2.checked) {
        console.log ('Por nombre');
        for (let i = 0; i < ciudades.length; i++) {
            listaNombres[i].innerText = ciudadesOrdenadoNombre[i].nombre;
            listaHabitantes[i].innerText = ciudadesOrdenadoNombre[i].habitantes;
        }
    }
    if (rb3.checked) {
        console.log ('Por habitantes');
        for (let i = 0; i < ciudades.length; i++) {
            listaNombres[i].innerText = ciudadesOrdenadoHabitantes[i].nombre;
            listaHabitantes[i].innerText = ciudadesOrdenadoHabitantes[i].habitantes;
        }
    }
}

function crearRadioBoton(id, nombre, label, bCheck) {
    let nuevoBoton = document.createElement("input");
    nuevoBoton.setAttribute("type", "radio");
    nuevoBoton.setAttribute("id", id);
    nuevoBoton.name = nombre;
    nuevoBoton.checked= bCheck;

    let nuevoLabel = document.createElement("label");
    nuevoLabel.setAttribute("for", id);
    nuevoLabel.innerHTML = label;
    
    contenedorBotones.appendChild(nuevoBoton);
    contenedorBotones.appendChild(nuevoLabel);

    nuevoBoton.addEventListener('change', comprobarBotones);
    return nuevoBoton;
}

let listaNombres = document.getElementById("idCiudades").querySelectorAll("li");
let listaHabitantes = document.getElementsByTagName("ul")[0].querySelectorAll("li");

let ciudades= crearArrayCiudades(listaNombres, listaHabitantes);
let ciudadesOrdenadoNombre = ciudades.slice();
let ciudadesOrdenadoHabitantes = ciudades.slice();
ciudadesOrdenadoNombre.sort((c1, c2) => c1.nombre.localeCompare(c2.nombre));
ciudadesOrdenadoHabitantes.sort((c1, c2) => c1.habitantes - c2.habitantes);

crearDivPrincipal();
let contenedorBotones = crearDivBotones();
let rb1 = crearRadioBoton('rb1', 'orden', 'Sin ordenar |', true);
let rb2 = crearRadioBoton('rb2', 'orden', 'Por nombre |', false);
let rb3 = crearRadioBoton('rb3', 'orden', 'Por Habitante', false);



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
