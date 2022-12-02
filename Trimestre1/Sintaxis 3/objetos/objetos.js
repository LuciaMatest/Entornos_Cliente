// let alumno = new Object();
// alumno.nombre = 'Carlos';
// alumno['apellidos'] = 'Perez Ortiz';
// alumno.edad = 19;

// let alumna = {
//     propiedades
//     nombre: 'Ana',
//     apellidos: 'Cifuentes Martin',
//     edad: 26,
//     medidas: {
//         altura: 1.7,
//         pie: 32,
//     },
//     getInfo2: () =>{
//         console.log(this);
//         return this;
//     }
//     getInfo2: function () {
//         return `${this.nombre} mide ${this.medidas?.altura} cm`;
//     }
// };

// console.log(alumna.edad + 1);
// alumna.edad = 40;
// console.log(alumna.edad);
// let edad = 'edad';
// console.log(alumna[edad]);

// console.log(alumna);
// console.log(alumna.medidas.altura);
//-----------------------------------------------------------------------------------------------
// console.clear();
// Number.prototype.moneda=function () {
//     return this.toLocaleString('es-ES',{style: 'currency',currency: 'EUR'});
// }

// String.prototype.mayusculas=function () {
//     return this.toLocaleUpperCase();
// }

// const tvSamsung ={
//     nombre: 'TV Samsung 42"',
//     categoria: 'Televisores',
//     unidades: 4,
//     precio: 345.95,

//     importe: function () {
//         return `${(this.nombre).mayusculas()} : ${(this.unidades*this.precio).moneda()}`;
//     }

// }

// console.log(tvSamsung.importe());
//-----------------------------------------------------------------------------------------------
Number.prototype.moneda = function () {
    return this.toLocaleString('de-DE',{style: 'currency',currency: 'EUR'});
}

class Productos {
    constructor(nombre, categoria, unidades, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.unidades = unidades;
        this.precio = precio;
    }
    getInfo() {
        return `${this.nombre} (${this.categoria}): ${this.unidades} uds x ${this.precio.moneda()} = ${(this.unidades*this.precio).moneda()}`;
    }
}

let cpo = new Productos('Asus', 'Ordenador', 3, 367.8);
console.log(cpo.getInfo());
//-----------------------------------------------------------------------------------------------

// console.log(alumna.edad + 1);
// alumna.edad = 40;
// console.log(alumna.edad);
// let edad = 'edad';
// console.log(alumna[edad]);

// console.log(alumna);
// console.log(alumna.medidas.altura);
// console.log(alumna.medidas.pie);

// console.log(alumna.notas?.primero);

// for (let propiedades in alumna) {
//     for (let key in propiedades) {
//         console.log(`${propiedades}: ${alumna[propiedades]}`);
//     }
// }

// alumna.colorGorro = 'verde';
// console.log(Object.values(alumna));

// metodo
// alumna.getInfo = function () {
//     return `${this.nombre} tiene ${this.edad} años`;
// }

// console.log(alumna.getInfo());
// console.log(alumna.getInfo2());

String.prototype.mayusculas = function () {
    return this.toLocaleUpperCase();
}

let tvSamsung = {
    nombre: 'TV Samsung 42"',
    categoria: 'televisores',
    unidades: 4,
    precio: 345.95,
    importe: function() {
        let total = this.unidades*this.precio;
        return `${this.nombre}: ${total.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`;
    }
};

console.log(tvSamsung.importe());
console.log(`${tvSamsung.nombre.mayusculas()}`);
