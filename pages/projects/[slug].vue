<template>
  <div v-if="project" ref="pageRef" class="project-monograph-page">
    <!-- ============================================================= -->
    <!-- 1. 100VH CINEMATIC HERO SECTION WITH GSAP PARALLAX             -->
    <!-- ============================================================= -->
    <section ref="heroCanvasRef" class="project-hero-canvas">
      <!-- Background Image with GSAP Parallax -->
      <div class="project-hero-bg">
        <img
          ref="heroImgRef"
          :src="project.coverImage"
          :alt="`${project.title} Monolithic Architectural Elevation`"
          class="project-hero-img"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div class="project-hero-overlay"></div>
      </div>

      <!-- Bottom Hero Content Grid -->
      <div class="project-hero-bottom">
        <div class="project-layout-inner">
          <div class="project-hero-grid">
            
            <!-- Left: Monumental Architectural Title -->
            <div class="project-hero-left">
              <h1 ref="titleRef" class="project-hero__title">
                <span class="title-mask">
                  <span class="title-line">{{ project.title }}</span>
                </span>
              </h1>
            </div>

            <!-- Right: Valuation Quick Card & Action Buttons -->
            <div class="project-hero-right">
              <div ref="quickCardRef" class="project-quick-card">
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

              <div ref="heroActionsRef" class="project-hero-actions">
                <a
                  :href="`https://wa.me/919737972097?text=Hello%20Incredible%20Groups%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(project.title)}.`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-hero-btn project-hero-btn--primary"
                >
                  <span class="btn-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </span>
                  <span class="btn-text">WhatsApp Private Inquiries</span>
                </a>
                <NuxtLink to="/contact" class="project-hero-btn project-hero-btn--secondary">
                  <span class="btn-text">Request Acquisition Dossier</span>
                  <span class="btn-arrow">&rarr;</span>
                </NuxtLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 2. MONOGRAPHIC OVERVIEW & ARCHITECTURAL SPECS MATRIX          -->
    <!-- ============================================================= -->
    <section class="project-monograph__overview-section">
      <div class="project-layout-inner">
        <!-- 1. Editorial Lead Narrative (Vertical Block) -->
        <div class="project-lead-block">
          <h2 ref="leadSerifRef" class="project-lead-serif">
            {{ project.fullDescription }}
          </h2>
          <p ref="shortDescRef" class="project-lead-desc">
            {{ project.shortDescription }}
          </p>
        </div>

        <!-- 2. Project Parameters / Metadata Grid (Separated Vertically) -->
        <div class="project-meta-block">
          <div class="project-meta-grid">
            <div class="project-meta-item">
              <span class="project-meta-label">Category</span>
              <span class="project-meta-val">{{ project.category }}</span>
            </div>
            <div class="project-meta-item">
              <span class="project-meta-label">Location</span>
              <span class="project-meta-val">{{ project.location }}</span>
            </div>
            <div class="project-meta-item">
              <span class="project-meta-label">Gross Area</span>
              <span class="project-meta-val">{{ project.area }}</span>
            </div>
            <div class="project-meta-item">
              <span class="project-meta-label">Valuation</span>
              <span class="project-meta-val">{{ project.valuation }}</span>
            </div>
            <div class="project-meta-item">
              <span class="project-meta-label">Lead Architect</span>
              <span class="project-meta-val">{{ project.leadArchitect }}</span>
            </div>
            <div class="project-meta-item">
              <span class="project-meta-label">Status</span>
              <span class="project-meta-val">{{ project.status }} ({{ project.year }})</span>
            </div>
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
              <span class="work-status-badge">{{ work.milestone }}</span>
            </div>

            <div class="work-col-discipline">
              <h3 class="work-discipline-title">{{ work.discipline }}</h3>
              <p class="work-discipline-scope">{{ work.scope }}</p>
            </div>

            <div class="work-col-meta">
              <span class="work-meta-val">{{ work.deliverable }}</span>
              <span class="work-meta-duration">{{ work.duration }}</span>
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
                <h4 class="next-monograph-name">{{ nextProject.title }}</h4>
                <span class="next-monograph-loc">{{ nextProject.location }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Monolithic Footer -->
    <AppFooter />
  </div>

  <!-- Project Not Found -->
  <div v-else class="project-not-found container section-padding">
    <h2>Project Monograph Not Found</h2>
    <p>The requested architectural project is currently unavailable or has been archived.</p>
    <NuxtLink to="/projects" class="btn btn--primary">Return to Projects Portfolio</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '~/data/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';
import { useSiteLoaded } from '~/composables/useSiteLoaded';
import AppFooter from '~/components/AppFooter.vue';

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

const { isSiteLoaded } = useSiteLoaded();

// Template Refs
const pageRef = ref<HTMLElement | null>(null);
const heroCanvasRef = ref<HTMLElement | null>(null);
const heroImgRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
const quickCardRef = ref<HTMLElement | null>(null);
const heroActionsRef = ref<HTMLElement | null>(null);
const leadSerifRef = ref<HTMLElement | null>(null);
const shortDescRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;
let hasPlayedEntrance = false;

const playEntranceAnimation = () => {
  if (hasPlayedEntrance || !import.meta.client) return;
  hasPlayedEntrance = true;

  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Background Image Subtle Scale In & Opacity Fade
  if (heroImgRef.value) {
    heroTl.fromTo(
      heroImgRef.value,
      { scale: 1.10, opacity: 0.5 },
      { scale: 1.0, opacity: 1, duration: 1.8, ease: 'power2.out' },
      0
    );
  }

  // Monumental Title Split Lines Reveal
  if (titleRef.value) {
    const lines = titleRef.value.querySelectorAll('.title-line');
    heroTl.fromTo(
      lines,
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: 'power3.out' },
      0.15
    );
  }

  // Quick Card & Actions
  const rightElements = [quickCardRef.value, heroActionsRef.value].filter(Boolean);
  if (rightElements.length > 0) {
    heroTl.fromTo(
      rightElements,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, stagger: 0.12, ease: 'power3.out' },
      0.35
    );
  }
};

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
  if (!import.meta.client) return;

  ctx = gsap.context(() => {
    // 1. Hero Entrance Animation
    if (isSiteLoaded.value) {
      playEntranceAnimation();
    } else {
      const unwatch = watch(isSiteLoaded, (loaded) => {
        if (loaded) {
          playEntranceAnimation();
          unwatch();
        }
      });
      // Safety fallback
      setTimeout(() => {
        playEntranceAnimation();
      }, 500);
    }

    // 2. Hero Background Image Scroll Parallax Scrub
    if (heroCanvasRef.value && heroImgRef.value) {
      ScrollTrigger.create({
        trigger: heroCanvasRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          if (heroImgRef.value) {
            gsap.set(heroImgRef.value, {
              yPercent: self.progress * 25,
              scale: 1 + self.progress * 0.08
            });
          }
        }
      });
    }

    // 3. Editorial Serif Paragraph Split-Text Line Reveal
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
  background-color: #ffffff;
  color: #111111;
  padding-top: 0;
  padding-bottom: 0;
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
/* 1. 100VH CINEMATIC HERO SECTION                                           */
/* ========================================================================= */
.project-hero-canvas {
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  min-height: 100dvh;
  overflow: hidden;
  background-color: #0c0d0e;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-top: clamp(84px, 12vh, 120px);
  padding-bottom: clamp(40px, 6vh, 64px);

  @include mobile {
    min-height: 100dvh;
    height: auto;
    padding-top: 5.5rem;
    padding-bottom: 2.5rem;
  }
}

.project-hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.project-hero-img {
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

.project-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(12, 13, 14, 0.5) 0%,
    rgba(12, 13, 14, 0.1) 35%,
    rgba(12, 13, 14, 0.4) 65%,
    rgba(12, 13, 14, 0.92) 100%
  );
  pointer-events: none;
}

