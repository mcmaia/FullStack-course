// In computer science and computer programming, a data type or simply type is an attribute of data which 
// tells the compiler or interpreter how the programmer intends to use the data. Most programming languages 
// support basic data types of integer numbers (of varying sizes), floating-point numbers (which approximate real
// numbers), characters and Booleans. A data type constrains the values that an expression, such as a 
// variable or a function, might take. This data type defines the operations that can be done on the data, the 
// meaning of the data, and the way values of that type can be stored. A data type provides a set of values from 
// which an expression (i.e. variable, function, etc.) may take its values.[1][2]

//string aspas duplas
let nome = "Marcelo";
console.log(nome);

//strings aspas simples
let sobrenome = 'Maia';
console.log(sobrenome);

//inteiro
let idade = 32;
console.log(idade);

//decimal
let altura = 1.77;
console.log(altura);

//boolleano -> true
let diaChuvoso = true;
console.log(diaChuvoso);

// NaN -> not a number - não é um valor (usado em equações)
let naoNumerico = NaN;
console.log(naoNumerico);

//Valores null -> numero é desconhecido
let jogadores = null;
console.log(jogadores);

//undefined -> ainda não foi definido
let espectadores = undefined;
espectadores = 10
console.log(espectadores);

//Objeto literal -> armazena diversas informações dentro de uma variavel
let moto ={
    marca: "Honda",
    ano: 2020,
    modelo: "CB500"
}

console.log(moto);

//ARRAYS -> lista com indices numericos
let series = ["Frinds", "HIMYM", "The Office"];
console.log(series);

// https://www.w3schools.com/JSREF/jsref_number.asp#:~:text=The%20Number()%20function%20converts,midnight%20January%201%2C%201970%20UTC.
var  positivo = Number("30");
var  negativo = Number("-50");
var  decimais = Number(15.69);
console.log(positivo)
console.log(negativo)
console.log(decimais)

// https://www.w3schools.com/JSREF/jsref_parseint.asp
// The parseInt() function parses a string and returns an integer
const teste = parseInt("Marcelo", 7);
console.log(teste);

const testeTeste = parseInt("200");
console.log(testeTeste);