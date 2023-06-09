/*
    Aritméticos
    + 
    - 
    *
    /
    ** Potenciação
    % Resto da divisão

*/

const num1 = 2;
const num2 = 10;
console.log(num1 ** num2);
console.log(num1 % num2);

/*
    Precedencia
    ()
    **
    * / %
    + -
*/

let contador = 1;
contador++;
contador++;
contador++;
console.log(contador);


let contador1 = 10;
contador1--;
contador1--;
console.log(contador1);



// Operadores de atribuição
let contador3 = 1;
contador3 += 50; // contador = contador + 50
contador3 *= 10;
contador3 **= 10;
console.log(contador3);

//NaN - Not a Number
const num3 = 10;
const num4 = 'João';
console.log(num3 * num4);


//parseInt (inteiro), parseFloat(decimais), Number(numeros)
const num5 = 10;
const num6 = Number('5.2'); //converte pra int
console.log(num5 + num6);