/* Bottom Hero Content Grid */
.project-hero-bottom {
  position: relative;
  z-index: 10;
  width: 100%;
}

.project-hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: clamp(2rem, 4vw, 4.5rem);
  align-items: flex-end;

  @include desktop {
    grid-template-columns: 1.15fr 1fr;
    gap: 2.5rem;
  }

  @include tablet {
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: flex-start;
  }
}

.project-hero-left {
  display: flex;
  flex-direction: column;
}

.project-hero__title {
  font-family: $font-serif;
  font-size: clamp(3rem, 5.8vw, 5.8rem);
  font-weight: 400;
  line-height: 0.96;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.45);
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

.project-hero-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-quick-card {
  background: rgba(18, 20, 24, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  padding: 1.5rem 1.75rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);

  @include mobile {
    grid-template-columns: 1fr;
    gap: 0.85rem;
    padding: 1.25rem;
  }
}

.quick-metric {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  &__label {
    font-family: $font-mono;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.55);
  }

  &__val {
    font-family: $font-sans;
    font-size: 1.2rem;
    font-weight: 600;
    color: #ffffff;

    &--small {
      font-size: 0.88rem;
      font-weight: 500;
      line-height: 1.35;
      color: rgba(255, 255, 255, 0.9);
    }
  }
}

