/*
37. Área de un triángulo
Tema: función con retorno
Crea una función calcularAreaTriangulo(base, altura). Debe retornar el área usando la fórmula (base * altura) / 2.
Llama a la función con los valores ingresados por el usuario e imprime el resultado.
 */

function calcularAreaTriangulo(base, altura) {
    // Retorna el área de un triángulo usando la fórmula (base * altura) / 2
    return (base * altura) / 2;
}

// Solicitar los valores de base y altura al usuario
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pedimos la base
rl.question('Ingresa la base del triángulo: ', (baseInput) => {
    const base = parseFloat(baseInput); // Convertir la entrada a número

    // Pedimos la altura
    rl.question('Ingresa la altura del triángulo: ', (alturaInput) => {
        const altura = parseFloat(alturaInput); // Convertir la entrada a número

        // Calcular el área usando la función y mostrar el resultado
        if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
            const area = calcularAreaTriangulo(base, altura);
            console.log(`El área del triángulo es: ${area}`);
        } else {
            console.log('Por favor, ingresa valores válidos para la base y la altura.');
        }

        rl.close();
    });
});