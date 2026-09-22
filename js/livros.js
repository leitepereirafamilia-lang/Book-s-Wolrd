const livros = [

    // =========================
    // FANTASIA
    // =========================

    {
        id: 1,
        titulo: "O Hobbit",
        autor: "J. R. R. Tolkien",
        categoria: "Fantasia",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 2,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        autor: "J. R. R. Tolkien",
        categoria: "Fantasia",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 3,
        titulo: "O Senhor dos Anéis: As Duas Torres",
        autor: "J. R. R. Tolkien",
        categoria: "Fantasia",
        preco: 59.90,
        maisVendido: false
    },
    {
        id: 4,
        titulo: "O Senhor dos Anéis: O Retorno do Rei",
        autor: "J. R. R. Tolkien",
        categoria: "Fantasia",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 5,
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling",
        categoria: "Fantasia",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 6,
        titulo: "Harry Potter e a Câmara Secreta",
        autor: "J. K. Rowling",
        categoria: "Fantasia",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 7,
        titulo: "Harry Potter e o Prisioneiro de Azkaban",
        autor: "J. K. Rowling",
        categoria: "Fantasia",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 8,
        titulo: "As Crônicas de Nárnia",
        autor: "C. S. Lewis",
        categoria: "Fantasia",
        preco: 69.90,
        maisVendido: true
    },
    {
        id: 9,
        titulo: "O Nome do Vento",
        autor: "Patrick Rothfuss",
        categoria: "Fantasia",
        preco: 54.90,
        maisVendido: false
    },
    {
        id: 10,
        titulo: "Eragon",
        autor: "Christopher Paolini",
        categoria: "Fantasia",
        preco: 42.90,
        maisVendido: false
    },
    {
        id: 11,
        titulo: "Mistborn: O Império Final",
        autor: "Brandon Sanderson",
        categoria: "Fantasia",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 12,
        titulo: "O Caminho dos Reis",
        autor: "Brandon Sanderson",
        categoria: "Fantasia",
        preco: 79.90,
        maisVendido: false
    },
    {
        id: 13,
        titulo: "A Bússola de Ouro",
        autor: "Philip Pullman",
        categoria: "Fantasia",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 14,
        titulo: "O Oceano no Fim do Caminho",
        autor: "Neil Gaiman",
        categoria: "Fantasia",
        preco: 42.90,
        maisVendido: true
    },
    {
        id: 15,
        titulo: "Deuses Americanos",
        autor: "Neil Gaiman",
        categoria: "Fantasia",
        preco: 59.90,
        maisVendido: false
    },

    // =========================
    // FICÇÃO CIENTÍFICA
    // =========================

    {
        id: 16,
        titulo: "Duna",
        autor: "Frank Herbert",
        categoria: "Ficção Científica",
        preco: 69.90,
        maisVendido: true
    },
    {
        id: 17,
        titulo: "Neuromancer",
        autor: "William Gibson",
        categoria: "Ficção Científica",
        preco: 49.90,
        maisVendido: false
    },
    {
        id: 18,
        titulo: "Eu, Robô",
        autor: "Isaac Asimov",
        categoria: "Ficção Científica",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 19,
        titulo: "Fundação",
        autor: "Isaac Asimov",
        categoria: "Ficção Científica",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 20,
        titulo: "2001: Uma Odisseia no Espaço",
        autor: "Arthur C. Clarke",
        categoria: "Ficção Científica",
        preco: 47.90,
        maisVendido: false
    },
    {
        id: 21,
        titulo: "Solaris",
        autor: "Stanislaw Lem",
        categoria: "Ficção Científica",
        preco: 42.90,
        maisVendido: false
    },
    {
        id: 22,
        titulo: "O Fim da Infância",
        autor: "Arthur C. Clarke",
        categoria: "Ficção Científica",
        preco: 45.90,
        maisVendido: false
    },
    {
        id: 23,
        titulo: "Admirável Mundo Novo",
        autor: "Aldous Huxley",
        categoria: "Ficção Científica",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 24,
        titulo: "A Máquina do Tempo",
        autor: "H. G. Wells",
        categoria: "Ficção Científica",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 25,
        titulo: "Guerra dos Mundos",
        autor: "H. G. Wells",
        categoria: "Ficção Científica",
        preco: 36.90,
        maisVendido: true
    },

    // =========================
    // DISTOPIA
    // =========================

    {
        id: 26,
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Distopia",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 27,
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        categoria: "Distopia",
        preco: 29.90,
        maisVendido: true
    },
    {
        id: 28,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        categoria: "Distopia",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 29,
        titulo: "Jogos Vorazes",
        autor: "Suzanne Collins",
        categoria: "Distopia",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 30,
        titulo: "A Esperança",
        autor: "Suzanne Collins",
        categoria: "Distopia",
        preco: 49.90,
        maisVendido: false
    },
    {
        id: 31,
        titulo: "Divergente",
        autor: "Veronica Roth",
        categoria: "Distopia",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 32,
        titulo: "O Conto da Aia",
        autor: "Margaret Atwood",
        categoria: "Distopia",
        preco: 54.90,
        maisVendido: true
    },
    {
        id: 33,
        titulo: "Nós",
        autor: "Ievguêni Zamiátin",
        categoria: "Distopia",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 34,
        titulo: "V de Vingança",
        autor: "Alan Moore",
        categoria: "Distopia",
        preco: 69.90,
        maisVendido: false
    },
    {
        id: 35,
        titulo: "Laranja Mecânica",
        autor: "Anthony Burgess",
        categoria: "Distopia",
        preco: 44.90,
        maisVendido: false
    },

    // =========================
    // ROMANCE
    // =========================

    {
        id: 36,
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        categoria: "Romance",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 37,
        titulo: "Razão e Sensibilidade",
        autor: "Jane Austen",
        categoria: "Romance",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 38,
        titulo: "Como Eu Era Antes de Você",
        autor: "Jojo Moyes",
        categoria: "Romance",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 39,
        titulo: "Um Dia",
        autor: "David Nicholls",
        categoria: "Romance",
        preco: 42.90,
        maisVendido: true
    },
    {
        id: 40,
        titulo: "A Hipótese do Amor",
        autor: "Ali Hazelwood",
        categoria: "Romance",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 41,
        titulo: "Melhor do que nos Filmes",
        autor: "Lynn Painter",
        categoria: "Romance",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 42,
        titulo: "O Amor Não é Óbvio",
        autor: "Elayne Baeta",
        categoria: "Romance",
        preco: 42.90,
        maisVendido: false
    },
    {
        id: 43,
        titulo: "Vermelho, Branco e Sangue Azul",
        autor: "Casey McQuiston",
        categoria: "Romance",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 44,
        titulo: "Eleanor & Park",
        autor: "Rainbow Rowell",
        categoria: "Romance",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 45,
        titulo: "Pessoas Normais",
        autor: "Sally Rooney",
        categoria: "Romance",
        preco: 44.90,
        maisVendido: true
    },

    // =========================
    // DRAMA
    // =========================

    {
        id: 46,
        titulo: "A Culpa é das Estrelas",
        autor: "John Green",
        categoria: "Drama",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 47,
        titulo: "Extraordinário",
        autor: "R. J. Palacio",
        categoria: "Drama",
        preco: 42.90,
        maisVendido: true
    },
    {
        id: 48,
        titulo: "O Menino do Pijama Listrado",
        autor: "John Boyne",
        categoria: "Drama",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 49,
        titulo: "As Vantagens de Ser Invisível",
        autor: "Stephen Chbosky",
        categoria: "Drama",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 50,
        titulo: "Flores para Algernon",
        autor: "Daniel Keyes",
        categoria: "Drama",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 51,
        titulo: "O Sol é Para Todos",
        autor: "Harper Lee",
        categoria: "Drama",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 52,
        titulo: "A Menina que Roubava Livros",
        autor: "Markus Zusak",
        categoria: "Drama",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 53,
        titulo: "Marley & Eu",
        autor: "John Grogan",
        categoria: "Drama",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 54,
        titulo: "O Caçador de Pipas",
        autor: "Khaled Hosseini",
        categoria: "Drama",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 55,
        titulo: "Mil Sóis Esplêndidos",
        autor: "Khaled Hosseini",
        categoria: "Drama",
        preco: 49.90,
        maisVendido: false
    },

    // =========================
    // AVENTURA
    // =========================

    {
        id: 56,
        titulo: "A Ilha do Tesouro",
        autor: "Robert Louis Stevenson",
        categoria: "Aventura",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 57,
        titulo: "Robinson Crusoé",
        autor: "Daniel Defoe",
        categoria: "Aventura",
        preco: 32.90,
        maisVendido: false
    },
    {
        id: 58,
        titulo: "Viagem ao Centro da Terra",
        autor: "Júlio Verne",
        categoria: "Aventura",
        preco: 36.90,
        maisVendido: true
    },
    {
        id: 59,
        titulo: "Vinte Mil Léguas Submarinas",
        autor: "Júlio Verne",
        categoria: "Aventura",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 60,
        titulo: "As Aventuras de Tom Sawyer",
        autor: "Mark Twain",
        categoria: "Aventura",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 61,
        titulo: "O Conde de Monte Cristo",
        autor: "Alexandre Dumas",
        categoria: "Aventura",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 62,
        titulo: "Os Três Mosqueteiros",
        autor: "Alexandre Dumas",
        categoria: "Aventura",
        preco: 49.90,
        maisVendido: false
    },
    {
        id: 63,
        titulo: "As Minas do Rei Salomão",
        autor: "H. Rider Haggard",
        categoria: "Aventura",
        preco: 37.90,
        maisVendido: false
    },
    {
        id: 64,
        titulo: "O Último dos Moicanos",
        autor: "James Fenimore Cooper",
        categoria: "Aventura",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 65,
        titulo: "O Mundo Perdido",
        autor: "Arthur Conan Doyle",
        categoria: "Aventura",
        preco: 39.90,
        maisVendido: true
    },

    // =========================
    // MISTÉRIO E SUSPENSE
    // =========================

    {
        id: 66,
        titulo: "O Assassinato no Expresso do Oriente",
        autor: "Agatha Christie",
        categoria: "Mistério",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 67,
        titulo: "E Não Sobrou Nenhum",
        autor: "Agatha Christie",
        categoria: "Mistério",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 68,
        titulo: "Morte no Nilo",
        autor: "Agatha Christie",
        categoria: "Mistério",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 69,
        titulo: "O Código Da Vinci",
        autor: "Dan Brown",
        categoria: "Suspense",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 70,
        titulo: "Anjos e Demônios",
        autor: "Dan Brown",
        categoria: "Suspense",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 71,
        titulo: "Garota Exemplar",
        autor: "Gillian Flynn",
        categoria: "Suspense",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 72,
        titulo: "A Mulher na Janela",
        autor: "A. J. Finn",
        categoria: "Suspense",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 73,
        titulo: "Antes de Dormir",
        autor: "S. J. Watson",
        categoria: "Suspense",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 74,
        titulo: "O Silêncio dos Inocentes",
        autor: "Thomas Harris",
        categoria: "Suspense",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 75,
        titulo: "A Paciente Silenciosa",
        autor: "Alex Michaelides",
        categoria: "Suspense",
        preco: 49.90,
        maisVendido: true
    },

    // =========================
    // TERROR
    // =========================

    {
        id: 76,
        titulo: "It: A Coisa",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 77,
        titulo: "O Iluminado",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 78,
        titulo: "Carrie",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 79,
        titulo: "Cemitério Maldito",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 80,
        titulo: "O Exorcista",
        autor: "William Peter Blatty",
        categoria: "Terror",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 81,
        titulo: "Drácula",
        autor: "Bram Stoker",
        categoria: "Terror",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 82,
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        categoria: "Terror",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 83,
        titulo: "O Chamado",
        autor: "Kōji Suzuki",
        categoria: "Terror",
        preco: 42.90,
        maisVendido: false
    },
    {
        id: 84,
        titulo: "A Assombração da Casa da Colina",
        autor: "Shirley Jackson",
        categoria: "Terror",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 85,
        titulo: "Coraline",
        autor: "Neil Gaiman",
        categoria: "Terror",
        preco: 39.90,
        maisVendido: true
    },

    // =========================
    // AUTOAJUDA
    // =========================

    {
        id: 86,
        titulo: "Hábitos Atômicos",
        autor: "James Clear",
        categoria: "Autoajuda",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 87,
        titulo: "O Poder do Hábito",
        autor: "Charles Duhigg",
        categoria: "Autoajuda",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 88,
        titulo: "Mindset",
        autor: "Carol S. Dweck",
        categoria: "Autoajuda",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 89,
        titulo: "Essencialismo",
        autor: "Greg McKeown",
        categoria: "Autoajuda",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 90,
        titulo: "A Coragem de Ser Imperfeito",
        autor: "Brené Brown",
        categoria: "Autoajuda",
        preco: 42.90,
        maisVendido: true
    },
    {
        id: 91,
        titulo: "O Poder do Agora",
        autor: "Eckhart Tolle",
        categoria: "Autoajuda",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 92,
        titulo: "Como Fazer Amigos e Influenciar Pessoas",
        autor: "Dale Carnegie",
        categoria: "Autoajuda",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 93,
        titulo: "Mais Esperto que o Diabo",
        autor: "Napoleon Hill",
        categoria: "Autoajuda",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 94,
        titulo: "Quem Pensa Enriquece",
        autor: "Napoleon Hill",
        categoria: "Autoajuda",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 95,
        titulo: "O Segredo",
        autor: "Rhonda Byrne",
        categoria: "Autoajuda",
        preco: 39.90,
        maisVendido: false
    },

    // =========================
    // HISTÓRIA
    // =========================

    {
        id: 96,
        titulo: "Sapiens",
        autor: "Yuval Noah Harari",
        categoria: "História",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 97,
        titulo: "Homo Deus",
        autor: "Yuval Noah Harari",
        categoria: "História",
        preco: 59.90,
        maisVendido: false
    },
    {
        id: 98,
        titulo: "21 Lições para o Século 21",
        autor: "Yuval Noah Harari",
        categoria: "História",
        preco: 54.90,
        maisVendido: true
    },
    {
        id: 99,
        titulo: "Uma Breve História do Tempo",
        autor: "Stephen Hawking",
        categoria: "História",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 100,
        titulo: "Armas, Germes e Aço",
        autor: "Jared Diamond",
        categoria: "História",
        preco: 59.90,
        maisVendido: false
    },

    // =========================
    // FILOSOFIA
    // =========================

    {
        id: 101,
        titulo: "O Banquete",
        autor: "Platão",
        categoria: "Filosofia",
        preco: 29.90,
        maisVendido: false
    },
    {
        id: 102,
        titulo: "A República",
        autor: "Platão",
        categoria: "Filosofia",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 103,
        titulo: "Meditações",
        autor: "Marco Aurélio",
        categoria: "Filosofia",
        preco: 32.90,
        maisVendido: true
    },
    {
        id: 104,
        titulo: "O Príncipe",
        autor: "Nicolau Maquiavel",
        categoria: "Filosofia",
        preco: 29.90,
        maisVendido: true
    },
    {
        id: 105,
        titulo: "Assim Falou Zaratustra",
        autor: "Friedrich Nietzsche",
        categoria: "Filosofia",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 106,
        titulo: "Além do Bem e do Mal",
        autor: "Friedrich Nietzsche",
        categoria: "Filosofia",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 107,
        titulo: "O Mundo de Sofia",
        autor: "Jostein Gaarder",
        categoria: "Filosofia",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 108,
        titulo: "O Mito de Sísifo",
        autor: "Albert Camus",
        categoria: "Filosofia",
        preco: 34.90,
        maisVendido: false
    },

    // =========================
    // POESIA
    // =========================

    {
        id: 109,
        titulo: "Alguma Poesia",
        autor: "Carlos Drummond de Andrade",
        categoria: "Poesia",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 110,
        titulo: "Toda Poesia",
        autor: "Paulo Leminski",
        categoria: "Poesia",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 111,
        titulo: "Sonetos",
        autor: "Luís de Camões",
        categoria: "Poesia",
        preco: 29.90,
        maisVendido: false
    },
    {
        id: 112,
        titulo: "Antologia Poética",
        autor: "Cecília Meireles",
        categoria: "Poesia",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 113,
        titulo: "Sentimento do Mundo",
        autor: "Carlos Drummond de Andrade",
        categoria: "Poesia",
        preco: 32.90,
        maisVendido: true
    },
    {
        id: 114,
        titulo: "Livro Sobre Nada",
        autor: "Manoel de Barros",
        categoria: "Poesia",
        preco: 39.90,
        maisVendido: false
    },

    // =========================
    // BIOGRAFIA
    // =========================

    {
        id: 115,
        titulo: "Steve Jobs",
        autor: "Walter Isaacson",
        categoria: "Biografia",
        preco: 69.90,
        maisVendido: true
    },
    {
        id: 116,
        titulo: "Einstein: Sua Vida, Seu Universo",
        autor: "Walter Isaacson",
        categoria: "Biografia",
        preco: 64.90,
        maisVendido: false
    },
    {
        id: 117,
        titulo: "Leonardo da Vinci",
        autor: "Walter Isaacson",
        categoria: "Biografia",
        preco: 69.90,
        maisVendido: true
    },
    {
        id: 118,
        titulo: "Pelé",
        autor: "Pelé",
        categoria: "Biografia",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 119,
        titulo: "Minha História",
        autor: "Michelle Obama",
        categoria: "Biografia",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 120,
        titulo: "Longa Caminhada até a Liberdade",
        autor: "Nelson Mandela",
        categoria: "Biografia",
        preco: 54.90,
        maisVendido: false
    },

    // =========================
    // PSICOLOGIA
    // =========================

    {
        id: 121,
        titulo: "Rápido e Devagar",
        autor: "Daniel Kahneman",
        categoria: "Psicologia",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 122,
        titulo: "O Homem que Confundiu Sua Mulher com um Chapéu",
        autor: "Oliver Sacks",
        categoria: "Psicologia",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 123,
        titulo: "Inteligência Emocional",
        autor: "Daniel Goleman",
        categoria: "Psicologia",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 124,
        titulo: "O Animal Social",
        autor: "Elliot Aronson",
        categoria: "Psicologia",
        preco: 59.90,
        maisVendido: false
    },
    {
        id: 125,
        titulo: "A Psicologia Financeira",
        autor: "Morgan Housel",
        categoria: "Psicologia",
        preco: 49.90,
        maisVendido: true
    },

    // =========================
    // NEGÓCIOS
    // =========================

    {
        id: 126,
        titulo: "Pai Rico, Pai Pobre",
        autor: "Robert Kiyosaki",
        categoria: "Negócios",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 127,
        titulo: "Do Mil ao Milhão",
        autor: "Thiago Nigro",
        categoria: "Negócios",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 128,
        titulo: "O Homem Mais Rico da Babilônia",
        autor: "George S. Clason",
        categoria: "Negócios",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 129,
        titulo: "A Startup Enxuta",
        autor: "Eric Ries",
        categoria: "Negócios",
        preco: 54.90,
        maisVendido: false
    },
    {
        id: 130,
        titulo: "De Zero a Um",
        autor: "Peter Thiel",
        categoria: "Negócios",
        preco: 49.90,
        maisVendido: false
    },
    {
        id: 131,
        titulo: "Empresas Feitas para Vencer",
        autor: "Jim Collins",
        categoria: "Negócios",
        preco: 54.90,
        maisVendido: false
    },

    // =========================
    // TECNOLOGIA
    // =========================

    {
        id: 132,
        titulo: "Código Limpo",
        autor: "Robert C. Martin",
        categoria: "Tecnologia",
        preco: 89.90,
        maisVendido: true
    },
    {
        id: 133,
        titulo: "O Programador Pragmático",
        autor: "Andrew Hunt e David Thomas",
        categoria: "Tecnologia",
        preco: 84.90,
        maisVendido: true
    },
    {
        id: 134,
        titulo: "Entendendo Algoritmos",
        autor: "Aditya Bhargava",
        categoria: "Tecnologia",
        preco: 69.90,
        maisVendido: true
    },
    {
        id: 135,
        titulo: "Use a Cabeça! Java",
        autor: "Kathy Sierra e Bert Bates",
        categoria: "Tecnologia",
        preco: 79.90,
        maisVendido: false
    },
    {
        id: 136,
        titulo: "JavaScript: O Guia Definitivo",
        autor: "David Flanagan",
        categoria: "Tecnologia",
        preco: 99.90,
        maisVendido: false
    },
    {
        id: 137,
        titulo: "Não Me Faça Pensar",
        autor: "Steve Krug",
        categoria: "Tecnologia",
        preco: 69.90,
        maisVendido: true
    },

    // =========================
    // INFANTOJUVENIL
    // =========================

    {
        id: 138,
        titulo: "Diário de um Banana",
        autor: "Jeff Kinney",
        categoria: "Infantojuvenil",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 139,
        titulo: "Percy Jackson e o Ladrão de Raios",
        autor: "Rick Riordan",
        categoria: "Infantojuvenil",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 140,
        titulo: "Percy Jackson e o Mar de Monstros",
        autor: "Rick Riordan",
        categoria: "Infantojuvenil",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 141,
        titulo: "Jogos Vorazes",
        autor: "Suzanne Collins",
        categoria: "Infantojuvenil",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 142,
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Infantojuvenil",
        preco: 29.90,
        maisVendido: true
    },
    {
        id: 143,
        titulo: "Desventuras em Série: Mau Começo",
        autor: "Lemony Snicket",
        categoria: "Infantojuvenil",
        preco: 34.90,
        maisVendido: false
    },

    // =========================
    // INFANTIL
    // =========================

    {
        id: 144,
        titulo: "O Menino Maluquinho",
        autor: "Ziraldo",
        categoria: "Infantil",
        preco: 29.90,
        maisVendido: true
    },
    {
        id: 145,
        titulo: "Marcelo, Marmelo, Martelo",
        autor: "Ruth Rocha",
        categoria: "Infantil",
        preco: 27.90,
        maisVendido: true
    },
    {
        id: 146,
        titulo: "A Bolsa Amarela",
        autor: "Lygia Bojunga",
        categoria: "Infantil",
        preco: 32.90,
        maisVendido: true
    },
    {
        id: 147,
        titulo: "Reinações de Narizinho",
        autor: "Monteiro Lobato",
        categoria: "Infantil",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 148,
        titulo: "O Sítio do Picapau Amarelo",
        autor: "Monteiro Lobato",
        categoria: "Infantil",
        preco: 39.90,
        maisVendido: false
    },

    // =========================
    // CLÁSSICOS
    // =========================

    {
        id: 149,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        categoria: "Clássico",
        preco: 29.90,
        maisVendido: true
    },
    {
        id: 150,
        titulo: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        categoria: "Clássico",
        preco: 29.90,
        maisVendido: true
    },
    {
        id: 151,
        titulo: "O Cortiço",
        autor: "Aluísio Azevedo",
        categoria: "Clássico",
        preco: 29.90,
        maisVendido: false
    },
    {
        id: 152,
        titulo: "Iracema",
        autor: "José de Alencar",
        categoria: "Clássico",
        preco: 27.90,
        maisVendido: false
    },
    {
        id: 153,
        titulo: "Grande Sertão: Veredas",
        autor: "João Guimarães Rosa",
        categoria: "Clássico",
        preco: 49.90,
        maisVendido: false
    },
    {
        id: 154,
        titulo: "A Moreninha",
        autor: "Joaquim Manuel de Macedo",
        categoria: "Clássico",
        preco: 27.90,
        maisVendido: false
    },
    {
        id: 155,
        titulo: "Os Miseráveis",
        autor: "Victor Hugo",
        categoria: "Clássico",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 156,
        titulo: "O Retrato de Dorian Gray",
        autor: "Oscar Wilde",
        categoria: "Clássico",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 157,
        titulo: "Crime e Castigo",
        autor: "Fiódor Dostoiévski",
        categoria: "Clássico",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 158,
        titulo: "Anna Kariênina",
        autor: "Liev Tolstói",
        categoria: "Clássico",
        preco: 54.90,
        maisVendido: false
    },

    // =========================
    // COMÉDIA
    // =========================

    {
        id: 159,
        titulo: "O Guia do Mochileiro das Galáxias",
        autor: "Douglas Adams",
        categoria: "Comédia",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 160,
        titulo: "O Restaurante no Fim do Universo",
        autor: "Douglas Adams",
        categoria: "Comédia",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 161,
        titulo: "As Mentiras que os Homens Contam",
        autor: "Luis Fernando Verissimo",
        categoria: "Comédia",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 162,
        titulo: "Comédias para se Ler na Escola",
        autor: "Luis Fernando Verissimo",
        categoria: "Comédia",
        preco: 32.90,
        maisVendido: false
    },
    {
        id: 163,
        titulo: "O Auto da Compadecida",
        autor: "Ariano Suassuna",
        categoria: "Comédia",
        preco: 34.90,
        maisVendido: true
    },

    // =========================
    // MITOLOGIA
    // =========================

    {
        id: 164,
        titulo: "Mitologia Nórdica",
        autor: "Neil Gaiman",
        categoria: "Mitologia",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 165,
        titulo: "Mitos Gregos",
        autor: "Robert Graves",
        categoria: "Mitologia",
        preco: 54.90,
        maisVendido: false
    },
    {
        id: 166,
        titulo: "O Livro da Mitologia",
        autor: "Thomas Bulfinch",
        categoria: "Mitologia",
        preco: 49.90,
        maisVendido: false
    },
    {
        id: 167,
        titulo: "Percy Jackson e os Deuses Gregos",
        autor: "Rick Riordan",
        categoria: "Mitologia",
        preco: 42.90,
        maisVendido: true
    },
    {
        id: 168,
        titulo: "Percy Jackson e os Heróis Gregos",
        autor: "Rick Riordan",
        categoria: "Mitologia",
        preco: 42.90,
        maisVendido: false
    },

    // =========================
    // CONTOS
    // =========================

    {
        id: 169,
        titulo: "Contos de Fadas",
        autor: "Irmãos Grimm",
        categoria: "Contos",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 170,
        titulo: "Contos",
        autor: "Edgar Allan Poe",
        categoria: "Contos",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 171,
        titulo: "Primeiras Estórias",
        autor: "João Guimarães Rosa",
        categoria: "Contos",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 172,
        titulo: "Laços de Família",
        autor: "Clarice Lispector",
        categoria: "Contos",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 173,
        titulo: "Felicidade Clandestina",
        autor: "Clarice Lispector",
        categoria: "Contos",
        preco: 32.90,
        maisVendido: false
    },

    // =========================
    // POLICIAL
    // =========================

    {
        id: 174,
        titulo: "Sherlock Holmes: Um Estudo em Vermelho",
        autor: "Arthur Conan Doyle",
        categoria: "Policial",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 175,
        titulo: "O Cão dos Baskervilles",
        autor: "Arthur Conan Doyle",
        categoria: "Policial",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 176,
        titulo: "O Vale do Medo",
        autor: "Arthur Conan Doyle",
        categoria: "Policial",
        preco: 37.90,
        maisVendido: false
    },
    {
        id: 177,
        titulo: "O Misterioso Caso de Styles",
        autor: "Agatha Christie",
        categoria: "Policial",
        preco: 37.90,
        maisVendido: false
    },
    {
        id: 178,
        titulo: "Os Crimes ABC",
        autor: "Agatha Christie",
        categoria: "Policial",
        preco: 39.90,
        maisVendido: true
    },

    // =========================
    // EDUCAÇÃO
    // =========================

    {
        id: 179,
        titulo: "Pedagogia da Autonomia",
        autor: "Paulo Freire",
        categoria: "Educação",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 180,
        titulo: "Educação como Prática da Liberdade",
        autor: "Paulo Freire",
        categoria: "Educação",
        preco: 32.90,
        maisVendido: false
    },
    {
        id: 181,
        titulo: "O Cérebro da Criança",
        autor: "Daniel J. Siegel e Tina Payne Bryson",
        categoria: "Educação",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 182,
        titulo: "Aprendendo a Aprender",
        autor: "Barbara Oakley",
        categoria: "Educação",
        preco: 39.90,
        maisVendido: true
    },

    // =========================
    // CRÔNICAS
    // =========================

    {
        id: 183,
        titulo: "A Vida Como Ela É",
        autor: "Nelson Rodrigues",
        categoria: "Crônicas",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 184,
        titulo: "Com o Mar por Testemunha",
        autor: "Rubem Braga",
        categoria: "Crônicas",
        preco: 32.90,
        maisVendido: false
    },
    {
        id: 185,
        titulo: "Para Gostar de Ler",
        autor: "Carlos Drummond de Andrade",
        categoria: "Crônicas",
        preco: 29.90,
        maisVendido: true
    },
    {
        id: 186,
        titulo: "A Descoberta do Mundo",
        autor: "Clarice Lispector",
        categoria: "Crônicas",
        preco: 44.90,
        maisVendido: true
    },

    // =========================
    // DESENVOLVIMENTO PESSOAL
    // =========================

    {
        id: 187,
        titulo: "12 Regras para a Vida",
        autor: "Jordan B. Peterson",
        categoria: "Desenvolvimento Pessoal",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 188,
        titulo: "O Jeito Harvard de Ser Feliz",
        autor: "Shawn Achor",
        categoria: "Desenvolvimento Pessoal",
        preco: 42.90,
        maisVendido: false
    },
    {
        id: 189,
        titulo: "A Sutil Arte de Ligar o F*da-se",
        autor: "Mark Manson",
        categoria: "Desenvolvimento Pessoal",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 190,
        titulo: "A Coragem de Não Agradar",
        autor: "Ichiro Kishimi e Fumitake Koga",
        categoria: "Desenvolvimento Pessoal",
        preco: 44.90,
        maisVendido: true
    },

    // =========================
    // FICÇÃO
    // =========================

    {
        id: 191,
        titulo: "O Grande Gatsby",
        autor: "F. Scott Fitzgerald",
        categoria: "Ficção",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 192,
        titulo: "Cem Anos de Solidão",
        autor: "Gabriel García Márquez",
        categoria: "Ficção",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 193,
        titulo: "O Amor nos Tempos do Cólera",
        autor: "Gabriel García Márquez",
        categoria: "Ficção",
        preco: 49.90,
        maisVendido: false
    },
    {
        id: 194,
        titulo: "O Velho e o Mar",
        autor: "Ernest Hemingway",
        categoria: "Ficção",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 195,
        titulo: "A Metamorfose",
        autor: "Franz Kafka",
        categoria: "Ficção",
        preco: 29.90,
        maisVendido: true
    },
    {
        id: 196,
        titulo: "O Estrangeiro",
        autor: "Albert Camus",
        categoria: "Ficção",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 197,
        titulo: "Ensaio Sobre a Cegueira",
        autor: "José Saramago",
        categoria: "Ficção",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 198,
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        categoria: "Ficção",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 199,
        titulo: "Veronika Decide Morrer",
        autor: "Paulo Coelho",
        categoria: "Ficção",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 200,
        titulo: "A Insustentável Leveza do Ser",
        autor: "Milan Kundera",
        categoria: "Ficção",
        preco: 44.90,
        maisVendido: false
    },

    // =========================
    // MAIS FANTASIA
    // =========================

    {
        id: 201,
        titulo: "O Aprendiz de Assassino",
        autor: "Robin Hobb",
        categoria: "Fantasia",
        preco: 54.90,
        maisVendido: false
    },
    {
        id: 202,
        titulo: "A Rainha Vermelha",
        autor: "Victoria Aveyard",
        categoria: "Fantasia",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 203,
        titulo: "Cidade dos Ossos",
        autor: "Cassandra Clare",
        categoria: "Fantasia",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 204,
        titulo: "Sombra e Ossos",
        autor: "Leigh Bardugo",
        categoria: "Fantasia",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 205,
        titulo: "Seis de Corvos",
        autor: "Leigh Bardugo",
        categoria: "Fantasia",
        preco: 49.90,
        maisVendido: true
    },

    // =========================
    // MAIS ROMANCE
    // =========================

    {
        id: 206,
        titulo: "É Assim que Acaba",
        autor: "Colleen Hoover",
        categoria: "Romance",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 207,
        titulo: "É Assim que Começa",
        autor: "Colleen Hoover",
        categoria: "Romance",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 208,
        titulo: "Todas as Suas Imperfeições",
        autor: "Colleen Hoover",
        categoria: "Romance",
        preco: 49.90,
        maisVendido: false
    },
    {
        id: 209,
        titulo: "Teto para Dois",
        autor: "Beth O'Leary",
        categoria: "Romance",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 210,
        titulo: "Amor & Gelato",
        autor: "Jenna Evans Welch",
        categoria: "Romance",
        preco: 42.90,
        maisVendido: false
    },

    // =========================
    // MAIS SUSPENSE
    // =========================

    {
        id: 211,
        titulo: "Verity",
        autor: "Colleen Hoover",
        categoria: "Suspense",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 212,
        titulo: "O Homem de Giz",
        autor: "C. J. Tudor",
        categoria: "Suspense",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 213,
        titulo: "A Corrente",
        autor: "Adrian McKinty",
        categoria: "Suspense",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 214,
        titulo: "A Última Festa",
        autor: "Lucy Foley",
        categoria: "Suspense",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 215,
        titulo: "A Lista de Convidados",
        autor: "Lucy Foley",
        categoria: "Suspense",
        preco: 49.90,
        maisVendido: true
    },

    // =========================
    // MAIS AVENTURA
    // =========================

    {
        id: 216,
        titulo: "O Chamado Selvagem",
        autor: "Jack London",
        categoria: "Aventura",
        preco: 34.90,
        maisVendido: true
    },
    {
        id: 217,
        titulo: "Caninos Brancos",
        autor: "Jack London",
        categoria: "Aventura",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 218,
        titulo: "Moby Dick",
        autor: "Herman Melville",
        categoria: "Aventura",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 219,
        titulo: "As Viagens de Gulliver",
        autor: "Jonathan Swift",
        categoria: "Aventura",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 220,
        titulo: "A Volta ao Mundo em 80 Dias",
        autor: "Júlio Verne",
        categoria: "Aventura",
        preco: 39.90,
        maisVendido: true
    },

    // =========================
    // MAIS TERROR
    // =========================

    {
        id: 221,
        titulo: "Doutor Sono",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 54.90,
        maisVendido: true
    },
    {
        id: 222,
        titulo: "Misery",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 223,
        titulo: "O Nevoeiro",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 224,
        titulo: "A Dança da Morte",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 59.90,
        maisVendido: false
    },
    {
        id: 225,
        titulo: "Salem",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 49.90,
        maisVendido: true
    },

    // =========================
    // MAIS FICÇÃO CIENTÍFICA
    // =========================

    {
        id: 226,
        titulo: "O Homem do Castelo Alto",
        autor: "Philip K. Dick",
        categoria: "Ficção Científica",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 227,
        titulo: "Androides Sonham com Ovelhas Elétricas?",
        autor: "Philip K. Dick",
        categoria: "Ficção Científica",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 228,
        titulo: "O Problema dos Três Corpos",
        autor: "Cixin Liu",
        categoria: "Ficção Científica",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 229,
        titulo: "Eu, Robô",
        autor: "Isaac Asimov",
        categoria: "Ficção Científica",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 230,
        titulo: "O Marciano",
        autor: "Andy Weir",
        categoria: "Ficção Científica",
        preco: 49.90,
        maisVendido: true
    },

    // =========================
    // MAIS CLÁSSICOS
    // =========================

    {
        id: 231,
        titulo: "Jane Eyre",
        autor: "Charlotte Brontë",
        categoria: "Clássico",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 232,
        titulo: "O Morro dos Ventos Uivantes",
        autor: "Emily Brontë",
        categoria: "Clássico",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 233,
        titulo: "A Divina Comédia",
        autor: "Dante Alighieri",
        categoria: "Clássico",
        preco: 49.90,
        maisVendido: false
    },
    {
        id: 234,
        titulo: "Fausto",
        autor: "Goethe",
        categoria: "Clássico",
        preco: 39.90,
        maisVendido: false
    },
    {
        id: 235,
        titulo: "Odisseia",
        autor: "Homero",
        categoria: "Clássico",
        preco: 39.90,
        maisVendido: true
    },

    // =========================
    // MAIS AUTOAJUDA
    // =========================

    {
        id: 236,
        titulo: "O Milagre da Manhã",
        autor: "Hal Elrod",
        categoria: "Autoajuda",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 237,
        titulo: "A Única Coisa",
        autor: "Gary Keller e Jay Papasan",
        categoria: "Autoajuda",
        preco: 44.90,
        maisVendido: false
    },
    {
        id: 238,
        titulo: "Trabalhe 4 Horas por Semana",
        autor: "Timothy Ferriss",
        categoria: "Autoajuda",
        preco: 49.90,
        maisVendido: true
    },
    {
        id: 239,
        titulo: "Comece pelo Porquê",
        autor: "Simon Sinek",
        categoria: "Autoajuda",
        preco: 44.90,
        maisVendido: true
    },
    {
        id: 240,
        titulo: "Roube como um Artista",
        autor: "Austin Kleon",
        categoria: "Autoajuda",
        preco: 39.90,
        maisVendido: false
    },

    // =========================
    // MAIS BIOGRAFIAS
    // =========================

    {
        id: 241,
        titulo: "Ayrton Senna: Uma Lenda a Toda Velocidade",
        autor: "Christopher Hilton",
        categoria: "Biografia",
        preco: 59.90,
        maisVendido: true
    },
    {
        id: 242,
        titulo: "Elon Musk",
        autor: "Walter Isaacson",
        categoria: "Biografia",
        preco: 79.90,
        maisVendido: true
    },
    {
        id: 243,
        titulo: "Frida: A Biografia",
        autor: "Hayden Herrera",
        categoria: "Biografia",
        preco: 59.90,
        maisVendido: false
    },
    {
        id: 244,
        titulo: "Churchill",
        autor: "Andrew Roberts",
        categoria: "Biografia",
        preco: 69.90,
        maisVendido: false
    },
    {
        id: 245,
        titulo: "Napoleão",
        autor: "Andrew Roberts",
        categoria: "Biografia",
        preco: 69.90,
        maisVendido: true
    },

    // =========================
    // MAIS POESIA
    // =========================

    {
        id: 246,
        titulo: "Poemas Escolhidos",
        autor: "Fernando Pessoa",
        categoria: "Poesia",
        preco: 39.90,
        maisVendido: true
    },
    {
        id: 247,
        titulo: "Mensagem",
        autor: "Fernando Pessoa",
        categoria: "Poesia",
        preco: 29.90,
        maisVendido: true
    },
    {
        id: 248,
        titulo: "Claro Enigma",
        autor: "Carlos Drummond de Andrade",
        categoria: "Poesia",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 249,
        titulo: "Mar Absoluto",
        autor: "Cecília Meireles",
        categoria: "Poesia",
        preco: 34.90,
        maisVendido: false
    },
    {
        id: 250,
        titulo: "Poemas",
        autor: "Manuel Bandeira",
        categoria: "Poesia",
        preco: 32.90,
        maisVendido: true
    }

];