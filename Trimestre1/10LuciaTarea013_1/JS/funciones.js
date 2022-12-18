import {Persona} from "./clases/clasePersona.js";
import {Empleado} from "./clases/claseEmpleado.js";
import {Cliente} from "./clases/claseCliente.js";

let persona1 = new Persona("LUCIA", "Mateos", 28);
let persona2 = new Persona("Javier", "CoPELlo", 32);

let empleado1 = new Empleado("Maria", "Perez", 33, 56.62);
let empleado2 = new Empleado("Pablo", "Lopez", 85, 26.12);

let cliente1 = new Cliente("Lorena", "Muñoz", 65);

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());
console.log(empleado2.toString());
console.log(persona2.toString());

console.log("Id del empleado2: " + empleado2.id);
console.log("Id del cliente1: " + cliente1.id);

console.log("Contador de personas: " + Persona.contadorPersonas);
let p23 = new Persona();
console.log("Contador de personas: " + Persona.contadorPersonas);
let p24 = new Persona();
console.log("Contador de personas: " + Persona.contadorPersonas);
let p25 = new Persona();
console.log("Contador de personas: " + Persona.contadorPersonas);
let p26 = new Persona();
console.log("Contador de personas: " + Persona.contadorPersonas);
let p27 = new Persona();
