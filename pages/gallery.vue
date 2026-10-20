<template>
  <div class="gallery-page">
    <!-- ============================================================= -->
    <!-- SECTION 01: Full-Bleed 100vh Hero Canvas                      -->
    <!-- Matches HeroSection.vue & Projects Hero 1-to-1                -->
    <!-- (No Eyebrows, No Description - Exact Reference Match)         -->
    <!-- ============================================================= -->
    <section ref="heroRef" class="gallery-hero" aria-label="Visual Monograph &amp; Media Gallery">
      <div class="gallery-hero__canvas">
        <div ref="heroImageWrapperRef" class="gallery-hero__image-wrapper">
          <img
            ref="heroImageRef"
            src="/images/hero-architecture.jpg"
            alt="Incredible Groups - Monographic Architecture &amp; Spatial Films"
            class="gallery-hero__image"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <div class="gallery-hero__overlay"></div>

        <!-- Monumental Bottom-Left Typographic Block (No Eyebrow, No Description) -->
        <div ref="titleBlockRef" class="gallery-hero__title-block">
          <h1 class="gallery-hero__title">
            <span class="gallery-hero__line-wrap">
              <span class="gallery-hero__title-line gallery-hero__title-line--sans">Visual</span>
            </span>
            <span class="gallery-hero__line-wrap">
              <span class="gallery-hero__title-line gallery-hero__title-line--serif">Monograph &amp; Gallery</span>
            </span>
          </h1>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 02: Exhibition Gallery with Signature Parallax        -->
    <!-- Asymmetric Cards with Internal Depth Parallax & Video Reels   -->
    <!-- ============================================================= -->
    <section ref="gallerySectionRef" class="gallery-catalog">
      <div class="container container--fluid">
        <!-- Minimalist Category Switcher Bar -->
        <div class="gallery-catalog__header">
          <div class="gallery-filters" role="tablist" aria-label="Filter Media">
            <button
              v-for="cat in categories"
              :key="cat.id"
              role="tab"
              :aria-selected="activeCategory === cat.id"
              class="gallery-filter-btn"
              :class="{ 'gallery-filter-btn--active': activeCategory === cat.id }"
              @click="setCategory(cat.id)"
            >
              <svg v-if="cat.id === 'videos'" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              <svg v-else-if="cat.id === 'photos'" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span>{{ cat.label }}</span>
              <span class="gallery-filter-count">({{ getCategoryCount(cat.id) }})</span>
            </button>
          </div>
        </div>

        <!-- Asymmetric Cards Staggered Grid -->
        <div class="gallery-grid">
          <article
            v-for="(item, idx) in filteredItems"
            :key="item.id"
            class="gallery-card"
            :class="[
              item.spanWide ? 'gallery-card--wide' : 'gallery-card--standard',
              `gallery-card--${item.type}`
            ]"
            @click="openMedia(item)"
          >
            <!-- Media Container with Signature Internal Image Depth Parallax -->
            <div class="gallery-card__media-wrap" :class="item.aspectRatio === 'video' ? 'aspect-video' : 'aspect-photo'">
              <div class="gallery-card__media">
                <!-- Image Asset -->
                <img
                  v-if="item.type === 'image'"
                  :src="item.src"
                  :alt="item.title"
                  class="gallery-card__asset gallery-card__img"
                  loading="lazy"
                  decoding="async"
                />

                <!-- Video Asset with Ambient Hover Loop -->
                <div v-else class="gallery-card__video-box">
                  <video
                    :src="item.src"
                    :poster="item.poster"
                    class="gallery-card__asset gallery-card__video"
                    muted
                    loop
                    playsinline
                    preload="metadata"
                    @mouseenter="playPreview"
                    @mouseleave="pausePreview"
                  ></video>
                </div>
              </div>


              <!-- Hover Curtain -->
              <div class="gallery-card__curtain">
                <span class="gallery-card__inspect-pill">
                  <svg v-if="item.type === 'video'" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  <span>{{ item.type === 'video' ? 'Play Cinema Film' : 'View Full Monograph' }}</span>
                </span>
              </div>
            </div>

            <!-- Architectural Caption & Metadata -->
            <div class="gallery-card__caption">
              <h2 class="gallery-card__title">{{ item.title }}</h2>

              <div v-if="!item.spanWide" class="gallery-card__meta-bottom">
                <span class="gallery-card__location">{{ item.location }}</span>
                <span class="gallery-card__specs font-mono">
                  <span>{{ item.specs }}</span>
                  <span class="gallery-card__arrow">→</span>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- INTERACTIVE LIGHTBOX & CINEMA VIDEO PLAYER MODAL              -->
    <!-- ============================================================= -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="activeMedia"
          class="gallery-modal-backdrop"
          role="dialog"
          aria-modal="true"
          :aria-label="activeMedia.title"
          @click.self="closeMedia"
        >
          <div class="gallery-modal">
            <!-- Modal Header -->
            <div class="gallery-modal__top">
              <div class="gallery-modal__badge-group">
                <span class="gallery-modal__badge" :class="activeMedia.type === 'video' ? 'gallery-modal__badge--gold' : ''">
                  {{ activeMedia.type === 'video' ? 'Cinema Monograph' : 'High-Res Exhibition' }}
                </span>
                <span class="gallery-modal__sep">•</span>
                <span class="gallery-modal__counter font-mono">
                  {{ activeIndex + 1 }} / {{ filteredItems.length }}
                </span>
              </div>

              <div class="gallery-modal__nav">
                <button
                  type="button"
                  class="gallery-modal__nav-btn"
                  aria-label="Previous item"
                  @click="prevMedia"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  class="gallery-modal__nav-btn"
                  aria-label="Next item"
                  @click="nextMedia"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  class="gallery-modal__close-btn"
                  aria-label="Close modal"
                  @click="closeMedia"
                >
                  <span>Close</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Modal Stage: Video Player or Image Viewer -->
            <div class="gallery-modal__stage">
              <div v-if="activeMedia.type === 'video'" class="gallery-modal__player-wrap">
                <video
                  ref="videoPlayerRef"
                  :src="activeMedia.src"
                  :poster="activeMedia.poster"
                  class="gallery-modal__video"
                  controls
                  autoplay
                  playsinline
                ></video>
              </div>

              <div v-else class="gallery-modal__image-wrap">
                <img
                  :src="activeMedia.src"
                  :alt="activeMedia.title"
                  class="gallery-modal__image"
                />
              </div>
            </div>

            <!-- Modal Bottom Metadata Dossier -->
            <div class="gallery-modal__bottom">
              <div class="gallery-modal__info">
                <span class="gallery-modal__location-tag font-mono">
                  {{ activeMedia.location }} • {{ activeMedia.theme }}
                </span>
                <h3 class="gallery-modal__title">{{ activeMedia.title }}</h3>
              </div>

              <div class="gallery-modal__actions">
                <span class="gallery-modal__spec-tag font-mono hidden-mobile">
                  {{ activeMedia.specs }}
                </span>
                <a
                  :href="activeMedia.src"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="gallery-modal__raw-link"
                >
                  <span>Open Raw Asset</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Global Monolithic Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '~/composables/useLenis';
