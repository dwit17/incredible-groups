<template>
  <footer ref="footerRef" class="site-footer" aria-label="Site Footer">
    <div class="site-footer__inner">
      <!-- 1. Top Columns Grid (Nav, Media, Address, Hours) -->
      <div class="site-footer__top-grid">
        <!-- Logo Column -->
        <div class="site-footer__logo-col">
          <NuxtLink to="/" class="site-footer__brand-wordmark">
            <h2 class="site-footer__brand-title">
              <span>Incredible</span>
              <span>Architectural</span>
              <span class="site-footer__brand-serif">Group</span>
            </h2>
          </NuxtLink>
        </div>

        <!-- Navigation Column -->
        <div class="site-footer__col site-footer__col--nav">
          <h3 class="site-footer__col-label">Navigation</h3>
          <ul class="site-footer__list">
            <li><NuxtLink to="/" class="site-footer__link">Index</NuxtLink></li>
            <li><NuxtLink to="/about" class="site-footer__link">About</NuxtLink></li>
            <li><NuxtLink to="/projects" class="site-footer__link">Projects</NuxtLink></li>
            <li><NuxtLink to="/companies" class="site-footer__link">Invested Companies</NuxtLink></li>
            <li><NuxtLink to="/contact" class="site-footer__link">Contact</NuxtLink></li>
            <li><NuxtLink to="/terms" class="site-footer__link">Terms &amp; Conditions</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="site-footer__link">Privacy Policy</NuxtLink></li>
            <li>
              <a href="https://wa.me/919737972097" target="_blank" rel="noopener noreferrer" class="site-footer__link site-footer__link--highlight">
                Order design
              </a>
            </li>
          </ul>
        </div>

        <!-- Media Column -->
        <div class="site-footer__col site-footer__col--media">
          <h3 class="site-footer__col-label">Media</h3>
          <ul class="site-footer__list">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="site-footer__link">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="site-footer__link">LinkedIn</a></li>
            <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" class="site-footer__link">Behance</a></li>
            <li><a href="https://wa.me/919737972097" target="_blank" rel="noopener noreferrer" class="site-footer__link">WhatsApp</a></li>
            <li><a href="tel:+919737972097" class="site-footer__link">+91 97379 72097</a></li>
            <li><a href="mailto:atelier@incrediblegroups.com" class="site-footer__link">Email</a></li>
          </ul>
        </div>

        <!-- Address Column -->
        <div class="site-footer__col site-footer__col--address">
          <h3 class="site-footer__col-label">Address</h3>
          <ul class="site-footer__list">
            <li>
              <span>Worli Sea Face, Mumbai</span><br />
              <span class="site-footer__text-muted">Palais Royale, Level 48</span>
            </li>
            <li class="site-footer__list-gap">
              <span>Assagao, North Goa</span><br />
              <span class="site-footer__text-muted">Badem Sanctuary Enclave</span>
            </li>
          </ul>
        </div>

        <!-- Hours Column -->
        <div class="site-footer__col site-footer__col--hours">
          <h3 class="site-footer__col-label">Hours</h3>
          <ul class="site-footer__list">
            <li>
              <span>Mon to Fri</span><br />
              <span class="site-footer__text-muted">10:00 AM – 7:00 PM</span>
            </li>
            <li class="site-footer__list-gap">
              <span>Sat to Sun</span><br />
              <span class="site-footer__text-muted">12:00 PM – 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 2. Monumental Brand Typography Unveil -->
      <div ref="monumentalWrapRef" class="site-footer__monumental-wrap">
        <div ref="monumentalTextRef" class="site-footer__monumental-text">
          INCREDIBLE
        </div>
      </div>

      <!-- 3. Bottom Legal & License Bar -->
      <div class="site-footer__bottom-bar">
        <div class="site-footer__bottom-col">
          <span>All rights reserved</span>
        </div>

        <div class="site-footer__bottom-col site-footer__bottom-col--licenses">
          <span>License Number</span>
          <span class="site-footer__text-dim">IN-MH-2024-9842</span>
          <span class="site-footer__text-dim">NL-BA-08576321</span>
        </div>

        <div class="site-footer__bottom-col">
          <span>Architectural Atelier</span>
        </div>

        <div class="site-footer__bottom-col site-footer__bottom-col--right">
          <NuxtLink to="/terms" class="site-footer__bottom-link">Terms</NuxtLink>
          <span class="site-footer__text-dim">•</span>
          <NuxtLink to="/privacy" class="site-footer__bottom-link">Privacy</NuxtLink>
          <span class="site-footer__text-dim">•</span>
          <NuxtLink to="/legal" class="site-footer__bottom-link">Legal</NuxtLink>
          <span class="site-footer__text-dim">© {{ currentYear }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const footerRef = ref<HTMLElement | null>(null);
const monumentalWrapRef = ref<HTMLElement | null>(null);
const monumentalTextRef = ref<HTMLElement | null>(null);

const currentYear = new Date().getFullYear();

let ctx: gsap.Context | null = null;

onMounted(async () => {
  if (!import.meta.client || !footerRef.value) return;

  await nextTick();

  // Split footer links & labels
  const footerLabels = footerRef.value.querySelectorAll<HTMLElement>('.site-footer__col-label');
  const footerLinks = footerRef.value.querySelectorAll<HTMLElement>('.site-footer__link');
  const bottomBarEls = footerRef.value.querySelectorAll<HTMLElement>('.site-footer__bottom-col');

  let labelLines: HTMLElement[] = [];
  let linkLines: HTMLElement[] = [];

  footerLabels.forEach(el => {
    labelLines.push(...splitTextIntoLines(el, { inline: true }));
  });
  footerLinks.forEach(el => {
    linkLines.push(...splitTextIntoLines(el, { inline: true }));
  });

  ctx = gsap.context(() => {
    // 1. Footer Top Grid Reveal
    const tlTop = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.value,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    if (labelLines.length > 0) {
      tlTop.fromTo(
        labelLines,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.04, ease: 'power3.out' },
        0
      );
    }

    if (linkLines.length > 0) {
      tlTop.fromTo(
        linkLines,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.02, ease: 'power3.out' },
        0.1
      );
    }

    // 2. Monumental Brand Name Upward Slide on Scroll
    if (monumentalTextRef.value && monumentalWrapRef.value) {
      gsap.fromTo(
        monumentalTextRef.value,
        { yPercent: 105, opacity: 0.2 },
        {
          scrollTrigger: {
            trigger: monumentalWrapRef.value,
            start: 'top 95%',
            end: 'bottom bottom',
            scrub: 0.8
          },
          yPercent: 0,
          opacity: 1,
          ease: 'power2.out'
        }
      );
    }

    // 3. Bottom Bar Fade-In
    if (bottomBarEls.length > 0) {
      gsap.fromTo(
        bottomBarEls,
        { opacity: 0, y: 15 },
        {
          scrollTrigger: {
            trigger: footerRef.value,
            start: 'bottom 98%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: 'power2.out'
        }
      );
    }
  }, footerRef.value);
});

