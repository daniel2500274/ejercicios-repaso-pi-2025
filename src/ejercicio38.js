/*
🟡 Intermedios
38. Verificar si un número es par

Tema: función condicional

Crea una función esPar(numero). La función debe retornar true si el número es par, o false si es impar.

Prueba la función con el número 7.
 */

function esPar(numero) {
    // Verificar si el número es divisible entre 2
    // Si no hay residuo, el número es par
    return numero % 2 === 0;
}

// Prueba de la función con el número 7
console.log(esPar(7)); // Debería imprimir false