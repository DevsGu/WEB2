/*1. Fácil — Encontrar um produto**

Encontre o primeiro produto cujo nome seja `"Teclado"`. 
Exiba o objeto encontrado com `console.log()`.
*/

let produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 800 },
    { nome: "Headset", preco: 150 }
];


let procurarTeclado = produtos.find((tc) =>{
    return tc.nome === "Teclado"
})

console.log(procurarTeclado)