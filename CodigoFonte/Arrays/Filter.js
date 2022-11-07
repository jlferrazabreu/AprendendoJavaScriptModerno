// Retorne valores maiores que 10
const a1 = [5,65,3,23,18,3,4,8,11,,7,58,90,76,3,5,9,45];
const numMaior10 = a1.filter(valor => valor > 10);
console.log(numMaior10);

// Retorne as pessoas que tem o nome com 5 letras ou mais 
// Retorne as pessoas com mais de 50 anos 
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome:'Jorge',idade: 42},
    {nome:'Luana',idade: 38},
    {nome:'Jaqueline',idade: 50},
    {nome:'João',idade: 62},
    {nome:'Lara',idade: 4},
    {nome:'Marcio',idade: 22},
    {nome:'Stela',idade: 52},
];

const nomeMaisDe5Letras = pessoas.filter(valor => valor.nome.length >= 5);
const pessoasCom50ouMais = pessoas.filter(valor => valor.idade > 50);
const nomeQueFinalizaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));

console.log(nomeMaisDe5Letras);
console.log(pessoasCom50ouMais);
console.log(nomeQueFinalizaComA);