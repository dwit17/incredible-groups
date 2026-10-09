// Global Smooth Scrolling (Lenis + GSAP Master Clock Integration)
import { defineNuxtPlugin } from '#app';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.client) return;

  // Register ScrollTrigger plugin before instantiation
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Lenis with architectural fluid scrolling parameters
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  });

  // Keep Lenis and ScrollTrigger in lockstep upon every scroll event
  lenis.on('scroll', ScrollTrigger.update);

  // Bind Lenis internal requestAnimationFrame directly to GSAP's core ticker
  // This establishes GSAP as the absolute master clock and eliminates frame desync
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // Aggressively disable GSAP lag smoothing to prevent scroll rubber-banding
  gsap.ticker.lagSmoothing(0);

  // Force ScrollTrigger to recalculate dimensions on route transitions,
  // mitigating Nuxt hydration and layout shift anomalies
  nuxtApp.hook('page:finish', () => {
    ScrollTrigger.refresh();
  });

  // Provide Lenis globally for manual scrolling control if required elsewhere
  return {
    provide: {
      lenis
    }
  };
});
