/*10. Crie:
let notas = [7, 8, 5, 9, 6];
O programa deve:
1. Mostrar todas as notas;
2. Calcular a soma das notas;
3. Calcular a média;
4. Informar se o aluno foi aprovado ou reprovado.

Considere:
Média >= 7 → Aprovado
Média < 7 → Reprovado

Saída esperada:
Notas: 7, 8, 5, 9, 6
Soma: 35
Média: 7
Aprovado
*/

//Questão simples e Bacana para a pratica - Gostei
let notas = [7, 8, 5, 9, 6];
let soma = 0
let media = 0

for(let nota  of notas){
    console.log("Notas : "+ nota);
    soma += nota;
}

media = soma/5

console.log("Soma: " + soma);
console.log("Média :" + media)

if(media >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}



