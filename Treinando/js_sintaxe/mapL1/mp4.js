/*4. Médio — Descrições dos produtos

Crie um array chamado `descricoes` em que cada elemento seja uma frase no formato:

`"Mouse custa R$ 50"`

Utilize template literals (crases e `${}`).*/

let produtos = [
    { nome: "Mouse", preco: 50, estoque: 10 },
    { nome: "Teclado", preco: 100, estoque: 5 },
    { nome: "Monitor", preco: 800, estoque: 3 },
    { nome: "Headset", preco: 150, estoque: 8 },
    { nome: "Webcam", preco: 200, estoque: 0 }
];

//Aqui estamos utilizando Template Literals -> serve para melhorar a formatação de txt
// basta usar crase e ${} para as variaveis

let descricoes = produtos.map((prod)=>{
    return console.log(`O produto é ${prod.nome} seu valor é ${prod.preco}`)
})
