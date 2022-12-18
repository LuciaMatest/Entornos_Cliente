import {Orden} from "./clases/claseOrden.js";
import {Producto} from "./clases/claseProducto.js";

let p1=new Producto('Camisa',36.5);
let p2=new Producto('Chaqueta',214,99);
let p3=new Producto('Pantalón',67);

let o1=new Orden();

o1.agregarProducto(p1);
o1.agregarProducto(p2);
o1.agregarProducto(p3);

// let o2= new Orden();

// p2.precio=160;

// o2.agregarProducto(p3);
// p2.nombre='Americana';
// o2.agregarProducto(p2);
// o2.agregarProducto(p2);
// o2.agregarProducto(p2);
// o2.agregarProducto(p2);
// o2.agregarProducto(p2);
// o2.agregarProducto(p2);
console.log(o1.toString());
// console.log(o2.toString());