import AppFooter from '~/components/AppFooter.vue';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

useSeoMeta({
  title: 'Visual Monograph & Gallery - Incredible Groups',
  description: 'Architectural photography, monolithic spatial monographs, and cinematic drone reels of Incredible Groups landmark developments.',
  ogTitle: 'Visual Monograph & Gallery - Incredible Groups',
  ogImage: '/images/hero-architecture.jpg'
});

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  location: string;
  theme: string;
  year: string;
  src: string;
  poster?: string;
  duration?: string;
  specs: string;
  aspectRatio: 'video' | 'photo';
  spanWide?: boolean;
}

const galleryItems = ref<GalleryItem[]>([
  {
    id: 'film-aurum',
    type: 'video',
    title: 'The Aurum Monolith - Cantilever Ocean Aerial',
    location: 'Worli Sea Face, Mumbai',
    theme: 'Sky Mansions',
    year: '2025',
    src: '/videos/architectural-drone.mp4',
    poster: '/images/hero-architecture.jpg',
    duration: '0:45 Reel',
    specs: '4K Cinema 60FPS',
    aspectRatio: 'video',
    spanWide: true
  },
  {
    id: 'img-sanctuary',
    type: 'image',
    title: 'Assagao Rainforest Infinity Water & Basalt',
    location: 'Assagao, Goa',
    theme: 'Biophilic Sanctuaries',
    year: '2024',
    src: '/images/project-elihouse.jpg',
    specs: 'Hasselblad 100MP',
    aspectRatio: 'photo',
    spanWide: false
  },
  {
    id: 'img-almaty',
    type: 'image',
    title: 'Monolithic Glazed Hearth & Alpine Terrace',
    location: 'High-Altitude Ridge',
    theme: 'Stone Sanctuaries',
    year: '2024',
    src: '/images/project-almaty.jpg',
    specs: 'Architectural Plate',
    aspectRatio: 'photo',
    spanWide: false
  },
  {
    id: 'film-walkthrough',
    type: 'video',
    title: 'Spatial Light & Shadow Volumetric Study',
    location: 'Alibaug Coastline',
    theme: 'Kinetic Architecture',
    year: '2025',
    src: '/videos/spatial-walkthrough.mp4',
    poster: '/images/statement-architecture.jpg',
    duration: '1:12 Film',
    specs: 'Dolby Vision HDR',
    aspectRatio: 'video',
    spanWide: false
  },
  {
    id: 'img-vision',
    type: 'image',
    title: 'Sovereign Concrete Colonnade & Atrium Core',
    location: 'BKC Financial District',
    theme: 'Monuments',
    year: '2024',
    src: '/images/project-vision.jpg',
    specs: 'Phase One IQ4',
    aspectRatio: 'photo',
    spanWide: false
  },
  {
    id: 'img-millenium',
    type: 'image',
    title: 'Botanical Courtyard & Laterite Masonry',
    location: 'Private Sanctuary Enclave',
    theme: 'Landscape Craft',
    year: '2023',
    src: '/images/project-millenium.jpg',
    specs: 'Orthographic Capture',
    aspectRatio: 'photo',
    spanWide: false
  },
  {
    id: 'film-light-study',
    type: 'video',
    title: 'Dawn to Dusk Solar Trajectory on Travertine',
    location: 'Assagao Sanctuary',
    theme: 'Solar Studies',
    year: '2025',
    src: '/videos/monolith-light-study.mp4',
    poster: '/images/studio-01.jpg',
    duration: '0:38 Time-lapse',
    specs: '4K Raw Master',
    aspectRatio: 'video',
    spanWide: true
  },
  {
    id: 'img-pokrovskoe',
    type: 'image',
    title: 'Minimalist Linear Pool & Basalt Geometry',
    location: 'Coastal Escarpment',
    theme: 'Water Architecture',
    year: '2024',
    src: '/images/project-pokrovskoe.jpg',
    specs: 'Medium Format Film',
    aspectRatio: 'photo',
    spanWide: false
  },
  {
    id: 'img-bolshevik',
    type: 'image',
    title: 'Brickwork Refinement & Bronze Joinery',
    location: 'Industrial Heritage Quarter',
    theme: 'Material Honesty',
    year: '2023',
    src: '/images/project-bolshevik.jpg',
    specs: 'Tonal Archival Print',
    aspectRatio: 'photo',
    spanWide: false
  }
]);

