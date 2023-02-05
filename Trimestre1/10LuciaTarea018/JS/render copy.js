const SERVER = 'http://192.168.0.214:3000';

window.addEventListener('load', ()=>{
    //Ordenar
    document.getElementById('ordenar').addEventListener('click', async function(evento) {
        //Cancelas la accion predeterminada
        evento.preventDefault();
        //Pasamos un array de promesas
        const [productos, categorias] = await Promise.all([
            getTabla('/productos'),
            getTabla('/categorias')
        ]);
        //Procesamos los datos
        productos.forEach((producto) => renderProduct(producto));
        categorias.forEach((categoria) => renderCategory(categoria));
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
function renderProduct(p) {
    let liProducto = document.createElement('li');
    liProducto.setAttribute('class','list-group-item');
    liProducto.appendChild(document.createTextNode(p.name));
    //Dependiendo de la categoria en la que se encuentre se irá a una lista u otra
    if (p.cat==1) {
        document.getElementById('1').appendChild(liProducto);
    } else if(p.cat==2){
        document.getElementById('2').appendChild(liProducto);
    }
}

function renderCategory(c) {
    let liCategoria = document.createElement('li');
    liCategoria.setAttribute('class','list-group-item');
    liCategoria.appendChild(document.createTextNode(c.name));

    let olCategoria = document.createElement('ol');
    olCategoria.setAttribute('class','list-group list-group-flush');
    olCategoria.setAttribute('id',c.id);
    liCategoria.appendChild(olCategoria);

    document.getElementById('listados').appendChild(liCategoria);
}