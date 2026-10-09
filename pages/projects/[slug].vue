<template>
  <div v-if="project" ref="pageRef" class="project-monograph-page">
    
    <!-- ============================================================= -->
    <!-- 1. BREADCRUMBS & TOP NAVIGATION STRIP                         -->
    <!-- ============================================================= -->
    <section class="project-monograph__top-bar">
      <div class="project-layout-inner">
        <div class="project-breadcrumbs">
          <NuxtLink to="/projects" class="project-breadcrumbs__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>All Architectural Projects</span>
          </NuxtLink>
          <span class="project-breadcrumbs__divider">/</span>
          <span class="project-breadcrumbs__current">{{ project.title }}</span>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 2. PROJECT HERO TITLE & IDENTITY HEADER                       -->
    <!-- ============================================================= -->
    <header class="project-monograph__header">
      <div class="project-layout-inner">
        <div class="project-hero-grid">
          
          <!-- Left: Title, Badges & Subtitle -->
          <div class="project-hero-left">
            <h1 ref="titleRef" class="project-monograph__title">
              <span class="title-mask">
                <span class="title-line">{{ project.title }}</span>
              </span>
            </h1>

            <p class="project-monograph__subtitle">{{ project.subtitle }}</p>
          </div>

          <!-- Right: Valuation, Gross Area & Quick Actions -->
          <div class="project-hero-right">
            <div class="project-quick-card">
              <div class="quick-metric">
                <span class="quick-metric__label">Valuation</span>
                <span class="quick-metric__val">{{ project.valuation }}</span>
              </div>
              <div class="quick-metric">
                <span class="quick-metric__label">Gross Footprint</span>
                <span class="quick-metric__val">{{ project.area }}</span>
              </div>
              <div class="quick-metric">
                <span class="quick-metric__label">Lead Architect</span>
                <span class="quick-metric__val quick-metric__val--small">{{ project.leadArchitect }}</span>
              </div>
            </div>

            <div class="project-hero-actions">
              <a
                :href="`https://wa.me/919737972097?text=Hello%20Incredible%20Groups%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(project.title)}.`"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--primary"
              >
                <span>WhatsApp Private Inquiries</span>
              </a>
              <NuxtLink to="/contact" class="btn btn--secondary">
                <span>Request Acquisition Dossier</span>
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </header>

    <!-- ============================================================= -->
    <!-- 3. FULL-BLEED 100VW HERO CANVAS WITH PARALLAX                 -->
    <!-- Matches Homepage Editorial Full-Bleed 1-to-1                  -->
    <!-- ============================================================= -->
    <section ref="fullbleedRef" class="project-monograph__fullbleed">
      <div class="project-monograph__fullbleed-wrapper">
        <img
          ref="heroImgRef"
          :src="project.coverImage"
          :alt="`${project.title} Monolithic Architectural Elevation`"
          class="project-monograph__fullbleed-img"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </div>
      <div class="project-monograph__fullbleed-caption">
        <div class="project-layout-inner project-monograph__caption-inner">
          <span class="project-monograph__caption-name">{{ project.title }}</span>
          <span class="project-monograph__caption-loc">{{ project.location }} • {{ project.year }}</span>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 4. MONOGRAPHIC OVERVIEW & ARCHITECTURAL SPECS MATRIX          -->
    <!-- ============================================================= -->
    <section class="project-monograph__overview-section">
      <div class="project-layout-inner">
        <div class="project-intro-grid">
          
          <!-- Left Column: Key Metadata List -->
          <div class="project-meta-col">
            <div class="project-meta-table">
              <div class="project-meta-row">
                <span class="project-meta-label">Category</span>
                <span class="project-meta-val">{{ project.category }}</span>
              </div>
              <div class="project-meta-row">
                <span class="project-meta-label">Location</span>
                <span class="project-meta-val">{{ project.location }}</span>
              </div>
              <div class="project-meta-row">
                <span class="project-meta-label">Gross Area</span>
                <span class="project-meta-val">{{ project.area }}</span>
              </div>
              <div class="project-meta-row">
                <span class="project-meta-label">Valuation</span>
                <span class="project-meta-val">{{ project.valuation }}</span>
              </div>
              <div class="project-meta-row">
                <span class="project-meta-label">Lead Architect</span>
                <span class="project-meta-val">{{ project.leadArchitect }}</span>
              </div>
              <div class="project-meta-row">
                <span class="project-meta-label">Status</span>
                <span class="project-meta-val">{{ project.status }} ({{ project.year }})</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Editorial Lead Narrative -->
          <div class="project-lead-col">
            <h2 ref="leadSerifRef" class="project-lead-serif">
              {{ project.fullDescription }}
            </h2>
            <p ref="shortDescRef" class="project-lead-desc">
              {{ project.shortDescription }}
            </p>
          </div>

        </div>

        <!-- 6-Column Specifications Grid -->
        <div v-if="project.specifications && project.specifications.length > 0" class="project-specs-matrix">
          <div class="project-specs-header">
            <span class="project-specs-title">Architectural &amp; Structural Parameters</span>
          </div>
          <div class="project-specs-grid">
            <div
              v-for="(spec, sIdx) in project.specifications"
              :key="sIdx"
              class="spec-item"
            >
              <span class="spec-item__idx">0{{ sIdx + 1 }}</span>
              <span class="spec-item__label">{{ spec.label }}</span>
              <span class="spec-item__val">{{ spec.value }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 5. WORK DONE BY INCREDIBLE GROUPS (ATELIER EXECUTION)          -->
    <!-- ============================================================= -->
    <section v-if="project.workDone && project.workDone.length > 0" class="project-section project-section--execution">
      <div class="project-layout-inner">
        <div class="section-header">
          <h2 class="section-title">Work Executed by Incredible Groups</h2>
        </div>

        <div class="work-table">
          <div
            v-for="(work, wIdx) in project.workDone"
            :key="wIdx"
            class="work-row"
          >
            <div class="work-col-phase">
              <span class="work-phase-num">0{{ wIdx + 1 }}</span>
              <span class="work-status-badge">{{ work.milestone }}</span>
            </div>

            <div class="work-col-discipline">
              <h3 class="work-discipline-title">{{ work.discipline }}</h3>
              <p class="work-discipline-scope">{{ work.scope }}</p>
            </div>

            <div class="work-col-meta">
              <div class="work-meta-item">
                <span class="work-meta-label">Key Deliverable</span>
                <span class="work-meta-val">{{ work.deliverable }}</span>
              </div>
              <div class="work-meta-item">
                <span class="work-meta-label">Timeline</span>
                <span class="work-meta-val">{{ work.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 6. MULTI-PERSPECTIVE EXPOSURE MONOGRAPHS                      -->
    <!-- ============================================================= -->
    <section v-if="project.sections && project.sections.length > 0" class="project-section project-section--perspectives">
      <div class="project-layout-inner">
        <div class="section-header">
          <h2 class="section-title">Architectural Perspectives &amp; Exposure</h2>
        </div>

        <div class="perspective-blocks-list">
          <div
            v-for="(sec, secIdx) in project.sections"
            :key="sec.id"
            class="perspective-block"
            :class="`perspective-block--${secIdx % 2 === 0 ? 'left' : 'right'}`"
          >
            <!-- Text Narrative Column -->
            <div class="perspective-text">
              <h3 class="perspective-heading">{{ sec.heading }}</h3>
              <p class="perspective-sub">{{ sec.subheading }}</p>
              <p class="perspective-body">{{ sec.description }}</p>

              <blockquote v-if="sec.highlightQuote" class="perspective-quote">
                &ldquo;{{ sec.highlightQuote }}&rdquo;
              </blockquote>

              <div v-if="sec.specs && sec.specs.length > 0" class="perspective-mini-specs">
                <div
                  v-for="(sp, spIdx) in sec.specs"
                  :key="spIdx"
                  class="mini-spec-card"
                >
                  <span class="mini-spec-card__val">{{ sp.value }}</span>
                  <span class="mini-spec-card__label">{{ sp.label }}</span>
                </div>
              </div>
            </div>

            <!-- Staggered Image Frame with Scroll Parallax -->
            <div class="perspective-media">
              <div class="perspective-media-frame">
                <img
                  :src="sec.image"
                  :alt="`${project.title} - ${sec.heading}`"
                  class="perspective-sec-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 7. SPATIAL GALLERY & MONOGRAPHS                               -->
    <!-- ============================================================= -->
    <section v-if="project.gallery && project.gallery.length > 0" class="project-section project-section--gallery">
      <div class="project-layout-inner">
        <div class="section-header">
          <h2 class="section-title">Spatial Gallery</h2>
        </div>

        <div class="spatial-gallery-grid">
          <div
            v-for="(item, gIdx) in project.gallery"
            :key="gIdx"
            class="spatial-gallery-tile"
          >
            <div class="spatial-gallery-img-box">
              <img :src="item.url" :alt="item.caption" loading="lazy" />
            </div>
            <div class="spatial-gallery-caption">
              <span class="spatial-gallery-text">{{ item.caption }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 8. SOVEREIGN ACQUISITION CTA & NEXT PROJECT PREVIEW           -->
    <!-- ============================================================= -->
    <section class="project-section project-section--cta">
      <div class="project-layout-inner">
        <div class="acquisition-box">
          <div class="acquisition-left">
            <h3 class="acquisition-title">Schedule a Private Presentation</h3>
            <p class="acquisition-desc">
              Direct access to our partners and principal architects for bespoke acquisitions, sovereign land mandates, and monograph archives.
            </p>
            <div class="acquisition-actions">
              <a
                :href="`https://wa.me/919737972097?text=Hello%20Incredible%20Groups%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(project.title)}.`"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--primary"
              >
                <span>WhatsApp Inquiries (+91 97379 72097)</span>
              </a>
              <NuxtLink to="/contact" class="btn btn--secondary">
                <span>Request Project Monograph</span>
              </NuxtLink>
            </div>
          </div>

          <div v-if="nextProject" class="acquisition-right">
            <NuxtLink :to="`/projects/${nextProject.slug}`" class="next-monograph-card">
              <div class="next-monograph-img">
                <img :src="nextProject.coverImage" :alt="nextProject.title" loading="lazy" />
              </div>
              <div class="next-monograph-info">
                <span class="next-monograph-cat">{{ nextProject.category }}</span>
                <h4 class="next-monograph-name">{{ nextProject.title }}</h4>
                <span class="next-monograph-loc">{{ nextProject.location }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>

  <!-- Project Not Found -->
  <div v-else class="project-not-found container section-padding">
    <h2>Project Monograph Not Found</h2>
    <p>The requested architectural project is currently unavailable or has been archived.</p>
    <NuxtLink to="/projects" class="btn btn--primary">Return to Projects Portfolio</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '~/data/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const route = useRoute();
const slug = computed(() => route.params.slug as string);

const project = computed(() => {
  return projects.find((p) => p.slug === slug.value);
});

const currentIndex = computed(() => {
  return projects.findIndex((p) => p.slug === slug.value);
});

const nextProject = computed(() => {
  if (currentIndex.value === -1) return projects[0];
  return projects[(currentIndex.value + 1) % projects.length];
});

// Template Refs
const pageRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const leadSerifRef = ref<HTMLElement | null>(null);
const shortDescRef = ref<HTMLElement | null>(null);
const fullbleedRef = ref<HTMLElement | null>(null);
const heroImgRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

// Dynamic SEO Meta
useSeoMeta({
  title: () => `${project.value?.title || 'Architectural Project'} - Incredible Groups Luxury Real Estate`,
  description: () => `${project.value?.title} in ${project.value?.location}: ${project.value?.shortDescription}`,
  ogTitle: () => `${project.value?.title || 'Project'} - Incredible Groups`,
  ogDescription: () => project.value?.fullDescription || project.value?.shortDescription || '',
  ogImage: () => project.value?.coverImage || '/placeholders/og-cover.png',
  ogImageWidth: 1200,
  ogImageHeight: 630
});

// Schema.org Structured Data
useSchemaOrg([
  definePlace({
    name: project.value?.title || 'Real Estate Project',
    description: project.value?.shortDescription || '',
    address: {
      addressLocality: project.value?.location || 'India',
      addressCountry: 'IN'
    }
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Projects', item: '/projects' },
      { name: project.value?.title || 'Project', item: `/projects/${project.value?.slug || ''}` }
    ]
  })
]);

onMounted(async () => {
  await nextTick();
  if (!import.meta.client || !pageRef.value) return;

  ctx = gsap.context(() => {
    // 1. Title Split Lines Reveal
    if (titleRef.value) {
      const lines = titleRef.value.querySelectorAll('.title-line');
      gsap.fromTo(
        lines,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: 'power3.out', delay: 0.1 }
      );
    }

    // 2. Editorial Serif Paragraph Split-Text Line Reveal
    if (leadSerifRef.value) {
      const lines = splitTextIntoLines(leadSerifRef.value);
      gsap.fromTo(
        lines,
        { yPercent: 120, opacity: 0 },
        {
          scrollTrigger: {
            trigger: leadSerifRef.value,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.06,
          ease: 'power3.out'
        }
      );
    }

    if (shortDescRef.value) {
      const subLines = splitTextIntoLines(shortDescRef.value);
      gsap.fromTo(
        subLines,
        { yPercent: 115, opacity: 0 },
        {
          scrollTrigger: {
            trigger: shortDescRef.value,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.04,
          ease: 'power3.out'
        }
      );
    }

    // 3. Full-Bleed Hero Image Scroll Unveil & Parallax
    if (fullbleedRef.value && heroImgRef.value) {
      ScrollTrigger.create({
        trigger: fullbleedRef.value,
        start: 'top 95%',
        end: 'bottom 10%',
        scrub: 1.0,
        onUpdate: (self) => {
          const progress = self.progress;
          if (heroImgRef.value) {
            gsap.set(heroImgRef.value, {
              scale: 1.08 - progress * 0.06,
              yPercent: (progress - 0.5) * -12
            });
          }
        }
      });
    }

    // 4. Staggered Section Parallax & Line-by-Line Reveal
    const sectionBlocks = pageRef.value?.querySelectorAll('.perspective-block');
    if (sectionBlocks) {
      sectionBlocks.forEach((block) => {
        const heading = block.querySelector('.perspective-heading');
        const sub = block.querySelector('.perspective-sub');
        const body = block.querySelector('.perspective-body');
        const quote = block.querySelector('.perspective-quote');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        });

        if (heading) {
          const lines = splitTextIntoLines(heading as HTMLElement);
          tl.fromTo(
            lines,
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.08, ease: 'power3.out' },
            0
          );
        }

        if (sub) {
          const lines = splitTextIntoLines(sub as HTMLElement);
          tl.fromTo(
            lines,
            { yPercent: 115, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.05, ease: 'power3.out' },
            0.12
          );
        }

        if (body) {
          const lines = splitTextIntoLines(body as HTMLElement);
          tl.fromTo(
            lines,
            { yPercent: 115, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.04, ease: 'power3.out' },
            0.2
          );
        }

        if (quote) {
          const lines = splitTextIntoLines(quote as HTMLElement);
          tl.fromTo(
            lines,
            { yPercent: 115, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.04, ease: 'power3.out' },
            0.28
          );
        }

        const img = block.querySelector('.perspective-sec-img');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.06, yPercent: -4 },
            {
              scale: 1.0,
              yPercent: 4,
              ease: 'none',
              scrollTrigger: {
                trigger: block,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8
              }
            }
          );
        }
      });
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

.project-monograph-page {
  position: relative;
  width: 100%;
  background-color: var(--color-bg, #ffffff);
  color: var(--color-text, #111111);
  padding-top: clamp(80px, 12vh, 120px);
  padding-bottom: clamp(60px, 10vh, 140px);
  box-sizing: border-box;
}

.project-layout-inner {
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
.project-monograph__top-bar {
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
  margin-bottom: clamp(2rem, 4vh, 3.5rem);
}

.project-breadcrumbs {
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
/* 2. PROJECT HERO HEADER                                                    */
/* ========================================================================= */
.project-monograph__header {
  margin-bottom: clamp(3rem, 6vh, 5rem);
}

.project-hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: clamp(2rem, 5vw, 6rem);
  align-items: flex-start;

  @include tablet {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

.project-badge-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.project-pill {
  font-family: $font-sans;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #f5f5f2;
  border: 1px solid rgba(17, 17, 17, 0.1);
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  color: #222222;

  &--status {
    background: #111111;
    color: #ffffff;
    border-color: #111111;
  }

  &--in-construction {
    background: #c5a880;
    color: #111111;
    border-color: #c5a880;
  }

  &--dim {
    color: #666666;
    background: transparent;
  }
}

.project-monograph__title {
  font-family: $font-serif;
  font-size: clamp(3rem, 5.8vw, 5.8rem);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.025em;
  color: #111111;
  margin: 0 0 1.25rem 0;
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

.project-monograph__subtitle {
  font-family: $font-sans;
  font-size: clamp(1.1rem, 1.4vw, 1.35rem);
  line-height: 1.6;
  color: #555555;
  font-weight: 300;
  margin: 0;
  max-width: 760px;
}

.project-hero-right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-quick-card {
  background: #fbfbf9;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 6px;
  padding: 1.75rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @include mobile {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.quick-metric {
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

  &__val {
    font-family: $font-sans;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111111;

    &--small {
      font-size: 0.92rem;
      font-weight: 500;
    }
  }
}

.project-hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

/* ========================================================================= */
/* 3. FULL-BLEED 100VW HERO CANVAS                                           */
/* ========================================================================= */
.project-monograph__fullbleed {
  position: relative;
  width: 100vw;
  height: 90vh;
  min-height: 540px;
  overflow: hidden;
  margin: 0 0 clamp(4rem, 8vh, 7rem) 0;
  background-color: #111111;

  &-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &-img {
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 120%;
    object-fit: cover;
    object-position: center;
    display: block;
    will-change: transform;
  }

  &-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.5rem 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.65) 100%);
    color: #ffffff;
    z-index: 5;
  }

  &__caption-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $font-sans;
    font-size: 0.85rem;
    color: #ffffff;
  }

  &__caption-name {
    font-weight: 500;
  }

  &__caption-loc {
    opacity: 0.8;
  }
}

/* ========================================================================= */
/* 4. MONOGRAPHIC OVERVIEW & ARCHITECTURAL SPECS                             */
/* ========================================================================= */
.project-monograph__overview-section {
  padding-bottom: clamp(4rem, 8vh, 7rem);
  margin-bottom: clamp(4rem, 8vh, 7rem);
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
}

.project-intro-grid {
  display: grid;
  grid-template-columns: minmax(280px, 380px) 1fr;
  gap: clamp(40px, 6vw, 120px);
  align-items: start;
  margin-bottom: clamp(50px, 8vh, 100px);

  @include tablet {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }
}

.project-meta-col {
  display: flex;
  flex-direction: column;
}

.project-meta-table {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 1.25rem;
  margin-top: 1rem;
}

.project-meta-row {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 16px;
  align-items: baseline;
}

.project-meta-label {
  font-family: $font-sans;
  font-size: 12px;
  color: #777777;
  text-transform: uppercase;
}

.project-meta-val {
  font-family: $font-sans;
  font-size: 13px;
  font-weight: 500;
  color: #111111;
}

.project-lead-col {
  max-width: 980px;
}

.project-lead-serif {
  font-family: $font-serif;
  font-size: clamp(26px, 2.4vw, 44px);
  font-weight: 400;
  line-height: 1.22;
  letter-spacing: -0.015em;
  color: #111111;
  margin: 0 0 1.75rem 0;
}

.project-lead-desc {
  font-family: $font-sans;
  font-size: clamp(15px, 1.1vw, 17px);
  line-height: 1.75;
  color: #555555;
  max-width: 780px;
  font-weight: 300;
  margin: 0;
}

/* Specifications Matrix */
.project-specs-matrix {
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 2.5rem;
}

.project-specs-header {
  margin-bottom: 1.75rem;
}

.project-specs-title {
  font-family: $font-sans;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #111111;
}

.project-specs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem 2.5rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &__idx {
    font-family: $font-mono;
    font-size: 11px;
    color: $color-accent;
  }

  &__label {
    font-family: $font-sans;
    font-size: 11px;
    color: #888888;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  &__val {
    font-family: $font-sans;
    font-size: 14px;
    font-weight: 500;
    color: #111111;
  }
}

/* ========================================================================= */
/* 5. WORK EXECUTED TABLE                                                    */
/* ========================================================================= */
.project-section {
  padding-bottom: clamp(4rem, 8vh, 7rem);
  margin-bottom: clamp(4rem, 8vh, 7rem);
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);

  &--cta {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
}

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

.work-table {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.work-row {
  display: grid;
  grid-template-columns: 140px 1fr 340px;
  gap: clamp(20px, 3vw, 50px);
  align-items: center;
  padding: 2rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background-color 0.25s ease, padding-left 0.25s ease;

  &:hover {
    background-color: #fafaf8;
    padding-left: 1.25rem;
  }

  @include tablet {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.5rem 0;
  }
}

.work-col-phase {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.work-phase-num {
  font-family: $font-mono;
  font-size: 12px;
  font-weight: 600;
  color: $color-accent;
}

.work-status-badge {
  font-family: $font-sans;
  font-size: 11px;
  color: #888888;
  text-transform: uppercase;
}

.work-discipline-title {
  font-family: $font-sans;
  font-size: clamp(16px, 1.4vw, 20px);
  font-weight: 500;
  color: #111111;
  margin: 0 0 0.35rem 0;
}

.work-discipline-scope {
  font-family: $font-sans;
  font-size: 13px;
  color: #666666;
  line-height: 1.5;
  margin: 0;
}

.work-col-meta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-left: 1px solid rgba(0, 0, 0, 0.06);
  padding-left: 1.5rem;

  @include tablet {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    padding-top: 0.75rem;
  }
}

.work-meta-label {
  display: block;
  font-family: $font-sans;
  font-size: 10px;
  text-transform: uppercase;
  color: #999999;
  letter-spacing: 0.04em;
}

.work-meta-val {
  font-family: $font-sans;
  font-size: 12px;
  font-weight: 500;
  color: #111111;
}

/* ========================================================================= */
/* 6. MULTI-PERSPECTIVE EXPOSURE MONOGRAPHS                                  */
/* ========================================================================= */
.perspective-blocks-list {
  display: flex;
  flex-direction: column;
  gap: clamp(80px, 14vh, 160px);
  margin-top: clamp(40px, 6vh, 80px);
}

.perspective-block {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: clamp(40px, 6vw, 100px);
  align-items: center;

  &--right {
    grid-template-columns: 1.2fr 1fr;

    .perspective-text {
      order: 2;
    }

    .perspective-media {
      order: 1;
    }

    @include tablet {
      grid-template-columns: 1fr;

      .perspective-text {
        order: 1;
      }
      .perspective-media {
        order: 2;
      }
    }
  }

  @include tablet {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.perspective-text {
  display: flex;
  flex-direction: column;
}

.perspective-tag {
  font-family: $font-mono;
  font-size: 11px;
  color: $color-accent;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.75rem;
}

.perspective-heading {
  font-family: $font-sans;
  font-size: clamp(28px, 3.2vw, 44px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: #111111;
  margin: 0 0 1rem 0;
}

.perspective-sub {
  font-family: $font-sans;
  font-size: clamp(14px, 1.1vw, 16px);
  font-weight: 500;
  color: #333333;
  margin: 0 0 1.25rem 0;
  line-height: 1.5;
}

.perspective-body {
  font-family: $font-sans;
  font-size: 14px;
  line-height: 1.7;
  color: #666666;
  margin: 0 0 1.75rem 0;
}

.perspective-quote {
  font-family: $font-serif;
  font-size: clamp(18px, 1.6vw, 24px);
  line-height: 1.45;
  color: #111111;
  border-left: 2px solid $color-accent;
  padding-left: 1.5rem;
  margin: 0 0 2rem 0;
  font-style: normal;
}

.perspective-mini-specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  padding-top: 1.5rem;
}

.mini-spec-card {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  &__val {
    font-family: $font-sans;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111111;
  }

  &__label {
    font-family: $font-sans;
    font-size: 11px;
    color: #888888;
    text-transform: uppercase;
  }
}

.perspective-media-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 11;
  overflow: hidden;
  border-radius: 4px;
  background-color: #f0f0ed;
}

.perspective-sec-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  will-change: transform;
}

/* ========================================================================= */
/* 7. SPATIAL GALLERY                                                        */
/* ========================================================================= */
.spatial-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.spatial-gallery-tile {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.spatial-gallery-img-box {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 11;
  overflow: hidden;
  border-radius: 4px;
  background: #f0f0ed;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: scale(1.05);
    }
  }
}

.spatial-gallery-tag {
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  font-family: $font-mono;
  font-size: 10px;
  text-transform: uppercase;
  background: rgba(17, 17, 17, 0.75);
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  backdrop-filter: blur(4px);
}

.spatial-gallery-caption {
  font-family: $font-sans;
  font-size: 13px;
  color: #666666;
}

/* ========================================================================= */
/* 8. ACQUISITION CTA                                                        */
/* ========================================================================= */
.acquisition-box {
  background: #fbfbf9;
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

.acquisition-title {
  font-family: $font-serif;
  font-size: clamp(2rem, 2.8vw, 2.8rem);
  font-weight: 400;
  color: #111111;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.15;
}

.acquisition-desc {
  font-family: $font-sans;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444444;
  font-weight: 300;
  margin: 0 0 2rem 0;
}

.acquisition-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.acquisition-right {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.next-monograph-label {
  font-family: $font-mono;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #888888;
}

.next-monograph-card {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: 4px;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #111111;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  }
}

.next-monograph-img {
  width: 90px;
  height: 65px;
  overflow: hidden;
  border-radius: 2px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.next-monograph-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.next-monograph-cat {
  font-family: $font-mono;
  font-size: 10px;
  color: $color-accent;
  text-transform: uppercase;
}

.next-monograph-name {
  font-family: $font-serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  color: #111111;
}

.next-monograph-loc {
  font-family: $font-sans;
  font-size: 12px;
  color: #777777;
}

/* Not Found */
.project-not-found {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
}
</style>
