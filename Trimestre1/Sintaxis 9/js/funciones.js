// document.cookie = "nombreCookie=Paco";


// function obtenerValor(nombreCookie){
//     let cokies= document.cookie;
//     //Divido por espacios
//     let cadena= cokies.split(" ");

//     for (const iterator of cadena) {
//         //Divido por ;
//         let p= iterator.split(";");
//         for (const i of p) {
//             let f=i.split("=")
//             for (let u = 0; u < f.length; u++) {
//                 if(f[u]==nombreCookie){
//                     console.log("VALOR FINAL "+ f[++u]);
//                 }
//             }          
//         }
//     }
// }

// valorCookie("nombreCookie");

let c1 ='uno';
let c2 ='dos';
document.cookie = "c1="+encodeURIComponent(c1);
document.cookie = "c2="+encodeURIComponent(c2);
document.cookie = "c3="+encodeURIComponent(c3);
console.log(document.cookie);
let array1 = document.cookie.split(';');
let colletionC = new Map();
array1.forEach((c)=>{
    let array2 = c.split('=');
});