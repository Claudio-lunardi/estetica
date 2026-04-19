window.WhatsAppButtonComponent = {
  props: {
    profile: { type: Object, required: true }
  },
  computed: {
    whatsappLink() {
      return window.createWhatsAppLink(this.profile.whatsappNumber, this.profile.whatsappMessage);
    }
  },
  template: `
    <a
      class="whatsapp-float"
      :href="whatsappLink"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <span class="sr-only">Falar no WhatsApp</span>
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.57 2 2.13 6.44 2.13 11.9c0 1.75.46 3.46 1.33 4.96L2 22l5.27-1.38a9.88 9.88 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9a9.86 9.86 0 0 0-2.89-7.02ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.13.82.84-3.06-.19-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.52 3.68-8.2 8.22-8.2a8.12 8.12 0 0 1 5.82 2.42 8.16 8.16 0 0 1 2.4 5.82c0 4.53-3.69 8.21-8.21 8.21Zm4.5-6.16c-.25-.12-1.47-.73-1.69-.82-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.98-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.65-1.24-1.46-1.39-1.7-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.76-1.85-.2-.47-.4-.41-.56-.41h-.47c-.17 0-.44.06-.67.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.36 1 2.53.12.16 1.72 2.64 4.17 3.7.58.25 1.03.4 1.38.51.58.18 1.11.15 1.53.09.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.08.14-1.18-.05-.1-.22-.16-.47-.28Z"/>
      </svg>
    </a>
  `
};
