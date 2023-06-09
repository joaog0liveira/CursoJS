// String, number, undefined, null, boolean, symbol são dados primitivos

var nome = 'Luiz';
var nome = 'Otavio';
// posso rescrever a variavel e não vai ter erro
nome = 'Pedro';// NÃO FAÇA ISSO
console.log(nome);


let nome1 = 'Luiz'; // Não vou poder rescrever a variavel
console.log(nome1);

// Strings
const nome2 = 'João';
const nome3 = "João";
const nome4 = `João`;

//Number
const num1 = 10;
const num2 = 10.52;

// undefined -> não aponta pra local nenhum na memória
let nomeAluno;

// Nulo -> não aponta pra lugar nenhum na memória
const sobreNomeAluno = null;

// Boolean = true or false (lógico)
const aprovado = true;
const reprovado = false;



const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);