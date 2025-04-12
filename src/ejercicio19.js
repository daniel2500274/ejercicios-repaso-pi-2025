/*
19. Calculadora básica
Tema: condiciones múltiples + operadores
let num1 = 12
let num2 = 3
let operacion = '+'
Usa if/else if para realizar:
Suma, resta, multiplicación o división según operacion. Muestra el resultado final.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el primer número: ', (input1) => {
    rl.question('Ingresa el segundo número: ', (input2) => {
        rl.question('Ingresa la operación (+, -, *, /): ', (operation) => {
            const num1 = parseFloat(input1);
            const num2 = parseFloat(input2);
            const operacion = operation.toLowerCase();

            if (isNaN(num1) || isNaN(num2)) {
                console.log('Por favor, ingresa números válidos.');
            } else {
                if (operacion === '+') {
                    console.log(`Resultado: ${num1 + num2}`);
                } else if (operacion === '-') {
                    console.log(`Resultado: ${num1 - num2}`);
                } else if (operacion === '*') {
                    console.log(`Resultado: ${num1 * num2}`);
                } else if (operacion === '/') {
                    if (num2 !== 0) {
                        console.log(`Resultado: ${num1 / num2}`);
                    } else {
                        console.log('Error: División por cero.');
                    }
                } else {
                    console.log('Operación no válida. Usa +, -, * o /.');
                }
            }

            rl.close();
        });
    });
});