<template>
  <section
    ref="sectionEl"
    class="vision-section"
    :class="{ 'is--dark': isDark }"
    aria-label="Refined & Bold Essential"
  >
    <!-- Visual Stage pinned by GSAP ScrollTrigger for full duration -->
    <div ref="stageEl" class="vision-stage">
      
      <!-- Central Typographic Statements (Exact Kononenko Hierarchy) -->
      <div class="vision-titles">
        <!-- Title 1: Refined & Bold / Essential (Light Theme State) -->
        <h2 ref="title1El" class="vision-title vision-title--primary lha">
          <span class="vision-title__mask">
            <span class="vision-title__line ln line-1-1">Refined &amp; Bold</span>
          </span>
          <span class="vision-title__mask">
            <span class="vision-title__line ln line-1-2">Essential</span>
          </span>
        </h2>

        <!-- Title 2: Simplicity & Clarity / of Approach (Dark Theme State) -->
        <h2 ref="title2El" class="vision-title vision-title--secondary btb">
          <span class="vision-title__mask">
            <span class="vision-title__line ln line-2-1">Simplicity &amp; Clarity</span>
          </span>
          <span class="vision-title__mask">
            <span class="vision-title__line ln line-2-2">of Approach</span>
          </span>
        </h2>
      </div>

      <!-- Radial Spoke Physics System (Exact 1-to-1 Kononenko Scroll Velocity Engine) -->
      <div
        ref="boxEl"
        class="vision-radial-box"
      >
        <!-- Masked Vector Radial Physics SVG (913x913 ViewBox) -->
        <svg
          viewBox="0 0 913 913"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="vision-svg"
          aria-hidden="true"
        >
          <defs>
            <!-- Smooth radial gradient mask: eliminates spoke lines at center to keep typography clear -->
            <radialGradient
              id="vision-fade-gradient"
              cx="456.5"
              cy="456.5"
              r="456.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="white" stop-opacity="0" />
              <stop offset="0.16" stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" stop-opacity="1" />
            </radialGradient>
            
            <mask
              id="vision-fade"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="913"
              height="913"
            >
              <rect
                x="0"
                y="0"
                width="913"
                height="913"
                fill="url(#vision-fade-gradient)"
              />
            </mask>
          </defs>

          <!-- 8 Physics-driven Spoke Lines with cubic bending wave equation -->
          <g
            ref="linesGroupEl"
            class="vision-lines-group"
            mask="url(#vision-fade)"
            opacity="0.5"
          >
            <path
              v-for="i in 8"
              :key="i"
              class="vision-spoke-path"
              stroke="currentColor"
              stroke-width="0.941598"
              fill="none"
              d=""
            />
          </g>
        </svg>

        <!-- 8 Radial Spoke Numbers (01..08) -->
        <div ref="labelsEl" class="vision-labels" aria-hidden="true">
          <span
            v-for="i in 8"
            :key="i"
            class="vision-label-num"
          >
            0{{ i }}
          </span>
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

// DOM References
const sectionEl = ref<HTMLElement | null>(null);
const stageEl = ref<HTMLElement | null>(null);
const title1El = ref<HTMLElement | null>(null);
const title2El = ref<HTMLElement | null>(null);
const boxEl = ref<HTMLElement | null>(null);
const labelsEl = ref<HTMLElement | null>(null);
const linesGroupEl = ref<SVGGElement | null>(null);

// State
const isDark = ref(false);

// =========================================================================
// EXACT CONSTANTS & PHYSICS PARAMETERS FROM KONONENKOGROUP.COM
// =========================================================================
const NUM_SPOKES = 8;
const NUM_SEGMENTS = 16;
const VIEWBOX_SIZE = 913;
const HALF_SIZE = VIEWBOX_SIZE / 2; // 456.5
const VELOCITY_DIVISOR = 6000;
const MAX_VELOCITY_BEND = 0.22;
const VELOCITY_SMOOTHING = 0.18;
const TEXT_ROTATION_SMOOTHING = 0.28;
const ROTATION_SMOOTHING = 0.12;

// Base distribution angles matching Kononenko 01..08 distribution:
const INITIAL_OFFSET = Math.PI * 0.18;
const baseAngles = Array.from(
  { length: NUM_SPOKES },
  (_, i) => (2 - i) * (Math.PI / 4) + INITIAL_OFFSET
);

