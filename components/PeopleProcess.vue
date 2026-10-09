<template>
  <section
    ref="sectionRef"
    class="people-process"
    aria-label="People, Process, and Studio Foundation"
  >
    <!-- Pinned Visual Stage (100vw x 100vh) -->
    <div ref="stageRef" class="people-process__stage">

      <!-- ========================================================= -->
      <!-- LAYER 1: Editorial Statement (Upper-Left Quadrant)       -->
      <!-- ========================================================= -->
      <div ref="editorialRef" class="people-process__editorial">
        <div class="people-process__editorial-content">
          <div class="people-process__eyebrow">
            <span>People &amp;</span>
            <span>Process</span>
          </div>
          <div class="people-process__statement-box">
            <h2 class="people-process__statement">
              <span class="statement-mask"><span class="statement-line">A studio shaped by</span></span>
              <span class="statement-mask"><span class="statement-line">clarity, trust, and a</span></span>
              <span class="statement-mask"><span class="statement-line">collective pursuit of</span></span>
              <span class="statement-mask"><span class="statement-line">thoughtful design.</span></span>
            </h2>
          </div>
        </div>
      </div>

      <!-- ========================================================= -->
      <!-- LAYER 2: 12-Image Continuous Morphing Path                -->
      <!-- (Spline Conveyor -> 360° Ring -> Left Crescent)           -->
      <!-- ========================================================= -->
      <div class="people-process__photos-layer">
        <div
          v-for="photo in STUDIO_PHOTOS"
          :key="photo.id"
          class="photo-card"
        >
          <div class="photo-card__inner">
            <img
              :src="photo.src"
              :alt="photo.alt"
              class="photo-card__img"
              loading="eager"
              decoding="async"
            />
            <div class="photo-card__sheen" aria-hidden="true" />
          </div>
        </div>
      </div>

      <!-- ========================================================= -->
      <!-- LAYER 3: 2011 Year of Foundation (Ring Center)           -->
      <!-- ========================================================= -->
      <div ref="foundationRef" class="people-process__foundation">
        <div class="foundation-title-wrap">
          <h2 class="foundation-title">
            <span class="foundation-mask"><span class="foundation-line">2011 Year</span></span>
            <span class="foundation-mask"><span class="foundation-line">of Foundation</span></span>
          </h2>
        </div>      </div>

      <!-- ========================================================= -->
      <!-- LAYER 4: Studio Metrics (Right Side of Half-Circle)      -->
      <!-- ========================================================= -->
      <div ref="statsContainerRef" class="people-process__stats">
        <div
          v-for="stat in STATS_DATA"
          :key="stat.number"
          class="stat-item"
        >
          <div class="stat-item__number">{{ stat.number }}</div>
          <div class="stat-item__label">{{ stat.label }}</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

// Primary DOM references for container boundaries
const sectionRef = ref<HTMLElement | null>(null);
const stageRef = ref<HTMLElement | null>(null);
const editorialRef = ref<HTMLElement | null>(null);
const foundationRef = ref<HTMLElement | null>(null);
const statsContainerRef = ref<HTMLElement | null>(null);

let mm: gsap.MatchMedia | null = null;
let stageObserver: IntersectionObserver | null = null;
let updateDimensionsHandler: (() => void) | null = null;

// =========================================================================
// 12 STUDIO & PROCESS PHOTOS (Exact Portrait Ratio 3:4)
// =========================================================================
const STUDIO_PHOTOS = [
  { id: 1,  src: '/images/studio-01.jpg', alt: 'Architects collaborating in design atelier' },
  { id: 2,  src: '/images/studio-02.jpg', alt: 'Material palettes and stone swatches' },
  { id: 3,  src: '/images/studio-03.jpg', alt: 'Architect portrait in studio discussion' },
  { id: 4,  src: '/images/studio-04.jpg', alt: 'Reviewing architectural physical model' },
  { id: 5,  src: '/images/studio-05.jpg', alt: 'Design team at blackboard gallery' },
  { id: 6,  src: '/images/studio-06.jpg', alt: 'Drafting table and architectural Polaroid' },
  { id: 7,  src: '/images/studio-07.jpg', alt: 'Monolithic concrete facade detail' },
  { id: 8,  src: '/images/studio-08.jpg', alt: 'Tactile joinery and material discipline' },
  { id: 9,  src: '/images/studio-09.jpg', alt: 'Architectural landscape perspective' },
  { id: 10, src: '/images/studio-10.jpg', alt: 'Gestural conceptual charcoal sketch' },
  { id: 11, src: '/images/studio-11.jpg', alt: 'Technical elevation and spatial section' },
  { id: 12, src: '/images/studio-12.jpg', alt: 'Preliminary structural blueprinting' }
];

