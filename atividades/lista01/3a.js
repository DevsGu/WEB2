function calcular(n1, n2, operador) {

    if (operador === "+") {
        return n1 + n2;
    }

    if (operador === "-") {
        return n1 - n2;
    }

    if (operador === "*") {
        return n1 * n2;
    }

    if (operador === "/") {
        return n1 / n2;
    }

    return "Operador inválido";
}

console.log(calcular(10, 5, "+"));
console.log(calcular(10, 5, "-"));
console.log(calcular(10, 5, "*"));
console.log(calcular(10, 5, "/"));