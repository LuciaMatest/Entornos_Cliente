function obtenerValor(nombreCookie) {
    document.cookie = 'nombre=' + encodeURIComponent(nombreCookie);
}

console.log(obtenerValor('Paco'));