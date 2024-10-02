//Ejercicio 1 : crear un programa que lea un numero entero y lo clasifique como positivo negativo  o cero
const numero = parseInt(prompt("Ingrese un numero entero: "))
if (numero > 0) {
    console.log("El numero es positivo")
    } else if (numero === 0) {
        console.log("El numero es cero")
        } else {
            console.log("El numero es negativo")
            }