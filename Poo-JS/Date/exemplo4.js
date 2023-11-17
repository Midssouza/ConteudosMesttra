//Intl: API do JS , faz suportar internacionalização do código
//Objeto Intl.DateTimeFormart: é usado para formatar datas, e horas de acordo com as preferecias do usuário.
//navigator.language: retorna o idioma preferido do navegador
//navigator.timezone: retorna o fuso horario do navedor usuario

const data = new Date();

//Formatar a data de acordo com o idioma 

const formatoData = new Intl.DateTimeFormat(navigator.language);
const dataFormata = formatoData.format(data);
const language = `pt-BR`;
console.log(dataFormata);