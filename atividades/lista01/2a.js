//Conversão de Dolares

let reais = Number(prompt("Digite o valor em reais (R$):"));
let cotacao = Number(prompt("Digite a cotação atual do dólar:"));

let dolares = reais / cotacao;

console.log("Valor em dólares: US$ " + dolares.toFixed(2));