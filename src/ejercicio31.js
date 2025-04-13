/*
31. Contar números pares

Tema: condición dentro de for

const numeros = [2, 7, 10, 15, 22, 33]
Cuenta cuántos números del arreglo son pares.
 */
const numeros = [2, 7, 10, 15, 22, 33]

const contarPares = (numeros) => numeros.reduce((count, numero) => (numero % 2 === 0 ? count + 1 : count), 0);

const count = contarPares(numeros);
console.log(`Cantidad de números pares: ${count}`);