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
        yCuchillo = 640;
        clearInterval(intervaloCuchillo);
        clearInterval(intervaloZombie);
        comenzar();
    }

    CUCHILLO.style.top = `${yCuchillo}px`;
}

//Lanzar cuchillo
const lanzar = () => {
    disparoEfectuado = true;
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