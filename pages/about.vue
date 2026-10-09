<template>
  <div class="about-page">
    <!-- ============================================================= -->
    <!-- 1. HERO SECTION: Full-Bleed 100vh Architectural Canvas         -->
    <!-- ============================================================= -->
    <section ref="heroSectionRef" class="about-hero" aria-label="About Incredible Groups Hero">
      <div ref="canvasRef" class="about-hero__canvas">
        <div ref="heroImageWrapRef" class="about-hero__image-wrapper">
          <img
            ref="heroImageRef"
            src="/images/statement-architecture.jpg"
            alt="Incredible Groups - Monolithic Architectural Landmark"
            class="about-hero__image"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <!-- Atmospheric Architectural Gradient Overlay -->
        <div class="about-hero__overlay"></div>

        <!-- Monumental Hero Title Block (Zero DOM-splitting line wraps) -->
        <div ref="titleBlockRef" class="about-hero__title-block">
          <div class="container container--fluid">
            <h1 class="about-hero__title">
              <span class="about-hero__line-wrap">
                <span class="about-hero__title-line">SCULPTING TIME, EARTH &amp;</span>
              </span>
              <span class="about-hero__line-wrap">
                <span class="about-hero__title-line">MONOLITHIC SANCTUARY</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 2. THE JOURNEY ATELIER CONTAINER WITH HIGH-PERFORMANCE FLIGHT PATH -->
    <!-- ============================================================= -->
    <div id="about-journey" ref="journeyRef" class="about-journey container container--fluid">
      <!-- High-Performance Vector Flight Path (Hardware Accelerated) -->
      <div class="about-flight-path-wrap" aria-hidden="true">
        <svg id="about-flight-svg" ref="svgRef" class="about-flight-svg">
          <!-- 1. Base light dashed trajectory -->
          <path
            id="about-flight-base-path"
            ref="basePathRef"
            d=""
            fill="none"
            stroke="rgba(17, 17, 17, 0.15)"
            stroke-width="1.2"
            stroke-dasharray="4 6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <!-- 2. Dark active dashed trajectory -->
          <path
            id="about-flight-active-path"
            ref="activePathRef"
            d=""
            fill="none"
            stroke="#111111"
            stroke-width="1.6"
            stroke-dasharray="4 6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <!-- Travelling Flight Node (Hardware Accelerated 3D Transform) -->
      <div id="about-flight-node" ref="nodeRef" class="about-flight-node" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" class="about-flight-node-icon">
          <circle cx="20" cy="20" r="17" stroke="#c8a97e" stroke-width="1.2" stroke-dasharray="3 3.5" opacity="0.9" />
          <circle cx="20" cy="20" r="10" fill="#ffffff" stroke="#111111" stroke-width="1.2" />
          <path d="M 15 14.5 L 26 20 L 15 25.5 L 17.5 20 Z" fill="#111111" />
        </svg>
      </div>

      <!-- Sections Nested inside Journey -->
      <div class="about-journey__content">
        <!-- ============================================================= -->
        <!-- SECTION 1: Studio Workshop & Manifesto                         -->
        <!-- ============================================================= -->
        <section id="about-sec-manifesto" class="about-journey-sec about-manifesto">
          <div class="about-manifesto__workshop-wrap">
            <div class="about-manifesto__workshop-inner">
              <img
                src="/images/studio-01.jpg"
                alt="Incredible Groups Atelier Review Session"
                class="about-manifesto__workshop-img"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div class="about-manifesto__grid">
            <div class="about-manifesto__col-left">
              <h2 ref="manifestoHeadingRef" class="about-manifesto__heading">
                Our mission is to return modern living to the quiet permanence of monolithic geometry and patient craftsmanship.
              </h2>
            </div>

            <div class="about-manifesto__col-right">
              <p ref="manifestoTextRef" class="about-manifesto__body">
                We reject synthetic finishes, rushed assembly lines, and fleeting trends. Every private coastal sanctuary, urban sky mansion, and sovereign venture in our atelier begins with raw mineral authenticity—quarried basalt, hand-poured architectural concrete, oxidized bronze, and seasoned teak.
              </p>
              <p class="about-manifesto__body about-manifesto__body--secondary">
                Operating across Mumbai, North Goa, and GIFT City, we merge rigorous structural engineering with visionary private equity syndication to build landmarks that endure for generations.
              </p>
            </div>
          </div>
        </section>

        <!-- ============================================================= -->
        <!-- SECTION 2: Foundational Craft & Capital Principles            -->
        <!-- ============================================================= -->
        <section id="about-sec-principles" class="about-journey-sec about-pillars">
          <div class="about-pillars__header">
            <h2 class="about-pillars__title">Foundational Design &amp; Capital Tenets</h2>
          </div>

          <div ref="pillarsGridRef" class="about-pillars__grid">
            <!-- Pillar 1 -->
            <div class="about-pillar-card">
              <div class="about-pillar-card__icon-wrap">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2" class="about-pillar-card__icon">
                  <path d="M4 32L16 12L24 24L30 15L36 32H4Z" stroke-linejoin="round" />
                  <path d="M16 12L20 6L26 15" stroke-dasharray="2 3" />
                  <path d="M10 26H22" stroke-dasharray="2 2" />
                </svg>
              </div>
              <h3 class="about-pillar-card__name">Geological Provenance</h3>
              <p class="about-pillar-card__desc">
                Directly sourcing untreated mineral stone, basalt blocks, and volcanic pumice from indigenous historical quarries with uncompromised grain fidelity.
              </p>
            </div>

            <!-- Pillar 2 -->
            <div class="about-pillar-card">
              <div class="about-pillar-card__icon-wrap">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2" class="about-pillar-card__icon">
                  <circle cx="20" cy="20" r="14" stroke-dasharray="3 4" />
                  <path d="M14 18C16 15 24 15 26 18C28 21 24 26 20 26C16 26 12 21 14 18Z" />
                  <circle cx="20" cy="20" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <h3 class="about-pillar-card__name">Biophilic Precision</h3>
              <p class="about-pillar-card__desc">
                Harmonizing micro-climates, coastal wind drafts, and passive solar orientation to naturally cool interior sanctuaries without excessive energy load.
              </p>
            </div>

            <!-- Pillar 3 -->
            <div class="about-pillar-card">
              <div class="about-pillar-card__icon-wrap">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2" class="about-pillar-card__icon">
                  <path d="M20 4C20 4 8 16 8 24C8 30.627 13.373 36 20 36C26.627 36 32 30.627 32 24C32 16 20 4 20 4Z" />
                  <path d="M20 14V28M20 28L15 23M20 28L25 23" />
                </svg>
              </div>
              <h3 class="about-pillar-card__name">Zero Disposable Design</h3>
              <p class="about-pillar-card__desc">
                Treating surfaces solely with natural linseed, organic oils, and acoustic finishes that age gracefully into a deeper, patina-rich aesthetic.
              </p>
            </div>

            <!-- Pillar 4 -->
            <div class="about-pillar-card">
              <div class="about-pillar-card__icon-wrap">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.2" class="about-pillar-card__icon">
                  <path d="M8 32V20L16 12L24 20V32H8Z" />
                  <path d="M24 20L32 12V32H24" />
                  <circle cx="16" cy="18" r="3" />
                </svg>
              </div>
              <h3 class="about-pillar-card__name">Sovereign Syndicate</h3>
              <p class="about-pillar-card__desc">
                Aligning institutional private capital with deep technical founders across PropTech, sustainable utilities, and next-generation modular engineering.
              </p>
            </div>
          </div>
        </section>

        <!-- ============================================================= -->
        <!-- SECTION 3: Atelier Method & Structural Discipline              -->
        <!-- ============================================================= -->
        <section id="about-sec-method" class="about-journey-sec about-method">
          <div class="about-method__grid">
            <div class="about-method__media">
              <div class="about-method__media-inner">
                <img
                  src="/images/precision-detail.jpg"
                  alt="Incredible Groups Atelier Master Joinery & Stone Chiseling"
                  class="about-method__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div class="about-method__content">
              <h2 class="about-method__title">
                From Charcoal Sketch to Multi-Acre Execution
              </h2>
              <p class="about-method__paragraph">
                By working in intimate collaboration with solitary quarry artisans, master joiners, and computational structural engineers, we retain the handcrafted soul of timeless architecture at sovereign institutional scale.
              </p>
              <p class="about-method__paragraph about-method__paragraph--dim">
                Each commission undergoes months of acoustic modeling, structural load analysis, and physical material prototyping in our Mumbai studio before ground breaking.
              </p>

              <div class="about-method__metrics">
                <div class="about-method__metric-item">
                  <span class="about-method__metric-num">₹1,200+ Cr</span>
                  <span class="about-method__metric-lbl">Capital Deployed</span>
                </div>
                <div class="about-method__metric-item">
                  <span class="about-method__metric-num">100%</span>
                  <span class="about-method__metric-lbl">Bespoke Fabrication</span>
                </div>
                <div class="about-method__metric-item">
                  <span class="about-method__metric-num">20+ Yrs</span>
                  <span class="about-method__metric-lbl">Atelier Heritage</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ============================================================= -->
        <!-- SECTION 4: 5-Slide Provenance Horizon Timeline                 -->
        <!-- ============================================================= -->
        <section id="about-sec-carousel" class="about-journey-sec about-timeline">
          <div class="about-timeline__header">
            <h2 class="about-timeline__title">Generations of Architectural Evolution</h2>
          </div>

          <div class="about-timeline__carousel-box">
            <div class="about-timeline__carousel-grid">
              <!-- Left Slide Image -->
              <div class="about-timeline__slide-media">
                <div class="about-timeline__slide-img-box">
                  <img
                    :src="milestones[currentSlide].image"
                    :alt="milestones[currentSlide].title"
                    class="about-timeline__slide-img"
                    decoding="async"
                  />
                </div>
              </div>

              <!-- Right Slide Content -->
              <div class="about-timeline__slide-info">
                <div class="about-timeline__slide-top">
                  <span class="about-timeline__slide-year">{{ milestones[currentSlide].year }}</span>
                </div>

                <h3 class="about-timeline__slide-heading">
                  {{ milestones[currentSlide].title }}
                </h3>

                <p class="about-timeline__slide-desc">
                  {{ milestones[currentSlide].description }}
                </p>

                <!-- Controls -->
                <div class="about-timeline__controls">
                  <div class="about-timeline__dots">
                    <button
                      v-for="(item, idx) in milestones"
                      :key="idx"
                      class="about-timeline__dot"
                      :class="{ 'about-timeline__dot--active': currentSlide === idx }"
                      :aria-label="`Go to milestone ${item.year}`"
                      @click="setSlide(idx)"
                    ></button>
                  </div>

                  <div class="about-timeline__nav-btns">
                    <button
                      class="about-timeline__nav-btn"
                      aria-label="Previous milestone"
                      @click="prevSlide"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      class="about-timeline__nav-btn"
                      aria-label="Next milestone"
                      @click="nextSlide"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ============================================================= -->
        <!-- SECTION 5: Private Client Dialogue CTA Box                     -->
        <!-- ============================================================= -->
        <section id="about-sec-cta" class="about-journey-sec about-cta">
          <div id="about-cta-box" class="about-cta__box">
            <div class="about-cta__content">
              <h2 class="about-cta__heading">Commission a Sanctuary or Portfolio Syndicate</h2>
              <p class="about-cta__desc">
                Consult directly with our principal architects and capital allocation team for bespoke spatial placement or off-market acquisitions.
              </p>
            </div>

            <div class="about-cta__actions">
              <NuxtLink id="about-cta-btn" to="/contact" class="btn-minimal">
                <span>Initiate Consultation</span>
                <span>&rarr;</span>
              </NuxtLink>
              <a
                href="https://wa.me/919737972097?text=Hello%20Incredible%20Groups%2C%20I%20would%20like%20to%20consult%20regarding%20an%20architectural%20commission%20or%20investment."
                target="_blank"
                rel="noopener noreferrer"
                class="about-cta__wa-link"
              >
                <span>WhatsApp Direct Desk</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Monumental Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';
