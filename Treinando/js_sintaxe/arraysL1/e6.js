/*
6. Crie:
let alunos = ["Ana", "Bruno", "Carlos", "Daniel", "Eduardo"];

Mostre no console:
Quantidade de alunos: 5

Não conte manualmente. Use uma propriedade do Array.
 */

//Percorrendo uma lista de Array Tradicional

let alunos = ["Ana", "Bruno", "Carlos", "Daniel", "Eduardo"];
//Aqui percorrremos o índice
for(let i = 0 ; i < alunos.length ;  i++){
    console.log(alunos[i])
}

//aqui percorremos os proprios valores da lista (FOR .. OF)
for(let aluno of alunos){
    console.log(aluno)
}

//FOREACH com ARROW FUNCTION
// Para cada aluno execute a arrow function -- CALLBACK

alunos.forEach((aluno) => {
    console.log("Bom dia "+ aluno)
})