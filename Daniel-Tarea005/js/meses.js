const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",

];

var cont = 5;
let fin = false;
function imprimeArray() {

    
    if(cont<=12&&fin==false){
        document.write("<p><button onclick='añadeMes()'> Añadir </button></p>");
        for (let i = 0; i < cont; i++) {

            document.write("<p>"+meses[i]+"</p>");
    
            console.log("mes");
        }
        parseInt(cont++);
        console.log(cont);
        document.close();
        if(cont==12){
            fin=true;
        }
    }else if(fin==true){
        document.write("<p><button onclick='añadeMes()'> quitar</button></p>");
        for (let i = 0; i < cont; i++) {

            document.write("<p>"+meses[i]+"</p>");
    
            console.log("mes");
        }
        parseInt(cont--);
        console.log("cont"+cont);
        
        document.close();
        if(cont==0){
            fin=false;
        }
    }
    
}

function añadeMes() {

    imprimeArray();
}
imprimeArray();