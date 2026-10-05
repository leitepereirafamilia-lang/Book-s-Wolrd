const listaLivros = document.getElementById("lista-livros-index");
const botaoVerMais = document.getElementById("verMais");

const quantidadeLivros = 20;
let livrosMostrados = 0;

// Só os livros cuja capa existe de verdade
let livrosComCapa = [];

// Tenta carregar a imagem: devolve true se existir, false se não
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

// Ícone do carrinho (SVG)
const iconeCarrinho = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="9" cy="20" r="1.5"></circle>
    <circle cx="18" cy="20" r="1.5"></circle>
    <path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H6"></path>
  </svg>
`;

// Cria o HTML de um card
function criarCard(livro) {
  const selo = livro.maisVendido
    ? '<span class="selo">Mais vendido</span>'
    : "";

  return `
    <div class="card">

      ${selo}

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

// Mostra os próximos livros
function mostrarLivros() {
  const proximos = livrosComCapa.slice(
    livrosMostrados,
    livrosMostrados + quantidadeLivros,
  );

  proximos.forEach((livro) => {
    listaLivros.innerHTML += criarCard(livro);
  });

  livrosMostrados += quantidadeLivros;

  if (livrosMostrados >= livrosComCapa.length) {
    botaoVerMais.style.display = "none";
  }
}

function verMais() {
  mostrarLivros();
}

// Início: descobre quais capas existem, embaralha e mostra
async function iniciar() {
  botaoVerMais.style.display = "none";

  const resultados = await Promise.all(livros.map(capaExiste));

  livrosComCapa = livros.filter((livro, i) => resultados[i]);

  // Embaralha DEPOIS de filtrar e ANTES de cortar
  livrosComCapa.sort(() => Math.random() - 0.5);

  if (livrosComCapa.length === 0) {
    listaLivros.innerHTML = "<p>Nenhum livro disponível no momento.</p>";
    return;
  }

  botaoVerMais.style.display = "";
  mostrarLivros();
}

iniciar();
