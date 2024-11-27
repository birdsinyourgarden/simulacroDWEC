// Ejercicios: forEach y map en JavaScript

// Datos de ejemplo
const numeros = [1, 2, 3, 4, 5];
const palabras = ['JavaScript', 'es', 'genial'];
const personas = [
  { nombre: 'Ana', edad: 28 },
  { nombre: 'Juan', edad: 32 },
  { nombre: 'María', edad: 25 }
];

// 1. forEach
console.log("Ejercicio 1: forEach");
// Utiliza forEach para imprimir cada número del array 'numeros' multiplicado por 2.

// Tu código aquí

// Resultado esperado:
// 2
// 4
// 6
// 8
// 10

// 2. forEach con índice
console.log("\nEjercicio 2: forEach con índice");
// Utiliza forEach para imprimir cada palabra del array 'palabras' junto con su índice.

// Tu código aquí

// Resultado esperado:
// Palabra en índice 0: JavaScript
// Palabra en índice 1: es
// Palabra en índice 2: genial

// 3. forEach con objetos
console.log("\nEjercicio 3: forEach con objetos");
// Utiliza forEach para imprimir el nombre y la edad de cada persona en el array 'personas'.

// Tu código aquí

// Resultado esperado:
// Ana tiene 28 años
// Juan tiene 32 años
// María tiene 25 años

// 4. map básico
console.log("\nEjercicio 4: map básico");
// Utiliza map para crear un nuevo array con cada número del array 'numeros' elevado al cuadrado.

// Tu código aquí

console.log(numerosAlCuadrado);
// Resultado esperado: [1, 4, 9, 16, 25]

// 5. map con strings
console.log("\nEjercicio 5: map con strings");
// Utiliza map para crear un nuevo array con la longitud de cada palabra en el array 'palabras'.

// Tu código aquí

console.log(longitudPalabras);
// Resultado esperado: [10, 2, 6]

// 6. map con objetos
console.log("\nEjercicio 6: map con objetos");
// Utiliza map para crear un nuevo array de strings que contenga solo los nombres de las personas en el array 'personas'.

// Tu código aquí

console.log(soloNombres);
// Resultado esperado: ['Ana', 'Juan', 'María']

// 7. Combinación de map y forEach
console.log("\nEjercicio 7: Combinación de map y forEach");
// Primero, utiliza map para crear un nuevo array con las edades de las personas en el array 'personas'.
// Luego, utiliza forEach para calcular y imprimir la suma de todas las edades.

// Tu código aquí

// Resultado esperado:
// Las edades son: [28, 32, 25]
// La suma de todas las edades es: 85