const listaCarrinho = document.getElementById("lista-carrinho");

const total = document.getElementById("total");

const totalResumo = document.getElementById("total-resumo");


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let selecionados = JSON.parse(localStorage.getItem("selecionados")) || [];


if (carrinho.length === 0) {

    listaCarrinho.innerHTML = "<p>Seu carrinho está vazio</p>";

}


carrinho.forEach(item => {

    const livro = item.livro;

    const subtotal = livro.preco * item.quantidade;


    listaCarrinho.innerHTML += `

        <div class="card-carrinho">


            <input
                type="checkbox"
                class="selecionar-livro"
                data-id="${livro.id}"
            >


            <div class="info-livro">

                <h2>${livro.titulo}</h2>

                <p>Autor: ${livro.autor}</p>

                <p>Categoria: ${livro.categoria}</p>

                <p class="preco">
                    R$ ${livro.preco.toFixed(2)}
                </p>

            </div>


            <div class="quantidade">

                <button onclick="diminuirQuantidade(${livro.id})">
                    -
                </button>

                <span>${item.quantidade}</span>

                <button onclick="aumentarQuantidade(${livro.id})">
                    +
                </button>

            </div>


            <div class="final-card">

                <p class="subtotal">
                    R$ ${subtotal.toFixed(2)}
                </p>

                <button
                    class="botao-remover"
                    onclick="removerCarrinho(${livro.id})"
                >
                    Remover
                </button>

            </div>


        </div>

    `;

});


// AUMENTAR QUANTIDADE

function aumentarQuantidade(id) {

    const item = carrinho.find(item => item.livro.id === id);

    item.quantidade++;

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    location.reload();

}


// DIMINUIR QUANTIDADE

function diminuirQuantidade(id) {

    const item = carrinho.find(item => item.livro.id === id);

    if (item.quantidade > 1) {

        item.quantidade--;

    }

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    location.reload();

}


// REMOVER LIVRO

function removerCarrinho(id) {

    carrinho = carrinho.filter(
        item => item.livro.id !== id
    );

    selecionados = selecionados.filter(
        item => item !== id
    );


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    localStorage.setItem(
        "selecionados",
        JSON.stringify(selecionados)
    );


    location.reload();

}


// FINALIZAR COMPRA

function finalizarCompra() {

    if (selecionados.length === 0) {

        alert("Selecione pelo menos um livro para continuar.");

        return;

    }

    window.location.href = "pagamento.html";

}


// CHECKBOX DE SELECIONAR TODOS

const checkboxes =
    document.querySelectorAll(".selecionar-livro");

const selecionarTodos =
    document.getElementById("selecionar-todos");


selecionarTodos.addEventListener("change", function() {

    checkboxes.forEach(checkbox => {

        checkbox.checked = this.checked;

        const id = Number(checkbox.dataset.id);


        if (this.checked) {

            if (!selecionados.includes(id)) {

                selecionados.push(id);

            }

        } else {

            selecionados =
                selecionados.filter(item => item !== id);

        }

    });


    localStorage.setItem(
        "selecionados",
        JSON.stringify(selecionados)
    );


    atualizarTotal();

});


// MARCAR OS LIVROS QUE JÁ ESTAVAM SELECIONADOS

checkboxes.forEach(checkbox => {

    const id = Number(checkbox.dataset.id);


    if (selecionados.includes(id)) {

        checkbox.checked = true;

    }

});


// ATUALIZAR TOTAL AO ABRIR A PÁGINA

atualizarTotal();


// SELECIONAR / DESSELECIONAR LIVRO

checkboxes.forEach(checkbox => {

    checkbox.addEventListener("change", function() {

        const id = Number(this.dataset.id);


        if (this.checked) {

            if (!selecionados.includes(id)) {

                selecionados.push(id);

            }

        } else {

            selecionados =
                selecionados.filter(item => item !== id);

        }


        localStorage.setItem(
            "selecionados",
            JSON.stringify(selecionados)
        );


        atualizarTotal();

    });

});


// CALCULAR TOTAL

function atualizarTotal() {

    let valorTotal = 0;


    carrinho.forEach(item => {

        if (selecionados.includes(item.livro.id)) {

            valorTotal +=
                item.livro.preco * item.quantidade;

        }

    });


    total.textContent =
        valorTotal.toFixed(2);


    totalResumo.textContent =
        valorTotal.toFixed(2);

}