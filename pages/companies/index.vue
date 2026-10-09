<template>
  <div class="companies-page-root">
    
    <!-- ============================================================= -->
    <!-- SECTION 01: Full-Bleed 100vh Monolithic Hero Canvas           -->
    <!-- Matches HeroSection.vue 1-to-1 in visual scale & animation    -->
    <!-- ============================================================= -->
    <section ref="heroSectionRef" class="companies-hero" aria-label="Monolithic Venture Portfolio Hero">
      <div ref="heroCanvasRef" class="companies-hero__canvas">
        <div ref="heroImageWrapperRef" class="companies-hero__image-wrapper">
          <img
            ref="heroImageRef"
            src="/images/statement-architecture.jpg"
            alt="Incredible Groups - Strategic Venture Portfolio"
            class="companies-hero__image"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <!-- Atmospheric Contrast Overlay -->
        <div class="companies-hero__overlay"></div>

        <!-- Monumental Bottom-Left Typographic Block -->
        <div ref="heroTitleBlockRef" class="companies-hero__title-block">
          <h1 class="companies-hero__title">
            <span class="companies-hero__line-wrap">
              <span class="companies-hero__title-line companies-hero__title-line--sans">Strategic</span>
            </span>
            <span class="companies-hero__line-wrap">
              <span class="companies-hero__title-line companies-hero__title-line--serif">Venture Allocations</span>
            </span>
          </h1>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 02: Sovereign Venture Statement & Full-Bleed Curtain  -->
    <!-- Matches EditorialStatementSection.vue 1-to-1                  -->
    <!-- ============================================================= -->
    <section ref="statementSectionRef" class="companies-statement" aria-label="Venture Thesis &amp; Scope">
      <div class="companies-statement__text-panel">
        <div class="companies-layout-inner">
          <div ref="statementContentRef" class="companies-statement__content">
            
            <!-- Main Statement (Forced 2-Line Break, Extremely Large Sans) -->
            <h2 class="companies-statement__heading">
              <span class="companies-statement__line-mask">
                <span class="companies-statement__heading-line">Category-Defining</span>
              </span>
              <span class="companies-statement__line-mask">
                <span class="companies-statement__heading-line">Venture Alpha</span>
              </span>
            </h2>

            <!-- Supporting Dual-Column Text (Small, Restrained, Clean) -->
            <div class="companies-statement__supporting">
              <div class="companies-statement__col">
                <p ref="p1Ref" class="companies-statement__desc">
                  Incredible Groups allocates structured growth capital and sovereign equity across ten high-conviction companies pioneering artificial intelligence, robotic construction, clean energy microgrids, and real-world asset tokenization.
                </p>
              </div>
              <div class="companies-statement__col">
                <p ref="p2Ref" class="companies-statement__desc">
                  Every investment operates with profound technological moats, uncompromising ESG ethics, and deep vertical synergy with our landmark real estate developments across Western and Southern India.
                </p>
              </div>
            </div>

            <!-- 3-Column Sovereign Metrics Strip -->
            <div class="companies-statement__metrics-strip">
              <div class="companies-statement__metric-item">
                <span class="companies-statement__metric-num">10</span>
                <span class="companies-statement__metric-label">Active Portfolio Ventures</span>
              </div>
              <div class="companies-statement__metric-item">
                <span class="companies-statement__metric-num">₹1,615 Cr</span>
                <span class="companies-statement__metric-label">Committed Sovereign Equity</span>
              </div>
              <div class="companies-statement__metric-item">
                <span class="companies-statement__metric-num">$1.18B</span>
                <span class="companies-statement__metric-label">Combined Enterprise Valuation</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Full-Bleed 100vw Curtain Unmasking Canvas (Smoothly Unveiled on Scroll) -->
      <div ref="curtainContainerRef" class="companies-statement__image-fullbleed">
        <div ref="curtainWrapperRef" class="companies-statement__curtain-wrapper">
          <img
            ref="curtainImageRef"
            src="/images/hero-architecture.jpg"
            alt="Incredible Groups - Sovereign Venture Architecture"
            class="companies-statement__curtain-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 03: The 10-Company Master Directory Deck              -->
    <!-- All cards directly link to dedicated individual venture pages -->
    <!-- ============================================================= -->
    <section id="portfolio-deck" ref="deckSectionRef" class="companies-deck-section" aria-label="10 Sovereign Portfolio Companies">
      <div class="companies-layout-inner">
        
        <!-- Deck Header Bar -->
        <div class="deck-header">
          <div class="deck-header__left">
            <h2 class="deck-header__title">Explore Dedicated Company Monographs</h2>
          </div>
        </div>

        <!-- 10-Company Architectural Master Grid with Direct Links -->
        <div ref="logoDeckRef" class="companies-logo-deck">
          <NuxtLink
            v-for="(comp, index) in companies"
            :key="comp.id"
            :to="`/companies/${comp.slug}`"
            class="deck-card"
            :aria-label="`Explore ${comp.name} dedicated monograph`"
          >

            <!-- Card Middle: Vector Brand Logo Emblem -->
            <div class="deck-card__logo-wrap">
              <CompanyBrandLogo
                :company-id="comp.id"
                :fallback-name="comp.name"
                :is-dark="false"
              />
            </div>

            <!-- Card Bottom: Name & Action Arrow -->
            <div class="deck-card__bottom">
              <span class="deck-card__name" :title="comp.name">{{ comp.name }}</span>
            </div>

            <!-- Hover Accent Bar -->
            <div class="deck-card__active-bar"></div>
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 04: Structured Sector Allocations & Advisory CTA      -->
    <!-- ============================================================= -->
    <section class="companies-sectors-section" aria-label="Strategic Capital Allocations">
      <div class="companies-layout-inner">
        <div class="section-header">
          <h2 class="section-title">Strategic Capital Deployment Pillars</h2>
        </div>

        <div class="sectors-grid">
          <!-- Pillar 1: PropTech AI -->
          <div class="sector-pillar-card">
            <span class="sector-pillar-idx">01</span>
            <h3 class="sector-pillar-title">Artificial Intelligence &amp; Autonomous PropTech</h3>
            <p class="sector-pillar-desc">
              Neural building automation, optical occupancy sensors, and predictive thermal microgrids reducing operational carbon footprint.
            </p>
            <div class="sector-pillar-links">
              <NuxtLink to="/companies/vanguard-proptech" class="sector-link">
                <span>Vanguard PropTech</span>
                <span class="sector-link__arrow">→</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Pillar 2: Structured Credit -->
          <div class="sector-pillar-card">
            <span class="sector-pillar-idx">02</span>
            <h3 class="sector-pillar-title">Alternative Asset Debt &amp; Bridge Credit</h3>
            <p class="sector-pillar-desc">
              Institutional senior-secured bridge financing and spatial valuation underwriting for Tier-1 metropolitan land parcels.
            </p>
            <div class="sector-pillar-links">
              <NuxtLink to="/companies/aethelred-capital" class="sector-link">
                <span>Aethelred Capital</span>
                <span class="sector-link__arrow">→</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Pillar 3: Sustainable ConTech & Robotics -->
          <div class="sector-pillar-card">
            <span class="sector-pillar-idx">03</span>
            <h3 class="sector-pillar-title">Robotic Prefabrication &amp; Advanced Materials</h3>
            <p class="sector-pillar-desc">
              Offsite volumetric timber-concrete precision manufacturing and self-healing marine bio-binders lasting two centuries.
            </p>
            <div class="sector-pillar-links">
              <NuxtLink to="/companies/zenith-modular" class="sector-link">
                <span>Zenith Modular</span>
                <span class="sector-link__arrow">→</span>
              </NuxtLink>
              <NuxtLink to="/companies/orion-materials" class="sector-link">
                <span>Orion Materials</span>
                <span class="sector-link__arrow">→</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Pillar 4: Clean Energy & Water -->
          <div class="sector-pillar-card">
            <span class="sector-pillar-idx">04</span>
            <h3 class="sector-pillar-title">Decentralized Microgrids &amp; Water Sovereignty</h3>
            <p class="sector-pillar-desc">
              Turnkey bifacial solar canopies, liquid-cooled battery storage, and zero-discharge graphene desalination plants.
            </p>
            <div class="sector-pillar-links">
              <NuxtLink to="/companies/solaria-energy" class="sector-link">
                <span>Solaria Clean Energy</span>
                <span class="sector-link__arrow">→</span>
              </NuxtLink>
              <NuxtLink to="/companies/hyperion-water" class="sector-link">
                <span>Hyperion Water</span>
                <span class="sector-link__arrow">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Family Office / Sovereign Co-Investment Box -->
        <div class="companies-inquiry-box">
          <div class="companies-inquiry-left">
            <h3 class="companies-inquiry-title">Family Office Co-Investment Advisory</h3>
            <p class="companies-inquiry-desc">
              Incredible Groups invites institutional partners and accredited family offices to participate in structured venture syndications alongside our principal balance sheet.
            </p>
            <div class="companies-inquiry-actions">
              <a
                href="https://wa.me/919737972097?text=Hello%20Incredible%20Groups%2C%20I%20am%20interested%20in%20portfolio%20co-investment%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--primary"
              >
                <span>WhatsApp Advisory (+91 97379 72097)</span>
              </a>
              <NuxtLink to="/contact" class="btn btn--secondary">
                <span>Request Portfolio Overview</span>
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { companies } from '~/data/companies';
import CompanyBrandLogo from '~/components/CompanyBrandLogo.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

