function mostrarPix() {
  document.getElementById("pix").innerHTML = "";
  document.getElementById("credito").innerHTML = "";
  document.getElementById("debito").innerHTML = "";

  document.getElementById("pix").innerHTML = `
        <h2>Pagamento via PIX</h2>

        <p>Valor da Compra</p>
        <h3>R$ ${valorTotal.toFixed(2)}</h3>
        <div class="qr-code" id="qr-code"></div>
        <p>Escaneie o QR Code para realizar o pagamento</p>

        <p>Código PIX:</p>

        <input
            type="text"
            id="codigo-pix"
            value="NooksWorld-Pagamento-PIX"
        >

        <button onclick="copiarPix()" class="botao-copiar">
        📋
        </button>

        <button onclick="confirmarPix()" class="botao-finalizar">
            Finalizar Compra
        </button>
    `;
  gerarQrCode();
}

function gerarQrCode() {
  const qrCode = document.getElementById("qr-code");

  qrCode.innerHTML = "";

  new QRCode(qrCode, {
    text: "BooksWorld - Pagamento PIX",
    width: 200,
    height: 200,
  });
}

function copiarPix() {
  const codigo = document.getElementById("codigo-pix");
  navigator.clipboard.writeText(codigo.value);
}
// function criarCanto(qrCode, posicao){
//     const quadrados = qrCode.children;
//     for (let linha = 0; linha = 7; linha++){
//         for(let coluna = 0; cluna = 7; coluna++){
//             const indice = posicao + linha * 10 + coluna;

//             if(
//                 linha === 0 ||
//                 linha === 6 ||
//                 coluna === 0 ||
//                 coluna === 6
//             ){
//                 quadrados[indice].classList.add("preto");
//             }else if (
//                 linha >= 2 &&
//                 linha <= 4 &&
//                 coluna >= 2 &&
//                 coluna <= 4
//             ){
//                 quadrados[indice].classList.add("preto");
//             }else{
//                 quadrados[indice].classList.remove("preto");
//             }
//         }
//     }
// }

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let selecionados = JSON.parse(localStorage.getItem("selecionados")) || [];
let valorTotal = 0;

carrinho.forEach((item) => {
  if (selecionados.includes(item.livro.id)) {
    valorTotal += item.livro.preco * item.quantidade;
  }
});

// =========================
// RESUMO DO PEDIDO (lado direito)
// =========================

// Capas que ficam fora da pasta IMG/capas (id do livro -> caminho da imagem)
const CAPAS_ESPECIAIS = {
  40: "IMG/aHipoteseDoAmor.jpg", // A Hipótese do Amor
};

function pegarCapa(livro, dadosAtuais) {
  return (
    CAPAS_ESPECIAIS[livro.id] ||
    (dadosAtuais && dadosAtuais.imagem) ||
    livro.imagem ||
    "IMG/livro-sem-capa.png"
  );
}

