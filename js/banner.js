document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("bannerTrack");
    const slides = document.querySelectorAll(".banner-slide");

    const anterior = document.getElementById("bannerAnterior");
    const proximo = document.getElementById("bannerProximo");

    // Verifica se os elementos existem
    if (!track || slides.length === 0) {
        console.log("Carrossel não encontrado.");
        return;
    }

    let atual = 0;

    function mostrarBanner(numero) {

        if (numero >= slides.length) {
            atual = 0;
        } else if (numero < 0) {
            atual = slides.length - 1;
        } else {
            atual = numero;
        }

        track.style.transform =
            `translateX(-${atual * 33.333333}%)`;
    }

    // Botão anterior
    if (anterior) {
        anterior.addEventListener("click", function () {
            mostrarBanner(atual - 1);
        });
    }

    // Botão próximo
    if (proximo) {
        proximo.addEventListener("click", function () {
            mostrarBanner(atual + 1);
        });
    }

    // Troca automática
    setInterval(function () {
        mostrarBanner(atual + 1);
    }, 5000);

});