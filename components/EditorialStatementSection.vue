<template>
  <section ref="sectionRef" class="editorial-statement" aria-label="Systematic Clarity &amp; Creativity">
    <!-- Upper Text Content (White Covering Panel) -->
    <div class="editorial-statement__text-panel">
      <div class="editorial-statement__container">
        <div ref="contentRef" class="editorial-statement__content">
          <!-- Main Statement (Forced 2-Line Break, Extremely Large Sans) -->
          <h2 class="editorial-statement__heading">
            <span class="editorial-statement__line-mask">
              <span class="editorial-statement__heading-line">Systematic</span>
            </span>
            <span class="editorial-statement__line-mask">
              <span class="editorial-statement__heading-line">Clarity &amp; Creativity</span>
            </span>
          </h2>

          <!-- Supporting Dual-Column Text (Small, Restrained, Clean) -->
          <div class="editorial-statement__supporting">
            <div class="editorial-statement__col">
              <p ref="p1Ref" class="editorial-statement__desc">
                Incredible Groups conceives and executes monolithic residential landmarks and private sanctuaries with uncompromising geometric rigor and structural permanence.
              </p>
            </div>
            <div class="editorial-statement__col">
              <p ref="p2Ref" class="editorial-statement__desc">
                Through spatial clarity, architectural discipline, and strategic capital allocation, our atelier builds enduring generational monuments across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Full-Bleed 100vw Edge-to-Edge Image Canvas (Smoothly Unveiled on Scroll) -->
    <div ref="imageContainerRef" class="editorial-statement__image-fullbleed">
      <div ref="imageWrapperRef" class="editorial-statement__image-wrapper">
        <img
          ref="imageRef"
          src="/images/statement-architecture.jpg"
          alt="Incredible Groups - Monolithic Architectural Landmark"
          class="editorial-statement__image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

const sectionRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
const imageContainerRef = ref<HTMLElement | null>(null);
const imageWrapperRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);
const p1Ref = ref<HTMLElement | null>(null);
const p2Ref = ref<HTMLElement | null>(null);

let scrollTriggerInstance: ScrollTrigger | null = null;
let textTriggerInstance: ScrollTrigger | null = null;
let ctx: gsap.Context | null = null;

