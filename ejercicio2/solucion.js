// Ejercicios: Condicionales en JavaScript

// 1. if simple
console.log("Ejercicio 1: if simple");
// Escribe una función llamada 'esAdolescente' que tome una edad como parámetro
// y devuelva true si la edad está entre 13 y 19 (inclusive), y false en caso contrario.

function esAdolescente(edad) {
    if (edad >= 13 && edad <= 19) {
        return true;
    }
    return false;
}

console.log(esAdolescente(15)); // Debería mostrar: true
console.log(esAdolescente(22)); // Debería mostrar: false

// 2. if-else
console.log("\nEjercicio 2: if-else");
// Escribe una función llamada 'evaluarTemperatura' que tome una temperatura (en °C)
// y devuelva 'Calor' si la temperatura es 30 o mayor, y 'Frío' en caso contrario.

function evaluarTemperatura(temperatura) {
    if (temperatura >= 30) {
        return 'Calor';
    } else {
        return 'Frío';
    }
}

console.log(evaluarTemperatura(35)); // Debería mostrar: 'Calor'
console.log(evaluarTemperatura(20)); // Debería mostrar: 'Frío'

// 3. if-else if
console.log("\nEjercicio 3: if-else if");
// Escribe una función llamada 'clasificarNumero' que tome un número como parámetro
// y devuelva 'Negativo' si el número es menor que 0, 'Cero' si es igual a 0, 
// y 'Positivo' si es mayor que 0.

function clasificarNumero(numero) {
    if (numero < 0) {
        return 'Negativo';
    } else if (numero === 0) {
        return 'Cero';
    } else {
        return 'Positivo';
    }
}

console.log(clasificarNumero(-5)); // Debería mostrar: 'Negativo'
console.log(clasificarNumero(0));  // Debería mostrar: 'Cero'
console.log(clasificarNumero(8));  // Debería mostrar: 'Positivo'

// 4. switch
console.log("\nEjercicio 4: switch");
// Escribe una función llamada 'obtenerTipoAnimal' que tome un nombre de animal
// ('perro', 'gato', 'pez', etc.) y devuelva un mensaje como 'Mamífero' para perro y gato,
// 'Acuático' para pez, y 'Tipo desconocido' para otros casos.

function obtenerTipoAnimal(animal) {
    switch (animal) {
        case 'perro':
        case 'gato':
            return 'Mamífero';
        case 'pez':
            return 'Acuático';
        default:
            return 'Tipo desconocido';
    }
}

console.log(obtenerTipoAnimal('gato'));  // Debería mostrar: 'Mamífero'
console.log(obtenerTipoAnimal('pez'));   // Debería mostrar: 'Acuático'
console.log(obtenerTipoAnimal('ave'));   // Debería mostrar: 'Tipo desconocido'

// 5. Condicional ternario
console.log("\nEjercicio 5: Condicional ternario");
// Escribe una función llamada 'evaluarEdad' que tome una edad como parámetro
// y devuelva 'Mayor de edad' si es 18 o mayor, y 'Menor de edad' si es menor.
// Utiliza el operador ternario.

function evaluarEdad(edad) {
    return edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
}

console.log(evaluarEdad(21)); // Debería mostrar: 'Mayor de edad'
console.log(evaluarEdad(16)); // Debería mostrar: 'Menor de edad'

// 6. Combinación de condicionales
console.log("\nEjercicio 6: Combinación de condicionales");
// Escribe una función llamada 'puedeComprarAlcohol' que tome dos parámetros:
// edad (número) y tieneIdentificacion (booleano).
// La función debe devolver true si la persona tiene 21 años o más Y tiene identificación,
// y false en cualquier otro caso.

function puedeComprarAlcohol(edad, tieneIdentificacion) {
    return edad >= 21 && tieneIdentificacion;
}

console.log(puedeComprarAlcohol(23, true));  // Debería mostrar: true
console.log(puedeComprarAlcohol(20, true));  // Debería mostrar: false
console.log(puedeComprarAlcohol(23, false)); // Debería mostrar: false
