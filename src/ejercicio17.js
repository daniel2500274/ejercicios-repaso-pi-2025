/*
17. Mayor de tres números
Tema: if-else anidado
let a = 10,
    b = 5,
    c = 7
Muestra cuál es el número mayor entre los tres.
 */

if (a > b && a > c) {
    console.log(`El número mayor es ${a}`);
} else if (b > c) {
    console.log(`El número mayor es ${b}`);
} else {
    console.log(`El número mayor es ${c}`);
}