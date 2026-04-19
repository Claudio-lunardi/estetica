window.AboutComponent = {
  props: {
    profile: { type: Object, required: true }
  },
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-story card fade-up">
            <span class="section-kicker">Atendimento</span>
            <h3>Atendimento claro e direto.</h3>

            <div class="about-process">
              <article
                v-for="pillar in profile.experiencePillars"
                :key="pillar.title"
                class="about-step"
              >
                <div class="about-step__body">
                  <strong>{{ pillar.title }}</strong>
                  <p>{{ pillar.text }}</p>
                </div>
              </article>
            </div>
          </div>

          <div class="about-highlights card fade-up">
            <div class="about-highlights__content">
              <span class="section-kicker">Diferenciais</span>
              <h3>Diferenciais do atendimento</h3>
              <ul>
                <li v-for="item in profile.differentials" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};
