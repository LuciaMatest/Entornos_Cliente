document.cookie='expires=' + 60*60*24*30;
let cookie = document.cookie;
document.getElementById("mostrar").innerHTML = `La cookie caduca en ${cookie} dias`;

let cookies = navigator.cookieEnabled;
document.getElementById("mostrar2").innerHTML =  `Cookies habilidatas: ${cookies}`;

//
function sumarDias(fecha, dias){ 
    fecha.setDate(fecha.getDate() + dias); 
    return fecha; 
} 

let hoy = new Date(); 
unMesDespues=sumarDias(hoy,30); 
console.log(unMesDespues); 
let=valorCookie="soluciones"; 
document.cookie="miCookie5="+ encodeURIComponent(valorCookie) +"; expires="+unMesDespues.toUTCString(); 

//let texto="hay una cookie que caducará el " + unMesDespues.toUTCString() 
let texto="Hay una cookie que caducará el " + unMesDespues.toString() 
let p=document.createElement('P'); 
let t=document.createTextNode(texto); 
p.appendChild(t); 
document.body.insertBefore(p, document.getElementsByName("script")[0]); 

//split