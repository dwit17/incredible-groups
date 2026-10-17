<template>
  <div class="media-invites-page">
    <!-- ============================================================= -->
    <!-- SECTION 01: Full-Bleed 100vh Hero Canvas                      -->
    <!-- Matches HeroSection.vue & Projects Hero 1-to-1                -->
    <!-- (No Eyebrows, No Description - Exact Reference Match)         -->
    <!-- ============================================================= -->
    <section ref="heroRef" class="media-hero" aria-label="Media Invites &amp; Official Charters">
      <div class="media-hero__canvas">
        <div ref="heroImageWrapperRef" class="media-hero__image-wrapper">
          <img
            ref="heroImageRef"
            src="/images/precision-preliminary.jpg"
            alt="Incredible Groups - Official Architectural Charters &amp; Media Invites"
            class="media-hero__image"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <div class="media-hero__overlay"></div>

        <!-- Monumental Bottom-Left Typographic Block (No Eyebrow, No Description) -->
        <div ref="titleBlockRef" class="media-hero__title-block">
          <h1 class="media-hero__title">
            <span class="media-hero__line-wrap">
              <span class="media-hero__title-line media-hero__title-line--sans">Media</span>
            </span>
            <span class="media-hero__line-wrap">
              <span class="media-hero__title-line media-hero__title-line--serif">Invites &amp; Charters</span>
            </span>
          </h1>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 02: Architectural Certifications & Media Exhibition   -->
    <!-- Asymmetric Staggered Gallery with Signature Image Parallax   -->
    <!-- ============================================================= -->
    <section ref="gallerySectionRef" class="media-catalog">
      <div class="container container--fluid">
        <!-- Minimalist Category Switcher Bar -->
        <div class="media-catalog__header">
          <div class="media-filters" role="tablist" aria-label="Filter Accreditations">
            <button
              v-for="cat in categories"
              :key="cat"
              role="tab"
              :aria-selected="activeCategory === cat"
              class="media-filter-btn"
              :class="{ 'media-filter-btn--active': activeCategory === cat }"
              @click="setCategory(cat)"
            >
              <span>{{ cat }}</span>
              <span class="media-filter-count">
                ({{ cat === 'All' ? certificates.length : getCategoryCount(cat) }})
              </span>
            </button>
          </div>
        </div>

        <!-- Asymmetric Staggered Cards Grid -->
        <div class="media-grid">
          <article
            v-for="(item, idx) in filteredCertificates"
            :key="item.id"
            class="cert-card"
            :class="[
              idx % 3 === 0 ? 'cert-card--featured' : 'cert-card--standard',
              `cert-card--${idx % 2 === 0 ? 'left' : 'right'}`
            ]"
            @click="openModal(item)"
          >
            <!-- Media Frame with Signature Internal Image Depth Parallax -->
            <div class="cert-card__media-wrap">
              <div class="cert-card__media">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="cert-card__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <!-- Interactive Hover Prompt -->
              <div class="cert-card__curtain">
                <span class="cert-card__inspect-btn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                  <span>Inspect Charter</span>
                </span>
              </div>
            </div>

            <!-- Architectural Caption -->
            <div class="cert-card__caption">
              <div>
                <h2 class="cert-card__title">{{ item.title }}</h2>
                <p v-if="idx % 3 === 0 && item.description" class="cert-card__narrative">
                  {{ item.description }}
                </p>
              </div>

              <div class="cert-card__meta-bottom">
                <span class="cert-card__year font-mono">{{ item.year }}</span>
                <button
                  type="button"
                  class="cert-card__open-trigger"
                  aria-label="Inspect credential"
                  @click.stop="openModal(item)"
                >
                  <span>View Details</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- INTERACTIVE ACCREDITATION INSPECTION LIGHTBOX MODAL           -->
    <!-- ============================================================= -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="selectedCert"
          class="cert-modal-backdrop"
          role="dialog"
          aria-modal="true"
          :aria-label="selectedCert.title"
          @click.self="closeModal"
        >
          <div class="cert-modal">
            <!-- Modal Header -->
            <div class="cert-modal__header">
              <div class="cert-modal__tag">
                <span class="cert-pill__dot"></span>
                <span>{{ selectedCert.status }}</span>
                <span class="cert-modal__divider">•</span>
                <span class="cert-modal__reg font-mono">{{ selectedCert.credentialId }}</span>
              </div>

              <button
                type="button"
                class="cert-modal__close-btn"
                aria-label="Close modal"
                @click="closeModal"
              >
                <span>Close</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Modal Body -->
            <div class="cert-modal__body">
              <!-- Visual Framing -->
              <div class="cert-modal__stage">
                <div class="cert-modal__frame">
                  <img
                    :src="selectedCert.image"
                    :alt="selectedCert.title"
                    class="cert-modal__preview"
                  />
                </div>
              </div>

              <!-- Credential Dossier -->
              <div class="cert-modal__dossier">
                <div>
                  <span class="cert-modal__category-tag">{{ selectedCert.category }}</span>
                  <h3 class="cert-modal__title">{{ selectedCert.title }}</h3>
                </div>

                <div class="cert-modal__specs">
                  <div class="cert-modal__spec-item">
                    <span class="cert-modal__spec-label">Issuing Body</span>
                    <span class="cert-modal__spec-value">{{ selectedCert.authority }}</span>
                  </div>
                  <div class="cert-modal__spec-item">
                    <span class="cert-modal__spec-label">Charter Code</span>
                    <span class="cert-modal__spec-value cert-modal__spec-value--gold font-mono">{{ selectedCert.credentialId }}</span>
                  </div>
                  <div class="cert-modal__spec-item">
                    <span class="cert-modal__spec-label">Year of Conferment</span>
                    <span class="cert-modal__spec-value">{{ selectedCert.year }}</span>
                  </div>
                  <div class="cert-modal__spec-item">
                    <span class="cert-modal__spec-label">Valid Duration</span>
                    <span class="cert-modal__spec-value">{{ selectedCert.validUntil }}</span>
                  </div>
                </div>

                <div class="cert-modal__action-row">
                  <button
                    type="button"
                    class="cert-modal__btn cert-modal__btn--primary"
                    @click="copyCredentialId(selectedCert.credentialId)"
                  >
                    <svg v-if="!copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#caa574" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{{ copied ? 'Charter Code Copied' : 'Copy Charter Code' }}</span>
                  </button>

                  <a
                    :href="selectedCert.image"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cert-modal__btn cert-modal__btn--secondary"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span>Inspect Raw File</span>
                  </a>
                </div>
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
import { splitTextIntoLines } from '~/composables/useReveal';
import AppFooter from '~/components/AppFooter.vue';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