// Template Refs
const heroSectionRef = ref<HTMLElement | null>(null);
const heroCanvasRef = ref<HTMLElement | null>(null);
const heroImageWrapperRef = ref<HTMLElement | null>(null);
const heroImageRef = ref<HTMLElement | null>(null);
const heroTitleBlockRef = ref<HTMLElement | null>(null);

const statementSectionRef = ref<HTMLElement | null>(null);
const statementContentRef = ref<HTMLElement | null>(null);
const curtainContainerRef = ref<HTMLElement | null>(null);
const curtainWrapperRef = ref<HTMLElement | null>(null);
const curtainImageRef = ref<HTMLElement | null>(null);
const p1Ref = ref<HTMLElement | null>(null);
const p2Ref = ref<HTMLElement | null>(null);

const deckSectionRef = ref<HTMLElement | null>(null);
const logoDeckRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;
let curtainTriggerInstance: ScrollTrigger | null = null;

useSeoMeta({
  title: 'Invested Companies & Strategic Venture Portfolio - Incredible Groups',
  description: 'Explore the 10 strategic venture companies Incredible Groups has invested in, spanning PropTech AI, structured credit, sustainable contech, clean energy, and robotics.',
  ogTitle: 'Invested Companies & Strategic Venture Portfolio - Incredible Groups',
  ogImage: '/placeholders/og-cover.png'
});

