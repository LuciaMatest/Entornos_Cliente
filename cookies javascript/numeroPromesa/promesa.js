function procesarNumero() {
    return new Promise((resolve, reject) => {
      const num = prompt("Ingrese un número:");
  
      if (isNaN(num)) {
        const mensajeError = "No ingresó un número válido";
        console.error(mensajeError);
        reject(mensajeError);
      } else if (num % 2 === 0) {
        resolve(num / 2);
      } else {
        const mensajeError = "El número es impar";
        console.error(mensajeError);
        reject(mensajeError);
      }
    });
  }
  
  procesarNumero()
  .then(resultado => {
    console.log("El resultado es " + resultado);
  })
  .catch(error => {
    console.error("Error: " + error);
  });
