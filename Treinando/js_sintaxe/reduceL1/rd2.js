/*2. Fácil — Soma das notas**
Usando o array `alunos`, calcule a soma de todas as notas.*/ 


let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniel", nota: 6 },
    { nome: "Eduarda", nota: 7 }
];


let soma = alunos.reduce((acumulador , num)=>{
    return acumulador + num.nota;
} , 0);


console.log(soma)