const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'photos', label: 'Photography' },
  { id: 'videos', label: 'Cinema Films' },
  { id: 'sanctuaries', label: 'Sanctuaries' },
  { id: 'monuments', label: 'Monuments' }
];

const activeCategory = ref('all');
const activeMedia = ref<GalleryItem | null>(null);
const videoPlayerRef = ref<HTMLVideoElement | null>(null);

const heroRef = ref<HTMLElement | null>(null);
const heroImageWrapperRef = ref<HTMLElement | null>(null);
const heroImageRef = ref<HTMLElement | null>(null);
const titleBlockRef = ref<HTMLElement | null>(null);
const gallerySectionRef = ref<HTMLElement | null>(null);

const { stop: stopLenis, start: startLenis } = useLenis();

let ctx: gsap.Context | null = null;
let heroScrollTrigger: ScrollTrigger | null = null;

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') return galleryItems.value;
  if (activeCategory.value === 'photos') return galleryItems.value.filter(i => i.type === 'image');
  if (activeCategory.value === 'videos') return galleryItems.value.filter(i => i.type === 'video');
  if (activeCategory.value === 'sanctuaries') return galleryItems.value.filter(i => i.theme.toLowerCase().includes('sanctuary') || i.theme.toLowerCase().includes('biophilic'));
  if (activeCategory.value === 'monuments') return galleryItems.value.filter(i => i.theme.toLowerCase().includes('sky') || i.theme.toLowerCase().includes('monument'));
  return galleryItems.value;
});

