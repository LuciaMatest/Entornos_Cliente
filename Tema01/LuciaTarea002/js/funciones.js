"use strict";

let notas = "";
let suma = 0;
let contador = 0;

while (notas != null) {
    notas = window.prompt("Introduce tus notas: ");
    if (notas != null) {
        contador++;
        suma += parseFloat(notas);
    }
}

console.log(`La media de ${contador} numeros es: ${suma/contador}`);
window.alert(`La media de ${contador} numeros es: ${suma/contador}`);
