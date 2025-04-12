/*
20. Día de la semana
Tema: switch + números
let numeroDia = 3
Usa switch para mostrar el día correspondiente:
1 → "Lunes"
2 → "Martes"
3 → "Miércoles"
4 → "Jueves"
5 → "Viernes"
Cualquier otro número → "Día inválido"
 */
let numeroDia = 3
switch (numeroDia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    default:
        console.log("Día inválido");
}