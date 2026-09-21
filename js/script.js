const listaCarrinho = document.getElementById("lista-carrinho");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

carrinho.forEach(item => {

    const livro = item.livro;

    listaCarrinho.innerHTML += `
        <div>
            <h2>${livro.titulo}</h2>

            <p>Autor: ${livro.autor}</p>
            <p>Categoria: ${livro.categoria}</p>
            <p>Preço: R$ ${livro.preco}</p>

            <button onclick="diminuirQuantidade(${livro.id})">-</button>

            <span>${item.quantidade}</span>

            <button onclick="aumentarQuantidade(${livro.id})">+</button>

            <button onclick="removerCarrinho(${livro.id})">
                Remover
            </button>
        </div>
    `;

});



function adicionarCarrinho(id) {

    const livro = livros.find(livro => livro.id === id);

    const item = carrinho.find(item => item.livro.id === id);

    if (item) {
        item.quantidade++;
    } else {
        carrinho.push({
            livro: livro,
            quantidade: 1
        });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    console.log(carrinho);
}


function removerCarrinho(id) {

    carrinho = carrinho.filter(item => item.livro.id !== id);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    location.reload();
}