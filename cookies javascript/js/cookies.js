// Obtener la fecha actual
var today = new Date();

// Establecer la fecha de expiración en 30 días a partir de hoy
var expirationDate = new Date();
expirationDate.setDate(today.getDate() + 30);

// Crear la cookie
document.cookie = "nombre_de_la_cookie=valor_de_la_cookie; expires=" + expirationDate.toUTCString() + "; path=/";

// Mostrar la fecha de expiración al usuario
var cookieExpiration = new Date(expirationDate);
var message = "La cookie expirará el " + cookieExpiration.toDateString();

// Mostrar el mensaje en un párrafo
var expirationParagraph = document.createElement("p");
expirationParagraph.innerText = message;
document.body.appendChild(expirationParagraph);
