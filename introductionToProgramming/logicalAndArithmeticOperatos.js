/* 
  LÓGICOS
  ///////////////////////////////////////////////
  && "E": As duas operações devem ser verdadeiras
  para que a condição final seja TRUE.

  || "OU": Uma das condições devem ser verdadeira
  para que a condição final seja TRUE.

  ! "NÃO": Nega a condição.
  ///////////////////////////////////////////////
*/

const age = 16;

if (!(age >= 18) || age === 17) {
  console.log("Bloqueiar entrada.");
} else {
  console.log("Deixa entrar.");
}

/* 
  ARITMÉTICOS
  ///////////////////////////////////////////////
  * : Multiplicação
  / : Divisão
  % : Resto da divisão
  + : Adição
  - : Subtração
  ///////////////////////////////////////////////
*/

console.log(5 * 5); // 25
console.log(5 / 5); // 1
console.log(5 % 5); // 0
console.log(5 + 5); // 10
console.log(5 - 5); // 0
