let canvas2 = document.querySelector("#canvas2");
let x2,y2,w2,h2,r;  //coordenadas, ancho, alto y radio 
const c2 = document.getElementById('c1'); //no se necesita inicializar
canvas2.width = c2.clientWidth ;
console.log(canvas2.width);
canvas2.height = 250; 

function inicializarCanvas2(){ 
  if (canvas2 && canvas2.getContext) {
    const ctx2 = canvas2.getContext("2d");
        if (ctx2) {
			 let s = getComputedStyle(canvas2); //obtiene un objeto con los estilos computados
			 let w = s.width;
			 let h = s.height;
					
			 w2 = canvas2.width = w.split("px")[0]; //extrae el valor numérico
			 h2 = canvas2.height = h.split("px")[0];
			 
			 x2 = Math.floor(w2/2);
			 y2 = Math.floor(h2/2);
			 r = Math.floor(w2/4);
			   
			 dibujarCirculo(ctx2);
			 }
		}
	}
	  	   
function dibujarCirculo(ctx2){
  ctx2.strokeStyle = "black";
  ctx2.fillStyle = "cyan";
  ctx2.lineWidth = 2;
  ctx2.arc(x2,y2,r,0,2*Math.PI);
  ctx2.fill();
  ctx2.lineTo(x2,y2); //dibuja también el radio
  ctx2.stroke();
}

inicializarCanvas2();

// setTimeout(function() {
//   inicializarcanvas2();
//   addEventListener("resize", inicializarCanvas);
// }, 15);