const activeIndex = computed(() => {
  if (!activeMedia.value) return -1;
  return filteredItems.value.findIndex(item => item.id === activeMedia.value?.id);
});

const getCategoryCount = (catId: string) => {
  if (catId === 'all') return galleryItems.value.length;
  if (catId === 'photos') return galleryItems.value.filter(i => i.type === 'image').length;
  if (catId === 'videos') return galleryItems.value.filter(i => i.type === 'video').length;
  if (catId === 'sanctuaries') return galleryItems.value.filter(i => i.theme.toLowerCase().includes('sanctuary') || i.theme.toLowerCase().includes('biophilic')).length;
  if (catId === 'monuments') return galleryItems.value.filter(i => i.theme.toLowerCase().includes('sky') || i.theme.toLowerCase().includes('monument')).length;
  return 0;
};

const setCategory = (catId: string) => {
  activeCategory.value = catId;
  if (import.meta.client) {
    nextTick(() => {
      ScrollTrigger.refresh();
      initCardAnimations();
    });
  }
};

const playPreview = (e: MouseEvent) => {
  const video = e.currentTarget as HTMLVideoElement;
  if (video && video.paused) {
    video.play().catch(() => {});
  }
};

const pausePreview = (e: MouseEvent) => {
  const video = e.currentTarget as HTMLVideoElement;
  if (video && !video.paused) {
    video.pause();
    video.currentTime = 0;
  }
};

const openMedia = (item: GalleryItem) => {
  activeMedia.value = item;
  if (import.meta.client) {
    stopLenis();
    document.body.style.overflow = 'hidden';
  }
};

const closeMedia = () => {
  activeMedia.value = null;
  if (import.meta.client) {
    startLenis();
    document.body.style.overflow = '';
  }
};

const prevMedia = () => {
  const idx = activeIndex.value;
  if (idx > 0) {
    activeMedia.value = filteredItems.value[idx - 1];
  } else {
    activeMedia.value = filteredItems.value[filteredItems.value.length - 1];
  }
};

const nextMedia = () => {
  const idx = activeIndex.value;
  if (idx < filteredItems.value.length - 1) {
    activeMedia.value = filteredItems.value[idx + 1];
  } else {
    activeMedia.value = filteredItems.value[0];
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (!activeMedia.value) return;
  if (e.key === 'Escape') closeMedia();
  if (e.key === 'ArrowLeft') prevMedia();
  if (e.key === 'ArrowRight') nextMedia();
};

const initCardAnimations = () => {
  if (!import.meta.client || !gallerySectionRef.value) return;

  const cards = gallerySectionRef.value.querySelectorAll<HTMLElement>('.gallery-card');
  cards.forEach((card, idx) => {
    const asset = card.querySelector<HTMLElement>('.gallery-card__asset');
    const caption = card.querySelector<HTMLElement>('.gallery-card__caption');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 92%',
        end: 'top 40%',
        scrub: 0.6
      }
    });

    // 1. Smooth Bottom-to-Up Landing
    tl.fromTo(card, { y: 60 + (idx % 2) * 20, opacity: 0.75 }, { y: 0, opacity: 1, ease: 'power2.out' }, 0);

    // 2. Signature Internal Depth Parallax
    if (asset) {
      tl.fromTo(asset, { yPercent: -8, scale: 1.08 }, { yPercent: 0, scale: 1.0, ease: 'none' }, 0);
    }

    // 3. Caption Line Reveal
    if (caption) {
      tl.fromTo(caption, { opacity: 0.45, y: 12 }, { opacity: 1, y: 0, ease: 'power2.out' }, 0.15);
    }
  });
};

