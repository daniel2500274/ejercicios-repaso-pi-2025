/*
41. Generar contraseña aleatoria

Tema: lógica con bucle dentro de función

Crea una función generarContraseña(longitud). Debe retornar una contraseña aleatoria con letras y números.

Ejemplo: "a7d3g8" si la longitud es 6.

(No necesitas usar caracteres especiales).
 */

function generarContraseña(longitud) {
    // Definimos los caracteres permitidos: letras (mayúsculas y minúsculas) y números
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let contraseña = '';

    // Generamos la contraseña utilizando un bucle
    for (let i = 0; i < longitud; i++) {
        // Obtenemos un carácter aleatorio de la lista de caracteres
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }

    return contraseña;
}
console.log(generarContraseña(6)); // Ejemplo: "a7d3g8"