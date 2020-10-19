//JSON -> JavaScript  Object Notation

let pessoa = {
    nome: "Marcelo",
    idade: 32,
    altura: 1.77

}

let json = JSON.stringify(pessoa); //transforma um objeto em string
let voltaArray = JSON.parse(json); //transforma uma string em objeto

console.log(voltaArray);