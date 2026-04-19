window.HeaderComponent = {
  props: {
    profile: { type: Object, required: true },
    navigation: { type: Array, required: true },
    isMenuOpen: { type: Boolean, required: true }
  },
  emits: ["toggle-menu", "navigate"],
  template: `
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="brand brand--with-logo" href="#top" @click="$emit('navigate', '#top')">
          <img
            class="brand__mark"
            :src="profile.logoSrc"
            alt="Logo do Espaco Joyce Arraiss"
            width="64"
            height="64"
            loading="eager"
          >
          <span>
            <span class="brand__name">Espaco Joyce Arraiss</span>
            <span class="brand__tag">Servicos faciais, corporais e beleza</span>
          </span>
        </a>

        <button
          class="hamburger"
          :class="{ 'is-open': isMenuOpen }"
          type="button"
          :aria-expanded="String(isMenuOpen)"
          aria-controls="main-navigation"
          aria-label="Abrir menu"
          @click="$emit('toggle-menu')"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="main-navigation" class="header-nav" :class="{ 'is-open': isMenuOpen }" aria-label="Principal">
          <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
            @click="$emit('navigate', item.href)"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </header>
  `
};
