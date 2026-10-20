<template>
  <section ref="heroSectionRef" class="hero" aria-label="Incredible Group of Companies">
    <!-- Full-Bleed 100vh Image Canvas -->
    <div ref="canvasRef" class="hero__canvas">
      <div ref="imageWrapperRef" class="hero__image-wrapper">
        <img
          ref="imageRef"
          src="/images/hero-architecture.jpg"
          alt="Incredible Group of Companies - Monolithic Estate & Luxury Development Portfolio"
          class="hero__image"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </div>

      <!-- Natural Contrast Overlay -->
      <div class="hero__overlay"></div>

      <!-- Large Bottom-Left Title -->
      <div ref="titleBlockRef" class="hero__title-block">
        <h1 class="hero__title">
          <span class="hero__line-wrap">
            <span class="hero__title-line hero__title-line--sans">Incredible Group</span>
          </span>
          <span class="hero__line-wrap">
            <span class="hero__title-line hero__title-line--serif">of Companies</span>
          </span>
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSiteLoaded } from '~/composables/useSiteLoaded';

const { isSiteLoaded } = useSiteLoaded();

const heroSectionRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLElement | null>(null);
const imageWrapperRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);
const titleBlockRef = ref<HTMLElement | null>(null);

let scrollTriggerInstance: ScrollTrigger | null = null;
let ctx: gsap.Context | null = null;
let hasPlayedEntrance = false;

const playEntranceAnimation = () => {
  if (hasPlayedEntrance || !import.meta.client) return;
  hasPlayedEntrance = true;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  // 1. Image canvas subtle scale-in
  if (imageRef.value) {
    tl.fromTo(
      imageRef.value,
      {
        scale: 1.08,
        opacity: 0.88
      },
      {
        scale: 1.0,
        opacity: 1.0,
        duration: 2.0,
        ease: 'power2.out'
      },
      0
    );
  }

  // 2. Title Lines Smooth Pop-In Reveal
  if (titleBlockRef.value) {
    const lines = titleBlockRef.value.querySelectorAll('.hero__title-line');
    tl.fromTo(
      lines,
      {
        yPercent: 120,
        opacity: 0,
        scale: 0.97
      },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1.0,
        duration: 1.4,
        stagger: 0.16,
        ease: 'power3.out'
      },
      0.2 // Starts gently as the preloader lifts
    );
  }
};

watch(isSiteLoaded, (loaded) => {
  if (loaded) {
    playEntranceAnimation();
  }
});

onMounted(() => {
  if (!import.meta.client) return;

  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context(() => {
    // Check if site is already loaded or listen to unveil event
    if (isSiteLoaded.value) {
      playEntranceAnimation();
    } else {
      const handleUnveil = () => {
        playEntranceAnimation();
        window.removeEventListener('site-unveiled', handleUnveil);
      };
      window.addEventListener('site-unveiled', handleUnveil);

      // Failsafe timer (trigger animation after 1.2s max even if event didn't fire)
      setTimeout(() => {
        if (!hasPlayedEntrance) {
          playEntranceAnimation();
        }
      }, 1200);
    }

    // Scroll Parallax & Subtle Scale
    if (imageRef.value && heroSectionRef.value) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: heroSectionRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          if (!imageRef.value) return;
          const progress = self.progress;
          gsap.set(imageRef.value, {
            y: progress * 60,
            scale: 1 + progress * 0.05
          });
        }
      });
    }
  }, heroSectionRef.value ?? undefined);
});

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  if (ctx) {
    ctx.revert();
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0c0d0e;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    height: 100dvh;
    height: 100svh;
  }

  // 100vh Edge-to-Edge Canvas
  &__canvas {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 36%;
    display: block;
    will-change: transform;

    @include tablet {
      object-position: center 30%;
    }

    @include mobile {
      object-position: center 25%;
    }
  }

  // Natural Contrast Overlay for Text Readability
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(12, 13, 14, 0.35) 0%,
      rgba(12, 13, 14, 0) 25%,
      rgba(12, 13, 14, 0) 50%,
      rgba(12, 13, 14, 0.55) 100%
    );
  }

  // Bottom-Left Large Title Block (Exact Reference Match)
  &__title-block {
    position: absolute;
    bottom: clamp(24px, 3.6vh, 40px);
    left: clamp(24px, 3.2vw, 44px);
    z-index: 10;
    color: #ffffff;
    pointer-events: none;
    max-width: 90vw;

    @media (min-width: 768px) and (max-width: 1024px) {
      bottom: clamp(1.75rem, 3.5vh, 2.5rem);
      left: clamp(1.5rem, 3.5vw, 2.5rem);
      right: clamp(1.5rem, 3.5vw, 2.5rem);
      max-width: calc(100% - 3rem);
    }

    @media (max-width: 767px) {
      bottom: max(1.25rem, env(safe-area-inset-bottom));
      left: max(1.125rem, env(safe-area-inset-left));
      right: max(1.125rem, env(safe-area-inset-right));
      max-width: calc(100% - 2.25rem);
    }

    @media (max-height: 500px) and (orientation: landscape) {
      bottom: max(0.85rem, env(safe-area-inset-bottom));
      left: max(1.25rem, env(safe-area-inset-left));
      right: auto;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  &__line-wrap {
    display: block;
    overflow: hidden;
    line-height: 0.94;
    padding-bottom: 0.1em; // prevents descender clipping
    white-space: nowrap;

    @media (max-width: 767px) {
      white-space: normal;
    }
  }

  &__title-line {
    display: block;
    will-change: transform, opacity;

    // Line 1: Clean Bold Sans-Serif (Title Case: Incredible Group)
    &--sans {
      font-family: $font-sans;
      font-size: clamp(2.5rem, 6.2vw, 6.6rem);
      font-weight: 600;
      line-height: 0.92;
      letter-spacing: -0.035em;
      color: #ffffff;
      text-transform: none;

      @media (min-width: 768px) and (max-width: 1024px) {
        font-size: clamp(2.6rem, 5.5vw, 4.2rem);
        line-height: 0.94;
      }

      @media (max-width: 767px) {
        font-size: clamp(2rem, 8.8vw, 3.25rem);
        line-height: 0.95;
      }

      @media (max-height: 500px) and (orientation: landscape) {
        font-size: clamp(1.4rem, 6.5vh, 2.2rem);
        line-height: 1;
      }
    }

    // Line 2: Editorial Serif (Title Case: of Companies)
    &--serif {
      font-family: $font-serif;
      font-size: clamp(2.5rem, 6.2vw, 6.6rem);
      font-weight: 400;
      line-height: 0.92;
      letter-spacing: -0.01em;
      color: #ffffff;
      text-transform: none;

      @media (min-width: 768px) and (max-width: 1024px) {
        font-size: clamp(2.6rem, 5.5vw, 4.2rem);
        line-height: 0.94;
      }

      @media (max-width: 767px) {
        font-size: clamp(2rem, 8.8vw, 3.25rem);
        line-height: 0.95;
      }

      @media (max-height: 500px) and (orientation: landscape) {
        font-size: clamp(1.4rem, 6.5vh, 2.2rem);
        line-height: 1;
      }
    }
  }
}
</style>
