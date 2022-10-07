"use strict";

console.log('App para área y perímetro de un polígono');

function calcular() {
    const forma = document.getElementById('forma');
    let n = parseInt(forma['lados'].value);
    let l = parseFloat(forma['longitud'].value);

    let perimetro = parseFloat(n) * parseFloat(l);
    if (isNaN(perimetro))
        perimetro = 'La operación no incluye números';
    document.getElementById('perimetro').value = `${perimetro}`;
    console.log(`Perímetro: ${perimetro}`);
}

function algoritmo() {
    let apotema, area, longitud_de_lado, numero_de_lados, perimetro;

    apotema = parseFloat(document.formulario1.apotema.value);
    longitud_de_lado = parseFloat(document.formulario1.longitud_de_lado.value);
    numero_de_lados = parseFloat(document.formulario1.numero_de_lados.value);

    perimetro = numero_de_lados * longitud_de_lado;

    area = apotema * apotema * numero_de_lados * Math.tan(Math.PI / numero_de_lados);

    document.formulario1.area.value = area;
    document.formulario1.perimetro.value = perimetro;
}