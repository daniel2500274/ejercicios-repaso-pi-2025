/*
39. Suma de arreglo

Tema: función con arreglo como parámetro

Crea una función sumarArreglo(arreglo). Debe retornar la suma total de los números ingresados por el usuario según un menú interactivo que permita ingresar un número y luego preguntar si desea ingresar más números hasta que ya no desee ingresar más números y que muestre la suma.

Utiliza push para ingresar cada número dado por el usuario
 */

const readline = require("readline");

function sumarArreglo() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const arreglo = [];

    const preguntarNumero = () => {
        rl.question("Ingrese un número: ", (numero) => {
            const parsedNumero = parseFloat(numero);

            if (!isNaN(parsedNumero)) {
                arreglo.push(parsedNumero);
            } else {
                console.log("Por favor, ingrese un número válido.");
            }

            rl.question("¿Desea ingresar otro número? (s/n): ", (respuesta) => {
                if (respuesta.toLowerCase() === "s") {
                    preguntarNumero();
                } else {
                    const suma = arreglo.reduce((acc, curr) => acc + curr, 0);
                    console.log(`La suma de los números ingresados es: ${suma}`);
                    rl.close();
                }
            });
        });
    };

    preguntarNumero();
}
sumarArreglo()