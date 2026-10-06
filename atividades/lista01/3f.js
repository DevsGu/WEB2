let conta = {

    numeroConta: "12345-6",

    saldo: 1000,

    depositar: function(valor) {
        this.saldo += valor;
        console.log("Depósito realizado.");
    },

    sacar: function(valor) {

        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log("Saque realizado.");
        } else {
            console.log("Saldo insuficiente.");
        }
    },

    informarSaldo: function() {
        console.log("Saldo atual: R$ " + this.saldo.toFixed(2));
    }
};

conta.informarSaldo();

conta.depositar(500);
conta.informarSaldo();

conta.sacar(300);
conta.informarSaldo();

conta.sacar(2000);