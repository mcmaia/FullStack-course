//objeto date

let dataAtual = new Date();

console.log(dataAtual);

//getDay();
//getDate();
//getMonth();
//getFullYear();

console.log(dataAtual.getDay()); //retorna o indice do dia da semana, sendo domingo = 0, segunda = 1...
console.log(dataAtual.getDate());//retorna o dia da data corrente
console.log(dataAtual.getMonth());//Janeiro = 0 - Dezembro = 11
console.log(dataAtual.getFullYear());


//criando uma data especifica

const meuNiver = new Date(1987,11,13);

console.log(meuNiver.getDay());
console.log(meuNiver.getMonth() + 1);//Janeiro = 0 - Dezembro = 11
console.log(meuNiver.getFullYear());
console.log(meuNiver.getDate());

//Ex 1:

let data = new Date();

data.setDate(13);
data.setMonth(11);
data.setYear(1987);

console.log(data);


