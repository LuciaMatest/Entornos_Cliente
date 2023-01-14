class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre.toUpperCase();
    }

    set nombre(nombre) {
        this._nombre = nombre.toUpperCase();
    }

    get precio() {
        return this._precio.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    }

    set precio(precio) {
        this._precio = precio.toFixed(2);
    }

    toString() {
        return `${this._idProducto} - ${this.nombre} ${this.precio}€`;
    }
}

let arrayProductos = [];

//Input
let nombre = document.getElementById("idNombre");
let precio = document.getElementById("idPrecio");
let listado = document.getElementById("listado");

//Botones
document.getElementById("btn_restablecer").addEventListener('click', restablecer);
document.getElementById("btn_guardar").addEventListener('click', guardar);
document.getElementById("btn_limpiar_vista").addEventListener('click', limpiar);
document.getElementById("btn_eliminar_todo").addEventListener('click', eliminar);

//Funciones
function restablecer() {
    nombre.value="";
    precio.value="";
}

function guardar() {
    arrayProductos.push(new Producto(nombre.value,precio.value));
    listado.innerHTML="";
    localStorage.almacenamiento = JSON.stringify(arrayProductos);
    //Creamos el listado
    arrayProductos.forEach(producto => {
        let lista=document.createElement('p');
        lista.appendChild(document.createTextNode(producto.toString()));
        listado.appendChild(lista);
    });
}

function limpiar() {
    listado.innerHTML="Vista limpia. Los datos permanecen.";
}

function eliminar() {
    if (confirm('Borrar todos los datos')) {
        localStorage.removeItem('almacenamiento');
        listado.innerHTML="Datos eliminados";
        Producto.contadorProductos=0;
    } 
}