window.ServicesComponent = {
  props: {
    profile: { type: Object, required: true },
    services: { type: Array, required: true },
    serviceCategories: { type: Array, required: true }
  },
  data() {
    return {
      activeIndex: null,
      photoIndexes: {},
      lightbox: {
        serviceIndex: null,
        photoIndex: 0
      }
    };
  },
  computed: {
    isLightboxOpen() {
      return this.lightbox.serviceIndex !== null;
    },
    lightboxPhotos() {
      if (this.lightbox.serviceIndex === null) {
        return [];
      }

      return this.services[this.lightbox.serviceIndex]?.photos || [];
    },
    activeLightboxPhoto() {
      return this.lightboxPhotos[this.lightbox.photoIndex] || null;
    }
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);

    if (this.detachLightboxTouch) {
      this.detachLightboxTouch();
    }
  },
  updated() {
    this.syncLightboxTouch();
  },
  methods: {
    isCategoryStart(index) {
      return index === 0 || this.services[index - 1].category !== this.services[index].category;
    },
    toggleService(index) {
      this.activeIndex = this.activeIndex === index ? null : index;

      if (this.activeIndex !== null && typeof this.photoIndexes[index] !== "number") {
        this.photoIndexes[index] = 0;
      }
    },
    currentPhotoIndex(index) {
      return typeof this.photoIndexes[index] === "number" ? this.photoIndexes[index] : 0;
    },
    currentPhoto(index) {
      const photos = this.services[index]?.photos || [];
      return photos[this.currentPhotoIndex(index)] || null;
    },
    nextPhoto(index) {
      const photos = this.services[index]?.photos || [];
      if (!photos.length) {
        return;
      }

      const nextIndex = (this.currentPhotoIndex(index) + 1) % photos.length;
      this.photoIndexes = { ...this.photoIndexes, [index]: nextIndex };
    },
    prevPhoto(index) {
      const photos = this.services[index]?.photos || [];
      if (!photos.length) {
        return;
      }

      const prevIndex = (this.currentPhotoIndex(index) - 1 + photos.length) % photos.length;
      this.photoIndexes = { ...this.photoIndexes, [index]: prevIndex };
    },
    setPhoto(index, photoIndex) {
      this.photoIndexes = { ...this.photoIndexes, [index]: photoIndex };
    },
    serviceWhatsAppLink(service) {
      const message = `Ola! Vi o servico ${service.title} no site e gostaria de mais informacoes.`;
      return window.createWhatsAppLink(this.profile.whatsappNumber, message);
    },
    openLightbox(serviceIndex, photoIndex) {
      this.lightbox = { serviceIndex, photoIndex };
      window.lockScroll(true);
      this.$nextTick(() => this.syncLightboxTouch());
    },
    closeLightbox() {
      this.lightbox = { serviceIndex: null, photoIndex: 0 };
      window.lockScroll(false);

      if (this.detachLightboxTouch) {
        this.detachLightboxTouch();
        this.detachLightboxTouch = null;
      }
    },
    nextLightboxPhoto() {
      if (!this.lightboxPhotos.length) {
        return;
      }

      this.lightbox = {
        ...this.lightbox,
        photoIndex: (this.lightbox.photoIndex + 1) % this.lightboxPhotos.length
      };
    },
    prevLightboxPhoto() {
      if (!this.lightboxPhotos.length) {
        return;
      }

      this.lightbox = {
        ...this.lightbox,
        photoIndex: (this.lightbox.photoIndex - 1 + this.lightboxPhotos.length) % this.lightboxPhotos.length
      };
    },
    syncLightboxTouch() {
      if (this.detachLightboxTouch) {
        this.detachLightboxTouch();
        this.detachLightboxTouch = null;
      }

      if (!this.isLightboxOpen || !window.attachLightboxTouch || !this.$refs.lightboxMedia) {
        return;
      }

      this.detachLightboxTouch = window.attachLightboxTouch(this.$refs.lightboxMedia, {
        onSwipeLeft: () => this.nextLightboxPhoto(),
        onSwipeRight: () => this.prevLightboxPhoto()
      });
    },
    handleKeydown(event) {
      if (!this.isLightboxOpen) {
        return;
      }

      if (event.key === "Escape") {
        this.closeLightbox();
      }

      if (event.key === "ArrowRight") {
        this.nextLightboxPhoto();
      }

      if (event.key === "ArrowLeft") {
        this.prevLightboxPhoto();
      }
    }
  },
  template: `
    <section id="services" class="section">
      <div class="container">
        <div class="section-heading fade-up">
          <span class="section-kicker">Servicos</span>
          <h2>Escolha o cuidado ideal para seu momento sem perder tempo com excesso de informacao.</h2>
          <p>
            Os protocolos seguem a mesma ideia do site original, mas com leitura mais clara, visual
            mais forte e CTAs melhores para converter no celular.
          </p>
        </div>

        <div class="services-overview card fade-up">
          <p class="services-overview__lead">
            Toque no servico, veja imagens reais, entenda a proposta e abra a conversa com uma mensagem pronta no WhatsApp.
          </p>

          <div class="services-overview__meta">
            <ul class="pill-list">
              <li v-for="category in serviceCategories" :key="category">{{ category }}</li>
            </ul>
            <p class="services-overview__hint">
              A organizacao por categoria ajuda a comparar opcoes mais rapido em telas pequenas.
            </p>
          </div>
        </div>

        <div class="services-accordion fade-up">
          <template
            v-for="(service, index) in services"
            :key="service.title"
          >
            <div v-if="isCategoryStart(index)" class="service-category-divider">
              <span class="service-category-divider__label">{{ service.category }}</span>
            </div>

            <article
              class="service-accordion card"
              :class="{ 'is-open': activeIndex === index }"
            >
            <button
              class="service-accordion__trigger"
              type="button"
              :aria-expanded="String(activeIndex === index)"
              :aria-controls="'service-panel-' + index"
              @click="toggleService(index)"
            >
              <span class="service-accordion__thumb">
                <img
                  :src="service.image"
                  :alt="service.alt"
                  width="80"
                  height="80"
                  loading="lazy"
                >
              </span>
              <span class="service-accordion__summary">
                <strong>{{ service.title }}</strong>
                <small>{{ service.summary }}</small>
              </span>
              <span class="service-accordion__icon" aria-hidden="true">+</span>
            </button>

            <div
              v-if="activeIndex === index"
              class="service-accordion__panel"
              :id="'service-panel-' + index"
            >
              <div v-if="service.photos && service.photos.length" class="service-accordion__gallery">
                <div class="service-accordion__gallery-top" :class="{ 'is-single': service.photos.length === 1 }">
                  <button
                    v-if="service.photos.length > 1"
                    class="icon-button service-accordion__gallery-nav"
                    type="button"
                    aria-label="Foto anterior"
                    @click="prevPhoto(index)"
                  >
                    <
                  </button>

                  <button
                    type="button"
                    class="service-accordion__gallery-frame"
                    :aria-label="'Ampliar foto de ' + service.title"
                    @click="openLightbox(index, currentPhotoIndex(index))"
                  >
                    <img
                      v-if="currentPhoto(index)"
                      :src="currentPhoto(index).src"
                      :alt="currentPhoto(index).alt"
                      width="320"
                      height="320"
                      loading="lazy"
                    >
                  </button>

                  <button
                    v-if="service.photos.length > 1"
                    class="icon-button service-accordion__gallery-nav"
                    type="button"
                    aria-label="Proxima foto"
                    @click="nextPhoto(index)"
                  >
                    >
                  </button>
                </div>

                <p v-if="currentPhoto(index)" class="service-accordion__gallery-caption muted">
                  {{ currentPhoto(index).caption }}
                </p>

                <div v-if="service.photos.length > 1" class="service-accordion__dots">
                  <button
                    v-for="(photo, photoIndex) in service.photos"
                    :key="photo.src"
                    type="button"
                    class="service-accordion__dot"
                    :class="{ 'is-active': currentPhotoIndex(index) === photoIndex }"
                    :aria-label="'Ver foto ' + (photoIndex + 1) + ' de ' + service.title"
                    @click="setPhoto(index, photoIndex)"
                  ></button>
                </div>
              </div>

              <div class="service-accordion__content">
                <span class="service-accordion__eyebrow">{{ service.category }}</span>
                <p>{{ service.description }}</p>

                <div class="service-accordion__tip">
                  <strong>Bom para lembrar</strong>
                  <p>{{ service.note }}</p>
                </div>
              </div>

              <ul class="pill-list">
                <li v-for="item in service.items" :key="item">{{ item }}</li>
              </ul>

              <div class="service-accordion__actions">
                <a
                  class="button service-accordion__cta"
                  :href="serviceWhatsAppLink(service)"
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero saber sobre {{ service.title }}
                </a>
                <p class="service-accordion__cta-note muted">
                  O botao ja abre a conversa com uma mensagem pronta para este servico.
                </p>
              </div>
            </div>
            </article>
          </template>
        </div>
      </div>

      <div
        v-if="isLightboxOpen && activeLightboxPhoto"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="activeLightboxPhoto.alt"
        @click.self="closeLightbox"
      >
        <div class="lightbox__dialog">
          <div ref="lightboxMedia" class="lightbox__media">
            <img :src="activeLightboxPhoto.src" :alt="activeLightboxPhoto.alt" width="960" height="1200">
          </div>
          <div class="lightbox__toolbar">
            <div>
              <strong>{{ services[lightbox.serviceIndex].title }}</strong>
              <p class="muted">{{ activeLightboxPhoto.caption }}</p>
            </div>
            <div class="lightbox__controls">
              <button class="icon-button" type="button" aria-label="Imagem anterior" @click="prevLightboxPhoto"><</button>
              <button class="icon-button" type="button" aria-label="Proxima imagem" @click="nextLightboxPhoto">></button>
              <button class="icon-button" type="button" aria-label="Fechar visualizacao" @click="closeLightbox">x</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
};
