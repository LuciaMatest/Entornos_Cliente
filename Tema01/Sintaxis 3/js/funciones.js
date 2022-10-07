// let variable = true;
// console.log(typeof variable);
// console.log("23" - true);
// console.log(23 + "jj");

// console.log(23, 12 * 2);

// console.log(23 / 0);

// let num = 7572.56543213168754187;
// console.log(num.toFixed(2));
// console.log(num.toLocaleString());
function validarDNI(dni) {
  const arrayLetras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let n = parseInt(dni);
  let letra = dni.substr(-1).toUpperCase();

  let resto = n % 23;
  let letraResto = arrayLetras[resto];
  if (letra === letraResto) {
    return true;
  } else {
    return false;
  }
}

let = dni = "12345678-z";
console.log(`El Dni introducido ${dni} es ${validarDNI(dni)}`);