onMounted(async () => {
  await nextTick();
  if (!import.meta.client) return;

  window.addEventListener('keydown', handleKeydown);

  ctx = gsap.context(() => {
    // 1. Signature Hero Title Line Entrance Reveal
    if (titleBlockRef.value) {
      const lines = titleBlockRef.value.querySelectorAll('.gallery-hero__title-line');
      gsap.fromTo(
        lines,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.16,
          ease: 'power3.out',
          delay: 0.15
        }
      );
    }

    // 2. Hero Background Image Scale Entrance
    if (heroImageRef.value) {
      gsap.fromTo(
        heroImageRef.value,
        { scale: 1.08, opacity: 0.88 },
        { scale: 1.0, opacity: 1.0, duration: 2.0, ease: 'power2.out' }
      );
    }

    // 3. Hero Scroll Parallax Scrub
    if (heroImageRef.value && heroRef.value) {
      heroScrollTrigger = ScrollTrigger.create({
        trigger: heroRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          if (!heroImageRef.value) return;
          const p = self.progress;
          gsap.set(heroImageRef.value, {
            y: p * 60,
            scale: 1 + p * 0.05
          });
        }
      });
    }

    // 4. Staggered Asymmetric Cards Landing & Depth Parallax
    initCardAnimations();
  });

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 400);
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('keydown', handleKeydown);
    startLenis();
    document.body.style.overflow = '';
  }
  if (heroScrollTrigger) {
    heroScrollTrigger.kill();
    heroScrollTrigger = null;
  }
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.gallery-page {
  position: relative;
  background-color: #ffffff;
  color: #111111;
  width: 100%;
  min-height: 100vh;
}

