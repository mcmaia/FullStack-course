//typeOf - mostra o tipo do dado
let text = "abc";
let numero = 2;

console.log(typeof(text));
console.log(typeof(numero));

//parseInt - converte string em numero. Caso a string tenha texto e numero, o parseInt trará só numero
//na no caso do Number(), o retorno será NaN
let textTwo = "20abc";
let numeroDois = (parseInt(textTwo));
let numeroTres = (Number(textTwo));

console.log(numeroTres);
console.log(numeroDois);
console.log(typeof(numeroDois));
console.log(typeof(numeroTres));


//String converte numero em string
let numeroQuatro = 111;
let textoThree = String(numeroQuatro); //toString faz a mesma coisa, com uma sentaxe diferente. Ness caso seria: let textoThree = numeroQuatro.toString

console.log(textoThree);
console.log(typeof(textoThree));

//exercicos parquinho
var substituicao = 2 -3;

console.log(typeof(substituicao))

var resultadoConversao = parseFloat('12')
console.log(resultadoConversao)

var resultadoConversaoDois = Number(true)
console.log(resultadoConversaoDois)

var resultadoConversaoTres = String(true)
console.log(resultadoConversaoTres)
console.log(typeof(resultadoConversaoTres))



