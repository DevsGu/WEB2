/*4. Crie:
let aluno = {
    nome: "Gustavo",
    idade: 28,
    nota: 8
};

Utilizando if, verifique se o aluno foi aprovado.

Regra:
nota >= 7 → Aprovado
nota < 7 → Reprovado*/


let aluno = {
    nome: "Gustavo",
    idade: 28,
    nota: 8
};

if(aluno["nota"] >=7){
    console.log(aluno["nome"])
    console.log("Aluno Aprovado")
}else{
    console.log("Aluno Reprovado")
}

