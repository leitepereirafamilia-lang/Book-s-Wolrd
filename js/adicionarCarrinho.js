let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(id) {
  const livro = livros.find((livro) => livro.id === id);

  const item = carrinho.find((item) => item.livro.id === id);

  if (item) {
    item.quantidade++;
  } else {
    carrinho.push({
      livro: livro,
      quantidade: 1,
    });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  console.log(carrinho);
}
