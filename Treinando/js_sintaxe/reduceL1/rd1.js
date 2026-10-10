/*1. Fácil — Soma dos preços**
Usando o array `produtos`, calcule a soma dos preços de todos os produtos.
Resultado esperado: `1300` */

let produtos = [
    { nome: "Mouse", preco: 50, estoque: 10 },
    { nome: "Teclado", preco: 100, estoque: 5 },
    { nome: "Monitor", preco: 800, estoque: 3 },
    { nome: "Headset", preco: 150, estoque: 8 },
    { nome: "Webcam", preco: 200, estoque: 0 }
];

let soma  = produtos.reduce((acumulador , num) =>{
    return acumulador + num.preco;
} , 0)


console.log(soma)