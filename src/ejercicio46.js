/*
46. Calcular promedio de notas

Tema: reduce()

const notas = [80, 90, 70, 100]
Usa reduce() para obtener la suma de las notas y luego calcula el promedio.
 */
const notas = [80, 90, 70, 100]

const sumaNotas = notas.reduce((acumulador, notaActual) => acumulador + notaActual, 0);
const promedio = sumaNotas / notas.length;

console.log(`La suma de las notas es: ${sumaNotas}`);
console.log(`El promedio de las notas es: ${promedio}`);