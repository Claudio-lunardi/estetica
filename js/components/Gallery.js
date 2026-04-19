window.GalleryComponent = {
  props: {
    images: { type: Array, required: true },
    activeIndex: { type: Number, required: true },
    isLightboxOpen: { type: Boolean, required: true }
  },
  emits: ["open", "close", "next", "prev"],
  computed: {
    activeImage() {
      return this.images[this.activeIndex] || null;
    }
  },
  mounted() {
    if (window.attachLightboxTouch && this.$refs.lightboxMedia) {
      this.detachTouch = window.attachLightboxTouch(this.$refs.lightboxMedia, {
        onSwipeLeft: () => this.$emit("next"),
        onSwipeRight: () => this.$emit("prev")
      });
    }
  },
  updated() {
    if (!this.isLightboxOpen || !window.attachLightboxTouch || !this.$refs.lightboxMedia) {
      return;
    }

    if (this.detachTouch) {
      this.detachTouch();
    }

    this.detachTouch = window.attachLightboxTouch(this.$refs.lightboxMedia, {
      onSwipeLeft: () => this.$emit("next"),
      onSwipeRight: () => this.$emit("prev")
    });
  },
  beforeUnmount() {
    if (this.detachTouch) {
      this.detachTouch();
    }
  },
  template: `
    <section id="gallery" class="section">
      <div class="container">
        <div class="section-heading fade-up">
          <span class="section-kicker">Galeria</span>
          <h2>Fotos reais dos atendimentos e dos resultados.</h2>
          <p>
            Toque em qualquer imagem para ampliar. A selecao abaixo usa os arquivos anexados
            e sustenta o site como vitrine visual dos servicos.
          </p>
        </div>

        <div class="gallery-grid">
          <article
            v-for="(image, index) in images"
            :key="image.src"
            class="gallery-card card fade-up"
          >
            <button
              type="button"
              class="gallery-card__button"
              @click="$emit('open', index)"
            >
              <div class="gallery-card__media">
                <div class="gallery-card__frame">
                  <img
                    :src="image.src"
                    :alt="image.alt"
                    width="640"
                    height="800"
                    loading="lazy"
                  >
                </div>
              </div>
              <div class="gallery-card__body">
                <h3>{{ image.title }}</h3>
                <p>{{ image.description }}</p>
              </div>
            </button>
          </article>
        </div>
      </div>

      <div
        v-if="isLightboxOpen && activeImage"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="activeImage.title"
        @click.self="$emit('close')"
      >
        <div class="lightbox__dialog">
          <div ref="lightboxMedia" class="lightbox__media">
            <img :src="activeImage.src" :alt="activeImage.alt" width="960" height="1200">
          </div>
          <div class="lightbox__toolbar">
            <div>
              <strong>{{ activeImage.title }}</strong>
              <p class="muted">{{ activeImage.description }}</p>
            </div>
            <div class="lightbox__controls">
              <button class="icon-button" type="button" aria-label="Imagem anterior" @click="$emit('prev')"><</button>
              <button class="icon-button" type="button" aria-label="Proxima imagem" @click="$emit('next')">></button>
              <button class="icon-button" type="button" aria-label="Fechar galeria" @click="$emit('close')">x</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};