function montarResumoPedido() {
  const itens = carrinho.filter(
    (item) => item && item.livro && selecionados.includes(item.livro.id),
  );

  const lista = document.getElementById("itens-resumo");
  const quantidade = document.getElementById("quantidade-pedido");
  const subtotal = document.getElementById("subtotal-resumo");
  const total = document.getElementById("total-resumo");

  lista.innerHTML = "";

  let valorItens = 0;
  let quantidadeTotal = 0;

  if (itens.length === 0) {
    lista.innerHTML = "<p>Nenhum item selecionado.</p>";
  }

  itens.forEach((item) => {
    const preco = Number(item.livro.preco) || 0;
    const valor = preco * item.quantidade;

    // dados atuais do livro no livros.js (se estiver carregado)
    const dadosAtuais =
      typeof livros !== "undefined"
        ? livros.find((l) => l.id === item.livro.id)
        : null;

    const imagem = pegarCapa(item.livro, dadosAtuais);

    // Avaliação: só aparece se o livro tiver "nota" (e "avaliacoes") no livros.js
    const nota = item.livro.nota ?? (dadosAtuais && dadosAtuais.nota);
    const numAvaliacoes =
      item.livro.avaliacoes ?? (dadosAtuais && dadosAtuais.avaliacoes);

    let avaliacao = "";

    if (nota) {
      const cheias = Math.round(nota);

      avaliacao = `
        <span class="avaliacao">
          <span class="estrelas">${"★".repeat(cheias)}${"☆".repeat(5 - cheias)}</span>
          ${String(nota).replace(".", ",")}
          ${numAvaliacoes ? `(${Number(numAvaliacoes).toLocaleString("pt-BR")})` : ""}
        </span>
      `;
    }

    valorItens += valor;
    quantidadeTotal += item.quantidade;

    lista.innerHTML += `

      <div class="item">

        <div class="capa">
          <img
            src="${imagem}"
            alt="Capa do livro ${item.livro.titulo}"
            onerror="this.onerror=null; this.src='IMG/livro-sem-capa.png'"
          >
        </div>

        <div class="dados-livro">

          <strong>
            ${item.livro.titulo}
          </strong>

          <small>
            ${item.livro.autor || ""}
          </small>

          <small>
            ${item.livro.categoria || ""}
          </small>

          ${avaliacao}

          <strong class="preco">
            R$ ${valor.toFixed(2).replace(".", ",")}
          </strong>

          <small>
            Qtd: ${item.quantidade}
          </small>

        </div>

      </div>

    `;
  });

  const frete = itens.length > 0 ? 9.9 : 0;

  quantidade.textContent = `(${quantidadeTotal} ${
    quantidadeTotal === 1 ? "item" : "itens"
  })`;

  subtotal.textContent = `R$ ${valorItens.toFixed(2).replace(".", ",")}`;

  total.textContent = `R$ ${(valorItens + frete).toFixed(2).replace(".", ",")}`;
}

document.addEventListener("DOMContentLoaded", montarResumoPedido);

function confirmarPix() {
  const confirmar = confirm(
    `Deseja confirmar o pagamento de R$ ${valorTotal.toFixed(2)}?`,
  );

  if (confirmar) {
    finalizarCompra();
  }
}

function mostrarDebito() {
  document.getElementById("pix").innerHTML = "";
  document.getElementById("credito").innerHTML = "";
  document.getElementById("debito").innerHTML = "";

  document.getElementById("debito").innerHTML = `
        <h2>Pagamento com Débito</h2>

        <p>Valor da Compra</p>
        <h3>R$ ${valorTotal.toFixed(2)}</h3>

        <p>Número do cartão:</p>
        <input 
        type="text" 
        id="numero-debito"
        placeholder="0000 0000 0000 0000"
        maxlength="19"
        oninput="formatarNumeroCartao(this)">

        <p>Nome:</p>
        <input 
        type="text" 
        id="nome-debito"
        placeholder="Nome completo"
        oninput="capitalizarNome(this)">

        <p>Validade:</p>
        <input 
        type="text" 
        id="validade-debito"
        maxlength="5"
        placeholder="MM/AA"
        oninput="formatarValidade(this)">

        <p>CVV:</p>
        <input 
        type="text" 
        id="cvv-debito"
        placeholder="123"
        maxlength="3"
        oninput="formatarCvv(this)">

        <button onclick="validarDebito()" class="botao-finalizar">
            Finalizar Compra
        </button>
    `;
}

function validarDebito() {
  const numero = document.getElementById("numero-debito").value;
  const nome = document.getElementById("nome-debito").value;
  const validade = document.getElementById("validade-debito").value;
  const cvv = document.getElementById("cvv-debito").value;
  const numeroEspacos = numero.replace(/\s/g, "");

  if (!/^[0-9]+$/.test(numeroEspacos) || numeroEspacos.length !== 16) {
    alert("O número está inválido");
    return;
  }

  if (!/^[A-Za-zÀ-ÿ ]+$/.test(nome)) {
    alert("O nome está invalido.");
    return;
  }

  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(validade)) {
    alert("Digite uma validade válida. Exemplo: 09/28.");
    return;
  }

  if (!/^[0-9]+$/.test(cvv) || cvv.length !== 3) {
    alert("O CVV deve ter 3 números.");
    return;
  }

  finalizarCompra();
}

