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

let nombre = document.getElementById("idNombre");
let precio = document.getElementById("idPrecio");
let listado = document.getElementById("listado");
let formulario=document.getElementById('idFormulario');

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
        let tr=document.createElement('tr');
        let td_id=document.createElement('td');
        let td_nombre=document.createElement('td');
        let td_precio=document.createElement('td');

        let td_modificar=document.createElement('td');
        let btn_modificar=document.createElement('button');
        btn_modificar.innerHTML='Modificar';
        btn_modificar.setAttribute('class','btn btn-primary');
        td_modificar.appendChild(btn_modificar);

        let td_eliminar=document.createElement('td');
        let btn_eliminar=document.createElement('button');
        btn_eliminar.innerHTML='Eliminar';
        btn_eliminar.setAttribute('class','btn btn-primary');
        td_eliminar.appendChild(btn_eliminar);

        td_id.appendChild(document.createTextNode(producto._idProducto));
        td_nombre.appendChild(document.createTextNode(producto.nombre));
        td_precio.appendChild(document.createTextNode(producto.precio));

        tr.appendChild(td_id);
        tr.appendChild(td_nombre);
        tr.appendChild(td_precio);
        tr.appendChild(td_modificar);
        tr.appendChild(td_eliminar);
        listado.appendChild(tr);
        
        btn_eliminar.addEventListener('click',(evento) => {
            evento.target.parentNode.parentNode.remove();
        });

        
        btn_modificar.addEventListener('click',function() {
            
        });

        
    });
}