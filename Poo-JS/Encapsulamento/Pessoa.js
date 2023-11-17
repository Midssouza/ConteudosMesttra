 function Pessoa (nome, idade){
    // variaveis Privadas

    var nomePrivado = nome;
    var idadePrivada = idade;

    // metodo publico para obter o nome
    this.getNome = function ()  {
       return nomePrivado;
    };

    // metodo publico para definir a idade
    this.setIdade = function (novaIdade)  {
        idadePrivada = novaIdade;
    };

     // metodo publico para obter a idade
     this.getIdade = function ()  {
        return idadePrivada;
     };
 }

 var pessoa1 = new Pessoa ( "João" , 30);
 console.log(pessoa1.getNome()); // Acessar o nome  através do metodo
 pessoa1.setIdade(35); // Altera a  idade através do metodo
 console.log (pessoa1.getIdade()); // Acesso a idade atravé do metodo.