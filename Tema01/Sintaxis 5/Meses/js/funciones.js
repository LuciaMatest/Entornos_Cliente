const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


document.querySelector("#añadir").addEventListener("click", () => {
    if (arrayMeses.indexOf(meses.textContent) === -1 || arrayMeses.indexOf(meses.textContent) === arrayMeses.length - 1) {
        meses.textContent = arrayMeses[0];
    } else {
        meses.textContent = arrayMeses[arrayMeses.indexOf(meses.textContent) + 1];
    }
});