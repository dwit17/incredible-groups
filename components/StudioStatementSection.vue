<template>
  <section ref="sectionRef" class="studio-editorial-flow" aria-label="Atelier Overview, Scope &amp; Offices">
    <div class="studio-editorial-flow__inner">
      <!-- ============================================================= -->
      <!-- 1. UPPER INFORMATION GROUP (Matches Reference Image 1)       -->
      <!-- ============================================================= -->
      <div ref="topRowRef" class="studio-editorial-flow__top-row">
        <!-- Left Column: Founded, Founder, Services -->
        <div class="studio-editorial-flow__meta-col">
          <div class="studio-editorial-flow__meta-line">
            <span class="studio-editorial-flow__meta-label">Founded</span>
            <span class="studio-editorial-flow__meta-val">2014</span>
          </div>

          <div class="studio-editorial-flow__meta-line">
            <span class="studio-editorial-flow__meta-label">Founder</span>
            <span class="studio-editorial-flow__meta-val">Incredible Architectural Group</span>
          </div>

          <div class="studio-editorial-flow__meta-line studio-editorial-flow__meta-line--stacked">
            <span class="studio-editorial-flow__meta-label">Services</span>
            <p class="studio-editorial-flow__meta-text">
              From monolithic architectural vision to final execution — including facades, layouts, sketches, documentation, and immersive visualizations.
            </p>
          </div>
        </div>

        <!-- Right Column: Large Editorial Serif Lead Statement -->
        <div class="studio-editorial-flow__lead-col">
          <p class="studio-editorial-flow__lead-serif">
            An architecture bureau rooted in precision and emotion. We design with a deep understanding of context, function, and timeless form — shaping environments that feel effortless, intuitive, and distinctly refined. From urban masterplans to boutique sanctuaries, each project is tailored with vision and care.
          </p>
        </div>
      </div>

      <!-- Credentials 5-Column Grid (Achievement, Awards, Publications) -->
      <div ref="credsRowRef" class="studio-editorial-flow__credentials-row">
        <!-- Col 1: Achievement label -->
        <div class="studio-editorial-flow__cred-label-col">
          <span class="studio-editorial-flow__cred-label">Achievement</span>
        </div>

        <!-- Col 2: Awards label -->
        <div class="studio-editorial-flow__cred-label-col">
          <span class="studio-editorial-flow__cred-label">Awards</span>
        </div>

        <!-- Col 3: Awards Content List -->
        <div class="studio-editorial-flow__cred-content-col">
          <div class="studio-editorial-flow__cred-block">
            <h4 class="studio-editorial-flow__cred-item-title">AD100 Design Award 2024</h4>
            <p class="studio-editorial-flow__cred-item-desc">
              1st place in the category<br />
              &ldquo;Public Building Architecture&rdquo;<br />
              &ldquo;Completed Private Sanctuary over 600 sq.m&rdquo;
            </p>
          </div>

          <div class="studio-editorial-flow__cred-block">
            <h4 class="studio-editorial-flow__cred-item-title">Addawards 2023</h4>
            <p class="studio-editorial-flow__cred-item-desc">
              1st place in the competition<br />
              &ldquo;Space&rdquo;, &ldquo;Coastal Ring&rdquo;
            </p>
          </div>

          <div class="studio-editorial-flow__cred-block">
            <h4 class="studio-editorial-flow__cred-item-title">Addawards 2023</h4>
            <p class="studio-editorial-flow__cred-item-desc">
              1st place in the competition<br />
              &ldquo;Space&rdquo;, &ldquo;Garden Ring&rdquo;
            </p>
          </div>

          <div class="studio-editorial-flow__cred-summary">
            Over 80+ awards in global &amp; national competitions
          </div>
        </div>

        <!-- Col 4: Publications label -->
        <div class="studio-editorial-flow__cred-label-col">
          <span class="studio-editorial-flow__cred-label">Publications</span>
        </div>

        <!-- Col 5: Publications Content List -->
        <div class="studio-editorial-flow__cred-content-col">
          <div class="studio-editorial-flow__cred-block">
            <p class="studio-editorial-flow__cred-pub-item">
              &ldquo;Beautiful Apartments&rdquo;<br />
              No. 5 (216) 2024
            </p>
            <p class="studio-editorial-flow__cred-pub-item">
              Archi.Ru Club House Little<br />
              on Paveletskaya
            </p>
            <p class="studio-editorial-flow__cred-pub-item">
              Interior + Design Sales Office in<br />
              a Historic Building from 1917
            </p>
            <p class="studio-editorial-flow__cred-pub-item">
              Lovethatdesign.Com A101 Office
            </p>
          </div>

          <div class="studio-editorial-flow__cred-block studio-editorial-flow__cred-block--spaced">
            <h4 class="studio-editorial-flow__cred-item-title">Home &amp; Garden</h4>
            <p class="studio-editorial-flow__cred-item-desc">
              Bolshevik Landscape Design
            </p>
            <p class="studio-editorial-flow__cred-pub-item">
              Fireplaces No. 2 (113) 2024<br />
              Fireplace in Modern Style
            </p>
          </div>

          <div class="studio-editorial-flow__cred-summary">
            Over 20+ publications in the last year
          </div>
        </div>
      </div>

      <!-- ============================================================= -->
      <!-- 2. HUGE SERIF STATEMENT (Matches Reference Image 2)           -->
      <!-- Positioned lower down in document flow; reveals on scroll     -->
      <!-- ============================================================= -->
      <div ref="statementBlockRef" class="studio-editorial-flow__statement-block">
        <h2 class="studio-editorial-flow__huge-serif">
          <span class="studio-editorial-flow__serif-mask"><span class="studio-editorial-flow__serif-line">Architectural concept, facade and</span></span>
          <span class="studio-editorial-flow__serif-mask"><span class="studio-editorial-flow__serif-line">planning solutions, sketch project,</span></span>
          <span class="studio-editorial-flow__serif-mask"><span class="studio-editorial-flow__serif-line">working documentation,</span></span>
          <span class="studio-editorial-flow__serif-mask"><span class="studio-editorial-flow__serif-line">visualizations.</span></span>
        </h2>
      </div>

      <!-- ============================================================= -->
      <!-- 3. OFFICES DIRECTORY TABLE (Matches Reference Image 3)        -->
      <!-- ============================================================= -->
      <div ref="officesRowRef" class="studio-editorial-flow__offices-row">
        <div class="studio-editorial-flow__offices-label-col">
          <span class="studio-editorial-flow__offices-label">Offices</span>
        </div>

        <div class="studio-editorial-flow__offices-table-col">
          <div
            v-for="(office, idx) in offices"
            :key="idx"
            class="studio-editorial-flow__office-item"
            @mouseenter="onRowMouseEnter"
            @mouseleave="onRowMouseLeave"
          >
            <span class="studio-editorial-flow__office-type">{{ office.type }}</span>
            <span class="studio-editorial-flow__office-loc">{{ office.location }}</span>
            <span class="studio-editorial-flow__office-addr">{{ office.address }}</span>
            <span class="studio-editorial-flow__office-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

