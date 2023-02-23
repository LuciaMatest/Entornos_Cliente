if (navigator.cookieEnabled) {
	// Las cookies están habilitadas, mostrar información
	let p = document.createElement("p");
	p.innerText = "Las cookies están habilitadas en este navegador.";
	document.body.appendChild(p);

	// Obtener la fecha actual
	let today = new Date();

	// Establecer la fecha de expiración en 30 días a partir de hoy
	let expirationDate = new Date();
	expirationDate.setDate(today.getDate() + 30);

	// Crear la cookie
	document.cookie = "nombre_de_la_cookie=valor_de_la_cookie; expires=" + expirationDate.toUTCString();

	// Mostrar la fecha de expiración al usuario
	let cookieExpiration = new Date(expirationDate);
	let message = "La cookie expirará el " + cookieExpiration.toDateString();

	// Mostrar el mensaje en un párrafo
	let expirationParagraph = document.createElement("p");
	expirationParagraph.innerText = message;
	document.body.insertBefore(expirationParagraph, document.getElementsByName('script')[0]);

	// Crear o actualizar la cookie para contar las visitas del usuario
	let visits = 0;
	let cookieName = "visitas=";
	let cookies = document.cookie.split(';');
	for(let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i].trim();
		if(cookie.indexOf(cookieName) == 0) {
			visits = parseInt(cookie.substring(cookieName.length, cookie.length));
			break;
		}
	}
	visits++;
	document.cookie = "visitas=" + visits + "; expires=" + expirationDate.toUTCString();

	// Mostrar la cantidad de días restantes y la cantidad de visitas al usuario
	let cookieExpiration2 = new Date(expirationDate);
	let daysRemaining = Math.round((cookieExpiration2.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
	let message2 = "La cookie expirará en " + daysRemaining + " días y has visitado esta página " + visits + " veces.";

	// Mostrar el mensaje en un párrafo
	let expirationParagraph2 = document.createElement("p");
	expirationParagraph2.innerText = message2;
	document.body.appendChild(expirationParagraph2);
  } else {
	// Las cookies están deshabilitadas, mostrar un mensaje de error o tomar otra acción
	let p1 = document.createElement("p");
	p1.innerText = "Las cookies están deshabilitadas en este navegador. Por favor, habilite las cookies para utilizar esta página.";
	document.body.appendChild(p1);
  }
  