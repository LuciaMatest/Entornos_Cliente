//Integramos el script en la web

function escribe(i,nFilas) { //hemos añadido el argumento nFilas que recoge el nº de filas del rombo
  let resultado = "";
  let espaciosIzquierda = "";
  espacio = "&nbsp;";
  let espaciosCentro="";
        espaciosIzquierda=espacio.repeat(nFilas/2-i+1);
        resultado="";
        if(i==1){
            resultado=espaciosIzquierda+"*";
            espaciosCentro=""
        }else {
            espaciosCentro=espacio.repeat(2*(i-1)-1);
            resultado=espaciosIzquierda+"*"+espaciosCentro+"*";
        }
    return resultado;
}

function actualizarRombo() {
  //var filas=7; sustituimos las filas por el input number
  var filas=document.getElementById("input_filas").value; //número de filas del rombo
  var salida = ""; // string que almacenará todas las filas del rombo
  var filaCentral = filas / 2; // para saber cual es la fila del medio
  filaCentral = filaCentral.toFixed(); //para quitar los decimales

  for (let i = 1; i <= filaCentral; i++) {
    cadena = escribe(i,filas); //llamamos a escribe() para escribir una fila
    salida = salida + cadena + "<br>"; //añadimos la fila al string salida
  }

  if (filas % 2 == 0) {
    //console.log("Número de filas par");
    for (let i = filas / 2; i >= 1; i--) {
      // i contiene el total de espacios+asteriscos+espacios
      cadena = escribe(i,filas); //mandamos llamar a una función que es decladrada y definida al inicio de este script
      salida = salida + cadena + "<br>";
    }
  } else {
    //console.log("Impar número de filas");
    for (let i = filaCentral - 1; i >= 1; i--) {
      cadena = escribe(i,filas);
      salida = salida + cadena + "<br>";
    }
  }
  document.getElementById("divRombo").innerHTML=salida;
  console.log(salida);
}

