"use strict";

//Mi ejercicio
let fact = "";
fact = prompt("Introduce un numero entero positivo");
let n = fact;
for (let i = fact - 1; i >= 1; i--) {
  fact = fact * i;
}
alert(n + "! =" + fact);

/*
//Solucion
let factorial = 1;
let calculo = "";
let num = parseInt(prompt("Introduce un numero entero positivo"));
for (let i = num; i > 0; i--) {
  factorial *= i;
  if (i > 1) {
    calculo += i + " x ";
  } else {
    calculo += i;
  }
}
alert(num + "! =" + calculo + " = " + factorial);
*/

/*
//Solucion Santiago
const factText = (n) => {
  let result = 1;
  let resultText = `${n}! =`;
  for (let i = n; i > 0; i--) {
    result = result * i;
    if (i === 1) {
      resultText += i;
    } else {
      resultText += i + `x`;
    }
  }
  resultText += ` = ${result}`;
  console.log(resultText);
  return resultText;
};

const n = window.prompt("Introduce un numero entero positivo");
window.alert(factText(n));*/
