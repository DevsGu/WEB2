/*3. Crie uma função chamada "verificarIdade" que receba uma idade.
A função deve informar:

idade >= 18 → "Maior de idade"
idade < 18 → "Menor de idade"
*/

function verificarIdade(idade){
    if(idade >= 18){
        console.log("Maior de Idade")
    }else{
        console.log("Menor de Idade")
    }
}

console.log(verificarIdade(4))
