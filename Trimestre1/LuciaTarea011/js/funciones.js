let velocidad = 10;
let xDiana = 50;

function desplazar() {
    xDiana+=velocidad;
    document.getElementById('diana').style.left = `${xDiana}px`
}

let intervalDiana = setInterval(desplazar, 50);