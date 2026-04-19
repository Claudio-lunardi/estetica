const appData = {
  profile: {
    name: "Espaco Joyce Arrais",
    logoSrc: "assets/brand/logo-ja-mark.png",
    heroImage: "img/services/perfil-joyce-uniforme-02.jpeg",
    aboutImage: "img/services/perfil-joyce-avaliacao-01.jpeg",
    whatsappNumber: "5511999187997",
    whatsappMessage: "Ola! Vi os servicos no site e gostaria de mais informacoes.",
    phoneRaw: "+5511999187997",
    phoneDisplay: "(11) 99918-7997",
    email: "joycearrais2001.ja@gmail.com",
    city: "Avenida Joao Fernandes da Silva, 495 sala 3, Vila Virginia",
    contactIntro: "Escolha o servico, veja os detalhes e fale direto com a Joyce no WhatsApp para tirar duvidas, alinhar o protocolo e agendar.",
    mapEmbedUrl: "https://www.google.com/maps?q=Avenida%20Joao%20Fernandes%20da%20Silva%2C%20495%20sala%203%2C%20Vila%20Virginia&output=embed",
    heroKicker: "Estetica, beleza e maquiagem",
    heroTitleHtml: "Sua <span class=\"hero__headline-accent\">beleza</span> com toque <span class=\"hero__headline-accent\">profissional</span>.",
    experiencePillars: [
      {
        title: "Leitura rapida",
        text: "A primeira tela mostra o valor da marca, os CTAs principais e o que a cliente pode esperar do atendimento."
      },
      {
        title: "Prova visual",
        text: "As fotos reais ajudam a comparar servicos e reforcam a identidade delicada do espaco."
      },
      {
        title: "Decisao sem atrito",
        text: "Os botoes de contato ficam sempre perto para transformar interesse em conversa com menos esforco."
      }
    ],
    differentials: [
      "Avaliacao inicial para indicar o protocolo mais adequado ao objetivo da cliente.",
      "Fluxo objetivo para quem chega pelo celular e quer decidir sem confusao.",
      "Fotos reais dos procedimentos e do atendimento para gerar mais confianca.",
      "Contato direto com a profissional para alinhar expectativa, cuidados e agenda."
    ],
    contactHighlights: [
      {
        label: "WhatsApp direto",
        value: "O caminho principal do site ja abre a conversa com uma mensagem pronta."
      },
      {
        label: "Atendimento individual",
        value: "A escolha do protocolo acontece com orientacao da profissional e mais contexto."
      },
      {
        label: "Localizacao integrada",
        value: "Endereco e mapa ficam no mesmo bloco para facilitar a chegada ao espaco."
      }
    ]
  },
  navigation: [
    { label: "Inicio", href: "#top" },
    { label: "Servicos", href: "#services" },
    { label: "Atendimento", href: "#about" },
    { label: "Contato", href: "#contact" }
  ],
  services: [
    {
      category: "Facial",
      title: "Limpeza de Pele",
      summary: "Limpeza profunda para remover impurezas, cravos e excesso de oleosidade.",
      image: "img/services/facial-tratamento-01.jpeg",
      alt: "Atendimento de limpeza de pele no espaco",
      description: "Servico voltado a higienizacao profunda da pele, normalmente com limpeza, esfoliacao, extracao e finalizacao calmante para deixar o rosto com aspecto mais limpo e confortavel.",
      note: "Boa opcao para quem sente a pele congestionada ou quer manter a rotina facial em dia.",
      items: ["Higienizacao", "Esfoliacao", "Extracao", "Mascara calmante"],
      photos: [
        { src: "img/services/facial-tratamento-01.jpeg", alt: "Limpeza de pele em atendimento", caption: "Etapa de limpeza de pele" },
        { src: "img/services/facial-mascara-01.jpeg", alt: "Mascara facial aplicada", caption: "Mascara calmante e finalizacao" },
        { src: "img/services/facial-mascara-02.jpeg", alt: "Finalizacao de cuidado facial", caption: "Finalizacao do cuidado facial" }
      ]
    },
    {
      category: "Facial",
      title: "Dermaplaning",
      summary: "Esfoliacao superficial para remover celulas mortas e pelos finos do rosto.",
      image: "img/services/facial-tratamento-02.jpeg",
      alt: "Procedimento facial com preparo de pele",
      description: "Procedimento cosmetico superficial feito com lamina especifica para retirar a camada mais externa de celulas mortas e os pelos finos, deixando a textura mais lisa e uniforme.",
      note: "Costuma interessar a quem busca mais luminosidade e melhor acabamento da maquiagem.",
      items: ["Esfoliacao superficial", "Pele mais lisa", "Acabamento uniforme"],
      photos: [
        { src: "img/services/facial-tratamento-02.jpeg", alt: "Preparacao da pele para procedimento facial", caption: "Preparacao da pele" },
        { src: "img/services/facial-tratamento-03.jpeg", alt: "Atendimento facial em cabine", caption: "Atendimento facial" }
      ]
    },
    {
      category: "Facial",
      title: "Black Peel",
      summary: "Peeling com foco em renovacao da pele e melhora visual da textura.",
      image: "img/services/facial-peeling-01.jpeg",
      alt: "Atendimento facial com foco em renovacao",
      description: "Servico de renovacao superficial usado para trabalhar textura, oleosidade e aspecto opaco da pele, com proposta de deixar o rosto com aparencia mais uniforme.",
      note: "Como o nome comercial pode variar de protocolo para protocolo, a indicacao final depende da avaliacao da profissional.",
      items: ["Renovacao da pele", "Textura", "Aspecto geral", "Oleosidade"],
      photos: [
        { src: "img/services/facial-peeling-01.jpeg", alt: "Atendimento de renovacao facial", caption: "Aplicacao do protocolo de peeling" },
        { src: "img/services/facial-mascara-04.jpeg", alt: "Etapa de cuidado e finalizacao", caption: "Etapa de cuidado e finalizacao" }
      ]
    },
    {
      category: "Facial",
      title: "Ozonioterapia Facial",
      summary: "Recurso complementar com ozonio integrado ao protocolo facial.",
      image: "img/services/facial-mascara-03.jpeg",
      alt: "Atendimento facial no espaco",
      description: "A ozonioterapia usa uma mistura de oxigenio e ozonio como pratica complementar. No facial, ela entra como recurso adicional dentro de um protocolo definido na avaliacao.",
      note: "O uso e a indicacao precisam ser ajustados de forma individual durante o atendimento.",
      items: ["Recurso complementar", "Protocolo facial", "Avaliacao previa"],
      photos: [
        { src: "img/services/facial-mascara-03.jpeg", alt: "Cabine de atendimento facial", caption: "Atendimento facial complementar" },
        { src: "img/services/facial-mascara-02.jpeg", alt: "Cuidado de pele em atendimento", caption: "Cuidado de pele em atendimento" }
      ]
    },
    {
      category: "Facial",
      title: "Hydra Gloss Lips",
      summary: "Tratamento labial com foco em hidratacao, brilho e melhora do ressecamento.",
      image: "img/services/hydra-gloss-lips-resultado-01.jpeg",
      alt: "Resultado de Hydra Gloss Lips",
      description: "Tecnica voltada a revitalizacao dos labios, normalmente com esfoliacao, ativos hidratantes e finalizacao com gloss para deixar a regiao mais macia e com brilho.",
      note: "Boa escolha para labios opacos, ressecados ou para quem quer um visual mais bem cuidado.",
      items: ["Hidratacao labial", "Brilho", "Maciez", "Revitalizacao"],
      photos: [
        { src: "img/services/hydra-gloss-lips-resultado-01.jpeg", alt: "Resultado de Hydra Gloss Lips", caption: "Acabamento com brilho e hidratacao" },
        { src: "img/services/hydra-gloss-lips-aplicacao-01.jpeg", alt: "Aplicacao do procedimento nos labios", caption: "Aplicacao do procedimento" },
        { src: "img/services/hydra-gloss-lips-arte-02.jpeg", alt: "Arte explicativa do Hydra Gloss Lips", caption: "Beneficios do procedimento" }
      ]
    },
    {
      category: "Corporal",
      title: "Drenagem Linfatica",
      summary: "Massagem suave para estimular o fluxo linfatico e trazer mais leveza corporal.",
      image: "img/services/corporal-massagem-01.jpeg",
      alt: "Atendimento corporal de drenagem",
      description: "Massagem de toque leve e ritmado, muito procurada para ajudar na sensacao de inchaco, retencao e peso corporal.",
      note: "Costuma ser buscada por quem quer mais conforto e leveza no dia a dia.",
      items: ["Toque suave", "Fluxo linfatico", "Sensacao de leveza"],
      photos: [
        { src: "img/services/corporal-massagem-01.jpeg", alt: "Atendimento corporal", caption: "Atendimento corporal" },
        { src: "img/services/corporal-massagem-02.jpeg", alt: "Joyce em procedimento corporal", caption: "Aplicacao corporal no espaco" }
      ]
    },
    {
      category: "Corporal",
      title: "Massagem Modeladora",
      summary: "Massagem corporal intensa com manobras mais profundas e dinamicas.",
      image: "img/services/corporal-massagem-03.jpeg",
      alt: "Joyce realizando procedimento corporal",
      description: "Massagem com manobras mais firmes e dinamicas, pensada para quem prefere um trabalho corporal mais intenso e com foco em contorno visual.",
      note: "Boa opcao para quem gosta de uma sessao corporal mais ativa e marcada.",
      items: ["Manobras firmes", "Trabalho corporal intenso", "Contorno visual"],
      photos: [
        { src: "img/services/corporal-massagem-03.jpeg", alt: "Procedimento corporal no espaco", caption: "Massagem corporal" },
        { src: "img/services/corporal-massagem-02.jpeg", alt: "Aplicacao corporal em cabine", caption: "Aplicacao em cabine" }
      ]
    },
    {
      category: "Corporal",
      title: "Ozonioterapia Corporal",
      summary: "Aplicacao complementar de ozonio em protocolo corporal.",
      image: "img/services/ozonioterapia-corporal-resultado-01.jpeg",
      alt: "Atendimento corporal complementar",
      description: "Versao corporal da ozonioterapia, usada como recurso complementar dentro de um protocolo personalizado conforme a necessidade avaliada.",
      note: "Os detalhes da sessao e do objetivo do atendimento sao definidos na avaliacao.",
      items: ["Recurso complementar", "Protocolo corporal", "Avaliacao profissional"],
      photos: [
        { src: "img/services/ozonioterapia-corporal-resultado-01.jpeg", alt: "Resultado de ozonioterapia corporal", caption: "Resultado do acompanhamento corporal" },
        { src: "img/services/corporal-massagem-01.jpeg", alt: "Protocolo corporal personalizado", caption: "Atendimento corporal personalizado" }
      ]
    },
    {
      category: "Corporal",
      title: "Ventosaterapia",
      summary: "Tecnica com ventosas e succao usada para aliviar tensao e rigidez muscular.",
      image: "img/services/corporal-massagem-02.jpeg",
      alt: "Atendimento corporal complementar",
      description: "Tecnica em que as ventosas criam succao na pele. E muito procurada para alivio de tensao, desconforto e sensacao de rigidez muscular.",
      note: "Depois da sessao podem aparecer marcas circulares temporarias na pele.",
      items: ["Succao com ventosas", "Relaxamento muscular", "Alivio de tensao"],
      photos: [
        { src: "img/services/corporal-massagem-02.jpeg", alt: "Atendimento complementar corporal", caption: "Atendimento corporal" },
        { src: "img/services/corporal-massagem-03.jpeg", alt: "Cabine de atendimento corporal", caption: "Cabine de atendimento corporal" }
      ]
    },
    {
      category: "Sobrancelhas",
      title: "Design de Sobrancelhas",
      summary: "Modelagem pensada a partir da simetria facial e do formato do rosto.",
      image: "img/services/sobrancelhas-close-01.jpeg",
      alt: "Resultado de design de sobrancelhas",
      description: "Servico de modelagem que organiza o desenho das sobrancelhas com base no rosto e na leitura de simetria, buscando um acabamento mais harmonioso.",
      note: "Ideal para quem quer valorizar a expressao sem pesar no visual.",
      items: ["Simetria facial", "Leitura do rosto", "Formato harmonioso"],
      photos: [
        { src: "img/services/sobrancelhas-close-01.jpeg", alt: "Design de sobrancelhas", caption: "Resultado em close" },
        { src: "img/services/sobrancelhas-procedimento-01.jpeg", alt: "Procedimento de sobrancelhas", caption: "Atendimento de sobrancelhas" }
      ]
    },
    {
      category: "Sobrancelhas",
      title: "Design com Henna",
      summary: "Design com coloracao temporaria para mais definicao e preenchimento visual.",
      image: "img/services/sobrancelhas-close-02.jpeg",
      alt: "Sobrancelhas com acabamento definido",
      description: "Une o design da sobrancelha a uma coloracao temporaria que marca levemente a pele e os fios para dar mais presenca e efeito de preenchimento.",
      note: "A intensidade e a duracao variam conforme a pele, a rotina e os cuidados apos o atendimento.",
      items: ["Desenho + coloracao", "Definicao visual", "Efeito de preenchimento"],
      photos: [
        { src: "img/services/sobrancelhas-close-02.jpeg", alt: "Definicao e acabamento", caption: "Definicao e acabamento" },
        { src: "img/services/sobrancelhas-procedimento-01.jpeg", alt: "Resultado final de sobrancelhas", caption: "Atendimento de sobrancelhas" }
      ]
    },
    {
      category: "Sobrancelhas",
      title: "Brow Lamination",
      summary: "Alinhamento dos fios para efeito mais cheio, levantado e definido.",
      image: "img/services/sobrancelhas-close-01.jpeg",
      alt: "Resultado de brow lamination",
      description: "Procedimento que alinha e reorganiza os fios da sobrancelha para criar um visual mais penteado, cheio e bem definido.",
      note: "Muito buscado por quem quer sobrancelhas com mais presenca e efeito disciplinado.",
      items: ["Fios alinhados", "Efeito mais cheio", "Definicao do desenho"],
      photos: [
        { src: "img/services/sobrancelhas-close-01.jpeg", alt: "Brow com efeito alinhado", caption: "Brow com efeito alinhado" },
        { src: "img/services/sobrancelhas-close-02.jpeg", alt: "Detalhe do acabamento da sobrancelha", caption: "Detalhe do acabamento" }
      ]
    },
    {
      category: "Olhar",
      title: "Lash Lift",
      summary: "Curvatura dos cilios naturais para efeito de olhar mais aberto.",
      image: "img/services/maquiagem-olhar-01.jpeg",
      alt: "Olhar em destaque",
      description: "Procedimento que curva e realinha os cilios naturais para criar um olhar mais aberto e um efeito mais evidente sem usar extensao.",
      note: "Boa alternativa para quem quer realce do olhar de forma leve e natural.",
      items: ["Curvatura dos cilios", "Olhar mais aberto", "Sem extensao"],
      photos: [
        { src: "img/services/maquiagem-olhar-01.jpeg", alt: "Olhar em destaque", caption: "Olhar em destaque" },
        { src: "img/services/sobrancelhas-close-02.jpeg", alt: "Detalhe do olhar", caption: "Detalhe do olhar" }
      ]
    },
    {
      category: "Maquiagem",
      title: "Maquiagem Profissional",
      summary: "Producao social para madrinha, debutante e outras ocasioes especiais.",
      image: "img/services/maquiagem-social-04.jpeg",
      alt: "Maquiagem profissional produzida por Joyce Arrais",
      description: "Maquiagem social com acabamento profissional pensada para valorizar o rosto, o estilo da cliente e a proposta do evento.",
      note: "Atende producoes para madrinha, debutante, ensaios e entre outros momentos especiais.",
      items: ["Acabamento profissional", "Eventos", "Madrinha", "Debutante", "Entre outros"],
      photos: [
        { src: "img/services/maquiagem-social-04.jpeg", alt: "Maquiagem social produzida no espaco", caption: "Maquiagem social" },
        { src: "img/services/maquiagem-social-05.jpeg", alt: "Maquiagem social para evento", caption: "Producao para evento" },
        { src: "img/services/maquiagem-social-06.jpeg", alt: "Acabamento glow", caption: "Acabamento glow" },
        { src: "img/services/maquiagem-social-01.jpeg", alt: "Maquiagem com foco no olhar", caption: "Destaque no olhar" }
      ]
    }
  ],
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/joycearraiss_estetica?igsh=NGdnOTh2ejMxOXht" },
    { label: "WhatsApp", href: "https://wa.me/5511999187997" }
  ]
};

