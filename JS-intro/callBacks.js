//callBack
const somatorio = (numA, numB) => numA + numB;

const calculator = (numA, numB, operacao) => operacao(numA, numB);

console.log(calculator(10 ,20, somatorio)); //usando função criada
console.log(calculator(10 ,20, (numA, numB) => numA - numB));//usando função anonima


//exercicio

const dobros = umNum => umNum*2;
const triplos = umNum => umNum*3;

const aplicares = (umNum, umaOperacao) => umaOperacao(umNum);
console.log(aplicares(5, dobros));
console.log(aplicares(5, triplos));

//outra opção - com a função reservada function

function dobro (umNumA){
    return umNumA*2;
};

function triplo (umNumB){
    return umNumB*3;
};

function aplicar (umNum, umaOperacao){
    return umaOperacao(umNum);
};

console.log(aplicar(2, triplo));

//ex2

function somar (umNumA, umNumB){
    return umNumA + umNumB;
};

function subtrair (umNumA, umNumB){
    return umNumA - umNumB;
};

function multiplicar (umNumA, umNumB){
    return umNumA * umNumB;
};

function dividir (umNumA, umNumB){
    return umNumA / umNumB;
};

function calculadora (umNumA, umNumB, umaOperacaoCaculator){
    return umaOperacaoCaculator(umNumA, umNumB);
};

console.log(calculadora(2, 2, somar));

//ex3

function adicionarHttp(url) {
    return "http://" + url;
};

urlLista = []
function processar(urlLista, adicionarHttp){
    
    for (let i = 0; i < urlLista.length; i++) {
       adicionarHttp(urlLista);
    };
};

let listinhaSites = ["9gag.com", "galo.com.br", "dh.com"];
processar(listinhaSites, adicionarHttp);