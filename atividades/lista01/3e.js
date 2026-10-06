function calcularTotal(valor, quantidade, desconto = 0) {

    let total = valor * quantidade;

    total = total - (total * desconto / 100);

    return total;
}

console.log(calcularTotal(100, 2));
console.log(calcularTotal(100, 2, 10));