// Precomputed cubic wave curve factor lookup table: sin(t^3 * PI)
const curveLut = new Float32Array(NUM_SEGMENTS + 1);
for (let s = 0; s <= NUM_SEGMENTS; s++) {
  const t = s / NUM_SEGMENTS;
  curveLut[s] = Math.sin(t * t * t * Math.PI);
}

let gsapContext: gsap.Context | null = null;
let tickerCallback: (() => void) | null = null;

onMounted(() => {
  nextTick(() => {
    if (!sectionEl.value || !boxEl.value || !stageEl.value) return;

    // Direct path references
    let spokePathElements: SVGPathElement[] = [];
    if (linesGroupEl.value) {
      spokePathElements = Array.from(linesGroupEl.value.querySelectorAll('path.vision-spoke-path'));
    }

    // High-performance quickSetters for labels (01..08)
    const labelSettersX: ((val: number) => void)[] = [];
    const labelSettersY: ((val: number) => void)[] = [];

    if (labelsEl.value) {
      const labelSpans = Array.from(labelsEl.value.children) as HTMLElement[];
      for (let i = 0; i < NUM_SPOKES; i++) {
        const el = labelSpans[i];
        if (el) {
          gsap.set(el, { xPercent: -50, yPercent: -50 });
          labelSettersX[i] = gsap.quickSetter(el, 'x', 'px') as (val: number) => void;
          labelSettersY[i] = gsap.quickSetter(el, 'y', 'px') as (val: number) => void;
        }
      }
    }

    // Radius calculation for labels (1.06x of half width)
    let labelRadius = 0;
    const updateDimensions = () => {
      if (!boxEl.value) return;
      labelRadius = (boxEl.value.offsetWidth / 2) * 1.06;
    };
    updateDimensions();

    // Physics dynamic tracking state
    const angleState = { value: 0 };
    const textAngleState = { value: 0 };
    const bendState = { value: 0 };

    let targetScrollAngle = 0;
    let targetVelocityBend = 0;
    let isScrollActive = false;

    let approachProgress = 0;
    let pinnedProgress = 0;

    let lastRenderedAngle = Number.NaN;
    let lastRenderedTextAngle = Number.NaN;
    let lastRenderedBend = Number.NaN;

    // Exact Mathematical Spoke Curve Equation from Kononenko:
    // P(t) = C + R*cos(theta)*u + normal*sin(u^3 * PI)*bend*R
    const generateSpokePath = (index: number): string => {
      const radius = HALF_SIZE;
      const currentAngle = baseAngles[index] + angleState.value;
      const cosA = Math.cos(currentAngle);
      const sinA = Math.sin(currentAngle);
      const normalX = -sinA;
      const normalY = cosA;
      const bend = bendState.value;

      const pathSegments = [`M${HALF_SIZE},${HALF_SIZE}`];
      for (let seg = 1; seg <= NUM_SEGMENTS; seg++) {
        const u = seg / NUM_SEGMENTS;
        const curveFactor = curveLut[seg];
        const alongSpoke = u * radius;
        const perpendicularDisp = curveFactor * bend * radius;

        const xOffset = cosA * alongSpoke + normalX * perpendicularDisp;
        const yOffset = sinA * alongSpoke + normalY * perpendicularDisp;

        pathSegments.push(` L${Math.round((HALF_SIZE + xOffset) * 100) / 100},${Math.round((HALF_SIZE - yOffset) * 100) / 100}`);
      }
      return pathSegments.join('');
    };

    const renderSpokes = () => {
      for (let i = 0; i < NUM_SPOKES; i++) {
        const pathEl = spokePathElements[i];
        if (pathEl) {
          pathEl.setAttribute('d', generateSpokePath(i));
        }
      }
    };

    const renderLabels = () => {
      if (!labelRadius || !labelSettersX.length) return;
      for (let i = 0; i < NUM_SPOKES; i++) {
        const setterX = labelSettersX[i];
        const setterY = labelSettersY[i];
        if (!setterX || !setterY) continue;

        const currentTextAngle = baseAngles[i] + textAngleState.value;
        setterX(Math.cos(currentTextAngle) * labelRadius);
        setterY(-Math.sin(currentTextAngle) * labelRadius);
      }
    };

    // GSAP ScrollTrigger Context
    gsapContext = gsap.context(() => {
      const lines1 = title1El.value?.querySelectorAll('.vision-title__line');
      const lines2 = title2El.value?.querySelectorAll('.vision-title__line');

      gsap.set(stageEl.value, {
        backgroundColor: '#FFFFFF',
        color: '#000000'
      });

      if (lines1) {
        gsap.set(lines1, { yPercent: 0, opacity: 1 });
      }
      if (lines2) {
        gsap.set(lines2, { yPercent: 110, opacity: 0 });
      }

      // 1. Approach ScrollTrigger: Spins smoothly the moment section begins appearing into the bottom of the viewport
      const approachTrigger = ScrollTrigger.create({
        trigger: sectionEl.value,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        onUpdate: (self) => {
          if (self.isActive && Number.isFinite(self.progress)) {
            approachProgress = self.progress;
          }
        }
      });

      // 2. Master Pinned Timeline: PINS THE STAGE WHEN IT REACHES VIEWPORT TOP
      let masterScrollTrigger: ScrollTrigger | null = null;

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl.value,
          start: 'top top',
          end: '+=190%', // Reduced pin scroll distance so passing to the next section feels natural and effortless
          pin: stageEl.value,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onToggle: (self) => {
            isScrollActive = self.isActive || approachTrigger.isActive;
          },
          onUpdate: (self) => {
            if (Number.isFinite(self.progress)) {
              pinnedProgress = self.progress;
              isDark.value = self.progress >= 0.40;
            }
          }
        }
      });

      masterScrollTrigger = masterTl.scrollTrigger;
      isScrollActive = (masterScrollTrigger && masterScrollTrigger.isActive) || approachTrigger.isActive;

      // Phase 1 (0.00 -> 0.15): Steady White Hold (Refined & Bold Essential)
      masterTl.to({}, { duration: 0.15 });

      // Phase 2 (0.15 -> 0.85): Smooth, slow, cinematic morph & typographic transition
      masterTl.to(stageEl.value, {
        backgroundColor: '#000000',
        color: '#FFFFFF',
        duration: 0.65,
        ease: 'power1.inOut'
      }, 0.15);

      if (lines1) {
        masterTl.to(lines1, {
          yPercent: -105,
          opacity: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: 'power2.inOut'
        }, 0.18);
      }

      if (lines2) {
        masterTl.to(lines2, {
          yPercent: 0,
          opacity: 1,
          duration: 0.50,
          stagger: 0.06,
          ease: 'power2.out'
        }, 0.35);
      }

      // Phase 3 (0.85 -> 1.00): Steady Dark Hold (Simplicity & Clarity of Approach)
      masterTl.to({}, { duration: 0.15 });

      // Precision 120fps Ticker Loop with Spring-Damper Physics
      tickerCallback = () => {
        // Compute velocity from active scroll trigger
        let currentVelocity = 0;
        if (masterScrollTrigger && masterScrollTrigger.isActive) {
          currentVelocity = masterScrollTrigger.getVelocity();
        } else if (approachTrigger && approachTrigger.isActive) {
          currentVelocity = approachTrigger.getVelocity();
        }

        if (approachTrigger.isActive || (masterScrollTrigger && masterScrollTrigger.isActive)) {
          isScrollActive = true;
          targetVelocityBend = -(Number.isFinite(currentVelocity) ? Math.max(-1, Math.min(1, currentVelocity / VELOCITY_DIVISOR)) : 0) * MAX_VELOCITY_BEND;
        } else {
          isScrollActive = false;
          targetVelocityBend = 0;
        }

        // Target angle calculation (interchanged scroll direction with reduced, elegant spin amount):
        // Before pinning (approach): rotates gracefully from 0 to +0.18 PI
        // While pinned: rotates from +0.18 PI to +0.83 PI (~120 degrees total)
        if (masterScrollTrigger && masterScrollTrigger.isActive) {
          targetScrollAngle = (0.18 + pinnedProgress * 0.65) * Math.PI;
        } else if (approachTrigger && approachTrigger.isActive) {
          targetScrollAngle = (approachProgress * 0.18) * Math.PI;
        }

        // Pure scroll-driven bend damping
        bendState.value += (targetVelocityBend - bendState.value) * VELOCITY_SMOOTHING;
        if (targetVelocityBend === 0 && Math.abs(bendState.value) < 1e-4) {
          bendState.value = 0;
        }

        // Smooth Rotational Lag
        const deltaRatio = gsap.ticker.deltaRatio();
        const rotSmoothing = Number.isFinite(deltaRatio) ? 1 - Math.pow(1 - ROTATION_SMOOTHING, deltaRatio) : ROTATION_SMOOTHING;
        
        angleState.value += (targetScrollAngle - angleState.value) * rotSmoothing;
        if (Math.abs(targetScrollAngle - angleState.value) < 1e-5) {
          angleState.value = targetScrollAngle;
        }

        // Spoke numbers text follow lag
        textAngleState.value += (angleState.value - textAngleState.value) * TEXT_ROTATION_SMOOTHING;
        if (Math.abs(angleState.value - textAngleState.value) < 1e-5) {
          textAngleState.value = angleState.value;
        }

        // Frame update check
        const needsUpdate = (
          angleState.value !== lastRenderedAngle ||
          textAngleState.value !== lastRenderedTextAngle ||
          bendState.value !== lastRenderedBend
        );

        if (needsUpdate) {
          lastRenderedAngle = angleState.value;
          lastRenderedTextAngle = textAngleState.value;
          lastRenderedBend = bendState.value;
          renderSpokes();
          renderLabels();
        }
      };

      // Initial render & attach to ticker
      tickerCallback();
      gsap.ticker.add(tickerCallback);
      ScrollTrigger.addEventListener('refresh', tickerCallback);
      ScrollTrigger.addEventListener('refreshInit', updateDimensions);

    }, sectionEl.value);

    window.addEventListener('resize', updateDimensions, { passive: true });
  });
});

