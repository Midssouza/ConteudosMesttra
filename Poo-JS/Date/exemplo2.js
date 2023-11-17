// cria um objeto

const dataEspecifica = new Date(`2023-11-10 T10:00:00:00`);
console.log(dataEspecifica);

//obtendo o mês, dia e ano de uma data 

//const data = new Date();
const mes = data.getMonth(); // Mês atual (0 a 11)
const dia = data.getDate(); //Dia do mês atual
const ano = new data.getFullYear(); // Ano atual  com 4 digitos 

console.log(`Mês : ${mes}, Dia ${dia}, Ano: ${ano}`);//Mês : 11, Dia 10, Ano: 2023`);

// adicionando ou subitraindo

//const data = new Date ();
data.setDate(data.getDate() - 7); // adicionando 7 dias a data atual 
console.log(data);

// formar uma data em string legivel

const data = new Date();
const opcoes = { year: `numeric `, month:`long `, day:`numeric`};
const dataFormatada = data.toLocaleDateString(`pt-BR` , opcoes);
conosole.log(dataFormatada); // 10 de novemdro de 2023.
//toLocale