// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


let string = "String a ser invertida"

let inv = [];
string.split('').forEach(letra => {
    inv.unshift(letra);    
})

string = inv.join('');

console.log(string);
