function calcularMedia(n1 , n2 , n3){
    let soma = (n1 + n2 + n3) /  3;
    return soma;
}


let n1 = Number(prompt("Digite o primeiro valor:"))
let n2 = Number(prompt("Digite o segundo valor:"))
let n3 = Number(prompt("Digite o terceiro valor:"))


prompt(calcularMedia(n1, n2 , n3))