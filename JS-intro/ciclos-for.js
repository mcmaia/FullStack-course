// for (valor inicial do contador; condição; modificação) {
//     //código que executará em cada repetição
    
// }


function papagaio (repeteCincoVezes){

    for (let i = 0; i <= 4; i++){
        console.log(repeteCincoVezes)
    };
};

papagaio("agora vai, porra!");

// Nesse exercício precisa fazer dentro da função naoPareDeContarImparesAte um for que conte de 0 até um número. A função deverá retornar a quantidade de números impares que foram encontrados até chegar ao número.

function naoPareDeContarImparesAte(numero){
    let contador = 0
    for (let i = 0; i <= numero; i++){
        if (i % 2 !== 0) {
            contador++      
        };
    
    };
    return contador;
};

console.log(naoPareDeContarImparesAte(100));