const sectionRef = ref<HTMLElement | null>(null);
const topRowRef = ref<HTMLElement | null>(null);
const credsRowRef = ref<HTMLElement | null>(null);
const statementBlockRef = ref<HTMLElement | null>(null);
const officesRowRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

const offices = [
  {
    type: 'Head office',
    location: 'Italy, Rome',
    address: '45 Casa di Maydwell, Via Thomas'
  },
  {
    type: 'Corporate Headquarters',
    location: 'Italy, Milan',
    address: '102 Mapleweg, Suite 5'
  },
  {
    type: 'Main Headquarters',
    location: 'Netherlands, Amsterdam',
    address: '78 Groenveldlaan, Appartement 12'
  },
  {
    type: 'Central Office',
    location: 'Netherlands, Rotterdam',
    address: '56 Eikenlaan, Verdieping 3'
  },
  {
    type: 'Administrative Office',
    location: 'Italy, Florence',
    address: '34 Dennenweg, Eenheid 7'
  },
  {
    type: 'Executive Office',
    location: 'Netherlands, Utrecht',
    address: '90 Berkenstraat, Kamer 4'
  },
  {
    type: 'Main Office',
    location: 'Italy, Venice',
    address: '12 Cederweg, Suite 2'
  },
  {
    type: 'Corporate Office',
    location: 'Netherlands, The Hague',
    address: '45 Lindeweg, Verdieping 1'
  },
  {
    type: 'Headquarters',
    location: 'Italy, Bologna',
    address: '23 Wilgenlaan, Appartement 3'
  },
  {
    type: 'Main Office',
    location: 'Netherlands, Eindhoven',
    address: '67 Kersenlaan, Suite 8'
  },
  {
    type: 'Central Office',
    location: 'Italy, Turin',
    address: '11 Sparrenweg, Verdieping 2'
  },
  {
    type: 'Corporate Headquarters',
    location: 'Netherlands, Groningen',
    address: '88 Sparstraat, Eenheid 6'
  },
  {
    type: 'Executive Headquarters',
    location: 'Italy, Naples',
    address: '33 Essenweg, Kamer 1'
  },
  {
    type: 'Main Office',
    location: 'Netherlands, Tilburg',
    address: '22 Populierenstraat, Suite 9'
  }
];

