/*let n1 = 10;
let n2 = 5;

let soma = n1 + n2;
let sub = n1 - n2;
let multi = n1 * n2;
let div = n1 / n2;

console.log("Soma: "+ soma + " Sub:"+ sub + " Multi:"+multi+ " Div: "+ div);*/

const readline = require("readline");
const r1 =  readline.createInterface({

    input: process.stdin,
    output: process.stdout

})


//Aprendendo a fazer a conversando de string para numero na entrada de dados
r1.question("Digite um numero :" , (n1) =>{
    r1.question("Digite novo numero :" , (n2)=>{

        // aqui é que ocorre a conversao de string para numeros
        
        n1 = Number(n1);
        n2 = Number(n2);

        console.log("Soma :" + (n1 + n2))
        console.log("Multiplicação :" + (n1 * n2))
        console.log("Divisão :" + (n1 / n2))
        console.log("Subtração :" + (n1 - n2))

        r1.close();
    })
})