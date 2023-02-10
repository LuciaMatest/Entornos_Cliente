const SERVER="http://192.168.2.204:3000/";

const boton= document.createElement('button');
boton.innerHTML='Rellenar';
let formulario=document.getElementById('forma');

formulario.addEventListener('submit', function(evento) {
    
})

document.getElementById('forma').appendChild(boton);

document.getElementById('div04').innerHTML=`Ha elegido ${} de ${}`;