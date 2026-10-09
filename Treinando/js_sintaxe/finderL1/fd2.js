/*2. Fácil — Encontrar um aluno**

Encontre o aluno chamado `"Carlos"` e mostre sua nota.*/  
let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniel", nota: 6 },
    { nome: "Eduarda", nota: 7 }
];


let encontrarAluno = alunos.find((ea) =>{
    return ea.nome === "Carlos"
})

console.log(encontrarAluno)