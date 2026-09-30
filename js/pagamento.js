function mostrarPix(){
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
        height: 200
    });

}

function copiarPix(){
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

carrinho.forEach(item => {
    if(selecionados.includes(item.livro.id)){
        valorTotal += item.livro.preco * item.quantidade;
    }
});

function confirmarPix(){
    const confirmar = confirm(
        `Deseja confirmar o pagamento de R$ ${valorTotal.toFixed(2)}?`
    );

    if(confirmar){
        finalizarCompra();
    }
    }


function mostrarDebito(){
    document.getElementById("pix").innerHTML = "";
    document.getElementById("credito").innerHTML = "";
    document.getElementById("debito").innerHTML = "";

    document.getElementById("debito").innerHTML=`
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
        oninput="formatarCvv()">

        <button onclick="validarDebito()" class="botao-finalizar">
            Finalizar Compra
        </button>
    `
}

function validarDebito(){
    const numero = document.getElementById("numero-debito").value;
    const nome = document.getElementById("nome-debito").value;
    const validade = document.getElementById("validade-debito").value;
    const cvv = document.getElementById("cvv-debito").value;
    const numeroEspacos = numero.replace(/\s/g, "");

    if(!/^[0-9]+$/.test(numeroEspacos) || numeroEspacos.length !== 16){
        alert("O número está inválido");
        return;
    }

    if(!/^[A-Za-zÀ-ÿ ]+$/.test(nome)){
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


}



function formatarValidade(campo) {
    campo.value = campo.value.replace(/\D/g, "");

    if (campo.value.length > 2) {
        campo.value =
            campo.value.substring(0, 2) + "/" +
            campo.value.substring(2);
    }
}

function formatarNumeroCartao(campo){
    campo.value = campo.value.replace(/\D/g, "");

    if(campo.value.length > 16){
        campo.value = campo.value.substring(0,16);
    }
    campo.value = campo.value.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatarCvv(campo){
    campo.value = campo.value.replace(/\D/g, "");

    if(campo.value.length > 3){
        campo.value = campo.value.substring(0, 3);
    }
}

function mostrarCredito(){
    document.getElementById("pix").innerHTML = "";
    document.getElementById("credito").innerHTML = "";
    document.getElementById("debito").innerHTML = "";
    
    document.getElementById("credito").innerHTML=`
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
        oninput="formatarCvv()">

        <button onclick="finalizarCompra()" class="botao-finalizar">
            Finalizar Compra
        </button>
    `
}

function validarDebito(){
    const numero = document.getElementById("numero-credito").value;
    const nome = document.getElementById("nome-credito").value;
    const validade = document.getElementById("validade-credito").value;
    const cvv = document.getElementById("cvv-credito").value;
    const numeroEspacos = numero.replace(/\s/g, "");

    if(!/^[0-9]+$/.test(numeroEspacos) || numeroEspacos.length !== 16){
        alert("O número está inválido");
        return;
    }

    if(!/^[A-Za-zÀ-ÿ ]+$/.test(nome)){
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


}

function finalizarCompra(){

    let carrinhoAtualizado = carrinho.filter(item => {
        return !selecionados.includes(item.livro.id);
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
    localStorage.removeItem("selecionados");
    alert("Pagamento realizado com sucesso")
    window.location.href = "index.html";
}

function capitalizarNome(campo){
    campo.value = campo.value
        .toLowerCase()
        .replace(/\b\w/g, letra => letra.toUpperCase());
}