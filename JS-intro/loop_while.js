//while - while só tem condição
// var contador = 0;

// // while (contador < 5){
// //     console.log("looping");
// //     contador++;

// // };

// // do while

// do {
//     console.log("looping");
//     contador++;

// }while(contador < 5);

// Vamos montar uma função que conta de um número para outro.

// Para este exercício, fornecemos a função de contagem já declarada. Esta função receberá dois parâmetros numéricos. Queremos que a função vá do primeiro parâmetro para o segundo e imprima o texto pelo console "O número atual é__ e é menor que__".[
// Por exemplo, se passarmos os números 4 e 6, veremos algo assim:

// "O número atual é 4 e é menor que 6"
// "O número atual é 5 e é menor que 6

// function count(inicio, fim) {
       
//     while (inicio < fim){
//         console.log("O número atual é " + inicio + " é menor que " + fim);
//         inicio++;
//     };
// };

// count(4, 6);

// Queremos construir uma função que receba um array de números como parâmetro. A função deve passar por esse array e imprimir cada um dos números pelo console. Se você encontrar um 5, deverá parar a execução e imprimir com console o texto "Encontramos um 5!".

// function encontramosONumCinco (...array){
//     let contador = 0
//     do{
//         for (let i = 0; i < array.length; i++) {
//             array[contador]
//             contador++;

//     }}while(array != 5){
//             console.log("Achamos um 5!")
            
//         };
//     };

//     console.log(encontramosONumCinco(4, 2, 5, 6));

function tabelaDeMultiplicacao(numero) {
    
    let i = 1;
    
    while (i <= 10){
        console.log(numero + " x " + i + " = " + (numero*i)); 
        i++
    }
};

tabelaDeMultiplicacao(5);