const app = Vue.createApp({
  components: {
    "header-component": window.HeaderComponent,
    "hero-component": window.HeroComponent,
    "services-component": window.ServicesComponent,
    "about-component": window.AboutComponent,
    "contact-component": window.ContactComponent,
    "footer-component": window.FooterComponent,
    "whatsapp-button-component": window.WhatsAppButtonComponent
  },
  data() {
    return {
      ...appData,
      isMenuOpen: false
    };
  },
  mounted() {
    this.installEnhancements();

    if ("serviceWorker" in navigator) {
      const isLocalHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

      if (isLocalHost) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations.forEach((registration) => registration.unregister());
        });

        if (window.caches && typeof window.caches.keys === "function") {
          window.caches.keys().then((keys) => {
            keys.forEach((key) => window.caches.delete(key));
          });
        }
      } else {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("service-worker.js").catch(() => {});
        });
      }
    }
  },
  methods: {
    installEnhancements() {
      this.$nextTick(() => {
        window.setupRevealAnimations();
      });
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      window.lockScroll(this.isMenuOpen);
    },
    navigateTo(hash) {
      this.isMenuOpen = false;
      window.lockScroll(false);

      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  },
  template: `
    <div class="page-shell">
      <header-component
        :profile="profile"
        :navigation="navigation"
        :social-links="socialLinks"
        :is-menu-open="isMenuOpen"
        @toggle-menu="toggleMenu"
        @navigate="navigateTo"
      />

      <main>
        <hero-component :profile="profile" />
        <services-component :profile="profile" :services="services" />
        <about-component :profile="profile" />
        <contact-component :profile="profile" :social-links="socialLinks" />
      </main>

      <footer-component
        :profile="profile"
        :navigation="navigation"
        :social-links="socialLinks"
      />

      <whatsapp-button-component :profile="profile" />
      <div class="app-shell__spacer" aria-hidden="true"></div>
    </div>
  `
});

app.mount("#app");
