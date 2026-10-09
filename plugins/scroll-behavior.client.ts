// Global Scroll Behavior & Route Navigation Restoration Plugin
import { defineNuxtPlugin } from '#app';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '~/composables/useLenis';

export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.client) return;

  // Prevent browser default automatic scroll restoration from clashing with Lenis
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  const { scrollToTop } = useLenis();
  const router = nuxtApp.$router;

  // 1. Immediately reset scroll on before navigation starts if going to a different route
  router.beforeEach((to, from, next) => {
    if (to.path !== from.path && !to.hash) {
      scrollToTop(true);
    }
    next();
  });

  // 2. When Nuxt finishes rendering the page, reset to top and refresh ScrollTrigger
  nuxtApp.hook('page:finish', () => {
    const currentRoute = router.currentRoute.value;
    if (!currentRoute.hash) {
      scrollToTop(true);

      // Refresh ScrollTrigger cleanly from top position
      requestAnimationFrame(() => {
        scrollToTop(true);
        if (typeof (ScrollTrigger as any).clearScrollMemory === 'function') {
          (ScrollTrigger as any).clearScrollMemory();
        }
        ScrollTrigger.refresh();
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    }
  });

  // 3. Fallback on router.afterEach
  router.afterEach((to) => {
    if (!to.hash) {
      scrollToTop(true);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    }
  });
});
