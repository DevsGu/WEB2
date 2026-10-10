const formulario = document.getElementById("form-produto");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById("preco");
const listaProdutos = document.getElementById("lista-produtos");
const campoTotal = document.getElementById("total");
const mensagem = document.getElementById("mensagem");

// Array que guarda os produtos cadastrados
let produtos = [];
let proximoId = 1;

// Formata um número como moeda brasileira
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

// Atualiza a tabela usando o array de produtos
function renderizarProdutos() {
    listaProdutos.innerHTML = "";

    produtos.forEach(function(produto) {
        const linha = document.createElement("tr");

        const colunaNome = document.createElement("td");
        colunaNome.textContent = produto.nome;

        const colunaPreco = document.createElement("td");
        colunaPreco.textContent = formatarMoeda(produto.preco);

        const colunaAcao = document.createElement("td");
        const botaoExcluir = document.createElement("button");

        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("excluir");

        botaoExcluir.addEventListener("click", function() {
            excluirProduto(produto.id);
        });

        colunaAcao.appendChild(botaoExcluir);

        linha.appendChild(colunaNome);
        linha.appendChild(colunaPreco);
        linha.appendChild(colunaAcao);

        listaProdutos.appendChild(linha);
    });

    atualizarTotal();
}

// Cadastra um novo produto
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = campoNome.value.trim();
    const preco = Number(campoPreco.value);

    if (nome === "" || !Number.isFinite(preco) || preco <= 0) {
        mensagem.textContent = "Informe um nome e um preço válido.";
        return;
    }

    const produto = {
        id: proximoId,
        nome: nome,
        preco: preco
    };

    proximoId++;

    produtos.push(produto);

    renderizarProdutos();

    formulario.reset();

    mensagem.textContent = "Produto cadastrado com sucesso!";
});

// Exclui um produto pelo identificador
function excluirProduto(id) {
    produtos = produtos.filter(function(produto) {
        return produto.id !== id;
    });

    renderizarProdutos();

    mensagem.textContent = "Produto excluído com sucesso!";
}

// Calcula a soma dos preços
function atualizarTotal() {
    const total = produtos.reduce(function(acumulador, produto) {
        return acumulador + produto.preco;
    }, 0);

    campoTotal.textContent = formatarMoeda(total);
}

