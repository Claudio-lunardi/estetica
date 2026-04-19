window.FooterComponent = {
  props: {
    profile: { type: Object, required: true },
    navigation: { type: Array, required: true },
    socialLinks: { type: Array, required: true }
  },
  template: `
    <footer class="footer">
      <div class="container footer-grid card fade-up">
        <div>
          <h3>{{ profile.name }}</h3>
          <p class="muted">
            Estetica facial, corporal e maquiagem com identidade delicada, fotos reais e contato rapido pelo WhatsApp.
          </p>
        </div>

        <div>
          <h3>Navegacao</h3>
          <p class="footer-meta" v-for="item in navigation" :key="item.href">
            <a :href="item.href">{{ item.label }}</a>
          </p>
        </div>

        <div>
          <h3>Redes e suporte</h3>
          <p class="footer-meta" v-for="item in socialLinks" :key="item.label">
            <a :href="item.href" target="_blank" rel="noreferrer">{{ item.label }}</a>
          </p>
          <p class="footer-meta">{{ profile.phoneDisplay }}</p>
          <p class="footer-meta">{{ new Date().getFullYear() }} {{ profile.name }}</p>
        </div>
      </div>
    </footer>
  `
};
