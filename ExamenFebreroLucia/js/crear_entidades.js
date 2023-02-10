const SERVER="http://192.168.2.204:3000";
//a
let botonRellenar = document.createElement('input');
botonRellenar.type = 'button';
botonRellenar.value = 'Rellenar';
botonRellenar.id = 'añadir';
document.getElementById('div03').appendChild(botonRellenar);

window.addEventListener('load', () =>{
    document.getElementById('Rellenar').addEventListener('click', async (evento) => {
        //Cancelas la accion predeterminada
        evento.preventDefault();
         //Pasamos un array de promesas
        const [palos, naipes, lugar] = await Promise.all([
            getTabla('/palos'),
            getTabla('/naipes'),
            getTabla('/lugar'),
        ]);

        //Procesamos los datos
        palos.forEach((palo) => renderPalos(palo));
        naipes.forEach((naipe) => renderNaipes(naipe));
        lugar.forEach((lugar) => renderLugar(lugar));
    });
});