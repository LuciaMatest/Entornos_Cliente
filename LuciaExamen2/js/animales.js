// a) Poner colores de fondo distintos para cada apartado. Poner Font-family : “arial” para los 4 apartados.
let div01 = document.getElementById('div01');
div01.setAttribute('style', 'background-color: cadetblue; font-family: Arial, Helvetica, sans-serif;');
let div02 = document.getElementById('div02');
div02.setAttribute('style', 'background-color: lightblue; font-family: Arial, Helvetica, sans-serif;');
let div03 = document.getElementById('div03');
div03.setAttribute('style', 'background-color: burlywood; font-family: Arial, Helvetica, sans-serif;');
let div04 = document.getElementById('div04');
div04.setAttribute('style', 'background-color: darkseagreen; font-family: Arial, Helvetica, sans-serif;');

// b) Crear un array de 6 elementos con las propiedades que se observan en la “tabla de animales”. Se puede decir que será un array de animales, o un array de objetos animales.
let animales = ['León','Cocodrilo','Caballo','Camaleón','Iguana','Ratón'];
let especies = ['Mamíferos','Reptiles'];
let años = [14,50,30,8,20,2];

let arrayAnimales = [
    {especie: animales[0] , grupo: especies[0], años: años[0]},
    {especie: animales[1] , grupo: especies[1], años: años[1]},
    {especie: animales[2] , grupo: especies[0], años: años[2]},
    {especie: animales[3] , grupo: especies[1], años: años[3]},
    {especie: animales[4] , grupo: especies[1], años: años[4]},
    {especie: animales[5] , grupo: especies[0], años: años[5]}
]

// c) Escribir una función que reciba un array de animales (el creado en el apartado anterior) y devuelva un nodo lista desordenada (elemento UL) con la lista de los animales tal como se ve en la imagen.
function listaAnimales() {
    
}

// d) Visualizar la lista de animales en el apartado correspondiente.

// e) Poner en el apartado ORDENAR un botón para cambiar la visualización de forma que cambie el listado (y su visualización) para que esté ordenado por nombre de especie.
// f) Poner en el apartado ORDENAR un botón para cambiar la visualización de forma que cambie el listado para que esté ordenado por longevidad.

let btn_porEspecie = document.createElement('button');
btn_porEspecie.innerHTML = 'Ordenar Alfabético Especie';
btn_porEspecie.type = 'submit';

let btn_porAños = document.createElement('button');
btn_porAños.innerHTML = 'Ordenar por Longevidad';
btn_porAños.type = 'submit';

div03.appendChild(btn_porEspecie);
div03.appendChild(btn_porAños);


// g) Escribir una función llamada extraerGrupos() que reciba un array de animales y devuelva un array (sin repeticiones) con los nombres de los grupos que haya en el array de animales.

function extraerGrupos() {
    
}

// h) Utilizando la función del apartado anterior, mostrar en el apartado GRUPOS DE ANIMALES los nombres de los grupos que hay actualmente en la tabla de animales. Se recomienda hacerlo de la forma más sencilla, que será añadir al contenido del elemento DIV correspondiente el resultado del método toString() que tiene todo array