//Obtendo soma dos numeros primos

let n = Number(prompt("Quantos números serão informados?"));
let soma = 0;

for (let i = 1; i <= n; i++) {

    let numero = Number(prompt("Digite o " + i + "º número:"));
    let primo = true;

    if (numero < 2) {
        primo = false;
    } else {

        for (let j = 2; j < numero; j++) {

            if (numero % j === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        soma += numero;
    }
}

console.log("Soma dos números primos: " + soma);