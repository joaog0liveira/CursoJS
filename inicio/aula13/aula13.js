
let umaString = 'Um "texto"';
console.log(umaString[4]);
console.log(umaString[20]);
console.log(umaString.charAt(1));
console.log(umaString.charAt(20));
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

console.log();
console.log(umaString.indexOf('texto'));
console.log(umaString.lastIndexOf('m', 6));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outra'));

console.log();
console.log(umaString.length);
console.log(umaString.slice(5, 8));
console.log(umaString.substring(umaString.length - 5));

console.log();
console.log(umaString.split(' ', 2));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());