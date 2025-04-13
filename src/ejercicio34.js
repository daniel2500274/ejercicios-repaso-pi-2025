/*
🔴 Avanzados
34. Promedio por estudiante (matriz)

Tema: matriz + anidado

const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]
Calcula y muestra el promedio de cada estudiante en una lista.
 */
const notas = [
    [80, 90, 100], // Estudiante 1
    [70, 60, 75], // Estudiante 2
    [88, 95, 92], // Estudiante 3
]

notas.forEach((estudiante, index) => {
    const promedio = estudiante.reduce((acum, nota) => acum + nota, 0) / estudiante.length;
    console.log(`Promedio del estudiante ${index + 1}: ${promedio.toFixed(2)}`);
});