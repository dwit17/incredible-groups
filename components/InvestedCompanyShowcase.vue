<template>
  <article v-if="company" ref="showcaseRef" class="venture-dossier" :aria-label="company.name">
    
    <!-- ============================================================= -->
    <!-- 1. VENTURE IDENTITY & STRUCTURED CAPITAL STRIP                -->
    <!-- ============================================================= -->
    <header class="venture-dossier__header">
      <div class="venture-dossier__identity-bar">
        
        <!-- Brand Logo & Title Group -->
        <div class="venture-dossier__brand-group">
          <div class="venture-dossier__logo-frame">
            <CompanyBrandLogo :company-id="company.id" :fallback-name="company.name" :is-dark="false" />
          </div>
          <div class="venture-dossier__title-group">
            <h2 class="venture-dossier__name">{{ company.name }}</h2>
          </div>
        </div>

        <!-- Permalink Action -->
        <NuxtLink :to="`/companies/${company.slug}`" class="venture-dossier__direct-link">
          <span>Explore Dedicated Monograph</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </NuxtLink>
      </div>

      <!-- 4-Column Structured Investment Parameters -->
      <div class="venture-dossier__metrics-matrix">
        <div class="matrix-cell">
          <span class="matrix-cell__label">Invested Capital</span>
          <span class="matrix-cell__value">{{ company.investedCapital }}</span>
        </div>
        <div class="matrix-cell">
          <span class="matrix-cell__label">Equity Stake</span>
          <span class="matrix-cell__value">{{ company.equityStake }}</span>
        </div>
        <div class="matrix-cell">
          <span class="matrix-cell__label">Enterprise Valuation</span>
          <span class="matrix-cell__value">{{ company.valuation }}</span>
        </div>
        <div class="matrix-cell">
          <span class="matrix-cell__label">Headquarters</span>
          <span class="matrix-cell__value">{{ company.headquarters }}</span>
        </div>
      </div>
    </header>

    <!-- ============================================================= -->
    <!-- 2. FOUNDATIONAL ETHICS & ATELIER THESIS                       -->
    <!-- ============================================================= -->
    <section class="venture-dossier__section venture-dossier__section--ethics">
      <div class="ethics-layout">
        <!-- Left: Mission Quote & Values -->
        <div class="ethics-layout__left">
          <h3 class="ethics-layout__title">Guiding Purpose</h3>
          
          <blockquote class="ethics-layout__quote">
            &ldquo;{{ company.ethicsAndMission }}&rdquo;
          </blockquote>

          <div class="ethics-layout__values">
            <span class="values-label">Core Values</span>
            <div class="values-tags">
              <span
                v-for="(val, vIdx) in company.coreValues"
                :key="vIdx"
                class="value-tag"
              >
                {{ val }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: Overview & Investment Rationale -->
        <div class="ethics-layout__right">
          <div class="overview-block">
            <h4 class="overview-title">About the Company</h4>
            <p class="overview-lead">{{ company.aboutUs }}</p>
          </div>

          <div class="rationale-card">
            <p class="rationale-card__text">{{ company.atelierWhyWeInvested }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 3. PROBLEM & PROPRIETARY ENGINEERING COMPARISON               -->
    <!-- ============================================================= -->
    <section class="venture-dossier__section venture-dossier__section--ps">
      <div class="section-heading">
        <h3 class="section-heading__title">Problem vs. Proprietary Engineering</h3>
      </div>

      <div class="ps-columns">
        <!-- Problem Column -->
        <div class="ps-card ps-card--problem">
          <h4 class="ps-card__heading">Market Inefficiency</h4>
          <p class="ps-card__p">{{ company.problemStatement }}</p>
          
          <div class="ps-card__sub-box">
            <p class="ps-sub-text">{{ company.marketFriction }}</p>
          </div>
        </div>

        <!-- Solution Column -->
        <div class="ps-card ps-card--solution">
          <h4 class="ps-card__heading">The Solution</h4>
          <p class="ps-card__p">{{ company.howTheyAreSolving }}</p>
          
          <div class="ps-card__sub-box">
            <ul class="ip-list">
              <li
                v-for="(tech, tIdx) in company.proprietaryTech"
                :key="tIdx"
                class="ip-item"
              >
                <span class="ip-bullet">&bull;</span>
                <span>{{ tech }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 4. OPERATIONAL IMAGE SHOWCASE GALLERY                         -->
    <!-- ============================================================= -->
    <section v-if="company.gallery && company.gallery.length > 0" class="venture-dossier__section venture-dossier__section--gallery">
      <div class="section-heading">
        <h3 class="section-heading__title">Visual Showcase &amp; Installations</h3>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(img, gIdx) in company.gallery"
          :key="gIdx"
          class="gallery-tile"
        >
          <div class="gallery-tile__image-frame">
            <img :src="img.url" :alt="img.caption" loading="lazy" class="gallery-tile__img" />
          </div>
          <div class="gallery-tile__caption">
            <span class="gallery-tile__text">{{ img.caption }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 5. KEY AUDITED METRICS / KPIS                                 -->
    <!-- ============================================================= -->
    <section v-if="company.keyMetrics && company.keyMetrics.length > 0" class="venture-dossier__section venture-dossier__section--kpis">
      <div class="section-heading">
        <h3 class="section-heading__title">Key Performance Indicators</h3>
      </div>

      <div class="kpi-grid">
        <div
          v-for="(kpi, kIdx) in company.keyMetrics"
          :key="kIdx"
          class="kpi-card"
        >
          <span class="kpi-card__val">{{ kpi.value }}</span>
          <span class="kpi-card__label">{{ kpi.label }}</span>
        </div>
      </div>
    </section>

  </article>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import type { Company } from '~/data/companies';
import CompanyBrandLogo from '~/components/CompanyBrandLogo.vue';
import { gsap } from 'gsap';
import { splitTextIntoLines } from '~/composables/useReveal';

const props = defineProps<{
  company: Company;
}>();

const showcaseRef = ref<HTMLElement | null>(null);
let animCtx: gsap.Context | null = null;

const triggerEntranceAnimation = () => {
  if (!import.meta.client || !showcaseRef.value) return;

  if (animCtx) {
    animCtx.revert();
  }

  const el = showcaseRef.value;
  animCtx = gsap.context(() => {
    const header = el.querySelector('.venture-dossier__header');
    const matrixCells = el.querySelectorAll('.matrix-cell');
    const quoteEl = el.querySelector<HTMLElement>('.ethics-layout__quote');
    const leadEl = el.querySelector<HTMLElement>('.overview-lead');
    const rationaleEl = el.querySelector<HTMLElement>('.rationale-card__text');
    const problemPEl = el.querySelector<HTMLElement>('.ps-card--problem .ps-card__p');
    const frictionPEl = el.querySelector<HTMLElement>('.ps-sub-text');
    const solutionPEl = el.querySelector<HTMLElement>('.ps-card--solution .ps-card__p');
    const psCards = el.querySelectorAll('.ps-card');
    const galleryTiles = el.querySelectorAll('.gallery-tile');
    const kpiCards = el.querySelectorAll('.kpi-card');

    let quoteLines: HTMLElement[] = quoteEl ? splitTextIntoLines(quoteEl) : [];
    let leadLines: HTMLElement[] = leadEl ? splitTextIntoLines(leadEl) : [];
    let rationaleLines: HTMLElement[] = rationaleEl ? splitTextIntoLines(rationaleEl) : [];
    let problemLines: HTMLElement[] = problemPEl ? splitTextIntoLines(problemPEl) : [];
    let frictionLines: HTMLElement[] = frictionPEl ? splitTextIntoLines(frictionPEl) : [];
    let solutionLines: HTMLElement[] = solutionPEl ? splitTextIntoLines(solutionPEl) : [];

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (header) {
      tl.fromTo(header, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.55 }, 0);
    }

    if (matrixCells.length) {
      tl.fromTo(matrixCells, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.04 }, 0.1);
    }

    if (quoteLines.length) {
      tl.fromTo(quoteLines, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.04 }, 0.15);
    }

    if (leadLines.length) {
      tl.fromTo(leadLines, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.04 }, 0.2);
    }

    if (rationaleLines.length) {
      tl.fromTo(rationaleLines, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.04 }, 0.25);
    }

    if (psCards.length) {
      tl.fromTo(psCards, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 }, 0.25);
    }

    if (problemLines.length) {
      tl.fromTo(problemLines, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.03 }, 0.3);
    }

    if (frictionLines.length) {
      tl.fromTo(frictionLines, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.03 }, 0.33);
    }

    if (solutionLines.length) {
      tl.fromTo(solutionLines, { yPercent: 115, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.03 }, 0.36);
    }

    if (galleryTiles.length) {
      tl.fromTo(galleryTiles, { opacity: 0, y: 18, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.06 }, 0.4);
    }

    if (kpiCards.length) {
      tl.fromTo(kpiCards, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.04 }, 0.45);
    }
  }, el);
};

