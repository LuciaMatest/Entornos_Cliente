const SERVER="http://192.168.0.214:3000/productos";
const peticion = new XMLHttpRequest();

window.addEventListener('load', ()=>{
    //Buscar
    document.getElementById('buscarProducto').addEventListener('submit', (evento)=>{
        //Cancelas la accion predeterminada
        evento.preventDefault();
        let idProducto = document.getElementById('id').value;
        //Si el dato introducido no es un numero o esta vacio mostrar aviso
        if (isNaN(idProducto) || idProducto == '') {
            window.alert('Debe introducir un numero');
        } else {
            getProd(idProducto)
            .then((datos) => {
                //Procesamos los datos
                document.getElementById('datosTabla').innerHTML = "";
                let fila = document.createElement('tr');

                let valorID = document.createElement('td');
                valorID.appendChild(document.createTextNode(datos.id));
                fila.appendChild(valorID);

                let valorNombre = document.createElement('td');
                valorNombre.appendChild(document.createTextNode(datos.name));
                fila.appendChild(valorNombre);

                let valorDescripcion = document.createElement('td');
                valorDescripcion.appendChild(document.createTextNode(datos.descrip));
                fila.appendChild(valorDescripcion);
                
                let modificar = document.createElement('td');
                let btnmodificar = document.createElement('button');
                btnmodificar.innerHTML='Modificar';
                btnmodificar.setAttribute('class','btn btn-outline-dark mx-2');
                modificar.appendChild(btnmodificar);
                btnmodificar.addEventListener('click', () => {
                    let padreBoton=this.parentNode;
                    let objetivo=padreBoton.parentNode;
                    document.getElementById('idMod').value=objetivo.children[0].innerHTML;
                })
                fila.appendChild(modificar);

                document.getElementById('datosTabla').appendChild(fila);
            })
            .catch((error) => console.error(error));
        }
    });
});

function getProd(idProducto) {
    return new Promise((resolve, reject)=>{
        peticion.open('GET',`${SERVER}/${idProducto}`, true);
        peticion.send();
        peticion.addEventListener('load', () => {
            if (peticion.status === 200) {
                resolve(JSON.parse(peticion.responseText));
            } else {
                reject(`Error ${peticion.status} (${peticion.statusText}) en la petición`);
            }
        })
        peticion.addEventListener('error', () => reject('Error en la peticion HTTP'));
    })
};

window.addEventListener('load', ()=>{
    //Crear
    document.getElementById('crearProducto').addEventListener('submit', (evento)=>{
        //Cancelas la accion predeterminada
        evento.preventDefault();
        const nuevoProducto ={
            id: '',
            name: document.getElementById('name').value,
            descrip: document.getElementById('descrip').value
        }
        postProd(nuevoProducto)
    
        .then((datos) => {
            window.alert('Datos recibidos');
            console.log(datos);
        })
        .catch((error) => console.error(error));
        
    });
    

});

function postProd(nuevoProducto) {
    return new Promise((resolve, reject)=>{
        peticion.open('POST',`${SERVER}`, true);
        peticion.setRequestHeader('Content-Type', 'application/json');
        peticion.send(JSON.stringify(nuevoProducto));
        peticion.addEventListener('load', () => {
            if (peticion.status === 200) {
                resolve(JSON.parse(peticion.responseText));
            } else {
                reject(`Error ${peticion.status} (${peticion.statusText}) en la petición`);
            }
        })
        peticion.addEventListener('error', () => reject('Error en la peticion HTTP'));
    })
};

window.addEventListener('load', ()=>{
    //Listar
    document.getElementById('listar').addEventListener('click', (evento) => {
        //Cancelas la accion predeterminada
        evento.preventDefault();
        getLista()
        .then((datos) => {
            //Procesamos los datos
            document.getElementById('datosTabla').innerHTML="";
            datos.forEach(element => {
                let fila = document.createElement('tr');
                let valorID = document.createElement('td');
                valorID.appendChild(document.createTextNode(element['id']));
                fila.appendChild(valorID);

                let valorNombre = document.createElement('td');
                valorNombre.appendChild(document.createTextNode(element['name']));
                fila.appendChild(valorNombre);

                let valorDescripcion = document.createElement('td');
                valorDescripcion.appendChild(document.createTextNode(element['descrip']));
                fila.appendChild(valorDescripcion);

                let modificar = document.createElement('td');
                let btnmodificar = document.createElement('button');
                btnmodificar.innerHTML='Modificar';
                btnmodificar.setAttribute('class','btn btn-outline-dark mx-2');
                modificar.appendChild(btnmodificar);
                btnmodificar.addEventListener('click', () => {
                    let padreBoton=this.parentNode;
                    let objetivo=padreBoton.parentNode;
                    document.getElementById('idMod').value=objetivo.children[0].innerHTML;
                })
                fila.appendChild(modificar);

                document.getElementById('datosTabla').appendChild(fila);
            });
        })
        .catch((error) => console.error(error));
    })
});

function getLista() {
    return new Promise((resolve, reject)=>{
        peticion.open('GET',`${SERVER}`, true);
        peticion.send();
        peticion.addEventListener('load', () => {
            if (peticion.status === 200) {
                resolve(JSON.parse(peticion.responseText));
            } else {
                reject(`Error ${peticion.status} (${peticion.statusText}) en la petición`);
            }
        })
        peticion.addEventListener('error', () => reject('Error en la peticion HTTP'));
    })
};

window.addEventListener('load', ()=>{
    //Buscar
    document.getElementById('modificarProducto').addEventListener('submit', (evento)=>{
        //Cancelas la accion predeterminada
        evento.preventDefault();
        const idProducto = document.getElementById('idMod')
        const modProduc = {
            name: document.getElementById('nameMod').value,
            descrip: document.getElementById('descripMod').value
        }
        modProd(idProducto,modProduc)
        .then((datos) => {
            alert("Datos modificados");
            console.log(datos);
        })
        .catch((error)=>console.error(error));
    });
});

function modProd(idProducto,modProduc) {
    return new Promise((resolve, reject)=>{
        peticion.open('PATCH',`${SERVER}/${idProducto}`, true);
        peticion.setRequestHeader('Content-Type', 'application/json');
        peticion.send();
        peticion.addEventListener('load', () => {
            if (peticion.status === 200) {
                resolve(JSON.parse(peticion.responseText));
            } else {
                reject(`Error ${peticion.status} (${peticion.statusText}) en la petición`);
            }
        })
        peticion.addEventListener('error', () => reject('Error en la peticion HTTP'));
    })
};