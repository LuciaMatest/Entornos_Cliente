//
function retirar(saldo, cantidad) {
    if (saldo < cantidad) {
      return false;
    }
    return saldo - cantidad;
  }

  let saldo = 30;
  cantidad = 200;
  let resultado = retirar(saldo, cantidad);

  if (resultado === false) {
    console.log("Saldo insuficiente");
  } else {
    saldo = resultado;
  }

  if (saldo < cantidad) {
    throw 'Saldo insuficiente'
  }
    
  //
  function retirar(saldo1, cantidad) {
    if (saldo1 < cantidad) {
    throw "Saldo insuficiente";
    }
    return saldo1 - cantidad;
  }
  // Siempre debemos llamar a esa función desde un bloque _try_
  let saldo1 = 30;
  let importe = 200;

  try {
    saldo1 = console.log(`Nuevo saldo: ${retirar(saldo1, importe)}`);
  } catch (err) {
    console.log(err); // muestra "Saldo Insuficiente"
  }
  try {
    saldo1 = console.log(`Nuevo saldo: ${retirar(200, 5)}`); //Muestra "Nuevo Saldo: 195"
  } catch (err) {
    console.log(err);
  }
    