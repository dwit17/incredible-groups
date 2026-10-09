<template>
  <div
    v-if="isVisible"
    ref="preloaderRef"
    class="preloader"
    :class="{ 'preloader--closing': isClosing }"
    aria-label="Loading site"
  >
    <div class="preloader__inner">
      <div class="preloader__header">
        <span class="preloader__logo">INCREDIBLE GROUPS</span>
        <span class="preloader__sub">INDIA • MONOLITHIC REAL ESTATE &amp; VENTURES</span>
      </div>

      <div class="preloader__center">
        <div class="preloader__counter">
          <span class="preloader__number">{{ counter }}</span>
          <span class="preloader__percent">%</span>
        </div>
        <div class="preloader__bar">
          <div class="preloader__progress" :style="{ width: `${counter}%` }"></div>
        </div>
      </div>

      <div class="preloader__footer">
        <span class="preloader__status">{{ statusMessage }}</span>
        <span class="preloader__year">EST. 2004</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { useSiteLoaded } from '~/composables/useSiteLoaded';

const emit = defineEmits(['complete']);
const { setSiteLoaded } = useSiteLoaded();

const isVisible = ref(true);
const isClosing = ref(false);
const counter = ref(0);
const statusMessage = ref('INITIALIZING ATELIER');
const preloaderRef = ref<HTMLElement | null>(null);

const dismissPreloader = () => {
  if (!isVisible.value || isClosing.value) return;
  isClosing.value = true;

  // Signal that unveiling has started so hero text animation plays right as preloader lifts
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

  const counterObj = { value: 0 };

  // GSAP animation from 0 to 100%
  gsap.to(counterObj, {
    value: 100,
    duration: 1.0,
    ease: 'power2.inOut',
    onUpdate: () => {
      counter.value = Math.floor(counterObj.value);
      if (counter.value > 30 && counter.value < 70) {
        statusMessage.value = 'CALIBRATING SPATIAL REVEALS';
      } else if (counter.value >= 70) {
        statusMessage.value = 'ENTER THE MONOLITH';
      }
    },
    onComplete: () => {
      dismissPreloader();
    }
  });

  // Failsafe watchdog timer (guarantees removal within 1.4s under any condition)
  setTimeout(() => {
    dismissPreloader();
  }, 1400);
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
  background-color: #0c0d0e;
  z-index: $z-preloader;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(1.25rem, 4vw, 3.5rem);
  padding-top: max(clamp(1.25rem, 4vw, 3.5rem), env(safe-area-inset-top));
  padding-bottom: max(clamp(1.25rem, 4vw, 3.5rem), env(safe-area-inset-bottom));
  padding-left: max(clamp(1.25rem, 4vw, 3.5rem), env(safe-area-inset-left));
  padding-right: max(clamp(1.25rem, 4vw, 3.5rem), env(safe-area-inset-right));
  color: #f3f3f4;
  will-change: transform;
  box-sizing: border-box;

  &--closing {
    pointer-events: none;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $font-mono;
    font-size: 0.75rem;
    letter-spacing: $letter-spacing-widest;
    text-transform: uppercase;
    color: #8e9297;

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

  &__logo {
    color: #f3f3f4;
    font-weight: $font-weight-medium;
  }

  &__center {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px;
    width: 100%;
  }

  &__counter {
    font-family: $font-display;
    font-size: clamp(3.5rem, 14vw, 12rem);
    font-weight: $font-weight-light;
    line-height: 0.9;
    letter-spacing: $letter-spacing-tight;
    color: #f3f3f4;
    display: flex;
    align-items: baseline;
  }

  &__percent {
    font-family: $font-mono;
    font-size: clamp(1.25rem, 3vw, 2.5rem);
    color: $color-accent;
    margin-left: 0.5rem;
  }

  &__bar {
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.12);
    margin-top: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  &__progress {
    height: 100%;
    background-color: $color-accent;
    transition: width 0.05s linear;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $font-mono;
    font-size: 0.75rem;
    letter-spacing: $letter-spacing-widest;
    color: #8e9297;
    text-transform: uppercase;
  }

  &__status {
    color: $color-accent;
  }
}
</style>