import { useSiteLoaded } from '~/composables/useSiteLoaded';
import AppFooter from '~/components/AppFooter.vue';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const { isSiteLoaded } = useSiteLoaded();

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/images/statement-architecture.jpg',
      fetchpriority: 'high'
    }
  ]
});

useSeoMeta({
  title: 'About Us & Provenance - Incredible Groups Architectural Atelier',
  description: 'The story behind Incredible Groups: Monolithic architectural landmarks, raw geological provenance, bespoke craftsmanship, and sovereign-grade alternative investment syndication.',
  ogTitle: 'About Us & Provenance - Incredible Groups',
  ogImage: '/placeholders/og-cover.png'
});

// Interactive Milestones Data
const milestones = [
  {
    year: '2004',
    category: 'STUDIO INCEPTION',
    title: 'Founding of the Architectural Atelier',
    description: 'Incredible Groups was established in Mumbai as an independent architectural studio dedicated to monolithic structural permanence and bespoke private estates.',
    image: '/images/sketch-architecture.jpg'
  },
  {
    year: '2012',
    category: 'COASTAL EXPANSION',
    title: 'Private Sanctuaries in North Goa',
    description: 'Commissioned to craft restorative cliff-edge estates in Assagao and Anjuna, introducing biophilic micro-climate engineering to ultra-luxury tropical living.',
    image: '/images/hero-architecture.jpg'
  },
  {
    year: '2018',
    category: 'CAPITAL ALLOCATION',
    title: 'Sovereign Real Estate & Venture Syndicate',
    description: 'Expanded into direct equity co-investment, backing disruptive founders in PropTech, green cement, and energy-efficient building automation systems.',
    image: '/images/project-info-architecture.jpg'
  },
  {
    year: '2022',
    category: 'MODULAR INNOVATION',
    title: 'Precision Modular & Engineered Timber',
    description: 'Integrated prefabricated precision steel and laminated timber workflows, reducing construction timelines by 40% while enhancing structural durability.',
    image: '/images/precision-preliminary.jpg'
  },
  {
    year: '2026',
    category: 'FUTURE HORIZON',
    title: 'AI-Guided Structural Architecture & GIFT City Hub',
    description: 'Inaugurated our alternative investment headquarters at GIFT City, leveraging autonomous structural computation for next-century architectural landmarks.',
    image: '/images/statement-architecture.jpg'
  }
];

