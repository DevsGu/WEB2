/*5. Desafio — Situação dos alunos**

Crie um array chamado `situacoes` que contenha uma frase para cada aluno:

* Nota maior ou igual a 7: `"Ana foi aprovada"`
* Nota menor que 7: `"Bruno foi reprovado"`

Utilize `map()` e uma estrutura condicional dentro da callback. */

let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniel", nota: 6 },
    { nome: "Eduarda", nota: 7 }
];

let situacoes = alunos.map((sit) =>{
    if(sit.nota >= 7){
        return console.log(`Parabéns ${sit.nome}, Aprovado(a)`)
    }else{
        return console.log(`${sit.nome} Reprovado(a)`)
    }
})

