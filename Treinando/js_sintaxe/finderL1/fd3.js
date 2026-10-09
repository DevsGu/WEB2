/*3. Médio — Produto por preço**

Encontre o primeiro produto cujo preço seja maior que R$ 150.
 Exiba seu nome e preço.*/  

 let produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 800 },
    { nome: "Headset", preco: 150 }
];

let procProd = produtos.find((pp) =>{
    return pp.preco > 150;
});

console.log(procProd)