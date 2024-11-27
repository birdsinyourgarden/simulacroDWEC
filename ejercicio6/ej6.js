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
  // Tu solución aquí 
   return false
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