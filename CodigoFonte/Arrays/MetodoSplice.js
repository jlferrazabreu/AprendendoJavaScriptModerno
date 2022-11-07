//                0       1       2        3         4
const nomes = ['Maria','João','Eduardo','Gabriel','Júlia'];
// pop
removidoPop = nomes.splice(4,1);
// shift
const nomes1 = ['Maria','João','Eduardo','Gabriel','Júlia'];
removidoShift = nomes1.splice(0,1);
// push
const nomes2 = ['Maria','João','Eduardo','Gabriel','Júlia'];
nomes2.splice(nomes2.length,'Luana','Lara');
// unshift
const nomes3 = ['Maria','João','Eduardo','Gabriel','Júlia'];
nomes3.splice(0,'Luana','Lara');

console.log('removido pela simulação a função pop ',removidoPop);
console.log('removido pela simulação a função shift',removidoShift);
console.log('inserido pela simulação a função push',nomes2);
console.log('inserido pela simulação a função unshift',nomes3);