const currentSlide = ref(0);
const isSlideTransitioning = ref(false);

const changeSlide = (newIdx: number) => {
  if (isSlideTransitioning.value || newIdx === currentSlide.value) return;
  isSlideTransitioning.value = true;
  const slideImg = document.querySelector('.about-timeline__slide-img');
  if (slideImg) {
    gsap.to(slideImg, {
      opacity: 0,
      scale: 1.05,
      duration: 0.22,
      ease: 'power2.in',
      onComplete: () => {
        currentSlide.value = newIdx;
        nextTick(() => {
          gsap.fromTo(
            slideImg,
            { opacity: 0, scale: 0.96 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.42,
              ease: 'power2.out',
              onComplete: () => {
                isSlideTransitioning.value = false;
              }
            }
          );
        });
      }
    });
  } else {
    currentSlide.value = newIdx;
    isSlideTransitioning.value = false;
  }
};

const setSlide = (idx: number) => {
  changeSlide(idx);
};

const nextSlide = () => {
  changeSlide((currentSlide.value + 1) % milestones.length);
};

const prevSlide = () => {
  changeSlide((currentSlide.value - 1 + milestones.length) % milestones.length);
};

// Refs for GSAP & Dynamic Path
const heroSectionRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLElement | null>(null);
const heroImageWrapRef = ref<HTMLElement | null>(null);
const heroImageRef = ref<HTMLElement | null>(null);
const titleBlockRef = ref<HTMLElement | null>(null);
const manifestoHeadingRef = ref<HTMLElement | null>(null);
const manifestoTextRef = ref<HTMLElement | null>(null);
const pillarsGridRef = ref<HTMLElement | null>(null);

