/*
🧩 Funciones y Procedimientos
🟢 Básicos
36. Saludo personalizado

Tema: función con parámetro, sin retorno

Crea una función llamada saludar(nombre), Debe imprimir un saludo como:

"Hola, Juan. Bienvenido a la clase de programación."

Llama a la función con el nombre ingresado por el usuario.
 */

function saludar(nombre) {
    console.log(`Hola, ${nombre}. Bienvenido a la clase de programación.`);
}

// Solicitar el nombre al usuario e invocar la función
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, ingresa tu nombre: ', (nombre) => {
    saludar(nombre);
    rl.close();
});