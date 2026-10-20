<template>
  <div
    v-if="isVisible"
    ref="preloaderRef"
    class="preloader"
    :class="{ 'preloader--closing': isClosing }"
    role="status"
    aria-live="polite"
    aria-label="Loading site"
  >
    <div class="preloader__inner">
      <div class="preloader__content">
        <!-- Minimal Monochromatic Number -->
        <div class="preloader__counter">
          <span class="preloader__number">{{ counter }}</span>
          <span class="preloader__percent">%</span>
        </div>

        <!-- Hairline 1px Progress Bar -->
        <div class="preloader__bar" aria-hidden="true">
          <div
            class="preloader__progress"
            :style="{ width: `${counter}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { useSiteLoaded } from '~/composables/useSiteLoaded';

const emit = defineEmits<{
  (e: 'complete'): void;
}>();

const { setSiteLoaded } = useSiteLoaded();

const isVisible = ref(true);
const isClosing = ref(false);
const counter = ref(0);
const preloaderRef = ref<HTMLElement | null>(null);

let tween: gsap.core.Tween | null = null;
let watchdogTimer: ReturnType<typeof setTimeout> | null = null;
let settleTimer: ReturnType<typeof setTimeout> | null = null;

const unlockScroll = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
};

const dismissPreloader = () => {
  if (!isVisible.value || isClosing.value) return;
  isClosing.value = true;
  counter.value = 100;
  unlockScroll();

  // Signal that unveiling has started so hero text animation plays in sync with curtain lift
  setSiteLoaded();

  if (preloaderRef.value) {
    gsap.to(preloaderRef.value, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => {
        isVisible.value = false;
        emit('complete');
      }
    });
  } else {
    isVisible.value = false;
    emit('complete');
  }
};

onMounted(() => {
  if (!import.meta.client) return;

  // Prevent background scroll while preloader is active
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  const counterObj = { value: 0 };

  // GSAP animation from 0 to 100%
  tween = gsap.to(counterObj, {
    value: 100,
    duration: 1.05,
    ease: 'power2.inOut',
    onUpdate: () => {
      counter.value = Math.floor(counterObj.value);
    },
    onComplete: () => {
      settleTimer = setTimeout(() => {
        dismissPreloader();
      }, 80);
    }
  });

  // Failsafe watchdog timer (guarantees dismiss within 1.5s under any condition)
  watchdogTimer = setTimeout(() => {
    dismissPreloader();
  }, 1500);
});

onUnmounted(() => {
  unlockScroll();
  if (tween) tween.kill();
  if (watchdogTimer) clearTimeout(watchdogTimer);
  if (settleTimer) clearTimeout(settleTimer);
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  max-height: 100dvh;
  background-color: $color-bg-dark; // #0c0d0e (matching HeroSection and dark theme)
  z-index: $z-preloader;
  color: $color-text-light; // #f5f5f2
  will-change: transform;
  box-sizing: border-box;
  overflow: hidden;
  user-select: none;
  pointer-events: all;
  -webkit-font-smoothing: antialiased;

  &--closing {
    pointer-events: none;
  }

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;
    // Exactly matches HeroSection's title-block margin and padding
    padding: clamp(24px, 3.6vh, 44px) clamp(24px, 3.2vw, 44px);
    padding-bottom: max(clamp(24px, 3.6vh, 44px), env(safe-area-inset-bottom));
    padding-left: max(clamp(24px, 3.2vw, 44px), env(safe-area-inset-left));
    padding-right: max(clamp(24px, 3.2vw, 44px), env(safe-area-inset-right));

    @media (max-width: 767px) {
      padding: max(1.25rem, env(safe-area-inset-bottom)) max(1.125rem, env(safe-area-inset-left));
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: clamp(260px, 38vw, 520px);
    box-sizing: border-box;
  }

  &__counter {
    display: inline-flex;
    align-items: baseline;
    font-family: $font-heading; // 'Neue Haas Grotesk Roman'
    // Harmonized architectural scale matching website title lines
    font-size: clamp(2.5rem, 5.5vw, 5.25rem);
    font-weight: $font-weight-regular;
    line-height: 0.95;
    letter-spacing: -0.035em;
    color: $color-text-light; // #f5f5f2 (warm architectural off-white)
    font-variant-numeric: tabular-nums;
  }

  &__number {
    display: inline-block;
  }

  &__percent {
    font-family: $font-content; // 'Neue Haas Grotesk Light'
    font-size: clamp(0.95rem, 1.8vw, 1.5rem);
    font-weight: $font-weight-light;
    color: rgba(245, 245, 242, 0.45); // Restrained off-white tone matching metadata
    margin-left: 0.35rem;
    line-height: 1;
    letter-spacing: 0;
  }

  // Hairline 1px progress track matching site's architectural borders
  &__bar {
    width: 100%;
    height: 1px;
    background: rgba(245, 245, 242, 0.12); // $color-border-dark
    margin-top: clamp(0.75rem, 1.4vh, 1.25rem);
    position: relative;
    overflow: hidden;
  }

  &__progress {
    height: 100%;
    background-color: $color-text-light; // #f5f5f2 (pure architectural off-white)
    will-change: width;
    transition: width 0.04s linear;
  }
}

// Prefers-reduced-motion fallback
@media (prefers-reduced-motion: reduce) {
  .preloader {
    transition: opacity 0.3s ease;
  }
}
</style>