const journeyRef = ref<HTMLElement | null>(null);
const svgRef = ref<SVGSVGElement | null>(null);
const basePathRef = ref<SVGPathElement | null>(null);
const activePathRef = ref<SVGPathElement | null>(null);
const nodeRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;
let flightScrollTrigger: ScrollTrigger | null = null;
let resizeTimer: any = null;

interface PathPoint {
  x: number;
  y: number;
  angle: number;
}
const SAMPLE_COUNT = 1500;
let precomputedPoints: PathPoint[] = [];
let totalPathLength = 3000;

/**
 * Generate smooth rounded-corner SVG path data string
 */
function buildRoundedPathString(points: { x: number; y: number }[], radius = 60): string {
  if (!points || points.length < 2) return '';
  if (points.length === 2) {
    return `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)} L ${points[1].x.toFixed(2)} ${points[1].y.toFixed(2)}`;
  }

  let d = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;

  for (let i = 1; i < points.length - 1; i++) {
    const pPrev = points[i - 1];
    const pCurr = points[i];
    const pNext = points[i + 1];

    const vPrev = { x: pPrev.x - pCurr.x, y: pPrev.y - pCurr.y };
    const vNext = { x: pNext.x - pCurr.x, y: pNext.y - pCurr.y };

    const dPrev = Math.hypot(vPrev.x, vPrev.y);
    const dNext = Math.hypot(vNext.x, vNext.y);

    if (dPrev < 0.5 || dNext < 0.5) {
      d += ` L ${pCurr.x.toFixed(2)} ${pCurr.y.toFixed(2)}`;
      continue;
    }

    const cornerR = Math.min(radius, dPrev * 0.45, dNext * 0.45);

    const startX = pCurr.x + (vPrev.x / dPrev) * cornerR;
    const startY = pCurr.y + (vPrev.y / dPrev) * cornerR;

    const endX = pCurr.x + (vNext.x / dNext) * cornerR;
    const endY = pCurr.y + (vNext.y / dNext) * cornerR;

    d += ` L ${startX.toFixed(2)} ${startY.toFixed(2)}`;
    d += ` Q ${pCurr.x.toFixed(2)} ${pCurr.y.toFixed(2)} ${endX.toFixed(2)} ${endY.toFixed(2)}`;
  }

  const last = points[points.length - 1];
  d += ` L ${last.x.toFixed(2)} ${last.y.toFixed(2)}`;

  return d;
}

/**
 * Precompute 1500 trajectory points once with smooth tangent smoothing
 */
function precomputeTrajectory(pathEl: SVGPathElement, totalLen: number) {
  const pts: PathPoint[] = [];
  const sampleDist = Math.max(3, totalLen * 0.004);

  for (let i = 0; i <= SAMPLE_COUNT; i++) {
    const t = i / SAMPLE_COUNT;
    const len = Math.max(0.01, Math.min(totalLen - 0.01, t * totalLen));
    const pCenter = pathEl.getPointAtLength(len);
    const pPrev = pathEl.getPointAtLength(Math.max(0, len - sampleDist));
    const pNext = pathEl.getPointAtLength(Math.min(totalLen, len + sampleDist));
    const angle = Math.atan2(pNext.y - pPrev.y, pNext.x - pPrev.x) * (180 / Math.PI);

    pts.push({
      x: pCenter.x,
      y: pCenter.y,
      angle
    });
  }
  return pts;
}

/**
 * Build & Setup the SVG Flight Path with continuous subpixel interpolation
 */
