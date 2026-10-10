const num1 = document.getElementById("n1")
const num2 =  document.getElementById("n2")
const somando = document.getElementById("soma")
const resultado = document.getElementById("exibir")

somando.addEventListener("click" , function(){
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const soma = n1 + n2;
    resultado.textContent = soma;
})