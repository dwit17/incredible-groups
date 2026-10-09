<template>
  <div class="page-showcase section-padding-top">
    <div class="container container--fluid">
      <!-- Showcase Header -->
      <div class="showcase-header">
        <span class="eyebrow">MONOGRAPHIC EXHIBITION</span>
        <h1 class="showcase-header__title">
          SPATIAL <span class="showcase-header__title--accent">SHOWCASE</span>
        </h1>
        <p class="body-text showcase-header__desc">
          A visual exploration of light, material honesty, and monolithic architectural geometry across our developments.
        </p>
      </div>

      <!-- Showcase Masonry / Visual Grid -->
      <div class="showcase-grid grid">
        <div
          v-for="(item, idx) in showcaseItems"
          :key="idx"
          :class="[
            item.span === 12 ? 'col-12 col-mobile-full' : 'col-6 col-mobile-full',
            'showcase-item'
          ]"
        >
          <div class="showcase-item__media webgl-target" :class="`showcase-item__media--${item.aspect}`">
            <img :src="item.image" :alt="item.caption" loading="lazy" />
            <div class="showcase-item__overlay">
              <span class="showcase-item__tag tag">{{ item.category }}</span>
              <h2 class="showcase-item__title">{{ item.title }}</h2>
              <span class="showcase-item__location">{{ item.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showcaseItems = [
  {
    title: 'Arabian Sea Cantilever Terraces',
    location: 'Worli Sea Face, Mumbai',
    category: 'Sky Mansions',
    image: '/placeholders/project-1.svg',
    aspect: 'wide',
    span: 12
  },
  {
    title: 'Assagao Rainforest Infinity Water',
    location: 'Assagao, Goa',
    category: 'Biophilic Estates',
    image: '/placeholders/project-2.svg',
    aspect: 'portrait',
    span: 6
  },
  {
    title: 'BKC Financial Hanging Atrium',
    location: 'BKC, Mumbai',
    category: 'Commercial Landmark',
    image: '/placeholders/project-3.svg',
    aspect: 'portrait',
    span: 6
  },
  {
    title: 'Awas Clifftop Basalt Masonry',
    location: 'Alibaug Coast',
    category: 'Private Mansions',
    image: '/placeholders/project-4.svg',
    aspect: 'wide',
    span: 12
  }
];

import { onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

let ctx: gsap.Context | null = null;

useSeoMeta({
  title: 'Spatial Showcase - Incredible Groups Architectural Gallery',
  description: 'Visual monograph and architectural showcase of ultra-luxury estates and landmark towers designed by Incredible Groups.',
  ogTitle: 'Spatial Showcase - Incredible Groups',
  ogImage: '/placeholders/og-cover.png'
});

onMounted(async () => {
  await nextTick();
  if (!import.meta.client) return;

  ctx = gsap.context(() => {
    const titleEl = document.querySelector<HTMLElement>('.showcase-header__title');
    if (titleEl) {
      const lines = splitTextIntoLines(titleEl);
      gsap.fromTo(
        lines,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleEl,
            start: 'top 85%'
          }
        }
      );
    }

    const descEl = document.querySelector<HTMLElement>('.showcase-header__desc');
    if (descEl) {
      const lines = splitTextIntoLines(descEl);
      gsap.fromTo(
        lines,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descEl,
            start: 'top 85%'
          }
        }
      );
    }
  });
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

.page-showcase {
  padding-bottom: clamp(5rem, 10vw, 10rem);
}

.showcase-header {
  margin-bottom: clamp(3rem, 6vw, 6rem);
  max-width: 800px;

  &__title {
    font-size: clamp(2.5rem, 5.5vw, 5.5rem);
    line-height: 1.05;
    margin: 0.75rem 0 1rem;

    &--accent {
      color: $color-accent;
    }
  }
}

.showcase-grid {
  row-gap: 3rem;
}

.showcase-item {
  &__media {
    position: relative;
    overflow: hidden;
    background-color: $color-bg-card;
    border: 1px solid $color-border;
    border-radius: 2px;

    &--wide {
      aspect-ratio: 16 / 8;

      @include mobile {
        aspect-ratio: 16 / 10;
      }
    }

    &--portrait {
      aspect-ratio: 4 / 5;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s $ease-editorial;
    }

    &:hover img {
      transform: scale(1.03);
    }
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: clamp(1.5rem, 3vw, 2.5rem);
    background: linear-gradient(to top, rgba(12, 13, 14, 0.9) 0%, rgba(12, 13, 14, 0.3) 60%, transparent 100%);
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  &__tag {
    align-self: flex-start;
  }

  &__title {
    font-size: clamp(1.4rem, 2.2vw, 2rem);
    color: $color-text;
  }

  &__location {
    font-family: $font-mono;
    font-size: 0.8125rem;
    color: $color-accent;
  }
}
</style>