function buildFlightPath() {
  if (!import.meta.client) return;

  const journeyEl = journeyRef.value;
  const svgEl = svgRef.value;
  const basePathEl = basePathRef.value;
  const activePathEl = activePathRef.value;
  const nodeEl = nodeRef.value;

  if (!journeyEl || !svgEl || !basePathEl || !activePathEl || !nodeEl) {
    return;
  }

  const cRect = journeyEl.getBoundingClientRect();
  const W = Math.max(320, Math.round(cRect.width));
  const H = Math.max(600, Math.round(cRect.height));

  svgEl.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svgEl.style.width = `${W}px`;
  svgEl.style.height = `${H}px`;

  function getRel(id: string) {
    const el = document.getElementById(id);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      top: Math.round(r.top - cRect.top),
      bottom: Math.round(r.bottom - cRect.top),
      left: Math.round(r.left - cRect.left),
      right: Math.round(r.right - cRect.left),
      centerX: Math.round((r.left + r.right) / 2 - cRect.left),
      centerY: Math.round((r.top + r.bottom) / 2 - cRect.top),
      width: Math.round(r.width),
      height: Math.round(r.height)
    };
  }

  const rManifesto = getRel('about-sec-manifesto');
  const rPrinciples = getRel('about-sec-principles');
  const rMethod = getRel('about-sec-method');
  const rCarousel = getRel('about-sec-carousel');
  const rCtaBox = getRel('about-cta-box');
  const rCtaBtn = getRel('about-cta-btn');

  let points: { x: number; y: number }[] = [];
  const isDesktop = W >= 768;

  if (isDesktop) {
    const gl = Math.max(28, Math.round(W * 0.035));
    const gr = Math.min(W - 28, Math.round(W * 0.965));
    const midX = Math.round(W / 2);

    const topY = rManifesto ? Math.max(0, rManifesto.top - 40) : 0;
    const yGap1 = rManifesto && rPrinciples ? Math.round((rManifesto.bottom + rPrinciples.top) / 2) : 600;
    const yGap2 = rPrinciples && rMethod ? Math.round((rPrinciples.bottom + rMethod.top) / 2) : 1200;
    const yGap3 = rMethod && rCarousel ? Math.round((rMethod.bottom + rCarousel.top) / 2) : 1800;
    const yGap4 = rCarousel && rCtaBox ? Math.round((rCarousel.bottom + rCtaBox.top) / 2) : 2300;
    const endY = rCtaBtn ? rCtaBtn.top : (rCtaBox ? rCtaBox.top + 20 : H - 50);

    points = [
      { x: midX, y: topY },
      { x: gl, y: topY },
      { x: gl, y: rManifesto ? rManifesto.centerY : 300 },
      { x: gl, y: yGap1 },
      { x: gr, y: yGap1 },
      { x: gr, y: rPrinciples ? rPrinciples.centerY : 900 },
      { x: gr, y: yGap2 },
      { x: gl, y: yGap2 },
      { x: gl, y: rMethod ? rMethod.centerY : 1500 },
      { x: gl, y: yGap3 },
      { x: gr, y: yGap3 },
      { x: gr, y: rCarousel ? rCarousel.centerY : 2050 },
      { x: gr, y: yGap4 },
      { x: rCtaBtn ? rCtaBtn.centerX : midX, y: yGap4 },
      { x: rCtaBtn ? rCtaBtn.centerX : midX, y: endY }
    ];
  } else {
    // Mobile / Tablet Path
    const gl = Math.max(16, Math.round(W * 0.05));
    const midX = Math.round(W / 2);

    const topY = rManifesto ? Math.max(0, rManifesto.top - 20) : 0;
    const yGap1 = rManifesto && rPrinciples ? Math.round((rManifesto.bottom + rPrinciples.top) / 2) : 550;
    const yGap2 = rPrinciples && rMethod ? Math.round((rPrinciples.bottom + rMethod.top) / 2) : 1100;
    const yGap3 = rMethod && rCarousel ? Math.round((rMethod.bottom + rCarousel.top) / 2) : 1650;
    const yGap4 = rCarousel && rCtaBox ? Math.round((rCarousel.bottom + rCtaBox.top) / 2) : 2150;
    const endY = rCtaBtn ? rCtaBtn.top : (rCtaBox ? rCtaBox.top + 16 : H - 45);

    points = [
      { x: midX, y: topY },
      { x: gl, y: topY },
      { x: gl, y: rManifesto ? rManifesto.centerY : 250 },
      { x: gl, y: yGap1 },
      { x: gl + 12, y: yGap1 + 8 },
      { x: gl + 12, y: rPrinciples ? rPrinciples.centerY : 850 },
      { x: gl + 12, y: yGap2 },
      { x: gl, y: yGap2 + 8 },
      { x: gl, y: rMethod ? rMethod.centerY : 1400 },
      { x: gl, y: yGap3 },
      { x: gl + 12, y: yGap3 + 8 },
      { x: gl + 12, y: rCarousel ? rCarousel.centerY : 1900 },
      { x: gl + 12, y: yGap4 },
      { x: rCtaBtn ? rCtaBtn.centerX : midX, y: yGap4 },
      { x: rCtaBtn ? rCtaBtn.centerX : midX, y: endY }
    ];
  }

  const pathData = buildRoundedPathString(points, isDesktop ? 80 : 40);
  basePathEl.setAttribute('d', pathData);
  activePathEl.setAttribute('d', pathData);

  try {
    totalPathLength = basePathEl.getTotalLength() || 3000;
  } catch (e) {
    totalPathLength = 3000;
  }

  // Precompute 1500 continuous lookup points
  precomputedPoints = precomputeTrajectory(basePathEl, totalPathLength);

  // Setup active path dasharray for smooth stroke draw
  activePathEl.style.strokeDasharray = `${totalPathLength} ${totalPathLength}`;
  activePathEl.style.strokeDashoffset = `${totalPathLength}`;

  if (flightScrollTrigger) {
    flightScrollTrigger.kill();
  }

  // GSAP quickSetters for lightning-fast 60/120fps mutations without layout recalculation
  const setX = gsap.quickSetter(nodeEl, 'x', 'px');
  const setY = gsap.quickSetter(nodeEl, 'y', 'px');
  const setRotation = gsap.quickSetter(nodeEl, 'rotation', 'deg');
  const setOpacity = gsap.quickSetter(nodeEl, 'opacity');
  const setScale = gsap.quickSetter(nodeEl, 'scale');

  gsap.set(nodeEl, {
    xPercent: -50,
    yPercent: -50,
    force3D: true,
    transformOrigin: '50% 50%'
  });

  const firstPt = precomputedPoints[0] || { x: 0, y: 0, angle: 0 };
  setX(firstPt.x);
  setY(firstPt.y);
  setRotation(firstPt.angle);
  setOpacity(1);
  setScale(1);

  // Ultra-smooth Continuous Subpixel Interpolation Scrub
  flightScrollTrigger = ScrollTrigger.create({
    trigger: journeyEl,
    start: 'top 30%',
    end: 'bottom 90%',
    scrub: 0.6,
    onUpdate: (self) => {
      const p = Math.max(0, Math.min(1, self.progress));
      const rawIdx = p * SAMPLE_COUNT;
      const i0 = Math.floor(rawIdx);
      const i1 = Math.min(SAMPLE_COUNT, i0 + 1);
      const f = rawIdx - i0;

      const p0 = precomputedPoints[i0];
      const p1 = precomputedPoints[i1];
      if (!p0) return;

      let currentX = p0.x;
      let currentY = p0.y;
      let currentAngle = p0.angle;

      if (p1) {
        currentX = p0.x + (p1.x - p0.x) * f;
        currentY = p0.y + (p1.y - p0.y) * f;

        let dAngle = p1.angle - p0.angle;
        while (dAngle > 180) dAngle -= 360;
        while (dAngle < -180) dAngle += 360;
        currentAngle = p0.angle + dAngle * f;
      }

      let opacity = 1;
      let scale = 1;
      if (p > 0.88) {
        const fadeProgress = (p - 0.88) / 0.1;
        opacity = Math.max(0, 1 - fadeProgress);
        scale = Math.max(0, 1 - fadeProgress);
      }

      setX(currentX);
      setY(currentY);
      setRotation(currentAngle);
      setOpacity(opacity);
      setScale(scale);

      // Active stroke draw synchronization
      activePathEl.style.strokeDashoffset = `${totalPathLength * (1 - p)}`;
    }
  });
}

