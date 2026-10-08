const readline = require("readline"); // Modulo readline -> vai mostrar saida terminal

const r1 = readline.createInterface({ // criando interface de entrada e saida dados
    input: process.stdin, //Processo de entrada do teclado
    output: process.stdout // Processo de saída do teclado
});

r1.question("Digite seu nome: ", (nome) => {

    console.log("Nome: " + nome);

    r1.close();
});