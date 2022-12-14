Number.prototype.moneda = function () {
    return this.toLocaleString('de-DE',{style: 'currency',currency: 'EUR'});
}

class Persona{
    static contadorPersonas = 100;

    static get MAX_AFORO(){
        return 106;
    }

    constructor(nombre, apellidos, edad){
        this.id = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.slice(1);
    }

    set nombre(nombre){
        this._nombre=nombre[0].toUpperCase() + (this._nombre.slice(1)).toLowerCase();
    }

    get apellidos(){
        let arrayApellidos= Array.from(this._apellidos.split(' '));
        this._apellidos = '';
        arrayApellidos.forEach(apellido =>{
            this._apellidos+=(apellido[0]).toUpperCase() + apellido.slice(1).toLowerCase() + ' ';
        });
        return this._apellidos;
    }

    set apellidos(apellidos){
        this._apellidos=apellidos;
        let arrayApellidos= Array.from(this._apellidos.split(' '));
        this._apellidos = '';
        arrayApellidos.forEach(apellido =>{
            this._apellidos+=(apellido[0]).toUpperCase() + apellido.slice(1).toLowerCase() + ' ';
        });
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString() {
        return `${this.id}: \n ${this.nombre} ${this.apellido} \n Edad: ${this.edad}`;
    }
}

class Empleado extends Persona{
    static contadorPersonas = 200;

    constructor(nombre, apellidos, edad, sueldo){
        super(nombre, apellidos, edad);
        super.id = ++Empleado.contadorPersonas;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.slice(1);
    }

    set nombre(nombre){
        this._nombre=nombre[0].toUpperCase() + (this._nombre.slice(1)).toLowerCase();
    }

    get apellidos(){
        let arrayApellidos= Array.from(this._apellidos.split(' '));
        this._apellidos = '';
        arrayApellidos.forEach(apellido =>{
            this._apellidos+=(apellido[0]).toUpperCase() + apellido.slice(1).toLowerCase() + ' ';
        });
        return this._apellidos;
    }

    set apellidos(apellidos){
        this._apellidos=apellidos;
        let arrayApellidos= Array.from(this._apellidos.split(' '));
        this._apellidos = '';
        arrayApellidos.forEach(apellido =>{
            this._apellidos+=(apellido[0]).toUpperCase() + apellido.slice(1).toLowerCase() + ' ';
        });
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
        return `Empleado ${super.toString()} \n Sueldo: ${this._sueldo.moneda()}`;
    }
}

class Cliente extends Persona{
    static contadorPersonas = 300;

    constructor(nombre, apellidos, edad){
        super(nombre, apellidos, edad);
        super.id = ++Empleado.contadorPersonas;
        this._fecha = this.fechaActual();
    }

    fechaActual(){
        let dateActual = new Date();
        return dateActual.toLocaleDateString('es-ES');
    }

    toString() {
        return `Cliente ${super.toString()} \n Registro: ${this._fecha}`;
    }
}
let persona1 = new Persona("Lucia", "Mateos", 28);
let persona2 = new Persona("Javier", "Copello", 32);

let empleado1 = new Empleado("Maria", "Perez", 33, 56.62);
let empleado2 = new Empleado("Pablo", "Lopez", 85, 26.12);

let cliente1 = new Cliente("Lorena", "Muñoz", 65);

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());
console.log(empleado2.toString());
console.log(persona2.toString());