function formatarValidade(campo) {
  campo.value = campo.value.replace(/\D/g, "");

  if (campo.value.length > 2) {
    campo.value = campo.value.substring(0, 2) + "/" + campo.value.substring(2);
  }
}

function formatarNumeroCartao(campo) {
  campo.value = campo.value.replace(/\D/g, "");

  if (campo.value.length > 16) {
    campo.value = campo.value.substring(0, 16);
  }
  campo.value = campo.value.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatarCvv(campo) {
  campo.value = campo.value.replace(/\D/g, "");

  if (campo.value.length > 3) {
    campo.value = campo.value.substring(0, 3);
  }
}

function mostrarCredito() {
  document.getElementById("pix").innerHTML = "";
  document.getElementById("credito").innerHTML = "";
  document.getElementById("debito").innerHTML = "";

  document.getElementById("credito").innerHTML = `
        <h2>Pagamento com Crédito</h2>

        <p>Valor da Compra</p>
        <h3>R$ ${valorTotal.toFixed(2)}</h3>

        <p>Número do cartão:</p>
        <input 
        type="text" 
        id="numero-credito"
        placeholder="0000 0000 0000 0000"
        maxlength="19"
        oninput="formatarNumeroCartao(this)">

        <p>Nome:</p>
        <input 
        type="text" 
        id="nome-credito"
        placeholder="Nome completo"
        oninput="capitalizarNome(this)">

        <p>Validade:</p>
        <input 
        type="text" 
        id="validade-credito"
        maxlength="5"
        placeholder="MM/AA"
        oninput="formatarValidade(this)">

        <p>CVV:</p>
        <input 
        type="text" 
        id="cvv-credito"
        placeholder="123"
        maxlength="3"
        oninput="formatarCvv(this)">

        <button onclick="validarCredito()" class="botao-finalizar">
            Finalizar Compra
        </button>
    `;
}

function validarCredito() {
  const numero = document.getElementById("numero-credito").value;
  const nome = document.getElementById("nome-credito").value;
  const validade = document.getElementById("validade-credito").value;
  const cvv = document.getElementById("cvv-credito").value;
  const numeroEspacos = numero.replace(/\s/g, "");

  if (!/^[0-9]+$/.test(numeroEspacos) || numeroEspacos.length !== 16) {
    alert("O número está inválido");
    return;
  }

  if (!/^[A-Za-zÀ-ÿ ]+$/.test(nome)) {
    alert("O nome está invalido.");
    return;
  }

  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(validade)) {
    alert("Digite uma validade válida. Exemplo: 09/28.");
    return;
  }

  if (!/^[0-9]+$/.test(cvv) || cvv.length !== 3) {
    alert("O CVV deve ter 3 números.");
    return;
  }

  finalizarCompra();
}

function finalizarCompra() {
  let carrinhoAtualizado = carrinho.filter((item) => {
    return !selecionados.includes(item.livro.id);
  });

  localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
  localStorage.removeItem("selecionados");
  alert("Pagamento realizado com sucesso");
  window.location.href = "index.html";
}

function capitalizarNome(campo) {
  campo.value = campo.value
    .toLowerCase()
    .replace(/\b\w/g, (letra) => letra.toUpperCase());
}

// =========================
// MÉTODO ESCOLHIDO FICA DESTACADO
// =========================

const botoesMetodo = document.querySelectorAll(".metodo");

botoesMetodo.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoesMetodo.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
  });
});

// Já abre com "Crédito" escolhido
const botaoCredito = document.querySelector('[data-metodo="credito"]');

if (botaoCredito) {
  botaoCredito.click();
}
