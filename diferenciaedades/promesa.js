const persona1 = { nombre: 'Juan', edad: 25 };
const persona2 = { nombre: 'María', edad: 30 };

const arrayDePersonas = [persona1, persona2];

const diferenciaEdades = Math.abs(persona1.edad - persona2.edad);

if (persona1.edad > persona2.edad) {
  console.log(`${persona1.nombre} tiene ${diferenciaEdades} años más que ${persona2.nombre}.`);
} else if(persona1.edad === persona2.edad) {
  console.log(`${persona2.nombre} y ${persona1.nombre} tienen la misma edad`);
} else {
  console.log(`${persona2.nombre} tiene ${diferenciaEdades} años más que ${persona1.nombre}.`);

}

