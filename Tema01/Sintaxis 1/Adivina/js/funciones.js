'use strict'

let n = undefined;
let num = 378;

do {
    n = window.prompt("Adivina el numero de 1 al 999");
    if (n == num) {
        window.alert("Has acertado");
    } else {
        window.alert("No has acertado");
    }
} while (n != num && n != null);
