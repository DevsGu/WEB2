/*5. Crie um Array contendo 3 objetos de alunos.
Cada aluno deve possuir:
- nome
- idade
- nota

Depois percorra o Array e mostre o nome e a nota de cada aluno.
*/

let alunos = [
    aluno = {
        nome : "Gu",
        idade : 28,
        nota : 10
    } , 
     {
        nome : "Edu",
        idade : 50,
        nota : 5
    } , 
     {
        nome : "Du",
        idade : 32,
        nota : 6
    }
]

for(let i = 0 ; i < alunos.length ; i++){
    console.log("Nome :" + alunos[i].nome)
    console.log("Nota :" + alunos[i].nota)
}