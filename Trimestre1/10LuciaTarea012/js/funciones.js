'use strict';
/*--------Variables, intervalos y constantes--------*/
//Constantes
const ZOMBIE = document.getElementById('idZombie');
const CUCHILLO = document.getElementById('idCuchillo');

// Intervalos
let intervaloCuchillo;
let intervaloZombie;

//Booleanos
let disparoEfectuado = false;
let sonidoActivado = true;

//Diana
let velocidadZombie = 10;
let xZombie = 0;
let yZombie = 0;

//Flecha
let xVelocidadCuchillo = 4;
let yVelocidadCuchillo = 18;
let xCuchillo = document.documentElement.clientWidth / 2;
let yCuchillo = 640;

//Muertes
let acierto = 0;
let fallo = 0;
let marcadorAciertos = document.getElementById('aciertos');
let marcadorFallos = document.getElementById('fallos');

/*--------Desplazamiento--------*/
function posicionar() {
    yZombie = ZOMBIE.getBoundingClientRect().top;
}

//Desplazar zombie
const desplazarZombie = () => {
    xZombie += velocidadZombie;
    ZOMBIE.style.left = `${xZombie}px`;

    if ((xZombie + 20) >= document.documentElement.clientWidth - 20) {
        velocidadZombie = velocidadZombie * (-1);
    }
    if (xZombie <= 0) {
        velocidadZombie = velocidadZombie * (-1);
    }
}

//Desplazar cuchillo
function desplazarCuchillo() {
    yCuchillo -= yVelocidadCuchillo;
    CUCHILLO.style.top = `${yCuchillo}px`;

    if (yCuchillo < 0) {
        clearInterval(intervaloCuchillo);
        yCuchillo = 640;
        fallarZombie();
        comenzar();
    }

    CUCHILLO.style.top = `${yCuchillo}px`;

    if ((yCuchillo <= yZombie) && (yCuchillo >= yZombie)) {
        if ((xCuchillo >= xZombie) && (xCuchillo <= xZombie)) {
            if (sonidoActivado) document.getElementById("audio_acierto").play();
            clearInterval(intervalFlecha);
            clearInterval(intervalDiana);
            acertarZombie();
        } else { //FALLO
            if (sonidoActivado) document.getElementById("audio_error").play();
        }
    }
}

//Lanzar cuchillo
const lanzar = () => {
    disparoEfectuado = true;
    if (sonidoActivado) document.getElementById("audio_cerca").play();
    intervaloCuchillo = setInterval(desplazarCuchillo, 50);
    console.log('yCuchillo: ' + yCuchillo);
}

//Escuchar teclas
function escucharTeclas(e) {
    switch (e.key) {
        case 'ArrowLeft':
            xCuchillo -= xVelocidadCuchillo;
            CUCHILLO.style.left = `${xCuchillo}px`;
            break;

        case 'ArrowRight':
            xCuchillo += xVelocidadCuchillo;
            CUCHILLO.style.left = `${xCuchillo}px`;
            break;

        case 'ArrowUp':
            if (!disparoEfectuado) {
                lanzar();
            }
            break;

        default:
            break;
    }
}

function resetear() {
    document.getElementById('html').reset();
}

//Comenzar
function comenzar() {
    console.log('comenzar');
    CUCHILLO.style.top = `${yCuchillo}px`;
    CUCHILLO.style.left = `${xCuchillo}px`;
    intervaloZombie = setInterval(desplazarZombie, 50);
    document.body.addEventListener('keydown', escucharTeclas);
}

document.addEventListener('load', comenzar());

/*--------Marcador--------*/
function acertarZombie() {
    acierto++;
    marcadorAciertos.innerHTML = `Aciertos: ${acierto}`;
}
function fallarZombie() {
    fallo++;
    marcadorFallos.innerHTML = `Fallos: ${fallo}`;
}

/*--------Sonidos--------*/
let muteSonido = document.getElementById('idMute');

function controlSonido() {
    if (sonidoActivo) {
        sonidoActivo = false;
        muteSonido.value = 'Activar sonido';
        muteSonido.classList.remove('fallo');
        muteSonido.classList.add('acierto');
    } else if (!sonidoActivo) {
        sonidoActivo = true;
        muteSonido.value = 'Desactivar sonido';
        muteSonido.classList.remove('acierto');
        muteSonido.classList.add('fallo');
    }
}