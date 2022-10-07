//10
let datos10 = [5, 23, 12, 85];
let sumaDatos = 0;
console.log(datos);
for (let i = 0; i < datos.length; i++) {
  sumaDatos += datos[i];
}
console.log(sumaDatos);

//11
let datos = [9, 58, 7, 12, 54, 12, 546];
let suma = 0;

for (let i in datos) {
  suma += datos[i];
}

console.log(suma);

let alumno1 = {
  nombre: "Lucia",
  apellido: "Mateos",
  edad: 28,
};

let alumno2 = {
  nombre: "Manuel",
  apellido: "Hernandez",
  edad: 25,
};

const escribir = (persona) => {
  console.log(
    persona.nombre + " " + persona.apellido + " tiene " + persona.edad + " años"
  );
};

escribir(alumno1);
escribir(alumno2);

//12
let datos12 = [9, 58, 7, 12, 54, 12, 546];
let suma12 = 0;

for (const valor of datos) {
  suma += valor;
  console.log(valor);
}

console.log(suma);

//: Haz 3 funciones a las que se le pasa como parámetro un array de notas y devuelve la nota media.
//Cada una usará un for de una de las 3 formas vistas. Pruébalas en la consola

//1
const notas1 = [1, 2, 3, 4, 5, 7, 9];
const notas2 = [5, 7, 8, 6, 2, 1, 4];

function forContador(notasArray) {
  let suma1 = 0;
  for (let i = 0; i < notasArray.length; i++) {
    suma1 += notasArray[i];
  }
  return suma1 / notasArray.length;
}

console.log(forContador(notas1));
console.log(forContador(notas2));

alert(forContador(notas1));
alert(forContador(notas2));

//2
const notas3 = [7, 4, 5, 1, 6, 2, 7];
const notas4 = [1, 2, 4, 5, 7, 6, 1];

const media = (notasArray1) => {
  let suma2 = 0;
  for (const indice in notasArray1) {
    suma2 += notasArray1[indice];
  }
  return suma2 / notasArray1.length;
};

console.log(media(notas3));
console.log(media(notas4));

alert(media(notas3));
alert(media(notas4));

//3
const notas5 = [6, 8, 4, 2, 1, 4, 3];
const notas6 = [5, 5, 2, 1, 4, 7, 5];

let notamedia = function (notasArray2) {
  let suma3 = 0;
  for (const valor of notasArray2) {
    suma3 += valor;
  }
  return suma3 / notasArray2.length;
};

console.log(notamedia(notas5));
console.log(notamedia(notas6));

alert(notamedia(notas5));
alert(notamedia(notas6));
