/* Não podemos criar constantes com palavras reservadas, ex: if, else, entre outros!

constantes precisam ter nome significativos

Não pode começar o nme de uma variavel com um numero

Não podem conter espaços ou traços

Utilizamos camelCase

Case-sensitive

Não podemos modificar o valor de constantes 

Não utilizar VAR, utilizar CONST!!!!
*/

const nome = 'João';
console.log(nome);

// const nome; não posso fazer isso aqui, não da pra declarar ela depois

// String = Text | Number = numero

const primerioNumero = 10; // Number
const segundoNumero = 5;

const resultado = primerioNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;

resultadoTriplicado = resultadoTriplicado + 7
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primerioNumero);