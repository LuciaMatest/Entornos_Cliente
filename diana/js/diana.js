let velocidad = 10;
let xDiana = 50;
let cambia = false;

function desplazarDiana() {
  //Dar la vuelta
  if (xDiana >= document.documentElement.clientWidth - 60) {
    velocidad = velocidad * -1;
    console.log(velocidad);
  } else if (xDiana <= 0) {
    velocidad = velocidad * -1;
  }
  xDiana += velocidad;
  document.getElementById("diana").style.left = `${xDiana}px`;
}

const ARROW = document.getElementById("flecha");
let xVelocidadFlecha = 4;
let yVelocidadFlecha = 18;
let xFlecha = document.documentElement.clientWidth/2;
let yFlecha = 0;

function moverFlecha(event) {
  switch (event.key) {
    case "ArrowLeft":
      xFlecha -= xVelocidadFlecha;
      ARROW.style.left = `${xFlecha}px`;
      break;
    case "ArrowRight":
      xFlecha += xVelocidadFlecha;
      ARROW.style.left += `${xFlecha}px`;
      break;
  }
}


let intervalDiana1 = setInterval(desplazarDiana, 50);
