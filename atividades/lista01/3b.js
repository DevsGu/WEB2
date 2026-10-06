function produtoria(...numeros) {

    let resultado = 1;

    for (let numero of numeros) {
        resultado *= numero;
    }

    return resultado;
}

console.log(produtoria(2, 3, 4));
console.log(produtoria(5, 2, 3));