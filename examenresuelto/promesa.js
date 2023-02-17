// function mitad(numero) {
//     return new Promise((resolver,rechazar)=>{
//         if (numero%2===0) {
//             resolver(numero/2);
//         } else{
//             rechazar('numero impar');
//         }
//     });
// }

// function incrementar(numero) {
//     return numero;
// }

// mitad(4).then(console.log).catch(console.log);
// mitad(5).then(console.log).catch(console.log);
// mitad(6).then(console.log).fhen(console.log).catch(console.log);

function naipes(tipoDePalo){
    if (  tipoDePalo == "sotas" ||
          tipoDePalo == "bastos" ||
          tipoDePalo == "espadas" ||
          tipoDePalo == "copas" )
    {
      let cartas = [] ;
      for ( let i = 1; i <= 12; i++ )
      {
        if (i != 8 && i != 9)
        {
          cartas.push(i +" de "+tipoDePalo);
        }
      }
      return cartas;
    }
  }
  console.log(naipes());