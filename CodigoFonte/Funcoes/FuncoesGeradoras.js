function* geradora1(){
    // Código qualquer ...
    yield 'Valor 1'
    // Código qualquer ...
    yield 'Valor 2'
    // Código qualquer ...
    yield 'Valor 3'
}

// const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);

function* gerador2(){
    let i = 0
    while(true){
        yield i;
        i++;
    }
}

// const g2 = gerador2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

function* gerador3(){
    yield 0;
    yield 1;
    yield 2;
}

function* gerador4(){
    // yield* gerador3();
    yield 3;
    yield 4;
    yield 5;
}

// const g4 = gerador4();
// for (let valor of g4) {
//     console.log(valor);
// }

function* geradora5(){
    yield function(){
        console.log('Vin do y1');
    }

    return function(){
        console.log('Vim do retorn');
    }

    yield function(){
        console.log('Vin do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