onMounted(async () => {
  await nextTick();
  if (!import.meta.client) return;

  let hasPlayedEntrance = false;
  const playEntranceAnimation = () => {
    if (hasPlayedEntrance || !import.meta.client) return;
    hasPlayedEntrance = true;

    // 1. Hero Image Entrance (Scale-In)
    if (heroImageRef.value) {
      gsap.fromTo(
        heroImageRef.value,
        { scale: 1.06, opacity: 0.9 },
        { scale: 1.0, opacity: 1.0, duration: 1.8, ease: 'power2.out' }
      );
    }

    // 2. Title Lines Smooth Reveal (Hardware Accelerated)
    if (titleBlockRef.value) {
      const lines = titleBlockRef.value.querySelectorAll('.about-hero__title-line');
      gsap.to(lines, {
        y: 0,
        opacity: 1,
        duration: 1.3,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.08
      });
    }
  };

  ctx = gsap.context(() => {
    // Check if site is already unveiled or listen for event
    if (isSiteLoaded.value) {
      playEntranceAnimation();
    } else {
      const handleUnveil = () => {
        playEntranceAnimation();
        window.removeEventListener('site-unveiled', handleUnveil);
      };
      window.addEventListener('site-unveiled', handleUnveil);

      setTimeout(() => {
        if (!hasPlayedEntrance) {
          playEntranceAnimation();
        }
      }, 1200);
    }

    // 3. Hero Image Parallax on Scroll (Native hardware-accelerated ScrollTrigger on wrapper)
    if (heroImageWrapRef.value && heroSectionRef.value) {
      gsap.to(heroImageWrapRef.value, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSectionRef.value,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.0
        }
      });
    }

    // 3. Manifesto Workshop Image Parallax & Settle Reveal
    const workshopInner = document.querySelector('.about-manifesto__workshop-inner');
    const workshopImg = document.querySelector('.about-manifesto__workshop-img');
    if (workshopInner && workshopImg) {
      gsap.fromTo(
        workshopInner,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: workshopInner,
            start: 'top 88%'
          }
        }
      );

      gsap.fromTo(
        workshopImg,
        { yPercent: -12, scale: 1.12 },
        {
          yPercent: 12,
          scale: 1.0,
          ease: 'none',
          scrollTrigger: {
            trigger: workshopInner,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.0
          }
        }
      );
    }

    // 4. Manifesto Heading Split Reveal
    if (manifestoHeadingRef.value) {
      const headingLines = splitTextIntoLines(manifestoHeadingRef.value);
      gsap.fromTo(
        headingLines,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: manifestoHeadingRef.value,
            start: 'top 80%'
          }
        }
      );
    }

    // 5. Pillars Cards Stagger Reveal
    if (pillarsGridRef.value) {
      const cards = pillarsGridRef.value.querySelectorAll('.about-pillar-card');
      gsap.fromTo(
        cards,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pillarsGridRef.value,
            start: 'top 80%'
          }
        }
      );
    }

    // 6. Atelier Method Image Parallax
    const methodMediaInner = document.querySelector('.about-method__media-inner');
    const methodImg = document.querySelector('.about-method__image');
    if (methodMediaInner && methodImg) {
      gsap.fromTo(
        methodMediaInner,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: methodMediaInner,
            start: 'top 85%'
          }
        }
      );

      gsap.fromTo(
        methodImg,
        { yPercent: -10, scale: 1.1 },
        {
          yPercent: 10,
          scale: 1.0,
          ease: 'none',
          scrollTrigger: {
            trigger: methodMediaInner,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.0
          }
        }
      );
    }

    // 7. Timeline Carousel Box Reveal & Image Parallax
    const timelineBox = document.querySelector('.about-timeline__carousel-box');
    const timelineImg = document.querySelector('.about-timeline__slide-img');
    if (timelineBox && timelineImg) {
      gsap.fromTo(
        timelineBox,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineBox,
            start: 'top 85%'
          }
        }
      );

      gsap.fromTo(
        timelineImg,
        { yPercent: -8, scale: 1.08 },
        {
          yPercent: 8,
          scale: 1.0,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineBox,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.0
          }
        }
      );
    }
  });

  // Calculate flight path cleanly once fonts/layout stabilize
  setTimeout(() => {
    buildFlightPath();
  }, 120);

  // Debounced resize listener (zero execution during active scroll)
  const onResize = () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      buildFlightPath();
      ScrollTrigger.refresh();
    }, 200);
  };
  window.addEventListener('resize', onResize, { passive: true });
});

