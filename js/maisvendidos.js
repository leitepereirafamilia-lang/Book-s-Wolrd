const listaLivros = document.getElementById("lista-livros");

// Pega somente os livros que possuem maisVendido: true
const livrosMaisVendidos = livros.filter(
    livro => livro.maisVendido === true
);

// Mostra os livros
livrosMaisVendidos.forEach(livro => {

    listaLivros.innerHTML += `
        <div class="card-livro">

            <span class="selo-mais-vendido">
                MAIS VENDIDO
            </span>

            <h2>${livro.titulo}</h2>

            <p class="autor">
                Autor: ${livro.autor}
            </p>

            <p class="categoria">
                Categoria: ${livro.categoria}
            </p>

            <p class="preco">
                R$ ${livro.preco.toFixed(2).replace(".", ",")}
            </p>

            <button onclick="adicionarCarrinho(${livro.id})">
                Adicionar ao carrinho
            </button>

        </div>
    `;
});