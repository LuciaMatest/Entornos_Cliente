class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre(){
        return this._nombre[0].toUpperCase() + this._nombre.toLowerCase().slice(1);
    }

    set nombre(nombre) {
        this._nombre = nombre.toUpperCase();
    }

    get precio() {
        return `${this._precio.toLocaleString('de-DE',{style: 'currency',currency: 'EUR'})}`;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `${this._idProducto} - ${this.nombre} ${this.precio}`;
    }
}

let arrayProductos = [];

//Input
let nombre = document.getElementById("idNombre");
let precio = document.getElementById("idPrecio");
let listado = document.getElementById("listado");
let formulario=document.getElementById('form');

//Botones
document.getElementById("btn_limpiar_vista").addEventListener('click', limpiar);
document.getElementById("btn_eliminar_todo").addEventListener('click', eliminar);
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    let valido=true;
    const inputs= formulario.querySelectorAll("input[required]");
    inputs.forEach(campo => {
        if (!campo.value) {
            valido=false;
        }
    });
    if(!valido){
        alert("Rellena todos los campos");
    }else{
        guardar();
    }
})

//Funciones
function guardar() {
    listado.innerHTML="";
    if (arrayProductos.length==0 && localStorage.almacenamiento){
        let productosAlmacenados= localStorage.almacenamiento;
        let productosParseados= JSON.parse(productosAlmacenados);
        productosParseados.forEach(element => {
            let nuevoProducto= new Producto();
            nuevoProducto._idProducto=element._idProducto;
            nuevoProducto._nombre=element._nombre;
            nuevoProducto._precio=element._precio;
            arrayProductos.push(nuevoProducto);
        });
    }
    arrayProductos.push(new Producto(nombre.value,precio.value));
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
        arrayProductos = []
        Producto.contadorProductos=0;
    } 
}