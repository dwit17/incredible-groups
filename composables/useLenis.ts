// Smooth Scrolling Composable (Lenis + GSAP Shared Clock Integration)
import { ref, onMounted, onUnmounted } from 'vue';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const globalLenis = ref<Lenis | null>(null);
const isInitialized = ref(false);

export function useLenis() {
  const initLenis = () => {
    if (!import.meta.client) return null;
    try {
      const nuxtApp = useNuxtApp();
      if ((nuxtApp as any)?.$lenis) {
        globalLenis.value = (nuxtApp as any).$lenis;
        isInitialized.value = true;
        return (nuxtApp as any).$lenis;
      }
    } catch (_) {}
    if (globalLenis.value) return globalLenis.value;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return null;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      infinite: false
    });

    globalLenis.value = lenis;

    // Wire Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Run Lenis RAF strictly through the single shared gsap.ticker
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    isInitialized.value = true;
    return lenis;
  };

  const scrollTo = (target: string | HTMLElement | number, options?: any) => {
    if (globalLenis.value) {
      globalLenis.value.scrollTo(target, options);
    } else if (import.meta.client) {
      if (typeof target === 'string') {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = (immediate = true) => {
    if (import.meta.client) {
      window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    if (globalLenis.value) {
      globalLenis.value.scrollTo(0, { immediate, force: true });
    }
  };

  const stop = () => {
    globalLenis.value?.stop();
  };

  const start = () => {
    globalLenis.value?.start();
  };

  return {
    lenis: globalLenis,
    isInitialized,
    initLenis,
    scrollTo,
    scrollToTop,
    stop,
    start
  };
}

