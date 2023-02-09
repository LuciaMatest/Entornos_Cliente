// async / await



//Peticiones que permiten escribir peticiones asicronas como si fueran sincronas
//No estan soportadas en navegadores antiguos
//await hace que la ejecucion se espera a que se resuelva la promesa devuelta de esta función
//las funciones que llevan await se espera un tiempo
//con la palabra async envolvemos esa funcion en una promesa, podiendo hacerle un await o un .then al llamarla

//async se coloca al escribir la funcion al principi, await se coloca al principio cuando llamamos a la funcion
//ej: async function pideDatos(){};
//const datos= await pideDatos(){};


const SERVER = 'http://localhost:4000';//CREACION DE LA CONEXION
//listeners
window.addEventListener('load', () => {
    document.getElementById('getProduct').addEventListener('submit', async (event) => {
        event.preventDefault();
        //comprobación del valor
        let idProd = document.getElementById('id-prod').value;
        if (isNaN(idProd) || idProd.trim() == '') {
            alert('Debes introducir un número')
        } else {
            try {
                //llamada a la funcion async, aqui parara hasta recibir los datos, se puede sustituir async por un getData().then(datos);
                const datos = await getData(idProd)
                // La ejecución se para en la sentencia anterior hasta que
                // contesta la función getData
                document.getElementById('p1').innerHTML = datos[0].name + " " + datos[0].descrip;

            } catch (err) {
                console.log("mal");
                console.log(err);
                return;
            }
        }
    })
})
//como devuelve promesas podemos usar tambien el metodo .catch() de las promesas

//fucnion async que busca los datos haciendo un await del fetch, ese await seria lo mismo que gestionar las promesas del fetch
async function getData(idProd) {
    const response = await fetch(SERVER + '/productos?id=' + idProd)
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const datos = await response.json()
    return datos
}




//POST CON ASYNC/AWAIT
// POST con fetch y asunc await
//dato1->response
//dato2->valores recibidis

window.addEventListener('load', () => {
    document.getElementById('addProduct')
        .addEventListener('submit', async (event) => {
            event.preventDefault();

            const nuevoProducto = {
                id: "",
                name: document.getElementById('name').value,
                descrip: document.getElementById('descrip').value
            };

            const dato2 = await anadirProducto(nuevoProducto);
            //pintamos lo que queramos
            console.log(dato2);
            document.getElementById('p1').innerText = `${dato2.name}${dato2.descrip}`;
        });
});

async function anadirProducto(nuevoProducto) {
    const dato1 = await fetch(SERVER + '/productos',
        {
            method: 'POST',
            body: JSON.stringify(nuevoProducto),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    const dato2 = await dato1.json();
    return dato2;
}


//PROMISE.ALL
//Con promise.all se le pasa un array de promesas, devolviendo ambas promesas 
// si todo ha ido bien o devolviendo un error en el momento en el que una de las dos falle


//llamar a la funcion al cargar el documento o darle al submit

async function getData() {
    //si las promesas se cumplen se asignan a categories y products respectivamente, sino es un error
    const [categories, products] = await Promise.all([
        getTable('/categories'),
        getTable('/products')
    ])
    //se muestran las categorias
    categories.forEach((category) => renderCategory(category));
    //se muestran los productos;
    products.forEach((product) => renderProduct(product))
}


//funcion que coge cada tabla
async function getTable(table) {
    const response = await fetch(SERVER + table)
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
    }
    const data = await response.json()
    return data
}
