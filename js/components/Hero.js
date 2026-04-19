window.HeroComponent = {
  props: {
    profile: { type: Object, required: true }
  },
  computed: {
    whatsappLink() {
      return window.createWhatsAppLink(this.profile.whatsappNumber, this.profile.whatsappMessage);
    }
  },
  template: `
    <section id="top" class="hero">
      <div class="container hero__layout">
        <div class="hero__content card fade-up">
          <span class="section-kicker">Agenda rapida</span>
          <h1>Agende seu atendimento pelo WhatsApp.</h1>
          <p>
            Veja os principais servicos logo abaixo e fale direto com a Joyce para tirar duvidas ou marcar horario.
          </p>

          <div class="button-group hero__actions" style="margin-top: 1.25rem;">
            <a class="button" :href="whatsappLink" target="_blank" rel="noreferrer">
              Quero Agendar
            </a>
            <a class="button-secondary" href="#services">
              Ver Servicos
            </a>
          </div>

          <div class="hero__highlights">
            <span>Facial</span>
            <span>Corporal</span>
            <span>Sobrancelhas</span>
            <span>Olhar</span>
            <span>Maquiagem</span>
          </div>
        </div>

        <div class="hero__panel fade-up">
          <div class="hero__media card">
            <img
              :src="profile.heroImage"
              alt="Joyce Arraiss em retrato profissional"
              width="1080"
              height="1080"
              loading="eager"
              fetchpriority="high"
            >
          </div>

          <div class="hero__card card">
            <h2 style="margin: 0 0 0.6rem;">Atendimento com fotos reais</h2>
            <p class="muted">
              No celular o foco fica no agendamento e na lista de servicos. Em telas maiores, a foto reforca a identidade visual do espaco.
            </p>
            <ul class="pill-list" style="margin-top: 1rem;">
              <li>WhatsApp direto</li>
              <li>Servicos visiveis</li>
              <li>Prova visual</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
};
