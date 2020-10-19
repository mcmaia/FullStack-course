//uma função dentro da outra

function saudacao (nome){
    let menssgem = "olá, seja bem vindo";

    function juntarNome(){
        return menssgem + ' ' + nome;
    }
    return juntarNome();
};

console.log(saudacao("Marcelo"));