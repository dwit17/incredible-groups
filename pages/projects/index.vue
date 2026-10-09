<template>
  <div class="projects-page-structure">
    
    <!-- ============================================================= -->
    <!-- SECTION 01: Full-Bleed 100vh Hero Canvas                      -->
    <!-- Matches HeroSection.vue 1-to-1                                -->
    <!-- ============================================================= -->
    <section ref="heroRef" class="projects-hero" aria-label="Real Estate Projects Portfolio">
      <div class="projects-hero__canvas">
        <div class="projects-hero__image-wrapper">
          <img
            src="/images/hero-architecture.jpg"
            alt="Incredible Groups - Real Estate Portfolio Monograph"
            class="projects-hero__image"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        <div class="projects-hero__overlay"></div>

        <div ref="titleBlockRef" class="projects-hero__title-block">
          <h1 class="projects-hero__title">
            <span class="projects-hero__line-wrap">
              <span class="projects-hero__title-line projects-hero__title-line--sans">Selected</span>
            </span>
            <span class="projects-hero__line-wrap">
              <span class="projects-hero__title-line projects-hero__title-line--serif">Real Estate Portfolio</span>
            </span>
          </h1>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 02: Editorial Statement (White Covering Panel)        -->
    <!-- Matches EditorialStatementSection.vue 1-to-1                  -->
    <!-- ============================================================= -->
    <section class="projects-statement" aria-label="Architectural Clarity &amp; Precision">
      <div class="projects-statement__inner">
        <h2 ref="statementHeadingRef" class="projects-statement__heading">
          <span class="statement-mask"><span class="statement-line">Architectural Rigor</span></span>
          <span class="statement-mask"><span class="statement-line">&amp; Spatial Truth</span></span>
        </h2>

        <div class="projects-statement__columns">
          <div class="projects-statement__col">
            <p ref="p1Ref" class="projects-statement__p">
              Incredible Groups conceives, engineers, and delivers ultra-luxury residential towers, private coastal sanctuaries, and sovereign commercial landmarks with uncompromising geometric clarity.
            </p>
          </div>
          <div class="projects-statement__col">
            <p ref="p2Ref" class="projects-statement__p">
              From site acquisition and structural engineering to bespoke artisanal bronze and stone finishes, every project represents an enduring cultural monument across India.
            </p>
          </div>
        </div>
      </div>

      <!-- Full-Bleed 100vw Curtain Unmasking Image (Matches Home Page Section 02) -->
      <div ref="curtainContainerRef" class="projects-statement__image-fullbleed">
        <div ref="curtainWrapperRef" class="projects-statement__curtain-wrapper">
          <img
            ref="curtainImgRef"
            src="/images/statement-architecture.jpg"
            alt="Incredible Groups - Monolithic Architectural Landmark"
            class="projects-statement__curtain-image"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 03: Asymmetric Staggered Selected Projects Gallery    -->
    <!-- All cards directly link to dedicated project monograph pages  -->
    <!-- ============================================================= -->
    <section ref="gallerySectionRef" class="projects-asymmetric-gallery">
      <div class="projects-asymmetric-gallery__inner">
        
        <div class="projects-asymmetric-gallery__header">
          <div class="gallery-header-left">
            <h2 class="projects-asymmetric-gallery__title">
              <span class="title-mask"><span class="title-line">Monographic</span></span>
              <span class="title-mask">
                <span class="title-line">Developments <span class="projects-asymmetric-gallery__count">({{ projects.length }})</span></span>
              </span>
            </h2>
          </div>
          <p class="gallery-header-desc">
            Explore dedicated monographs with structural blueprints, specifications, multi-perspective exposure, and acquisition terms.
          </p>
        </div>

        <!-- Asymmetric Staggered Grid (All 8 Projects) -->
        <div class="projects-asymmetric-gallery__grid">
          
          <!-- Row 1: The Aurum Monolith & Sanctuary of Solitude -->
          <div class="projects-asymmetric-gallery__row projects-asymmetric-gallery__row--1">
            <NuxtLink
              v-if="projects[0]"
              :to="`/projects/${projects[0].slug}`"
              class="asym-card asym-card--large"
              :aria-label="`Explore ${projects[0].title} Monograph`"
            >
              <div class="asym-card__media-wrap">
                <div class="asym-card__media">
                  <img :src="projects[0].coverImage" :alt="projects[0].title" class="asym-card__img" loading="lazy" />
                </div>
              </div>
              <div class="asym-card__caption">
                <div class="asym-card__info">
                  <span class="asym-card__name">{{ projects[0].title }}</span>
                  <span class="asym-card__loc">{{ projects[0].location }}</span>
                </div>
                <div class="asym-card__meta">
                  <span class="asym-card__area">{{ projects[0].area }}</span>
                  <span class="asym-card__arrow">→</span>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              v-if="projects[1]"
              :to="`/projects/${projects[1].slug}`"
              class="asym-card asym-card--staggered"
              :aria-label="`Explore ${projects[1].title} Monograph`"
            >
              <div class="asym-card__media-wrap">
                <div class="asym-card__media">
                  <img :src="projects[1].coverImage" :alt="projects[1].title" class="asym-card__img" loading="lazy" />
                </div>
              </div>
              <div class="asym-card__caption">
                <div class="asym-card__info">
                  <span class="asym-card__name">{{ projects[1].title }}</span>
                  <span class="asym-card__loc">{{ projects[1].location }}</span>
                </div>
                <div class="asym-card__meta">
                  <span class="asym-card__area">{{ projects[1].area }}</span>
                  <span class="asym-card__arrow">→</span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Row 2: The Apex Pavilion & Elysian Clifftop -->
          <div class="projects-asymmetric-gallery__row projects-asymmetric-gallery__row--2">
            <NuxtLink
              v-if="projects[2]"
              :to="`/projects/${projects[2].slug}`"
              class="asym-card asym-card--tall"
              :aria-label="`Explore ${projects[2].title} Monograph`"
            >
              <div class="asym-card__media-wrap">
                <div class="asym-card__media">
                  <img :src="projects[2].coverImage" :alt="projects[2].title" class="asym-card__img" loading="lazy" />
                </div>
              </div>
              <div class="asym-card__caption">
                <div class="asym-card__info">
                  <span class="asym-card__name">{{ projects[2].title }}</span>
                  <span class="asym-card__loc">{{ projects[2].location }}</span>
                </div>
                <div class="asym-card__meta">
                  <span class="asym-card__area">{{ projects[2].area }}</span>
                  <span class="asym-card__arrow">→</span>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              v-if="projects[3]"
              :to="`/projects/${projects[3].slug}`"
              class="asym-card asym-card--wide"
              :aria-label="`Explore ${projects[3].title} Monograph`"
            >
              <div class="asym-card__media-wrap">
                <div class="asym-card__media">
                  <img :src="projects[3].coverImage" :alt="projects[3].title" class="asym-card__img" loading="lazy" />
                </div>
              </div>
              <div class="asym-card__caption">
                <div class="asym-card__info">
                  <span class="asym-card__name">{{ projects[3].title }}</span>
                  <span class="asym-card__loc">{{ projects[3].location }}</span>
                </div>
                <div class="asym-card__meta">
                  <span class="asym-card__area">{{ projects[3].area }}</span>
                  <span class="asym-card__arrow">→</span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Row 3: Millenium Private Park & KNS Stolbovo Residences -->
          <div class="projects-asymmetric-gallery__row projects-asymmetric-gallery__row--1">
            <NuxtLink
              v-if="projects[4]"
              :to="`/projects/${projects[4].slug}`"
              class="asym-card asym-card--large"
              :aria-label="`Explore ${projects[4].title} Monograph`"
            >
              <div class="asym-card__media-wrap">
                <div class="asym-card__media">
                  <img :src="projects[4].coverImage" :alt="projects[4].title" class="asym-card__img" loading="lazy" />
                </div>
              </div>
              <div class="asym-card__caption">
                <div class="asym-card__info">
                  <span class="asym-card__name">{{ projects[4].title }}</span>
                  <span class="asym-card__loc">{{ projects[4].location }}</span>
                </div>
                <div class="asym-card__meta">
                  <span class="asym-card__area">{{ projects[4].area }}</span>
                  <span class="asym-card__arrow">→</span>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              v-if="projects[5]"
              :to="`/projects/${projects[5].slug}`"
              class="asym-card asym-card--staggered"
              :aria-label="`Explore ${projects[5].title} Monograph`"
            >
              <div class="asym-card__media-wrap">
                <div class="asym-card__media">
                  <img :src="projects[5].coverImage" :alt="projects[5].title" class="asym-card__img" loading="lazy" />
                </div>
              </div>
              <div class="asym-card__caption">
                <div class="asym-card__info">
                  <span class="asym-card__name">{{ projects[5].title }}</span>
                  <span class="asym-card__loc">{{ projects[5].location }}</span>
                </div>
                <div class="asym-card__meta">
                  <span class="asym-card__area">{{ projects[5].area }}</span>
                  <span class="asym-card__arrow">→</span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Row 4: Kotelnaya Cultural Pavilion & Almaty Heritage Manor -->
          <div class="projects-asymmetric-gallery__row projects-asymmetric-gallery__row--2">
            <NuxtLink
              v-if="projects[6]"
              :to="`/projects/${projects[6].slug}`"
              class="asym-card asym-card--tall"
              :aria-label="`Explore ${projects[6].title} Monograph`"
            >
              <div class="asym-card__media-wrap">
                <div class="asym-card__media">
                  <img :src="projects[6].coverImage" :alt="projects[6].title" class="asym-card__img" loading="lazy" />
                </div>
              </div>
              <div class="asym-card__caption">
                <div class="asym-card__info">
                  <span class="asym-card__name">{{ projects[6].title }}</span>
                  <span class="asym-card__loc">{{ projects[6].location }}</span>
                </div>
                <div class="asym-card__meta">
                  <span class="asym-card__area">{{ projects[6].area }}</span>
                  <span class="asym-card__arrow">→</span>
                </div>
              </div>
            </NuxtLink>

            <NuxtLink
              v-if="projects[7]"
              :to="`/projects/${projects[7].slug}`"
              class="asym-card asym-card--wide"
              :aria-label="`Explore ${projects[7].title} Monograph`"
            >
              <div class="asym-card__media-wrap">
                <div class="asym-card__media">
                  <img :src="projects[7].coverImage" :alt="projects[7].title" class="asym-card__img" loading="lazy" />
                </div>
              </div>
              <div class="asym-card__caption">
                <div class="asym-card__info">
                  <span class="asym-card__name">{{ projects[7].title }}</span>
                  <span class="asym-card__loc">{{ projects[7].location }}</span>
                </div>
                <div class="asym-card__meta">
                  <span class="asym-card__area">{{ projects[7].area }}</span>
                  <span class="asym-card__arrow">→</span>
                </div>
              </div>
            </NuxtLink>
          </div>

        </div>

      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 04: Monographic Directory Index & Private Mandates    -->
    <!-- ============================================================= -->
    <section class="projects-directory-section">
      <div class="projects-asymmetric-gallery__inner">
        <div class="directory-table-wrap">
          <div class="directory-header">
            <div class="directory-header__left">
              <span class="directory-eyebrow">Archives &amp; Blueprints</span>
              <h3 class="directory-title">Portfolio Monographs Index</h3>
            </div>
            <span class="directory-count">{{ projects.length }} Selected Works</span>
          </div>

          <!-- Column Headers -->
          <div class="directory-col-headers" aria-hidden="true">
            <span class="col-head col-head--idx">No.</span>
            <span class="col-head col-head--title">Project / Monograph</span>
            <span class="col-head col-head--cat">Typology</span>
            <span class="col-head col-head--loc">Location</span>
            <span class="col-head col-head--status">Timeline &amp; Status</span>
            <span class="col-head col-head--action">Monograph</span>
          </div>

          <div class="directory-list">
            <NuxtLink
              v-for="(p, idx) in projects"
              :key="p.id"
              :to="`/projects/${p.slug}`"
              class="directory-row"
            >
              <span class="directory-idx">{{ String(idx + 1).padStart(2, '0') }}</span>

              <div class="directory-title-col">
                <div class="directory-thumb">
                  <img :src="p.coverImage" :alt="p.title" loading="lazy" />
                </div>
                <div class="directory-name-wrap">
                  <h4 class="directory-name">{{ p.title }}</h4>
                  <span class="directory-sub">{{ p.subtitle }}</span>
                </div>
              </div>

              <!-- Mobile Stacked Metadata Pairs -->
              <div class="directory-mobile-meta">
                <div class="directory-meta-pair">
                  <span class="directory-meta-pair__label">Typology</span>
                  <span class="directory-meta-pair__val">{{ p.category }}</span>
                </div>
                <div class="directory-meta-pair">
                  <span class="directory-meta-pair__label">Location</span>
                  <span class="directory-meta-pair__val">{{ p.location }}</span>
                </div>
                <div class="directory-meta-pair">
                  <span class="directory-meta-pair__label">Status</span>
                  <span class="directory-meta-pair__val">{{ p.status }} ({{ p.year }})</span>
                </div>
              </div>

              <span class="directory-cat">{{ p.category }}</span>
              <span class="directory-loc">{{ p.location }}</span>
              <span class="directory-status">{{ p.status }} ({{ p.year }})</span>
              <div class="directory-action">
                <span class="directory-action__text">Explore</span>
                <span class="directory-arrow">&rarr;</span>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- Acquisition Consultation Box -->
        <div class="projects-consult-box">
          <div class="projects-consult-left">
            <h3 class="projects-consult-title">Private Land &amp; Property Mandates</h3>
            <p class="projects-consult-desc">
              Direct access to our partners for sovereign acquisitions, bespoke residential commissions, and off-market architectural landmarks across India.
            </p>
            <div class="projects-consult-actions">
              <a
                href="https://wa.me/919737972097?text=Hello%20Incredible%20Groups%2C%20I%20would%20like%20to%20inquire%20about%20your%20real%20estate%20projects."
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--primary"
              >
                <span>WhatsApp Private Inquiries (+91 97379 72097)</span>
              </a>
              <NuxtLink to="/contact" class="btn btn--secondary">
                <span>Request Comprehensive Dossier</span>
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Global Monolithic Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { projects } from '~/data/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';
import AppFooter from '~/components/AppFooter.vue';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const heroRef = ref<HTMLElement | null>(null);
const titleBlockRef = ref<HTMLElement | null>(null);
const statementHeadingRef = ref<HTMLElement | null>(null);
const gallerySectionRef = ref<HTMLElement | null>(null);
const p1Ref = ref<HTMLElement | null>(null);
const p2Ref = ref<HTMLElement | null>(null);
const curtainContainerRef = ref<HTMLElement | null>(null);
const curtainWrapperRef = ref<HTMLElement | null>(null);
const curtainImgRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;
let curtainTriggerInstance: ScrollTrigger | null = null;