onUnmounted(() => {
  if (flightScrollTrigger) {
    flightScrollTrigger.kill();
    flightScrollTrigger = null;
  }
  if (resizeTimer) {
    clearTimeout(resizeTimer);
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

.about-page {
  position: relative;
  width: 100%;
  background-color: $color-bg-primary;
  color: $color-text-primary;
  overflow: hidden;
}

// 1. HERO SECTION (100vh Full Screen Architectural Canvas Background)
.about-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
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
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }

  &__image {
    width: 100%;
    height: 120%;
    position: absolute;
    top: -10%;
    left: 0;
    object-fit: cover;
    object-position: center 36%;
    will-change: transform, opacity;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    display: block;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(12, 13, 14, 0.42) 0%,
      rgba(12, 13, 14, 0.1) 30%,
      rgba(12, 13, 14, 0.25) 55%,
      rgba(12, 13, 14, 0.8) 100%
    );
  }

  &__title-block {
    position: absolute;
    bottom: clamp(36px, 6.5vh, 72px);
    left: 0;
    width: 100%;
    z-index: 10;
    color: #ffffff;
    pointer-events: none;
    transform: translate3d(0, 0, 0);
  }

  &__title {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    max-width: 1300px;
  }

  &__line-wrap {
    display: block;
    overflow: hidden;
    line-height: 0.95;
    padding-bottom: 0.15em;
  }

  &__title-line {
    display: block;
    font-family: $font-serif;
    font-size: clamp(2.4rem, 5.8vw, 5.8rem);
    font-weight: 400;
    line-height: 0.95;
    letter-spacing: -0.025em;
    color: #ffffff;
    text-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    will-change: transform, opacity;
    transform: translate3d(0, 110%, 0);
    opacity: 0;
    backface-visibility: hidden;

    @include mobile {
      font-size: clamp(1.9rem, 8.5vw, 2.8rem);
      line-height: 1.05;
    }
  }
}

// 2. JOURNEY WRAPPER & HIGH PERFORMANCE FLIGHT PATH
.about-journey {
  position: relative;
  margin-top: clamp(60px, 10vh, 120px);

  &__content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: clamp(80px, 14vh, 180px);
  }
}

.about-flight-path-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
  overflow: visible;
  will-change: transform;
}

.about-flight-svg {
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  pointer-events: none;
}

.about-flight-node {
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  z-index: 25;
  pointer-events: none;
  will-change: transform, opacity;
  transform: translate3d(0, 0, 0);

  &-icon {
    width: 100%;
    height: 100%;
    display: block;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
  }
}

// MANIFESTO
.about-manifesto {
  &__workshop-wrap {
    max-width: 900px;
    margin: 0 auto clamp(40px, 6vh, 70px);
  }

  &__workshop-inner {
    position: relative;
    width: 100%;
    height: clamp(280px, 42vh, 460px);
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid $color-border-light;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.05);
    background-color: $color-bg-alt;
  }

  &__workshop-img {
    width: 100%;
    height: 125%;
    position: absolute;
    top: -12.5%;
    left: 0;
    object-fit: cover;
    will-change: transform;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: clamp(40px, 6vw, 100px);
    align-items: start;
    max-width: 1100px;
    margin: 0 auto;

    @include tablet {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__col-left {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  &__heading {
    font-family: $font-serif;
    font-size: clamp(1.85rem, 3.2vw, 3.25rem);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: $color-text-primary;
    margin: 0;
  }

  &__col-right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 0.5rem;
  }

  &__body {
    font-family: $font-sans;
    font-size: clamp(0.95rem, 1.15vw, 1.1rem);
    font-weight: 300;
    line-height: 1.75;
    color: $color-text-primary;
    margin: 0;

    &--secondary {
      color: $color-text-secondary;
    }
  }
}

// PILLARS
.about-pillars {
  max-width: 1100px;
  margin: 0 auto;

  &__header {
    margin-bottom: clamp(32px, 5vh, 60px);
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(2rem, 3.5vw, 3.5rem);
    font-weight: 400;
    line-height: 1.1;
    margin: 0;
    color: $color-text-primary;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(16px, 2vw, 28px);

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
      grid-template-columns: 1fr;
    }
  }
}

