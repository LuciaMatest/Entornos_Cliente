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
    document.getElementById("diana").style.left = `${xDiana}px`;
}

let x = 0;
let y = 0;
let flechita = document.getElementById('flecha');

function moverFlecha(event){
    if(event.keyCode == '39'){//derecha
		x= x + 100;
		flechita.style.left = x + 'px';
	}

	if(event.keyCode == '37'){//Izquierda
		x= x - 100;
		flechita.style.left = x +'px';	
	}
}
let intervalDiana = setInterval(desplazarDiana, 50);