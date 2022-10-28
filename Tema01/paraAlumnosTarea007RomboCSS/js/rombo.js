function actualizarRombo() {
    const ESPACIO = '&nbsp;';
    const ASTERISCOS = '*';
    const SALTO = '<br/>';
    const numFilas = document.getElementById('input_filas').value;
    let rombo = "";
    let espaciosIzq = 3;
    let espaciosCen = 5;

    for (let i = 0; i < numFilas; i++) {
        rombo += ESPACIO.repeat(espaciosIzq);
        rombo += ASTERISCOS;
        rombo += ESPACIO.repeat(espaciosCen);
        rombo += ASTERISCOS;
        rombo += SALTO;
    }

    for (let i = numFilas - 1; i > parseInt(numFilas/2); i++) {
        rombo += ESPACIO.repeat(espaciosIzq);
        rombo += ASTERISCOS;
        rombo += ESPACIO.repeat(espaciosCen);
        rombo += ASTERISCOS;
        rombo += SALTO;
    }
    document.getElementById('divRombo').innerHTML = rombo;
}