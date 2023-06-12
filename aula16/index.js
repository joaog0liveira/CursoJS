const alunos = ['Luiz', 'Maria', 'João', 1, true, null];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);
console.log(alunos.length);
console.log();

alunos[0] = 'Eduardo';
alunos[3] = 'Luiza';
console.log(alunos);

alunos[alunos.length] = 'Pedro'; // adiciona no fi
alunos[alunos.length] = 'Jorge';
console.log(alunos);
console.log();

alunos.push('Ótavio'); //adiciona no fim
alunos.push('Flávio');
console.log(alunos);
console.log();

alunos.unshift('Filipe'); //adiciona no começo da fila
alunos.unshift('Deise');
console.log(alunos);
console.log();

const removido = alunos.pop(); //removo do final do array
console.log(removido);
console.log(alunos);
console.log();

const removido1 = alunos.shift(); //removo do inicio
console.log(removido1);
console.log(alunos);
console.log();

delete alunos[1]; // deleto mas fico com o indice vazio
console.log(alunos);
console.log();

console.log(alunos[59]); // consigo acessar mas dá undefined
console.log();

console.log(alunos[0, 3]); // pegar de um elemnto até outro - vai de 0 até 2
console.log(alunos[0, -1]);
console.log();
console.log(typeof alunos); // array = object
console.log(alunos instanceof Array); // true = array // false = não é array
