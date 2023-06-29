const array = [1,2 ,3];
array.push(4);
array[0] = 'Luiz';
// array = 'Outra'; não pode isso precisa ser let pra fazer isso
console.log(array);

console.log();
//{objetos} [array]
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}; //objetos

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log();
function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa2 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa3 = criaPessoa('Deise', 'Meireles', 18);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa3.nome);


const pessoa4 = {
    nome: 'Luiz',
    sobrenome: 'Pedro',
    idade: 25,

    fala() {
        console.log('Olá mundo!');
        console.log(`${this.nome} ${this.sobrenome} está falando! Idade atual é ${this.idade}`);
    },
    incrementaIdade() {
        ++this.idade;
    }
}

pessoa4.fala();
pessoa4.incrementaIdade();
pessoa4.fala();