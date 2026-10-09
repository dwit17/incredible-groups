<template>
  <div v-if="company" ref="pageRef" class="company-monograph-page">
    
    <!-- ============================================================= -->
    <!-- 1. BREADCRUMB & SOVEREIGN TOP IDENTITY BAR                    -->
    <!-- ============================================================= -->
    <section class="company-monograph__top-bar">
      <div class="company-layout-inner">
        <div class="company-breadcrumbs">
          <NuxtLink to="/companies" class="company-breadcrumbs__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>All Portfolio Ventures</span>
          </NuxtLink>
          <span class="company-breadcrumbs__divider">/</span>
          <span class="company-breadcrumbs__current">{{ company.name }}</span>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 2. HERO HEADER & MONUMENTAL IDENTITY                          -->
    <!-- ============================================================= -->
    <header class="company-monograph__hero">
      <div class="company-layout-inner">
        <div class="company-hero-grid">
          
          <!-- Left: Brand Logo & Monumental Title -->
          <div class="company-hero-left">
            <div class="company-title-wrap">
              <div class="company-logo-frame">
                <CompanyBrandLogo :company-id="company.id" :fallback-name="company.name" :is-dark="false" />
              </div>
              <h1 ref="titleRef" class="company-title">
                <span class="title-mask">
                  <span class="title-line">{{ company.name }}</span>
                </span>
              </h1>
            </div>

            <p ref="leadRef" class="company-lead-desc">
              {{ company.shortDescription }}
            </p>
          </div>

          <!-- Right: Direct Inquiry & Valuation Callout -->
          <div class="company-hero-right">
            <div class="valuation-card">
              <span class="valuation-card__val">{{ company.valuation }}</span>
              <span class="valuation-card__sub">{{ company.headquarters }}</span>
            </div>

            <div class="company-hero-actions">
              <a
                :href="`https://wa.me/919737972097?text=Hello%20Incredible%20Groups%2C%20I%20am%20inquiring%20about%20your%20portfolio%20venture%20${encodeURIComponent(company.name)}.`"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--primary"
              >
                <span>WhatsApp Advisory</span>
              </a>
              <NuxtLink to="/contact" class="btn btn--secondary">
                <span>Request Venture Dossier</span>
              </NuxtLink>
            </div>
          </div>

        </div>

        <!-- 4-Column Structured Capital Strip -->
        <div class="company-metrics-matrix">
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
      </div>
    </header>

    <!-- ============================================================= -->
    <!-- 3. HERO SHOWCASE IMAGE CANVAS WITH PARALLAX                   -->
    <!-- ============================================================= -->
    <section v-if="company.gallery && company.gallery[0]" ref="heroBannerRef" class="company-banner-section">
      <div class="company-layout-inner">
        <div class="company-banner-frame">
          <img
            ref="bannerImgRef"
            :src="company.gallery[0].url"
            :alt="`${company.name} Operational Benchmark`"
            class="company-banner-img"
            loading="eager"
            fetchpriority="high"
          />
          <div class="company-banner-overlay"></div>
          <div class="company-banner-caption">
            <span class="company-banner-text">{{ company.gallery[0].caption }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 4. GUIDING PURPOSE & ATELIER INVESTMENT THESIS                -->
    <!-- ============================================================= -->
    <section class="company-section company-section--thesis">
      <div class="company-layout-inner">
        <div class="thesis-grid">
          
          <!-- Left: Purpose Quote & Core Values -->
          <div class="thesis-left">
            <h2 class="thesis-title">Guiding Purpose</h2>
            
            <blockquote ref="quoteRef" class="thesis-quote">
              &ldquo;{{ company.ethicsAndMission }}&rdquo;
            </blockquote>

            <div class="core-values-block">
              <span class="core-values-label">Core Institutional Principles</span>
              <div class="core-values-tags">
                <span
                  v-for="(val, vIdx) in company.coreValues"
                  :key="vIdx"
                  class="core-value-tag"
                >
                  {{ val }}
                </span>
              </div>
            </div>
          </div>

          <!-- Right: Company Deep-Dive & Investment Rationale -->
          <div class="thesis-right">
            <div class="overview-box">
              <h3 class="overview-heading">About the Company</h3>
              <p ref="overviewRef" class="overview-text">
                {{ company.aboutUs }}
              </p>
              <p class="overview-text overview-text--secondary">
                {{ company.fullOverview }}
              </p>
            </div>

            <div class="rationale-card">
              <h4 class="rationale-card__heading">Why Incredible Groups Invested</h4>
              <p ref="rationaleRef" class="rationale-card__text">
                {{ company.atelierWhyWeInvested }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 5. PROBLEM & PROPRIETARY ENGINEERING COMPARISON               -->
    <!-- ============================================================= -->
    <section class="company-section company-section--ps">
      <div class="company-layout-inner">
        <div class="section-header">
          <h2 class="section-title">Market Inefficiency vs. Proprietary Solution</h2>
        </div>

        <div class="ps-grid">
          <!-- Problem Column -->
          <div class="ps-box ps-box--problem">
            <div class="ps-box__header">
              <h3 class="ps-box__title">The Systemic Problem</h3>
            </div>
            
            <p class="ps-box__lead">{{ company.problemStatement }}</p>
            
            <div class="ps-box__sub">
              <span class="ps-box__sub-title">Friction &amp; Inefficiencies</span>
              <p class="ps-box__sub-text">{{ company.marketFriction }}</p>
            </div>
          </div>

          <!-- Solution Column -->
          <div class="ps-box ps-box--solution">
            <div class="ps-box__header">
              <h3 class="ps-box__title">The Engineering Solution</h3>
            </div>
            
            <p class="ps-box__lead">{{ company.howTheyAreSolving }}</p>
            
            <div class="ps-box__sub">
              <span class="ps-box__sub-title">Proprietary Technology Stack</span>
              <ul class="ip-feature-list">
                <li
                  v-for="(tech, tIdx) in company.proprietaryTech"
                  :key="tIdx"
                  class="ip-feature-item"
                >
                  <span class="ip-bullet">&bull;</span>
                  <span>{{ tech }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 6. KEY AUDITED PERFORMANCE INDICATORS (KPIS)                  -->
    <!-- ============================================================= -->
    <section v-if="company.keyMetrics && company.keyMetrics.length > 0" class="company-section company-section--kpis">
      <div class="company-layout-inner">
        <div class="section-header">
          <h2 class="section-title">Key Performance Indicators</h2>
        </div>

        <div class="kpi-quad-grid">
          <div
            v-for="(kpi, kIdx) in company.keyMetrics"
            :key="kIdx"
            class="kpi-block"
          >
            <span class="kpi-block__idx">0{{ kIdx + 1 }}</span>
            <span class="kpi-block__value">{{ kpi.value }}</span>
            <h3 class="kpi-block__label">{{ kpi.label }}</h3>
            <span v-if="kpi.subtext" class="kpi-block__sub">{{ kpi.subtext }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 7. VISUAL SHOWCASE & OPERATIONAL GALLERY                      -->
    <!-- ============================================================= -->
    <section v-if="company.gallery && company.gallery.length > 0" class="company-section company-section--gallery">
      <div class="company-layout-inner">
        <div class="section-header">
          <h2 class="section-title">Visual Showcase &amp; Installations</h2>
        </div>

        <div class="gallery-trio-grid">
          <div
            v-for="(item, gIdx) in company.gallery"
            :key="gIdx"
            class="gallery-tile"
          >
            <div class="gallery-tile__frame">
              <img :src="item.url" :alt="item.caption" loading="lazy" class="gallery-tile__img" />
              <div class="gallery-tile__category">{{ item.category }}</div>
            </div>
            <div class="gallery-tile__info">
              <span class="gallery-tile__caption">{{ item.caption }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 8. REAL ESTATE SYNERGY WITH INCREDIBLE DEVELOPMENTS           -->
    <!-- ============================================================= -->
    <section class="company-section company-section--synergy">
      <div class="company-layout-inner">
        <div class="synergy-card">
          <div class="synergy-left">
            <h3 class="synergy-title">Deployment Across Landmark Projects</h3>
            <p class="synergy-desc">
              {{ company.name }} operates as an integrated technological and operational pillar across Incredible Groups’ landmark developments—from our high-density coastal residential towers in Mumbai to private forest sanctuaries in Goa.
            </p>
            <div class="synergy-actions">
              <NuxtLink to="/projects" class="btn btn--primary">
                <span>Explore Real Estate Portfolio</span>
              </NuxtLink>
            </div>
          </div>

          <div class="synergy-right">
            <div class="synergy-stat-box">
              <span class="synergy-stat-num">100%</span>
              <p class="synergy-stat-desc">
                Deploying deep vertical capabilities directly into sovereign development sites across Western and Southern India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 9. NEXT PORTFOLIO VENTURE NAVIGATION & INQUIRY CTA            -->
    <!-- ============================================================= -->
    <section class="company-section company-section--nav">
      <div class="company-layout-inner">
        <div class="venture-nav-grid">
          
          <!-- Prev Venture -->
          <NuxtLink v-if="prevCompany" :to="`/companies/${prevCompany.slug}`" class="venture-nav-card venture-nav-card--prev">
            <h4 class="venture-nav-title">{{ prevCompany.name }}</h4>
            <span class="venture-nav-meta">{{ prevCompany.sector }} • {{ prevCompany.valuation }}</span>
          </NuxtLink>

          <!-- Next Venture -->
          <NuxtLink v-if="nextCompany" :to="`/companies/${nextCompany.slug}`" class="venture-nav-card venture-nav-card--next">
            <h4 class="venture-nav-title">{{ nextCompany.name }}</h4>
            <span class="venture-nav-meta">{{ nextCompany.sector }} • {{ nextCompany.valuation }}</span>
          </NuxtLink>

        </div>
      </div>
    </section>

  </div>

  <!-- Not Found State -->
  <div v-else class="company-not-found container section-padding">
    <h2>Portfolio Company Not Found</h2>
    <p>The requested venture portfolio company is not found in our registry.</p>
    <NuxtLink to="/companies" class="btn btn--primary">Return to Invested Companies</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { companies } from '~/data/companies';
import CompanyBrandLogo from '~/components/CompanyBrandLogo.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const route = useRoute();
const slug = computed(() => route.params.slug as string);

const company = computed(() => {
  return companies.find((c) => c.slug === slug.value);
});

const currentIndex = computed(() => {
  return companies.findIndex((c) => c.slug === slug.value);
});

const prevCompany = computed(() => {
  if (currentIndex.value <= 0) return companies[companies.length - 1];
  return companies[currentIndex.value - 1];
});

const nextCompany = computed(() => {
  if (currentIndex.value === -1) return companies[0];
  return companies[(currentIndex.value + 1) % companies.length];
});

// Template Refs
const pageRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const leadRef = ref<HTMLElement | null>(null);
const quoteRef = ref<HTMLElement | null>(null);
const overviewRef = ref<HTMLElement | null>(null);
const rationaleRef = ref<HTMLElement | null>(null);
const heroBannerRef = ref<HTMLElement | null>(null);
const bannerImgRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

// Dynamic SEO Metadata for Company
useSeoMeta({
  title: () => `${company.value?.name || 'Portfolio Company'} - Incredible Groups Strategic Venture Portfolio`,
  description: () => `${company.value?.name} (${company.value?.sector}): ${company.value?.shortDescription}`,
  ogTitle: () => `${company.value?.name || 'Company'} - Incredible Groups Venture Portfolio`,
  ogDescription: () => company.value?.fullOverview || company.value?.shortDescription || '',
  ogImage: () => company.value?.gallery?.[0]?.url || '/placeholders/og-cover.png',
  ogImageWidth: 1200,
  ogImageHeight: 630
});

// Schema.org Structured Data
useSchemaOrg([
  defineOrganization({
    name: company.value?.name || 'Portfolio Company',
    description: company.value?.fullOverview || company.value?.shortDescription || '',
    url: `https://incrediblegroups.com/companies/${company.value?.slug || ''}`,
    address: {
      addressLocality: company.value?.headquarters || 'India'
    }
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Invested Companies', item: '/companies' },
      { name: company.value?.name || 'Company', item: `/companies/${company.value?.slug || ''}` }
    ]
  })
]);

onMounted(async () => {
  await nextTick();
  if (!import.meta.client || !pageRef.value) return;

  ctx = gsap.context(() => {
    // 1. Title Split Line Entrance
    if (titleRef.value) {
      const titleLines = titleRef.value.querySelectorAll('.title-line');
      gsap.fromTo(
        titleLines,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
      );
    }

    if (leadRef.value) {
      const lines = splitTextIntoLines(leadRef.value);
      gsap.fromTo(
        lines,
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.04, ease: 'power3.out', delay: 0.25 }
      );
    }

    // 2. Banner Parallax
    if (heroBannerRef.value && bannerImgRef.value) {
      ScrollTrigger.create({
        trigger: heroBannerRef.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8,
        onUpdate: (self) => {
          if (bannerImgRef.value) {
            gsap.set(bannerImgRef.value, {
              scale: 1.06 - self.progress * 0.04,
              yPercent: (self.progress - 0.5) * -10
            });
          }
        }
      });
    }

    // 3. Thesis Split Lines
    if (quoteRef.value) {
      const quoteLines = splitTextIntoLines(quoteRef.value);
      gsap.fromTo(
        quoteLines,
        { yPercent: 115, opacity: 0 },
        {
          scrollTrigger: {
            trigger: quoteRef.value,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.04,
          ease: 'power3.out'
        }
      );
    }

    if (overviewRef.value) {
      const overviewLines = splitTextIntoLines(overviewRef.value);
      gsap.fromTo(
        overviewLines,
        { yPercent: 115, opacity: 0 },
        {
          scrollTrigger: {
            trigger: overviewRef.value,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.03,
          ease: 'power3.out'
        }
      );
    }

    // 4. Staggered KPI Cards
    const kpiCards = pageRef.value?.querySelectorAll('.kpi-block');
    if (kpiCards && kpiCards.length > 0) {
      gsap.fromTo(
        kpiCards,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: kpiCards[0],
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out'
        }
      );
    }

    // 5. Staggered Gallery Tiles
    const galleryTiles = pageRef.value?.querySelectorAll('.gallery-tile');
    if (galleryTiles && galleryTiles.length > 0) {
      gsap.fromTo(
        galleryTiles,
        { opacity: 0, y: 35 },
        {
          scrollTrigger: {
            trigger: galleryTiles[0],
            start: 'top 88%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.out'
        }
      );
    }

  }, pageRef.value);
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

.company-monograph-page {
  position: relative;
  width: 100%;
  background-color: var(--color-bg, #f5f5f2);
  color: var(--color-text, #111111);
  padding-top: clamp(80px, 12vh, 120px);
  padding-bottom: clamp(60px, 10vh, 140px);
  box-sizing: border-box;
}

.company-layout-inner {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding-left: clamp(24px, 3.2vw, 44px);
  padding-right: clamp(24px, 3.2vw, 44px);
  box-sizing: border-box;

  @include mobile {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}

/* ========================================================================= */
/* 1. TOP BREADCRUMB STRIP                                                   */
/* ========================================================================= */
.company-monograph__top-bar {
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
  margin-bottom: clamp(2rem, 4vh, 3.5rem);
}

.company-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: $font-mono;
  font-size: 0.8rem;
  color: #666666;

  &__back {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: #111111;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  &__divider {
    opacity: 0.4;
  }

  &__current {
    color: #888888;
  }
}

/* ========================================================================= */
/* 2. HERO HEADER                                                            */
/* ========================================================================= */
.company-monograph__hero {
  margin-bottom: clamp(3rem, 6vh, 5rem);
}

.company-hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: clamp(2rem, 5vw, 6rem);
  align-items: flex-start;
  margin-bottom: 3.5rem;

  @include tablet {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

.company-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.company-pill {
  font-family: $font-sans;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  color: #222222;

  &--mono {
    font-family: $font-mono;
    background: #111111;
    color: #ffffff;
    border-color: #111111;
  }

  &--dim {
    color: #666666;
    background: transparent;
  }
}

.company-title-wrap {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.company-logo-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.company-title {
  font-family: $font-serif;
  font-size: clamp(2.8rem, 5.5vw, 5.2rem);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: #111111;
  margin: 0;
}

.title-mask {
  display: block;
  overflow: hidden;
  padding-bottom: 0.08em;
}

.title-line {
  display: block;
  will-change: transform, opacity;
}

.company-lead-desc {
  font-family: $font-sans;
  font-size: clamp(1.1rem, 1.4vw, 1.35rem);
  line-height: 1.6;
  color: #444444;
  font-weight: 300;
  margin: 0;
  max-width: 780px;
}

.company-hero-right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.valuation-card {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);

  &__label {
    font-family: $font-mono;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #888888;
  }

  &__val {
    font-family: $font-sans;
    font-size: clamp(2.2rem, 3.2vw, 3rem);
    font-weight: 600;
    color: #111111;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  &__sub {
    font-family: $font-sans;
    font-size: 0.85rem;
    color: #666666;
    margin-top: 0.25rem;
  }
}

.company-hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

/* 4-Column Structured Capital Strip */
.company-metrics-matrix {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  padding: 2.25rem 0;
  border-top: 1px solid rgba(17, 17, 17, 0.08);
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);

  @include tablet {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

.matrix-cell {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &__label {
    font-family: $font-mono;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #888888;
  }

  &__value {
    font-family: $font-sans;
    font-size: 1.35rem;
    font-weight: 600;
    color: #111111;
    letter-spacing: -0.01em;
  }

  &__sub {
    font-family: $font-sans;
    font-size: 0.75rem;
    color: #777777;
  }
}

/* ========================================================================= */
/* 3. HERO SHOWCASE IMAGE CANVAS                                             */
/* ========================================================================= */
.company-banner-section {
  margin-bottom: clamp(4rem, 8vh, 7rem);
}

.company-banner-frame {
  position: relative;
  width: 100%;
  height: clamp(340px, 50vh, 560px);
  overflow: hidden;
  border-radius: 6px;
  background-color: #111111;
}

.company-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  will-change: transform;
}

.company-banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.75) 100%);
}

.company-banner-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: #ffffff;
  box-sizing: border-box;

  @include mobile {
    flex-direction: column;
    gap: 0.35rem;
    padding: 1rem 1.25rem;
  }
}

.company-banner-tag {
  font-family: $font-mono;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c5a880;
}

.company-banner-text {
  font-family: $font-sans;
  font-size: 0.88rem;
  opacity: 0.9;
}

/* ========================================================================= */
/* 4. GUIDING PURPOSE & ATELIER THESIS                                       */
/* ========================================================================= */
.company-section {
  padding-bottom: clamp(4rem, 8vh, 7rem);
  margin-bottom: clamp(4rem, 8vh, 7rem);
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);

  &--nav {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

.thesis-grid {
  display: grid;
  grid-template-columns: minmax(320px, 460px) 1fr;
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: start;

  @include tablet {
    grid-template-columns: 1fr;
  }
}

.thesis-left {
  display: flex;
  flex-direction: column;
}

.thesis-title {
  font-family: $font-serif;
  font-size: clamp(2rem, 3.2vw, 3rem);
  font-weight: 400;
  line-height: 1.1;
  color: #111111;
  margin: 0.5rem 0 1.5rem 0;
}

.thesis-quote {
  font-family: $font-serif;
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  font-style: normal;
  line-height: 1.6;
  color: #222222;
  margin: 0 0 2rem 0;
  padding: 0;
  border: none;
}

.core-values-block {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 1px solid rgba(17, 17, 17, 0.08);
  padding-top: 1.5rem;
}

.core-values-label {
  font-family: $font-mono;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #888888;
}

.core-values-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.core-value-tag {
  font-family: $font-sans;
  font-size: 0.8rem;
  padding: 0.4rem 0.85rem;
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 4px;
  color: #333333;
}

.thesis-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.overview-box {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: clamp(1.5rem, 2.8vw, 3rem);
}

.overview-heading {
  font-family: $font-serif;
  font-size: clamp(1.6rem, 2.2vw, 2.2rem);
  font-weight: 400;
  color: #111111;
  margin: 0.5rem 0 1.25rem 0;
}

.overview-text {
  font-family: $font-sans;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #444444;
  font-weight: 300;
  margin: 0 0 1.25rem 0;

  &--secondary {
    font-size: 0.95rem;
    color: #666666;
    margin-bottom: 0;
  }
}

.rationale-card {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-left: 3px solid #c5a880;
  border-radius: 6px;
  padding: clamp(1.5rem, 2.8vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &__tag {
    font-family: $font-mono;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #c5a880;
  }

  &__heading {
    font-family: $font-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: #111111;
    margin: 0;
  }

  &__text {
    font-family: $font-sans;
    font-size: 0.98rem;
    line-height: 1.7;
    color: #333333;
    font-weight: 300;
    margin: 0;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(17, 17, 17, 0.06);
    margin-top: 0.5rem;
  }

  &__thesis-label {
    font-family: $font-mono;
    font-size: 0.7rem;
    text-transform: uppercase;
    color: #888888;
  }

  &__thesis {
    font-family: $font-sans;
    font-size: 0.88rem;
    font-style: italic;
    color: #555555;
  }
}

/* ========================================================================= */
/* 5. PROBLEM & SOLUTION                                                     */
/* ========================================================================= */
.section-header {
  margin-bottom: 2.5rem;
}

.section-title {
  font-family: $font-serif;
  font-size: clamp(2rem, 3.2vw, 3.2rem);
  font-weight: 400;
  color: #111111;
  margin: 0.5rem 0 0 0;
  letter-spacing: -0.02em;
}

.ps-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.75rem;

  @include tablet {
    grid-template-columns: 1fr;
  }
}

.ps-box {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: clamp(1.5rem, 2.5vw, 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }

  &__status-pill {
    align-self: flex-start;
    font-family: $font-mono;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.25rem 0.6rem;
    border-radius: 3px;

    &--problem {
      background: #fdf0ee;
      color: #9c3c32;
    }

    &--solution {
      background: #eef7f2;
      color: #2c6e49;
    }
  }

  &__title {
    font-family: $font-serif;
    font-size: 1.6rem;
    font-weight: 400;
    color: #111111;
    margin: 0;
  }

  &__lead {
    font-family: $font-sans;
    font-size: 1.02rem;
    line-height: 1.7;
    color: #444444;
    font-weight: 300;
    margin: 0 0 2rem 0;
  }

  &__sub {
    border-top: 1px solid rgba(17, 17, 17, 0.08);
    padding-top: 1.5rem;
  }

  &__sub-title {
    display: block;
    font-family: $font-mono;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #888888;
    margin-bottom: 0.75rem;
  }

  &__sub-text {
    font-family: $font-sans;
    font-size: 0.92rem;
    line-height: 1.65;
    color: #555555;
    margin: 0;
  }
}

.ip-feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.ip-feature-item {
  font-family: $font-sans;
  font-size: 0.92rem;
  color: #222222;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.ip-bullet {
  color: #c5a880;
  font-weight: bold;
}

/* ========================================================================= */
/* 6. KEY PERFORMANCE INDICATORS (KPIS)                                      */
/* ========================================================================= */
.kpi-quad-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.kpi-block {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  }

  &__idx {
    font-family: $font-mono;
    font-size: 0.75rem;
    color: #c5a880;
    margin-bottom: 0.25rem;
  }

  &__value {
    font-family: $font-sans;
    font-size: clamp(2rem, 3.2vw, 2.8rem);
    font-weight: 600;
    color: #111111;
    letter-spacing: -0.02em;
    line-height: 1.05;
  }

  &__label {
    font-family: $font-sans;
    font-size: 0.95rem;
    font-weight: 500;
    color: #333333;
    margin: 0.25rem 0 0 0;
  }

  &__sub {
    font-family: $font-sans;
    font-size: 0.78rem;
    color: #777777;
  }
}

/* ========================================================================= */
/* 7. VISUAL SHOWCASE & GALLERY                                              */
/* ========================================================================= */
.gallery-trio-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.gallery-tile {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &__frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 11;
    border-radius: 6px;
    overflow: hidden;
    background: #e5e5e0;
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

  &__category {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-family: $font-mono;
    font-size: 0.68rem;
    text-transform: uppercase;
    background: rgba(17, 17, 17, 0.75);
    color: #ffffff;
    backdrop-filter: blur(4px);
    padding: 0.2rem 0.55rem;
    border-radius: 3px;
  }

  &__caption {
    font-family: $font-sans;
    font-size: 0.88rem;
    color: #555555;
    line-height: 1.5;
  }
}

/* ========================================================================= */
/* 8. REAL ESTATE SYNERGY                                                    */
/* ========================================================================= */
.synergy-card {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: clamp(2rem, 4vw, 4rem);
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;

  @include tablet {
    grid-template-columns: 1fr;
  }
}

.synergy-title {
  font-family: $font-serif;
  font-size: clamp(1.8rem, 2.8vw, 2.8rem);
  font-weight: 400;
  color: #111111;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.15;
}

.synergy-desc {
  font-family: $font-sans;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444444;
  font-weight: 300;
  margin: 0 0 2rem 0;
}

.synergy-stat-box {
  background: #fafaf8;
  border: 1px solid rgba(17, 17, 17, 0.06);
  border-radius: 6px;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.synergy-stat-num {
  font-family: $font-sans;
  font-size: clamp(2.5rem, 4vw, 3.8rem);
  font-weight: 700;
  color: #111111;
  letter-spacing: -0.03em;
  line-height: 1;
}

.synergy-stat-label {
  font-family: $font-mono;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c5a880;
  font-weight: 600;
}

.synergy-stat-desc {
  font-family: $font-sans;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #666666;
  margin: 0.5rem 0 0 0;
}

/* ========================================================================= */
/* 9. VENTURE NAVIGATION                                                     */
/* ========================================================================= */
.venture-nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.venture-nav-card {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: 2rem;
  text-decoration: none;
  color: #111111;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #111111;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
  }

  &--next {
    text-align: right;
  }
}

.venture-nav-label {
  font-family: $font-mono;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #c5a880;
}

.venture-nav-title {
  font-family: $font-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
}

.venture-nav-meta {
  font-family: $font-sans;
  font-size: 0.82rem;
  color: #777777;
}

/* Not Found State */
.company-not-found {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}
</style>
