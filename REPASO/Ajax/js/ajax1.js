//Ajax-> Asynchronous javaScript and XML

//METODOS HTTP
//get
//post
//put
//patch
//delete






//PETICIONES de recibo de datos

const peticion = new XMLHttpRequest();
const server = "";
console.log("Estado de la peticion: " + peticion.readyState);
peticion.open('GET', server);
console.log("Estado de la peticion tras el open: " + peticion.readyState);
peticion.send();
console.log("peticion hecha");


peticion.addEventListener('readystatechange', function () {
    console.log("estado de la peticion: " + peticion.readyState);
    if (peticion.readyState === 4) {
        if (peticion.status === 200) {
            console.log("datos recibidos");
            let usuarios = JSON.parse(peticion.responseText);
            console.log(usuarios);
        } else {
            console.log("Error " + peticion.status + "(" + peticion.statusText + ") en la peticion");
        }
    }
});
console.log("peticion acabada");

//LA ultima line se ejecuta por que es asincrono, el codigo se sigue ejecutando sin esperar a que se devuelva la peticion


const peticion2 = new XMLHttpRequest();
peticion2.open('GET', 'https://jsonplaceholder.typicode.com/users');
peticion2.send();

peticion2.addEventListener('load', function () {
    if (peticion2.status === 200) {
        let usuarios = JSON.parse(peticion2.responseText);
        // procesamos los datos que tenemos en usuarios
        console.log('correcto:');
        console.log(usuarios);
    } else {
        muestraError(peticion2);
    }
})

peticion.addEventListener('error', muestraError);
peticion.addEventListener('abort', muestraError);
peticion.addEventListener('timeout', muestraError);
function muestraError(peticion2) {
    if (peticion2.status) {
        console.log("Error " + peticion2.status + " (" + peticion2.statusText + ") en la petición");
    } else {
        console.log("Ocurrió un error o se abortó la conexión");
    }
}



//PETICIONES DE ENVIO DE DATOS:


//Form del que se escucha el submit
document.getElementById('addProduct').addEventListener('submit', (event) => {
    //Creamos el producto con los valores del formulario
    const newProduct = {
        name: document.getElementById("name").value,
        descrip: document.getElementById("descrip").value,
    }
    //Creamos la peticion con el metodo post
    const peticion = new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:3000/productos');
    peticion.setRequestHeader('Content-type', 'application/json'); // Siempre tiene
                                                                    //que estar esta línea si se envían datos
    peticion.send(JSON.stringify(newProduct)); // Hay que convertir el objeto
                                                // a una cadena de texto JSON para enviarlo
    peticion.addEventListener('load', function () {
        // procesamos los datos
    })
})



//Envio de datos en formto uriencode
document.getElementById('addProduct').addEventListener('submit', (event) => {
    // Aquí va el código para comprobar que los datos son correctos
    const name=document.getElementById("name").value;
    const descrip=document.getElementById("descrip").value;
    const peticion=new XMLHttpRequest();
    peticion.open('POST', 'http://localhost:4000/productos');
    peticion.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');// formato
    // la siguiente línea lleva & para separar los parámetros
    peticion.send('name='+ encodeURIComponent(name)+'&descrip='+ encodeURIComponent(descrip));
    peticion.addEventListener('load', function() {
    // procesamos los datos
    })
})



//ENVIAR FICHEROS AL SERVIDOR CON FORM DATA
//Form data es una interfaz de XMLHttpRequest que permite construir facimente pares de clave-valor con los datos de un formulario


//ENVIANDO TODOS LOS CAMPOS DEL FORMULARIO:
document.getElementById('addProduct').addEventListener('submit', (event) => {
    const peticion=new XMLHttpRequest();

    const datosForm = new FormData(document.getElementById('addProduct'));
    // Automáticamente ha añadido todos los inputs, incluyendo tipo 'file', blob, ...
    // Si quisiéramos añadir algún dato más haríamos:
    formData.append('otrodato', 12345);
    // Y lo enviamos
    peticion.open('POST', 'https://localhost/products');
    peticion.send(datosForm);
    peticion.addEventListener('load', function() {
    // procesamos los datos aquí
    })
    })
    



    //ENVIANDO LOS DATOS QUE QUEREMOS
document.getElementById('addProduct').addEEventListener('submit', (event) => {
        const formData=new FormData(); // creamos un formData vacío
    formData.append('name', document.getElementById('name').value);
    formData.append('descrip', document.getElementById('descrip').value);
    formData.append('photo', document.getElementById('photo').files[0]);
    const peticion=new XMLHttpRequest();
    peticion.open('POST', 'https://localhost/products');
    peticion.send(formData);
    peticion.addEventListener('load', function() {
        // procesamos los datos aquí
    })
})
