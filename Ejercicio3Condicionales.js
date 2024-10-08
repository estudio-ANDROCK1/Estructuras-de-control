//Crea un programa que lea las edades de 5 personas y calcule la edad promedio
let sumaEdades = 0;
for (let i = 0; i < 5; i++) {
  let edad = parseInt(prompt(`ingrese la edad de la persona ${i + 1}: `));

  if (edad > 0) {
    sumaEdades += edad;
  } else {
    alert("la edad debe ser mayor que cero, intente nuevamente.");
    i--;
  }
}

let edadPromedio = sumaEdades / 5;

if (edadPromedio >= 18) {
  alert(`la edad promedio es ${edadPromedio} años, lo que es mayor a la mayoria de edad.`);
} else {
  alert(`la edad promedio es ${edadPromedio} años, lo que es menor a la mayoria de edad.`);
}




