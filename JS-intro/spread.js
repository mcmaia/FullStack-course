//... -> operador do spread

let frutas = ["maçã", "banana", "uva"];
let frutasDois = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas,...frutasDois];

console.log(listaCompleta);

let pessoa = {

    nome: "Marcelo",
    idade: 32,
};

let infoPessoal = {

    ...pessoa,
    tel: "34985288",
    rg:"13796254",
    
}

console.log(infoPessoal);

//spread com function
function letras(...paramns){
    console.log(paramns)
}

letras("a", "b")