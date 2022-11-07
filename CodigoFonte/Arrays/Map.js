// Dobrar os numeros
const numeros = [5,65,3,23,18,3,4,8,11,7,58,90,76,3,5,9,45];
const dobraNumero = numeros.map(valor => valor * 2);
// console.log(dobraNumero);

// Retorne apenas uma string com nome da pessoa 
// Remova apenas a chave "nome" do objeto 
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome:'Jorge',idade: 42},
    {nome:'Luana',idade: 38},
    {nome:'Jaqueline',idade: 50},
    {nome:'João',idade: 62},
    {nome:'Lara',idade: 4},
    {nome:'Marcio',idade: 22},
    {nome:'Stela',idade: 52},
];

// const nomes = pessoas.map(obj => obj.nome);
// const idades = pessoas.map(obj => ({idade: obj.idade}));
const objComId = pessoas.map((obj,indice) => {
   const newObj = {...obj};
   newObj.id = indice + 1
    return newObj;
});

// console.log(nomes);
// console.log(idades);
console.log(objComId);