onMounted(async () => {
  if (!import.meta.client) return;

  await nextTick();
  gsap.registerPlugin(ScrollTrigger);

  // Split description paragraphs into individual lines
  let p1Lines: HTMLElement[] = [];
  let p2Lines: HTMLElement[] = [];
  if (p1Ref.value) p1Lines = splitTextIntoLines(p1Ref.value);
  if (p2Ref.value) p2Lines = splitTextIntoLines(p2Ref.value);

  ctx = gsap.context(() => {
    // 1. Line-by-Line Staggered Text Entrance
    if (contentRef.value) {
      const headingLines = contentRef.value.querySelectorAll('.editorial-statement__heading-line');
      const paragraphLines = [...p1Lines, ...p2Lines];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.value,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      // Heading lines reveal
      tl.fromTo(
        headingLines,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.15, stagger: 0.12, ease: 'power3.out' }
      );

      // Paragraph lines reveal with smooth stagger
      if (paragraphLines.length > 0) {
        tl.fromTo(
          paragraphLines,
          { yPercent: 115, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.05, ease: 'power3.out' },
          '-=0.7'
        );
      }
    }

    // 2. Heavy, Eye-Pleasing GSAP Scroll Unveil & Parallax Animation
    // The white text panel initially overlaps the top of the image;
    // As the user scrolls, the cover smoothly rolls away revealing the full 100vw x 100vh image.
    if (imageContainerRef.value && imageRef.value && imageWrapperRef.value) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: imageContainerRef.value,
        start: 'top 95%',
        end: 'bottom 10%',
        scrub: 1.0,
        onUpdate: (self) => {
          const progress = self.progress;

          // Smooth upward reveal that glides out from under the white text panel
          if (imageWrapperRef.value) {
            gsap.set(imageWrapperRef.value, {
              y: (1 - progress) * 45
            });
          }

          // Rich internal photo depth parallax and subtle settle
          if (imageRef.value) {
            gsap.set(imageRef.value, {
              scale: 1.1 - progress * 0.08,
              yPercent: (progress - 0.5) * -16
            });
          }
        }
      });
    }
  }, sectionRef.value ?? undefined);
});

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  if (textTriggerInstance) {
    textTriggerInstance.kill();
  }
  if (ctx) {
    ctx.revert();
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.editorial-statement {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: $color-text-primary;
  overflow: hidden;

  // Upper Text Panel (White curtain covering the image with symmetrical spacing)
  &__text-panel {
    position: relative;
    z-index: 2;
    background-color: #ffffff;
    width: 100%;
    padding-top: clamp(6.25rem, 12.5vh, 10rem);     // Balanced top spacing (slightly larger)
    padding-bottom: clamp(5.75rem, 11.5vh, 9.25rem); // Matching bottom spacing

    @include mobile {
      padding-top: 4.25rem;
      padding-bottom: 3.75rem;
    }
  }

  &__container {
    width: 100%;
    max-width: $container-max-width;
    margin-left: auto;
    margin-right: auto;
    padding-left: $container-margin-desktop;
    padding-right: $container-margin-desktop;

    @include tablet {
      padding-left: $container-margin-tablet;
      padding-right: $container-margin-tablet;
    }

    @include mobile {
      padding-left: $container-margin-mobile;
      padding-right: $container-margin-mobile;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
  }

  // Main Statement (Dominant, Tight Leading)
  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $font-heading;
    font-size: clamp(3.2rem, 7.2vw, 7.8rem);
    font-weight: 400;
    line-height: 0.94;
    letter-spacing: -0.04em;
    color: #111111;
    margin: 0 0 clamp(2rem, 4vh, 3.25rem) 0;
    padding: 0;
    font-synthesis: none;

    @include mobile {
      font-size: clamp(2.2rem, 9.5vw, 3.4rem);
      line-height: 0.96;
      letter-spacing: -0.035em;
      margin-bottom: 1.5rem;
    }

    &__line-mask {
      display: block;
      overflow: hidden;
      line-height: inherit;
      padding-bottom: 0.08em;
    }

    &-line {
      display: block;
      will-change: transform, opacity;
      white-space: nowrap;

      @include mobile {
        white-space: normal;
      }
    }
  }

  // Supporting Dual-Column Layout
  &__supporting {
    display: flex;
    justify-content: center;
    gap: clamp(2.5rem, 6vw, 6rem);
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    text-align: left;

    @include mobile {
      flex-direction: column;
      gap: 1.25rem;
      text-align: left;
    }
  }

  &__col {
    flex: 1;
    min-width: 0;
    will-change: transform, opacity;
  }

  &__desc {
    font-family: $font-sans;
    font-size: clamp(0.8125rem, 0.9vw, 0.9375rem);
    line-height: 1.65;
    color: #666a71;
    margin: 0;
  }

  // Full-Bleed 100vw x 100vh Image Canvas with Curtain Overlap Unveil
  &__image-fullbleed {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    min-height: 100vh;
    min-height: 100dvh;
    margin-top: -8vh; // Subtle initial tuck behind the white text panel
    margin-bottom: 0;
    padding: 0;
    overflow: hidden;

    @include mobile {
      margin-top: -4vh;
    }
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-height: 100dvh;
    overflow: hidden;
    will-change: transform;
  }

  &__image {
    position: absolute;
    top: -12%;
    left: 0;
    width: 100%;
    height: 124%;
    min-width: 100%;
    min-height: 124%;
    object-fit: cover;
    object-position: center center;
    display: block;
    will-change: transform;
  }
}
</style>
