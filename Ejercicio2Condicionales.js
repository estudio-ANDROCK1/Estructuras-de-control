// hacer una calculadora simple con const
const num1 = parseFloat(prompt("ingrese  el primer numero"));
const num2 = parseFloat(prompt("ingrese  el segundo numero"));
const operador = prompt("ingrese el operador (+, -, *, /)");
if (operador == "+") {
    const  resultado = num1 + num2;
    console.log(`el resultado de la suma es : ${resultado}`);
}  else if (operador == "-") {
    const resultado = num1 - num2;
    console.log(`el resultado de la resta es ${resultado}`);
}  else if (operador == "*") {
    const resultado = num1 * num2;
    console.log(`el resultado de la multiplicacion es ${resultado}`);
}   else if (operador == "/") {
    if  (num2 == 0) {
        console.log("error: no se puede dividir entre cero");
        } else {
    const resultado = num1 / num2;
    console.log(`el resultado de la division es${resultado}`);
        }
}  else {
    console.log("error: operador invalido");
    }












                                    



    

