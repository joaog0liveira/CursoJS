const nome = 'João Gabriel';
const sobrenome = 'Meireles';
const idade = 20;
const peso = 70;
const altura = 1.80;
let imc = peso / (altura * altura); // peso / (altura * altura)
let anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg\ntem', altura, 'de altura e seu IMC é de', imc, '!');
console.log(nome, 'nasceu em', anoNascimento);

console.log()

//template Strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}!`)
console.log(`${nome} nasceu em ${anoNascimento}`);