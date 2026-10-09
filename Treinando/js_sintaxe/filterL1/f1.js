/*## FILTER() — 5 exercícios
**1. Fácil — Produtos caros**

Crie um array chamado `produtosCaros`
 contendo apenas os produtos cujo preço seja maior que R$ 150.*/
/*
let produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 800 },
    { nome: "Headset", preco: 150 }
];
*/


/*
Questão 01
let produtosCaros = produtos.filter((ret) =>{
    return ret.preco > 150;
})

console.log(produtosCaros)
*/

/***2. Fácil — Alunos aprovados**
Crie um array chamado `aprovados` contendo apenas os alunos com nota maior ou igual a 7.*/
/*
let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniel", nota: 6 },
    { nome: "Eduarda", nota: 7 }
];
*/
/*
let aprovados = alunos.filter((ap) => {
    return ap.nota >= 7;
});

console.log(aprovados);
*/

/*
**3. Médio — Estoque disponível**

Crie um array chamado `produtosDisponiveis` contendo apenas os produtos
 com estoque maior que zero.*/

/*
let produtosDisponiveis = produtos.filter((pd) =>{
    return pd.estoque > 0;
});

console.log(produtosDisponiveis)
*/
/*
**4. Médio — Produtos de uma faixa de preço**

Crie um array chamado `produtosFaixa` contendo os produtos com preço entre 
R$ 100 e R$ 200, incluindo os dois limites.
*/


/*
let faixa = produtos.filter((fx) =>{
    return fx.preco > 100 && fx.preco <200;
})


console.log(faixa)*/

/*
**5. Desafio — Alunos com notas específicas**

Crie um array chamado `alunosDestaque` contendo apenas os alunos 
com nota maior ou igual a 8. Depois, exiba os nomes dos alunos encontrados.
Utilize `filter()` para selecionar os 
alunos e outro método ou estrutura de repetição para exibir seus nomes.
*/


let alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniel", nota: 6 },
    { nome: "Eduarda", nota: 7 }
];


let alunoDestaque = alunos.filter((dtq) =>{
    return dtq.nota >= 8;
});


let aluno = alunos.filter((al) =>{
    return al.nome;
})

console.log(alunoDestaque)
console.log(aluno)