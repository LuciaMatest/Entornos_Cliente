//Para obligarnos a declarar todas las variables
'use strict'

//Constantes limitando los numeros random que saldran
const MAX = 999;
const MIN = 1;
//Variable para contar las veces que se introduce un numero
let contador = 0;
//Variable del numero aleatorio que saldrá
let num = Math.floor(Math.random() * MAX) + MIN;
//Variable que almacena el valor que introduce el usuario
let n = prompt;

//Muestra en la consola el numero aleatorio
console.log(`Número oculto: ${num}`);

//Ventana para empezar el juego
n = window.prompt("Adivina el numero de 1 al 999");

while (n != num && n != null) {
    contador++;

    if (n > num) {
        n = window.prompt("(" + contador + ") El número es menor");
    } else if (n < num) {
        n = window.prompt("(" + contador + ") El número es mayor");
    }
}

if (n == num) {
    window.alert(`Número acertado: ${num} Intentos: ${contador}`);
    console.log(`Número acertado: ${num} Intentos: ${contador}`);
} else if (n == null) {
    window.alert("Juego Cancelado");
}