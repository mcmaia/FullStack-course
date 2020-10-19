// função expressa é tratada como uma variavel
// função declarada não é armazenada em uma variavel
// Escopo -> é o alcance que tem uma variavel 
    // escopo local
        //variavel declarada dentro da função - e só existe dentro da função
    //escopo global
        // variaveis declaradas fora das funções, podendo ser conhecida em qualquer parte do código
//O que vai dentro do parenteses é parâmetro.

function dobro(umNumero){
    return umNumero*2;
    
}

console.log(dobro(2));


function somar(a, b){
    return a + b;
}

let resultadoSoma = somar(10, 45);
console.log(resultadoSoma);


function ePar(umNumero){
    return umNumero % 2 == 0
} // o resto da divisão de um numero por dois deve ser igual a zero

let resultadoePar = ePar(10);
console.log(resultadoePar);

// Escreva as três funções a seguir:
// anterior: recebe um número como parâmetro e retorna esse número menos um.
// triplo: recibe um número como parâmetro e devolve o triplo desse número.
// anteriorDoTriplo: receba um número como parâmetro e, usando as duas funções anteriores, você terá que retornar o número. recebido multiplicado por 3 (três) e o resultado subtrai 1 (um).
// Esclarecimento: Este exercício traz sua complexidade, é normal levar algum tempo para chegar à solução.

function anterior(umNum){
    return umNum - 1 ;
};

function triplo (umNumTriplo){
    return  umNumTriplo * 3;
};

function anteriorDoTriplo(umNumAnteriorDoTriplo){
    var totalTriplo = triplo(umNumAnteriorDoTriplo)
    return anterior(totalTriplo);
};



