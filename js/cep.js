const campoCep = document.getElementById("cep");
const mensagemCep = document.getElementById("mensagem-cep");

const camposEndereco = [
  "nome",
  "cep",
  "rua",
  "numero",
  "complemento",
  "bairro",
  "cidade",
  "estado",
  "telefone",
];

// Máscara + busca automática ao completar 8 dígitos
campoCep.addEventListener("input", () => {
  let cep = campoCep.value.replace(/\D/g, "").slice(0, 8);

  if (cep.length > 5) {
    cep = cep.slice(0, 5) + "-" + cep.slice(5);
  }

  campoCep.value = cep;

  if (cep.replace("-", "").length === 8) {
    buscarCep();
  } else {
    mensagemCep.textContent = "";
  }
});

async function buscarCep() {
  const cep = campoCep.value.replace(/\D/g, "");

  mensagemCep.textContent = "Buscando...";

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      mensagemCep.textContent = "CEP não encontrado.";
      return;
    }

    document.getElementById("rua").value = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("estado").value = dados.uf;

    mensagemCep.textContent = "";
    salvarEndereco();
    document.getElementById("numero").focus();
  } catch (erro) {
    mensagemCep.textContent = "Erro ao buscar o CEP. Tente novamente.";
  }
}

// Salva o endereço no localStorage (como você já faz com o carrinho)
function salvarEndereco() {
  const endereco = {};

  camposEndereco.forEach((id) => {
    endereco[id] = document.getElementById(id).value;
  });

  localStorage.setItem("endereco", JSON.stringify(endereco));
}

// Restaura o endereço salvo ao abrir a página
function carregarEndereco() {
  const endereco = JSON.parse(localStorage.getItem("endereco")) || {};

  camposEndereco.forEach((id) => {
    if (endereco[id]) {
      document.getElementById(id).value = endereco[id];
    }
  });
}

document
  .getElementById("form-entrega")
  .addEventListener("input", salvarEndereco);

carregarEndereco();
