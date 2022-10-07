"use strict";
/*Area de un circulo*/
function area_circulo(radio) {
    return Math.PI * radio ** 2
}

try {
    let radio = 4;
    console.log(`El area del circulo con radio ${radio} es ${area_circulo(radio)}`);
} catch (error) {
    alert("FALLO");
}

/*Perimetro de una circunferencia*/
function peri_circulo(radio) {
    return Math.PI * radio * 2
}

try {
    let radio = 5.6;
    console.log(`El perimetro del circulo con radio ${radio} es ${peri_circulo(radio)}`);
} catch (error) {
    alert("FALLO");
}

/*Perimetro de un poligono regular*/
function peri_poligono(long, lados) {
    return long * lados
}

try {
    let long = 8;
    let lados = 5;
    console.log(`El perimetro de un poligono con ${lados} lados con longitud ${long} es ${peri_poligono(long, lados)}`);
} catch (error) {
    alert("FALLO");
}

/*Area de un poligono regular*/
function area_poligono(long, lados) {
    let perimetro = long * lados;
    let alfa = 360 / lados;
    let apotema = (long / 2) / Math.tan((alfa / 2))
    return (perimetro * apotema) / 2
}

try {
    let long = 8;
    let lados = 5;
    console.log(`El area de un poligono con ${lados} lados y longitud ${long} es ${area_poligono(long, lados)}`);
} catch (error) {
    alert("FALLO");
}