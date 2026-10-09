/*4. Crie uma função chamada "calcularMedia" que receba 3 notas.

A função deve:
- calcular a média;
- retornar a média.

Depois mostre o resultado no console.*/ 

function calcularMedia(n1 , n2 , n3){
    let media = (n1+n2+n3)/3
    return "Valor da media "+ media
}

console.log(calcularMedia(7 , 9 , 7));