/*
const nome = "Gustavo";
let idade = 28;
let cidade = "tauá"

console.log("Meu nome é " + nome + " Minha idade é "+ idade + " eu moro em "+ cidade);
*/

const readline = require("readline");
const r1 = readline.createInterface({
    
    input: process.stdin ,
    output: process.stdout

})


r1.question("Digite seu nome: " , (nome)=>{
    r1.question("Digite sua idade: " , (idade)=>{
        r1.question("Digite sua cidade: " , (cidade)=>{
            console.log("Seu nome é "+nome+ " Você tem :" + idade + " anos "+ "Sua cidade é "+ cidade)
            r1.close();
        })
    })
})