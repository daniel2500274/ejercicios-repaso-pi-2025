/*
28. Validación de contraseña

Tema: verificación en do...while
Repite el ingreso de contraseña hasta que coincida con la correcta.
Muestra "Contraseña incorrecta" cada vez que falle y "Acceso permitido" al final.
 */
const CONTRASENA_CORRECTA = 'claveSegura'

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contrasenaIngresada;

(async function () {
    do {
        contrasenaIngresada = await new Promise((resolve) => {
            rl.question('Ingresa la contraseña: ', resolve);
        });

        if (contrasenaIngresada !== CONTRASENA_CORRECTA) {
            console.log('Contraseña incorrecta');
        }
    } while (contrasenaIngresada !== CONTRASENA_CORRECTA);

    console.log('Acceso permitido');
    rl.close();
})();