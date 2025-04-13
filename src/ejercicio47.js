/*
🔴 Avanzados
47. Ordenar productos por precio

Tema: sort()

const productos = [
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 100 },
]
Ordena el arreglo de productos de menor a mayor precio.

Muestra el arreglo ordenado.
 */
const productos = [
    { nombre: 'Monitor', precio: 300 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 100 },
]

productos.sort((a, b) => a.precio - b.precio);

console.log(productos);