let diana= document.getElementById("diana");
console.log(screen.width);
let fin=true;

function moverDiana(){
    //Mover a la derecha
    if(fin==true){
        
        diana.style.left=parseInt(diana.style.left)+20+'px';
        console.log(diana.style.left);
        
        if(parseInt(diana.style.left)>=parseInt(screen.width)){
            fin=false;
            console.log("derecha");
        }
        
    //Mover a la izquierda    
    }else if(fin==false){
       
        diana.style.left = parseInt(diana.style.left)-20+'px';
        console.log(diana.style.left);

        if(parseInt(diana.style.left)==0){
            fin=true;
            console.log("Izquierda");
        }
    }   
}
window.addEventListener('load',()=>{
    // diana.style.position="absolute";
    diana.style.left=0;
});
setInterval(moverDiana,500);