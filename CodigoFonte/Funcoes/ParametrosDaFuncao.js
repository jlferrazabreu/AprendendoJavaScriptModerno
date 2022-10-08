// Toda função tem um argumento chamado arguments que sustenta todos argumentos enviados
function funcao(){
    console.log(arguments)
}
funcao(1,2,3,4,5,6,7);

function funcao1(a, b, c){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total,a,b,c);
}
 funcao1(1,2,3,4,5,6,7);

//Quando a função tem parametro e não são envidos os argumentos assume o valor de undefined
function funcao2(a,b,c,d,e,f){
    console.log(a,b,c,d,e,f);
}
funcao2(1, 2, 3)

//Parametro com valor default
function funcao3(a = 1, b = 2, c = 5){
    console.log(a+ b + c);
}
funcao3(2,3)

//Rest parameter   
function conta(operador,acumulador,...numeros){
    for(let numero of numeros){
        if(operador == '+') acumulador += numero;
        if(operador == '-')acumulador -= numero;
        if(operador == '/')acumulador /= numero;
        if(operador == '*')acumulador *= numero;
    }
    console.log(acumulador);
}
conta('*',1,20,30,40,50)