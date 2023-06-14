function saudacao(nome) {
    //console.log(`Bom dia! ${nome}!`);
    return `Bom dia! ${nome}!`;
}

saudacao('Luiz');
saudacao('Maria');
saudacao('Filipe');

const variavel = saudacao('Pedro'); // nesse caso preciso utilizar o return
console.log(variavel); // undefined

console.log();

function soma(x, y) { //posso dar valores aqui x = 1, y = 2
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(10, 3));
console.log(soma(-2, 2));
// console.log(resultado);// não consigo pois está dentro do escopo da função

//const resultado = soma(2,2);
//console.log(resultado);
console.log();
const resultado = soma();
console.log(resultado); // NaN

console.log();

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

console.log();

const raiz2 = (n) => {
    return n ** 0.5;
};

console.log(raiz2(9));
console.log();