console.log("FUNCIONA");
let alumno = new Object();



alumno.nombre = "Carlos"; // se crea la propiedad ‘nombre’ y se le asigna un valor
alumno["apellidos"] = "Pérez Ortiz"; // se crea la propiedad ‘apellidos’
alumno.edad = 19;


let alumno2 = {
    nombre: "Carlos",
    apellidos: "Pérez Ortiz",
    edad: 19
};


console.log(alumno2.nombre); // imprime ‘Carlos’
console.log(alumno2["nombre"]); // imprime ‘Carlos’
let prop = "nombre";
console.log(alumno2[prop]);

console.log(alumno2.ciclo && alumno2.ciclo.descrip);
// si alumno.ciclo es un objeto muestra el valor de
// alumno.ciclo.descrip y si no muestra undefined

console.log(alumno.ciclo?.descrip);
// si alumno.ciclo es un objeto muestra el valor de
// alumno.ciclo.descrip y si no muestra undefined


//PUEDE APLICARSE A ARRAYS
let alumnos = ["Juan", "Ana"];
console.log(alumnos?.[0]);
// si alumnos es un array y existe el primer elemento muestra el valor
// si ese elemento no existe muestra undefined
// si no existe el objeto con el nombre alumnos da ERROR


for (let prop in alumno) {
    console.log(prop + ":" + alumno[prop])
}

alumno.getInfo = function () {
    return "El alumno " + this.nombre + " " + this.apellidos + " tiene " + this.edad +
        "años"
}
console.log(alumno.getInfo()); //El alumno Carlos Pérez Ortiz tiene 19años



//También se puede incluir la declaración del método en la declaración del objeto:

let alumno3 = {
    nombre: "Carlos",
    apellidos: "Pérez Ortiz",
    edad: 19,

    getInfo: function () {
        return `El alumno ${this.nombre} ${this.apellidos} tiene ${this.edad} años`;
    }
};
console.log(alumno3.getInfo()); //El alumno Carlos Pérez Ortiz tiene 19 años



//para eliminar una propiedad se usa la palabra reservada DELETE
let alumno4 = {
    nombre: "Carlos",
    apellidos: "Pérez Ortiz",
    edad: 19,
};
//añadimos la propiedad email
alumno4.email = "cperez@email.com";
console.log(alumno4.email); //cperez@email.com
//eliminamos la proiedad email
delete alumno4.email;
console.log(alumno4);



//CLASES:
class Alumno5 {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }


    getInfo() {
        return "El alumnoo " + this.nombre + " " + this.apellidos + " tiene " + this.edad + " años"
    }
}
let cpo = new Alumno5("Carlos", "Pérez Ortiz", 19)
console.log(cpo.getInfo())









class Alumno {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    getInfo() {
        return (
            "El alumno " + this.nombre + " " + this.apellidos + " tiene " + this.edad + " años"
        );
    }
}
class AlumnInf extends Alumno {
    constructor(nombre, apellidos, edad, ciclo) {
        super(nombre, apellidos, edad);
        this.ciclo = ciclo;
    }
    getGradoMedio() {
        if (this.ciclo.toUpperCase() === "SMR") return true;
        else return false;
    }
    getInfo() {
        return (
            super.getInfo() + " y estudia el Grado " +
            (this.getGradoMedio() ? "Medio" : "Superior") + " de " + this.ciclo);
    }
}
let azp = new Alumno("Ana", "Zubiri Peláez", 24);
// console.log(azp.getInfo()); // imprime: 'El alumno Ana Zubiri Peláez tiene 24 años'
let cpo1 = new AlumnInf("Carlos", "Pérez Ortiz", 19, "DAW");
// console.log(cpo1.getInfo()); // imprime 'El alumno Carlos Pérez Ortíz tiene 19 años y
// estudia el Grado Superior de DAW'



function imprimir(objeto) {
    console.log(objeto.getInfo());
    if (objeto instanceof AlumnInf) {
        console.log(objeto.nombre + ' es un alumno de informática');
    }
}
imprimir(azp);
imprimir(cpo1);




//METODOS ESTATICOS
class User {
    static getRoles() {
        return ["user", "guest", "admin"]
    }
}
console.log(User.getRoles()) // [”user”, “guest”, “admin”]
let usuario = new User("john");
// console.log(usuario.getRoles()) // Uncaught TypeError: usuario.getRoles is not a function



class Tripple {
    static tripple(n) {
        n = n || 1;
        return n * 3;
    }
}


