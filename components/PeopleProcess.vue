<template>
  <section
    ref="elRef"
    class="nwv"
    id="about"
    aria-label="People, Process, and Studio Foundation"
  >
    <div class="ctr">
      <!-- ========================================================= -->
      <!-- 1. EDITORIAL / PROCESS (People & Process)                 -->
      <!-- ========================================================= -->
      <div ref="elProcessRef" class="enr">
        <h2 class="fn-b1 amv f-sf">People &amp; Process</h2>
        <h3 class="fn-h3 kca">
          A studio shaped by clarity, trust, and a collective pursuit of thoughtful design.
        </h3>
      </div>

      <!-- ========================================================= -->
      <!-- 2. FOUNDATION YEAR & 360° ORBITAL RING                    -->
      <!-- ========================================================= -->
      <div ref="elYearRef" class="uwg">
        <div ref="elYearRingRef" class="vrc">
          <!-- 17-Image Morphing Ribbon Layer -->
          <div
            ref="peopleImgsRef"
            class="vnj"
            :style="ringStyle"
          >
            <div
              v-for="(photo, index) in PEOPLE_IMAGES"
              :key="photo.id"
              class="mimg hyy elr"
              role="img"
              :aria-label="`People ${index + 1}`"
              :style="{ '--angle': getPhotoAngle(index) }"
            >
              <img
                :src="photo.src"
                :alt="photo.alt"
                class="elr-img"
                draggable="false"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
          <h2 class="fn-h2 kca f-mn">
            2011 Year<br>of Foundation
          </h2>
        </div>
        <div class="ciz">
          <p class="iek tpv">
            Design approach grounded in passive strategies, material logic, and environmental responsibility.
          </p>
          <p class="iek nyp">
            Lifecycle-focused architecture with efficient systems, sustainable choices, and long-term value.
          </p>
        </div>
      </div>

      <!-- ========================================================= -->
      <!-- 3. STUDIO METRICS & LEFT CRESCENT ARC                     -->
      <!-- ========================================================= -->
      <div ref="elRecordRef" class="ima">
        <div class="ppi">
          <div
            v-for="record in COMPANY_RECORDS"
            :key="record.number"
            class="ohb"
          >
            <h3 class="fn-h2 pqf f-mn">{{ record.number }}</h3>
            <h3 class="fn-h3 kca">{{ record.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// DOM References matching reference naming
const elRef = ref<HTMLElement | null>(null);
const elProcessRef = ref<HTMLElement | null>(null);
const elYearRef = ref<HTMLElement | null>(null);
const elYearRingRef = ref<HTMLElement | null>(null);
const elRecordRef = ref<HTMLElement | null>(null);
const peopleImgsRef = ref<HTMLElement | null>(null);

let mm: gsap.MatchMedia | null = null;
let rafId = 0;

// =========================================================================
// 17 STUDIO & PROCESS PHOTOS (Mapped to People 1..17)
// =========================================================================
const PEOPLE_IMAGES = [
  { id: 1,  src: '/images/studio-01.jpg', alt: 'People 1' },
  { id: 2,  src: '/images/studio-02.jpg', alt: 'People 2' },
  { id: 3,  src: '/images/studio-03.jpg', alt: 'People 3' },
  { id: 4,  src: '/images/studio-04.jpg', alt: 'People 4' },
  { id: 5,  src: '/images/studio-05.jpg', alt: 'People 5' },
  { id: 6,  src: '/images/studio-06.jpg', alt: 'People 6' },
  { id: 7,  src: '/images/studio-07.jpg', alt: 'People 7' },
  { id: 8,  src: '/images/studio-08.jpg', alt: 'People 8' },
  { id: 9,  src: '/images/studio-09.jpg', alt: 'People 9' },
  { id: 10, src: '/images/studio-10.jpg', alt: 'People 10' },
  { id: 11, src: '/images/studio-11.jpg', alt: 'People 11' },
  { id: 12, src: '/images/studio-12.jpg', alt: 'People 12' },
  { id: 13, src: '/images/studio-01.jpg', alt: 'People 13' },
  { id: 14, src: '/images/studio-03.jpg', alt: 'People 14' },
  { id: 15, src: '/images/studio-05.jpg', alt: 'People 15' },
  { id: 16, src: '/images/studio-07.jpg', alt: 'People 16' },
  { id: 17, src: '/images/studio-09.jpg', alt: 'People 17' },
];

// =========================================================================
// 4 STUDIO METRICS / COMPANY RECORD
// =========================================================================
const COMPANY_RECORDS = [
  { number: '15+', label: 'Years of\nexperience', title: 'Years of experience' },
  { number: '490+', label: 'Completed\nprojects', title: 'Completed projects' },
  { number: '45+', label: 'Professionals\non the team', title: 'Professionals on the team' },
  { number: '40K', label: 'Total area\ncovered', title: 'Total area covered' },
];

// Mobile fallback ring geometry calculations
const totalImages = computed(() => PEOPLE_IMAGES.length);
const totalPairs = computed(() => Math.ceil(totalImages.value / 2)); // 9

const ringStyle = computed(() => {
  const C = totalPairs.value || 1;
  const Y = 345;
  const q = Math.min(130, (Math.PI * Y) / (C * 1.5 + Math.PI));
  const Z = (Y - q) / 2;
  return {
    '--ring-size': `${q.toFixed(2)}rem`,
    '--ring-radius': `${Z.toFixed(2)}rem`,
  };
});

function getPhotoAngle(index: number): string {
  const angle = (Math.floor(index / 2) / (totalPairs.value || 1)) * 360;
  return `${Math.round(angle)}deg`;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpAngle(a: number, b: number, t: number): number {
  let diff = (b - a) % 360;
  if (diff < -180) diff += 360;
  if (diff > 180) diff -= 360;
  return a + diff * t;
}

onMounted(() => {
  nextTick(() => {
    if (!elRef.value || !peopleImgsRef.value) return;

    const section = elRef.value;
    const imgsLayer = peopleImgsRef.value;
    const photoCards = Array.from(imgsLayer.children) as HTMLElement[];
    const n = photoCards.length;

    mm = gsap.matchMedia();

    // =========================================================================
    // DESKTOP: PRECISE GEOMETRIC CIRCLE ENGINE
    // Core Idea: Every photo sits on ONE big circle ("ring"), evenly spaced,
    // and rotated to match its position on the circle:
    // Top of ring = upright (0°), Right side = 90° clockwise,
    // Bottom = 180° upside down, Left = -90° counter-clockwise.
    // Between stages only radius, center and photo size change.
    // =========================================================================
    mm.add('(min-width: 768px)', () => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let visible = false;

      const morphState = {
        scrollProgress: 0,
        section1Progress: 0,
        morphProgress: 0,
        halfProgress: 0,
        section3Progress: 0,
        exitProgress: 0,
        photosOpacity: 0,
      };

      const setVisible = (val: boolean) => {
        if (visible === val) return;
        visible = val;
        imgsLayer.classList.toggle('is-visible', val);
        morphState.photosOpacity = val ? 1 : 0;
      };

      const measure = () => {
        width = window.innerWidth;
        height = window.innerHeight;
      };

      const vw = (v: number) => (v * width) / 100;
      const vh = (v: number) => (v * height) / 100;

      // Ultra-smooth cosine ease: slow start, leisurely glide, slow gentle ease-end
      const slowEase = (t: number) => {
        const c = clamp(t, 0, 1);
        return 0.5 * (1 - Math.cos(Math.PI * c));
      };

      // -------------------------------------------------------------
      // 1. SECTION 1: Giant Conveyor Arc with Smooth Scroll Sliding
      // Apex tracks headline 1:1 (~35vh below headline bottom, apexX ~20vw)
      // Radius: ~106vw, Photos: ~19.5vw square, rot = -alpha (counter-clockwise)
      // As user scrolls, photos slide along the arc from right to left
      // -------------------------------------------------------------
      function getStateA(i: number, scrollP: number, hbVal: number) {
        const R = vw(106);
        const size = vw(19.5);
        const hb = hbVal;
        const k = clamp((vh(97) - hb) / vh(31), 0, 1);   // 0 at entry, 1 at first view
        const apexX = lerp(vw(34), vw(20), k);
        const apexY = Math.max(vh(20), hb + vh(35));     // follows the headline, parks near the top

        // Smooth scroll sliding along the conveyor track
        const slideOffset = scrollP * 25;                // Slow, stately slide across the arc
        const alpha = (i - 1) * 12.5 - slideOffset;
        const rad = (alpha * Math.PI) / 180;

        const x = apexX + R * Math.sin(rad);
        const y = apexY - R * (1 - Math.cos(rad));
        const rot = -alpha;

        return { x, y, rot, size, opacity: 1 };
      }

      // -------------------------------------------------------------
      // 2. SECTION 2: Closed 360° Orbital Ring around Foundation Year
      // Radius: ~36vw (72vw wide), Photos: ~9vw, Spacing: ~21.18°
      // Center at 50vw and vertical midpoint of "2011 Year of Foundation"
      // Non-crossing angular mapping: Apex (i=1) maps to bottom of ring (180°)
      // Photos 2, 3, 4 map to right, photo 0 maps to left
      // -------------------------------------------------------------
      function getStateB(i: number, scrollP: number, cyVal: number) {
        const R = vw(36);
        const cardSize = vw(9);
        const cx = vw(50);
        const cy = cyVal;

        const delta = 360 / n;
        const ringRotation = scrollP * 60;
        // Apex photo (i=1) maps to bottom of ring (180°), i=2,3,4 to right, i=0,16 to left
        const theta = 180 - (i - 1) * delta + ringRotation;
        const rad = (theta * Math.PI) / 180;

        const x = cx + R * Math.sin(rad);
        const y = cy - R * Math.cos(rad);
        const rot = theta;

        return { x, y, rot, size: cardSize, opacity: 1 };
      }

      // -------------------------------------------------------------
      // 3. SECTION 3: 2-Page Spanning Semi-Circle Motion Engine
      // Radius: ~44vw, Photos: ~9vw, center (-7vw, cy)
      // At scrollP = 0 (Page 1 / Stat 1): cy = 96vh -> Top half of circle visible
      // At scrollP = 1 (Page 2 / Stat 4): cy = 8vh  -> Bottom / other half of circle visible & ends perfectly
      // Exact uniform spacing across all 17 photos: delta = 360 / 17 ≈ 21.176°
      // -------------------------------------------------------------
      function getStateC(i: number, scrollP: number) {
        const R = vw(44);
        const cardSize = vw(9);
        const cx = vw(-7);
        // cy smoothly travels from bottom (96vh) to top (8vh) across the 2-page section, then continues upwards with the text exit
        const cy = lerp(vh(96), vh(8), scrollP) - morphState.exitProgress * vh(25);

        // Exact uniform spacing across all 17 photos: exactly delta between every neighbor!
        const delta = 360 / n;
        // Continuous, smooth motion as user traverses through the stats
        const loopRotation = scrollP * 80 + morphState.exitProgress * 20;

        // Angle around the circle: uniform spacing for all 17 photos
        let theta = (10 + (i - 1) * delta - loopRotation) % 360;
        if (theta < 0) theta += 360;

        const rad = (theta * Math.PI) / 180;
        const x = cx + R * Math.sin(rad);
        const y = cy - R * Math.cos(rad);
        const rot = theta;

        // Opacity: Fully visible (1) on the crescent arc; naturally fades only as it crosses the left viewport border
        let opacity = 1;
        if (x < -cardSize * 0.5) {
          opacity = 0;
        } else if (x < 0) {
          opacity = clamp((x + cardSize * 0.5) / (cardSize * 0.5), 0, 1);
        }

        return { x, y, rot, size: cardSize, opacity };
      }

      const render = () => {
        if (!visible || width < 10 || height < 10) return;

        // Batch all DOM queries at frame start (eliminates layout thrashing / lag / flicker)
        const hb = elProcessRef.value ? elProcessRef.value.getBoundingClientRect().bottom : vh(100);
        let cyB = vh(73);
        if (elYearRingRef.value) {
          const rect = elYearRingRef.value.getBoundingClientRect();
          cyB = rect.top + rect.height * 0.5;
        }

        // Slow, luxurious cosine easing between animations
        const mu = slowEase(morphState.morphProgress);
        const lam = slowEase(morphState.halfProgress);
        const p1 = morphState.section1Progress;
        const p2 = morphState.scrollProgress;
        const p3 = morphState.section3Progress;

        for (let i = 0; i < n; i++) {
          const card = photoCards[i];
          if (!card) continue;

          const ptA = getStateA(i, p1, hb);
          const ptB = getStateB(i, p2, cyB);
          const ptC = getStateC(i, p3);

          let x: number;
          let y: number;
          let rot: number;
          let size: number;
          let cardOpacity: number;

          if (lam <= 0.001) {
            x = lerp(ptA.x, ptB.x, mu);
            y = lerp(ptA.y, ptB.y, mu);
            rot = lerpAngle(ptA.rot, ptB.rot, mu);
            size = lerp(ptA.size, ptB.size, mu);
            cardOpacity = lerp(ptA.opacity, ptB.opacity, mu);
          } else {
            x = lerp(ptB.x, ptC.x, lam);
            y = lerp(ptB.y, ptC.y, lam);
            rot = lerpAngle(ptB.rot, ptC.rot, lam);
            size = lerp(ptB.size, ptC.size, lam);
            cardOpacity = lerp(ptB.opacity, ptC.opacity, lam);
          }

          const hw = size / 2;
          const hh = size / 2;

          card.style.width = `${size.toFixed(1)}px`;
          card.style.height = `${size.toFixed(1)}px`;
          card.style.transform = `translate3d(${(x - hw).toFixed(1)}px, ${(y - hh).toFixed(1)}px, 0) rotate(${rot.toFixed(2)}deg)`;
          
          const finalCardOpacity = cardOpacity * morphState.photosOpacity * (1 - morphState.exitProgress);
          card.style.opacity = Math.max(0, finalCardOpacity).toFixed(3);
        }
      };

      const loop = () => {
        render();
        rafId = requestAnimationFrame(loop);
      };

      measure();
      window.addEventListener('resize', measure);
      rafId = requestAnimationFrame(loop);

      // =====================================================================
      // SCROLL TRIGGERS with 1.5s Physics Damping ("Super Ease" In-Between Stop)
      // =====================================================================
      // 1. Entire Section Scroll Master & Visibility
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: (self) => {
          morphState.scrollProgress = self.progress;
          if (self.progress > 0 && self.progress < 1) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        },
        onEnter: () => setVisible(true),
        onEnterBack: () => setVisible(true),
        onLeave: () => setVisible(false),
        onLeaveBack: () => setVisible(false),
      });

      // 2. Section 1 Headline Conveyor Slide
      if (elProcessRef.value) {
        ScrollTrigger.create({
          trigger: elProcessRef.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
          onUpdate: (self) => {
            morphState.section1Progress = self.progress;
          },
        });
      }

      // 3. Year of Foundation (2011) 360° Ring Assembly Morph (Slow, Eased & Smooth)
      if (elYearRef.value) {
        ScrollTrigger.create({
          trigger: elYearRef.value,
          start: 'top bottom+=30vh',
          end: 'center center',
          scrub: 1.5,
          onUpdate: (self) => {
            morphState.morphProgress = self.progress;
          },
        });
      }

      // 4. Company Records Crescent Morph & Continuous Looping Carousel
      if (elRecordRef.value) {
        // Slow, eased morph from 360° ring into the half-hidden cutoff circle
        ScrollTrigger.create({
          trigger: elRecordRef.value,
          start: 'top bottom+=25vh',
          end: 'top center+=15vh',
          scrub: 1.5,
          onUpdate: (self) => {
            morphState.halfProgress = self.progress;
          },
        });

        // Continuous revolving loop across the 2-page records section
        ScrollTrigger.create({
          trigger: elRecordRef.value,
          start: 'top center',
          end: 'bottom center',
          scrub: 1.5,
          onUpdate: (self) => {
            morphState.section3Progress = self.progress;
          },
        });

        // Exit synchronization: smoothly fades and carries the photos out in exact harmony as the final stat leaves
        ScrollTrigger.create({
          trigger: elRecordRef.value,
          start: 'bottom center',
          end: 'bottom top+=15vh',
          scrub: 1.2,
          onUpdate: (self) => {
            morphState.exitProgress = self.progress;
          },
        });

        // 5. Highlight Active Stat Item (.ohb -> .ouc) - 100% Intact
        const statItems = gsap.utils.toArray<HTMLElement>('.ohb', elRecordRef.value);
        statItems.forEach((item) => {
          ScrollTrigger.create({
            trigger: item,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => item.classList.add('ouc'),
            onEnterBack: () => item.classList.add('ouc'),
            onLeave: () => item.classList.remove('ouc'),
            onLeaveBack: () => item.classList.remove('ouc'),
          });
        });
      }

      return () => {
        window.removeEventListener('resize', measure);
        if (rafId) cancelAnimationFrame(rafId);
      };
    });

    // Mobile reduced motion fallback
    mm.add('(prefers-reduced-motion: reduce)', () => {
      if (peopleImgsRef.value) {
        gsap.set(peopleImgsRef.value.children, { opacity: 1 });
      }
    });
  });
});

