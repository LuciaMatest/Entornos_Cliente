let frutas = ['Peras', 'Manzanas', 'Kiwis', 'Platanos', 'Mandarinas'];
console.log(frutas);

let eliminar = frutas.splice(1,1);
console.log(frutas);

frutas.splice(3,0, 'Naranjas','Sandias');
console.log(frutas);

frutas.splice(1,1, 'Cerezas','Nisperos');
console.log(frutas);

console.log(frutas);