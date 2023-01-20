const peticion = new XMLHttpRequest();
console.log("Estado inicial de la petición: " + peticion.readyState);
peticion.open('GET', 'http://localhost:3000/peliculas');
console.log("Estado de la petición tras el 'open': " + peticion.readyState);
peticion.send();
console.log("Petición hecha");
peticion.addEventListener('readystatechange', function() {
    console.log("Estado de la petición: " + peticion.readyState);
    if (peticion.readyState === 4) {
        if (peticion.status === 200) {
            console.log("Datos recibidos:");
            let usuarios = JSON.parse(peticion.responseText); // Pasamos los datos JSON a un objeto
            console.log(usuarios);
        } else {
            console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
        }
    }
})
console.log("Petición acabada");

peticion.addEventListener('load', function() {
    if (peticion.statu===200) {
        let usuarios = JSON.parse(peticion.responseText);
        console.log('correcto');
        console.log(usuarios);
    } else {
        muestraError(peticion);
    }
})
peticion.addEventListener('error', muestraError);
peticion.addEventListener('abort', muestraError);
peticion.addEventListener('timeout', muestraError);

function muestraError(peticion) {
    if (peticion.status) {
        console.log("Error "+ peticion.status +" ("+ peticion.statusText +") en la petición");
    } else {
        console.log("Ocurrió un error o se abortó la conexión");
    }
}