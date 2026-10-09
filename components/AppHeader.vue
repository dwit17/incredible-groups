<template>
  <header
    ref="headerRef"
    class="header"
    :class="[
      `header--theme-${theme}`,
      { 'header--hidden': isHidden }
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

        <!-- Mobile Drawer Toggle (No hamburger on desktop) -->
        <button
          class="header__mobile-toggle"
          :class="{ 'header__mobile-toggle--active': isMenuOpen }"
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
      ref="drawerRef"
      class="header__drawer"
      :class="{ 'header__drawer--open': isMenuOpen }"
      aria-hidden="!isMenuOpen"
    >
      <div class="header__drawer-content">
        <div class="header__drawer-header">
          <span class="eyebrow eyebrow--dot">INCREDIBLE DIRECTORY</span>
          <span class="metadata">EST. 2004</span>
        </div>

        <nav class="header__drawer-list">
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
  padding: clamp(24px, 3.2vh, 32px) clamp(24px, 3.2vw, 44px);
  z-index: $z-header;
  pointer-events: none;
  transition: transform 0.4s $ease-out-expo;

  @include mobile {
    padding: 1.25rem 1.25rem;
  }

  &--hidden {
    transform: translateY(-100%);
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
    align-items: flex-start;
    width: 100%;
    margin: 0;
  }

  // TOP LEFT: 3-Line Stacked Wordmark (Exact Reference Match)
  &__brand {
    display: flex;
    flex-direction: column;
    font-family: $font-sans;
    font-size: 0.8125rem; // 13px
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.01em;
    pointer-events: auto;
    cursor: pointer;

    &-line {
      display: block;
    }
  }

  // TOP RIGHT: Compact Navigation (Exact Reference Match: Index, Work, About, Contact)
  &__nav {
    display: flex;
    align-items: center;
    gap: 0.35rem; // Tight inline spacing with commas
    pointer-events: auto;

    @include mobile {
      gap: 0.75rem;
    }
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

    @include mobile {
      display: none;
    }
  }

  // Mobile Menu Trigger (Hidden on Desktop)
  &__mobile-toggle {
    display: none;
    align-items: center;
    gap: 6px;
    font-family: $font-sans;
    font-size: 0.8125rem;
    background: transparent;
    cursor: pointer;
    pointer-events: auto;

    @include mobile {
      display: flex;
    }
  }

  &__mobile-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }

  // Fullscreen Mobile Drawer
  &__drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $color-bg-dark;
    color: $color-text-light;
    mix-blend-mode: normal;
    z-index: $z-nav-drawer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s $ease-editorial;

    &--open {
      opacity: 1;
      pointer-events: auto;
    }

    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 85vh;
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1.25rem;
    }

    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(245, 245, 242, 0.1);
      padding-bottom: 1.25rem;
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin: 2rem 0;
    }

    &-item {
      display: inline-flex;
      align-items: baseline;
      gap: 1.5rem;
      font-family: $font-serif;
      font-size: clamp(2rem, 6vw, 3.5rem);
      color: $color-text-light;
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
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
      gap: 1.5rem;
      border-top: 1px solid rgba(245, 245, 242, 0.1);
      padding-top: 1.5rem;
      font-family: $font-sans;
      font-size: 0.8125rem;
      color: $color-text-muted-dark;
    }

    &-wa {
      display: block;
      color: $color-accent;
      margin-top: 0.25rem;
    }
  }
}
</style>
