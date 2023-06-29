/*
Operadores de comparação

>  maior que
>= maior que ou igual
< menor que
<= menor que ou igual
==     igualdade (valor)
===    igualdade estrita (valor e tipo)
!=     diferente (valor)
!==    difenrente estrito (valor e tipo)
*/

console.log(10 > 5);
console.log();
console.log(10 >= 5);
console.log(10 >= 10);
console.log();
console.log(10 < 5);
console.log(5 <= 5);
console.log();
console.log(10 == 10);
console.log(10 == '10'); // vai falar que o number é igual a string
console.log();
console.log(10 === 10);
// console.log(10 === '10'); se tentar verificar com a string vai dar que é falso
console.log();
console.log(10 != 5);
console.log(10 != '5'); // vai continuar dando o resultado certo no caso false
console.log();
console.log(10 !== 20);
const num1 = '10';
console.log(10 === num1); // vai falar que é falso

