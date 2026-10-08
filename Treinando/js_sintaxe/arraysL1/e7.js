/*7. Crie:
let numeros = [5, 10, 15, 20, 25];

Faça um programa que mostre cada número separadamente:

5
10
15
20
25*/

let numeros = [5, 10, 15, 20, 25];
//FOR ....OF
for(let num of numeros){
    console.log(num)
}
//FOR EACH + ARROW FUNCTION -> ADICIONANDO MAIS 5 A CADA NÚMERO
numeros.forEach((num)=>{
    num = Number(num)
    console.log(num+5)
})