.about-pillar-card {
  background: #ffffff;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: clamp(24px, 2.5vw, 36px);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s $ease-editorial, box-shadow 0.3s $ease-editorial, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(17, 17, 17, 0.28);
  }

  &__icon-wrap {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: $color-bg-alt;
    margin-bottom: 1.75rem;
  }

  &__icon {
    width: 24px;
    height: 24px;
    color: $color-text-primary;
  }

  &__name {
    font-family: $font-sans;
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: $color-text-primary;
    margin: 0 0 0.75rem 0;
  }

  &__desc {
    font-family: $font-sans;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.65;
    color: $color-text-secondary;
    margin: 0;
  }
}

// ATELIER METHOD
.about-method {
  background-color: #ffffff;
  color: $color-text-primary;
  border: 1px solid $color-border-light;
  border-radius: 4px;
  padding: clamp(36px, 6vw, 72px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: clamp(40px, 6vw, 90px);
    align-items: center;

    @include tablet {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__media-inner {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 2px;
    overflow: hidden;
    border: 1px solid $color-border-light;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
    background-color: $color-bg-alt;
  }

  &__image {
    width: 100%;
    height: 125%;
    position: absolute;
    top: -12.5%;
    left: 0;
    object-fit: cover;
    will-change: transform;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(2rem, 3.8vw, 3.75rem);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0;
    color: $color-text-primary;
  }

  &__paragraph {
    font-family: $font-sans;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.7;
    color: $color-text-primary;
    margin: 0;

    &--dim {
      color: $color-text-secondary;
    }
  }

  &__metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding-top: 1.5rem;
    border-top: 1px solid $color-border-light;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  &__metric-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__metric-num {
    font-family: $font-mono;
    font-size: 1.35rem;
    font-weight: 700;
    color: $color-text-primary;
  }

  &__metric-lbl {
    font-family: $font-sans;
    font-size: 0.75rem;
    color: $color-text-secondary;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
}

// TIMELINE
.about-timeline {
  max-width: 1100px;
  margin: 0 auto;

  &__header {
    margin-bottom: clamp(32px, 5vh, 60px);
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(2rem, 3.5vw, 3.5rem);
    font-weight: 400;
    line-height: 1.1;
    margin: 0;
    color: $color-text-primary;
  }

  &__carousel-box {
    background: #ffffff;
    border: 1px solid $color-border-light;
    border-radius: 4px;
    overflow: hidden;
    padding: clamp(24px, 3.5vw, 48px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
  }

  &__carousel-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: clamp(32px, 5vw, 70px);
    align-items: center;

    @include tablet {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  &__slide-media {
    width: 100%;
  }

  &__slide-img-box {
    position: relative;
    width: 100%;
    height: clamp(260px, 35vh, 380px);
    border-radius: 2px;
    overflow: hidden;
    background-color: $color-bg-alt;
  }

  &__slide-img {
    width: 100%;
    height: 120%;
    position: absolute;
    top: -10%;
    left: 0;
    object-fit: cover;
    will-change: transform, opacity;
  }

  &__slide-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 1.25rem;
  }

  &__slide-top {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__slide-year {
    font-family: $font-mono;
    font-size: 1.25rem;
    font-weight: 700;
    color: $color-accent;
  }

  &__slide-heading {
    font-family: $font-serif;
    font-size: clamp(1.6rem, 2.5vw, 2.5rem);
    font-weight: 400;
    line-height: 1.15;
    margin: 0;
    color: $color-text-primary;
  }

  &__slide-desc {
    font-family: $font-sans;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.7;
    color: $color-text-secondary;
    margin: 0;
  }

  &__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.5rem;
    border-top: 1px solid $color-border-light;
  }

  &__dots {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(17, 17, 17, 0.2);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: transform 0.25s ease, background-color 0.25s ease;

    &--active {
      background-color: $color-text-primary;
      transform: scale(1.4);
    }
  }

  &__nav-btns {
    display: flex;
    gap: 10px;
  }

  &__nav-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid $color-border-light;
    background: transparent;
    color: $color-text-primary;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
      background-color: $color-text-primary;
      color: #ffffff;
      border-color: $color-text-primary;
    }
  }
}

// CTA BANNER
.about-cta {
  padding-bottom: clamp(60px, 10vh, 120px);

  &__box {
    background-color: #ffffff;
    color: $color-text-primary;
    border: 1px solid $color-border-light;
    border-radius: 4px;
    padding: clamp(36px, 6vw, 72px);
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);

    @include tablet-up {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__content {
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__heading {
    font-family: $font-serif;
    font-size: clamp(1.85rem, 3.2vw, 3rem);
    font-weight: 400;
    line-height: 1.1;
    margin: 0;
    color: $color-text-primary;
  }

  &__desc {
    font-family: $font-sans;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.6;
    color: $color-text-secondary;
    margin: 0;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-shrink: 0;

    .btn-minimal {
      background-color: $color-text-primary;
      color: #ffffff;
      border-color: $color-text-primary;

      &:hover {
        background-color: transparent;
        color: $color-text-primary;
      }
    }
  }

  &__wa-link {
    font-family: $font-mono;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    color: $color-text-primary;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
