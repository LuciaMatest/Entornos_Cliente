const SERVER="http://192.168.0.214:3000/productos";

window.addEventListener('load', ()=>{
    //Listar
    document.getElementById('listar').addEventListener('click', (evento) => {
        //Cancelas la accion predeterminada
        evento.preventDefault();
        //Tratamos los errores con fetch
        fetch(`${SERVER}`)
        .then((response) => {
            //Comprobamos si se ha resuelto
            if (!response.ok) {
                //Lanzamos un error
                throw `Error ${response.status} de la BBDD: ${response.statusText}`;
            }
            //Devolvemos los datos JSON
            return response.json();
        })
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
                btnmodificar.addEventListener('click', () => {
                    alert('modificado')
                })
                modificar.appendChild(btnmodificar);
                fila.appendChild(modificar);

                document.getElementById('datosTabla').appendChild(fila);
            });
        })
        .catch((error) => console.error(error));
    })
});

window.addEventListener('load', ()=>{
    //Crear
    document.getElementById('crearProducto').addEventListener('submit', (evento)=>{
        //Cancelas la accion predeterminada
        evento.preventDefault();
        let nombreProdNuevo = document.getElementById('name').value;
        let descripProdNuevo = document.getElementById('descrip').value;
        
        if (nombreProdNuevo == '' || descripProdNuevo == '') {
            window.alert('Debe rellenar los datos');
        } else {
            const nuevoProducto ={
                id: '',
                name: document.getElementById('name').value,
                descrip: document.getElementById('descrip').value
            }
            //Petición POST
            fetch(`${SERVER}`, {
                method: 'POST',
                body: JSON.stringify(nuevoProducto),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
    
            .then((response) => {
                //Comprobamos si se ha resuelto
                if (!response.ok) {
                    //Lanzamos un error
                    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                }
                //Devolvemos los datos JSON
                return response.json();
            })
    
            .then(datos => {
                window.alert('Datos recibidos');
            })
            .catch((error) => console.error(error));
        }
    });
    

});

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
            //Tratamos los errores con fetch
            fetch(`${SERVER}/${idProducto}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then((response) => {
                //Comprobamos si se ha resuelto
                if (!response.ok) {
                    //Lanzamos un error
                    throw `Error ${response.status} de la BBDD: ${response.statusText}`;
                }
                //Devolvemos los datos JSON
                return response.json();
            })
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
                btnmodificar.addEventListener('click', () => {
                    alert('modificado')
                })
                modificar.appendChild(btnmodificar);
                fila.appendChild(modificar);

                document.getElementById('datosTabla').appendChild(fila);
            })
            .catch((error) => console.error(error));
        }
    });
});