// Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

/// Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

// Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

/* Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100 */
//Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

//Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

function decodeNumber(symbols) {
  const values = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100
  };

  let total = 0;
  let previousValue = 0;

  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];

    const currentValue = values[symbol];
    if (currentValue === undefined) {
      return NaN;
    }

    if (currentValue > previousValue) {
      total += currentValue - 2 * previousValue; 
    } else {
      total += currentValue;
    }

    previousValue = currentValue;
  }

  return total;
  }
  
   console.log(decodeNumber('...'));       // 3
   console.log(decodeNumber('.,'));        // 4
   console.log(decodeNumber(',.'));        // 6
   console.log(decodeNumber(',...'));      // 8
   console.log(decodeNumber('.........!'));// 107
   console.log(decodeNumber('.;'));        // 49
   console.log(decodeNumber('..,'));       // 5
   console.log(decodeNumber('..,!'));      // 95
   console.log(decodeNumber('.;!'));       // 49
   console.log(decodeNumber('!!!'));       // 300
   console.log(decodeNumber(';!'));        // 50
   console.log(decodeNumber(';.W'));       // NaN

// El enunciado muestra un esquema de la función con return false como un lugar inicial. Esto significa que la función aún no ha sido implementada y se espera que tú escribas la lógica de la solución. En este caso, el return false es simplemente un marcador de posición para que tú lo reemplaces con la lógica que resuelve el problema.

// Al final, en la solución real que te proporcioné, debes devolver el resultado correcto de la decodificación (el número obtenido de los símbolos) o NaN en caso de encontrar símbolos desconocidos, no false.

// Por lo tanto, debes reemplazar return false con el código que resuelve el problema, que en este caso es la implementación de la lógica para decodificar los números a partir de los símbolos. El false no tiene ninguna relevancia en la solución y parece ser solo una plantilla que puedes ignorar.

// return false en el enunciado es solo una plantilla de código. Tu tarea es reemplazarlo por la lógica que realiza el cálculo del número correcto basado en los símbolos.