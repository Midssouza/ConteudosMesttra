//Declarando uma Classe-Para declarar uma classe em JavaScript, você utiliza a palavra-chave class,
// seguida pelo nome da classe. Aqui está um exemplo de como declarar uma classe chamada Pessoa:

    class Pessoa
    {
// Construtores e Propriedades:O construtor é um método especial dentro de uma classe que é 
//chamado quando um objeto da classe é instanciado. É usado para inicializar as propriedades 
//do objeto. No exemplo abaixo, a classe Pessoa tem um construtor que aceita dois parâmetros, 
//nome e idade, que são usados para inicializar as propriedades nome e idade do objeto:

        constructor(nome, idade) 
        {
          this.nome = nome;
          this.idade = idade;
  
        }

//Métodos de Classe:Métodos de classe são funções definidas dentro da classe.
// Eles descrevem o comportamento dos objetos dessa classe. 
//No exemplo abaixo, a classe Pessoa possui um método de classe chamado saudacao:

        saudacao() 
        {
            console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
        }


    }   
      
  
  