useSeoMeta({
  title: 'Media Invites & Charters - Incredible Groups',
  description: 'Official media charters, regulatory registrations, green building council certifications, and architectural accreditations of Incredible Groups.',
  ogTitle: 'Media Invites & Charters - Incredible Groups',
  ogImage: '/images/precision-preliminary.jpg'
});

interface Certificate {
  id: string;
  title: string;
  authority: string;
  category: string;
  year: string;
  validUntil: string;
  credentialId: string;
  status: string;
  image: string;
  description?: string;
}

const certificates = ref<Certificate[]>([
  {
    id: 'cert-igbc-platinum',
    title: 'IGBC Green Homes Platinum Rating',
    authority: 'Indian Green Building Council (CII)',
    category: 'Sustainability',
    year: '2024',
    validUntil: '2029 (5 Years)',
    credentialId: 'IGBC-GH-PL-2024-0892',
    status: 'Platinum Certified',
    image: '/images/certificates/igbc-platinum.svg',
    description: 'Conferred by the Indian Green Building Council under the apex Confederation of Indian Industry, this accreditation confers Platinum standing for bioclimatic envelope performance, 100% on-site rainwater stewardship, and monolithic passive thermal ventilation across landmark residential developments.'
  },
  {
    id: 'cert-iso-9001',
    title: 'ISO 9001:2015 Quality & Spatial Governance',
    authority: 'International Organization for Standardization',
    category: 'Governance',
    year: '2024',
    validUntil: '2029 (5 Years)',
    credentialId: 'ISO-QMS-9001-MH-4421',
    status: 'Verified Standard',
    image: '/images/certificates/iso-9001.svg'
  },
  {
    id: 'cert-coa-fellowship',
    title: 'Council of Architecture Design Fellowship',
    authority: 'Council of Architecture (Statutory Body Govt. of India)',
    category: 'Council Citations',
    year: '2024',
    validUntil: 'Life Conferment',
    credentialId: 'COA-FEL-2024-0019',
    status: 'Fellow Atelier',
    image: '/images/certificates/coa-fellowship.svg'
  },
  {
    id: 'cert-rera-accreditation',
    title: 'RERA Sovereign Developer Charter',
    authority: 'Real Estate Regulatory Authority (MahaRERA & Goa)',
    category: 'Statutory',
    year: '2024',
    validUntil: 'Active (Perpetual)',
    credentialId: 'MahaRERA/P51800049821',
    status: 'Class-A Sovereign',
    image: '/images/certificates/rera-accreditation.svg',
    description: 'Issued under statutory state regulatory authorities across Maharashtra and Goa, this sovereign Class-A charter ratifies uncompromising escrow governance, title perfection, and milestone delivery execution across all residential sanctuaries.'
  },
  {
    id: 'cert-griha-5star',
    title: 'GRIHA 5-Star Net-Zero Carbon Rating',
    authority: 'GRIHA Council • TERI Sustainable Habitat',
    category: 'Sustainability',
    year: '2024',
    validUntil: '2030 (6 Years)',
    credentialId: 'GRIHA-V2024-5S-109',
    status: 'Net-Zero Certified',
    image: '/images/certificates/griha-5star.svg'
  },
  {
    id: 'cert-structural-safety',
    title: 'Zone-IV Seismic & Structural Stability Clearance',
    authority: 'Bureau of Structural & Seismic Safety',
    category: 'Engineering',
    year: '2024',
    validUntil: '100-Year Life Audit',
    credentialId: 'BSE-SEIS-Z4-2024-91',
    status: 'Clearance Granted',
    image: '/images/certificates/structural-safety.svg'
  }
]);

