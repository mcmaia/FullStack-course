//map -> executado sob um determinado array e recebe um callback de retorno.

let numero = [1,2,3,4];

let dobroNumeros = numero.map(function(umNumero){
    return umNumero*2
});

console.log(dobroNumeros);

//filter - filtrar os elementos do nosso array - retornam uma array nova com os parametros definidos
//importante o parametro retornar um valor booleano

let idades = [15,39,18,23,10]

let dimaior = idades.filter(function(umaIdade){
    return umaIdade >= 18;
});

console.log(dimaior);

//reduce(); reduzir o array fornecido a um único valor.

let numerosz = [5,7,16];

let resultado = numerosz.reduce(function(acumulador, umNumero){
    return acumulador + umNumero
});

console.log(resultado);

//forEach(); - iterar sob um array
let paises =["Argentina","Brasil","Colombia"];

paises.forEach(function(umPais, index){
    console.log(index + ". " + umPais);
});

let numerosPares = [2,4,6,8,10];

//Ex 1 

let numeros = [12, 34, 22, 16, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function(numMaiores){
    return numMaiores >= 18;
});

console.log(maiores);





