function Carro (marca, modelo, ano){
    var marcaPrivada = marca;
    var modeloPrivado = modelo;
    var anoPrivado = ano;
    var valorPrivado = valor;
    

    this.getMarca = function() {
        return marcaPrivada;
    }

    this.getModelo = function() {
        return modeloPrivado;
    }

    this.getAno = function() {
        return anoPrivado;
    }

    this.getValor = function() {
        return valorPrivado;
    }
}

// Instaciando objeto Carro

var meuCarro = new Carro ("Toyta", "Corola", 2022, 23000);


// acessando os dados encapsulados 

console.log(" Marca : " + meuCarro.getMarca());
console.log(" Modelo: " + meuCarro.getModelo());
console.log(" Ano: " + meuCarro.getAno());
console.log(" Valor: " + meuCarro.getValor());