onUnmounted(() => {
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
  if (mm) {
    mm.revert();
    mm = null;
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;

// =========================================================================
// ARCHITECTURAL BUREAU STYLESHEET (Kononenko 1920-Scaled Rem Architecture)
// Desktop: 1rem = 0.0520833333vw (1px @ 1920px)
// Mobile:  1rem = 0.2666666667vw (1px @ 375px)
// =========================================================================
.nwv {
  --rem: 0.0520833333vw;
  background-color: #000;
  color: #fff;
  overflow: visible; // Allows photos to bleed off screen edges
  padding-bottom: calc(100 * var(--rem));
  padding-top: calc(256 * var(--rem));
  position: relative;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 767.98px) {
    --rem: 0.2666666667vw;
    overflow: hidden;
    padding-bottom: calc(60 * var(--rem));
    padding-top: calc(60 * var(--rem));
  }
}

.ctr {
  display: block;
  padding: 0 1.5vw; // Headline left-aligned at ~1.5vw
  width: 100%;
  box-sizing: border-box;
  overflow: visible;

  @media (max-width: 767.98px) {
    padding: 0 calc(15 * var(--rem));
  }
}

// -------------------------------------------------------------------------
// 1. EDITORIAL / PROCESS (People & Process)
// -------------------------------------------------------------------------
.enr {
  max-width: calc(1130 * var(--rem));
  position: relative;
  width: 100%;
  z-index: 10;

  .amv {
    left: 0;
    width: 6.5vw;
    max-width: none;
    position: absolute;
    top: calc(6 * var(--rem));
    margin: 0;
    font-size: 16px;
    line-height: 1.15;
  }

  @media (max-width: 767.98px) {
    .amv {
      margin-bottom: calc(8 * var(--rem));
      max-width: none;
      position: static;
      width: auto;
    }
  }

  .kca {
    text-indent: 7vw; // First line indented about 7vw
    margin: 0;
  }

  @media (max-width: 767.98px) {
    .kca {
      text-indent: 0;
    }
  }
}

// -------------------------------------------------------------------------
// 2. FOUNDATION YEAR (2011 Year of Foundation)
// -------------------------------------------------------------------------
.uwg {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: calc(1200 * var(--rem)) auto;
  text-align: center;
  position: relative;
  z-index: 10;

  @media (max-width: 767.98px) {
    margin-bottom: calc(80 * var(--rem));
    margin-top: calc(80 * var(--rem));
  }

  .vrc {
    width: 100%;
    position: relative;
  }

  @media (max-width: 767.98px) {
    .vrc {
      align-items: center;
      display: flex;
      height: calc(345 * var(--rem));
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      width: calc(345 * var(--rem));
    }
  }

  .kca {
    line-height: 0.85;
    margin-left: auto;
    margin-right: auto;
    max-width: min(50vw, calc(990 * var(--rem))); // At least 10vw clear on each side of 72vw ring
    text-align: center;
    width: 100%;
  }

  @media (max-width: 767.98px) {
    .kca {
      position: relative;
      z-index: 1;
    }
  }

  .ciz {
    display: flex;
    gap: calc(80 * var(--rem));
    justify-content: center;
    margin-top: calc(70 * var(--rem));

    @media (max-width: 767.98px) {
      flex-direction: column;
      gap: calc(24 * var(--rem));
      margin-top: calc(40 * var(--rem));
    }

    .iek {
      opacity: 0.5;
      text-align: center;
      width: calc(356 * var(--rem));
      margin: 0;
      line-height: 1.35;

      @media (max-width: 767.98px) {
        width: 100%;
      }
    }
  }
}

// -------------------------------------------------------------------------
// 3. PHOTO RIBBON / ORBITAL RING / LEFT CRESCENT (vnj & elr)
// -------------------------------------------------------------------------
.vnj {
  display: flex;
  left: 0;
  position: absolute;
  top: 0;

  // Desktop fixed viewport layer: clips only by viewport, no container clipping
  @media (min-width: 768px) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 5; // Underneath text (z-index: 10)
    overflow: visible;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease;

    &.is-visible {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 767.98px) {
    display: block;
    height: 100%;
    width: 100%;
  }

  .elr {
    height: calc(377 * var(--rem));
    width: calc(377 * var(--rem));

    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
      overflow: hidden;
      background-color: #141414;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transform-origin: center center;
      will-change: transform;
    }

    @media (max-width: 767.98px) {
      height: calc(var(--ring-size) * var(--rem));
      width: calc(var(--ring-size) * var(--rem));
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(var(--ring-radius) * var(--rem) * -1)) rotate(calc(var(--angle) * -1));
      border-radius: 50%;
      overflow: hidden;

      &:nth-child(2n) {
        display: none;
      }
    }
  }
}