// GSAP Micro-interaction on Row Hover
const onRowMouseEnter = (e: MouseEvent) => {
  const row = e.currentTarget as HTMLElement;
  const icon = row.querySelector('.studio-editorial-flow__office-icon');
  if (icon) {
    gsap.to(icon, {
      x: 3,
      y: -3,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  }
};

const onRowMouseLeave = (e: MouseEvent) => {
  const row = e.currentTarget as HTMLElement;
  const icon = row.querySelector('.studio-editorial-flow__office-icon');
  if (icon) {
    gsap.to(icon, {
      x: 0,
      y: 0,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  }
};

onMounted(async () => {
  if (!import.meta.client) return;

  await nextTick();
  gsap.registerPlugin(ScrollTrigger);

  // 1. Split Top Row Text Elements into Masked Lines
  const leadSerifEl = topRowRef.value?.querySelector<HTMLElement>('.studio-editorial-flow__lead-serif');
  const metaLabels = topRowRef.value?.querySelectorAll<HTMLElement>('.studio-editorial-flow__meta-label') || [];
  const metaVals = topRowRef.value?.querySelectorAll<HTMLElement>('.studio-editorial-flow__meta-val') || [];
  const metaTextEl = topRowRef.value?.querySelector<HTMLElement>('.studio-editorial-flow__meta-text');

  let leadLines: HTMLElement[] = [];
  let metaLines: HTMLElement[] = [];
  let metaTextLines: HTMLElement[] = [];

  if (leadSerifEl) leadLines = splitTextIntoLines(leadSerifEl);
  if (metaTextEl) metaTextLines = splitTextIntoLines(metaTextEl);

  metaLabels.forEach(el => {
    metaLines.push(...splitTextIntoLines(el, { inline: true }));
  });
  metaVals.forEach(el => {
    metaLines.push(...splitTextIntoLines(el, { inline: true }));
  });

  // 2. Split Credentials Row Text Elements (Achievement, Awards, Publications, items & summaries)
  let credColLabels: HTMLElement[] = [];
  let credContentLines: HTMLElement[] = [];

  if (credsRowRef.value) {
    const credLabels = credsRowRef.value.querySelectorAll<HTMLElement>('.studio-editorial-flow__cred-label');
    credLabels.forEach(el => {
      credColLabels.push(...splitTextIntoLines(el, { inline: true }));
    });

    const credContentEls = credsRowRef.value.querySelectorAll<HTMLElement>(
      '.studio-editorial-flow__cred-item-title, .studio-editorial-flow__cred-item-desc, .studio-editorial-flow__cred-pub-item, .studio-editorial-flow__cred-summary'
    );
    credContentEls.forEach(el => {
      credContentLines.push(...splitTextIntoLines(el));
    });
  }

  // 3. Split Offices Table Elements
  let officeLabelLines: HTMLElement[] = [];
  let officeItemsLines: HTMLElement[] = [];
  if (officesRowRef.value) {
    const offLabel = officesRowRef.value.querySelector<HTMLElement>('.studio-editorial-flow__offices-label');
    if (offLabel) {
      officeLabelLines = splitTextIntoLines(offLabel, { inline: true });
    }
    const offCols = officesRowRef.value.querySelectorAll<HTMLElement>(
      '.studio-editorial-flow__office-type, .studio-editorial-flow__office-loc, .studio-editorial-flow__office-addr'
    );
    offCols.forEach(cell => {
      officeItemsLines.push(...splitTextIntoLines(cell, { inline: true }));
    });
  }

  ctx = gsap.context(() => {
    // 1. Lead Serif & Top Metadata Line-by-Line Reveal
    if (topRowRef.value) {
      const tlTop = gsap.timeline({
        scrollTrigger: {
          trigger: topRowRef.value,
          start: 'top 86%',
          toggleActions: 'play none none none'
        }
      });

      if (leadLines.length > 0) {
        tlTop.fromTo(
          leadLines,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.08, ease: 'power3.out' },
          0
        );
      }

      if (metaLines.length > 0) {
        tlTop.fromTo(
          metaLines,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.05, ease: 'power3.out' },
          0.1
        );
      }

      if (metaTextLines.length > 0) {
        tlTop.fromTo(
          metaTextLines,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.06, ease: 'power3.out' },
          0.2
        );
      }
    }

    // 2. Credentials Grid Line-by-Line Reveal
    if (credsRowRef.value) {
      const tlCreds = gsap.timeline({
        scrollTrigger: {
          trigger: credsRowRef.value,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      if (credColLabels.length > 0) {
        tlCreds.fromTo(
          credColLabels,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.95, stagger: 0.06, ease: 'power3.out' },
          0
        );
      }

      if (credContentLines.length > 0) {
        tlCreds.fromTo(
          credContentLines,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.03, ease: 'power3.out' },
          0.08
        );
      }
    }

    // 3. Huge Serif Statement Butter-Smooth Line-by-Line Reveal
    if (statementBlockRef.value) {
      const lines = statementBlockRef.value.querySelectorAll('.studio-editorial-flow__serif-line');

      if (lines.length) {
        gsap.fromTo(
          lines,
          { yPercent: 120, opacity: 0 },
          {
            scrollTrigger: {
              trigger: statementBlockRef.value,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.12,
            ease: 'power3.out'
          }
        );
      }
    }

    // 4. Offices Directory Table Smooth Line-by-Line Stagger on Scroll
    if (officesRowRef.value) {
      const tlOffices = gsap.timeline({
        scrollTrigger: {
          trigger: officesRowRef.value,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });

      if (officeLabelLines.length > 0) {
        tlOffices.fromTo(
          officeLabelLines,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          0
        );
      }

      if (officeItemsLines.length > 0) {
        tlOffices.fromTo(
          officeItemsLines,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.015, ease: 'power3.out' },
          0.05
        );
      }
    }
  }, sectionRef.value ?? undefined);

  // Recalculate triggers after full layout stabilization
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});

onUnmounted(() => {
  if (ctx) {
    ctx.revert();
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.studio-editorial-flow {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: $color-text-primary;
  padding-top: clamp(60px, 8vh, 100px);
  padding-bottom: clamp(100px, 16vh, 200px);

  &__inner {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding-left: clamp(20px, 1.8vw, 32px);
    padding-right: clamp(20px, 1.8vw, 32px);
  }

  // -------------------------------------------------------------
  // 1. UPPER INFORMATION ROW (Founded/Founder/Services + Lead Serif)
  // -------------------------------------------------------------
  &__top-row {
    display: grid;
    grid-template-columns: minmax(300px, 420px) 1fr;
    gap: clamp(40px, 6vw, 120px);
    align-items: start;
    margin-bottom: clamp(80px, 13vh, 160px);

    @include tablet {
      grid-template-columns: 1fr;
      gap: 40px;
      margin-bottom: 60px;
    }
  }

  &__meta-col {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  &__meta-line {
    display: grid;
    grid-template-columns: 95px 1fr;
    gap: 16px;
    align-items: baseline;
    will-change: transform, opacity;

    &--stacked {
      grid-template-columns: 95px 1fr;
    }

    @include mobile {
      grid-template-columns: 85px 1fr;
    }
  }

  &__meta-label {
    font-family: $font-sans;
    font-size: 12px;
    font-weight: 400;
    color: #111111;
  }

  &__meta-val {
    font-family: $font-sans;
    font-size: 12px;
    font-weight: 400;
    color: #111111;
  }

  &__meta-text {
    font-family: $font-sans;
    font-size: 12px;
    line-height: 1.45;
    color: #111111;
    margin: 0;
  }

  &__lead-col {
    max-width: 980px;
  }

  &__lead-serif {
    font-family: $font-serif;
    font-size: clamp(26px, 2.3vw, 42px);
    font-weight: 400;
    line-height: 1.22;
    letter-spacing: -0.015em;
    color: #111111;
    margin: 0;
    will-change: transform, opacity;
  }

  // -------------------------------------------------------------
  // 2. CREDENTIALS 5-COLUMN ROW (Achievement, Awards, Publications)
  // -------------------------------------------------------------
  &__credentials-row {
    display: grid;
    grid-template-columns: 180px 100px 360px 120px 1fr;
    gap: 20px clamp(20px, 3vw, 60px);
    align-items: start;
    margin-bottom: clamp(140px, 24vh, 320px);

    @include tablet {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 100px;
    }

    @include mobile {
      grid-template-columns: 1fr;
      gap: 24px;
      margin-bottom: 80px;
    }
  }

  &__cred-label-col,
  &__cred-content-col {
    will-change: transform, opacity;
  }

  &__cred-label {
    font-family: $font-sans;
    font-size: 12px;
    font-weight: 400;
    color: #111111;
  }

  &__cred-content-col {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__cred-block {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &--spaced {
      margin-top: 1rem;
    }
  }

  &__cred-item-title {
    font-family: $font-sans;
    font-size: 12px;
    font-weight: 400;
    color: #111111;
    margin: 0;
  }

  &__cred-item-desc {
    font-family: $font-sans;
    font-size: 11px;
    line-height: 1.45;
    color: #888888;
    margin: 0;
  }

  &__cred-pub-item {
    font-family: $font-sans;
    font-size: 11px;
    line-height: 1.45;
    color: #555555;
    margin: 0 0 0.5rem 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__cred-summary {
    font-family: $font-sans;
    font-size: 11px;
    color: #888888;
    margin-top: 0.5rem;
  }

  // -------------------------------------------------------------
  // 3. HUGE SERIF STATEMENT (Natural Document Position + Smooth Reveal)
  // -------------------------------------------------------------
  &__statement-block {
    width: 100%;
    max-width: 1780px;
    margin-bottom: clamp(140px, 22vh, 280px);
  }

  &__huge-serif {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: $font-serif;
    font-size: clamp(52px, 6.4vw, 115px);
    font-weight: 400;
    line-height: 0.88;
    letter-spacing: -0.035em;
    color: #111111;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  &__serif-mask {
    display: block;
    overflow: hidden;
    line-height: inherit;
    padding-bottom: 0.06em;
  }

  &__serif-line {
    display: block;
    white-space: normal;
    will-change: transform, opacity;

    @include desktop {
      white-space: nowrap;
    }
  }

  // -------------------------------------------------------------
  // 4. OFFICES DIRECTORY TABLE (Matches Reference Image 3)
  // -------------------------------------------------------------
  &__offices-row {
    display: grid;
    grid-template-columns: minmax(180px, 260px) 1fr;
    gap: clamp(20px, 3.5vw, 60px);
    align-items: start;

    @include tablet {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  &__offices-label-col {
    padding-top: 0.75rem;
  }

  &__offices-label {
    font-family: $font-sans;
    font-size: 12px;
    font-weight: 400;
    color: #111111;
    display: inline-block;
    will-change: transform, opacity;
  }

  &__offices-table-col {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  &__office-item {
    display: grid;
    grid-template-columns: 2fr 2fr 3.2fr 24px;
    gap: 1.5rem;
    align-items: center;
    padding: 0.95rem 0.65rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    font-family: $font-sans;
    font-size: 12px;
    color: #111111;
    border-radius: 2px;
    transition: background-color 0.22s cubic-bezier(0.16, 1, 0.3, 1),
                color 0.22s cubic-bezier(0.16, 1, 0.3, 1),
                padding-left 0.22s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: default;
    will-change: transform, opacity;

    // Hover Highlight State
    &:hover {
      background-color: #f7f7f5;
      color: #000000;
      padding-left: 0.95rem;

      .studio-editorial-flow__office-type {
        color: #000000;
        font-weight: 500;
      }

      .studio-editorial-flow__office-loc {
        color: #222222;
      }

      .studio-editorial-flow__office-addr {
        color: #444444;
      }

      .studio-editorial-flow__office-icon {
        color: #000000;
      }
    }

    @include tablet {
      grid-template-columns: 1.5fr 1.5fr 2fr 20px;
      gap: 1rem;
    }

    @include mobile {
      grid-template-columns: 1fr;
      gap: 0.25rem;
      padding: 0.75rem 0.5rem;
    }
  }

  &__office-type {
    font-weight: 400;
    color: #111111;
    transition: color 0.2s ease, font-weight 0.2s ease;
  }

  &__office-loc {
    color: #555555;
    transition: color 0.2s ease;
  }

  &__office-addr {
    color: #888888;
    transition: color 0.2s ease;
  }

  &__office-icon {
    display: flex;
    justify-content: flex-end;
    color: #999999;
    will-change: transform;
    transition: color 0.2s ease;

    @include mobile {
      display: none;
    }
  }
}
</style>
