<template>
  <header
    ref="headerRef"
    class="header"
    :class="[
      `header--theme-${theme}`,
      { 'header--hidden': isHidden },
      { 'header--drawer-open': isMenuOpen }
    ]"
  >
    <div class="header__inner">
      <!-- TOP LEFT: Small 3-Line Stacked Wordmark (Exact Reference Match) -->
      <NuxtLink to="/" class="header__brand" aria-label="Incredible Groups Home" @click="closeMenu">
        <span class="header__brand-line">Incredible</span>
        <span class="header__brand-line">Architectural</span>
        <span class="header__brand-line">Group</span>
      </NuxtLink>

      <!-- TOP RIGHT: Compact Nav Links (Index, Projects, Invested Companies, Contact) -->
      <nav class="header__nav" aria-label="Global Navigation">
        <NuxtLink to="/" class="header__nav-link" active-class="header__nav-link--active" exact>
          <span>Index,</span>
        </NuxtLink>
        <NuxtLink to="/about" class="header__nav-link" active-class="header__nav-link--active">
          <span>About,</span>
        </NuxtLink>
        <NuxtLink to="/projects" class="header__nav-link" active-class="header__nav-link--active">
          <span>Projects,</span>
        </NuxtLink>
        <NuxtLink to="/companies" class="header__nav-link" active-class="header__nav-link--active">
          <span>Invested Companies,</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="header__nav-link" active-class="header__nav-link--active">
          <span>Contact</span>
        </NuxtLink>

        <!-- Mobile & Tablet Drawer Toggle (Hidden on Desktop 1024px+) -->
        <button
          class="header__mobile-toggle"
          :class="{ 'header__mobile-toggle--active': isMenuOpen }"
          :aria-expanded="isMenuOpen"
          aria-controls="incredible-drawer"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <span class="header__mobile-dot"></span>
          <span class="header__mobile-text">{{ isMenuOpen ? 'Close' : 'Menu' }}</span>
        </button>
      </nav>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div
      id="incredible-drawer"
      ref="drawerRef"
      class="header__drawer"
      :class="{ 'header__drawer--open': isMenuOpen }"
      :aria-hidden="!isMenuOpen"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      @click.self="closeMenu"
    >
      <div class="header__drawer-content">
        <div class="header__drawer-header">
          <span class="eyebrow eyebrow--dot">INCREDIBLE DIRECTORY</span>
          <button
            class="header__drawer-close-btn"
            aria-label="Close menu"
            @click="closeMenu"
          >
            <span>Close</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="header__drawer-list" aria-label="Directory Navigation">
          <NuxtLink
            v-for="(item, idx) in navItems"
            :key="idx"
            :to="item.to"
            class="header__drawer-item"
            @click="closeMenu"
          >
            <span class="header__drawer-name">{{ item.label }}</span>
          </NuxtLink>
        </nav>

        <div class="header__drawer-footer">
          <div class="header__drawer-col">
            <span class="label-mono">INQUIRIES</span>
            <a href="https://wa.me/919737972097" target="_blank" rel="noopener noreferrer" class="header__drawer-wa">
              +91 97379 72097
            </a>
          </div>
          <div class="header__drawer-col">
            <span class="label-mono">STUDIOS</span>
            <p>Worli Sea Face, Mumbai • Assagao, Goa • GIFT City</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { useSiteLoaded } from '~/composables/useSiteLoaded';

interface Props {
  theme?: 'auto' | 'light' | 'dark';
}

withDefaults(defineProps<Props>(), {
  theme: 'auto'
});

const { isSiteLoaded } = useSiteLoaded();

const isHidden = ref(false);
const isMenuOpen = ref(false);
const headerRef = ref<HTMLElement | null>(null);
const drawerRef = ref<HTMLElement | null>(null);

let lastScrollY = 0;
let hasPlayedHeaderEntrance = false;

