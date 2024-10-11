// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let value1 = 0;
let value2 = 1;
const list = [0,1];


function fibonacciVerifier (input){
    let newValue = value1 + value2;

    while(input >= newValue){
        list.push(newValue)
        value1 = value2;
        value2 = newValue;
        newValue = value1 + value2;
    }
    if (list.includes(input)){
         console.log('o imput faz parte da Sequência de Fibonacci');
    } else {
        console.log('o imput não faz parte da Sequência de Fibonacci');
    }
}

fibonacciVerifier(34);
fibonacciVerifier(35);