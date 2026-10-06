/*
Com var é possivel usar o valor do X fora do escopo local , é algo baguncaçado
em outroas linguagens não é possivel fazer isso. com let e const isso não é possivel
evite usar vart
*/

if(true){
    var x = 10;
}

console.log(x);


/*
 Hoisting -> Respostas sao elevadas ao todo da função. se global leva ao topo global se local
 leva ao topo do global
*/

console.log(sum(1,2))

function sum(a , b){
    return a + b;
}



/*Exemplo mais REAL DE CURTO CIRCUITO - IMPORTANTE- teste01 */

//ISTO É UM OBJETO !! um pouco diferente de outras linguagens !!!
const produtos = [
    {nome:"Camisas" , preco:29.99},
    {nome:"Calças" ,preco:49.99},
    {nome:"Tênis" , preco: 89.99}
];

function exibirProdutos(produtos){
    console.log(produtos);
}
    //como tem produtos na lista , a funcao será chamada
    produtos && exibirProdutos(produtos);

// agora sem valores 

    const produtos2 = [
    
];

function exibirProdutos(produtos2){
    console.log(produtos2);
}
    //como tem produtos na lista , a funcao será chamada
    produtos2 && exibirProdutos(produtos2);