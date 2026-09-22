const listaLivros = document.getElementById("lista-livros");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

console.log(livros.length);

livros.sort(() => Math.random() - 0.5);

livros.forEach(livro => {

    listaLivros.innerHTML += `
        <div>
            <h2>${livro.titulo}</h2>

            <p>Autor: ${livro.autor}</p>
            <p>Categoria: ${livro.categoria}</p>
            <p>Preço: R$ ${livro.preco}</p>

            <button onclick="adicionarCarrinho(${livro.id})">
                Adicionar ao carrinho
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