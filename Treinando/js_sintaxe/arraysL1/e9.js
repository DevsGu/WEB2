/*9. Crie:
let numeros = [3, 8, 11, 20, 25, 30, 41, 50];

Percorra o array e mostre somente os números pares.

Resultado:
8
20
30
50
*/

// Usei o for tradicional , opção valida
let numeros = [3, 8, 11, 20, 25, 30, 41, 50];

for(let i = 0 ;  i < numeros.length ; i++){
    if(numeros[i] % 2 == 0){
        console.log(numeros[i])
    }
}

// MASSA FOR AECH TAMBÉM FUNCIONOU !!!
numeros.forEach((num)=>{
    if(num % 2 == 0){
        console.log("Par : " + num)
    }
})
