/*
35. Invertir un arreglo

Tema: lógica con índices

const numeros = [1, 2, 3, 4, 5]
Crea un nuevo arreglo con los elementos invertidos: [5, 4, 3, 2, 1]

No uses .reverse()
 */

const numeros = [1, 2, 3, 4, 5]

const invertido = [];
for (let i = numeros.length - 1; i >= 0; i--) {
    invertido.push(numeros[i]);
}
console.log(invertido);