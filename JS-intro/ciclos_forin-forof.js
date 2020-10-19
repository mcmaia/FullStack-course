//for in - itera sob objetos literais -> uso apenas com objetos

let pessoa = {
    nome: "Marcelo",
    idade: 32,
    profissão: "programador"
};

for(let caracteristica in pessoa) {
    console.log(pessoa[caracteristica]); //aqui você iterou as caracteristicas no objeto pessoa.
    //console.log(caracteristica); -> caso você faça dessa forma, o que retornará são os types do objeto.
};

let carro = {
    nome: "celta",
    ano: "2010"
};

for(let prop in carro){
    console.log(carro[prop]);
}

//for of -> uso com strings e matrizes

let series = ["HIMYM", "The office", "cobra-kai"];

for(let i of series){
    console.log(i);
};

//Ex 1

let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
};

for(let i in bart){
    console.log(bart[i]);
};

let frase = "Essa semana vou no colearning";

for(i of frase){
    console.log(i);
};

