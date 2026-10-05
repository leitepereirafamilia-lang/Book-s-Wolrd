const listaLivros = document.getElementById("lista-livros");

// Ícone do carrinho (SVG)
const iconeCarrinho = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="9" cy="20" r="1.5"></circle>
    <circle cx="18" cy="20" r="1.5"></circle>
    <path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H6"></path>
  </svg>
`;

// Tenta carregar a imagem: devolve true se a capa existir
function capaExiste(livro) {
  return new Promise((resolve) => {
    if (!livro.imagem) {
      resolve(false);
      return;
    }

    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = livro.imagem;
  });
}

// Cria o HTML de um card (mesmo da página inicial, estilo no livros.css)
function criarCard(livro) {
  return `
    <div class="card">

      <span class="selo">Mais vendido</span>

      <div class="card-capa">
        <img src="${livro.imagem}" alt="Capa do livro ${livro.titulo}">
      </div>

      <div class="card-conteudo">
        <p class="categoria">${livro.categoria}</p>

        <h3>${livro.titulo}</h3>

        <p class="autor">${livro.autor}</p>

        <p class="preco">
          R$ ${livro.preco.toFixed(2).replace(".", ",")}
        </p>

        <button onclick="adicionarCarrinho(${livro.id}); marcarAdicionado(this)">
          ${iconeCarrinho}
          Adicionar
        </button>
      </div>

    </div>
  `;
}

// Mostra "Adicionado ✓" por um instante depois do clique
function marcarAdicionado(botao) {
  const textoOriginal = botao.innerHTML;

  botao.classList.add("adicionado");
  botao.textContent = "Adicionado ✓";

  setTimeout(() => {
    botao.classList.remove("adicionado");
    botao.innerHTML = textoOriginal;
  }, 1500);
}

async function iniciar() {
  // Só os livros marcados como mais vendidos
  const maisVendidos = livros.filter((livro) => livro.maisVendido === true);

  // Só os que têm capa de verdade
  const resultados = await Promise.all(maisVendidos.map(capaExiste));
  const comCapa = maisVendidos.filter((livro, i) => resultados[i]);

  if (comCapa.length === 0) {
    listaLivros.innerHTML = "<p>Nenhum livro disponível no momento.</p>";
    return;
  }

  listaLivros.innerHTML = comCapa.map(criarCard).join("");
}

iniciar();