useSeoMeta({
  title: 'Real Estate Projects Portfolio - Incredible Groups Luxury Landmarks',
  description: 'Explore the architectural portfolio of Incredible Groups, including ultra-luxury residential towers, private beach sanctuaries, and commercial pavilions in India.',
  ogTitle: 'Real Estate Projects Portfolio - Incredible Groups',
  ogImage: '/placeholders/og-cover.png'
});

useSchemaOrg([
  defineItemList({
    itemListElement: projects.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `https://incrediblegroups.com/projects/${p.slug}`
    }))
  })
]);

onMounted(async () => {
  await nextTick();
  if (!import.meta.client) return;

  ctx = gsap.context(() => {
    // 1. Hero Title Line Pop-in
    if (titleBlockRef.value) {
      const lines = titleBlockRef.value.querySelectorAll('.projects-hero__title-line');
      gsap.fromTo(
        lines,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.4, stagger: 0.16, ease: 'power3.out', delay: 0.2 }
      );
    }

    // 2. Statement Split Text
    if (statementHeadingRef.value) {
      const lines = statementHeadingRef.value.querySelectorAll('.statement-line');
      gsap.fromTo(
        lines,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statementHeadingRef.value,
            start: 'top 85%'
          }
        }
      );
    }

    // 3. Statement Paragraphs Reveal
    let pLines: HTMLElement[] = [];
    if (p1Ref.value) pLines.push(...splitTextIntoLines(p1Ref.value));
    if (p2Ref.value) pLines.push(...splitTextIntoLines(p2Ref.value));
    if (pLines.length) {
      gsap.fromTo(
        pLines,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: p1Ref.value,
            start: 'top 85%'
          }
        }
      );
    }

    // 4. Curtain Scroll Unveil & Parallax
    if (curtainContainerRef.value && curtainImgRef.value) {
      curtainTriggerInstance = ScrollTrigger.create({
        trigger: curtainContainerRef.value,
        start: 'top 95%',
        end: 'bottom 10%',
        scrub: 1.0,
        animation: gsap.fromTo(
          curtainImgRef.value,
          { yPercent: -12, scale: 1.12 },
          { yPercent: 12, scale: 1.0, ease: 'none' }
        )
      });
    }

    // 5. Asymmetric Cards Staggered Parallax
    const cards = gallerySectionRef.value?.querySelectorAll('.asym-card');
    if (cards) {
      cards.forEach((card, idx) => {
        const img = card.querySelector('.asym-card__img');
        const caption = card.querySelector('.asym-card__caption');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 92%',
            end: 'top 40%',
            scrub: 0.6
          }
        });

        tl.fromTo(card, { y: 60 + (idx % 2) * 20, opacity: 0.8 }, { y: 0, opacity: 1, ease: 'power2.out' }, 0);
        if (img) {
          tl.fromTo(img, { yPercent: -6, scale: 1.05 }, { yPercent: 0, scale: 1.0, ease: 'none' }, 0);
        }
        if (caption) {
          tl.fromTo(caption, { opacity: 0.4, y: 10 }, { opacity: 1, y: 0, ease: 'power2.out' }, 0.15);
        }
      });
    }

  });
});

