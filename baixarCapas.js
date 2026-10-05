// =====================================================
// BOOK'S WORLD - baixa as capas dos livros (versão 2)
// Uso: node baixarCapas.js   (na pasta do projeto)
// Pode rodar quantas vezes quiser: pula as capas que já existem.
// =====================================================

const fs = require("fs");
const path = require("path");

const ARQUIVO_LIVROS = "js/livros.js";
const PAUSA_MS = 700; // pausa entre livros
const TAMANHO_MINIMO = 3000; // bytes (menor que isso = "sem capa")

const codigo = fs.readFileSync(ARQUIVO_LIVROS, "utf-8");
const livros = new Function(codigo + "; return livros;")();

const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

// Guarda o motivo da última falha de cada livro
let motivo = "";

// ---------- fetch com nova tentativa se for bloqueado ----------
async function buscar(url, tentativas = 4) {
  for (let i = 0; i < tentativas; i++) {
    try {
      const resp = await fetch(url, { signal: AbortSignal.timeout(15000) });

      if (resp.status === 429 || resp.status >= 500) {
        motivo = `bloqueado/instável (${resp.status})`;
        const espera = 5000 * 2 ** i; // 5s, 10s, 20s, 40s
        console.log(`   ... ${resp.status}, esperando ${espera / 1000}s`);
        await esperar(espera);
        continue;
      }

      return resp;
    } catch (erro) {
      motivo = "erro de rede/tempo esgotado";
      await esperar(2000);
    }
  }
  return null;
}

// ---------- tira subtítulo e símbolos do título ----------
function tituloSimples(titulo) {
  return titulo.split(":")[0].replace(/[!?*]/g, "").replace(/\s+/g, " ").trim();
}

// ---------- fontes de busca (cada uma devolve lista de URLs) ----------
async function googleBooks(q, pt) {
  let url =
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}` +
    `&maxResults=5&printType=books`;
  if (pt) url += "&langRestrict=pt";
  if (process.env.GOOGLE_API_KEY) url += `&key=${process.env.GOOGLE_API_KEY}`;

  const resp = await buscar(url);
  if (!resp || !resp.ok) return [];

  const dados = await resp.json();
  const urls = [];

  for (const item of dados.items || []) {
    const links = item.volumeInfo?.imageLinks;
    const img = links?.thumbnail || links?.smallThumbnail;
    if (img) {
      const base = img.replace("http://", "https://").replace("&edge=curl", "");
      urls.push(base.replace("zoom=1", "zoom=2")); // maior
      urls.push(base); // tamanho normal, caso o maior falhe
    }
  }
  return urls;
}

async function openLibrary(titulo, autor) {
  let url =
    `https://openlibrary.org/search.json?title=${encodeURIComponent(titulo)}` +
    `&limit=5&fields=cover_i`;
  if (autor) url += `&author=${encodeURIComponent(autor)}`;

  const resp = await buscar(url);
  if (!resp || !resp.ok) return [];

  const dados = await resp.json();

  return (dados.docs || [])
    .filter((d) => d.cover_i)
    .map(
      (d) =>
        `https://covers.openlibrary.org/b/id/${d.cover_i}-L.jpg?default=false`,
    );
}

// ---------- baixa e salva ----------
async function baixarImagem(url, destino) {
  const resp = await buscar(url, 2);
  if (!resp || !resp.ok) return false;

  const bytes = Buffer.from(await resp.arrayBuffer());

  if (bytes.length < TAMANHO_MINIMO) {
    motivo = "imagem pequena demais (capa indisponível)";
    return false;
  }

  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, bytes);
  return true;
}

// ---------- tenta várias buscas, da mais exata à mais solta ----------
async function acharCapa(livro) {
  const simples = tituloSimples(livro.titulo);

  const tentativas = [
    () =>
      googleBooks(`intitle:"${livro.titulo}" inauthor:"${livro.autor}"`, true),
    () =>
      googleBooks(`intitle:"${livro.titulo}" inauthor:"${livro.autor}"`, false),
    () => googleBooks(`${simples} ${livro.autor}`, false),
    () => openLibrary(simples, livro.autor),
    () => openLibrary(simples, ""),
  ];

  motivo = "nenhuma busca encontrou capa";

  for (const tentar of tentativas) {
    const urls = await tentar();

    for (const url of urls) {
      if (await baixarImagem(url, livro.imagem)) return true;
    }

    await esperar(400);
  }

  return false;
}

async function main() {
  const faltaram = [];
  let baixadas = 0;
  let jaExistiam = 0;

  for (const livro of livros) {
    if (fs.existsSync(livro.imagem)) {
      jaExistiam++;
      continue;
    }

    const ok = await acharCapa(livro);

    if (ok) {
      baixadas++;
      console.log(`✔ ${livro.id} - ${livro.titulo}`);
    } else {
      faltaram.push({ livro, motivo });
      console.log(`✘ ${livro.id} - ${livro.titulo}  [${motivo}]`);
    }

    await esperar(PAUSA_MS);
  }

  console.log("\n==============================");
  console.log(`Baixadas agora: ${baixadas}`);
  console.log(`Já existiam:    ${jaExistiam}`);
  console.log(`Sem capa:       ${faltaram.length}`);

  if (faltaram.length > 0) {
    const texto = faltaram
      .map(
        (f) =>
          `${f.livro.id} | ${f.livro.titulo} | ${path.basename(f.livro.imagem)} | ${f.motivo}`,
      )
      .join("\n");
    fs.writeFileSync("capas-faltando.txt", texto, "utf-8");
    console.log("Lista dos que faltaram salva em capas-faltando.txt");
  }
}

main();
