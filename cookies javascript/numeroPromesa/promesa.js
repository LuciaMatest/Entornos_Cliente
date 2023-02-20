function comprobarNumero() {
    const numero = parseInt(document.getElementById("numero").value);
  
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        const mitad = numero / 2;
        resolve(mitad);
      } else {
        const mensaje = "El número ingresado es impar";
        reject(mensaje);
      }
    });
  }
  
document.getElementById("resultado").addEventListener("click", function() {
    comprobarNumero().then(function(resultado) {
        document.write("La mitad del número ingresado es: " + resultado);
    }).catch(function(mensaje) {
        document.write(mensaje);
    });
});
  