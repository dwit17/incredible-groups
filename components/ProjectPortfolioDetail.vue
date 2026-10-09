<template>
  <div v-if="project" ref="containerRef" class="project-monograph" :aria-label="project.title">
    
    <!-- ============================================================= -->
    <!-- 1. MONOGRAPHIC OVERVIEW & ARCHITECTURAL SPECS TABLE           -->
    <!-- Matches StudioStatementSection & EditorialStatementSection    -->
    <!-- ============================================================= -->
        <!-- 1. Editorial Lead Narrative (Vertical Block) -->
        <div class="project-monograph__lead-block">
          <p ref="leadSerifRef" class="project-monograph__lead-serif">
            {{ project.fullDescription }}
          </p>
          <p ref="shortDescRef" class="project-monograph__sub-desc">
            {{ project.shortDescription }}
          </p>
        </div>

        <!-- 2. Project Parameters / Metadata Grid (Separated Vertically) -->
        <div class="project-monograph__meta-block">
          <div class="project-monograph__meta-grid">
            <div class="project-monograph__meta-item">
              <span class="project-monograph__meta-label">Category</span>
              <span class="project-monograph__meta-val">{{ project.category }}</span>
            </div>
            <div class="project-monograph__meta-item">
              <span class="project-monograph__meta-label">Location</span>
              <span class="project-monograph__meta-val">{{ project.location }}</span>
            </div>
            <div class="project-monograph__meta-item">
              <span class="project-monograph__meta-label">Gross Area</span>
              <span class="project-monograph__meta-val">{{ project.area }}</span>
            </div>
            <div class="project-monograph__meta-item">
              <span class="project-monograph__meta-label">Valuation</span>
              <span class="project-monograph__meta-val">{{ project.valuation }}</span>
            </div>
            <div class="project-monograph__meta-item">
              <span class="project-monograph__meta-label">Architect</span>
              <span class="project-monograph__meta-val">{{ project.leadArchitect }}</span>
            </div>
            <div class="project-monograph__meta-item">
              <span class="project-monograph__meta-label">Status</span>
              <span class="project-monograph__meta-val">{{ project.status }} ({{ project.year }})</span>
            </div>
          </div>
        </div>

      <!-- Quick Specifications 4-Column Table -->
      <div class="project-monograph__specs-table">
        <div class="project-monograph__specs-header">
          <span class="project-monograph__specs-title">Architectural &amp; Structural Parameters</span>
        </div>
        <div class="project-monograph__specs-grid">
          <div
            v-for="(spec, sIdx) in project.specifications"
            :key="sIdx"
            class="project-monograph__spec-item"
          >
            <span class="project-monograph__spec-label">{{ spec.label }}</span>
            <span class="project-monograph__spec-val">{{ spec.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 2. FULL-BLEED 100VW HERO CANVAS WITH SCROLL UNVEIL            -->
    <!-- Matches EditorialStatementSection.vue Full-Bleed 100vh canvas -->
    <!-- ============================================================= -->
    <section ref="fullbleedRef" class="project-monograph__fullbleed">
      <div class="project-monograph__fullbleed-wrapper">
        <img
          ref="heroImgRef"
          :src="project.coverImage"
          :alt="`${project.title} Monolithic Architectural Elevation`"
          class="project-monograph__fullbleed-img"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="project-monograph__fullbleed-caption">
        <div class="container container--fluid project-monograph__caption-inner">
          <span class="project-monograph__caption-name">{{ project.title }}</span>
          <span class="project-monograph__caption-loc">{{ project.location }} • {{ project.year }}</span>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 3. WORK DONE BY INCREDIBLE GROUPS (ATELIER EXECUTION)          -->
    <!-- Clean Horizontal Table Matching Studio Directory               -->
    <!-- ============================================================= -->
    <section class="project-monograph__execution container">
      <div class="project-monograph__section-header">
        <span class="eyebrow">ATELIER DISCIPLINE</span>
        <h2 class="project-monograph__section-title">
          Work Executed by Incredible Groups
        </h2>
      </div>

      <div class="project-monograph__work-table">
        <div
          v-for="(work, wIdx) in project.workDone"
          :key="wIdx"
          class="project-monograph__work-row"
        >
          <div class="project-monograph__work-col-phase">
            <span class="project-monograph__work-status">{{ work.milestone }}</span>
          </div>

          <div class="project-monograph__work-col-title">
            <h3 class="project-monograph__work-discipline">{{ work.discipline }}</h3>
            <p class="project-monograph__work-scope">{{ work.scope }}</p>
          </div>

          <div class="project-monograph__work-col-meta">
            <div class="project-monograph__work-deliv">
              <span class="project-monograph__work-label">Key Deliverable</span>
              <span class="project-monograph__work-val">{{ work.deliverable }}</span>
            </div>
            <div class="project-monograph__work-dur">
              <span class="project-monograph__work-label">Timeline</span>
              <span class="project-monograph__work-val">{{ work.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 4. MULTI-PERSPECTIVE EXPOSURE MONOGRAPHS (3-5 Sections)        -->
    <!-- Asymmetric Staggered Layouts Matching SelectedProjectsSection -->
    <!-- ============================================================= -->
    <section class="project-monograph__perspectives container">
      <div class="project-monograph__section-header">
        <span class="eyebrow">SPATIAL CHOREOGRAPHY</span>
        <h2 class="project-monograph__section-title">
          Architectural Perspectives &amp; Exposure
        </h2>
      </div>

      <div class="project-monograph__sections-list">
        <div
          v-for="(sec, secIdx) in project.sections"
          :key="sec.id"
          class="project-monograph__section-block"
          :class="`project-monograph__section-block--${secIdx % 2 === 0 ? 'left' : 'right'}`"
        >
          <!-- Text Narrative Column -->
          <div class="project-monograph__section-text">
            <span class="project-monograph__section-tag">{{ sec.tag }}</span>
            <h3 class="project-monograph__section-heading">{{ sec.heading }}</h3>
            <p class="project-monograph__section-sub">{{ sec.subheading }}</p>
            <p class="project-monograph__section-body">{{ sec.description }}</p>

            <blockquote v-if="sec.highlightQuote" class="project-monograph__quote">
              &ldquo;{{ sec.highlightQuote }}&rdquo;
            </blockquote>

            <div v-if="sec.specs && sec.specs.length > 0" class="project-monograph__mini-specs">
              <div
                v-for="(sp, spIdx) in sec.specs"
                :key="spIdx"
                class="project-monograph__mini-spec-item"
              >
                <span class="project-monograph__mini-spec-val">{{ sp.value }}</span>
                <span class="project-monograph__mini-spec-label">{{ sp.label }}</span>
              </div>
            </div>
          </div>

          <!-- Staggered Image Frame with Scroll Parallax -->
          <div class="project-monograph__section-media">
            <div class="project-monograph__media-frame">
              <img
                :src="sec.image"
                :alt="`${project.title} - ${sec.heading}`"
                class="project-monograph__sec-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 5. VISUAL MONOGRAPHS GALLERY & PRIVATE ACQUISITION CTA        -->
    <!-- Matches Homepage Staggered Photography Grid                    -->
    <!-- ============================================================= -->
    <section class="project-monograph__gallery container">
      <div class="project-monograph__section-header">
        <span class="eyebrow">VISUAL MONOGRAPHS</span>
        <h2 class="project-monograph__section-title">
          Spatial Gallery
        </h2>
      </div>

      <div class="project-monograph__gallery-grid">
        <div
          v-for="(item, gIdx) in project.gallery"
          :key="gIdx"
          class="project-monograph__gallery-item"
        >
          <div class="project-monograph__gallery-img-box">
            <img :src="item.url" :alt="item.caption" loading="lazy" />
          </div>
          <div class="project-monograph__gallery-caption">
            <span class="project-monograph__gallery-tag">{{ item.tag }}</span>
            <span class="project-monograph__gallery-text">{{ item.caption }}</span>
          </div>
        </div>
      </div>

      <!-- Sovereign Acquisition Box -->
      <div class="project-monograph__cta-box">
        <div class="project-monograph__cta-left">
          <span class="eyebrow eyebrow--dot">CONFIDENTIAL INQUIRY</span>
          <h3 class="project-monograph__cta-title">Schedule a Private Presentation</h3>
          <p class="project-monograph__cta-desc">
            Direct access to our partners and principal architects for bespoke acquisitions and sovereign land mandates.
          </p>
          <div class="project-monograph__cta-actions">
            <a
              :href="`https://wa.me/919737972097?text=Hello%20Incredible%20Groups%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(project.title)}.`"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--primary"
            >
              <span>WhatsApp Inquiries (+91 97379 72097)</span>
            </a>
            <NuxtLink to="/contact" class="btn btn--secondary">
              <span>Request Dossier</span>
            </NuxtLink>
          </div>
        </div>

        <div v-if="nextProject" class="project-monograph__cta-right">
          <span class="label-mono">NEXT MONOGRAPH</span>
          <NuxtLink :to="`/projects/${nextProject.slug}`" class="project-monograph__next-link">
            <div class="project-monograph__next-img">
              <img :src="nextProject.coverImage" :alt="nextProject.title" />
            </div>
            <div class="project-monograph__next-info">
              <span class="project-monograph__next-cat">{{ nextProject.category }}</span>
              <h4 class="project-monograph__next-name">{{ nextProject.title }}</h4>
              <span class="project-monograph__next-loc">{{ nextProject.location }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import type { Project } from '~/data/projects';
import { projects } from '~/data/projects';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const props = defineProps<{
  project: Project;
}>();

const containerRef = ref<HTMLElement | null>(null);
const leadSerifRef = ref<HTMLElement | null>(null);
const shortDescRef = ref<HTMLElement | null>(null);
const fullbleedRef = ref<HTMLElement | null>(null);
const heroImgRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

const nextProject = computed(() => {
  const currentIndex = projects.findIndex((p) => p.slug === props.project.slug);
  if (currentIndex === -1) return projects[0];
  return projects[(currentIndex + 1) % projects.length];
});

onMounted(async () => {
  await nextTick();
  if (!import.meta.client || !containerRef.value) return;

  ctx = gsap.context(() => {
    // 1. Editorial Serif Paragraph Split-Text Line Reveal
    if (leadSerifRef.value) {
      const lines = splitTextIntoLines(leadSerifRef.value);
      gsap.fromTo(
        lines,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leadSerifRef.value,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    if (shortDescRef.value) {
      const subLines = splitTextIntoLines(shortDescRef.value);
      gsap.fromTo(
        subLines,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: shortDescRef.value,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // 2. Full-Bleed Hero Image Scroll Unveil & Parallax
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

    // 3. Staggered Section Parallax & Line-by-Line Reveal
    const sectionBlocks = containerRef.value.querySelectorAll('.project-monograph__section-block');
    sectionBlocks.forEach((block) => {
      const heading = block.querySelector('.project-monograph__section-heading');
      const sub = block.querySelector('.project-monograph__section-sub');
      const body = block.querySelector('.project-monograph__section-body');
      const quote = block.querySelector('.project-monograph__quote');

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

      const img = block.querySelector('.project-monograph__sec-img');
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

  }, containerRef.value);
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

.project-monograph {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: #111111;

  // -------------------------------------------------------------
  // 1. TOP INFORMATION GROUP (Matches StudioStatementSection)
  // -------------------------------------------------------------
  &__intro {
    padding-top: clamp(40px, 6vh, 80px);
    padding-bottom: clamp(60px, 10vh, 120px);
  }

  &__lead-block {
    width: 100%;
    max-width: 1240px;
    margin-bottom: clamp(3.5rem, 6vh, 5.5rem);
  }

  &__lead-serif {
    font-family: $font-serif;
    font-size: clamp(28px, 3.2vw, 50px);
    font-weight: 400;
    line-height: 1.22;
    letter-spacing: -0.015em;
    color: #111111;
    margin: 0 0 2rem 0;
  }

  &__sub-desc {
    font-family: $font-sans;
    font-size: clamp(16px, 1.2vw, 19px);
    line-height: 1.78;
    color: #555555;
    max-width: 920px;
    font-weight: 300;
    margin: 0;
  }

  &__meta-block {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding: clamp(2.25rem, 3.5vh, 3.25rem) 0;
    margin-bottom: clamp(3.5rem, 6vh, 5.5rem);
  }

  &__meta-grid {
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

  &__meta-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__meta-label {
    font-family: $font-sans;
    font-size: 11px;
    font-weight: 600;
    color: #888888;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  &__meta-val {
    font-family: $font-sans;
    font-size: 14px;
    font-weight: 500;
    color: #111111;
    line-height: 1.45;
  }

  // Specifications Table
  &__specs-table {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding-top: 2rem;
  }

  &__specs-header {
    margin-bottom: 1.5rem;
  }

  &__specs-title {
    font-family: $font-sans;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #111111;
  }

  &__specs-grid {
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

  &__spec-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  &__spec-idx {
    font-family: $font-mono;
    font-size: 11px;
    color: $color-accent;
  }

  &__spec-label {
    font-family: $font-sans;
    font-size: 11px;
    color: #888888;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  &__spec-val {
    font-family: $font-sans;
    font-size: 14px;
    font-weight: 500;
    color: #111111;
  }

  // -------------------------------------------------------------
  // 2. FULL-BLEED 100VW HERO CANVAS (Editorial Statement Style)
  // -------------------------------------------------------------
  &__fullbleed {
    position: relative;
    width: 100vw;
    height: 90vh;
    min-height: 90vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
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
  }

  &__caption-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $font-sans;
    font-size: 12px;
    color: #ffffff;
  }

  &__caption-name {
    font-weight: 500;
  }

  &__caption-loc {
    opacity: 0.8;
  }

  // -------------------------------------------------------------
  // 3. WORK EXECUTED TABLE (Matches Studio Offices Style)
  // -------------------------------------------------------------
  &__execution {
    padding-top: clamp(80px, 14vh, 160px);
    padding-bottom: clamp(80px, 14vh, 160px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  &__section-header {
    margin-bottom: clamp(3rem, 6vh, 5rem);
  }

  &__section-title {
    font-family: $font-sans;
    font-size: clamp(36px, 4.2vw, 68px);
    font-weight: 400;
    line-height: 0.94;
    letter-spacing: -0.035em;
    color: #111111;
    margin: 0.75rem 0 0 0;
  }

  &__work-table {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  &__work-row {
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

  &__work-col-phase {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__work-phase-num {
    font-family: $font-mono;
    font-size: 12px;
    font-weight: 600;
    color: $color-accent;
  }

  &__work-status {
    font-family: $font-sans;
    font-size: 11px;
    color: #888888;
    text-transform: uppercase;
  }

  &__work-discipline {
    font-family: $font-sans;
    font-size: clamp(16px, 1.4vw, 20px);
    font-weight: 500;
    color: #111111;
    margin: 0 0 0.35rem 0;
  }

  &__work-scope {
    font-family: $font-sans;
    font-size: 13px;
    color: #666666;
    line-height: 1.5;
    margin: 0;
  }

  &__work-col-meta {
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

  &__work-label {
    display: block;
    font-family: $font-sans;
    font-size: 10px;
    text-transform: uppercase;
    color: #999999;
    letter-spacing: 0.04em;
  }

  &__work-val {
    font-family: $font-sans;
    font-size: 12px;
    font-weight: 500;
    color: #111111;
  }

  // -------------------------------------------------------------
  // 4. MULTI-PERSPECTIVE EXPOSURE MONOGRAPHS
  // -------------------------------------------------------------
  &__perspectives {
    padding-top: clamp(80px, 14vh, 160px);
    padding-bottom: clamp(80px, 14vh, 160px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  &__sections-list {
    display: flex;
    flex-direction: column;
    gap: clamp(80px, 16vh, 200px);
    margin-top: clamp(40px, 8vh, 80px);
  }

  &__section-block {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: clamp(40px, 6vw, 100px);
    align-items: center;

    &--right {
      grid-template-columns: 1.2fr 1fr;

      .project-monograph__section-text {
        order: 2;
      }
      .project-monograph__section-media {
        order: 1;
      }
    }

    @include tablet {
      grid-template-columns: 1fr !important;
      gap: 40px;

      .project-monograph__section-text {
        order: 1 !important;
      }
      .project-monograph__section-media {
        order: 2 !important;
      }
    }
  }

  &__section-tag {
    display: block;
    font-family: $font-mono;
    font-size: 11px;
    color: $color-accent;
    letter-spacing: 0.06em;
    margin-bottom: 0.75rem;
  }

  &__section-heading {
    font-family: $font-sans;
    font-size: clamp(28px, 3.2vw, 48px);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: #111111;
    margin: 0 0 1rem 0;
  }

  &__section-sub {
    font-family: $font-serif;
    font-size: clamp(18px, 1.8vw, 24px);
    font-style: normal;
    color: #444444;
    line-height: 1.35;
    margin: 0 0 1.25rem 0;
  }

  &__section-body {
    font-family: $font-sans;
    font-size: 13px;
    line-height: 1.65;
    color: #666666;
    margin: 0 0 1.5rem 0;
  }

  &__quote {
    font-family: $font-serif;
    font-size: 17px;
    font-style: normal;
    color: #111111;
    line-height: 1.55;
    margin: 1.5rem 0;
  }

  &__mini-specs {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    padding-top: 1.25rem;
  }

  &__mini-spec-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  &__mini-spec-val {
    font-family: $font-sans;
    font-size: 16px;
    font-weight: 600;
    color: #111111;
  }

  &__mini-spec-label {
    font-family: $font-sans;
    font-size: 10px;
    color: #888888;
    text-transform: uppercase;
  }

  &__media-frame {
    width: 100%;
    aspect-ratio: 16 / 11;
    overflow: hidden;
    background-color: #f0f0ee;
    position: relative;
    border-radius: 1px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      will-change: transform;
    }
  }

  // -------------------------------------------------------------
  // 5. SPATIAL GALLERY & CTA
  // -------------------------------------------------------------
  &__gallery {
    padding-top: clamp(80px, 14vh, 160px);
    padding-bottom: clamp(100px, 16vh, 200px);
  }

  &__gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(24px, 4vw, 60px);
    margin-bottom: clamp(80px, 14vh, 160px);

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__gallery-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__gallery-img-box {
    width: 100%;
    aspect-ratio: 16 / 10.5;
    overflow: hidden;
    background-color: #f0f0ee;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }

  &__gallery-item:hover &__gallery-img-box img {
    transform: scale(1.03);
  }

  &__gallery-caption {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 0.25rem;
    font-family: $font-sans;
    font-size: 12px;
  }

  &__gallery-tag {
    color: #888888;
  }

  &__gallery-text {
    color: #111111;
  }

  // Sovereign CTA Box
  &__cta-box {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
    background-color: #0c0d0e;
    color: #ffffff;
    padding: clamp(40px, 6vw, 80px);
    border-radius: 2px;

    @include tablet {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  &__cta-title {
    font-family: $font-serif;
    font-size: clamp(32px, 3.8vw, 56px);
    font-weight: 400;
    line-height: 1.05;
    color: #ffffff;
    margin: 0.75rem 0 1rem 0;
  }

  &__cta-desc {
    font-family: $font-sans;
    font-size: 13px;
    line-height: 1.6;
    color: #888888;
    max-width: 520px;
    margin: 0 0 1.75rem 0;
  }

  &__cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__cta-right {
    border-left: 1px solid rgba(255, 255, 255, 0.12);
    padding-left: clamp(20px, 4vw, 60px);

    @include tablet {
      border-left: none;
      padding-left: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      padding-top: 2rem;
    }
  }

  &__next-link {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
    text-decoration: none;
    transition: transform 0.25s ease;

    &:hover {
      transform: translateX(6px);
    }
  }

  &__next-img {
    width: 110px;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background-color: #222222;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__next-info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  &__next-cat {
    font-family: $font-sans;
    font-size: 11px;
    color: $color-accent;
  }

  &__next-name {
    font-family: $font-sans;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
  }

  &__next-loc {
    font-family: $font-sans;
    font-size: 11px;
    color: #777777;
  }
}
</style>
