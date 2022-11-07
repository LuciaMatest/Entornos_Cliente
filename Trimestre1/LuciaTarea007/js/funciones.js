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
