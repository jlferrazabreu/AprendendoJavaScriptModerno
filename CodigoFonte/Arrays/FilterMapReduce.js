// Retorne a soma do dobro de todos os pares
// -> Filtrar pares 
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5,65,3,23,18,3,4,8,11,7,58,90,76,3,5,9,45];
const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);

console.log(numerosPares);

// [ 18, 4, 8, 58, 90, 76 ]
// [ 36, 8, 16, 116, 180, 152 ]
// 508