onUnmounted(() => {
  if (curtainTriggerInstance) {
    curtainTriggerInstance.kill();
    curtainTriggerInstance = null;
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

.projects-page-structure {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: #111111;
}

/* ========================================================================= */
/* 1. HERO FULL-BLEED 100VH                                                  */
/* ========================================================================= */
.projects-hero {
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
/* 2. STATEMENT SECTION                                                      */
/* ========================================================================= */
.projects-statement {
  position: relative;
  background-color: #ffffff;
  padding-top: clamp(6.25rem, 12.5vh, 10rem);
  padding-bottom: clamp(5.75rem, 11.5vh, 9.25rem);
  width: 100%;
  overflow: hidden;

  &__inner {
    width: 100%;
    max-width: $container-max-width;
    margin: 0 auto;
    padding-left: clamp(24px, 3.8vw, 64px);
    padding-right: clamp(24px, 3.8vw, 64px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $font-sans;
    font-size: clamp(3.2rem, 7.2vw, 7.8rem);
    font-weight: 700;
    line-height: 0.94;
    letter-spacing: -0.04em;
    color: #111111;
    margin: 0 0 clamp(2rem, 4vh, 3.25rem) 0;

    @include mobile {
      font-size: clamp(2.2rem, 9.5vw, 3.4rem);
    }
  }

  &__columns {
    display: flex;
    justify-content: center;
    gap: clamp(2.5rem, 6vw, 6rem);
    width: 100%;
    max-width: 960px;
    text-align: left;

    @include mobile {
      flex-direction: column;
      gap: 1.25rem;
    }
  }

  &__col {
    flex: 1;
  }

  &__p {
    font-family: $font-sans;
    font-size: clamp(0.8125rem, 0.9vw, 0.9375rem);
    line-height: 1.65;
    color: #666a71;
    margin: 0;
  }

  &__image-fullbleed {
    position: relative;
    width: 100%;
    height: 85vh;
    min-height: 85vh;
    overflow: hidden;
    margin-top: clamp(4rem, 8vh, 7rem);
    margin-bottom: -1px;
    background-color: #0c0d0e;
  }

  &__curtain-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__curtain-image {
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 120%;
    object-fit: cover;
    object-position: center;
    display: block;
    will-change: transform;
    filter: brightness(0.95);
  }
}

.statement-mask {
  display: block;
  overflow: hidden;
  padding-bottom: 0.08em;
}

.statement-line {
  display: block;
  will-change: transform, opacity;
  white-space: nowrap;

  @include mobile {
    white-space: normal;
  }
}

/* ========================================================================= */
/* 3. ASYMMETRIC GALLERY                                                     */
/* ========================================================================= */
.projects-asymmetric-gallery {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  padding-top: clamp(4rem, 8vh, 8rem);
  padding-bottom: clamp(6rem, 12vh, 12rem);
  border-top: 1px solid rgba(0, 0, 0, 0.06);

  &__inner {
    width: 100%;
    max-width: $container-max-width;
    margin: 0 auto;
    padding-left: clamp(24px, 3.8vw, 64px);
    padding-right: clamp(24px, 3.8vw, 64px);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: clamp(4rem, 8vh, 8rem);
    gap: 2rem;

    @include tablet-down {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__title {
    font-family: $font-sans;
    font-size: clamp(48px, 6.2vw, 92px);
    font-weight: 400;
    line-height: 0.92;
    letter-spacing: -0.035em;
    color: #111111;
    margin: 0.35rem 0 0 0;
  }

  &__count {
    font-family: $font-sans;
    font-size: 0.45em;
    color: #111111;
    vertical-align: super;
  }

  &__grid {
    display: flex;
    flex-direction: column;
    gap: clamp(5rem, 11vh, 12rem);
  }

  &__row {
    display: flex;
    width: 100%;
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

    @include mobile {
      flex-direction: column;
      gap: 3.5rem;
      margin-top: 0 !important;
    }
  }
}

.gallery-header-desc {
  font-family: $font-sans;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666666;
  max-width: 440px;
  margin: 0;
}

.title-mask {
  display: block;
  overflow: hidden;
  padding-bottom: 0.12em;
}

.title-line {
  display: block;
  will-change: transform, opacity;
}

/* Asymmetric Individual Cards */
.asym-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-decoration: none;
  color: #111111;
  cursor: pointer;
  will-change: transform, opacity;
  transition: transform 0.3s ease;

  &--large {
    width: clamp(320px, 44vw, 580px);
    flex: 0 1 clamp(320px, 44vw, 580px);
  }

  &--staggered {
    width: clamp(340px, 46vw, 640px);
    flex: 0 1 clamp(340px, 46vw, 640px);
    margin-top: clamp(6rem, 14vh, 16rem);

    @include mobile {
      margin-top: 0;
      width: 100%;
    }
  }

  &--tall {
    width: clamp(280px, 34vw, 480px);
    flex: 0 1 clamp(280px, 34vw, 480px);

    .asym-card__media {
      aspect-ratio: 3 / 4;
    }
  }

  &--wide {
    width: clamp(340px, 46vw, 640px);
    flex: 0 1 clamp(340px, 46vw, 640px);

    .asym-card__media {
      aspect-ratio: 16 / 10.5;
    }
  }

  @include mobile {
    width: 100% !important;
    flex: 1 1 100% !important;
  }

  &__media-wrap {
    width: 100%;
    overflow: hidden;
    background-color: #f4f4f4;
    border-radius: 4px;
    position: relative;
  }

  &__media {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10.5;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &__badge {
    position: absolute;
    top: 0.85rem;
    left: 0.85rem;
    font-family: $font-mono;
    font-size: 10px;
    text-transform: uppercase;
    background: rgba(17, 17, 17, 0.8);
    color: #ffffff;
    padding: 0.25rem 0.6rem;
    border-radius: 2px;
    backdrop-filter: blur(4px);
  }

  &:hover &__media img {
    transform: scale(1.05);
  }

  &__caption {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 0.5rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  &__name {
    font-family: $font-sans;
    font-size: 1.05rem;
    font-weight: 500;
    color: #111111;
  }

  &__loc {
    font-family: $font-sans;
    font-size: 12px;
    color: #777777;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__area {
    font-family: $font-mono;
    font-size: 12px;
    color: #111111;
  }

  &__arrow {
    font-family: $font-mono;
    font-size: 14px;
    color: #888888;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  &:hover &__arrow {
    transform: translateX(4px);
    color: #111111;
  }
}

/* ========================================================================= */
/* 4. DIRECTORY TABLE                                                        */
/* ========================================================================= */
.projects-directory-section {
  padding-top: clamp(4rem, 6vh, 6rem);
  padding-bottom: clamp(4rem, 6vh, 8rem);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.directory-table-wrap {
  margin-bottom: clamp(3.5rem, 6vh, 5.5rem);
}

.directory-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &__left {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
}

.directory-eyebrow {
  font-family: $font-mono;
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #888888;
}

.directory-title {
  font-family: $font-serif;
  font-size: clamp(2rem, 3.2vw, 3.2rem);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #111111;
  margin: 0;
}

.directory-count {
  font-family: $font-mono;
  font-size: 0.8rem;
  color: #777777;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.directory-col-headers {
  display: grid;
  grid-template-columns: 44px 2.2fr 1.3fr 1.3fr 1.2fr 100px;
  gap: 1.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  font-family: $font-mono;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #888888;

  @include desktop {
    grid-template-columns: 40px 1.8fr 1.2fr 1.2fr 1.1fr 90px;
    gap: 1.25rem;
  }

  @include tablet {
    grid-template-columns: 36px 1.8fr 1.2fr 80px;
    .col-head--loc,
    .col-head--status {
      display: none;
    }
  }

  @include mobile {
    display: none;
  }
}

.directory-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.directory-row {
  display: grid;
  grid-template-columns: 44px 2.2fr 1.3fr 1.3fr 1.2fr 100px;
  gap: 1.5rem;
  align-items: center;
  padding: 1.2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  text-decoration: none;
  color: #111111;
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;

  &:hover {
    background-color: #f6f6f2;
    padding-left: 1.35rem;

    .directory-thumb img {
      transform: scale(1.08);
    }

    .directory-action {
      color: $color-accent;
      .directory-arrow {
        transform: translateX(4px);
      }
    }
  }

  @include desktop {
    grid-template-columns: 40px 1.8fr 1.2fr 1.2fr 1.1fr 90px;
    gap: 1.25rem;
  }

  @include tablet {
    grid-template-columns: 36px 1.8fr 1.2fr 80px;
    gap: 1rem;

    .directory-loc,
    .directory-status {
      display: none;
    }
  }

  @include mobile {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding: 1.25rem;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    margin-bottom: 0.75rem;

    .directory-cat,
    .directory-loc,
    .directory-status {
      display: none;
    }

    .directory-idx {
      display: none;
    }

    &:hover {
      padding-left: 1.25rem;
    }
  }
}

.directory-mobile-meta {
  display: none;

  @include mobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.85rem 1rem;
    padding: 0.85rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }
}

.directory-meta-pair {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  &:last-child {
    grid-column: 1 / -1;
  }

  &__label {
    font-family: $font-mono;
    font-size: 0.68rem;
    color: #888888;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  &__val {
    font-family: $font-sans;
    font-size: 0.88rem;
    color: #222222;
    font-weight: 500;
  }
}

.directory-idx {
  font-family: $font-mono;
  font-size: 0.8rem;
  color: #888888;
  letter-spacing: 0.04em;
}

.directory-title-col {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.directory-thumb {
  width: 58px;
  height: 42px;
  border-radius: 3px;
  overflow: hidden;
  flex-shrink: 0;
  background-color: #e5e5e0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  @include mobile {
    width: 52px;
    height: 38px;
  }
}

.directory-name-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.directory-name {
  font-family: $font-sans;
  font-size: 1.05rem;
  font-weight: 500;
  margin: 0;
  color: #111111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @include mobile {
    white-space: normal;
    font-size: 1.1rem;
  }
}

.directory-sub {
  font-family: $font-sans;
  font-size: 0.8rem;
  color: #777777;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @include mobile {
    white-space: normal;
  }
}

.directory-cat {
  font-family: $font-sans;
  font-size: 0.88rem;
  color: #444444;
}

.directory-loc {
  font-family: $font-sans;
  font-size: 0.88rem;
  color: #666666;
}

.directory-status {
  font-family: $font-mono;
  font-size: 0.78rem;
  color: #888888;
}

.directory-action {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.45rem;
  font-family: $font-mono;
  font-size: 0.78rem;
  font-weight: 500;
  color: #444444;
  transition: color 0.2s ease;

  @include mobile {
    justify-content: space-between;
    padding-top: 0.25rem;
    color: $color-accent;
    font-size: 0.85rem;
  }

  .directory-arrow {
    font-family: $font-mono;
    font-size: 0.88rem;
    transition: transform 0.2s ease;
  }
}

.projects-consult-box {
  background: #fbfbf9;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: clamp(1.75rem, 4vw, 4rem);
}

.projects-consult-title {
  font-family: $font-serif;
  font-size: clamp(1.85rem, 2.8vw, 2.8rem);
  font-weight: 400;
  color: #111111;
  margin: 0.5rem 0 1rem 0;
}

.projects-consult-desc {
  font-family: $font-sans;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444444;
  font-weight: 300;
  max-width: 860px;
  margin: 0 0 2rem 0;
}

.projects-consult-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @include mobile {
    flex-direction: column;

    .btn {
      width: 100%;
      min-height: 48px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0.85rem 1.25rem;
    }
  }
}
</style>
