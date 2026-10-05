const vistaAutores = document.getElementById("vista-autores");
const vistaLivros = document.getElementById("vista-livros");

const campoBusca = document.getElementById("busca-autor");
const contadorAutores = document.getElementById("contador-autores");
const listaAutores = document.getElementById("lista-autores");

const nomeAutor = document.getElementById("nome-autor");
const contadorLivros = document.getElementById("contador-livros");
const listaLivros = document.getElementById("lista-livros");
const botaoVoltar = document.getElementById("voltar-autores");

// { "Stephen King": [livro, livro, ...] } — só livros com capa
let autores = {};
// nomes dos autores já ordenados por sobrenome
let nomesOrdenados = [];

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

// Cria o HTML de um card de livro (mesmo das outras páginas)
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

// ---------- utilidades ----------

// Tira acentos e deixa minúsculo (para a busca ignorar acento)
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Última palavra do nome, usada para ordenar por sobrenome
function sobrenome(nome) {
  const partes = nome.trim().split(/\s+/);
  return partes[partes.length - 1];
}

// Iniciais para o círculo (ex.: "Stephen King" -> "SK")
function iniciais(nome) {
  const partes = nome.trim().split(/\s+/);
  const primeira = partes[0][0];
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : "";
  return (primeira + ultima).toUpperCase();
}

// ---------- lista de autores ----------

function mostrarAutores(textoBusca = "") {
  const busca = normalizar(textoBusca.trim());

  const nomes = nomesOrdenados.filter((nome) =>
    normalizar(nome).includes(busca),
  );

  listaAutores.innerHTML = "";

  if (nomes.length === 0) {
    listaAutores.innerHTML = "<p>Nenhum autor encontrado.</p>";
  }

  nomes.forEach((nome) => {
    const quantidade = autores[nome].length;

    const card = document.createElement("button");
    card.type = "button";
    card.className = "card-autor";
    card.dataset.autor = nome;

    card.innerHTML = `
      <div class="avatar-autor">${iniciais(nome)}</div>
      <div class="info-autor">
        <strong>${nome}</strong>
        <span>${quantidade} ${quantidade === 1 ? "livro" : "livros"}</span>
      </div>
    `;

    card.addEventListener("click", () => irParaAutor(nome));

    listaAutores.appendChild(card);
  });

  contadorAutores.textContent = `${nomes.length} ${
    nomes.length === 1 ? "autor" : "autores"
  }`;
}

// ---------- livros de um autor ----------

function mostrarLivrosDoAutor(nome) {
  const livrosDoAutor = autores[nome];

  nomeAutor.textContent = nome;

  contadorLivros.textContent = `${livrosDoAutor.length} ${
    livrosDoAutor.length === 1 ? "livro" : "livros"
  }`;

  listaLivros.innerHTML = livrosDoAutor.map(criarCard).join("");

  vistaAutores.hidden = true;
  vistaLivros.hidden = false;

  window.scrollTo({ top: 0 });
}

// ---------- navegação (usa o endereço: autores.html?autor=Nome) ----------

function atualizarTela() {
  const nome = new URLSearchParams(window.location.search).get("autor");

  if (nome && autores[nome]) {
    mostrarLivrosDoAutor(nome);
  } else {
    vistaLivros.hidden = true;
    vistaAutores.hidden = false;
    mostrarAutores(campoBusca.value);
  }
}

function irParaAutor(nome) {
  const url = new URL(window.location);
  url.searchParams.set("autor", nome);
  history.pushState(null, "", url);
  atualizarTela();
}

function voltarParaAutores() {
  const url = new URL(window.location);
  url.searchParams.delete("autor");
  history.pushState(null, "", url);
  atualizarTela();
}

botaoVoltar.addEventListener("click", voltarParaAutores);

// botão "voltar" do navegador
window.addEventListener("popstate", atualizarTela);

campoBusca.addEventListener("input", () => mostrarAutores(campoBusca.value));

// ---------- início ----------

async function iniciar() {
  const resultados = await Promise.all(livros.map(capaExiste));
  const livrosComCapa = livros.filter((livro, i) => resultados[i]);

  if (livrosComCapa.length === 0) {
    listaAutores.innerHTML = "<p>Nenhum autor disponível no momento.</p>";
    return;
  }

  // agrupa os livros por autor
  livrosComCapa.forEach((livro) => {
    if (!autores[livro.autor]) {
      autores[livro.autor] = [];
    }
    autores[livro.autor].push(livro);
  });

  // ordena por sobrenome
  nomesOrdenados = Object.keys(autores).sort((a, b) =>
    sobrenome(a).localeCompare(sobrenome(b), "pt-BR"),
  );

  atualizarTela();
}

iniciar();
