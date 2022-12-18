export class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `${this.nombre}   ${this.precio}`;
    }
}

