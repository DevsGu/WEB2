/*3. Médio — Dados dos alunos**

Usando o array `alunos`, 
crie um novo array chamado `nomesMaiusculos` 
contendo os nomes de todos os alunos em letras maiúsculas.

Dica: pesquise ou utilize o método `toUpperCase()`*/


let alunos = [
    "gustavo" , "jamile" , "bruno"
]

let aluno = alunos.map((nome) =>{
    return nome.toUpperCase();
})



console.log(aluno)