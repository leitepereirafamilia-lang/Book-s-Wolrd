const titulo = document.getElementById("titulo-busca");
const contador = document.getElementById("contador-livros");
const listaLivros = document.getElementById("lista-livros");
const semResultados = document.getElementById("sem-resultados");

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

// Cria o HTML de um card (mesmo das outras páginas)
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

// Tira acentos e deixa minúsculo (a busca ignora acento e maiúscula)
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Dá pontos ao livro; 0 = não combina com a busca
// Todas as palavras digitadas precisam aparecer em algum lugar.
// Título vale mais que autor, que vale mais que gênero.
function pontuar(livro, palavras) {
  const tituloLivro = normalizar(livro.titulo);
  const autorLivro = normalizar(livro.autor);
  const generoLivro = normalizar(livro.categoria);

  let pontos = 0;

  for (const palavra of palavras) {
    let achou = false;

    if (tituloLivro.includes(palavra)) {
      pontos += 3;
      achou = true;
    }

    if (autorLivro.includes(palavra)) {
      pontos += 2;
      achou = true;
    }

    if (generoLivro.includes(palavra)) {
      pontos += 1;
      achou = true;
    }

    if (!achou) {
      return 0;
    }
  }

  return pontos;
}

async function iniciar() {
  const busca = (
    new URLSearchParams(window.location.search).get("q") || ""
  ).trim();

  // preenche a barra do menu com o que foi pesquisado
  const campoMenu = document.querySelector(".barra-pesquisa input");
  if (campoMenu) {
    campoMenu.value = busca;
  }

  if (busca === "") {
    titulo.textContent = "Busca";
    contador.textContent =
      "Digite o nome de um livro, autor ou gênero na barra de busca.";
    return;
  }

  titulo.textContent = `Resultados para “${busca}”`;
  document.title = `${busca} - Busca - Book's World`;

  const palavras = normalizar(busca).split(/\s+/).filter(Boolean);

  // só livros com capa
  const resultadosCapa = await Promise.all(livros.map(capaExiste));
  const livrosComCapa = livros.filter((livro, i) => resultadosCapa[i]);

  const encontrados = livrosComCapa
    .map((livro) => ({ livro, pontos: pontuar(livro, palavras) }))
    .filter((item) => item.pontos > 0)
    .sort((a, b) => b.pontos - a.pontos)
    .map((item) => item.livro);

  if (encontrados.length === 0) {
    contador.textContent = "";
    semResultados.hidden = false;
    return;
  }

  contador.textContent = `${encontrados.length} ${
    encontrados.length === 1 ? "livro encontrado" : "livros encontrados"
  }`;

  listaLivros.innerHTML = encontrados.map(criarCard).join("");
}

iniciar();
