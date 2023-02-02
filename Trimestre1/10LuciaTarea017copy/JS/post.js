const SERVER = 'http://192.168.2.204:3000/productos';

async function crearProducto(nuevoProducto) {
    const mtdPost = await fetch(`${SERVER}`, {
        method: 'POST',
        body: JSON.stringify(nuevoProducto),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    const mtdPost2 = await mtdPost.json();
    return mtdPost2;
}

window.addEventListener('load', () =>{
    document.getElementById('crearProducto').addEventListener('submit', async (evento) => {
        evento.preventDefault();
        const nuevoProducto={
            id:"",
            name:document.getElementById('name').value,
            descrip:document.getElementById('descrip').value
        };

        const mtdPost2 = await crearProducto(nuevoProducto);
        console.log(mtdPost2);

        document.getElementById('datosTabla').innerText = `${mtdPost2.name} ${mtdPost2.descrip}`;
    });
});