/* ========================================================================= */
/* 1. SIGNATURE FULL-BLEED 100VH HERO CANVAS (1-to-1 Match with Site)        */
/* ========================================================================= */
.gallery-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0c0d0e;

  &__canvas {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 36%;
    display: block;
    will-change: transform;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(12, 13, 14, 0.35) 0%,
      rgba(12, 13, 14, 0) 25%,
      rgba(12, 13, 14, 0) 50%,
      rgba(12, 13, 14, 0.6) 100%
    );
  }

  &__title-block {
    position: absolute;
    bottom: clamp(24px, 3.6vh, 40px);
    left: clamp(24px, 3.2vw, 44px);
    z-index: 10;
    color: #ffffff;
    pointer-events: none;
    max-width: 90vw;

    @include mobile {
      bottom: 1.5rem;
      left: 1.25rem;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  &__line-wrap {
    display: block;
    overflow: hidden;
    line-height: 0.94;
    padding-bottom: 0.1em;
  }

  &__title-line {
    display: block;
    will-change: transform, opacity;

    &--sans {
      font-family: $font-sans;
      font-size: clamp(3rem, 6.4vw, 6.6rem);
      font-weight: 600;
      line-height: 0.92;
      letter-spacing: -0.035em;
      color: #ffffff;

      @include mobile {
        font-size: clamp(2.4rem, 10vw, 3.8rem);
      }
    }

    &--serif {
      font-family: $font-serif;
      font-size: clamp(3rem, 6.4vw, 6.6rem);
      font-weight: 400;
      line-height: 0.92;
      letter-spacing: -0.01em;
      color: #ffffff;

      @include mobile {
        font-size: clamp(2.4rem, 10vw, 3.8rem);
      }
    }
  }
}

/* ========================================================================= */
/* 2. ASYMMETRIC GALLERY CATALOG & DEPTH PARALLAX                           */
/* ========================================================================= */
.gallery-catalog {
  padding-top: clamp(3rem, 6vw, 5.5rem);
  padding-bottom: clamp(5rem, 10vw, 9rem);
  background-color: $color-bg-primary;

  @include mobile {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: clamp(2rem, 4vw, 3.5rem);
    border-bottom: 1px solid $color-border-light-subtle;
    padding-bottom: 1.5rem;
  }
}

.gallery-filters {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @include mobile {
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    padding-bottom: 0.5rem;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.gallery-filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: $font-content;
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: $color-text-secondary;
  background: transparent;
  border: 1px solid $color-border-light;
  border-radius: 9999px;
  padding: 0.45rem 1rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all $duration-fast ease;

  @media (max-width: 1024px) {
    font-size: 14px;
    min-height: 44px;
    padding: 0.5rem 1.15rem;
  }

  @include mobile {
    font-size: 14px;
    min-height: 44px;
    padding: 0.5rem 1rem;
    flex-shrink: 0;
  }

  &:hover {
    color: $color-text-primary;
    border-color: rgba(17, 17, 17, 0.35);
    background-color: rgba(17, 17, 17, 0.03);
  }

  &--active {
    color: #ffffff;
    background-color: $color-text-primary;
    border-color: $color-text-primary;

    &:hover {
      color: #ffffff;
      background-color: #000000;
      border-color: #000000;
    }

    .gallery-filter-count {
      color: rgba(255, 255, 255, 0.75);
    }
  }
}

.gallery-filter-count {
  font-family: $font-mono;
  font-size: 0.75rem;
  color: $color-text-dim;

  @media (max-width: 1024px) {
    font-size: 13px;
  }
}

// Asymmetric Gallery Grid
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(1.5rem, 3vw, 3rem);

  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

// Card Spanning & Structure
.gallery-card {
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid $color-border-light;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(17, 17, 17, 0.04);
  transition: border-color $duration-normal ease, box-shadow $duration-normal ease;
  will-change: transform;

  &--wide {
    grid-column: span 12;

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1.55fr 1fr;
    }

    .gallery-card__media-wrap {
      aspect-ratio: 16 / 9;
    }

    .gallery-card__caption {
      justify-content: center;
      padding: clamp(2rem, 3.5vw, 4rem);

      .gallery-card__title {
        font-size: clamp(1.4rem, 2.2vw, 2.1rem);
        line-height: 1.25;
        margin: 0;
      }
    }
  }

  @include mobile {
    grid-column: span 12;
    border-radius: 2px;
  }

  &:hover {
    border-color: rgba(200, 169, 126, 0.45);
    box-shadow: 0 20px 48px rgba(17, 17, 17, 0.08);

    .gallery-card__asset {
      transform: scale(1.045);
    }

    .gallery-card__curtain {
      opacity: 1;
    }

    .gallery-card__arrow {
      transform: translateX(4px);
      color: $color-accent;
    }
  }

  &:active {
    transform: scale(0.995);
  }
}

// Fluid Media Frame with Signature Overflow Clip
.gallery-card__media-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #0c0d0e;
  border-bottom: 1px solid $color-border-light-subtle;

  &.aspect-video {
    aspect-ratio: 16 / 9;
  }

  &.aspect-photo {
    aspect-ratio: 4 / 3;

    @include mobile {
      aspect-ratio: 16 / 10;
    }
  }
}

.gallery-card__media {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.gallery-card__video-box {
  width: 100%;
  height: 100%;
  position: relative;
}

.gallery-card__asset {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.75s $ease-editorial;
  will-change: transform;
}

// Hover Curtain
.gallery-card__curtain {
  position: absolute;
  inset: 0;
  background: rgba(17, 17, 17, 0.32);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity $duration-fast ease;
  pointer-events: none;

  @include mobile {
    display: none;
  }
}

.gallery-card__inspect-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: $font-heading;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #111111;
  background-color: #ffffff;
  padding: 0.65rem 1.25rem;
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

// Captions
.gallery-card__caption {
  padding: clamp(1.25rem, 2.2vw, 2rem);
  display: flex;
  flex-direction: column;
  flex: 1;

  @include mobile {
    padding: 1.2rem;
  }
}

.gallery-card__title {
  font-family: $font-heading;
  font-size: clamp(1.15rem, 1.6vw, 1.45rem);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: $color-text-primary;
  margin: 0 0 1rem 0;

  @include mobile {
    font-size: 1.2rem;
    line-height: 1.3;
  }
}

.gallery-card__meta-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid $color-border-light-subtle;
}

