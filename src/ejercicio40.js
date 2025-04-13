/*
🔴 Avanzados
40. Validar correo electrónico

Tema: lógica dentro de función

Crea una función validarCorreo(correo). Debe verificar si el string contiene "@" y "."

Si es así, muestra "Correo válido", si no, "Correo inválido".

Solicita un correo al usuario.
 */

const readline = require('readline');

function validarCorreo(correo) {
    // Verificar si el string contiene "@" y "."
    if (correo.includes('@') && correo.includes('.')) {
        console.log('Correo válido');
    } else {
        console.log('Correo inválido');
    }
}

// Solicitar el correo al usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Por favor, ingrese su correo: ', (correo) => {
    validarCorreo(correo);
    rl.close();
});