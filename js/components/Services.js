window.ServicesComponent = {
  props: {
    profile: { type: Object, required: true },
    services: { type: Array, required: true }
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
                  class="button button--whatsapp service-accordion__cta"
                  :href="serviceWhatsAppLink(service)"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="button__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.57 2 2.13 6.44 2.13 11.9c0 1.75.46 3.46 1.33 4.96L2 22l5.27-1.38a9.88 9.88 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9a9.86 9.86 0 0 0-2.89-7.02ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.06-.19-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.52 3.68-8.2 8.22-8.2a8.12 8.12 0 0 1 5.82 2.42 8.16 8.16 0 0 1 2.4 5.82c0 4.53-3.69 8.21-8.21 8.21Zm4.5-6.16c-.25-.12-1.47-.73-1.69-.82-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.98-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.65-1.24-1.46-1.39-1.7-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.85-.2-.47-.4-.41-.56-.41h-.47c-.17 0-.44.06-.67.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.36 1 2.53.12.16 1.72 2.64 4.17 3.7.58.25 1.03.4 1.38.51.58.18 1.11.15 1.53.09.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.08.14-1.18-.05-.1-.22-.16-.47-.28Z"/>
                    </svg>
                  </span>
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
