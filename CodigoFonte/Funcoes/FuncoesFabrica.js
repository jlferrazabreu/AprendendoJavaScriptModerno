function criaPessoa(nome, sobreNome, altura, peso){
    return {
        nome,
        sobreNome,
        altura,
        peso,

        // Getter
        get nomeCompleto(){
            return '${this.nome} ${this.sobreNome}';
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobreNome = valor.join(' ');
        },

        fala(assunto){
            return '${this.nome} está ${assunto}.';
        },
        get imc(){
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Jorge', 'Abreu', 1.82, 82.5);
const p2 = criaPessoa('Luana', 'Silva', 1.75, 120);
const p3 = criaPessoa('Lara', 'Abreu', 1.10, 25);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);