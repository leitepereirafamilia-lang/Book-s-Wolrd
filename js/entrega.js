// =========================
// ENTREGA: RESUMO FIXO + EDIÇÃO SÓ AO CLICAR EM "ALTERAR DADOS"
// (precisa do cep.js carregado antes, por causa da função salvarEndereco)
// =========================

(function () {
  const resumo = document.getElementById("dados-entrega");
  const formEntrega = document.getElementById("form-entrega");
  const botaoAlterar = document.getElementById("botaoAlterar");
  const botaoSalvar = document.getElementById("botaoSalvarEntrega");
  const erro = document.getElementById("erro-entrega");

  const ICONE_PESSOA =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>';

  const ICONE_LOCAL =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>';

  const ICONE_TELEFONE =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>';

  // protege o texto digitado
  function esc(texto) {
    const div = document.createElement("div");
    div.textContent = texto || "";
    return div.innerHTML;
  }

  function lerEndereco() {
    try {
      return JSON.parse(localStorage.getItem("endereco")) || {};
    } catch (e) {
      return {};
    }
  }

  function enderecoCompleto(e) {
    return [
      "nome",
      "cep",
      "rua",
      "numero",
      "bairro",
      "cidade",
      "estado",
      "telefone",
    ].every((campo) => (e[campo] || "").trim() !== "");
  }

  // mostra a "telinha" fixa com os dados salvos
  function mostrarResumo() {
    const e = lerEndereco();

    if (!enderecoCompleto(e)) {
      resumo.innerHTML =
        '<p class="sem-endereco">Nenhum endereço de entrega salvo. Clique em <strong>Alterar dados</strong> para preencher.</p>';
    } else {
      const complemento = e.complemento ? " (" + esc(e.complemento) + ")" : "";

      resumo.innerHTML = `
        <div class="linha-entrega">
          ${ICONE_PESSOA}
          <div><strong>${esc(e.nome)}</strong></div>
        </div>

        <div class="linha-entrega">
          ${ICONE_LOCAL}
          <div>
            <strong>${esc(e.rua)}, ${esc(e.numero)}${complemento} - ${esc(e.bairro)}</strong>
            <span>${esc(e.cidade)} - ${esc(e.estado)} • ${esc(e.cep)}</span>
          </div>
        </div>

        <div class="linha-entrega">
          ${ICONE_TELEFONE}
          <span>${esc(e.telefone)}</span>
        </div>
      `;
    }

    formEntrega.classList.add("oculto");
    resumo.classList.remove("oculto");
    botaoAlterar.classList.remove("oculto");
  }

  // abre o formulário para digitar
  function abrirFormulario() {
    erro.textContent = "";

    resumo.classList.add("oculto");
    botaoAlterar.classList.add("oculto");
    formEntrega.classList.remove("oculto");

    document.getElementById("nome").focus();
  }

  function validar() {
    const valor = (id) => document.getElementById(id).value.trim();

    if (
      !valor("nome") ||
      !valor("rua") ||
      !valor("numero") ||
      !valor("bairro") ||
      !valor("cidade")
    ) {
      return "Preencha nome, rua, número, bairro e cidade.";
    }

    if (valor("cep").replace(/\D/g, "").length !== 8) {
      return "Digite um CEP válido.";
    }

    if (valor("estado").length !== 2) {
      return "Digite a UF com 2 letras. Exemplo: SP.";
    }

    if (valor("telefone").replace(/\D/g, "").length < 10) {
      return "Digite um telefone válido com DDD.";
    }

    return "";
  }

  botaoAlterar.addEventListener("click", abrirFormulario);

  botaoSalvar.addEventListener("click", function () {
    const mensagem = validar();

    if (mensagem) {
      erro.textContent = mensagem;
      return;
    }

    erro.textContent = "";

    salvarEndereco(); // vem do cep.js
    mostrarResumo();
  });

  mostrarResumo();
})();
