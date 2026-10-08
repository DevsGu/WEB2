/*8. Crie:
let numeros = [10, 20, 30, 40, 50];

Faça um programa que calcule a soma de todos os números.

Resultado:
Soma: 150*/

let numeros = [10, 20, 30, 40, 50];
let soma = 0;

// Criou uma variavel globl , capturou a somatoria dos numeros , valores da funcao morre
// mas a função capturada não


for(let num of numeros){
    soma += num;
}

console.log(soma)