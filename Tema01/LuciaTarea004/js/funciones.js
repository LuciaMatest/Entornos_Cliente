"use strict";
/*Area de un circulo*/
let radio = prompt("Introduce radio: ");

function area_circulo(radio) {
    if (radio < 0) {
        throw "Valor incorrecto"
    } else if(isNaN(radio)){
        throw "No es un numero"
    }
    return Math.PI * radio ** 2
}
console.log(`El area del circulo con radio ${radio} es ${area_circulo(radio)}`);

/*Perimetro de una circunferencia*/
function peri_circulo(radio) {
    if (radio < 0) {
        throw "Valor incorrecto"
    } else if(isNaN(radio)){
        throw "No es un numero"
    }
    return Math.PI * radio * 2
}
console.log(`El perimetro del circulo con radio ${radio} es ${peri_circulo(radio)}`);

let long = prompt("Introduce longitud: ");
let lados = prompt("Introduce lados: ");

/*Perimetro de un poligono regular*/
function peri_poligono(long, lados) {
    return long * lados
}

try {
    console.log(`El perimetro de un poligono con ${lados} lados con longitud ${long} es ${peri_poligono(long, lados)}`);
} catch (error) {
    console.log("FALLO");
}

/*Area de un poligono regular*/
function area_poligono(long, lados) {
    let perimetro = long * lados;
    let alfa = 360 / lados;
    let apotema = (long / 2) / Math.tan((alfa / 2))
    return (perimetro * apotema) / 2
}

try {
    console.log(`El area de un poligono con ${lados} lados y longitud ${long} es ${area_poligono(long, lados)}`);
} catch (error) {
    console.log("FALLO");
}