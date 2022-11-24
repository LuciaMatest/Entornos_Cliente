let x = 0;
let y = 0;
let cuadradito = document.getElementById("cuadrado");

/*
 *Al llevar el eje de coordenadas al documento html hacemos una traducción
 *debido a que funcionan distinto y esa diferencia es más evidente cuando trabajamos en el top.
 *
 *En el eje de coordenadas incremetamos para mover hacia arriba, en el top decrementamos
 *para empujar hacias arriba.
 */

function movimiento(event) {
  if (event.keyCode == "39") {
    //derecha
    x = x + 100;
    cuadradito.style.left = x + "px";
  }

  if (event.keyCode == "37") {
    //Izquierda
    x = x - 100;
    cuadradito.style.left = x + "px";
  }

  if (event.keyCode == "38") {
    //arriba
    y = y + 100;
    cuadradito.style.top = -y + "px";
  }

  if (event.keyCode == "40") {
    //abajo
    y = y - 100;
    cuadradito.style.top = -y + "px";
  }
}

window.onkeyup = movimiento;

let verde = 'camisa';

if (true) {
  let azul = 'gorra';
  var amarilla = 'chaqueta';
  let verde = 'pantalon';
}

// console.log(amarilla);
// console.log(verde);
// console.log(azul);

// let verde = 'camisa';

// if (verde) {
//   let azul = 'gorra';
//   var amarilla = 'chaqueta';
//   let verde = 'pantalon';
// }

// console.log(amarilla);
// console.log(azul);
// console.log(verde);