function rombo() {
    let a = parseInt(document.getElementById('idFilas').value);
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= a - i; j++) {
            document.body.innerHTML += "&nbsp;&nbsp;";
        }
        for (let h = 1; h <= 2 * i - 1; h++) {
            if (h == 1 || h == 2 * i - 1) {
                document.body.innerHTML += "*";
            } else {
                document.body.innerHTML += "&nbsp;&nbsp;";
            }
        }
        document.body.innerHTML += "<br>";
    }
    a--;
    for (i = 1; i <= a; i++) {
        for (j = 1; j <= i; j++) {
            document.body.innerHTML += "&nbsp;&nbsp;";
        }
        for (h = 1; h <= (a - i) * 2 + 1; h++) {
            if (h == 1 || h == (a - i) * 2 + 1) {
                document.body.innerHTML += "*";
            } else {
                document.body.innerHTML += "&nbsp;&nbsp;";
            }
        }
        document.body.innerHTML += "<br>";
    }
}
