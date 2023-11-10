// declarar classe 

class Pessoa {
    // conteudo da classe pessoa
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;

    }

    saudacao(){
        console.log(`Olá, nome é ${this.nome} e eu tenho ${this.idade}`)
    }
}