const categories = ['All', 'Sustainability', 'Governance', 'Council Citations', 'Statutory', 'Engineering'];
const activeCategory = ref('All');
const selectedCert = ref<Certificate | null>(null);
const copied = ref(false);

const heroRef = ref<HTMLElement | null>(null);
const heroImageWrapperRef = ref<HTMLElement | null>(null);
const heroImageRef = ref<HTMLElement | null>(null);
const titleBlockRef = ref<HTMLElement | null>(null);
const gallerySectionRef = ref<HTMLElement | null>(null);

const { stop: stopLenis, start: startLenis } = useLenis();

let ctx: gsap.Context | null = null;
let heroScrollTrigger: ScrollTrigger | null = null;

const filteredCertificates = computed(() => {
  if (activeCategory.value === 'All') return certificates.value;
  return certificates.value.filter(c => c.category === activeCategory.value);
});

const getCategoryCount = (cat: string) => {
  return certificates.value.filter(c => c.category === cat).length;
};

const setCategory = (cat: string) => {
  activeCategory.value = cat;
  if (import.meta.client) {
    nextTick(() => {
      ScrollTrigger.refresh();
      initCardAnimations();
    });
  }
};

const openModal = (cert: Certificate) => {
  selectedCert.value = cert;
  copied.value = false;
  if (import.meta.client) {
    stopLenis();
    document.body.style.overflow = 'hidden';
  }
};

const closeModal = () => {
  selectedCert.value = null;
  copied.value = false;
  if (import.meta.client) {
    startLenis();
    document.body.style.overflow = '';
  }
};

const copyCredentialId = async (id: string) => {
  if (!import.meta.client) return;
  try {
    await navigator.clipboard.writeText(id);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2400);
  } catch (_) {}
};

const initCardAnimations = () => {
  if (!import.meta.client || !gallerySectionRef.value) return;

  const cards = gallerySectionRef.value.querySelectorAll<HTMLElement>('.cert-card');
  cards.forEach((card, idx) => {
    const img = card.querySelector<HTMLElement>('.cert-card__img');
    const caption = card.querySelector<HTMLElement>('.cert-card__caption');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 92%',
        end: 'top 40%',
        scrub: 0.6
      }
    });

    // 1. Bottom-to-up smooth card landing
    tl.fromTo(card, { y: 55 + (idx % 2) * 20, opacity: 0.75 }, { y: 0, opacity: 1, ease: 'power2.out' }, 0);

    // 2. Internal depth parallax on image
    if (img) {
      tl.fromTo(img, { yPercent: -8, scale: 1.08 }, { yPercent: 0, scale: 1.0, ease: 'none' }, 0);
    }

    // 3. Caption reveal
    if (caption) {
      tl.fromTo(caption, { opacity: 0.5, y: 12 }, { opacity: 1, y: 0, ease: 'power2.out' }, 0.15);
    }

    // 4. Line-by-line GSAP text reveal for featured certificate narrative (homepage match)
    const narrativeP = card.querySelector<HTMLElement>('.cert-card__narrative');
    if (narrativeP) {
      const lineInners = splitTextIntoLines(narrativeP);
      if (lineInners.length > 0) {
        gsap.fromTo(
          lineInners,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }
  });
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && selectedCert.value) {
    closeModal();
  }
};

