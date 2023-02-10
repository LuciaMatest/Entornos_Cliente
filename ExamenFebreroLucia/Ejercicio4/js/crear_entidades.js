const SERVER="http://192.168.2.204:3000/";

const botonRepartir= document.createElement('button');
botonRepartir.innerHTML='Repartir';

window.addEventListener('load',()=>{
    botonRepartir.addEventListener('click', async function (evento) {
        //Cancelas la accion predeterminada
        evento.preventDefault();
        
        const [naipes] = await Promise.all([
            getMazo(naipes)
        ]);
        
    })
    
});

function getMazo(naipes) {
    let parrafo = document.createElement("p");
  
    let texto = naipes.floor(Math.random());
  
    parrafo.appendChild(document.createTextNode(texto));
  
    document.getElementById("div01").appendChild(parrafo);
}

document.getElementById('div03').appendChild(botonRepartir);