.project-hero-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.project-hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 0.9rem 1.15rem;
  font-family: $font-mono;
  font-size: 0.76rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;

  .btn-icon {
    display: inline-flex;
    align-items: center;
    line-height: 1;
  }

  .btn-arrow {
    display: inline-block;
    transition: transform 0.25s ease;
    font-size: 0.9rem;
  }

  &--primary {
    background: #ffffff;
    color: #0c0d0e;
    border: 1px solid #ffffff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);

    &:hover {
      background: #f0ece1;
      border-color: #f0ece1;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
    }
  }

  &--secondary {
    background: rgba(18, 20, 24, 0.65);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.45);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);

      .btn-arrow {
        transform: translateX(3px);
      }
    }
  }
}

/* ========================================================================= */
/* 4. MONOGRAPHIC OVERVIEW & ARCHITECTURAL SPECS                             */
/* ========================================================================= */
.project-monograph__overview-section {
  padding-top: clamp(4rem, 8vh, 7rem);
  padding-bottom: clamp(4rem, 8vh, 7rem);
  margin-bottom: clamp(4rem, 8vh, 7rem);
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
}

/* 1. Vertical Editorial Lead Block */
.project-lead-block {
  width: 100%;
  max-width: 1240px;
  margin-bottom: clamp(3.5rem, 6vh, 5.5rem);
}

.project-lead-serif {
  font-family: $font-serif;
  font-size: clamp(28px, 3.2vw, 50px);
  font-weight: 400;
  line-height: 1.22;
  letter-spacing: -0.015em;
  color: #111111;
  margin: 0 0 2rem 0;
}

.project-lead-desc {
  font-family: $font-sans;
  font-size: clamp(16px, 1.2vw, 19px);
  line-height: 1.78;
  color: #555555;
  max-width: 920px;
  font-weight: 300;
  margin: 0;
}

/* 2. Vertical Metadata Matrix */
.project-meta-block {
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: clamp(2.25rem, 3.5vh, 3.25rem) 0;
  margin-bottom: clamp(3.5rem, 6vh, 5.5rem);
}

.project-meta-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: clamp(16px, 2.5vw, 36px);
  align-items: start;

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px 24px;
  }

  @include mobile {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;
  }
}

.project-meta-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-meta-label {
  font-family: $font-sans;
  font-size: 11px;
  font-weight: 600;
  color: #888888;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.project-meta-val {
  font-family: $font-sans;
  font-size: 14px;
  font-weight: 500;
  color: #111111;
  line-height: 1.45;
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
  grid-template-columns: 140px 1fr 280px;
  gap: clamp(20px, 3vw, 40px);
  align-items: center;
  padding: 1.6rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  transition: background-color 0.25s ease, padding-left 0.25s ease;

  &:hover {
    background-color: #fafaf8;
    padding-left: 1.25rem;
  }

  @include tablet {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.4rem 0;
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
  gap: 0.35rem;
  border-left: 1px solid rgba(0, 0, 0, 0.06);
  padding-left: 1.5rem;

  @include tablet {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    padding-top: 0.75rem;
  }
}

.work-meta-val {
  font-family: $font-sans;
  font-size: 13px;
  font-weight: 500;
  color: #111111;
  line-height: 1.4;
}

.work-meta-duration {
  font-family: $font-sans;
  font-size: 12px;
  color: #777777;
  font-weight: 400;
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
  padding: 0.85rem 1.15rem;
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
  width: 85px;
  height: 60px;
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
  justify-content: center;
  gap: 0.25rem;
}

.next-monograph-name {
  font-family: $font-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0;
  color: #111111;
  line-height: 1.2;
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