// =========================================================================
// 4 STUDIO METRICS
// =========================================================================
const STATS_DATA = [
  { number: '15+', label: 'Years of\nexperience' },
  { number: '490+', label: 'Completed\nprojects' },
  { number: '45+', label: 'Professionals\non the team' },
  { number: '40K+', label: 'Total area\ncovered' }
];

// Shortest-distance angular interpolation helper (prevents 360-spin glitch)
const lerpAngle = (a: number, b: number, t: number) => {
  let diff = (b - a) % 360;
  if (diff < -180) diff += 360;
  if (diff > 180) diff -= 360;
  return a + diff * t;
};

onMounted(() => {
  nextTick(() => {
    if (!sectionRef.value || !stageRef.value) return;

    // Cache DOM queries natively once via gsap.utils.selector
    // Eliminates Vue 3 reactive Proxy getter overhead during 60-120 FPS loops
    const q = gsap.utils.selector(stageRef.value);
    const photoCards = q('.photo-card') as HTMLElement[];
    const statItems = q('.stat-item') as HTMLElement[];
    const statementLines = q('.statement-line');
    const foundationLines = q('.foundation-line');
    const foundationDesc = q('.foundation-columns');
    const eyebrow = q('.people-process__eyebrow');

    let width = stageRef.value.clientWidth;
    let height = stageRef.value.clientHeight;
    let isStageVisible = false;

    // Master Morph State (driven smoothly by ScrollTrigger scrub)
    const morphState = {
      conveyorProgress: 0,   // 0 -> 1: Phase 1 bottom sweep
      morphToCircle: 0,      // 0 -> 1: Transition into 360° Ring
      circleRotation: 0,     // Gentle continuous orbital rotation of Ring
      ringOffsetY: 0,        // Vertical pan through foundation core
      morphToCrescent: 0,    // 0 -> 1: Ring breaks into Left Crescent
      crescentScroll: 0,     // Gentle movement along Left Crescent
      photosOpacity: 1,      // Overall cards layer opacity
      statsActiveIndex: 0,   // 0 -> 3: Continuous camera pan index for metrics
      statsOpacity: 0,       // Metrics container opacity
      exitY: 0
    };

    const updateDimensions = () => {
      if (!stageRef.value) return;
      width = window.innerWidth;
      height = window.innerHeight;
      ScrollTrigger.refresh();
    };
    updateDimensionsHandler = updateDimensions;
    window.addEventListener('resize', updateDimensions, { passive: true });

    // IntersectionObserver with 300px inflated margins: pre-calculates matrices before entering viewport
    stageObserver = new IntersectionObserver((entries) => {
      isStageVisible = entries[0].isIntersecting;
    }, { rootMargin: '300px 0px 300px 0px' });
    stageObserver.observe(sectionRef.value);

    // =====================================================================
    // HARDWARE-ACCELERATED RENDER LOOP (Synchronized with GSAP Ticker)
    // =====================================================================
    const renderLoop = () => {
      if (!isStageVisible || width === 0 || height === 0) return;

      const N = photoCards.length;
      const isMobile = width < 768;

      // -------------------------------------------------------------
      // Shape 2: Oversized 360° Orbital Ring (Frames 016 - 036)
      // -------------------------------------------------------------
      const ringRadius = isMobile 
        ? Math.min(width, height) * 0.40 
        : Math.min(width * 0.44, height * 0.52);
      const ringCX = width * 0.50;
      const ringCY = height * 0.50 + morphState.ringOffsetY;
      const ringScale = isMobile ? 0.85 : 0.92;

      // -------------------------------------------------------------
      // Shape 3: Left Half-Circle Crescent Arc (Frames 037 - 065)
      // -------------------------------------------------------------
      const crescCX = isMobile ? width * 0.02 : width * 0.04;
      const crescCY = height * 0.50;
      const crescRadius = isMobile 
        ? Math.min(width, height) * 0.38 
        : Math.min(width * 0.33, height * 0.46);
      const crescentAngleStep = 0.125 * Math.PI;
      const crescScale = isMobile ? 0.88 : 0.95;

      const mu = Math.min(Math.max(morphState.morphToCircle, 0), 1);
      const lambda = Math.min(Math.max(morphState.morphToCrescent, 0), 1);

      // Mutate Foundation Core Vertical Pan natively via 3D translation
      if (foundationRef.value) {
        foundationRef.value.style.transform = `translate3d(-50%, calc(-50% + ${morphState.ringOffsetY.toFixed(1)}px), 0)`;
      }

      // Render each of the 12 photo cards natively
      for (let i = 0; i < N; i++) {
        const card = photoCards[i];
        if (!card) continue;

        // Shape 1: Sweeping Spline Conveyor (Frames 001 - 015)
        const step = 0.28;
        const u = 0.15 + (i * step) - (morphState.conveyorProgress * 1.85);

        const convX = width * (0.02 + 0.76 * u);
        const convY = height * (0.91 - 0.04 * u - 0.34 * u * u);

        const dx = width * 0.76;
        const dy = height * (-0.04 - 0.68 * u);
        const convRot = Math.atan2(dy, dx) * (180 / Math.PI);
        const convScale = isMobile ? 0.92 : 1.0;

        // Opacity culling at conveyor boundaries (strictly 4-5 cards visible)
        let convAlpha = 1;
        if (u < -0.22 || u > 1.34) {
          convAlpha = 0;
        } else if (u < -0.06) {
          convAlpha = Math.max(0, (u - (-0.22)) / 0.16);
        } else if (u > 1.15) {
          convAlpha = Math.max(0, (1.34 - u) / 0.19);
        }

        // Shape 2: Oversized 360° Orbital Ring
        const ringAngle = (i / N) * Math.PI * 2 + morphState.circleRotation - Math.PI / 2;
        const ringX = ringCX + ringRadius * Math.cos(ringAngle);
        const ringY = ringCY + ringRadius * Math.sin(ringAngle);
        const ringRot = (ringAngle * 180 / Math.PI) + 90;

        // Shape 3: Left Half-Circle Crescent
        const halfAngle = (i - 5.5) * crescentAngleStep + morphState.crescentScroll;
        const crescX = crescCX + crescRadius * Math.cos(halfAngle);
        const crescY = crescCY + crescRadius * Math.sin(halfAngle);
        const crescRot = (halfAngle * 180 / Math.PI) + 90;

        // Anti-teleportation initialization
        const effectiveConvX = convAlpha > 0 ? convX : ringX;
        const effectiveConvY = convAlpha > 0 ? convY : ringY;
        const effectiveConvRot = convAlpha > 0 ? convRot : ringRot;
        const effectiveConvScale = convAlpha > 0 ? convScale : ringScale;

        let curX = 0;
        let curY = 0;
        let curRot = 0;
        let curScale = 0;

        // Phase Morphing State Machine with Lerp Interpolation
        if (lambda <= 0.001) {
          curX = (1 - mu) * effectiveConvX + mu * ringX;
          curY = (1 - mu) * effectiveConvY + mu * ringY;
          curRot = lerpAngle(effectiveConvRot, ringRot, mu);
          curScale = (1 - mu) * effectiveConvScale + mu * ringScale;
        } else {
          curX = (1 - lambda) * ringX + lambda * crescX;
          curY = (1 - lambda) * ringY + lambda * crescY + morphState.exitY;
          curRot = lerpAngle(ringRot, crescRot, lambda);
          curScale = (1 - lambda) * ringScale + lambda * crescScale;
        }

        // Alpha fade across shapes
        let finalAlpha = 1;
        if (mu <= 0.001) {
          finalAlpha = convAlpha;
        } else if (mu < 1.0) {
          finalAlpha = (1 - mu) * convAlpha + mu * 1.0;
        } else if (lambda > 0.25) {
          const distFromCenterY = Math.abs(curY - height * 0.50);
          const maxCrescDist = height * 0.46;
          if (distFromCenterY > maxCrescDist) {
            finalAlpha = Math.max(0, 1 - (distFromCenterY - maxCrescDist) / (height * 0.18));
          }
        }

        // Hardware GPU compositing via translate3d
        card.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, 0) translate(-50%, -50%) rotate(${curRot.toFixed(2)}deg) scale(${curScale.toFixed(3)})`;
        card.style.opacity = `${(morphState.photosOpacity * finalAlpha).toFixed(3)}`;
      }

      // -------------------------------------------------------------
      // Studio Metrics Dynamic Y-Panning (Phase 3)
      // Generous vertical spacing + dynamic travel up the screen
      // -------------------------------------------------------------
      if (statItems.length > 0) {
        const itemSpacing = Math.max(height * 0.60, 500);
        for (let sIdx = 0; sIdx < statItems.length; sIdx++) {
          const item = statItems[sIdx];
          if (!item) continue;
          const offset = sIdx - morphState.statsActiveIndex;
          const yPos = offset * itemSpacing;
          const dist = Math.abs(offset);

          let highlight = 0;
          let itemOpacity = 0;

          if (dist < 0.35) {
            highlight = 1.0;
            itemOpacity = 1.0;
          } else if (dist < 0.85) {
            const t = (dist - 0.35) / 0.50;
            highlight = 1 - t;
            itemOpacity = 1.0 - t * 0.82;
          } else if (dist < 1.25) {
            const t = (dist - 0.85) / 0.40;
            highlight = 0;
            itemOpacity = 0.18 * (1 - t);
          } else {
            itemOpacity = 0;
          }

          const scaleVal = 0.94 + 0.06 * highlight;
          item.style.transform = `translate3d(0, ${yPos.toFixed(1)}px, 0) translateY(-50%) scale(${scaleVal.toFixed(3)})`;
          item.style.opacity = `${(itemOpacity * morphState.statsOpacity).toFixed(3)}`;
        }
      }
    };

    // =====================================================================
    // ACCESSIBILITY & MOTION COMPLIANCE (gsap.matchMedia)
    // =====================================================================
    mm = gsap.matchMedia();

    // Standard Experience: High-Performance Kinetic Motion
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Direct GSAP ticker integration (eliminates drift against Lenis)
      gsap.ticker.add(renderLoop);

      // Initial visual states
      gsap.set([editorialRef.value, statementLines, eyebrow], { opacity: 1, y: 0, visibility: 'visible' });
      gsap.set(foundationRef.value, { opacity: 0, visibility: 'hidden' });
      gsap.set(foundationLines, { y: '110%', opacity: 0 });
      gsap.set(foundationDesc, { opacity: 0, y: 22 });
      gsap.set(statsContainerRef.value, { opacity: 0, visibility: 'hidden' });

      const stageH = stageRef.value?.clientHeight || window.innerHeight;

      // Pinned master timeline: 800% virtual scroll track
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top top',
          end: '+=800%',
          pin: stageRef.value,
          pinSpacing: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // ------------------------------------------------------------
      // PHASE 1 (0.00 -> 0.28): STICKY CONTENT + CONVEYOR RING SCROLL
      // Content stays firmly sticky in place (zero upward translation).
      // Photo cards scroll smoothly along the conveyor as user scrolls.
      // ------------------------------------------------------------
      masterTl.to(morphState, {
        conveyorProgress: 1.0,
        duration: 0.28,
        ease: 'none'
      }, 0.00);

      // Clean in-place fade when transitioning to center ring (NO upward movement)
      masterTl.to(editorialRef.value, {
        opacity: 0,
        duration: 0.06,
        ease: 'power2.out'
      }, 0.25);

      masterTl.set(editorialRef.value, { visibility: 'hidden' }, 0.31);

      // ------------------------------------------------------------
      // PHASE 2A (0.26 -> 0.38): SPLINE MORPHS INTO 360° ORBITAL RING
      // ------------------------------------------------------------
      masterTl.to(morphState, {
        morphToCircle: 1,
        circleRotation: Math.PI * 0.12,
        ringOffsetY: stageH * 0.16,
        duration: 0.12,
        ease: 'power2.inOut'
      }, 0.26);

      masterTl.set(foundationRef.value, { visibility: 'visible' }, 0.28);
      masterTl.to(foundationRef.value, { opacity: 1, duration: 0.06 }, 0.29);

      if (foundationLines && foundationLines.length) {
        masterTl.to(foundationLines, {
          y: '0%',
          opacity: 1,
          duration: 0.09,
          stagger: 0.025,
          ease: 'power3.out'
        }, 0.29);
      }

      // ------------------------------------------------------------
      // PHASE 2B (0.38 -> 0.62): SLOW 360° RING ROTATION & VERTICAL PAN
      // ------------------------------------------------------------
      masterTl.to(morphState, {
        circleRotation: Math.PI * 0.48,
        ringOffsetY: -stageH * 0.18,
        duration: 0.24,
        ease: 'none'
      }, 0.38);

      masterTl.to(foundationDesc, { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.42);

      // ------------------------------------------------------------
      // TRANSITION 2 -> 3 (0.62 -> 0.72): RING BREAKS INTO CRESCENT
      // ------------------------------------------------------------
      masterTl.to(foundationRef.value, { opacity: 0, y: -40, duration: 0.06, ease: 'power2.in' }, 0.60);
      masterTl.set(foundationRef.value, { visibility: 'hidden' }, 0.66);

      masterTl.to(morphState, {
        morphToCrescent: 1,
        ringOffsetY: 0,
        duration: 0.10,
        ease: 'power2.inOut'
      }, 0.62);

      // ------------------------------------------------------------
      // PHASE 3 (0.69 -> 1.03): LEFT CRESCENT & CONTINUOUS FLOWING METRICS
      // ------------------------------------------------------------
      masterTl.set(statsContainerRef.value, { visibility: 'visible' }, 0.68);
      masterTl.to(statsContainerRef.value, { opacity: 1, duration: 0.05, ease: 'power2.out' }, 0.69);
      masterTl.to(morphState, { statsOpacity: 1, duration: 0.05 }, 0.69);

      masterTl.to(morphState, {
        crescentScroll: -Math.PI * 0.28,
        duration: 0.34,
        ease: 'none'
      }, 0.69);

      // Continuous vertical camera panning through the 4 studio metrics
      // Elements physically travel up the screen: approaching center, illuminating, and passing by
      masterTl.to(morphState, {
        statsActiveIndex: 3.0,
        duration: 0.34,
        ease: 'none'
      }, 0.69);

      // ------------------------------------------------------------
      // PHASE 4 (1.03 -> 1.09): SMOOTH SECTION EXIT
      // ------------------------------------------------------------
      masterTl.to(statsContainerRef.value, { opacity: 0, y: -40, duration: 0.06, ease: 'power2.in' }, 1.03);
      masterTl.to(morphState, {
        statsOpacity: 0,
        photosOpacity: 0,
        exitY: -60,
        duration: 0.06,
        ease: 'power2.in'
      }, 1.03);

      return () => {
        gsap.ticker.remove(renderLoop);
      };
    });

    // Reduced Motion Fallback: Accessible Opacity Crossfades
    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(photoCards, { display: 'none' });

      const reducedTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top top',
          end: '+=300%',
          pin: stageRef.value,
          scrub: 1
        }
      });

      reducedTl
        .to(editorialRef.value, { opacity: 0, duration: 1 })
        .to(foundationRef.value, { opacity: 1, autoAlpha: 1, duration: 1 })
        .to(foundationRef.value, { opacity: 0, duration: 1 })
        .to(statsContainerRef.value, { opacity: 1, autoAlpha: 1, duration: 1 });
    });
  });
});

onUnmounted(() => {
  if (typeof window !== 'undefined' && updateDimensionsHandler) {
    window.removeEventListener('resize', updateDimensionsHandler);
  }
  if (stageObserver) {
    stageObserver.disconnect();
    stageObserver = null;
  }
  if (mm) {
    mm.revert();
    mm = null;
  }
});
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.people-process {
  position: relative;
  width: 100%;
  background-color: #000000;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &__stage {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    background-color: #000000;
    box-sizing: border-box;
  }

  // Layer 1: Editorial (Strictly Upper-Left Quadrant)
  &__editorial {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: clamp(6.5rem, 13vh, 9rem) clamp(2rem, 4.5vw, 5rem);
    box-sizing: border-box;
    z-index: 5;
    pointer-events: none;
    will-change: opacity;

    @media (max-width: 768px) {
      padding: 5.5rem 1.5rem;
    }
  }

  &__editorial-content {
    position: relative;
    width: 100%;
    max-width: clamp(750px, 62vw, 1140px);
  }

  &__eyebrow {
    position: absolute;
    left: 0;
    top: clamp(6px, 0.45vw, 12px);
    width: clamp(90px, 5.8vw, 115px);
    font-family: $font-heading;
    font-size: clamp(0.85rem, 0.88vw, 1rem);
    line-height: 1.15;
    color: #ffffff;
    opacity: 0.9;
    letter-spacing: -0.02em;
    display: flex;
    flex-direction: column;
    z-index: 2;

    @media (max-width: 768px) {
      position: static;
      width: 100%;
      margin-bottom: 0.75rem;
    }
  }

  &__statement-box {
    width: 100%;
  }

  &__statement {
    font-family: $font-serif;
    font-size: clamp(34px, 4.4vw, 82px);
    font-weight: 400;
    line-height: 0.92;
    letter-spacing: -0.035em;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
  }

  .statement-mask {
    overflow: hidden;
    display: block;
    padding: 0.02em 0;
    text-indent: 0;

    &:first-child {
      text-indent: clamp(100px, 6.8vw, 135px);

      @media (max-width: 768px) {
        text-indent: 0;
      }
    }
  }

  .statement-line {
    display: block;
    will-change: transform, opacity;
  }

  // Layer 2: 12 Photo Cards (3:4 Portrait Ratio)
  &__photos-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
    transform: translateZ(0);
  }

  .photo-card {
    position: absolute;
    top: 0;
    left: 0;
    width: clamp(160px, 11vw, 210px);
    aspect-ratio: 3 / 4;
    border-radius: 3px;
    overflow: hidden;
    will-change: transform, opacity;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.85), 0 4px 16px rgba(0, 0, 0, 0.6);
    background-color: #121212;
    border: 1px solid rgba(255, 255, 255, 0.12);

    @media (max-width: 768px) {
      width: clamp(130px, 32vw, 175px);
    }

    &__inner {
      width: 100%;
      height: 100%;
      position: relative;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      pointer-events: none;
    }

    &__sheen {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.25) 100%);
    }
  }

  // Layer 3: Foundation Year (Centered Inside Orbital Ring)
  &__foundation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 860px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 4;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    will-change: transform, opacity;
  }

  .foundation-title-wrap {
    margin-bottom: clamp(1.2rem, 2.5vh, 2.2rem);
  }

  .foundation-title {
    font-family: $font-heading;
    font-size: clamp(24px, 6.8vw, 110px);
    font-weight: $font-weight-regular;
    line-height: 0.98;
    letter-spacing: -0.04em;
    color: #FFFFFF;
    margin: 0;
    padding: 0;
  }

  .foundation-mask {
    overflow: hidden;
    display: block;
    padding: 0.05em 0;
  }

  .foundation-line {
    display: block;
    will-change: transform, opacity;
  }

  .foundation-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(2rem, 4.5vw, 5rem);
    max-width: 760px;
    margin-top: clamp(1.5rem, 3vh, 3rem);
    will-change: transform, opacity;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
  }

  .foundation-col p {
    font-family: $font-light;
    font-size: clamp(13px, 0.95vw, 16px);
    font-weight: $font-weight-regular;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.70);
    margin: 0;
    text-align: left;

    @media (max-width: 640px) {
      text-align: center;
    }
  }

  // Layer 4: Studio Metrics (Phase 3 Half-Circle Stage)
  &__stats {
    position: absolute;
    top: 50%;
    right: clamp(2.5rem, 6vw, 9rem);
    transform: translateY(-50%);
    width: 50%;
    max-width: 680px;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    pointer-events: none;
    z-index: 4;
    overflow: visible;
    opacity: 0;
    visibility: hidden;
    will-change: opacity, transform;

    @media (max-width: 768px) {
      right: 1.5rem;
      width: 70%;
    }
  }

  .stat-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: clamp(1.2rem, 2.5vh, 2.5rem) 0;
    will-change: transform, opacity;

    &__number {
      font-family: $font-heading;
      font-size: clamp(64px, 8.0vw, 128px);
      font-weight: $font-weight-regular;
      line-height: 0.90;
      letter-spacing: -0.04em;
      color: #FFFFFF;
      margin-bottom: clamp(1.2rem, 2.2vh, 2.2rem);
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.25);
    }

    &__label {
      font-family: $font-serif;
      font-size: clamp(38px, 4.8vw, 80px);
      font-weight: $font-weight-regular;
      font-style: normal;
      line-height: 1.06;
      letter-spacing: -0.03em;
      color: #FFFFFF;
      white-space: pre-line;
    }
  }
}
</style>