onUnmounted(() => {
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback);
    ScrollTrigger.removeEventListener('refresh', tickerCallback);
    tickerCallback = null;
  }
  if (gsapContext) {
    gsapContext.revert();
    gsapContext = null;
  }
});
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables' as *;

.vision-section {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  // Visual Viewport Stage pinned by GSAP ScrollTrigger
  .vision-stage {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #FFFFFF;
    color: #000000;
    will-change: background-color, color;

    @media (max-width: 767.98px) {
      height: 100dvh;
    }
  }

  // Radial spokes & labels container (80vh x 80vh, exact Kononenko .ctw)
  .vision-radial-box {
    height: 80vh;
    width: 80vh;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    z-index: 1;

    @media (max-width: 767.98px) {
      height: 270px;
      width: 270px;
    }
  }

  // SVG Layer (Exact Kononenko .ctw svg)
  .vision-svg {
    width: 100%;
    height: 100%;
    display: block;

    .vision-lines-group {
      opacity: 0.5;
      transition-duration: 0.3s;
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.17, 0.84, 0.44, 1);
    }

    .vision-spoke-path {
      vector-effect: non-scaling-stroke;
    }
  }

  // Spoke Number Labels (Exact Kononenko .ctw .lhr)
  .vision-labels {
    position: absolute;
    inset: 0;
    font-size: 12px;

    @media (max-width: 767.98px) {
      font-size: 9px;
    }

    .vision-label-num {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: $font-sans;
      line-height: 1;
      opacity: 0.85;
      color: currentColor;
      user-select: none;
      white-space: nowrap;
    }
  }

  // Center Editorial Typography (Exact Kononenko .xhv .pmh .eta)
  .vision-titles {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 700px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 3;
    pointer-events: none;

    @media (max-width: 767.98px) {
      width: 85%;
      max-width: 320px;
    }
  }

  .vision-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: $font-heading;
    font-weight: $font-weight-regular;
    font-size: clamp(34px, 4.2vw, 68px);
    line-height: 0.875;
    letter-spacing: -0.03em;
    font-synthesis: none;
    user-select: none;
    margin: 0;
    padding: 0;

    @media (max-width: 767.98px) {
      font-size: clamp(26px, 7vw, 36px);
      line-height: 0.92;
    }

    &__mask {
      overflow: hidden;
      display: block;
      padding: 0.05em 0;
      text-align: center;
    }

    &__line {
      display: block;
      white-space: nowrap;
      will-change: transform;
      color: currentColor;
    }
  }
}
</style>