.mimg {
  height: 100%;
  position: relative;
  width: 100%;

  .elr-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }
}

// -------------------------------------------------------------------------
// 4. STUDIO METRICS / COMPANY RECORD (ima, ppi, ohb)
// -------------------------------------------------------------------------
.ima {
  position: relative;
  width: 100%;
  z-index: 10;

  .ppi {
    display: flex;
    flex-direction: column;
    margin-left: 54vw; // Stats text starts at 54vw (photos stay left of 40vw)
    width: min(44vw, calc(857 * var(--rem)));

    @media (max-width: 767.98px) {
      margin-left: 0;
      width: 100%;
      max-width: none;
    }

    .ohb {
      display: flex;
      flex-direction: column;
      gap: calc(30 * var(--rem));
      opacity: 0.2;
      padding-bottom: calc(150 * var(--rem));
      transition: opacity 0.35s ease;

      &.ouc {
        opacity: 1;
      }

      @media (max-width: 767.98px) {
        gap: calc(15 * var(--rem));
        max-width: calc(250 * var(--rem));
        opacity: 1;
        padding-bottom: calc(48 * var(--rem));
      }

      &:last-child {
        padding-bottom: 0;
      }

      .kca {
        opacity: 0.8;
        text-indent: calc(130 * var(--rem));
        margin: 0;

        @media (max-width: 767.98px) {
          text-indent: calc(40 * var(--rem));
        }
      }
    }
  }
}

// -------------------------------------------------------------------------
// 5. TYPOGRAPHY HELPERS (Matches original Bureau Design System)
// -------------------------------------------------------------------------
.fn-h2 {
  font-family: $font-heading, "Instrument Sans", sans-serif;
  font-size: calc(175 * var(--rem));
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 0.7;

  @media (max-width: 767.98px) {
    font-size: calc(40 * var(--rem));
    line-height: 0.85;
  }
}

.fn-h3 {
  font-family: $font-serif, "Newsreader", serif;
  font-size: calc(118 * var(--rem));
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 0.9;

  @media (max-width: 767.98px) {
    font-size: calc(36 * var(--rem));
    line-height: 0.95;
  }
}

.fn-b1 {
  font-family: $font-serif, "Newsreader", serif;
  font-size: calc(16 * var(--rem));
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.2;

  @media (max-width: 767.98px) {
    font-size: calc(14 * var(--rem));
  }
}

.f-sf {
  font-family: $font-serif, "Newsreader", serif;
}

.f-mn {
  font-family: $font-heading, "Instrument Sans", sans-serif;
}

.ln-mask {
  display: block;
  overflow: hidden;
}
</style>
