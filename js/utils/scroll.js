window.createWhatsAppLink = function createWhatsAppLink(phone, message) {
  const digits = String(phone || "").replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message || "Ola! Gostaria de agendar uma consulta.");
  return `https://wa.me/${digits}?text=${encodedMessage}`;
};

window.setupRevealAnimations = function setupRevealAnimations() {
  const items = document.querySelectorAll(".fade-up");
  if (!items.length || typeof IntersectionObserver === "undefined") {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  items.forEach((item) => observer.observe(item));
};

window.lockScroll = function lockScroll(shouldLock) {
  document.body.style.overflow = shouldLock ? "hidden" : "";
};
