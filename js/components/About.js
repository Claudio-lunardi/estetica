window.AboutComponent = {
  props: {
    profile: { type: Object, required: true }
  },
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <div class="section-heading fade-up">
          <span class="section-kicker">Atendimento</span>
          <h2>Uma experiencia mais delicada, clara e preparada para transformar interesse em conversa.</h2>
          <p>
            A proposta continua a mesma, mas com uma apresentacao mais premium e mais eficiente para quem chega pelo celular.
          </p>
        </div>

        <div class="about-grid">
          <div class="about-story card fade-up">
            <h3>O que a cliente encontra logo que entra</h3>
            <p class="about-story__lead">
              Um caminho curto entre descobrir o servico, confiar na apresentacao e chamar a profissional.
            </p>

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
            <div class="about-media-shell">
              <img
                class="about-media"
                :src="profile.aboutImage"
                alt="Joyce Arraiss realizando atendimento facial"
                width="1200"
                height="1600"
                loading="lazy"
              >
            </div>

            <div class="about-highlights__content">
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
