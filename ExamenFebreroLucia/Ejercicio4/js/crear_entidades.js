const SERVER="http://192.168.2.204:3000";

const botonRepartir= document.createElement('button');
botonRepartir.innerHTML='Repartir';

window.addEventListener('load',()=>{
    botonRepartir.addEventListener('click', async function (evento) {
        //Cancelas la accion predeterminada
        evento.preventDefault();

        
    })
});

document.getElementById('div03').appendChild(botonRepartir);