const json = require('./json');
 

let pets = [
    {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos:[]
  },
  

  {
    nome: 'Pituco',
    tipo: 'Passaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos:[]
  }
];

//desafio - aula3

function cadastrarPetsDoJson(lista, json){
  let arrayPets = JSON.parse(json)//parse transforma uma string em um objeto valido
for (let index = 0; index < arrayPets.length; index++) {
    lista.push(arrayPets[index]);
    
}
return lista
}

console.log(cadastrarPetsDoJson(pets, json));

// Desafio - Vocês devem criar uma função com três parâmetros, onde, o primeiro será a frase completa (string), o segundo será a palavra alvo que será substituída (string) e o terceiro a palavra que irá substituir a palavra alvo (string).
// Exemplo:  iremos passar uma frase para nossa função e terão que alterar uma 
// determinada palavra (VBA) por outra (JS), a idéia é que façam com arrow function,
// terá que ser resolvido em apenas uma linha e com return implícito, ou seja,
// sem utilizar a palavra return dentro da função.
// frase = "Gosto muito de programar em VBA."