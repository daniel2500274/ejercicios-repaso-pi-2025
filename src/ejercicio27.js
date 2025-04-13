/*
27. Juego del número secreto

Tema: do...while con condición
console.log(`El número secreto es: ${NUMERO_SECRETO}`)
Crea un juego que pide números hasta adivinar el número secreto.

Muestra: "¡Adivinaste!" cuando el intento sea correcto.

Haz que el valor de intento cambie dentro del bucle.
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1;
console.log(`(Pista para pruebas: El número secreto es ${NUMERO_SECRETO})`);

function preguntar() {
    rl.question('Adivina el número secreto (entre 1 y 100): ', respuesta => {
        const intento = parseInt(respuesta, 10);

        if (isNaN(intento)) {
            console.log('Por favor, ingresa un número válido.');
            preguntar();
        } else if (intento === NUMERO_SECRETO) {
            console.log('¡Adivinaste!');
            rl.close();
        } else if (intento < NUMERO_SECRETO) {
            console.log('El número secreto es mayor.');
            preguntar();
        } else {
            console.log('El número secreto es menor.');
            preguntar();
        }
    });
}

preguntar();
