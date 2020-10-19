//array - coleção de dadods ordenados

let pessoa = ['Marcelo', 32, 'Caetano', 03, 'Sarah', 29];


//metodos array
    // push() - add elementos na array

    console.log(pessoa.push("Chico", 0));
    console.log(pessoa);

    //pop() - retira o ultimo elemento do array e retorna seu resultado. 
        // Caso precisemos desse resultado, seria bom armazená-la em uma variavel qualquer.
    let sacarOUltimo = pessoa.pop();
    console.log(sacarOUltimo);
    console.log(pessoa);

    //shift - remove o elemento do array no indice 0 
    console.log(pessoa.shift())

    //unshift - adiciona um elemento do array no indice 0
    console.log(pessoa.unshift("Zé Bolinha"));
    console.log(pessoa);

    //indexOf - retorna o index de um elemento  
    //lastIndexOf - retorna o index de um elemento, porém fazendo a perquisa a partir do último elemento.
    let pessoas = ['Sarah', 'Marcelo', 32, 'Caetano', 03, 'Sarah', 29];
    console.log(pessoas.lastIndexOf("Sarah"));
    console.log(pessoas.indexOf("Sarah"));

    //join() - unificar todos os elementos do array em uma string
    console.log(pessoa.join(" - "));
    console.log(pessoa.join());


//Ex 1 

let alunos = ["João", "Pedro", "Jorge", "Francisco"]

let indiceJoao = alunos.indexOf('João');
let indiceFrancisco = alunos.indexOf('Francisco');

console.log(indiceJoao);
console.log(indiceFrancisco);


//EX 2 

let arrayFrase = [
    "Não",
    "fracassei,",
    "simplesmente",
    "encontrei",
    "dez",
    "mil",
    "soluções",
    "equivocadas"
];

let fraseNova = arrayFrase.join(" ");

console.log(fraseNova);



//Ex 3

let estudantes = [
    {
      nome: "Álvaro",
      media: 9,
      curso: "Android"
    },
    {
      nome: "Daniel",
      media: 6,
      curso: "Full Stack"
    },
    {
      nome: "Alexis",
      media: 3,
      curso: "iOS"
    }
  ];

  let alunoFormado = estudantes.pop();

  console.log(alunoFormado);

  //Ex 4 - push()

  console.log(estudantes.push({
    nome: 'João',
    media: 5,
    curso: 'IOS'
  }));

  console.log(estudantes.push({
    nome: 'Miguel',
    media: 2,
    curso: 'Android'
  }));

  console.log(estudantes);

//Ex 5 - shift

let alunoDesistente = estudantes.shift();

//Ex 6 - unshift

let reintegrados = estudantes.unshift({
    nome: "Mariana",
    media: 9,
    curso: "Full Stack"
  },
  {
    nome: "Francisco",
    media: 2,
    curso: "Android"
  }
  );

console.log(estudantes);  
