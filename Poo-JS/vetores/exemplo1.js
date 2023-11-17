//vetores  
// map: Transforma cada elemento do vetor aplicando uma função a ele. Ótimo para realizar operações em cada item

//const numbers = [ 1,2,3,4,5];

//filter: Retorna um novo vetor contendo apenas os elementos que atendem a uma condição especificada. Útil para filtrar dados

//


const numbers = [2, 4, 7, 8, 10];
const firstOddNumber = numbers.find(num => num % 2 !== 0);
console.log(firstOddNumber);
// Saída esperada: 7