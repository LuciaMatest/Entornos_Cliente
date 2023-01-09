// let testvalue = "Hola mundo!";
// document.cookie= "nombreCookie=" + encodeURIComponent(testvalue);
// let prueba1 = "cigüeña";
// document.cookie= "cuqui1=" + prueba1;
// let prueba2 = "cigüeña";
// document.cookie= "cuqui2=" + encodeURIComponent(prueba2);

let expiresdate = new Date(2068, 1, 02, 11, 20);
let cookievalue = "nueva cookie";
document.cookie = "testcookie=" + encodeURIComponent(cookievalue) + "; expires=" + expiresdate.toUTCString();
document.cookie = "testcookie= vieja";
console.log(document.cookie);