/*
43. Eliminar el último producto del carrito

Tema: pop()

const carrito = ['Pan', 'Leche', 'Huevos', 'Queso']
Elimina el último producto y muestra:

El producto eliminado.
El carrito actualizado.
 */
const carrito = ['Pan', 'Leche', 'Huevos', 'Queso']
const productoEliminado = carrito.pop();
console.log(`El producto eliminado es ${productoEliminado}`);
console.table(carrito);