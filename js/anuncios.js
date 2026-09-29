let bannerAtual = 0;
 
const bannerTrack = document.getElementById("bannerTrack");
const indicadores = document.querySelectorAll(".indicador");
 
const quantidadeBanners = 3;
 
 
/* =========================
   MUDAR BANNER
========================= */
 
function mudarBanner(direcao) {
 
    bannerAtual += direcao;
 
    if (bannerAtual >= quantidadeBanners) {
        bannerAtual = 0;
    }
 
    if (bannerAtual < 0) {
        bannerAtual = quantidadeBanners - 1;
    }
 
    atualizarBanner();
}
 
 
/* =========================
   IR PARA UM BANNER
========================= */
 
function irParaBanner(numero) {
 
    bannerAtual = numero;
 
    atualizarBanner();
}
 
 
/* =========================
   ATUALIZAR
========================= */
 
function atualizarBanner() {
 
    bannerTrack.style.transform =
        `translateX(-${bannerAtual * 100}%)`;
 
    indicadores.forEach((indicador, index) => {
 
        indicador.classList.remove("ativo");
 
        if (index === bannerAtual) {
            indicador.classList.add("ativo");
        }
 
    });
}
 
 
/* =========================
   TROCA AUTOMÁTICA
========================= */
 
setInterval(() => {
 
    mudarBanner(1);
 
}, 5000);