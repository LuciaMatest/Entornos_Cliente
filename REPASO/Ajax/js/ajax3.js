//OBTENER UN PRODUCTO DADO SU ID:

//SE CREA UNA CONSTANTE SERVER CON LA DIRECCION Y EL PUERTo
const SERVER = 'http://localhost:4000';

//LISTENER PARA CUANDO CARGUE EL DOCUMENTO
window.addEventListener('load', function () {
    //listener del metodo submit del form 
    document.getElementById('addProduct').addEventListener('submit', (event) => {
        event.preventDefault(); // Cancela la acción predeterminada del evento ‘submit’
        //Se recoge el valor del id y se comprueba si es numero o no

        //Si lo es se le pasa al metodo getProducto
        const idProd = document.getElementById('id-prod').value;
        if (isNaN(idProd) || idProd == '') {
            alert('Debes introducir un número');
        } else {
            getProducto(idProd);
        }
    })
})


//en getProducto se crea la petición para recoger el producto correspondiente
//en vez de devolver el producto recogido , se mete en el innerhtml del p que queremos que muestre el producto
// antes de esto lo convertimos a un objto
function getProducto(idProd) {
    const peticion = new XMLHttpRequest();
    peticion.open('GET', SERVER + '/productos?id=' + idProd);
    peticion.send();
    peticion.addEventListener('load', function () {
        if (peticion.status === 200) {
            const datos = JSON.parse(peticion.responseText); // Convertirmos los datos JSON a un objeto
            document.getElementById('p1').innerHTML = datos[0].name + " " + datos[0].descrip;
            console.log(datos);
        } else {
            console.error("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
        }
    })
    peticion.addEventListener('error', () => console.error('Error en la petición HTTP'));
}



//FUNCION CALLBACK


// const SERVER = 'http://localhost:4000';
//Listener del documento y del submit
window.addEventListener('load', function () {
    document.getElementById('addProduct').addEventListener('submit', (event) => {
        event.preventDefault();
        let idProd = document.getElementById('id-prod').value
        if (isNaN(idProd) || idProd.trim() == '') {
            alert('Debes introducir un número')
        } else {
            //Si es un numero se llama a getprod para conseguir el objeto, una vez se tiene llama a renderprod
            getProd(idProd, renderProd)
        }
    })
})
function renderProd(datos) {
    // aquí pintamos los datos. Habrá casos que será muy extenso.
    document.getElementById('p1').innerHTML = datos[0].name + " " + datos[0].descrip;
}

//Busca el producto
function getProd(idProd, callback) {
    const peticion = new XMLHttpRequest()
    peticion.open('GET', SERVER + '/productos?id=' + idProd);
    peticion.send()
    peticion.addEventListener('load', function () {
        if (peticion.status === 200) {
            //Si lo encuentra con la funcion callback le pasa los datos a la funcion renderprod, la cual se paso como argumento
            callback(JSON.parse(peticion.responseText));
        } else {
            console.error("Error " + peticion.status + " (" + peticion.statusText + ") en la petición")
        }
    })
    peticion.addEventListener('error', () => console.error('Error en la petición HTTP'))
}






//PROMESAS:



//Listener del documento y del submit
window.addEventListener('load', function () {
    document.getElementById('addProduct').addEventListener('submit', (event) => {
        event.preventDefault();
        let idProd = document.getElementById('id-prod').value
        if (isNaN(idProd) || idProd.trim() == '') {
            alert('Debes introducir un número')
        } else {
            getProd(idProd)
                .then(function (datos) {
                    // aquí pintamos los datos. Habrá casos que será muy extenso.
                    document.getElementById('p1').innerHTML = datos[0].name + " " + datos[0].descrip;
                })
                .catch(function (error) {
                    console.error(error)
                })
        }
    })
})




//RESOLVE->funcion callback a la que se llamara cuando se resuelva la promersa satisfactoriamente
//REJECT->funcion callback a la que se llamara si se resuelve con errores
//Busca el producto
function getProd(idProd) {
    return new Promise(function (resolve, reject) {
        let peticion = new XMLHttpRequest();
        peticion.open('GET', SERVER + '/productos?id=' + idProd);
        peticion.send()
        peticion.addEventListener('load', () => {
            if (peticion.status === 200) {
                resolve(JSON.parse(peticion.responseText))
            } else {
                reject("Error " + this.status + " (" + this.statusText + ") en la petición")
            }
        })
        peticion.addEventListener('error', () => reject('Error en la petición HTTP'))
    })
}






//FETCH

//linstener del documento
window.addEventListener("load", () => {
    document.getElementById("addProduct").addEventListener("submit", (event) => {
        event.preventDefault();
        let idProd = document.getElementById("id-prod").value;
        if (isNaN(idProd) || idProd.trim() == "") {
            alert("Debes introducir un número");
        } else {
            fetch(SERVER + "/productos?id=" + idProd)
                .then((response) => {
                    if (!response.ok) {//FETCH solo da error si no hay conexion, por lo tanto se ha de gestionar los errores con .ok
                        // lanzamos un error que interceptará el .catch()
                        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                    }
                    return response.json(); // devolvemos la promesa que hará el JSON.parse
                })
                .then((datos) => {
                    // ya tenemos los datos formateados
                    // Aquí procesamos los datos (en nuestro ejemplo los pintaríamos en la página)
                    document.getElementById("p1").innerHTML =
                        datos[0].name + " " + datos[0].descrip;
                    console.log(datos);
                })
                .catch((error) => console.error(error));
        }
    });
});

//fetch devuelve los datos “en crudo” por lo que si la respuesta está en formato JSON habrá con convertirlos.
// Para ello dispone del método .json()







//POST Y PUT
let url=SERVER+"/productos";
window.addEventListener("load", () => {
    document.getElementById("addProduct").addEventListener("submit", (event) => {
        event.preventDefault();
        let data = {
            id: "",
            name: document.getElementById('name').value,
            descrip: document.getElementById('descrip').value
        };
        
            fetch(url, {
                method: 'POST',//metodo post,put o delete se debe pasar un body y get si es un id en concreto
                body: JSON.stringify(data), // los datos que enviamos al servidor en el 'send'
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (!response.ok) {//comprobación de errores en la respuesta de la bbdd
                        throw `Error ${response.status} de la BBDD: ${response.statusText}`
                    }
                    return response.json()
                })
                .then(datos => {
                    alert('Datos recibidos')
                    console.log(datos)
                })
                .catch(err => {
                    alert('Error en la petición HTTP: ' + err.message);
                })

        }
    );
});