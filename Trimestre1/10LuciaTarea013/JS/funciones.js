Number.prototype.moneda = function () {
    return this.toLocaleString('de-DE',{style: 'currency',currency: 'EUR'});
}

class Persona{
    static contadorPersonas = 100;

    //Metodo estatico para que devuelva una constante
    static get MAX_AFORO(){
        return 106;
    }

    //Constructor
    constructor(nombre, apellido, edad){
        this._id = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get id(){
        return this._id;
    }

    get nombre(){
        //Para que aparezca siempre la primera en mayuscula y el resto en minusculas
        return `${this._nombre[0].toUpperCase()}${this._nombre.toLowerCase().slice(1)}`;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get apellido(){
        return `${this._apellido[0].toUpperCase()}${this._apellido.toLowerCase().slice(1)}`;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString() {
        return `${this.id}: \n\t ${this.nombre} ${this.apellido} \n\t Edad: ${this.edad}`;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 200;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        super._id = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.slice(1);
    }

    set nombre(nombre){
        this._nombre=nombre[0].toUpperCase() + (this._nombre.slice(1)).toLowerCase();
    }

    get apellido(){
        return `${this._apellido[0].toUpperCase()}${this._apellido.toLowerCase().slice(1)}`;
    }

    set apellido(apellido){
        this._apellido=apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    get sueldo(){
        return this.sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString() {
        return `Empleado ${super.toString()} \n\t Sueldo: ${this._sueldo.moneda()}`;
    }
}

class Cliente extends Persona{
    static contadorClientes = 300;

    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        super._id = ++Cliente.contadorClientes;
        this._fecha = this.fechaActual();
    }

    fechaActual(){
        let dateActual = new Date();
        return dateActual.toLocaleDateString('es-ES');
    }

    toString() {
        return `Cliente ${super.toString()} \n\t Registro: ${this._fecha}`;
    }
}

let persona1 = new Persona("LUCIA", "Mateos", 28);
let persona2 = new Persona("Javier", "Copello", 32);

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
