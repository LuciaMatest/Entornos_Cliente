const SERVER = "http://localhost:3000";
window.addEventListener('load', function () {
    document.getElementById('listar').addEventListener('submit', async (event) => {
        event.preventDefault();
        const [categorias, productos] = await Promise.all([
            getTabla('/categorias'),
            getTabla('/productos')
        ]);
        categorias.forEach(element => {
            renderCategory(element);
        });
        productos.forEach(element => {
            renderProduct(element);
        });
    });
});

async function getTabla(tabla) {
    const response = await fetch(`${SERVER}${tabla}`);
    if (!response.ok) {
        throw `Error ${response.status}de la BBDD: ${response.statusText}`
    }
    const datos = await response.json();
    return datos;
}

function renderCategory(cat) {
    let primero = document.createElement('li');
    primero.appendChild(document.createTextNode(cat.name));
    let segundo = document.createElement('ol');
    segundo.setAttribute('id', cat.id);
    primero.appendChild(segundo);
    document.getElementById('categorias').appendChild(primero);
}
//le paso la categoria, aqui hago un get con el tipo de categoria que quiero
function renderProduct(prod) {
    let elemento = document.createElement('li');
    elemento.appendChild(document.createTextNode(prod.name));

    if (prod.cat == 1) {
        document.getElementById('1').appendChild(elemento);
    } else if (prod.cat == 2) {
        document.getElementById('2').appendChild(elemento);
    }
}



