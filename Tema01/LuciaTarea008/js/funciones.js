function quitarHTML() { 
    document.getElementById('html').classList.toggle('html');
}

function quitarFigura() {
    document.getElementById('figura').classList.toggle('figura');
}

function quitarTexto() {
    let texto = Array.from(document.querySelectorAll('#texto'));
    texto.forEach(elemento => elemento.classList.toggle('vacio'));
}

function quitarCSS() {
    document.getElementById('posicion').classList.toggle('rombo');
}


function rombo() {
    let a = parseInt(document.getElementById('idFilas').value);
    let div = document.getElementById('posicion');

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= a - i; j++) {
            div.innerHTML += "&nbsp;&nbsp;";
        }
        for (let h = 1; h <= 2 * i - 1; h++) {
            if (h == 1 || h == 2 * i - 1) {
                div.innerHTML += "*";
            } else {
                div.innerHTML += "&nbsp;&nbsp;";
            }
        }
        div.innerHTML += "<br>";
    }
    a--;
    for (i = 1; i <= a; i++) {
        for (j = 1; j <= i; j++) {
            div.innerHTML += "&nbsp;&nbsp;";
        }
        for (h = 1; h <= (a - i) * 2 + 1; h++) {
            if (h == 1 || h == (a - i) * 2 + 1) {
                div.innerHTML += "*";
            } else {
                div.innerHTML += "&nbsp;&nbsp;";
            }
        }
        div.innerHTML += "<br>";
    }
}

function sinFigura() {
    document.getElementById('figura').classList.remove('figura');
}

function conFigura() {
    document.getElementById('figura').classList.add('figura');
}

function sinTexto() {
    let texto = Array.from(document.querySelectorAll('#texto'));
    texto.forEach(elemento => elemento.classList.remove('blanco'));
}
function conTexto() {
    let texto = Array.from(document.querySelectorAll('#texto'));
    texto.forEach(elemento => elemento.classList.add('blanco'));
}

function sinRombo() {
    document.getElementById('aqui').classList.remove('rombo');
}
function conRombo() {
    document.getElementById('aqui').classList.add('rombo');
}