/*2. Fácil — Preços com desconto**

Crie um array chamado `precosDesconto` contendo os preços de todos os produtos com 
10% de desconto. Não altere o array original.
*/

let bonecos =[
    {
        nome:"Goku",
        preco:100
    },
    {
        nome:"MaginBoo",
        preco:60
    },{
        nome:"Vegeta",
        preco:80
    },{
        nome:"Trunks",
        preco:70
    }
]

//Descontão de 10% nos bonecos de DragonBall Z

let precosDesconto = bonecos.map((novo_preco) => {
    let desc = 0.10 * novo_preco.preco;
    return novo_preco.preco - desc;
})

console.log(precosDesconto)