.gallery-card__location {
  font-family: $font-content;
  font-size: 0.8125rem;
  color: $color-text-secondary;
}

.gallery-card__specs {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: $color-accent;
}

.gallery-card__arrow {
  transition: transform $duration-fast ease, color $duration-fast ease;
}

/* ========================================================================= */
/* 3. CINEMA & LIGHTBOX MODAL                                                */
/* ========================================================================= */
.gallery-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(12, 13, 14, 0.85);
  backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 3vw, 2.5rem);

  @include mobile {
    padding: 0;
    align-items: flex-end;
  }
}

.gallery-modal {
  background-color: $color-bg-primary;
  border: 1px solid rgba(255, 255, 255, 0.12);
  width: 100%;
  max-width: 1240px;
  max-height: 92vh;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 32px 72px rgba(0, 0, 0, 0.5);

  @include mobile {
    max-height: 94vh;
    border-radius: 14px 14px 0 0;
    border-bottom: none;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem clamp(1.25rem, 2vw, 2rem);
    background-color: #ffffff;
    border-bottom: 1px solid $color-border-light-subtle;
  }

  &__badge-group {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  &__badge {
    font-family: $font-content;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: $color-text-primary;

    &--gold {
      color: $color-accent;
    }
  }

  &__sep {
    color: $color-text-dim;
  }

  &__counter {
    color: $color-text-secondary;
    font-size: 0.75rem;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__nav-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid $color-border-light;
    background: transparent;
    color: $color-text-secondary;
    cursor: pointer;
    transition: all $duration-fast ease;

    @include mobile {
      display: none;
    }

    &:hover {
      color: #111111;
      border-color: #111111;
      background-color: rgba(17, 17, 17, 0.04);
    }
  }

  &__close-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: $font-content;
    font-size: 0.8125rem;
    color: $color-text-secondary;
    background: transparent;
    border: 1px solid $color-border-light;
    border-radius: 9999px;
    padding: 0.35rem 0.85rem;
    cursor: pointer;
    transition: all $duration-fast ease;

    &:hover {
      color: #111111;
      border-color: #111111;
      background-color: rgba(17, 17, 17, 0.05);
    }
  }

  &__stage {
    height: clamp(260px, 60vh, 700px);
    background-color: #0c0d0e;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    @include mobile {
      height: 48vh;
    }
  }

  &__player-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    outline: none;
  }

  &__image-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  &__image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.15rem clamp(1.25rem, 2vw, 2rem);
    background-color: #ffffff;
    border-top: 1px solid $color-border-light-subtle;
    gap: 1rem;

    @include mobile {
      padding: 1rem 1.25rem;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  &__location-tag {
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: $color-accent;
  }

  &__title {
    font-family: $font-heading;
    font-size: clamp(1.1rem, 1.4vw, 1.35rem);
    font-weight: 500;
    line-height: 1.25;
    color: $color-text-primary;
    margin: 0;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__spec-tag {
    font-size: 0.75rem;
    color: $color-text-secondary;
  }

  &__raw-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: $font-content;
    font-size: 0.75rem;
    color: $color-text-secondary;
    text-decoration: none;
    border: 1px solid $color-border-light;
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    transition: all $duration-fast ease;

    &:hover {
      color: $color-accent;
      border-color: $color-accent;
    }
  }
}

@include mobile {
  .hidden-mobile {
    display: none;
  }
}

// Modal Animation Transitions
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;

  .gallery-modal {
    transition: transform 0.35s $ease-editorial, opacity 0.3s ease;
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;

  .gallery-modal {
    transform: translateY(24px) scale(0.98);
    opacity: 0;

    @include mobile {
      transform: translateY(100%);
    }
  }
}
</style>
