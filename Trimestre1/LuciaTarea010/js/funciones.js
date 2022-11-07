// let contador = 1;
// //funciones para que cada celda al darle doble click nos ponga el color que queremos 
// document.getElementById("azul").addEventListener("dblclick", function () {
//     //contador
//     this.innerHTML = `${contador++} - A`;
//     this.style.backgroundColor = "cornflowerblue";
// });
// document.getElementById("negro").addEventListener("dblclick", function () {
//     this.innerHTML = `${contador++} - B`;
//     this.style.backgroundColor = "black";
// });
// document.getElementById("crimson").addEventListener("dblclick", function () {
//     this.innerHTML = `${contador++} - C`;
//     this.style.backgroundColor = "crimson";
// });
// document.getElementById("dorado").addEventListener("dblclick", function () {
//     this.innerHTML = `${contador++} - D`;
//     this.style.backgroundColor = "darkgoldenrod";
// });

//Respuesta clase con array
'use strict';

const ARRAY_CELDAS = Array.from(document.getElementsByTagName('td'));
let cont = 1;
let identificador = 0;

function pintar() {
    this.style.backgroundColor="cornflowerblue";
    cont ++;
}

ARRAY_CELDAS.forEach(celda => {
    celda.id = `idCeldas${identificador}`;
    let datoInner = celda.innerHTML;
    celda.addEventListener('dblclick', pintar);
})