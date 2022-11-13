'use strict';
const flecha = document.getElementById('contenedorFlecha');

// Intervalos
let intervalFlecha;
let intervalDiana;
// Boleanos
let disparoEfectuado = false;
let sonidoActivado = true;
// Diana
let diametroDiana = 40;
let velocidadDiana = 10;
let xDiana = 0;
let yDiana = 0;
// Flecha
let xVelocidadFlecha = 4;
let yVelocidadFlecha = 18;
let xFlecha = 0;
let yFlecha = 500;

// Funcion para pintar la diana
function dibujarDiana() {
    // Posición de la diana
    document.getElementById('contenedorDiana').style.position = 'absolute';
    // Tamaño parte exterior
    document.getElementById('contenedorDiana').style.width = `${diametroDiana}px`;
    document.getElementById('contenedorDiana').style.height = `${diametroDiana}px`;
    // Color interior
    document.getElementById('contenedorDiana').style.backgroundColor = 'yellow';
    // Borde
    document.getElementById('contenedorDiana').style.border = `${diametroDiana / 5}px`;
    // Color borde
    document.getElementById('contenedorDiana').style.borderColor = 'maroon';
    document.getElementById('contenedorDiana').style.borderStyle = 'solid';
    // Rendondez
    document.getElementById('contenedorDiana').style.borderRadius = '50%';

    yDiana = document.getElementById('contenedorDiana').getBoundingClientRect().top;
    yDiana += diametroDiana / 2 + diametroDiana / 5;

    // Posición del centro de la diana
    document.getElementById('centroDiana').style.position = 'absolute';
    // Tamaño parte interior
    document.getElementById('centroDiana').style.width = `${diametroDiana / 2}px`;
    document.getElementById('centroDiana').style.height = `${diametroDiana / 2}px`;
    // Color
    document.getElementById('centroDiana').style.backgroundColor = 'maroon';
    // Posición respecto al circulo más grande
    document.getElementById('centroDiana').style.left = `${diametroDiana / 4}px`;
    document.getElementById('centroDiana').style.top = `${diametroDiana / 4}px`;
    // Rendondez
    document.getElementById('centroDiana').style.borderRadius = '50%';
}

// Función para desplazar la diana
const desplazarDiana = () => {
    xDiana += velocidadDiana;
    document.getElementById('contenedorDiana').style.left = `${xDiana}px`;
    document.getElementById('contenedorDiana').style.top = `${yDiana}px`;

    if ((xDiana + diametroDiana) >= document.documentElement.clientWidth - 20) { //da la vuelta
        velocidadDiana = velocidadDiana * (-1);
    }
    if (xDiana <= 0) { //da la vuelta
        velocidadDiana = velocidadDiana * (-1);
    }
}

// Funcion para pintar la flecha
function dibujarFlecha(ancho, alto, color) {
    // Tamaño flecha
    document.getElementById('contenedorFlecha').style.width = `${ancho}px`;
    document.getElementById('contenedorFlecha').style.height = `${alto}px`;
    // Color
    document.getElementById('contenedorFlecha').style.backgroundColor = color;
    // Posicion
    document.getElementById('contenedorFlecha').style.position = 'absolute';
    xFlecha = document.documentElement.clientWidth / 2;
    document.getElementById('contenedorFlecha').style.left = `${xFlecha}px`;
}

// Función para desplazar la flecha
function desplazarFlecha() {
    yFlecha -= yVelocidadFlecha;
    flecha.style.top = `${yFlecha}px`;
    if (yFlecha < 0) {  //ha llegado arriba
        yFlecha = 500;
        clearInterval(intervalFlecha);
        clearInterval(intervalDiana);
        //comenzar();
    }
    flecha.style.top = `${yFlecha}px`;

    if ((yFlecha <= (yDiana + diametroDiana / 2 + diametroDiana / 5)) && (yFlecha >= yDiana)) { //Flecha llega a la altura de la diana
        if ((xFlecha >= xDiana) && (xFlecha <= xDiana + diametroDiana)) { //ACIERTO
            if (sonidoActivado) document.getElementById("audio_acierto").play();
            clearInterval(intervalFlecha);
            clearInterval(intervalDiana);
        } else { //FALLO
            if (sonidoActivado) document.getElementById("audio_error").play();
        }
    }
}

const disparar = () => {
    disparoEfectuado = true;
    flecha.style.backgroundColor = 'brown';
    if (sonidoActivado) document.getElementById("audio_cerca").play();
    intervalFlecha = setInterval(desplazarFlecha, 50);
    console.log('yFlecha: ' + yFlecha);

}

function escucharTeclas(evento) {
    console.log('tecla: ' + evento.key);
    switch (evento.key) {
        case 'ArrowLeft':
            xFlecha -= xVelocidadFlecha;
            flecha.style.left = `${xFlecha}px`;
            break;

        case 'ArrowRight':
            xFlecha += xVelocidadFlecha;
            flecha.style.left = `${xFlecha}px`;
            break;

        case ' ':
            disparar();
            break;

        case 'ArrowUp':
            if (!disparoEfectuado) {
                disparar();
            }
            break;

        case 'ArrowDown':
            reiniciar();
    }
}

function reiniciar() {
    disparoEfectuado = false;
    dibujarFlecha(5, 35, 'cornflowerblue');
    flecha.style.top = `${yFlecha}px`
    intervalDiana = setInterval(desplazarDiana, 50);
    document.body.addEventListener('keydown', escucharTeclas);
}

function comenzar() {
    console.log('comenzar');
    document.getElementById('contenedorHueco').style.height = '400px';
    document.getElementsByTagName('header')[0].style.backgroundColor = 'cornflowerblue';
    dibujarDiana();
    dibujarFlecha(5, 35, 'cornflowerblue');
    flecha.style.top = `${yFlecha}px`
    intervalDiana = setInterval(desplazarDiana, 50);
    document.body.addEventListener('keydown', escucharTeclas);
}

document.addEventListener('load', comenzar());