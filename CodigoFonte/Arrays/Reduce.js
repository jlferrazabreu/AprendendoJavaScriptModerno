// Some todos os números (Reduce)
const numeros = [5,65,3,23,18,3,4,8,11,7,58,90,76,3,5,9,45];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
});
// console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Jorge',idade: 42},
    {nome: 'Luana',idade: 39},
    {nome: 'Lara',idade: 4},
    {nome: 'João',idade: 32},
    {nome: 'Maria',idade: 41},
    {nome: 'Jose',idade: 12},
]
const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelha);