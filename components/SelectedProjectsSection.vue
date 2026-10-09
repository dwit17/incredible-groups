<template>
  <section ref="sectionRef" class="selected-projects" aria-label="Selected Projects">
    <div class="selected-projects__inner">
      <!-- Title Header: Clean 2-Line Sans-Serif with Counter (Exact Reference Match) -->
      <div ref="headerRef" class="selected-projects__header">
        <h2 class="selected-projects__title">
          <span class="selected-projects__title-mask">
            <span class="selected-projects__title-line">Selected</span>
          </span>
          <span class="selected-projects__title-mask">
            <span class="selected-projects__title-line">
              Projects <span class="selected-projects__count">(8+)</span>
            </span>
          </span>
        </h2>
      </div>

      <!-- Asymmetric Staggered Project Gallery Grid (Exact Reference Match) -->
      <div class="selected-projects__gallery">
        <!-- Row 1: Sanctuary of Solitude & Millenium Private Park -->
        <div class="selected-projects__row selected-projects__row--1">
          <!-- 1. Sanctuary of Solitude -->
          <NuxtLink
            to="/projects/sanctuary-of-solitude"
            ref="card1Ref"
            class="selected-projects__card selected-projects__card--pokrovskoe"
            aria-label="View Sanctuary of Solitude Monograph"
          >
            <div class="selected-projects__media-wrap">
              <div class="selected-projects__media">
                <img
                  src="/images/project-pokrovskoe.jpg"
                  alt="Sanctuary of Solitude - Private Estates"
                  class="selected-projects__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div class="selected-projects__caption">
              <span class="selected-projects__name">Sanctuary of Solitude</span>
              <span class="selected-projects__area">18 Acres</span>
            </div>
          </NuxtLink>

          <!-- 2. Millenium Private Park -->
          <NuxtLink
            to="/projects/millenium-private-park"
            ref="card2Ref"
            class="selected-projects__card selected-projects__card--millenium"
            aria-label="View Millenium Private Park Monograph"
          >
            <div class="selected-projects__media-wrap">
              <div class="selected-projects__media">
                <img
                  src="/images/project-millenium.jpg"
                  alt="Millenium Private Park"
                  class="selected-projects__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div class="selected-projects__caption">
              <span class="selected-projects__name">Millenium Private Park</span>
              <span class="selected-projects__area">320,000 sq.ft</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Row 2: The Apex Pavilion & KNS Stolbovo Residences -->
        <div class="selected-projects__row selected-projects__row--2">
          <!-- 3. The Apex Financial Pavilion -->
          <NuxtLink
            to="/projects/the-apex-financial-pavilion"
            ref="card3Ref"
            class="selected-projects__card selected-projects__card--bolshevik"
            aria-label="View The Apex Pavilion Monograph"
          >
            <div class="selected-projects__media-wrap">
              <div class="selected-projects__media">
                <img
                  src="/images/project-bolshevik.jpg"
                  alt="The Apex Financial Pavilion"
                  class="selected-projects__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div class="selected-projects__caption">
              <span class="selected-projects__name">The Apex Pavilion</span>
              <span class="selected-projects__area">820,000 sq.ft</span>
            </div>
          </NuxtLink>

          <!-- 4. KNS Stolbovo Residences -->
          <NuxtLink
            to="/projects/kns-stolbovo-residences"
            ref="card4Ref"
            class="selected-projects__card selected-projects__card--kns"
            aria-label="View KNS Stolbovo Residences Monograph"
          >
            <div class="selected-projects__media-wrap">
              <div class="selected-projects__media">
                <img
                  src="/images/project-kns.jpg"
                  alt="KNS Stolbovo Residences"
                  class="selected-projects__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div class="selected-projects__caption">
              <span class="selected-projects__name">KNS Stolbovo Residences</span>
              <span class="selected-projects__area">680,000 sq.ft</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Row 3: Kotelnaya Kinetics Pavilion -->
        <div class="selected-projects__row selected-projects__row--3">
          <!-- 5. Kotelnaya Kinetics Cultural Pavilion -->
          <NuxtLink
            to="/projects/kotelnaya-kinetics-pavilion"
            ref="card5Ref"
            class="selected-projects__card selected-projects__card--kotelnaya"
            aria-label="View Kotelnaya Kinetics Pavilion Monograph"
          >
            <div class="selected-projects__media-wrap">
              <div class="selected-projects__media">
                <img
                  src="/images/project-kotelnaya.jpg"
                  alt="Kotelnaya Kinetics Cultural Pavilion"
                  class="selected-projects__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div class="selected-projects__caption">
              <span class="selected-projects__name">Kotelnaya Cultural Pavilion</span>
              <span class="selected-projects__area">180,000 sq.ft</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Row 4: Elysian Clifftop Manor -->
        <div class="selected-projects__row selected-projects__row--4">
          <!-- 6. Elysian Clifftop Manor -->
          <NuxtLink
            to="/projects/elysian-clifftop-manor"
            ref="card6Ref"
            class="selected-projects__card selected-projects__card--vision"
            aria-label="View Elysian Clifftop Manor Monograph"
          >
            <div class="selected-projects__media-wrap">
              <div class="selected-projects__media">
                <img
                  src="/images/project-vision.jpg"
                  alt="Elysian Clifftop Manor"
                  class="selected-projects__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div class="selected-projects__caption">
              <span class="selected-projects__name">Elysian Clifftop</span>
              <span class="selected-projects__area">6.5 Acres</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Row 5: Almaty Heritage Manor & The Aurum Monolith -->
        <div class="selected-projects__row selected-projects__row--5">
          <!-- 7. Almaty Heritage Manor -->
          <NuxtLink
            to="/projects/almaty-stone-manor"
            ref="card7Ref"
            class="selected-projects__card selected-projects__card--almaty"
            aria-label="View Almaty Heritage Manor Monograph"
          >
            <div class="selected-projects__media-wrap">
              <div class="selected-projects__media">
                <img
                  src="/images/project-almaty.jpg"
                  alt="Almaty Heritage Manor"
                  class="selected-projects__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div class="selected-projects__caption">
              <span class="selected-projects__name">Almaty Heritage Manor</span>
              <span class="selected-projects__area">24 Acres</span>
            </div>
          </NuxtLink>

          <!-- 8. The Aurum Monolith -->
          <NuxtLink
            to="/projects/the-aurum-monolith"
            ref="card8Ref"
            class="selected-projects__card selected-projects__card--elihouse"
            aria-label="View The Aurum Monolith Monograph"
          >
            <div class="selected-projects__media-wrap">
              <div class="selected-projects__media">
                <img
                  src="/images/project-elihouse.jpg"
                  alt="The Aurum Monolith"
                  class="selected-projects__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div class="selected-projects__caption">
              <span class="selected-projects__name">The Aurum Monolith</span>
              <span class="selected-projects__area">450,000 sq.ft</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const sectionRef = ref<HTMLElement | null>(null);
const headerRef = ref<HTMLElement | null>(null);

const card1Ref = ref<HTMLElement | null>(null);
const card2Ref = ref<HTMLElement | null>(null);
const card3Ref = ref<HTMLElement | null>(null);
const card4Ref = ref<HTMLElement | null>(null);
const card5Ref = ref<HTMLElement | null>(null);
const card6Ref = ref<HTMLElement | null>(null);
const card7Ref = ref<HTMLElement | null>(null);
const card8Ref = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!import.meta.client || !sectionRef.value) return;

  ctx = gsap.context(() => {
    // 1. Header Entrance (Line-by-Line Masked Pop-Up)
    if (headerRef.value) {
      const lines = headerRef.value.querySelectorAll('.selected-projects__title-line');
      gsap.fromTo(
        lines,
        { yPercent: 115, opacity: 0 },
        {
          scrollTrigger: {
            trigger: headerRef.value,
            start: 'top 85%',
            end: 'top 45%',
            scrub: 0.6
          },
          yPercent: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    }

    // 2. High-Performance Bottom-to-Up Landing GSAP Parallax Animation on Each Card
    const getEl = (item: any): HTMLElement | null => {
      if (!item) return null;
      return (item.$el || item) as HTMLElement;
    };

    const cards = [
      { el: getEl(card1Ref.value), speed: 70, parallax: 6 },
      { el: getEl(card2Ref.value), speed: 95, parallax: 8 },
      { el: getEl(card3Ref.value), speed: 75, parallax: 6 },
      { el: getEl(card4Ref.value), speed: 90, parallax: 8 },
      { el: getEl(card5Ref.value), speed: 85, parallax: 7 },
      { el: getEl(card6Ref.value), speed: 80, parallax: 6 },
      { el: getEl(card7Ref.value), speed: 65, parallax: 6 },
      { el: getEl(card8Ref.value), speed: 85, parallax: 7 }
    ];

    cards.forEach(({ el, speed, parallax }) => {
      if (!el || typeof el.querySelector !== 'function') return;

      const img = el.querySelector('.selected-projects__img');
      const caption = el.querySelector('.selected-projects__caption');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          end: 'top 40%',
          scrub: 0.6,
          invalidateOnRefresh: true
        }
      });

      // 1. Smooth Bottom-to-Up Landing
      tl.fromTo(
        el,
        { y: speed, opacity: 0.8 },
        { y: 0, opacity: 1, ease: 'power2.out', force3D: true, duration: 1 },
        0
      );

      // 2. Internal Subtle Depth Parallax
      if (img) {
        tl.fromTo(
          img,
          { yPercent: -parallax, scale: 1.05 },
          { yPercent: 0, scale: 1.0, ease: 'none', force3D: true, duration: 1 },
          0
        );
      }

      // 3. Caption Masked Line Reveal
      if (caption) {
        const captionLines = splitTextIntoLines(caption, { inline: true });
        if (captionLines.length > 0) {
          tl.fromTo(
            captionLines,
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, ease: 'power3.out', duration: 1 },
            0.15
          );
        }
      }
    });

  }, sectionRef.value);
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

.selected-projects {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: #111111;
  padding-top: clamp(6rem, 12vh, 12rem);
  padding-bottom: clamp(8rem, 16vh, 16rem);
  box-sizing: border-box;

  &__inner {
    width: 100%;
    max-width: $container-max-width;
    margin: 0 auto;
    padding-left: clamp(24px, 3.8vw, 64px);
    padding-right: clamp(24px, 3.8vw, 64px);
    box-sizing: border-box;
  }

  // Header Title
  &__header {
    width: 100%;
    margin-bottom: clamp(4.5rem, 9vh, 9rem);
  }

  &__title {
    font-family: $font-sans;
    font-size: clamp(48px, 6.2vw, 92px);
    font-weight: 400;
    line-height: 0.92;
    letter-spacing: -0.035em;
    color: #111111;
    margin: 0;
    padding: 0;
  }

  &__title-mask {
    display: block;
    overflow: hidden;
    padding-bottom: 0.12em;
    line-height: inherit;
  }

  &__title-line {
    display: block;
    white-space: nowrap;
    will-change: transform, opacity;
  }

  &__count {
    font-family: $font-sans;
    font-size: 0.45em;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #111111;
    vertical-align: super;
    margin-left: 0.15em;
  }

  // Gallery Container & Rows
  &__gallery {
    display: flex;
    flex-direction: column;
    gap: clamp(5rem, 11vh, 12rem);
    width: 100%;
  }

  &__row {
    display: flex;
    width: 100%;
    position: relative;
    gap: clamp(2.5rem, 5vw, 6rem);

    &--1 {
      justify-content: space-between;
      align-items: flex-start;
    }

    &--2 {
      justify-content: space-between;
      align-items: flex-start;
      margin-top: clamp(2rem, 5vh, 6rem);
    }

    &--3 {
      justify-content: flex-end;
      align-items: flex-start;
    }

    &--4 {
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: clamp(2rem, 4vh, 5rem);
    }

    &--5 {
      justify-content: space-between;
      align-items: flex-start;
      margin-top: clamp(2rem, 5vh, 6rem);
    }
  }

  // Individual Project Cards
  &__card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    box-sizing: border-box;

    // Specific Asymmetric Widths Matching Reference
    &--pokrovskoe {
      width: clamp(320px, 44vw, 580px);
      flex: 0 1 clamp(320px, 44vw, 580px);
    }

    &--millenium {
      width: clamp(340px, 46vw, 640px);
      flex: 0 1 clamp(340px, 46vw, 640px);
      margin-top: clamp(6rem, 14vh, 16rem); // Staggered below Pokrovskoe
    }

    &--bolshevik {
      width: clamp(260px, 32vw, 460px);
      flex: 0 1 clamp(260px, 32vw, 460px);
      margin-top: clamp(2rem, 4vh, 5rem);
    }

    &--kns {
      width: clamp(340px, 44vw, 600px);
      flex: 0 1 clamp(340px, 44vw, 600px);
    }

    &--kotelnaya {
      width: clamp(340px, 46vw, 640px);
      flex: 0 1 clamp(340px, 46vw, 640px);
    }

    &--vision {
      width: clamp(280px, 34vw, 480px);
      flex: 0 1 clamp(280px, 34vw, 480px);
    }

    &--almaty {
      width: clamp(320px, 44vw, 580px);
      flex: 0 1 clamp(320px, 44vw, 580px);
    }

    &--elihouse {
      width: clamp(320px, 44vw, 580px);
      flex: 0 1 clamp(320px, 44vw, 580px);
      margin-top: clamp(6rem, 14vh, 16rem); // Staggered below Almaty Hotel with distinct gap
    }
  }

  &__media-wrap {
    width: 100%;
    overflow: hidden;
    background-color: #f4f4f4;
    position: relative;
    contain: paint;
    border-radius: 1px;
  }

  &__media {
    position: relative;
    width: 100%;
    overflow: hidden;
    contain: strict;

    .selected-projects__card--pokrovskoe & {
      aspect-ratio: 16 / 10.5;
    }

    .selected-projects__card--millenium & {
      aspect-ratio: 16 / 10.5;
    }

    .selected-projects__card--bolshevik & {
      aspect-ratio: 3 / 4;
    }

    .selected-projects__card--kns & {
      aspect-ratio: 16 / 11;
    }

    .selected-projects__card--kotelnaya & {
      aspect-ratio: 16 / 10.5;
    }

    .selected-projects__card--vision & {
      aspect-ratio: 3 / 4.2;
    }

    .selected-projects__card--almaty & {
      aspect-ratio: 16 / 10.5;
    }

    .selected-projects__card--elihouse & {
      aspect-ratio: 16 / 10.5;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    transition: filter 0.4s ease;
  }

  &:hover &__img {
    filter: brightness(1.02);
  }

  // Caption: Clean Two-Column Bottom Details (Exact Reference Match)
  &__caption {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    padding-top: 0.35rem;
  }

  &__name {
    font-family: $font-sans;
    font-size: clamp(0.75rem, 0.82vw, 0.8125rem); // 12-13px
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #111111;
  }

  &__area {
    font-family: $font-sans;
    font-size: clamp(0.75rem, 0.82vw, 0.8125rem); // 12-13px
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #111111;
  }

  // Responsive Breakpoints
  @include mobile {
    padding-top: 4rem;
    padding-bottom: 6rem;

    &__header {
      margin-bottom: 3rem;
    }

    &__title {
      font-size: clamp(36px, 9.5vw, 52px);
    }

    &__gallery {
      gap: 3.5rem;
    }

    &__row {
      flex-direction: column;
      gap: 3.5rem;
      margin-top: 0 !important;
      padding-left: 0 !important;
    }

    &__card {
      width: 100% !important;
      margin-top: 0 !important;
    }
  }
}
</style>