useSchemaOrg([
  defineItemList({
    itemListElement: companies.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: `https://incrediblegroups.com/companies/${c.slug}`
    }))
  })
]);

onMounted(async () => {
  if (!import.meta.client) return;
  await nextTick();

  let p1Lines: HTMLElement[] = [];
  let p2Lines: HTMLElement[] = [];
  if (p1Ref.value) p1Lines = splitTextIntoLines(p1Ref.value);
  if (p2Ref.value) p2Lines = splitTextIntoLines(p2Ref.value);

  ctx = gsap.context(() => {
    // 1. Hero Scale-In & Title Lines Reveal
    if (heroImageRef.value) {
      gsap.fromTo(
        heroImageRef.value,
        { scale: 1.08, opacity: 0.88 },
        { scale: 1.0, opacity: 1.0, duration: 2.0, ease: 'power2.out' }
      );
    }

    if (heroTitleBlockRef.value) {
      const lines = heroTitleBlockRef.value.querySelectorAll('.companies-hero__title-line');
      gsap.fromTo(
        lines,
        { yPercent: 120, opacity: 0, scale: 0.97 },
        { yPercent: 0, opacity: 1, scale: 1.0, duration: 1.4, stagger: 0.16, ease: 'power3.out', delay: 0.2 }
      );
    }

    // 2. Statement Split Text Reveal
    if (statementContentRef.value) {
      const headingLines = statementContentRef.value.querySelectorAll('.companies-statement__heading-line');
      const paragraphLines = [...p1Lines, ...p2Lines];

      const stmtTl = gsap.timeline({
        scrollTrigger: {
          trigger: statementContentRef.value,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      stmtTl.fromTo(
        headingLines,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.15, stagger: 0.12, ease: 'power3.out' }
      );

      if (paragraphLines.length > 0) {
        stmtTl.fromTo(
          paragraphLines,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.04, ease: 'power2.out' },
          '-=0.7'
        );
      }
    }

    // 3. Full-Bleed Curtain Reveal
    if (curtainContainerRef.value && curtainWrapperRef.value && curtainImageRef.value) {
      const curtainTl = gsap.timeline({
        scrollTrigger: {
          trigger: curtainContainerRef.value,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1.2
        }
      });

      curtainTl.fromTo(
        curtainWrapperRef.value,
        { clipPath: 'inset(14% 18% 14% 18% round 4px)' },
        { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', duration: 1 }
      );

      curtainTl.fromTo(
        curtainImageRef.value,
        { scale: 1.2 },
        { scale: 1.0, ease: 'none', duration: 1 },
        0
      );

      curtainTriggerInstance = curtainTl.scrollTrigger || null;
    }

    // 4. 10-Company Block Pathing & Parking Scroll-Driven Motion
    if (logoDeckRef.value && deckSectionRef.value) {
      const cards = logoDeckRef.value.querySelectorAll<HTMLElement>('.deck-card');
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

      const pathingTl = gsap.timeline({
        scrollTrigger: {
          trigger: deckSectionRef.value,
          start: 'top 88%',
          end: 'top 22%',
          scrub: 1.2,
          invalidateOnRefresh: true
        }
      });

      cards.forEach((card, index) => {
        let startX = 0;
        let startY = 80;
        let startRot = 0;
        let startScale = 0.88;

        if (isMobile) {
          startX = index % 2 === 0 ? -32 : 32;
          startY = 35 + Math.floor(index / 2) * 10;
          startRot = index % 2 === 0 ? -1.5 : 1.5;
        } else if (isTablet) {
          const col = index % 3;
          startX = (col - 1) * 50;
          startY = 45 + Math.floor(index / 3) * 14;
          startRot = (col - 1) * 1.6;
        } else {
          if (index < 5) {
            startX = (4 - index) * 75 + 80;
            startY = 70 + index * 12;
            startRot = (index - 2) * 2.2;
          } else {
            const colIdx = index - 5;
            startX = (colIdx - 2) * -75 - 80;
            startY = 110 + colIdx * 12;
            startRot = (colIdx - 2) * -2.2;
          }
        }

        pathingTl.fromTo(
          card,
          {
            x: startX,
            y: startY,
            rotation: startRot,
            scale: startScale,
            opacity: 0.2
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1.0,
            opacity: 1,
            ease: 'power2.out',
            duration: 1
          },
          index * 0.04
        );
      });
    }
  });
});

onUnmounted(() => {
  if (curtainTriggerInstance) {
    curtainTriggerInstance.kill();
  }
  if (ctx) {
    ctx.revert();
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.companies-page-root {
  position: relative;
  width: 100%;
  background-color: var(--color-bg, #f5f5f2);
  color: var(--color-text, #111111);
  overflow-x: hidden;
}

.companies-layout-inner {
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
/* SECTION 01: Hero Canvas                                                  */
/* ========================================================================= */
.companies-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;

  &__canvas {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 0 clamp(24px, 3.2vw, 44px) 5rem;
    box-sizing: border-box;

    @include mobile {
      padding: 0 1.25rem 3.5rem;
    }
  }

  &__image-wrapper {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.85) contrast(1.05);
  }

  &__overlay {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.1) 40%,
      rgba(0, 0, 0, 0.65) 100%
    );
  }

  &__title-block {
    position: relative;
    z-index: 3;
    max-width: 1400px;
  }

  &__title {
    margin: 0;
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }

  &__line-wrap {
    display: block;
    overflow: hidden;
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
      font-style: normal;

      @include mobile {
        font-size: clamp(2.4rem, 10vw, 3.8rem);
      }
    }
  }
}

/* ========================================================================= */
/* SECTION 02: Sovereign Statement & Full-Bleed Curtain                      */
/* ========================================================================= */
.companies-statement {
  position: relative;
  width: 100%;
  background-color: var(--color-bg, #f5f5f2);

  &__text-panel {
    position: relative;
    z-index: 2;
    width: 100%;
    background-color: var(--color-bg, #f5f5f2);
    padding: 8rem 0 6rem;

    @include tablet {
      padding: 6rem 0 4rem;
    }
  }

  &__content {
    width: 100%;
  }

  &__heading {
    font-family: $font-sans;
    font-size: clamp(3.2rem, 7.2vw, 7.8rem);
    font-weight: 700;
    line-height: 0.94;
    letter-spacing: -0.04em;
    color: #111111;
    margin: 0 0 3.5rem 0;
    display: flex;
    flex-direction: column;

    @include mobile {
      font-size: clamp(2.2rem, 9.5vw, 3.4rem);
    }
  }

  &__line-mask {
    display: block;
    overflow: hidden;
  }

  &__heading-line {
    display: block;
  }

  &__supporting {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 5vw, 6rem);
    margin-bottom: 4.5rem;

    @include tablet {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  &__desc {
    font-family: $font-sans;
    font-size: 1.125rem;
    line-height: 1.75;
    color: #333333;
    font-weight: 300;
    margin: 0;
  }

  &__metrics-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2.5rem 0;
    border-top: 1px solid rgba(17, 17, 17, 0.1);
    border-bottom: 1px solid rgba(17, 17, 17, 0.1);

    @include mobile {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  &__metric-item {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  &__metric-num {
    font-family: $font-sans;
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    font-weight: 300;
    color: #111111;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  &__metric-label {
    font-family: $font-sans;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #666666;
  }

  &__image-fullbleed {
    position: relative;
    width: 100vw;
    height: 75vh;
    min-height: 480px;
    overflow: hidden;
    margin: 0;
  }

  &__curtain-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    will-change: clip-path;
  }

  &__curtain-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    will-change: transform;
  }
}

/* ========================================================================= */
/* SECTION 03: 10-Company Master Deck                                        */
/* ========================================================================= */
.companies-deck-section {
  position: relative;
  width: 100%;
  padding: 8rem 0 6rem;
  background-color: var(--color-bg, #f5f5f2);
  overflow: hidden;

  @include tablet {
    padding: 5rem 0 4rem;
  }

  @include mobile {
    padding: 3.5rem 0 3rem;
  }
}

.deck-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);

  &__left {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(1.8rem, 2.6vw, 2.6rem);
    font-weight: 400;
    color: #111111;
    margin: 0.35rem 0 0 0;
  }
}

.companies-logo-deck {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: clamp(0.75rem, 1.2vw, 1.5rem);
  width: 100%;
  box-sizing: border-box;

  @include tablet {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @include mobile {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }
}

.deck-card {
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: clamp(1.4rem, 1.8vw, 2.2rem) clamp(1.2rem, 1.6vw, 1.8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 154px;
  min-width: 0;
  text-decoration: none;
  color: #111111;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;
  overflow: hidden;
  will-change: transform, opacity;

  &:hover {
    border-color: #111111;
    transform: translateY(-5px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
  }
}

/* ========================================================================= */
/* SECTION 04: Sector Pillars & Co-Investment                                */
/* ========================================================================= */
.companies-sectors-section {
  padding-top: 4rem;
  padding-bottom: clamp(6rem, 10vh, 12rem);
  border-top: 1px solid rgba(17, 17, 17, 0.08);
}

.sectors-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;

  @include tablet {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.sector-pillar-card {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__idx {
    font-family: $font-mono;
    font-size: 0.75rem;
    color: #c5a880;
    margin-bottom: 0.75rem;
  }

  &__title {
    font-family: $font-serif;
    font-size: 1.35rem;
    font-weight: 400;
    color: #111111;
    margin: 0 0 0.85rem 0;
    line-height: 1.25;
  }

  &__desc {
    font-family: $font-sans;
    font-size: 0.88rem;
    line-height: 1.65;
    color: #555555;
    margin: 0 0 1.5rem 0;
    font-weight: 300;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    border-top: 1px solid rgba(17, 17, 17, 0.06);
    padding-top: 1rem;
  }
}

.sector-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: $font-sans;
  font-size: 0.82rem;
  font-weight: 500;
  color: #111111;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #c5a880;
  }

  &__arrow {
    font-family: $font-mono;
  }
}

.companies-inquiry-box {
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: clamp(2rem, 4vw, 4rem);
}

.companies-inquiry-title {
  font-family: $font-serif;
  font-size: clamp(2rem, 2.8vw, 2.8rem);
  font-weight: 400;
  color: #111111;
  margin: 0.5rem 0 1rem 0;
}

.companies-inquiry-desc {
  font-family: $font-sans;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444444;
  font-weight: 300;
  max-width: 860px;
  margin: 0 0 2rem 0;
}

.companies-inquiry-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
</style>
