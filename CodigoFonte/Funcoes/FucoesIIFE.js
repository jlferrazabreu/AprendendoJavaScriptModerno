// Immediately invoke function expression
(function(idade, peso, altura){
    const sobreNome = 'Abreu';
    function criaNome(nome){
        return nome + ' ' + sobreNome;
    }

    function falaNome(){
        console.log(criaNome('Jorge'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(42, 90, 1.82);