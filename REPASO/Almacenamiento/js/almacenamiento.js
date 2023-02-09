// El almacenamiento web HTML proporciona dos objetos para almacenar datos en el cliente:
// window.localStorage: almacena datos sin fecha de caducidad.
// window.sessionStorage: almacena datos para una sesión (los datos se pierden cuando se cierra la
//     pestaña del navegador).


// sessionStorage.setItem('clave', 'valor');->
    // Guarda la información valor a la que se podrá acceder
    // invocando a clave. Por ejemplo, clave puede ser
    // nombre y valor puede ser Carlos.

// sessionStorage.getItem('clave')->
    // Recupera el value de la clave especificada. Por ejemplo,
    // si clave es nombre puede recuperar “Carlos”.

// sessionStorage[clave]=valor->Igual que setItem

// sessionStorage.length->
    // Devuelve el número de items guardados por el objeto
    // sessionStorage actual.


// sessionStorage.key(i)->
    // conisgue la clave correspondiente al indice i


// sessionStorage.removeItem(clave)->
    // elimina el item con la clave pasada

//sessionStroage.clear()->
    //borra todos los items almacenados


//GUARDAR UN VALOR , 2 maneras:

// 1º
    // Store
    // Crear un par de nombre/valor de almacenamiento local con nombre="apellido" y valor="Peláez"
    localStorage.setItem("apellido", "Peláez");
    // Retrieve
    // Recuperar el valor de "apellido" e insertarlo en el elemento con id="resultado"
    document.getElementById("resultado").innerHTML = localStorage.getItem("apellido");

//2º
    // Store
    localStorage.apellido = "Peláez";
    // Retrieve
    document.getElementById("resultado").innerHTML = localStorage.apellido;


//ELIMINAR INFORMACIÓN
    //un dato en concreto:
    localStorage.removeItem("apellido");
    //todo lo alamcenado:
    localStorage.clear();



//el evento storage detecta que en una ventana se produjo un cambio en los datos
    window.addEventListener("storage", nombreFuncionRespuesta, false);


    //las cookies estan diponibles tanto en el navegador como en el servidor, el almacenamiento solo esta disponible en el navegador


    // JSON.stringify de valor javascript a json
    // JSON.parse de json a valor javascript

    // al recuperar un objeto que se paso a json y volvio a variable, no se podran usar sus Metodos , si queremos ver sus atributos habra que mostralos directamente
    //coger valor de cada atributo y crear nuevas personas


    // let nuevaPersona=new Persona() // (**)
    //     nuevaPersona.nombre = p._nombre;
    //     nuevaPersona.apellido = p.apellido;
    //     console.log(nuevaPersona);
    //     personas3.push(nuevaPersona);

 