onUnmounted(() => {
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.site-footer {
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: clamp(48px, 8vh, 96px);
  padding-bottom: clamp(20px, 3.5vh, 40px);
  padding-bottom: max(clamp(20px, 3.5vh, 40px), env(safe-area-inset-bottom));
  overflow: hidden;
  box-sizing: border-box;

  &__inner {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding-left: clamp(16px, 2.5vw, 48px);
    padding-right: clamp(16px, 2.5vw, 48px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    box-sizing: border-box;
  }

  // 1. Top Grid
  &__top-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.4fr 1.2fr;
    gap: clamp(20px, 2.8vw, 56px);
    margin-bottom: clamp(24px, 4vh, 48px);

    @include tablet {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 32px 28px;
      margin-bottom: 32px;
    }

    @include mobile {
      grid-template-columns: 1fr;
      gap: 28px;
      margin-bottom: 28px;
    }
  }

  &__logo-col {
    @include tablet {
      grid-column: 1 / -1;
      margin-bottom: 8px;
    }
  }

  &__brand-wordmark {
    display: inline-block;
    text-decoration: none;
    color: #ffffff;
  }

  &__brand-title {
    font-family: $font-sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin: 0;
    display: flex;
    flex-direction: column;

    span {
      display: block;
    }
  }

  &__brand-serif {
    font-family: $font-serif;
  }

  &__col-label {
    font-family: $font-serif;
    font-size: 13px;
    font-weight: 400;
    color: #888888;
    margin: 0 0 1rem 0;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    font-family: $font-sans;
    font-size: 13px;
    line-height: 1.45;
    color: #dddddd;

    li {
      margin: 0;
      overflow-wrap: anywhere;
      word-break: break-word;
    }
  }

  &__list-gap {
    margin-top: 0.75rem !important;
  }

  &__link {
    color: #ffffff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    min-height: 32px;
    padding: 2px 0;
    position: relative;
    overflow-wrap: anywhere;
    word-break: break-word;
    transition: color 0.2s ease, transform 0.2s ease;
    touch-action: manipulation;

    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s cubic-bezier(0.17, 0.84, 0.44, 1);
    }

    &:hover,
    &:active {
      color: #ffffff;

      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }

    &--highlight {
      color: #ffffff;
      font-weight: 500;
    }
  }

  &__text-muted {
    color: #888888;
    font-size: 12px;
  }

  &__text-dim {
    color: #666666;
  }

  // 2. Monumental Brand Typography Unveil
  &__monumental-wrap {
    width: 100%;
    overflow: hidden;
    margin-top: auto;
    margin-bottom: clamp(16px, 2.5vh, 32px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding-bottom: 0.5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  &__monumental-text {
    font-family: $font-sans;
    font-size: clamp(34px, 12.8vw, 240px);
    font-weight: 700;
    line-height: 0.82;
    letter-spacing: -0.045em;
    color: #ffffff;
    text-align: center;
    width: 100%;
    will-change: transform, opacity;
    user-select: none;
    box-sizing: border-box;
  }

  // 3. Bottom Bar
  &__bottom-bar {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1.5fr;
    gap: 20px;
    align-items: center;
    font-family: $font-sans;
    font-size: 11px;
    color: #888888;
    padding-top: 0.75rem;

    @include tablet {
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    @include mobile {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  }

  &__bottom-col {
    display: flex;
    gap: 12px;
    align-items: center;
    overflow-wrap: anywhere;
    word-break: break-word;

    &--licenses {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 12px;
    }

    &--right {
      justify-content: flex-end;

      @include tablet-down {
        justify-content: flex-start;
      }
    }
  }

  &__bottom-link {
    color: #888888;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    min-height: 32px;
    padding: 0 2px;
    transition: color 0.2s ease;
    touch-action: manipulation;

    &:hover,
    &:active {
      color: #ffffff;
    }
  }
}
</style>
