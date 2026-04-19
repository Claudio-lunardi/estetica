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
          <div class="hero__intro">
            <div class="hero__copy">
              <span class="section-kicker">{{ profile.heroKicker }}</span>
              <h1 v-html="profile.heroTitleHtml"></h1>
            </div>

            <div class="hero__mobile-media" aria-hidden="true">
              <img
                :src="profile.heroImage"
                alt=""
                width="1080"
                height="1080"
                loading="eager"
                fetchpriority="high"
              >
            </div>
          </div>

          <div class="button-group hero__actions">
            <a class="button" :href="whatsappLink" target="_blank" rel="noreferrer">
              Agendar agora
            </a>
            <a class="button-secondary" href="#services">
              Ver servicos
            </a>
          </div>
        </div>

        <div class="hero__visual fade-up">
          <div class="hero__media card">
            <img
              :src="profile.heroImage"
              alt="Joyce Arrais em retrato profissional"
              width="1080"
              height="1080"
              loading="eager"
              fetchpriority="high"
            >
            <div class="hero__floating hero__floating--top">
              <strong>Fotos reais</strong>
              <small>Mais confianca para decidir.</small>
            </div>
            <div class="hero__floating hero__floating--bottom">
              <strong>Agenda rapida</strong>
              <small>Conversa direta no WhatsApp.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};
