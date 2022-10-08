// Declaração de função (Function hoisting)
function falaOi(){
    console.log('Oie');
};
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();
function executaFuncao(função){
    console.log('Vou executar sua função abaixo:');
    função();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArow = () => {
    console.log('Sou uma arrow function.');
}
funcaoArow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando ...')
    }
}
obj.falar();