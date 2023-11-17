const dataInicial = new Date(`2023-11-13 19:37:23` );
const dataFinal = new Date(`2023-11-15 20:00:0`);

//calculandoa diferença em milesimos de segundo 
 const diferencaEmMilisegundos = dataFinal - dataInicial;

// Converter a diferença para dias, horas, minutos e segundos 
const diferencaEmDias = Math.floor(diferencaEmMilisegundos / (1000*60*60*24));
const diferencaEmHoras = Math.floor(diferencaEmMilisegundos / (1000*60*60*24)/ (1000*60*60));
const diferencaEmMinutos = Math.floor(diferencaEmMilisegundos / (1000*60*60) /(1000*60));
const diferencaEmSegundos = Math.floor(diferencaEmMilisegundos / (1000*60)/1000);

console.log(`Diferença: ${diferencaEmDias} dias, ${diferencaEmHoras} horas, ${diferencaEmMinutos} minutos e ${diferencaEmSegundos} `)