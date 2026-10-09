<template>
  <section
    ref="sectionRef"
    class="ambitious-brands-section"
    aria-label="The World's Most Ambitious Brands"
  >
    <!-- Pinned Visual Viewport Stage (100% x 100vh) -->
    <div ref="stageRef" class="ambitious-brands__stage">
      
      <!-- ========================================================= -->
      <!-- LAYER 1: Monumental Center Serif Typography               -->
      <!-- Z-Index: 10 (Sandwiched between back & front logo badges) -->
      <!-- ========================================================= -->
      <div ref="titleWrapRef" class="ambitious-brands__title-wrap">
        <h2 class="ambitious-brands__title">
          <span class="title-line">The</span>
          <span class="title-line">World’s Most</span>
          <span class="title-line">Ambitious</span>
          <span class="title-line">Brands</span>
          <span class="title-line">Choose to</span>
          <span class="title-line">Work With Us</span>
        </h2>
      </div>

      <!-- ========================================================= -->
      <!-- LAYER 2 & 3: 16 Galaxy-Orbiting Circular Brand Badges     -->
      <!-- Dynamic Z-Index (2 for back, 25 for front) & 3D Depth     -->
      <!-- ========================================================= -->
      <div ref="orbitWrapRef" class="ambitious-brands__orbit-container">
        <div
          v-for="(brand, index) in BRANDS"
          :key="brand.id"
          :ref="el => { if (el) badgeRefs[index] = el as HTMLElement }"
          class="brand-badge"
          :class="{ 'brand-badge--front': isFrontList[index] }"
        >
          <!-- Front / Light Theme Badge Face (Visible when z > 0) -->
          <div class="brand-badge__face brand-badge__face--front">
            <component :is="brand.component" :is-dark="false" />
          </div>

          <!-- Back / Dim Theme Badge Face (Visible when z <= 0) -->
          <div class="brand-badge__face brand-badge__face--back">
            <component :is="brand.component" :is-dark="true" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, h, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '~/composables/useLenis';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

// -----------------------------------------------------------------
// SVG Brand Logo Components (Crisp, 1-to-1 Match with Reference)
// -----------------------------------------------------------------

// 1. ERA DEVELOPMENTS
const EraLogo = () => h('div', { class: 'brand-logo brand-logo--era' }, [
  h('svg', { viewBox: '0 0 54 28', class: 'brand-svg brand-svg--era' }, [
    h('path', {
      d: 'M8 24 L27 4 L46 24 Z',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '3',
      'stroke-linejoin': 'round'
    }),
    h('path', {
      d: 'M16 24 L27 12 L38 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2.2',
      'stroke-linejoin': 'round'
    })
  ]),
  h('span', { class: 'brand-name brand-name--era' }, 'ERA'),
  h('span', { class: 'brand-sub brand-sub--era' }, 'DEVELOPMENTS')
]);

// 2. INGRAD
const IngradLogo = () => h('div', { class: 'brand-logo brand-logo--ingrad' }, [
  h('svg', { viewBox: '0 0 32 32', class: 'brand-svg brand-svg--icon' }, [
    h('path', {
      d: 'M4 28 L4 9 L20 9 L20 4 L28 4 L28 28 Z',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2.2'
    }),
    h('line', { x1: '11', y1: '14', x2: '11', y2: '23', stroke: 'currentColor', 'stroke-width': '1.8' }),
    h('line', { x1: '18', y1: '14', x2: '18', y2: '23', stroke: 'currentColor', 'stroke-width': '1.8' })
  ]),
  h('span', { class: 'brand-name brand-name--ingrad' }, 'INGRAD')
]);

// 3. Little
const LittleLogo = () => h('div', { class: 'brand-logo brand-logo--little' }, [
  h('span', { class: 'brand-name brand-name--little' }, 'Little')
]);

// 4. NAIMAN residence
const NaimanLogo = () => h('div', { class: 'brand-logo brand-logo--naiman' }, [
  h('span', { class: 'brand-icon-n' }, 'n'),
  h('span', { class: 'brand-name' }, 'NAIMAN'),
  h('span', { class: 'brand-sub' }, 'residence')
]);

