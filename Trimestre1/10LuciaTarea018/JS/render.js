const SERVER = 'http://192.168.0.214:3000';

window.addEventListener('load', ()=>{
    //Ordenar
    document.getElementById('listar').addEventListener('click', async function(evento) {
        //Cancelas la accion predeterminada
        evento.preventDefault();
        //Pasamos un array de promesas
        const [categorias, productos] = await Promise.all([
            getTabla('/categorias'),
            getTabla('/productos')
        ]);
        //Procesamos los datos
        categorias.forEach((categoria) => renderCategory(categoria));
        productos.forEach((producto) => renderProduct(producto));
    })
});

//Recogemos los datos de cada tabla
async function getTabla(tabla) {
    const response = await fetch(`${SERVER}${tabla}`);
    //Comprobamos si se ha resuelto
    if (!response.ok) {
        //Lanzamos un error
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    //Devolvemos los datos JSON
    const dato = await response.json()
    return dato;
};

//Creamos dos funciones para llamar tanto a los productos como a las categorias
function renderCategory(categoria) {
    let liCategoria = document.createElement('li');
    liCategoria.setAttribute('class','list-group-item');
    liCategoria.id = categoria.id;
    liCategoria.appendChild(document.createTextNode(categoria.name));

    document.getElementById('listados').appendChild(liCategoria);
}

function renderProduct(producto) {
    let liProducto = document.createElement('li');
    liProducto.setAttribute('class','list-group-item');
    liProducto.appendChild(document.createTextNode(producto.name));
    //Dependiendo de la categoria en la que se encuentre se irá a una lista u otra
    if (producto.cat==document.getElementById("1").id) {
        let olProd1 = document.createElement('ol');
        olProd1.appendChild(liProducto)
    } else if(producto.cat==document.getElementById("2").id){
        let olProd2 = document.createElement('ol');
        olProd2.appendChild(liProducto)
    }
    document.getElementById('listados').appendChild(olProd1);
    document.getElementById('listados').appendChild(olProd2);
}

