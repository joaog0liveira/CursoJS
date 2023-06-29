// IEEE 754-2008 padrao para precisao de numeros javascript
let num1 = 1; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2); //toString converte o numero para string mas só nessa linha
console.log(typeof num1);

console.log();
num1 = 1500;
console.log(num1.toString(2)); //valor binario de 1500

console.log();
num1 = 10.543414554;
console.log(num1.toFixed(2)); //arredonda para duas casas decimais

console.log();
num1 = 10;
console.log(Number.isInteger(num1)); //retorna true or false pra ver se é inteiro

console.log();
let temp = num1 * 'Olá'; // NaN - not a number
console.log(Number.isNaN(temp)); // true se a conta for invalida false se for valida 

console.log();
num1 = 0.7;
num2 = 0.1;

num1 += num2; //0.8     essa conta tambem funciona assim 
// num1 = ((num1 * 100) + (num2 * 100)) / 100           vai dar 0.8
num1 += num2; //0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100           vai dar 0.9
num1 += num2; //1.0
// num1 = ((num1 * 100) + (num2 * 100)) / 100           vai dar 1.0
// num1 = num1.toFixed(2); não resolve o problema
num1 = parseFloat(num1.toFixed(2));
// num1 = Number(num1.toFixed(2)); tambem funciona

console.log(num1);
console.log(Number.isInteger(num1));


