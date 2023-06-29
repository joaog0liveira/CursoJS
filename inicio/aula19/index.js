/*
Primitivos (imutaveis) - String, number, boolean, undefined, null, bigint, symbol
*/

let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);
//imutavel

console.log();

let a = 'A';
let b = a; // copia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

console.log();

// referencia (mutavel) - array, object, function - Passados por referência

let a1 = [1, 2 ,3];
let b1 = a1; // [...a]  a vai ser independete de c, pq fiz uma copia pra dentro de b1
let c1 = b1;
console.log(a1, b1);

a1.push(4);
console.log(a1, b1);

b1.pop(4);
console.log(a1, b1);

console.log();
console.log(a1, b1, c1);

a1.push('Luiz');
console.log(a1, b1, c1);


const a3 = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

const b3 = a3;

a3.nome = 'JOão';
console.log(a3);
console.log(b3);