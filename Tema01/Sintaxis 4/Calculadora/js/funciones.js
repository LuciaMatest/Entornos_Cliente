console.log('Calculadora');

function sumar(v1,v2) {
    if ((isNaN(v1)) || (isNaN(v2))) {throw new Error("Vuelve a intentarlo")}

    return parseInt(v1+v2);
}

function restar(v1,v2) {
    if ((isNaN(v1)) || (isNaN(v2))) {throw new Error("Vuelve a intentarlo")}
    return v1-v2;
}
function dividir(v1,v2) {
    if ((isNaN(v1)) || (isNaN(v2))) {
        throw new Error("Vuelve a intentarlo");
    } else if(v2>v1){
        throw new Error("El divisor es mayor que el dividendo");
    } else if(v2==0){
        throw new Error("La división entre cero no posee un valor definido");
    }
    return v1/v2;
}
function multiplicar(v1,v2) {
    if ((isNaN(v1)) || (isNaN(v2))) {throw new Error("Vuelve a intentarlo");}
    return v1*v2;
}

//
function operacionSuma() {
    const forma=document.getElementById('calcular');
    const v1 = parseInt(calcular['primero'].value);
    const v2 = parseInt(calcular['segundo'].value);
    
    try {
        document.getElementById('resultado').value=`${suma(v1,v2)}`;                
    } catch (error) {
        document.getElementById('resultado').value=error;
    }
}

function operacionResta() {
    const forma=document.getElementById('calcular');
    const v1 = parseInt(calcular['primero'].value);
    const v2 = parseInt(calcular['segundo'].value);
    try {
        document.getElementById('resultado').value=`${resta(v1,v2)}`;                
    } catch (error) {
        document.getElementById('resultado').value=error;
    }
}
function operacionDividir() {
    const forma=document.getElementById('calcular');
    const v1 = parseInt(calcular['primero'].value);
    const v2 = parseInt(calcular['segundo'].value);

    try {
        document.getElementById('resultado').value=`${division(v1,v2)}`;                
    } catch (error) {
        document.getElementById('resultado').value=error;
    }
}
function operacionMultiplicar() {
    const forma=document.getElementById('calcular');
    const v1 = parseInt(calcular['primero'].value);
    const v2 = parseInt(calcular['segundo'].value);

    try {
        document.getElementById('resultado').value=`${multiplicacion(v1,v2)}`;                
    } catch (error) {
        document.getElementById('resultado').value=error;
    }
}