
// Classe Pai
class Veiculo {
    constructor(marca, ano, modelo) {
      this.marca = marca;
      this.ano = ano;
      this.modelo = modelo;
    }
  
    andar() {
      console.log(`O veiculo  de marca  ${this.marca} ele anda.`);
    }
    buzinar(){

    }
  }

  // classes filhas
  class Carro extends Veiculo{
    // conteudo  da classe Cachorro
    constructor(marca, ano) {
        super( marca, `2019`); //Chama o contrutor da classe pai
        this.marca = marca;
    }

  andar(){
    super.andar();
    }
   
    velocidade (){
      
  }
  }

  const carro = new  Carro (`Celta`,`2019`);

  rex.som(); // herdado  do  Animal ( classe PAI): o cachorro Rex faz um som.
  rex.late();// Método especifico do Cachorro( Classe Filha): Rex é um animal do tipo cachorro e emiti o soom latir.


  class Gato extends Animal{
    // conteudo  da classe Gato
  }

  class Urso extends Animal{
    // conteudo  da classe Urso
  }