onMounted(async () => {
  await nextTick();
  if (!import.meta.client) return;

  window.addEventListener('keydown', handleKeydown);

  ctx = gsap.context(() => {
    // 1. Signature Hero Title Line Entrance Reveal (1-to-1 match with HeroSection.vue & Projects)
    if (titleBlockRef.value) {
      const lines = titleBlockRef.value.querySelectorAll('.media-hero__title-line');
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

.media-invites-page {
  position: relative;
  background-color: #ffffff;
  color: #111111;
  width: 100%;
  min-height: 100vh;
}

/* ========================================================================= */
/* 1. SIGNATURE FULL-BLEED 100VH HERO CANVAS (1-to-1 Match with Site)        */
/* ========================================================================= */
.media-hero {
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
/* 2. MEDIA CATALOG & ASYMMETRIC STAGGERED GRID                              */
/* ========================================================================= */
.media-catalog {
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

.media-filters {
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

.media-filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
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

  @include mobile {
    font-size: 0.75rem;
    padding: 0.4rem 0.85rem;
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

    .media-filter-count {
      color: rgba(255, 255, 255, 0.75);
    }
  }
}

.media-filter-count {
  font-family: $font-mono;
  font-size: 0.75rem;
  color: $color-text-dim;
}

// Media Grid (Staggered Multi-Column Architecture)
.media-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(1.5rem, 3vw, 3rem);

  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

// Asymmetric Card Architecture
.cert-card {
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

  &--featured {
    grid-column: span 12;

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
    }

    .cert-card__media-wrap {
      aspect-ratio: 16 / 10;
    }
  }

  @include mobile {
    grid-column: span 12;
    border-radius: 2px;
  }

  &:hover {
    border-color: rgba(200, 169, 126, 0.45);
    box-shadow: 0 20px 48px rgba(17, 17, 17, 0.08);

    .cert-card__img {
      transform: scale(1.045);
    }

    .cert-card__curtain {
      opacity: 1;
    }

    .cert-card__open-trigger {
      color: $color-accent;
      border-color: $color-accent;
      svg {
        transform: translateX(3px);
      }
    }
  }

  &:active {
    transform: scale(0.995);
  }
}

// Media Wrap with Signature Overflow Clip
.cert-card__media-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 1.414 / 1;
  background-color: #f7f6f2;
  overflow: hidden;
  border-bottom: 1px solid $color-border-light-subtle;
}

.cert-card__media {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem;
  overflow: hidden;
}

.cert-card__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.75s $ease-editorial;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  will-change: transform;
}


.cert-pill__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: $color-accent;
  box-shadow: 0 0 6px rgba(200, 169, 126, 0.8);
}

// Hover Curtain
.cert-card__curtain {
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

.cert-card__inspect-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: $font-heading;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #111111;
  background-color: #ffffff;
  padding: 0.65rem 1.25rem;
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

// Card Captions
.cert-card__caption {
  padding: clamp(1.25rem, 2.2vw, 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @include mobile {
    padding: 1.25rem;
  }
}

.cert-card__title {
  font-family: $font-heading;
  font-size: clamp(1.2rem, 1.8vw, 1.55rem);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: $color-text-primary;
  margin: 0 0 1.25rem 0;

  @include mobile {
    font-size: 1.2rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
}

.cert-card__narrative {
  font-family: $font-content;
  font-size: clamp(0.875rem, 1.1vw, 1.025rem);
  line-height: 1.72;
  color: $color-text-secondary;
  margin: 0 0 clamp(1.25rem, 2vw, 2rem) 0;
  max-width: 50ch;

  @include mobile {
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }
}

.cert-card__meta-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid $color-border-light-subtle;
}

.cert-card__year {
  font-family: $font-mono;
  font-size: 0.8125rem;
  color: $color-text-dim;
  letter-spacing: 0.02em;
}

.cert-card__open-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: $font-content;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: $color-text-primary;
  background: transparent;
  border: 1px solid $color-border-light;
  border-radius: 9999px;
  padding: 0.4rem 0.85rem;
  cursor: pointer;
  transition: all $duration-fast ease;

  svg {
    transition: transform $duration-fast ease;
  }

  &:hover {
    color: $color-accent;
    border-color: $color-accent;
    background-color: rgba(200, 169, 126, 0.06);

    svg {
      transform: translateX(3px);
    }
  }
}

/* ========================================================================= */
/* 3. FULL-SCREEN LIGHTBOX MODAL                                             */
/* ========================================================================= */
.cert-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(12, 13, 14, 0.82);
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

.cert-modal {
  background-color: $color-bg-primary;
  border: 1px solid rgba(255, 255, 255, 0.12);
  width: 100%;
  max-width: 1120px;
  max-height: 92vh;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 32px 72px rgba(0, 0, 0, 0.45);

  @include mobile {
    max-height: 94vh;
    border-radius: 14px 14px 0 0;
    border-bottom: none;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem clamp(1.25rem, 2vw, 2rem);
    background-color: #ffffff;
    border-bottom: 1px solid $color-border-light-subtle;
    gap: 1rem;
  }

  &__tag {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: $font-content;
    font-size: 0.75rem;
    color: $color-text-primary;
    font-weight: 500;
  }

  &__divider {
    color: $color-text-dim;
  }

  &__reg {
    color: $color-text-secondary;
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

  &__body {
    display: grid;
    grid-template-columns: 1.35fr 1fr;
    overflow-y: auto;
    flex: 1;

    @include tablet-down {
      grid-template-columns: 1fr;
    }
  }

  &__stage {
    background-color: #ecece8;
    padding: clamp(1.5rem, 3vw, 2.5rem);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid $color-border-light-subtle;

    @include tablet-down {
      border-right: none;
      border-bottom: 1px solid $color-border-light-subtle;
      padding: 1.25rem;
    }
  }

  &__frame {
    width: 100%;
    aspect-ratio: 1.414 / 1;
    background-color: #ffffff;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  &__preview {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__dossier {
    padding: clamp(1.5rem, 3vw, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;

    @include mobile {
      padding: 1.25rem;
    }
  }

  &__category-tag {
    font-family: $font-content;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: $color-accent;
    display: block;
    margin-bottom: 0.4rem;
  }

  &__title {
    font-family: $font-heading;
    font-size: clamp(1.35rem, 2vw, 1.85rem);
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.025em;
    color: $color-text-primary;
    margin: 0;
  }

  &__specs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.1rem;
    margin: 1.75rem 0;
    padding: 1.25rem 0;
    border-top: 1px solid $color-border-light-subtle;
    border-bottom: 1px solid $color-border-light-subtle;
  }

  &__spec-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  &__spec-label {
    font-family: $font-content;
    font-size: 0.6875rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: $color-text-dim;
  }

  &__spec-value {
    font-family: $font-heading;
    font-size: 0.9375rem;
    color: $color-text-primary;
    font-weight: 500;

    &--gold {
      color: $color-accent;
    }
  }

  &__action-row {
    display: flex;
    gap: 0.75rem;
    margin-top: auto;

    @include mobile {
      flex-direction: column;
    }
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: $font-content;
    font-size: 0.8125rem;
    font-weight: 500;
    padding: 0.75rem 1.25rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all $duration-fast ease;
    text-decoration: none;

    &--primary {
      background-color: $color-text-primary;
      color: #ffffff;
      border: 1px solid $color-text-primary;
      flex: 1;

      &:hover {
        background-color: #000000;
        border-color: #000000;
      }
    }

    &--secondary {
      background-color: transparent;
      color: $color-text-primary;
      border: 1px solid $color-border-light;

      &:hover {
        border-color: $color-text-primary;
        background-color: rgba(17, 17, 17, 0.04);
      }
    }
  }
}

// Modal Animation Transitions
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;

  .cert-modal {
    transition: transform 0.35s $ease-editorial, opacity 0.3s ease;
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;

  .cert-modal {
    transform: translateY(24px) scale(0.98);
    opacity: 0;

    @include mobile {
      transform: translateY(100%);
    }
  }
}
</style>
