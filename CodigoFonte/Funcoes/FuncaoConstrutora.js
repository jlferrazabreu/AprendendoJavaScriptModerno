// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados
    const Id = 12345;
    const metodoInterno = function(){

    };

    // Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Jorge', 'Abreu');
const p2 = new Pessoa('Luana', 'Rocha');

console.log(p1.nome);
p1.metodo();