onMounted(async () => {
  await nextTick();
  triggerEntranceAnimation();
});

watch(
  () => props.company.id,
  async () => {
    await nextTick();
    triggerEntranceAnimation();
  }
);

onUnmounted(() => {
  if (animCtx) {
    animCtx.revert();
    animCtx = null;
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.venture-dossier {
  position: relative;
  width: 100%;
  max-width: 100%;
  background-color: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 8px;
  padding: clamp(20px, 3.8vw, 56px);
  box-sizing: border-box;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  overflow: hidden;

  @include mobile {
    padding: 1.25rem 1rem;
    border-radius: 6px;
  }

  // -------------------------------------------------------------
  // 1. HEADER
  // -------------------------------------------------------------
  &__header {
    border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    padding-bottom: 2.5rem;
    margin-bottom: 3rem;
  }

  &__identity-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.25rem;
    flex-wrap: wrap;

    @include tablet {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }
  }

  &__brand-group {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    min-width: 0;
    flex: 1 1 320px;
  }

  &__logo-frame {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__title-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }

  &__name {
    font-family: $font-serif;
    font-size: clamp(1.8rem, 3.2vw, 2.8rem);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #111111;
    margin: 0;
    word-break: break-word;
  }

  &__direct-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: $font-mono;
    font-size: 0.75rem;
    color: #666666;
    text-decoration: none;
    border: 1px solid rgba(17, 17, 17, 0.12);
    padding: 0.55rem 1rem;
    border-radius: 4px;
    transition: all 0.25s ease;
    white-space: nowrap;
    flex-shrink: 0;

    &:hover {
      color: #111111;
      border-color: #111111;
      background-color: #fafaf8;
    }
  }

  &__metrics-matrix {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(17, 17, 17, 0.08);

    @include tablet {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  // -------------------------------------------------------------
  // SECTIONS COMMON
  // -------------------------------------------------------------
  &__section {
    border-bottom: 1px solid rgba(17, 17, 17, 0.08);
    padding-bottom: 3rem;
    margin-bottom: 3rem;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
}

.matrix-cell {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;

  &__label {
    font-family: $font-sans;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #888888;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__value {
    font-family: $font-sans;
    font-size: 1.1rem;
    font-weight: 600;
    color: #111111;
  }
}

/* ========================================================================= */
/* 2. ETHICS LAYOUT                                                          */
/* ========================================================================= */
.ethics-layout {
  display: grid;
  grid-template-columns: minmax(280px, 380px) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 56px);

  @include tablet {
    grid-template-columns: 1fr;
  }

  &__left {
    min-width: 0;
  }

  &__right {
    min-width: 0;
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
    font-weight: 400;
    color: #111111;
    margin: 0 0 1.25rem 0;
  }

  &__quote {
    font-family: $font-serif;
    font-size: clamp(1.05rem, 1.25vw, 1.25rem);
    font-style: normal;
    line-height: 1.65;
    color: #222222;
    margin: 0 0 1.75rem 0;
    padding: 0;
    border: none;
  }

  &__values {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }
}

.values-label {
  font-family: $font-mono;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #888888;
}

.values-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.value-tag {
  font-family: $font-sans;
  font-size: 0.75rem;
  padding: 0.3rem 0.65rem;
  background: #f5f5f2;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 4px;
  color: #333333;
}

.overview-title {
  font-family: $font-serif;
  font-size: clamp(1.4rem, 1.8vw, 1.8rem);
  font-weight: 400;
  color: #111111;
  margin: 0 0 1.25rem 0;
}

.overview-lead {
  font-family: $font-sans;
  font-size: 1rem;
  line-height: 1.7;
  color: #444444;
  margin: 0 0 1.75rem 0;
  font-weight: 300;
}

.rationale-card {
  background: #fafaf8;
  border: 1px solid rgba(17, 17, 17, 0.06);
  padding: 1.25rem 1.4rem;
  border-radius: 6px;

  &__text {
    font-family: $font-sans;
    font-size: 0.95rem;
    line-height: 1.65;
    color: #333333;
    margin: 0;
    font-weight: 300;
    font-style: normal;
  }
}

/* ========================================================================= */
/* 3. PROBLEM & SOLUTION LAYOUT                                              */
/* ========================================================================= */
.section-heading {
  margin-bottom: 2rem;

  &__title {
    font-family: $font-serif;
    font-size: clamp(1.6rem, 2.2vw, 2.2rem);
    font-weight: 400;
    color: #111111;
    margin: 0;
  }
}

.ps-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: 1fr;
  }
}

.ps-card {
  background: #fbfbf9;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;

  @include mobile {
    padding: 1.25rem;
  }

  &__heading {
    font-family: $font-serif;
    font-size: 1.35rem;
    font-weight: 400;
    color: #111111;
    margin: 0 0 0.85rem 0;
  }

  &__p {
    font-family: $font-sans;
    font-size: 0.95rem;
    line-height: 1.7;
    color: #444444;
    margin: 0 0 1.5rem 0;
    font-weight: 300;
  }

  &__sub-box {
    padding-top: 1.25rem;
    border-top: 1px solid rgba(17, 17, 17, 0.08);
  }
}

.ps-sub-text {
  font-family: $font-sans;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #555555;
  margin: 0;
}

.ip-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.ip-item {
  font-family: $font-sans;
  font-size: 0.88rem;
  color: #333333;
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.ip-bullet {
  color: #c5a880;
}

/* ========================================================================= */
/* 4. GALLERY SHOWCASE                                                       */
/* ========================================================================= */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @include tablet {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

.gallery-tile {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  min-width: 0;

  &__image-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 6px;
    overflow: hidden;
    background: #e8e8e3;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: scale(1.05);
    }
  }

  &__caption {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  &__text {
    font-family: $font-sans;
    font-size: 0.85rem;
    color: #444444;
    line-height: 1.5;
    margin-top: 0.25rem;
  }
}

/* ========================================================================= */
/* 5. KPI GRID                                                               */
/* ========================================================================= */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @include tablet {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }
}

.kpi-card {
  padding: 1.75rem 1.5rem;
  background: #fbfbf9;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  min-width: 0;

  @include mobile {
    padding: 1.25rem 1rem;
  }

  &__val {
    font-family: $font-sans;
    font-size: clamp(1.6rem, 2.5vw, 2.2rem);
    font-weight: 500;
    color: #111111;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  &__label {
    font-family: $font-sans;
    font-size: 0.85rem;
    font-weight: 500;
    color: #666666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
