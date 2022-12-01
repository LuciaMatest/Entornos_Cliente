let alumno = new Object();
alumno.nombre = 'Carlos';
alumno['apellidos'] = 'Perez Ortiz';
alumno.edad = 19;

let alumna = {
    // propiedades
    nombre: 'Ana',
    apellidos: 'Cifuentes Martin',
    edad: 26,
    medidas: {
        altura: 1.7,
        pie: 32,
    },
};

console.log(alumna.edad + 1);
alumna.edad = 40;
console.log(alumna.edad);
let edad = 'edad';
console.log(alumna[edad]);

console.log(alumna);
console.log(alumna.medidas.altura);