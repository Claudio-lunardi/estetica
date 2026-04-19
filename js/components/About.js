window.AboutComponent = {
  props: {
    profile: { type: Object, required: true }
  },
  template: `
    <section id="about" class="section">
      <div class="container about-grid">
        <div class="about-story card fade-up">
          <div class="section-heading" style="margin-bottom: 1rem;">
            <span class="section-kicker">Atendimento</span>
            <h2>Um espaco pensado para acolher e apresentar resultado de forma clara.</h2>
          </div>
          <p>
            {{ profile.name }} trabalha com foco em cuidado, apresentacao profissional e uma experiencia
            simples para quem chega pelo celular querendo entender o que esta disponivel.
          </p>
          <p style="margin-top: 1rem;">
            Em vez de um site poluido, a estrutura funciona como uma lista objetiva: cada servico
            abre com um resumo curto, fotos do procedimento e CTA direto para conversa.
          </p>
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
          <h3 style="margin-top: 1rem;">Diferenciais do atendimento</h3>
          <ul>
            <li>Avaliacao inicial para indicar o protocolo mais adequado.</li>
            <li>Apresentacao visual com imagens reais dos procedimentos.</li>
            <li>Fluxo simples para agendamento via WhatsApp e redes sociais.</li>
            <li>Navegacao priorizando leitura rapida, toque e decisao no smartphone.</li>
          </ul>
        </div>
      </div>
    </section>
  `
};