const navItems = [
  { label: 'Index', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Invested Companies', to: '/companies' },
  { label: 'Contact', to: '/contact' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' }
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
    if (import.meta.client) {
      const links = drawerRef.value?.querySelectorAll('.header__drawer-item');
      if (links) {
        gsap.fromTo(
          links,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out', delay: 0.1 }
        );
      }
    }
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
};

const playHeaderEntrance = () => {
  if (hasPlayedHeaderEntrance || !import.meta.client || !headerRef.value) return;
  hasPlayedHeaderEntrance = true;
  gsap.fromTo(
    headerRef.value,
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
  );
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    closeMenu();
  }
};

const onScroll = () => {
  if (!import.meta.client) return;
  const currentScrollY = window.scrollY;

  if (currentScrollY > 300 && currentScrollY > lastScrollY && !isMenuOpen.value) {
    isHidden.value = true;
  } else {
    isHidden.value = false;
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('keydown', handleKeydown);
    if (isSiteLoaded.value) {
      playHeaderEntrance();
    } else {
      const handleUnveil = () => {
        playHeaderEntrance();
        window.removeEventListener('site-unveiled', handleUnveil);
      };
      window.addEventListener('site-unveiled', handleUnveil);

      setTimeout(() => {
        if (!hasPlayedHeaderEntrance) {
          playHeaderEntrance();
        }
      }, 1500);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
  }
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: clamp(20px, 3vh, 32px) clamp(16px, 3.2vw, 44px);
  padding-top: max(clamp(20px, 3vh, 32px), env(safe-area-inset-top));
  padding-left: max(clamp(16px, 3.2vw, 44px), env(safe-area-inset-left));
  padding-right: max(clamp(16px, 3.2vw, 44px), env(safe-area-inset-right));
  z-index: $z-header;
  pointer-events: none;
  transition: transform 0.4s $ease-out-expo;
  box-sizing: border-box;

  @include mobile {
    padding: 1rem 1rem;
    padding-top: max(1rem, env(safe-area-inset-top));
  }

  &--hidden {
    transform: translateY(-100%);
  }

  &--drawer-open {
    mix-blend-mode: normal !important;
  }

  // Theme Variations
  &--theme-auto {
    mix-blend-mode: difference;
    color: #ffffff;

    .header__brand,
    .header__nav-link,
    .header__mobile-toggle {
      color: #ffffff;
    }

    .header__nav-link::after {
      background-color: #ffffff;
    }

    .header__mobile-dot {
      background-color: #ffffff;
    }
  }

  &--theme-light {
    mix-blend-mode: normal;
    color: $color-text-primary;

    .header__brand,
    .header__nav-link,
    .header__mobile-toggle {
      color: $color-text-primary;
    }

    .header__nav-link::after {
      background-color: $color-text-primary;
    }

    .header__mobile-dot {
      background-color: $color-text-primary;
    }
  }

  &--theme-dark {
    mix-blend-mode: normal;
    color: $color-text-light;

    .header__brand,
    .header__nav-link,
    .header__mobile-toggle {
      color: $color-text-light;
    }

    .header__nav-link::after {
      background-color: $color-text-light;
    }

    .header__mobile-dot {
      background-color: $color-text-light;
    }
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0;
  }

  // TOP LEFT: 3-Line Stacked Wordmark
  &__brand {
    display: flex;
    flex-direction: column;
    font-family: $font-sans;
    font-size: clamp(0.75rem, 2.2vw, 0.8125rem); // 12-13px
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.01em;
    pointer-events: auto;
    cursor: pointer;
    min-height: 44px;
    justify-content: center;
    text-decoration: none;

    &-line {
      display: block;
      white-space: nowrap;
    }
  }

  // TOP RIGHT: Compact Navigation
  &__nav {
    display: flex;
    align-items: center;
    gap: 0.35rem; // Tight inline spacing with commas
    pointer-events: auto;
  }

  &__nav-link {
    font-family: $font-sans;
    font-size: 0.8125rem; // 13px
    font-weight: 400;
    letter-spacing: -0.01em;
    opacity: 0.92;
    position: relative;
    padding-bottom: 2px;
    padding-right: 0.15rem;
    transition: opacity 0.25s ease;
    text-decoration: none;

    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 0%;
      height: 1px;
      transition: width 0.25s ease;
    }

    &:hover {
      opacity: 1;
      &::after {
        width: 100%;
      }
    }

    &--active {
      opacity: 1;
      &::after {
        width: 100%;
      }
    }

    @include tablet-down {
      display: none;
    }
  }

  // Mobile Menu Trigger (Visible on mobile & tablet)
  &__mobile-toggle {
    display: none;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    font-family: $font-sans;
    font-size: 0.8125rem;
    background: transparent;
    border: none;
    cursor: pointer;
    pointer-events: auto;
    min-height: 44px;
    min-width: 44px;
    padding: 8px 6px;
    touch-action: manipulation;

    @include tablet-down {
      display: inline-flex;
    }
  }

  &__mobile-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  &__mobile-text {
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  // Fullscreen Mobile & Tablet Drawer
  &__drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: 100svh;
    height: 100dvh;
    max-height: 100dvh;
    background-color: $color-bg-dark;
    color: $color-text-light;
    mix-blend-mode: normal;
    z-index: $z-nav-drawer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    pointer-events: none;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transition: opacity 0.35s $ease-editorial;
    box-sizing: border-box;

    &--open {
      opacity: 1;
      pointer-events: auto;
    }

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100%;
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      padding: clamp(1.5rem, 3.5vh, 2.5rem) clamp(1.25rem, 4vw, 2.5rem);
      padding-top: max(clamp(1.5rem, 3.5vh, 2.5rem), env(safe-area-inset-top));
      padding-bottom: max(clamp(1.5rem, 3.5vh, 2.5rem), env(safe-area-inset-bottom));
      box-sizing: border-box;
      gap: 1.5rem;
    }

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(245, 245, 242, 0.1);
      padding-bottom: 1rem;
      flex-shrink: 0;
    }

    &-close-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      color: $color-text-light;
      font-family: $font-sans;
      font-size: 0.75rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      padding: 6px 12px;
      min-height: 36px;
      cursor: pointer;
      touch-action: manipulation;
      transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

      &:hover,
      &:active {
        background-color: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.4);
        color: #ffffff;
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: clamp(0.85rem, 2vh, 1.5rem);
      margin: 1rem 0;
      flex-grow: 1;
      justify-content: center;
    }

    &-item {
      display: inline-flex;
      align-items: baseline;
      font-family: $font-serif;
      font-size: clamp(1.6rem, 5.5vw, 3.2rem);
      color: $color-text-light;
      text-decoration: none;
      min-height: 44px;
      line-height: 1.15;
      letter-spacing: -0.02em;
      transition: transform 0.25s ease, color 0.25s ease;
      touch-action: manipulation;

      &:hover,
      &:active {
        color: $color-accent;
        transform: translateX(8px);
      }
    }

    &-idx {
      font-family: $font-mono;
      font-size: 0.875rem;
      color: $color-accent;
    }

    &-footer {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
      border-top: 1px solid rgba(245, 245, 242, 0.1);
      padding-top: 1.25rem;
      font-family: $font-sans;
      font-size: 0.8125rem;
      color: $color-text-muted-dark;
      flex-shrink: 0;

      @include tablet-up {
        grid-template-columns: 1fr 1fr;
      }
    }

    &-wa {
      display: inline-block;
      color: $color-accent;
      margin-top: 0.25rem;
      text-decoration: none;
      min-height: 32px;
      line-height: 32px;
    }
  }
}
</style>
