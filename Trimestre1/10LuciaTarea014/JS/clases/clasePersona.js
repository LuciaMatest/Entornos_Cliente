export class Persona{
    static contadorPersonas = 100;

    //Metodo estatico para que devuelva una constante
    static get MAX_AFORO(){
        return 106;
    }

    //Constructor
    constructor(nombre, apellido, edad){
        if (Persona.contadorPersonas >= Persona.MAX_AFORO) {
            console.log('AVISO: Hay más de ' + (Persona.MAX_AFORO - 100) + ' objetos creados');
        }
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
