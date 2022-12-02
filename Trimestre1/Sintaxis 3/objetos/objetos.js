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

// console.log(tvSamsung.importe());//-----------------------------------------------------------------------------------------------
// String.prototype.mayusculas = function () {
//     return this.toLocaleUpperCase();
// }

// let tvSamsung = {
//     nombre: 'TV Samsung 42"',
//     categoria: 'televisores',
//     unidades: 4,
//     precio: 345.95,
//     importe: function() {
//         let total = this.unidades*this.precio;
//         return `${this.nombre}: ${total.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}`;
//     }
// };

// console.log(tvSamsung.importe());
// console.log(`${tvSamsung.nombre.mayusculas()}`);
//-----------------------------------------------------------------------------------------------
// Number.prototype.moneda = function () {
//     return this.toLocaleString('de-DE',{style: 'currency',currency: 'EUR'});
// }

// class Producto {
//     constructor(nombre, categoria, unidades, precio) {
//         this.nombre = nombre;
//         this.categoria = categoria;
//         this.unidades = unidades;
//         this.precio = precio;
//     }
//     getInfo() {
//         return `${this.nombre} (${this.categoria}): ${this.unidades} uds x ${this.precio.moneda()} = ${(this.unidades*this.precio).moneda()}`;
//     }
// }

// let pro1 = new Producto('Asus', 'Ordenador', 3, 367.8);
// let pro2 = new Producto('Philips', 'Aspiradora', 5, 69.89);
// let pro3 = new Producto('Reflex', 'Cámara', 16, 199.99);
// let array_productos=[pro1, pro2, pro3];
// array_productos.forEach(producto => {
//     console.log(producto.getInfo())
// });
//-----------------------------------------------------------------------------------------------
// class Alumno {
//     constructor(nombre, apellidos, edad) {
//         this.nombre = nombre;
//         this.apellidos = apellidos;
//         this.edad = edad;
//     }

//     getInfo() {
//         let nomAlum=() => `${this.nombre} ${this.apellidos}`;
//         return `El alumno ${nomAlum()} tiene ${this.edad} años`;
//     }

//     getInfo() {
//         function nomAlum(alumno) {
//             return `${alumno.nombre} ${alumno.apellidos}`;
//         }
//         return `El alumno ${nomAlum(this)} tiene ${this.edad} años`;
//     }

//     getInfo() {
//         let that=this;
//         function nomAlum() {
//             return `${that.nombre} ${that.apellidos}`;
//         }
//         return `El alumno ${nomAlum()} tiene ${this.edad} años`;
//     }
// }

// let cpo = new Alumno('Carlos','Pérez Ortiz', 19);
// console.log(cpo.getInfo());
//-----------------------------------------------------------------------------------------------
// class Televisor extends Producto{
//     constructor(nombre, categoria, unidades, precio, tamaño){
//         super(nombre, categoria, unidades, precio);
//         this.tamaño = tamaño;
//     }

//     getInfo(){
//         return `${this.nombre} de ${this.tamaño} pulgadas`;
//     }
// }

// let tv = new Televisor('Samsung', 'TV', 6, 67.5, '46"');
// console.log(tv.getInfo());
//-----------------------------------------------------------------------------------------------
// EJERCICIO: Crea 5 productos y guárdalos en un array. Crea las siguientes funciones (todas reciben ese array como parámetro):
// prodsWithLowUnits: además del array recibe como segundo parámetro un número, y devuelve un array con todos
// los productos de los que quedan menos de las unidades indicadas.
// prodsList: devuelve una cadena que dice ‘Listado de productos:’ y en cada línea un guión y la información de un
// producto del array.

    
class Producto {
    constructor(nombre, categoria, unidades, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.unidades = unidades;
        this.precio = precio;
    }
    
    // toString(){
    //     return this.nombre
    // }

    toString(){
        return this.precio
    }
}

let arrayProductos =[];
arrayProductos[0] = new Producto('Sonic', 'TV', 8, 67.265);
arrayProductos[1] = new Producto('Asus', 'PC', 45, 454.23);
arrayProductos[2] = new Producto('Philips', 'Monitor', 16, 200);
arrayProductos[3] = new Producto('LG', 'Portatil', 7, 792.15);
arrayProductos[4] = new Producto('Xiaomi', 'Movil', 2, 125.785);

// prodsSortByName: devuelve un array con los productos ordenados alfabéticamente. //
arrayProductos.sort();

// prodsSortByPrice: devuelve un array con los productos ordenados por precio. //
arrayProductos.sort((producto1, producto2) => producto1.precio - producto2.precio)

// prodsTotalPrice: devuelve el importe total de los productos del array, con 2 decimales.
