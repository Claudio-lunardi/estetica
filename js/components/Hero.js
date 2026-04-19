window.HeroComponent = {
  props: {
    profile: { type: Object, required: true },
    serviceCategories: { type: Array, required: true }
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
          <span class="section-kicker">{{ profile.heroKicker }}</span>
          <h1>{{ profile.heroTitle }}</h1>
          <p>{{ profile.heroDescription }}</p>

          <div class="badge-row hero__badges">
            <span v-for="badge in profile.heroBadges" :key="badge" class="badge">
              {{ badge }}
            </span>
          </div>

          <div class="button-group hero__actions">
            <a class="button" :href="whatsappLink" target="_blank" rel="noreferrer">
              Agendar pelo WhatsApp
            </a>
            <a class="button-secondary" href="#services">
              Explorar servicos
            </a>
          </div>

          <div class="hero__facts">
            <article
              v-for="fact in profile.heroFacts"
              :key="fact.label"
              class="hero__fact"
            >
              <strong>{{ fact.label }}</strong>
              <span>{{ fact.value }}</span>
            </article>
          </div>
        </div>

        <div class="hero__visual fade-up">
          <div class="hero__media card">
            <img
              :src="profile.heroImage"
              alt="Joyce Arraiss em retrato profissional"
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

          <div class="hero__panel card">
            <div>
              <h2>Como funciona</h2>
              <p class="muted">
                O fluxo foi reorganizado para a cliente entender o essencial em poucos toques e seguir para o agendamento com mais seguranca.
              </p>
            </div>

            <div class="hero__category-strip">
              <span v-for="category in serviceCategories" :key="category">
                {{ category }}
              </span>
            </div>

            <ol class="hero__steps">
              <li
                v-for="(step, index) in profile.appointmentSteps"
                :key="step.title"
                class="hero__step"
              >
                <span class="hero__step-index">{{ index + 1 }}</span>
                <div class="hero__step-body">
                  <strong>{{ step.title }}</strong>
                  <p>{{ step.text }}</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  `
};
