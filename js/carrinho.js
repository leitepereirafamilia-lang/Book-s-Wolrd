const listaCarrinho = document.getElementById("lista-carrinho");
const total = document.getElementById("total");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

if(carrinho.length === 0){
    listaCarrinho.innerHTML = "<p>Seu carrinho está vazio</p>";
}

carrinho.forEach(item => {

    const livro = item.livro;

    const subtotal = livro.preco * item.quantidade;

    listaCarrinho.innerHTML += `
        <div>
            <h2>${livro.titulo}</h2>

            <p>Autor: ${livro.autor}</p>
            <p>Categoria: ${livro.categoria}</p>
            <p>Preço: R$ ${livro.preco.toFixed(2)}</p>

            <button onclick="diminuirQuantidade(${livro.id})">-</button>

            <span>${item.quantidade}</span>

            <button onclick="aumentarQuantidade(${livro.id})">+</button>

            <button onclick="removerCarrinho(${livro.id})">
            Remover
            </button>

            <P>Subtotal: R$ ${subtotal.toFixed(2)}</p>


        </div>
    `;

});

let valorTotal = 0;

carrinho.forEach(item => {
    valorTotal += item.livro.preco * item.quantidade;
});

total.textContent = valorTotal.toFixed(2);

function aumentarQuantidade(id) {

    const item = carrinho.find(item => item.livro.id === id);

    item.quantidade++;

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    location.reload();
}


function diminuirQuantidade(id) {

    const item = carrinho.find(item => item.livro.id === id);

    if (item.quantidade > 1) {
        item.quantidade--;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    location.reload();
}

function removerCarrinho(id) {

    carrinho = carrinho.filter(item => item.livro.id !== id);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    location.reload();
}