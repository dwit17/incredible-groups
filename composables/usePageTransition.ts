// Page Transitions Composable (Wipe & Crossfade Animations)
import { gsap } from 'gsap';

export function usePageTransition() {
  const pageTransition = {
    name: 'page-wipe',
    mode: 'out-in',
    css: false,
    onEnter(el: HTMLElement, done: () => void) {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          onComplete: done
        }
      );
    },
    onLeave(el: HTMLElement, done: () => void) {
      gsap.to(el, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: done
      });
    }
  };

  return {
    pageTransition
  };
}
