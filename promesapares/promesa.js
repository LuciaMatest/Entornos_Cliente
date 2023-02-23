function promesaNumeroPar(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(num / 2);
    } else {
      reject("El número es impar");
    }
  });
}

promesaNumeroPar(6)
  .then(resultado => {
    console.log(`El resultado es: ${resultado}`);
  })
  .catch(error => {
    console.log(error);
  });

