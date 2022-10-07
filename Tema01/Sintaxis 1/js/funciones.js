//1
function mostrarMensaje() {
  let mensaje = window.prompt("Escribe algo...");
  window.alert("Has escrito " + mensaje);
}

//mostrarMensaje();

//2
function potencia(base, exponente) {
  console.log(base);
  console.log(exponente);
  return base ** exponente;
}

//console.log(potencia(3,2));

//let variable = potencia(3, 5);
//console.log(variable);

//3
function sumar() {
  console.log(arguments);
  let resultado = 0;
  for (let i = 0; i < arguments.length; i++) {
    resultado += arguments[i];
  }
  return resultado;
}

//console.log(sumar(4, 2));
//console.log(sumar(4, 2, 5, 3, 2, 1, 3));

//4
const cuadrado = function (valor) {
  return valor * valor;
};

const cubo = function (valor) {
  return valor * valor * valor;
};

function aplicarFuncion(dato, funcion) {
  return funcion(dato);
}

let num1 = aplicarFuncion(3, cuadrado);
let num2 = aplicarFuncion(4, cubo);

// console.log(num1);
// console.log(num2);

//5
let holaMundo = function () {
  alert("Hola mundo!");
};

// holaMundo();

// let nuevaVariable = holaMundo;
// nuevaVariable();

//6
let potencia1 = (base, exponente) => {
  let valor = 1;
  for (let i = 1; i <= exponente; i++) {
    valor = valor * base;
  }
  return valor;
};

let cuadrado1 = function (base) {
  return base * base;
};

const cuadrado2 = (base) => base * base;
let resultado = cuadrado2(34);
console.log(`El cuadrado de 34 es ${resultado}`);

let num = 17;
console.log(`El cuadrado de ${num} es ${cuadrado(num)}`);

//7
if (edad < 18) {
  console.log("Es menor de edad");
} else if (edad > 65) {
  console.log("Está jubilado");
} else {
  console.log("Edad correcta");
}

//8
let edad = 30;
let esMayorDeEdad = edad > 18 ? "Viejo" : "Joven";
console.log(esMayorDeEdad);

//9
switch (true) {
  case age < 18:
    console.log("Eres muy joven para entrar");
    break;
  case age < 65:
    console.log("Puedes entrar");
    break;
  default:
    console.log("Eres muy mayor para entrar");
}