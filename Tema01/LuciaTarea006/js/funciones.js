function rombo(a) {
    let filas = parseInt(document.getElementById(''))
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= a - i; j++) {
            document.write("&nbsp;&nbsp;");
        }
        for (let h = 1; h <= 2 * i - 1; h++) {
            if (h == 1 || h == 2 * i - 1) {
                document.write("*");
            } else {
                document.write("&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    }
    a--;
    for (i = 1; i <= a; i++) {
        for (j = 1; j <= i; j++) {
            document.write("&nbsp;&nbsp;");
        }
        for (h = 1; h <= (a - i) * 2 + 1; h++) {
            if (h == 1 || h == (a - i) * 2 + 1) {
                document.write("*");
            } else {
                document.write("&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    }
    // var elem = document.getElementById('idRombo');
}

rombo(5);