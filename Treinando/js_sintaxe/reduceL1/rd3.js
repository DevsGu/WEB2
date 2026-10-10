/*3. Médio — Valor total do estoque**
Calcule o valor total do estoque de todos os produtos.
Para cada produto, multiplique o preço pela quantidade disponível:
`preco * estoque`
Depois, some os valores de todos os produtos.*/

let produtos = [
    { nome: "Mouse", preco: 50, estoque: 10 },
    { nome: "Teclado", preco: 100, estoque: 5 },
    { nome: "Monitor", preco: 800, estoque: 3 },
    { nome: "Headset", preco: 150, estoque: 8 },
    { nome: "Webcam", preco: 200, estoque: 0 }
];


let total = produtos.reduce((acumulador , num)=>{
    return acumulador + (num.preco * num.estoque)
} , 0)

console.log(total)