class BiggerTripple extends Tripple {
    static tripple(n) {
        return super.tripple(n) * super.tripple(n);
    }
}
console.log(Tripple.tripple()); // 3
console.log(Tripple.tripple(6)); // 18
console.log(BiggerTripple.tripple(3)); // 81
var tp = new Tripple();
// console.log(tp.tripple()); //ERROR Logs ‘tp.tripple is not a function’.




//ATRIBUTOS ESTATICOS
class Alumno6 {
    static contadorObjetosAlumno = 0;
    constructor(nombre, apellidos, edad) {
        this.id = ++Alumno6.contadorObjetosAlumno; // cada vez que se crea un objeto,
        // se incrementa
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        console.log(this);
    }
}
let misAlumnos = [];
misAlumnos[0] = new Alumno6('Carloss', 'Pérez Ortiz', 19);
misAlumnos[1] = new Alumno6('Rosaa', 'Cifuentes Martín', 24);
misAlumnos[2] = new Alumno6('Anaaa', 'Zubiri Peláez', 29);






//CONSTANTES ESTATICAS:

class Alumno8 {
    static contadorObjetosAlumno = 0;
    static get MAX_OBJ() {
        return 5;
    }
    constructor(nombre, apellidos, edad) {
        this.id = ++Alumno8.contadorObjetosAlumno; // cada vez que se crea un objeto,
        // se incrementa
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        console.log(this);
    }
}
console.log(Alumno8.MAX_OBJ); // 5
Alumno8.MAX_OBJ = 10;
console.log(Alumno8.MAX_OBJ); // 5



//MAXIMOS PERMITIDOS:
class Alumno9 {
    static contadorObjetosAlumno = 0;
    static get MAX_OBJ() {
        return 5;
    }
    constructor(nombre, apellidos, edad) {
        if (Alumno9.contadorObjetosAlumno < Alumno9.MAX_OBJ) {
            this.id = ++Alumno9.contadorObjetosAlumno;
        } else {
            console.log('Se ha superado el máximo de objetos permitidos de la clase Alumno');
        }
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        console.log(this);
    }
}
let misAlumnos2 = [];
misAlumnos2[0] = new Alumno9('Carlos', 'Pérez Ortiz', 19);
misAlumnos2[1] = new Alumno9('Rosa', 'Cifuentes Martín', 24);
misAlumnos2[2] = new Alumno9('Ana', 'Zubiri Peláez', 29);
misAlumnos2[3] = new Alumno9('Rosa', 'Cifuentes Martín', 24);
misAlumnos2[4] = new Alumno9('Ana', 'Zubiri Peláez', 29);
misAlumnos2[5] = new Alumno9('Ana', 'Zubiri Peláez', 29);


//TOSTRING
class Alumno11 {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    toString() {
        return this.apellidos + ", " + this.nombre
    }
}
let cpo3 = new Alumno11("Carlos", "Pérez Ortiz", 19);
console.log("Alumno:" + cpo3) // imprime ‘Alumno: Pérez Ortíz, Carlos’
// en vez de ‘Alumno: [object Object]’


//ESTO PUEDE NO FUNCIONAR SI TIENE TILDES
let misAlumnos3 = [];
misAlumnos2[0] = new Alumno("Carlos", "Pérez Ortiz", 19);
misAlumnos2[1] = new Alumno("Rosa", "Cifuentes Martín", 24);
misAlumnos2[2] = new Alumno("Ana", "Zubiri Peláez", 29);
misAlumnos2.sort(function (alum1, alum2) {
    if (alum1.apellidos > alum2.apellidos) return 1
    if (alum1.apellidos < alum2.apellidos) return -1
});



// La forma correcta de comparar cadenas es usando el
// método .localeCompare(). El código anterior debería ser:
misAlumnos3.sort(function (alum1, alum2) {
    return alum1.apellidos.localeCompare(alum2.apellidos)
});



// que con arrow function quedaría:
misAlumnos3.sort((alum1, alum2) => alum1.apellidos.localeCompare(alum2.apellidos))

misAlumnos.sort((alum1, alum2) =>
    (alum1.apellidos + alum1.nombre).localeCompare(alum2.apellidos + alum2.nombre))


//VALUEOF NO FUNCIONA ESTE CODIGO
class Alumno12 {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    valueOf() {
        return this.edad
    }
}
let cpo4 = new Alumno12("Carlos", "Pérez Ortiz", 19)
let aat4 = new Alumno12("Ana", "", "Abad Tudela", 23)
console.log(cpo4 < aat4)



