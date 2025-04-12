/*
4. Sumar texto numérico convertido
Tema: conversión de string a number
let edadTexto = '25'
Convierte la variable a número y suma 5.
Imprime el resultado final:
"Edad más 5: 30"
 */
let edadTexto = '25'
edadTexto= Number(edadTexto) + 5 //convierte un texto a numero
//edadTexto= parseInt(edadTexto) + 5 convierte a enteros (sin decimales)
//edadTexto= parseFloat(edadTexto) + 5 convierte a real con decimal
console.log(`Edad más 5: ${edadTexto}`)