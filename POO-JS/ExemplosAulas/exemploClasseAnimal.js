class Animal {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
    }
  
    som() {
      console.log(`O ${this.tipo} chamado ${this.nome} faz um som.`);
    }
  }
  
  // Criando objetos da classe Animal
  const cachorro = new Animal('Rex', 'cachorro');
  const gato = new Animal('Whiskers', 'gato');
  
  // Chamando o método som
  cachorro.som(); // Saída: O cachorro chamado Rex faz um som.
  gato.som(); // Saída: O gato chamado Whiskers faz um som.
  