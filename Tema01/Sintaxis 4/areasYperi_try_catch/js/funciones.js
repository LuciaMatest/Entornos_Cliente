'use strict';
console.log('App para área y perímetro de un polígono');

function calcularPerimetroPoligono(n, l){
    return parseFloat(n*l);
}

function calcularAreaPoligono(n, l){
    const alfa= (2*Math.PI)/n;
    const apotema= (l/2)/ Math.tan((alfa/2));
    return(l*n*apotema)/2;
}

function calcularPerimetroCircunferencia(r){
    return parseFloat(2 * Math.PI * r);
}

function calcularAreaCirculo(r){
    return parseFloat(Math.PI * r * r);
}

function calcularA(){
    const forma = document.getElementById('formA');
    const n = parseInt(forma['lados'].value);
    const l = parseFloat(forma['longitud'].value);
    if ((n==NaN) || (n < 3) ) throw 'Número de Lados incorrecto';
    if ((l==NaN ) || n < 0) throw 'Longitud del lado incorrecta';
    
    document.getElementById('perimetroA').value = `${calcularPerimetroPoligono(n,l)}`;
    console.log(`Perímetro Polígono: ${calcularPerimetroPoligono(n,l)}`);

    document.getElementById('areaA').value = `${calcularAreaPoligono(n,l)}`;
    console.log(`Perímetro Polígono: ${calcularAreaPoligono(n,l)}`);
}

function calcularB(){
    const formb = document.getElementById('formB');
    const r = parseInt(formb['radio'].value);
    if ((r==NaN ) || r < 0) throw 'Longitud del radio incorrecta';
    
    document.getElementById('perimetroB').value = `${calcularPerimetroCircunferencia(r)}`;
    console.log(`Perímetro Círculo: ${calcularPerimetroCircunferencia(r)}`);

    document.getElementById('areaB').value = `${calcularAreaCirculo(r)}`;
    console.log(`Perímetro Polígono: ${calcularAreaCirculo(r)}`);

}