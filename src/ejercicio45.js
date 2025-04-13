/*
45. Filtrar estudiantes aprobados

Tema: filter()

const estudiantes = [
    { nombre: 'Ana', nota: 85 },
    { nombre: 'Luis', nota: 45 },
    { nombre: 'Carla', nota: 70 },
]
Filtra y muestra los estudiantes cuya nota sea mayor o igual a 60.
 */
const estudiantes = [
    { nombre: 'Ana', nota: 85 },
    { nombre: 'Luis', nota: 45 },
    { nombre: 'Carla', nota: 70 },
]
const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.nota >= 60);
console.log(estudiantesAprobados);