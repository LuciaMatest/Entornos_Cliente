//array
let arrayPalos=['OROS','COPAS','ESPADAS','BASTOS'];
let arrayLugares=['Baraja','Descartes','Jugador1','Jugador2','Jugador3','Jugador4'];

//Rellenar las optiones
for (const palo of arrayPalos) {
    let option=document.createElement('option');
    option.innerHTML=palo;
    option.value=palo;
    document.getElementById("palo").appendChild(option);
}
for (const lugar of arrayLugares) {
    let option=document.createElement('option');
    option.innerHTML=lugar;
    option.value=lugar;
    document.getElementById("lugar").appendChild(option);
}

//evento
document.getElementById('forma').addEventListener('submit',function(evento){
    //Cancelas la accion predeterminada
    evento.preventDefault();
    let valido=true;
    const select= document.getElementById('forma').querySelectorAll("select[required]");
    select.forEach(campo=>{
        if (campo.value==="0") {
            valido=false;
        }
    });
    if (!valido) {
        document.getElementById('eleccion').innerHTML='Debe seleccionar ambas opciones';
    }else{
        document.getElementById('eleccion').innerHTML=`Has elegido ${palo.value} de ${lugar.value}`;
    }
    
})