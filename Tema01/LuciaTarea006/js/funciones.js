function rombo(a) {
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }

    for (let i = a - 1; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            document.write("*");
        }
        document.write("<br>");
    }
    // var elem = document.getElementById('idRombo');
}

rombo(5);

for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= a - i; j++) {
        document.write("*");
    }
    for (let h = 1; h <= 2 * i - 1; h++) {
        if (h == 1 || h == 2 * i - 1) {
            document.write(cadena);
        } else {
            document.write(" ");
        }
    }
    document.write("<br>");
}
a--;
for (i = 1; i <= a; i++) {
    for (j = 1; j <= i; j++) {
        document.write(piramide + " <br>");
    }
    for (h = 1; h <= (a - i) * 2 + 1; h++) {
        if (h == 1 || h == (a - i) * 2 + 1) {
            document.write(cadena);
        } else {
            document.write(piramide + " <br>");
        }
    }
    document.write("<br>");
}