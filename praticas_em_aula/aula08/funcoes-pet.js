const listarPets = () => {
    pets.forEach((pet) => {
      console.log("Nome: " + pet.nome);
      console.log("Tipo: " + pet.tipo);
    })
  } 

  module.exports = {
      listarPets
  };

  // criando função que será utilizada dentro da função cadastrarPet, esta função tem o propósito de 
// validar o objeto que estamos recebendo para certificar que iremos sempre passar um objeto válido
// para a função cadastrarPet
const validaDados = (novoPet) => {
    return (
      // novoPet.id &&
      novoPet.nome && 
      novoPet.tipo &&
      novoPet.raca &&
      novoPet.idade &&
      novoPet.genero &&
      // validando se o tipo da propriedade vacinado e booleano ou nao atraves do typeof 
      typeof novoPet.vacinado == "boolean"
    )
  };


