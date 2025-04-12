/*
15. Clasificación de notas
Tema: else if
let nota = 83
Imprime:
"A" si es mayor o igual a 90
"B" si es entre 80 y 89
"C" si es entre 70 y 79
"D" si es entre 60 y 69
"F" si es menor a 60
 */
let nota = 83

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80 && nota <= 89) {
    console.log("B");
} else if (nota >= 70 && nota <= 79) {
    console.log("C");
} else if (nota >= 60 && nota <= 69) {
    console.log("D");
} else {
    console.log("F");
}