//A calculator - using callback - to use in our business.

function calculator(number1, number2, operation){
    operation(number1,  number2);
};


function sum(number1, number2){
    console.log(number1 + number2);
};


function subtraction(number1, number2){
    console.log(number1 - number2);
};


function multiplication(number1, number2){
    console.log(number1 * number2);
};


function division(number1, number2){
    console.log(number1 - number2);
};

calculator(10, 5, sum);