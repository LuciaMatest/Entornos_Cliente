// Obtener la fecha actual
let date = new Date();
// Agregar 30 días a la fecha actual
date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
// Crear la cookie con el nombre "miCookie" y el valor "miValor"
document.cookie = "miCookie=solucionCookie; expires=" + date.toUTCString();

function getCookie(nombre) {
	var nombreEQ = nombre + "=";
	var cookies = document.cookie.split(';');
	for(var i=0;i < cookies.length;i++) {
		var cookie = cookies[i];
		while (cookie.charAt(0)==' ') cookie = cookie.substring(1,cookie.length);
		if (cookie.indexOf(nombreEQ) == 0) return cookie.substring(nombreEQ.length,cookie.length);
	}
	return "";
}

function getVisitas() {
	// Obtener el número de visitas almacenado en la cookie
	var visitas = getCookie("visitas");
	if (visitas == "") {
		// Si la cookie no existe, establecer el número de visitas en 1
		visitas = 1;
	} else {
		// Si la cookie existe, incrementar el número de visitas
		visitas++;
	}
	// Actualizar la cookie con el nuevo número de visitas
	document.cookie = "visitas=" + visitas + "; path=/";
	return visitas;
}

function sumarDias(fecha, dias){ 
    fecha.setDate(fecha.getDate() + dias); 
    return fecha; 
} 

function getDiasRestantes() {
	var diasRestantes =sumarDias(hoy,30); 
	return diasRestantes;
}

function getCookieFecha(nombre) {
	var cookie = getCookie(nombre);
	var fecha = new Date(cookie);
	return fecha.toUTCString();
}

function mostrarDatos() {
    var visitas = getVisitas();
    var diasRestantes = getDiasRestantes();
    if (getCookie("miCookie") !== "") {
      document.getElementById("visitas").innerHTML = "Has visitado esta página " + visitas + " veces.";
      document.getElementById("dias-restantes").innerHTML = "La cookie caduca en " + diasRestantes + " días.";
    } else {
      document.getElementById("visitas").innerHTML = "Las cookies están deshabilitadas. Habilítalas para ver esta información.";
    }
  }
  