/*5. 🧠 DESAFIO
Crie uma função chamada "calcularTotal".
Ela deve receber um Array de objetos de produtos:

[
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 800 }
]
A função deve percorrer os produtos e calcular o valor total.
Resultado esperado:
Total: 950*/ 

function calcularTotal(){
    let soma = 0;

    let prod = [
        { nome: "Mouse", preco: 50 },
        { nome: "Teclado", preco: 100 },
        { nome: "Monitor", preco: 800 }
    ];

    for(let i = 0; i < prod.length; i++){
        soma += prod[i].preco;
    }

    return soma;
}

console.log("Total: " + calcularTotal());
