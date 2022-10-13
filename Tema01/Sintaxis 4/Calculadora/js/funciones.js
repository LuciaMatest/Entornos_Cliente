console.log('Calculadora');

function sumar(v1,v2) {
    if ((isNaN(v1)) || (isNaN(v2))) {throw ("NaN")}

    return parseFloat(v1+v2);
}

function opSuma() {
    const forma=document.getElementById('calcular');
    const v1 = parseFloat(calcular['primero'].value);
    const v2 = parseFloat(calcular['segundo'].value);
    
    try {
        document.getElementById('resultado').value=`${sumar(v1,v2)}`;                
    } catch (error) {
        document.getElementById('resultado').value=error;
    }
}

function restar(v1,v2) {
    if ((isNaN(v1)) || (isNaN(v2))) {throw ("NaN")}
    return v1-v2;
}

function opResta() {
    const forma=document.getElementById('calcular');
    const v1 = parseFloat(calcular['primero'].value);
    const v2 = parseFloat(calcular['segundo'].value);
    try {
        document.getElementById('resultado').value=`${restar(v1,v2)}`;                
    } catch (error) {
        document.getElementById('resultado').value=error;
    }
}

function multiplicar(v1,v2) {
    if ((isNaN(v1)) || (isNaN(v2))) {throw ("NaN");}
    return v1*v2;
}

function opMultiplicar() {
    const forma=document.getElementById('calcular');
    const v1 = parseFloat(calcular['primero'].value);
    const v2 = parseFloat(calcular['segundo'].value);

    try {
        document.getElementById('resultado').value=`${multiplicar(v1,v2)}`;                
    } catch (error) {
        document.getElementById('resultado').value=error;
    }
}

function dividir(v1,v2) {
    if ((isNaN(v1)) || (isNaN(v2))) {
        throw ("NaN");
    } else if(v2>v1){
        throw ("El divisor es mayor que el dividendo");
    } else if(v2==0){
        throw ("La división entre cero no posee un valor definido");
    }
    return v1/v2;
}

function opDividir() {
    const forma=document.getElementById('calcular');
    const v1 = parseFloat(calcular['primero'].value);
    const v2 = parseFloat(calcular['segundo'].value);

    try {
        document.getElementById('resultado').value=`${dividir(v1,v2)}`;                
    } catch (error) {
        document.getElementById('resultado').value=error;
    }
}