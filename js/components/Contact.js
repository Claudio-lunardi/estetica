window.ContactComponent = {
  props: {
    profile: { type: Object, required: true },
    socialLinks: { type: Array, required: true }
  },
  computed: {
    whatsappLink() {
      return window.createWhatsAppLink(this.profile.whatsappNumber, this.profile.whatsappMessage);
    }
  },
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="section-heading fade-up">
          <span class="section-kicker">Contato</span>
          <h2>Agende com poucos toques e fale direto com o espaco.</h2>
          <p>
            O fluxo final continua simples: escolher o servico, abrir o WhatsApp e seguir a conversa com a Joyce.
          </p>
        </div>

        <div class="contact-grid">
          <div class="contact-card card fade-up">
            <span class="section-kicker">Agendamento rapido</span>
            <h3>Fale agora e alinhe o melhor atendimento para voce.</h3>
            <p>{{ profile.contactIntro }}</p>

            <div class="contact-actions">
              <a class="button" :href="whatsappLink" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a class="button-secondary" :href="'tel:' + profile.phoneRaw">
                Ligar Agora
              </a>
            </div>

            <div class="contact-highlights">
              <article
                v-for="item in profile.contactHighlights"
                :key="item.label"
                class="contact-highlight"
              >
                <strong>{{ item.label }}</strong>
                <p>{{ item.value }}</p>
              </article>
            </div>

            <div class="contact-details">
              <div class="contact-detail">
                <span>WhatsApp</span>
                <strong>{{ profile.phoneDisplay }}</strong>
              </div>
              <div class="contact-detail">
                <span>Email</span>
                <strong>{{ profile.email }}</strong>
              </div>
              <div class="contact-detail">
                <span>Endereco</span>
                <strong>{{ profile.city }}</strong>
              </div>
            </div>

            <div class="social-links">
              <a
                v-for="item in socialLinks"
                :key="item.label"
                class="button-secondary"
                :href="item.href"
                target="_blank"
                rel="noreferrer"
              >
                {{ item.label }}
              </a>
            </div>
          </div>

          <div class="contact-map card fade-up">
            <div class="contact-map__head">
              <strong>Onde fica o atendimento</strong>
              <p class="muted">{{ profile.city }}</p>
            </div>
            <iframe
              :src="profile.mapEmbedUrl"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Mapa do atendimento"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `
};
