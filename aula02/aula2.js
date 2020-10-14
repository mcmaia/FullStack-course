//DESAFIO -> correr na lista

let organizacao = "Petshop Node";

console.log(organizacao);

console.log(" ")

// Lista de Pets - imprimindo a lista na tela -> user friendly
let pets = [
    "Fidel", "Lorena", "Stalin"
];

for (let i = 0; i < pets.length; i++) {
   console.log(pets[i]);
    
};
console.log(" ")

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets

let petsTres = [
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

console.log(" ")


// criando função para listar todos os objetos que temos dentro do array de pets, ou seja,
// o propósito dessa função é listar todos animais contidos dentro da lista de pets

function listarPets (){
    for (let i = 0; i < petsTres.length; i++) {
        console.log("nome: " + petsTres[i].nome);
        console.log("tipo: " + petsTres[i].tipo);
        console.log("raça: " + petsTres[i].raca);
        console.log("idade: " + petsTres[i].idade);
        console.log("gênero: " + petsTres[i].genero);
    }
};

// listarPets();

// criando função que será utilizada dentro da função cadastrarPet, esta função tem o propósito de 
// validar o objeto que estamos recebendo para certificar que iremos sempre passar um objeto válido
// para a função cadastrarPet
// MINHA OBS: criar uma função que irá cadastrar e add o elemento no array -> use push

function validaDados (novoPet){
    return (novoPet.nome && novoPet.tipo && novoPet.raca && novoPet.idade && novoPet.genero && novoPet.vacinado) //validando o objeto
};

// criando função de cadastrar um novo pet dentro da nossa lista de pets que nada mais é que a variável pets
// que é o nosso array de objetos, ou seja, essa função tem propósito de adicionar um objeto contendo todas
// as propriedades válidas (nome, tipo, raca, idade e genero) para que tenhamos um novo elemento/pet dentro 
// da nossa lista de pets
function cadastroPets (objetoPet){
    if(typeof objetoPet == "object"){
        if(validaDados(objetoPet)){
            petsTres.push(objetoPet)
            console.log(petsTres)
    }else{
        console.log("Insira um objeto válido");
     }
    }else{
        console.log("Insira um objeto válido")
    }
    
};

// objeto criado apenas para ser passado como parâmetro dentro da chamada da função cadastrarPet 
let objPet = {
    nome: 'Lorena',
    tipo: 'Cachorra',
    raca: 'Golden',
    idade: 9,
    genero: 'Fêmea'
  };

  let objPetDois = {
    nome: 'Fidel',
    tipo: 'Cão',
    raca: 'Shitsu',
    idade: 1.5,
    genero: 'Macho'
    
  };

// essas chamadas as funções abaixo servem para executarmos as mesmas

// cadastroPets(objPet)
// cadastroPets(objPetDois)
// listarPets()


  //Para casa
  //-> verificar animais vacinados - criar função

  //banho 
  // const banho = () => console.log(" está omando banho");
  function banho (petsTres){
    petsTres.servicos.push("banho")
    console.log("o pet " + petsTres.nome + " tomou banho")
  };

  function tosa (petsTres){
    petsTres.servicos.push("tosa")
    console.log("o pet " + petsTres.nome + " tosou")
  };

  function servico (petsTres, servicoContratado) {
      servicoContratado(petsTres)
      
  };

  servico(petsTres[0], tosa);
  servico(petsTres[0], banho);
  // console.log(banho());
  // console.log(tosa());