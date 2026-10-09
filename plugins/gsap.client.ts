// GSAP & Animation Plugins Configuration
import { defineNuxtPlugin } from '#app';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Optional SplitText check (GSAP standard or fallback splitter)
    let SplitTextPlugin: any = null;
    try {
      const splitModule = (gsap as any).SplitText || (window as any).SplitText;
      if (splitModule) {
        gsap.registerPlugin(splitModule);
        SplitTextPlugin = splitModule;
      }
    } catch (e) {
      console.warn('SplitText plugin registration notice:', e);
    }

    // Lag smoothing aggressively disabled to prevent virtual scroll rubber-banding
    gsap.ticker.lagSmoothing(0);

    return {
      provide: {
        gsap,
        ScrollTrigger,
        SplitText: SplitTextPlugin
      }
    };
  }
});
