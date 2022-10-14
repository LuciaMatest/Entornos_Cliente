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
