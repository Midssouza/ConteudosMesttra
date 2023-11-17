//adição e subtração de dias,horas, minutos e segundos 

//Criando uma data
const data = new Date(`2023-11-13 19:00:00:00`);

//adicionando dias 
data.setDate(data.getDate( )+ 5 );

//Subtraindo horas

data.setHours(data.getHours() - 2); 

// adicionar minutos 
data.setMinutes(data.getMinutes () + 30);

//subitraindo segundos 
data.setSeconds(data.getSeconds() -15);

console.log(data);