//METODOS GET Y SET:
class Alumno13 {
    constructor(nombre, apellidos, edad) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this.edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre.toUpperCase(); //
    }
    get nombreCompleto() {
        return this._apellidos + ", " + this.nombre;
    }

}
let cpo6 = new Alumno13("Carlos", "Pérez Ortiz", 19);
cpo6.nombre = "Carlos Luis"; //set nombre(‘Carlos Luis’)
console.log(cpo6.nombre); // get nombre() -> Carlos Luis
console.log(cpo6.nombreCompleto); // se accede sin paréntesis






//Agregar propiedades y métodos a los objetos de una clase (prototype). PAG 15
class Alumno25 {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}
let cpo7 = new Alumno25("Carlos", "Pérez Ortiz", 19);
Alumno25.prototype.email = "...@email.com"; // valor por defecto
console.log(cpo7.email) // ...@email.com
Alumno25.prototype.ApellidosMayusc = function () {
    return this.apellidos.toLowerCase();
}
console.log(cpo7.ApellidosMayusc());


//Uso de call y apply
// Con la palabra reservada 
// call se puede llamar a un método de un objeto desde otro objeto que no tiene ese método.

let cpo41 = {
    nombre: "Carlos",
    apellidos: "Pérez Ortiz",
    nombreCompleto: function () {
        return this.apellidos + ", " + this.nombre;
    },
    nombreCompleto2: function(titulo, email){
        return titulo + " " + this.nombre + ", " + email;
        }
}
let azp7 = {
    nombre: "Ana",
    apellidos: "Zubiri Peláez",
}
console.log(cpo41.nombreCompleto()); // Pérez Ortiz, Carlos
console.log(cpo41.nombreCompleto.call(azp7)); // Zubiri Peláez, Ana
//SE LE PUEDE PASAR ARGUMENTOS:
// console.log(cpo.nombreCompleto.call(azp, argum1, argum2));

//CON APPLY LOS ARGUMENTOS SE PASAN EN UN ARRAY
arrayAgumentos= ["Doña", "anzupe@email.com"];
console.log(cpo41.nombreCompleto.apply(azp7, arrayAgumentos)); 



//CLASE OBJECT
console.log(Object.values(cpo41)); // (3) ['Carlos', 'Pérez Ortiz', ƒ]


Object.prototype.imprime = function() {
    Object.entries(this).forEach(([key, value])=>{
    console.log(key + ': '+value);
    })
    }
    

    cpo41.imprime();



//FUNCIONES GRLOBALES
//parseInt(valor)->devuelve el valor pasado como parametro convertido a string
console.log( parseInt(3.84) ) // imprime 3 (ignora los decimales)
console.log( parseInt('3.84') ) // imprime 3
console.log( parseInt('28manzanas') ) // imprime 28
console.log( parseInt('manzanas28') ) // imprime NaN

//parseFloat(valor)->: igual, pero devuelve un número decimal. Ejemplos:
console.log( parseFloat(3.84) ) // imprime 3.84
console.log( parseFloat('3.84') ) // imprime 3.84
console.log( parseFloat('3,84') ) // imprime 3 (la coma no es un carácter numérico)
console.log( parseFloat('28manzanas') ) // imprime 28
console.log( parseFloat('manzanas28') ) // imprime NaN

//Number(valor)->mas estricto, coniverte todo el valor a numero, si no puede devuelve NaN
console.log( Number(3.84) ) // imprime 3.84
console.log( Number('3.84') ) // imprime 3.84
console.log( Number('3,84') ) // imprime NaN (la coma no es un carácter numérico)
console.log( Number('28manzanas') ) // imprime NaN
console.log( Number('manzanas28') ) // imprime NaN


// String(valor): convierte el valor pasado en una cadena de texto. Si le pasamos un objeto llama al
// método .toString() del objeto. Ejemplos:
console.log( String(3.84) ) // imprime '3.84'
console.log( String([24, 3,12]) ) // imprime '24,3,12'
console.log( {nombre: 'Marta', edad: 26} ) // imprime "[object Object]"




// Boolean(valor): convierte el valor pasado a un booleano. Sería el resultado de tenerlo como condición
// en un if. Muchas veces en vez de usar esto usamos la doble negación !! que da el mismo resultado.
// Ejemplos:
console.log( Boolean('Hola') ) // Equivaldría a !!'Hola'. Imprime true
console.log( Boolean(0) ) // Equivaldría a !!0. Imprime false


// isNaN(valor): devuelve true si lo pasado NO es un número o no puede convertirse en un número.
// Ejemplos:
console.log( isNaN(3.84) ) // imprime false
console.log( isNaN('3.84') ) // imprime false
console.log( isNaN('3,84') ) // imprime true (la coma no es un carácter numérico)
console.log( isNaN('28manzanas') ) // imprime true
console.log( isNaN('manzanas28') ) // imprime true