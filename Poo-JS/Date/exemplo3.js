//Conversão String -> Date

//const dateString = `2023-11-10`; // String no formato AAA-mm-dd
const dataObject = new Date(dateString);
console.log(dateObject);// imprime a data do no console 

// Date -> String 

//const dateObject = new Date;// Obtem data e hora atUal 
const year = dateObject.getFullYear(); // Obtem o ano 
const month = dateObject.getMonth() + 1 ; //Obtem o mes
const day = dateObject.getDate(); // Obtem o dia

const dateString = `${year}-${month}-${day}`;
console.log(dateString); // Imprimir a data formatada String 

// transformando a localização

const dateObject = new Date();
const options = {year: `numeric` , month: `2-digit`, day:`2digit`};
const dateFormatter = new Intl.DateTimeFormat(`pt-BR`, options);
const formattedDate = dateFormatter.format(dateObject);
console.log (formattedDate); // Imprimir a data formatada  no console 
