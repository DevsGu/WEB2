// Criando um Array De Objetos e aprendendo a usar a função Map
// Repare que o MAP é como se fosse o jutsu multiclone das sombras de naruto , 
// a diferença é que ele cria outro array parar colocar os dados

/*
let produtos = [
    {
        nome:"Mouse",
        preco: 50
    } ,
    {
        nome:"Teclado",
        preco:100
    },
    {
        nome:"Monitor",
        preco:800
    }
]

let nomes = produtos.map((produto) => {
    return produto.nome;
})



let precos = produtos.map((pc) => {
    return pc.preco;
})

console.log(nomes)
console.log(precos)
*/


/*
## MAP()

**1. Fácil — Lista de nomes**

Usando o array `produtos`, 
crie um novo array chamado `nomes` contendo somente os nomes dos produtos.
 Exiba o resultado com `console.log()`.
 */


let produtos = [
    {
        nome : "Teclado" , 
        preco : 100
    },
    {
        nome : "Monitor" ,
        preco : 800
    }
]


let produto = produtos.map((prod)=>{
    return prod.nome;
})

let precos = produtos.map((pc) =>{
    return pc.preco;
})

console.log(produto)
console.log(precos)



