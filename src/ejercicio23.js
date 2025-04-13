/*
23. Mes del año

Tema: agrupación de casos

let mes = 'abril'
Muestra cuántos días tiene el mes:

30 días → "abril", "junio", "septiembre", "noviembre"
31 días → "enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"
28 días → "febrero"
switch (mes) {
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        console.log('30 días');
        break;
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        console.log('31 días');
        break;
    case 'febrero':
        console.log('28 días');
        break;
    default:
        console.log('Mes no válido');
        break;
}
Otro → "Mes no válido"
 */
