//CREACIÖN DE COOKIES
//<nombre>=<valor>; expires=<fecha>; max-age=<segundos>; path?<ruta>; domain=<dominio>; secure;

//PARA OBTENER TODAS LAS COOKIES ACCESIBES SE UTILIZA
//let todasLasCookies = document.cookie;







//EJEMPLOS DE CREACIÓN DE COOKIES:
// sintaxis; docuemnt.cookie=nuevaCookie;
document.cookie = "nombreCookie=valorCookie; expires=fechaDeExpiracion; path=rutaParaLaCookie";



//encodeURIComponent para codificar y evitar sorpresas, ya que las cookies se envian en las cabeceras deben de ir correctamente codificadas
let testValue= "Hola mundo!";
document.cookie = "nombreCookie2="+encodeURIComponent(testValue);



//Si se utiliza el atribute expires debe de ser con una fecha en formato UTC por lo que se usa el metodo Date.toUTCString();
let expiresdate= new Date(2068,1,02,11,20);
let cookievalue="Hola Mundo!";
document.cookie = "textcookie3="+encodeURIComponent(cookievalue)+";expires="+expiresdate.toUTCString();

//Si se usa max-age en vez de expires se especifica el numero de segundos que desde la creación de la cookie hasta su caducidad
//Con secure al final solo se valida con conexiones con https
document.cookie = "color=blue; max-age="+60*60*24*30+"; path=/; domain=daw2cliente.com; secure";




// MODIFICAR UNA COOKIE
document.cookie="nombre=miguel; path=/";//COOKIE ALOJADA EN /
document.cookie="nombre=miguel";//COOKIE ALOJADA EN LUGAR POR DEFECTO EJ: si estamos en miweb.com/blog, estara en /blog
document.cookie="nombre=miguel; path=/";//MODIFICACION DE LA PRIMERA COOKIE ALOJADA EN /


//ELIMINACION DE COOKIES
    //Creamos la cookie
document.cookie="nombre=miguel";
    //1º manera de eliminarla:
document.cookie= "nombre=;expires=Thu, 01 jan 1970 00:00:00 UTC";
document.cookie = "nombre=; max-age=0";


//RECUPERAR EL CONTENIDO DE LAS COOKIES
let todasLasCookies=document.cookie;
//EN LA VARIABLE LAS COOKIES SE ORGANIZAN ASI:
    //nombreCookieA=valorCookieA;nombreCookieB=valorCookieB;nombreCookieC=valorCookieC;.....nombreCookieN=valorCookieN;
    //EL STRING SOLO CONTIENE nombre-valor, no se pueden acceder a otros atributos
    //Solo se disponen de las cookies del documento actual, pero si se pueden crear para otro distinto
    //dentro de este string se separan en ; y luego se dividen por =, hay que tener en cuenta los espacios




//cookieEnabled y el navigator para saber si estan activadas o no.    



