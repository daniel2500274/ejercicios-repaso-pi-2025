/*
18. Validar usuario y contraseña
Tema: doble condición
let usuario = 'admin'
let contrasena = '1234'
Verifica si ambos valores son correctos.
Si lo son, imprime "Acceso permitido"; si no, "Datos incorrectos".
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el usuario: ', (userInput) => {
    rl.question('Ingrese la contraseña: ', (passwordInput) => {
        const usuario = 'admin';
        const contrasena = '1234';

        if (userInput === usuario && passwordInput === contrasena) {
            console.log('Acceso permitido');
        } else {
            console.log('Datos incorrectos');
        }

        rl.close();
    });
});