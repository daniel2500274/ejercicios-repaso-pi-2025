/*
22. Tipo de transporte
Tema: switch con texto
let tipo = 'bicicleta'
Muestra:
"Vehículo con motor" para "carro" o "moto"
"Vehículo sin motor" para "bicicleta" o "patineta"
"Tipo desconocido" si no coincide con ningún caso
 */
let tipo = 'bicicleta'
switch (tipo) {
    case 'carro':
    case 'moto':
        console.log("Vehículo con motor");
        break;
    case 'bicicleta':
    case 'patineta':
        console.log("Vehículo sin motor");
        break;
    default:
        console.log("Tipo desconocido");
        break;
}