let alumno = new Object();
alumno.nombre = 'Carlos';
alumno['apellidos'] = 'Perez Ortiz';
alumno.edad = 19;

let alumna = {
    // propiedades
    nombre: 'Ana',
    apellidos: 'Cifuentes Martin',
    edad: 26,
};

console.log(alumna.edad + 1);
alumna.edad = 40;
console.log(alumna.edad);