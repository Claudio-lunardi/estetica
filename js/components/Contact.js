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
    <section id="contact" class="section">
      <div class="container">
        <div class="section-heading fade-up">
          <span class="section-kicker">Contato</span>
          <h2>Agende com poucos toques e fale direto com a clinica.</h2>
          <p>
            O fluxo aqui e direto: escolher o servico, abrir o WhatsApp e seguir a conversa com a profissional.
          </p>
        </div>

        <div class="contact-grid">
          <div class="contact-card card fade-up">
            <h3>Fale agora</h3>
            <p>{{ profile.contactIntro }}</p>

            <div class="contact-actions" style="margin-top: 1rem;">
              <a class="button" :href="whatsappLink" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a class="button-secondary" :href="'tel:' + profile.phoneRaw">
                Ligar Agora
              </a>
            </div>

            <ul class="pill-list" style="margin-top: 1rem;">
              <li>{{ profile.phoneDisplay }}</li>
              <li>{{ profile.email }}</li>
              <li>{{ profile.city }}</li>
            </ul>

            <div class="social-links" style="margin-top: 1rem;">
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
