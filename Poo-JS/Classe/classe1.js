class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo; 
    }

    // METODO = AÇÃO 
    som (){
        console.log(`O ${this.tipo} chamado ${this.nome} faz um som.`);
    }
}
// CRIANDO OBJETO DA CLASSE ANIMAL 

const cachorro = new Animal (`Rex`, `cachorro`);
const  gato = new Animal (`Whiskers`, `gato`);
const urso = new  Animal (`Polar`, `urso`);

//CHAMANDO MÉTODO SOM ,
cachorro.som(); // Saída : o cachorro chamado Rex faz um som.
gato.som();// Saída : o gato chamado Whiskers faz um som. 
urso.som();// Saída : o urso chamado Polar  faz um som. 
