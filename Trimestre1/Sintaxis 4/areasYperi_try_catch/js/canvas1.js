let canvas1 = document.querySelector("#canvas1");
let x1,y1,w1,h1,n,l;  //coordenadas, ancho, alto (canvas), num_lados y longitud_lado
const c1 = document.getElementById('c1'); //no se necesita inicializar
canvas1.width = c1.clientWidth ;
console.log(canvas1.width);
canvas1.height = 250; 
l = Math.floor(canvas1.width/4);
n=6;

function inicializarCanvas1(){ 
  if (canvas1 && canvas1.getContext) {
    const ctx1 = canvas1.getContext("2d");
        if (ctx1) {
			 let s = getComputedStyle(canvas1); //obtiene un objeto con los estilos computados
			 let w = s.width;
			 let h = s.height;
					
			 w1 = canvas1.width = w.split("px")[0]; //extrae el valor numérico
			 h1 = canvas1.height = h.split("px")[0];
			 
			 x1 = Math.floor(w1/2);
			 y1 = Math.floor(h1/2);
			 r = Math.floor(w1/4);
       ctx1.strokeStyle = "white";
      //  ctx1.fillStyle = "cyan";
       ctx1.fillRect(1,1,canvas1.width, canvas1.heigth);
			 dibujarPoligono(ctx1);
			 }
		}
	}
	  	   
function dibujarPoligono(ctx1){
  ctx1.strokeStyle = "black";
  ctx1.fillStyle = "cyan";
  ctx1.lineWidth = 2;
  ctx1.beginPath();
  let x=x1+60;
  let y= y1;

  ctx1.moveTo(x,y); //centro
  ctx1.lineTo(x-30,y+ 60) //1
  ctx1.lineTo(x-100,y+ 60) //2
  ctx1.lineTo(x-130,y) //3
  ctx1.lineTo(x-100,y- 60) //4
  ctx1.lineTo(x-30,y -60) //5
  
  ctx1.closePath();
  ctx1.fill(); //dibuja área
  ctx1.stroke(); //dibuja perímetro
  ctx1.moveTo(x1-5,y1); //centro
  ctx1.lineTo(x-65, y +60)
  ctx1.stroke(); //dibuja apotema
}

inicializarCanvas1();

// setTimeout(function() {
//   inicializarCanvas1();
//   addEventListener("resize", inicializarCanvas);
// }, 15);