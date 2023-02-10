const SERVER="http://192.168.2.204:3000/";

let arrayJugadores=['Jugador1','Jugador2','Jugador3','Jugador4'];

const btnRepartir= document.createElement('button');
btnRepartir.innerHTML='Repartir';
btnRepartir.id='repartir';

window.addEventListener('load',async function(){
    document.getElementById('repartir').addEventListener('click',async function(evento){
        //Cancelas la accion predeterminada
        evento.preventDefault();
        //Pasamos un array de promesas
        const [jugador1,jugador2,jugador3,jugador4]= await Promise.all([
            repartirCartas('jugador1'),
            repartirCartas('jugador2'),
            repartirCartas('jugador3'),
            repartirCartas('jugador4'),
        ]);
        //Procesamos los datos
        jugador1.forEach((baraja) => renderJugador(baraja,arrayJugadores[0]));
        jugador2.forEach((baraja) => renderJugador(baraja,arrayJugadores[1]));
        jugador3.forEach((baraja) => renderJugador(baraja,arrayJugadores[2]));
        jugador4.forEach((baraja) => renderJugador(baraja,arrayJugadores[3]));
    })
});

async function repartirCartas(jugador){
    const datos = await fetch(`${SERVER}/naipes`, {
        method: 'PATCH',
        body: JSON.stringify(jugador),
        headers: {
            'content-type': 'application/json'
        }
    })

    //Comprobamos si se ha resuelto
    if (!response.ok) {
        //Lanzamos un error
        throw `Error ${response.status} de la BBDD: ${response.statusText}`;
    }
    //Devolvemos los datos JSON
    const dato = await response.json()
    return dato;
}

function renderJugador(baraja) {
    let parrafo=document.createElement('p');
    let jugada=`${baraja.id} de ${baraja.palo} |`;
    parrafo.innerHTML=jugada;
    document.getElementById('divJugador').appendChild(parrafo);
}

//numero random
function random(min,max) {
    return Math.floor((Math.random() * max)+ min);
}

document.getElementById('div03').appendChild(btnRepartir);