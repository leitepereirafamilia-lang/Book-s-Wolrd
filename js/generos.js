const filtro = document.getElementById("filtro-generos");
const contador = document.getElementById("contador-livros");
const listaLivros = document.getElementById("lista-livros");

const TODOS = "Todos";

// Só os livros que têm capa (preenchido em iniciar)
let livrosComCapa = [];

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

// Cria o HTML de um card (mesmo das outras páginas, estilo no livros.css)
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

// Conta quantos livros (com capa) cada gênero tem
function contarGeneros() {
  const contagem = {};

  livrosComCapa.forEach((livro) => {
    contagem[livro.categoria] = (contagem[livro.categoria] || 0) + 1;
  });

  return contagem;
}

// Cria os botões de gênero
function criarFiltros(contagem) {
  const generos = Object.keys(contagem).sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );

  const lista = [TODOS, ...generos];

  filtro.innerHTML = "";

  lista.forEach((genero) => {
    const quantidade =
      genero === TODOS ? livrosComCapa.length : contagem[genero];

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "chip-genero";
    botao.dataset.genero = genero;
    botao.innerHTML = `${genero} <span>${quantidade}</span>`;

    botao.addEventListener("click", () => selecionarGenero(genero));

    filtro.appendChild(botao);
  });
}

// Mostra só os livros do gênero escolhido
function selecionarGenero(genero) {
  // marca o botão ativo
  filtro.querySelectorAll(".chip-genero").forEach((botao) => {
    const ativo = botao.dataset.genero === genero;
    botao.classList.toggle("ativo", ativo);
    botao.setAttribute("aria-pressed", ativo);
  });

  const livrosDoGenero =
    genero === TODOS
      ? livrosComCapa
      : livrosComCapa.filter((livro) => livro.categoria === genero);

  listaLivros.innerHTML = livrosDoGenero.map(criarCard).join("");

  contador.textContent =
    genero === TODOS
      ? `${livrosDoGenero.length} livros`
      : `${livrosDoGenero.length} ${
          livrosDoGenero.length === 1 ? "livro" : "livros"
        } em ${genero}`;

  // guarda o gênero no endereço (genero.html?genero=Fantasia)
  const url = new URL(window.location);

  if (genero === TODOS) {
    url.searchParams.delete("genero");
  } else {
    url.searchParams.set("genero", genero);
  }

  history.replaceState(null, "", url);
}

async function iniciar() {
  const resultados = await Promise.all(livros.map(capaExiste));
  livrosComCapa = livros.filter((livro, i) => resultados[i]);

  if (livrosComCapa.length === 0) {
    listaLivros.innerHTML = "<p>Nenhum livro disponível no momento.</p>";
    return;
  }

  const contagem = contarGeneros();
  criarFiltros(contagem);

  // abre direto no gênero do endereço, se existir (ex.: generos.html?genero=Terror)
  const generoDoEndereco = new URLSearchParams(window.location.search).get(
    "genero",
  );

  selecionarGenero(contagem[generoDoEndereco] ? generoDoEndereco : TODOS);
}

iniciar();
