console.log('Calculadora');

function suma(){
    const calcular = document.getElementById('calcular');
    let p = parseInt(calcular['primero'].value);
    let s = parseFloat(calcular['segundo'].value);

    let resultado = parseFloat(p) * parseFloat(s);
    if (n==NaN) throw 'Incorrecto';
    document.getElementById('resultado').value = `${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

// function resta(){
//     const forma = document.getElementById('calcular');
//     let p = parseFloat(calcular['primero'].value);
//     let s = parseFloat(calcular['segundo'].value);
// }

// function dividir(){
//     const forma = document.getElementById('calcular');
//     let p = parseFloat(calcular['primero'].value);
//     let s = parseFloat(calcular['segundo'].value);
// }

// function multiplicar(){
//     const forma = document.getElementById('calcular');
//     let p = parseFloat(calcular['primero'].value);
//     let s = parseFloat(calcular['segundo'].value);
// }