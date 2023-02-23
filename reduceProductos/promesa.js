function calcularMediaPrecios(productos) {
  const sumaPrecios = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
  }, 0);
  
  const mediaPrecios = sumaPrecios / productos.length;
  
  return mediaPrecios;
}

const productos = [
  { nombre: 'Producto 1', precio: 10, existencias: 5 },
  { nombre: 'Producto 2', precio: 20, existencias: 10 },
  { nombre: 'Producto 3', precio: 30, existencias: 0 },
];


const mediaPrecios = calcularMediaPrecios(productos);
console.log(mediaPrecios);
