let velocidad = 10;
let xDiana = 50;
let cambia = false;

function desplazarDiana() {
    //Dar la vuelta
    if (xDiana >= document.documentElement.clientWidth - 60) {
        velocidad = velocidad * (-1);
        console.log(velocidad);
    } else if (xDiana <= 0) {
        velocidad = velocidad * (-1);
    }
    xDiana += velocidad;
    document.getElementById("Diana").style.left = `${xDiana}px`;
}

function moverFlecha(){
    // if()
}
let intervalDiana = setInterval(desplazarDiana, 50);