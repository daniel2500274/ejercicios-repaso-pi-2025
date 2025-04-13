/*
25. Menú interactivo (simulado)
Tema: do...while
Simula un menú que se muestra al menos una vez.
Si opcion es "A", muestra "Bienvenid@".
Si opcion es "B", permita la entrada de un nombre y muestra "Bienvenid@ ${nombreIngresado}".
Repite mientras opcion no sea "3".
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let opcion;

do {
    console.log('Menú interactivo:');
    console.log('A. Bienvenid@');
    console.log('B. Ingresar nombre');
    console.log('3. Salir');

    opcion = await new Promise(resolve =>
        rl.question('Seleccione una opción: ', resolve)
    );

    switch (opcion) {
        case 'A':
            console.log('Bienvenid@');
            break;
        case 'B':
            const nombreIngresado = await new Promise(resolve =>
                rl.question('Ingrese su nombre: ', resolve)
            );
            console.log(`Bienvenid@ ${nombreIngresado}`);
            break;
        case '3':
            console.log('Saliendo del menú...');
            break;
        default:
            console.log('Opción no válida. Inténtelo de nuevo.');
    }

} while (opcion !== '3');

rl.close();