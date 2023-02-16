const SERVER="http://192.168.2.204:3000/";
//a
const botonRellenar= document.createElement('button');
botonRellenar.innerHTML='Rellenar';

let arrayPalos=['OROS','COPAS','ESPADAS','BASTOS'];
let arrayValores=[1,2,3,4,5,6,7,10,11,12];
let arrayLugares=['Baraja','Descartes','Jugador1','Jugador2','Jugador3','Jugador4'];

window.addEventListener('load',()=>{
    botonRellenar.addEventListener('click', async function (evento) {
        //Cancelas la accion predeterminada
        evento.preventDefault();

        const [naipes] = await Promise.all([
            getNaipes("naipes"),
            getMazo("naipes")
        ]);

        const [lugar] = await Promise.all([
          postLugar("lugar")
      ]);
        

        //ArrayPalos
        for await (const palo of arrayPalos) {
            let nuevoPalo = {
              id: "",
              name: palo,
            };
            const dato1 = await anadirPalo(nuevoPalo);
        }
        //arrayValores
        for await (const palo of arrayPalos) {
          for (const valor of arrayValores) {
              let nuevoCarta = {
                id: "",
                palo: palo,
                carta: valor,
                lugar: "mazo",
              };
        
              const datos2 = await anadirNaipe(nuevoCarta);
            }
        }

        
    })
    
});

async function getNaipes(tabla) {
    const response = await fetch(`${SERVER}${tabla}`);
  
    if (!response.ok) {
      throw `Error ${response.status}de la BBDD: ${response.statusText}`;
    }
  
    const datos = await response.json();
  
    return datos;
}

async function postLugar(lugar) {
    for await (const lugar of arrayLugares) {
      let nuevoLugar = {
        id: "",
        name: lugar,
      };
      fetch(`${SERVER}${lugar}`, {
        method: "POST",
        body: JSON.stringify(nuevoLugar),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        //Comprobamos si se ha resuelto
        if (!response.ok) {
            //Lanzamos un error
            throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        //Devolvemos los datos JSON
        return response.json();
        })

        .then(datos => {
            window.alert('Datos recibidos');
        })
        .catch((error) => console.error(error));
    }
  }

async function anadirPalo(palo) {
    //Petición POST
    fetch(`${SERVER}palos`, {
      method: "POST",
      body: JSON.stringify(palo),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
        //Comprobamos si se ha resuelto
        if (!response.ok) {
            //Lanzamos un error
            throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        //Devolvemos los datos JSON
        return response.json();
    })

    .then(datos => {
        window.alert('Datos recibidos');
    })
    .catch((error) => console.error(error));
}

async function anadirNaipe(carta) {
    //Petición POST
    fetch(`${SERVER}naipes`, {
      method: "POST",
      body: JSON.stringify(carta),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
        //Comprobamos si se ha resuelto
        if (!response.ok) {
            //Lanzamos un error
            throw `Error ${response.status} de la BBDD: ${response.statusText}`;
        }
        //Devolvemos los datos JSON
        return response.json();
    })

    .then(datos => {
        window.alert('Datos recibidos');
    })
    .catch((error) => console.error(error));
}

function getMazo(naipes) {
    let parrafo = document.createElement("p");
    let texto = naipes.reduce(
      (cadena, carta) => (cadena += `${carta.carta} de ${carta.palo} | `)
    );
    parrafo.appendChild(document.createTextNode(texto));
    document.getElementById("div01").appendChild(parrafo);
}
  

document.getElementById('div03').appendChild(botonRellenar);