// 5. KAZAKOV Grand Loft
const KazakovLogo = () => h('div', { class: 'brand-logo brand-logo--kazakov' }, [
  h('span', { class: 'brand-name brand-name--kazakov' }, 'KAZAKOV'),
  h('span', { class: 'brand-script' }, 'Grand Loft')
]);

// 6. Whitewill
const WhitewillLogo = () => h('div', { class: 'brand-logo brand-logo--whitewill' }, [
  h('svg', { viewBox: '0 0 44 32', class: 'brand-svg brand-svg--whitewill' }, [
    h('path', {
      d: 'M4 4 L13 28 L18 14 L22 28 L27 14 L31 28 L40 4',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2.5',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }),
    h('path', {
      d: 'M8 4 L15 20 L19 10 L23 20 L27 10 L34 4',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '1.2',
      'stroke-linecap': 'round'
    })
  ]),
  h('span', { class: 'brand-name brand-name--whitewill' }, 'Whitewill')
]);

// 7. A101 КОМФОРТ
const A101Logo = () => h('div', { class: 'brand-logo brand-logo--a101' }, [
  h('svg', { viewBox: '0 0 40 22', class: 'brand-svg brand-svg--tree' }, [
    h('circle', { cx: '11', cy: '9', r: '4.5', fill: 'currentColor' }),
    h('circle', { cx: '20', cy: '6.5', r: '5.5', fill: 'currentColor' }),
    h('circle', { cx: '29', cy: '9', r: '4.5', fill: 'currentColor' }),
    h('path', { d: 'M20 12 L20 20 M11 13.5 L11 20 M29 13.5 L29 20', stroke: 'currentColor', 'stroke-width': '2' })
  ]),
  h('span', { class: 'brand-name brand-name--a101' }, 'A101'),
  h('span', { class: 'brand-sub brand-sub--a101' }, 'КОМФОРТ')
]);

// 8. BOLSHEVIK
const BolshevikLogo = () => h('div', { class: 'brand-logo brand-logo--bolshevik' }, [
  h('span', { class: 'brand-name brand-name--bolshevik' }, 'BOLSHEVIK'),
  h('svg', { viewBox: '0 0 60 9', class: 'brand-svg brand-svg--wave' }, [
    h('path', {
      d: 'M2 4.5 Q 6 1, 10 4.5 T 18 4.5 T 26 4.5 T 34 4.5 T 42 4.5 T 50 4.5 T 58 4.5',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2.4',
      'stroke-linecap': 'round'
    })
  ])
]);

// 9. SHOW ME
const ShowMeLogo = () => h('div', { class: 'brand-logo brand-logo--showme' }, [
  h('span', { class: 'brand-name brand-name--showme' }, 'SHOW ME')
]);

// 10. Monogram Crest Seal
const MonogramCrestLogo = () => h('div', { class: 'brand-logo brand-logo--seal' }, [
  h('svg', { viewBox: '0 0 40 40', class: 'brand-svg brand-svg--seal' }, [
    h('circle', { cx: '20', cy: '20', r: '18', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.2', 'stroke-dasharray': '2,2' }),
    h('circle', { cx: '20', cy: '20', r: '15', fill: 'none', stroke: 'currentColor', 'stroke-width': '1' }),
    h('path', { d: 'M13 14 Q 20 8, 27 14 Q 30 20, 27 26 Q 20 32, 13 26 Q 10 20, 13 14 Z', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.2' }),
    h('circle', { cx: '20', cy: '20', r: '3', fill: 'currentColor' })
  ])
]);

// 11. Heraldic Shield Khamovniki
const ShieldLogo = () => h('div', { class: 'brand-logo brand-logo--shield' }, [
  h('span', { class: 'brand-sub brand-sub--shield' }, 'ХАМОВНИКИ'),
  h('svg', { viewBox: '0 0 28 32', class: 'brand-svg brand-svg--shield' }, [
    h('path', {
      d: 'M3 3 L25 3 C25 18 14 29 14 29 C14 29 3 18 3 3 Z',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '1.8'
    }),
    h('path', {
      d: 'M10 9 L10 20 M18 9 L18 20 M10 14 L18 14',
      stroke: 'currentColor',
      'stroke-width': '1.5'
    })
  ])
]);

// 12. TT Monogram Stamp
const TTLogo = () => h('div', { class: 'brand-logo brand-logo--tt' }, [
  h('svg', { viewBox: '0 0 36 36', class: 'brand-svg brand-svg--tt' }, [
    h('circle', { cx: '18', cy: '18', r: '16', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.6' }),
    h('path', { d: 'M11 12 L25 12 M18 12 L18 24 M9 18 L27 18', stroke: 'currentColor', 'stroke-width': '1.6' })
  ])
]);

// 13. o.properties
const OPropertiesLogo = () => h('div', { class: 'brand-logo brand-logo--oproperties' }, [
  h('span', { class: 'brand-name brand-name--oproperties' }, 'o.properties')
]);

// 14. COLDY
const ColdyLogo = () => h('div', { class: 'brand-logo brand-logo--coldy' }, [
  h('span', { class: 'brand-name brand-name--coldy' }, 'COLDY')
]);

// 15. ЗОРГЕ №9
const ZorgeLogo = () => h('div', { class: 'brand-logo brand-logo--zorge' }, [
  h('span', { class: 'brand-name brand-name--zorge' }, 'ЗОРГЕ №9')
]);

// 16. THE GAME
const TheGameLogo = () => h('div', { class: 'brand-logo brand-logo--thegame' }, [
  h('svg', { viewBox: '0 0 24 24', class: 'brand-svg brand-svg--diamond' }, [
    h('rect', { x: '10', y: '2', width: '4', height: '4', fill: 'currentColor' }),
    h('rect', { x: '2', y: '10', width: '4', height: '4', fill: 'currentColor' }),
    h('rect', { x: '18', y: '10', width: '4', height: '4', fill: 'currentColor' }),
    h('rect', { x: '10', y: '18', width: '4', height: '4', fill: 'currentColor' }),
    h('rect', { x: '10', y: '10', width: '4', height: '4', fill: 'currentColor' })
  ]),
  h('span', { class: 'brand-name brand-name--thegame' }, 'THE G^ME'),
  h('span', { class: 'brand-sub' }, 'premium lounge')
]);

// Complete 16 Brands in Galaxy Orbital Order
const BRANDS = [
  { id: 'era', name: 'ERA Developments', component: EraLogo },
  { id: 'ingrad', name: 'INGRAD', component: IngradLogo },
  { id: 'little', name: 'Little', component: LittleLogo },
  { id: 'naiman', name: 'NAIMAN residence', component: NaimanLogo },
  { id: 'kazakov', name: 'KAZAKOV Grand Loft', component: KazakovLogo },
  { id: 'whitewill', name: 'Whitewill', component: WhitewillLogo },
  { id: 'a101', name: 'A101 КОМФОРТ', component: A101Logo },
  { id: 'bolshevik', name: 'BOLSHEVIK', component: BolshevikLogo },
  { id: 'zorge', name: 'ЗОРГЕ №9', component: ZorgeLogo },
  { id: 'thegame', name: 'THE GAME', component: TheGameLogo },
  { id: 'showme', name: 'SHOW ME', component: ShowMeLogo },
  { id: 'seal', name: 'Architectural Seal', component: MonogramCrestLogo },
  { id: 'shield', name: 'Khamovniki Shield', component: ShieldLogo },
  { id: 'tt', name: 'TT Monogram', component: TTLogo },
  { id: 'oproperties', name: 'o.properties', component: OPropertiesLogo },
  { id: 'coldy', name: 'COLDY', component: ColdyLogo }
];

// -----------------------------------------------------------------
// State & Template Refs
// -----------------------------------------------------------------
const sectionRef = ref<HTMLElement | null>(null);
const stageRef = ref<HTMLElement | null>(null);
const titleWrapRef = ref<HTMLElement | null>(null);
const orbitWrapRef = ref<HTMLElement | null>(null);
const badgeRefs = ref<HTMLElement[]>([]);

const numBadges = BRANDS.length;
const isFrontList = reactive<boolean[]>(new Array(numBadges).fill(false));

const { lenis } = useLenis();

let ctx: gsap.Context | null = null;
let tickerFunction: (() => void) | null = null;

// Orbit & Velocity Physics State
let currentAngle = 0;
const baseIdleSpeed = 0.0028; // Smooth idle rotation radians per frame
let scrollVelocity = 0;
let targetScrollVelocity = 0;
let lastScrollY = 0;
let sectionObserver: IntersectionObserver | null = null;

onMounted(async () => {
  if (!import.meta.client || !sectionRef.value || !stageRef.value) return;

  await nextTick();

  const sectionEl = sectionRef.value;
  const stageEl = stageRef.value;

  ctx = gsap.context(() => {
    // 1. GSAP ScrollTrigger Master Timeline (Pinned Viewport Experience)
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'top top',
        end: '+=250%',
        pin: stageEl,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Capture directional scroll velocity (pixels/sec or delta)
          const vel = self.getVelocity();
          targetScrollVelocity = (vel / 1000) * 0.036;
        }
      }
    });

    const titleLines = titleWrapRef.value?.querySelectorAll('.title-line');
    if (titleLines) {
      gsap.set(titleLines, { y: '100%', opacity: 0 });
    }
    gsap.set(orbitWrapRef.value, { opacity: 0, scale: 0.90 });

    // Entrance Animation (0.00 -> 0.15)
    if (titleLines) {
      masterTl.to(titleLines, {
        y: '0%',
        opacity: 1,
        duration: 0.15,
        stagger: 0.02,
        ease: 'power3.out'
      }, 0.00);
    }

    masterTl.to(orbitWrapRef.value, {
      opacity: 1,
      scale: 1,
      duration: 0.16,
      ease: 'power2.out'
    }, 0.02);

    // Sustained Engagement Phase (0.15 -> 0.85)
    masterTl.to({}, { duration: 0.70 }, 0.15);

    // Smooth Exit to Footer (0.85 -> 1.00)
    masterTl.to(titleWrapRef.value, {
      opacity: 0,
      y: -50,
      duration: 0.15,
      ease: 'power2.in'
    }, 0.85);

    masterTl.to(orbitWrapRef.value, {
      opacity: 0,
      scale: 0.94,
      duration: 0.15,
      ease: 'power2.in'
    }, 0.85);

  }, sectionEl);

  // Hook into Lenis for micro-scroll delta coupling
  if (lenis?.value) {
    lenis.value.on('scroll', (e: any) => {
      if (e.velocity) {
        targetScrollVelocity = (e.velocity / 1000) * 0.036;
      }
    });
  } else {
    window.addEventListener('scroll', onWindowScroll, { passive: true });
  }

  let isSectionVisible = false;

  // Cache face elements to prevent 1920 querySelector calls per second
  const cachedFaces: Array<{ el: HTMLElement; front: HTMLElement | null; back: HTMLElement | null }> = [];
  badgeRefs.value.forEach((el) => {
    if (el) {
      cachedFaces.push({
        el,
        front: el.querySelector('.brand-badge__face--front') as HTMLElement | null,
        back: el.querySelector('.brand-badge__face--back') as HTMLElement | null
      });
    }
  });

  // 2. Continuous Motion & Orbit Rendering Loop via GSAP Shared Ticker
  tickerFunction = () => {
    if (!isSectionVisible) return;

    // Smoothly lerp scroll velocity
    scrollVelocity += (targetScrollVelocity - scrollVelocity) * 0.12;
    // Exponentially decay target velocity back to idle
    targetScrollVelocity *= 0.88;

    // Advance continuous angle (idle + scroll acceleration)
    currentAngle += baseIdleSpeed + scrollVelocity;

    // Render each badge along the 3D tilted galaxy orbit
    renderBadges(cachedFaces);
  };

  if (typeof IntersectionObserver !== 'undefined' && sectionRef.value) {
    sectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      isSectionVisible = entry.isIntersecting;
      if (isSectionVisible) {
        renderBadges(cachedFaces);
      }
    }, { rootMargin: '300px 0px 300px 0px' });

    sectionObserver.observe(sectionRef.value);
  } else {
    isSectionVisible = true;
  }

  gsap.ticker.add(tickerFunction);
  window.addEventListener('resize', onResize, { passive: true });

  ScrollTrigger.refresh();
});

const onWindowScroll = () => {
  const currentY = window.scrollY || window.pageYOffset;
  const delta = currentY - lastScrollY;
  lastScrollY = currentY;
  targetScrollVelocity = (delta / 16) * 0.035;
};

const onResize = () => {
  // Recalculate badge positions on window resize
  const cachedFaces: Array<{ el: HTMLElement; front: HTMLElement | null; back: HTMLElement | null }> = [];
  badgeRefs.value.forEach((el) => {
    if (el) {
      cachedFaces.push({
        el,
        front: el.querySelector('.brand-badge__face--front') as HTMLElement | null,
        back: el.querySelector('.brand-badge__face--back') as HTMLElement | null
      });
    }
  });
  renderBadges(cachedFaces);
};

const renderBadges = (cachedFacesList?: Array<{ el: HTMLElement; front: HTMLElement | null; back: HTMLElement | null }>) => {
  if (!stageRef.value) return;

  const rect = stageRef.value.getBoundingClientRect();
  const width = rect.width || window.innerWidth;
  const height = rect.height || window.innerHeight;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width <= 1024;

  // -------------------------------------------------------------
  // Galaxy Elliptical Orbit Geometry (Matches Reference Shape)
  // Wider horizontal spread (Rx), dramatic tilted depth sweep (Ry)
  // Sized proportionally for mobile, tablet, and laptop/desktop screens
  // -------------------------------------------------------------
  const rx = isMobile 
    ? Math.max(width * 0.36, 120) 
    : isTablet 
      ? Math.min(width * 0.38, 440) 
      : Math.min(width * 0.42, 620);

  const ry = isMobile 
    ? height * 0.35 
    : isTablet 
      ? height * 0.40 
      : Math.min(height * 0.44, 460);

  // Slight vertical offset center to balance typography perfectly
  const offsetY = height * 0.02;

  const angleStep = (Math.PI * 2) / numBadges;

  for (let i = 0; i < numBadges; i++) {
    const item = cachedFacesList ? cachedFacesList[i] : null;
    const el = item ? item.el : badgeRefs.value[i];
    if (!el) continue;

    const angle = currentAngle + i * angleStep;

    // 2D Galaxy Orbit coordinates relative to center
    const x = Math.cos(angle) * rx;
    const y = Math.sin(angle) * ry + offsetY;

    // Depth metric: sin(angle)
    // In screen coordinates: y > 0 is bottom hemisphere (FOREGROUND, in front of text)
    // y <= 0 is top hemisphere (BACKGROUND, behind text)
    const depth = Math.sin(angle); // ranges from -1.0 (top back) to +1.0 (bottom front)
    const isFront = depth > 0.02;
    isFrontList[i] = isFront;

    // Dynamic 3D Scale & Opacity & Filter Depth
    let scale: number;
    let opacity: number;
    let zIndex: number;
    let faceTransitionProgress: number; // 0 = fully back (dark), 1 = fully front (light)

    if (isFront) {
      // Foreground: IN FRONT of text (z-index: 25 vs text z-index: 10)
      zIndex = 25;
      scale = 0.96 + 0.22 * depth; // 0.96 -> 1.18x prominent size
      opacity = 0.90 + 0.10 * depth; // 0.90 -> 1.0
      faceTransitionProgress = Math.min(1, depth * 3.0); // Fast blend to 1 as it enters front
    } else {
      // Background: BEHIND text (z-index: 2 vs text z-index: 10)
      zIndex = 2;
      scale = 0.76 + 0.20 * (1 + depth); // 0.76 -> 0.96
      opacity = 0.30 + 0.35 * (1 + depth); // 0.30 -> 0.65
      faceTransitionProgress = 0;
    }

    // Apply high-performance GPU transform
    el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
    el.style.zIndex = `${zIndex}`;
    el.style.opacity = `${opacity.toFixed(3)}`;

    // Cross-fade the front & back faces for seamless lighting transition without querySelector
    const frontFace = item ? item.front : (el.querySelector('.brand-badge__face--front') as HTMLElement | null);
    const backFace = item ? item.back : (el.querySelector('.brand-badge__face--back') as HTMLElement | null);

    if (frontFace && backFace) {
      frontFace.style.opacity = `${faceTransitionProgress.toFixed(3)}`;
      backFace.style.opacity = `${(1 - faceTransitionProgress).toFixed(3)}`;
    }
  }
};

onUnmounted(() => {
  if (tickerFunction) {
    gsap.ticker.remove(tickerFunction);
  }
  if (sectionObserver) {
    sectionObserver.disconnect();
    sectionObserver = null;
  }
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
  if (import.meta.client) {
    window.removeEventListener('scroll', onWindowScroll);
    window.removeEventListener('resize', onResize);
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;

.ambitious-brands-section {
  position: relative;
  width: 100%;
  background-color: #000000;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.ambitious-brands__stage {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #000000;
  perspective: 1400px;
  box-sizing: border-box;
}

// -----------------------------------------------------------------
// Monumental Centered Serif Title (Massive & Commanding)
// -----------------------------------------------------------------
.ambitious-brands__title-wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10; // Perfectly sandwiched: back badges are z:2, front badges are z:25
  text-align: center;
  pointer-events: none;
  user-select: none;
  width: 95%;
  max-width: 1380px;
  will-change: transform, opacity;
}

.ambitious-brands__title {
  font-family: $font-serif;
  font-size: clamp(52px, 8.4vw, 138px);
  font-weight: 400;
  font-style: normal;
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  .title-line {
    display: block;
    white-space: nowrap;
    will-change: transform, opacity;
  }
}

// -----------------------------------------------------------------
// Galaxy Orbiting Container & Circular Badges
// -----------------------------------------------------------------
.ambitious-brands__orbit-container {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  will-change: transform, opacity;
}

.brand-badge {
  position: absolute;
  left: 0;
  top: 0;
  width: clamp(88px, 11vw, 158px);
  height: clamp(88px, 11vw, 158px);
  margin-left: calc(-1 * clamp(88px, 11vw, 158px) / 2);
  margin-top: calc(-1 * clamp(88px, 11vw, 158px) / 2);
  border-radius: 50%;
  will-change: transform, opacity;
  pointer-events: auto;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &__face {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: clamp(0.7rem, 1.1vw, 1.4rem);
    box-sizing: border-box;
    will-change: opacity;
    transition: background-color 0.25s ease;

    // FRONT Face: Solid light white/grey background with dark logos
    &--front {
      background-color: #EAEAEA;
      color: #111111;
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.75), 0 6px 16px rgba(0, 0, 0, 0.45);
    }

    // BACK Face: Translucent/dark background with soft light logos
    &--back {
      background-color: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      color: rgba(255, 255, 255, 0.70);
      border: 1px solid rgba(255, 255, 255, 0.07);
    }
  }

  &:hover {
    .brand-badge__face--front {
      background-color: #FFFFFF;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.85);
    }
    .brand-badge__face--back {
      background-color: rgba(255, 255, 255, 0.22);
      color: #FFFFFF;
    }
  }
}

// -----------------------------------------------------------------
// Brand Logo Typography & Graphics
// -----------------------------------------------------------------
.brand-logo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;

  .brand-name {
    font-family: $font-sans;
    font-size: clamp(10px, 0.9vw, 14px);
    font-weight: 600;
    letter-spacing: 0.04em;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .brand-sub {
    font-family: $font-sans;
    font-size: clamp(6px, 0.52vw, 9px);
    letter-spacing: 0.08em;
    opacity: 0.75;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .brand-script {
    font-family: $font-heading;
    font-style: normal;
    font-size: clamp(9px, 0.8vw, 13px);
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
    margin-top: 1px;
    opacity: 0.85;
  }

  .brand-svg {
    width: clamp(26px, 2.5vw, 42px);
    height: auto;
    margin-bottom: 3px;
  }

  // Specific Brand Logo Nuances
  &.brand-logo--era {
    .brand-svg--era {
      width: clamp(32px, 3.0vw, 48px);
      margin-bottom: 2px;
    }
    .brand-name--era {
      font-size: clamp(12px, 1.1vw, 17px);
      font-weight: 800;
      letter-spacing: 0.14em;
    }
    .brand-sub--era {
      font-size: clamp(5.5px, 0.5vw, 8px);
      letter-spacing: 0.18em;
    }
  }

  &.brand-logo--ingrad {
    .brand-svg--icon {
      width: clamp(22px, 2.0vw, 32px);
      margin-bottom: 3px;
    }
    .brand-name--ingrad {
      font-weight: 700;
      letter-spacing: 0.08em;
      font-size: clamp(11px, 0.95vw, 15px);
    }
  }

  &.brand-logo--little {
    .brand-name--little {
      font-family: $font-serif;
      font-size: clamp(18px, 1.6vw, 26px);
      font-weight: 400;
      letter-spacing: 0;
      text-transform: none;
    }
  }

  &.brand-logo--naiman {
    .brand-icon-n {
      font-family: $font-serif;
      font-size: clamp(18px, 1.7vw, 28px);
      font-weight: 400;
      line-height: 1;
      margin-bottom: 1px;
    }
    .brand-name {
      font-size: clamp(9px, 0.8vw, 12px);
      letter-spacing: 0.12em;
      font-weight: 600;
    }
    .brand-sub {
      font-size: clamp(6.5px, 0.55vw, 8.5px);
      letter-spacing: 0.08em;
    }
  }

  &.brand-logo--kazakov {
    .brand-name--kazakov {
      font-size: clamp(11px, 1.0vw, 15px);
      font-weight: 600;
      letter-spacing: 0.14em;
    }
  }

  &.brand-logo--whitewill {
    .brand-svg--whitewill {
      width: clamp(28px, 2.6vw, 42px);
      margin-bottom: 2px;
    }
    .brand-name--whitewill {
      font-size: clamp(10px, 0.85vw, 13px);
      font-weight: 500;
      letter-spacing: 0.02em;
      text-transform: none;
    }
  }

  &.brand-logo--a101 {
    .brand-svg--tree {
      width: clamp(26px, 2.4vw, 38px);
      margin-bottom: 2px;
    }
    .brand-name--a101 {
      font-size: clamp(12px, 1.05vw, 16px);
      font-weight: 800;
      letter-spacing: 0.02em;
    }
    .brand-sub--a101 {
      font-size: clamp(6px, 0.5vw, 8px);
      letter-spacing: 0.08em;
      font-weight: 600;
    }
  }

  &.brand-logo--bolshevik {
    .brand-name--bolshevik {
      font-size: clamp(11px, 0.95vw, 15px);
      font-weight: 700;
      letter-spacing: 0.06em;
      margin-bottom: 2px;
    }
    .brand-svg--wave {
      width: clamp(40px, 3.6vw, 56px);
    }
  }

  &.brand-logo--showme {
    .brand-name--showme {
      font-family: $font-serif;
      font-size: clamp(12px, 1.0vw, 16px);
      letter-spacing: 0.16em;
      font-weight: 400;
    }
  }

  &.brand-logo--seal {
    .brand-svg--seal {
      width: clamp(34px, 3.0vw, 48px);
    }
  }

  &.brand-logo--shield {
    .brand-sub--shield {
      font-size: clamp(6px, 0.5vw, 8px);
      letter-spacing: 0.14em;
      margin-bottom: 2px;
    }
    .brand-svg--shield {
      width: clamp(22px, 2.0vw, 32px);
    }
  }

  &.brand-logo--tt {
    .brand-svg--tt {
      width: clamp(30px, 2.7vw, 42px);
      margin: 0;
    }
  }

  &.brand-logo--coldy {
    .brand-name--coldy {
      font-size: clamp(13px, 1.2vw, 18px);
      font-weight: 800;
      letter-spacing: 0.12em;
    }
  }

  &.brand-logo--oproperties {
    .brand-name--oproperties {
      font-size: clamp(10.5px, 0.9vw, 14px);
      font-weight: 500;
      letter-spacing: 0;
      text-transform: lowercase;
    }
  }

  &.brand-logo--zorge {
    .brand-name--zorge {
      font-size: clamp(11px, 0.95vw, 15px);
      font-weight: 600;
      letter-spacing: 0.1em;
    }
  }

  &.brand-logo--thegame {
    .brand-svg--diamond {
      width: clamp(18px, 1.6vw, 24px);
      margin-bottom: 3px;
    }
    .brand-name--thegame {
      font-size: clamp(9.5px, 0.85vw, 12.5px);
      font-weight: 700;
      letter-spacing: 0.12em;
    }
  }
}
</style>
