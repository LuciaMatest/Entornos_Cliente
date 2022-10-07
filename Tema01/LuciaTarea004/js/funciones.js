"use strict";
function area_circulo(radio) {
    if(typeof radio == 'string'){
        alert("No ha introducido un número");
    }
    return Math.PI * radio ** 2
}

try {
    console.log(area_circulo());
} catch (error) {
    alert("FALLO");
}