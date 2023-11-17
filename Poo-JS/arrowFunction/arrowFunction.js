// Sintaxe curtas
//Valor `this`fix

//Função básica
function add (a, b){
    return a + b;
}

// Função arrow 
const add = (a, b) => a + b;

// Utilizando Arrow em map

const numbers = [1,2,3,4,5];
const double = numbers.map((num) => num * 2);

// utilizando   Função Callback setTimeout
function greet(){
    console.log(`Olá Mundo !!`);
}
    setTimeout(greet, 1000); // greet é uma funçãp de callback 

// utizando Arrow Function em addEventLinistener
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Botão clicado');
});