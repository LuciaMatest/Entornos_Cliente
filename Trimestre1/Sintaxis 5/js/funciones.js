// let a = [2, 5, "pepe", ['Lucia', 24, [5, 9]]];

// console.log(a);

// console.log(a[3][2].length);

// a.push('Santiago');
// console.log(a);

// a.unshift('Daniel');
// console.log(a);

// a[4][2].push(0);
// console.log(a);

// const eliminado1= a.pop();
// a.pop();
// a.push(eliminado1);
// console.log(a);

// function añadirMarzo() {
//     document.write('<ul> <li> Enero </li> <li> Febrero </li> <li> Marzo </li>  </ul>');
// }

// añadirMarzo();

// let a = ['hola','adios','Bien','Mal']
// console.log(a);
// let b = a.sort(function(elem1, elem2) {
//     if (elem1.toLocaleLowerCase() < elem2.toLocaleLowerCase()) return -1;
//     if (elem1.toLocaleLowerCase() > elem2.toLocaleLowerCase()) return 1;
//     if (elem1.toLocaleLowerCase() = elem2.toLocaleLowerCase()) return 0;
//     });
// console.log(b);


let numeros = [4,8,3,10,5];
console.log(numeros.sort((n1, n2) => n1-n2));

let persona1 = new Object();
persona1.nombre = 'Lucia';
persona1.edad = 28;

let persona2 = new Object();
persona2.nombre = 'Daniel';
persona2.edad = 21;

let persona3 = new Object();
persona3.nombre = 'Manuel';
persona3.edad = 24;

let personas = [persona1, persona2, persona3];
console.log(personas.sort((persona1, persona2, persona3) => persona1.nombre.localeCompare(persona2.nombre)));