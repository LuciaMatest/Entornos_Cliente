// en html
// required: indica que el campo es obligatorio
// pattern: obliga a que el contenido del campo cumpla la expresión regular indicada.
//minlength / maxlength: indica la longitud mínima/máxima del contenido del campo
//min / max: indica el valor mínimo/máximo del contenido de un campo numérico.




//VALIDACIÓN MEDIANTE LA API DE VALIDACIÓN DE FORMUALRIOS

// checkValidity(): método que nos dice si el campo al que se aplica es o no válido. También se puede aplicar
// al formulario para saber si es válido o no.

// validationMessage: en caso de que un campo no sea válido esta propiedad contiene el texto del error
// de validación proporcionado por el navegador. Si es válido esta propiedad es una cadena vacía

// validity: es un objeto que tiene propiedades booleanas para saber qué requisito del campo es el que falla:

// valueMissing: indica si no se cumple el atributo required (es decir, valdrá true si el campo tiene
// el atributo required pero no se ha introducido nada en él)


// typeMismatch: indica si el contenido del campo no cumple con su atributo type (ej.
// type=”email”)

// patternMismatch: indica si no se cumple con el pattern indicado en su atributo

// tooShort / tooLong: indican si no se cumple el
// atributo minlength o maxlength respectivamente.

// rangeUnderflow / rangeOverflow: indica si no se cumple el atributo min / max

// stepMismatch: indica si no se cumple el atributo step del campo

// customError: indica al campo que se le ha puesto un error personalizado
// con setCustomValidity

// valid: indica si ese campo cumple con todas sus restricciones de validación y, por tanto, se
// considera válido.


//.setCustomValidation() sirve para hacer nuestras propias validaciones, no posibles a traves de html


// console.log("VALIDACIONES");
// const email = document.getElementById("mail");
// email.addEventListener("input", function (event) {
//     console.log("VALIDACIONESw");
//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
//     } else {
//         email.setCustomValidity("");
//     }
// });


// document
// .getElementById("comprueba")
// .addEventListener("click", (event) => {
// const inputName = document.getElementsByTagName("input")[0];
// document.getElementById("error").innerHTML = inputName.validationMessage;
// document.getElementById("checkValidity").innerHTML = inputName.checkValidity();
// document.getElementById("validationMessage").innerHTML = inputName.validationMessage;
// document.getElementById("valueMissing").innerHTML = inputName.validity.valueMissing;
// document.getElementById("tooShort").innerHTML = inputName.validity.tooShort;
// document.getElementById("tooLong").innerHTML = inputName.validity.tooLong;
// });




const form = document.getElementsByTagName('form')[0];
const nombre = document.getElementById('nombre');
const nombreError = document.querySelector('#nombre + span.error');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
    }
    nombreError.textContent = nombre.validationMessage;
    emailError.textContent = email.validationMessage;
});






//EXPRESIONES REGULARES:


// expr.test(cadena): devuelve true si la cadena coincide con la expresión. Con el modificador /g hará que
// cada vez que se llama busque desde la posición de la última coincidencia.


// expr.exec(cadena): igual pero en vez de true o false devuelve un objeto con la coincidencia encontrada,
// su posición y la cadena completa:

// cadena.match(expr): igual que exec pero se aplica a la cadena y se le pasa la expresión. Si ésta tiene el
// modificador /g devolverá un array con todas las coincidencias:


// cadena.search(expr): devuelve la posición donde se encuentra la coincidencia buscada, o -1 si no
// aparece.
// • cadena.replace(expr, cadena2): devuelve una nueva cadena con las coincidencias de la cadena
// reemplazadas por la cadena pasada como 2º parámetro: