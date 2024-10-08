//Desarrolla un programa que solicite al usuario un año y determine si es biciesto o no
const year  = parseInt(prompt("Ingrese un año: "))
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log(year + " es un año bisiesto");
            } else {
                console.log(year + " no es un año bisiesto");
                }
                } else {
                    console.log(year + " es un año bisiesto");
                    }
                    } else {
                        console.log(year + " no es un año bisiesto");
                        }
                        

