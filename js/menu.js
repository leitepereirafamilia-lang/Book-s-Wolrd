/* =====================================================
   BOOK'S WORLD - MENU ÚNICO
   Este é o ÚNICO lugar onde o menu existe.
   Para mudar um link, edite aqui e vale para todas as páginas.
===================================================== */

(function () {
  const links = [
    { texto: "Início", href: "index.html" },
    { texto: "Gêneros", href: "generos.html" },
    { texto: "Autores", href: "autores.html" },
    { texto: "Promoções", href: "promocoes.html" },
    { texto: "Mais vendidos", href: "maisVendidos.html" },
  ];

  const linksDireita = [
    { texto: "Minha conta", href: "#" },
    { texto: "Meu carrinho", href: "carrinho.html" },
  ];

  function item(l) {
    return `<li><a href="${l.href}">${l.texto}</a></li>`;
  }

  const html = `
    <header class="menu-principal">
      <nav>
        <ul>
          <li class="logo">
            <a href="index.html">
              <img src="IMG/a_clean_transparent_background_logo_graphic_file_c.png" alt="Book's World" />
            </a>
          </li>

          ${links.map(item).join("")}

          <li class="pesquisa">
            <form class="barra-pesquisa" action="busca.html" method="get" role="search">
              <input type="search" name="q" placeholder="Buscar livros, autores..." aria-label="Buscar livros e autores" autocomplete="off" />
              <button type="submit" aria-label="Buscar">
                <svg viewBox="0 0 24 24" width="17" height="17">
                  <circle cx="11" cy="11" r="7" fill="none" stroke="#333" stroke-width="1.5" />
                  <line x1="16" y1="16" x2="21" y2="21" stroke="#333" stroke-width="1.5" />
                </svg>
              </button>
            </form>
          </li>

          ${linksDireita.map(item).join("")}
        </ul>
      </nav>
    </header>`;

  // O script fica logo depois do <body>, então o menu aparece na hora
  document.currentScript.insertAdjacentHTML("beforebegin", html);
})();
