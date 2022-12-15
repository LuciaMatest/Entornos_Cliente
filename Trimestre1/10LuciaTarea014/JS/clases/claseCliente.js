import {Persona} from "./clasePersona.js";
export class Cliente extends Persona{
    static contadorClientes = 300;

    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        super._id = ++Cliente.contadorClientes;
        this._fecha = this.hoy();
    }

    hoy(){
        let fecha= new Date();
        return fecha.toLocaleDateString('es-ES');
    }

    get fecha(){
        return this._fecha;
    }

    set fecha(fecha){
        this._fecha=new Date(fecha);
        this._fecha=this._fecha.toLocaleDateString('es-ES');
    }

    toString() {
        return `Cliente ${super.toString()} \n\t Registro: ${this.fecha}`;
    }
}
