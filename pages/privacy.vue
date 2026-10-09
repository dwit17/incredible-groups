<template>
  <div class="legal-doc-page">
    <section class="legal-doc-hero section-pad-top">
      <div class="container container--fluid">
        <div class="legal-doc-hero__header">
          <h1 ref="titleRef" class="legal-doc-hero__title">
            PRIVACY &amp; CLIENT DATA POLICY
          </h1>
        </div>
      </div>
    </section>

    <section class="legal-doc-body section-pad-bottom">
      <div class="container container--fluid">
        <div class="legal-doc-grid">
          <!-- Left: Sticky Section Navigator -->
          <aside class="legal-doc-nav">
            <ul class="legal-doc-nav__list">
              <li><a href="#section-1" class="legal-doc-nav__link">Principle of Absolute Discretion</a></li>
              <li><a href="#section-2" class="legal-doc-nav__link">Data Collected via Briefs</a></li>
              <li><a href="#section-3" class="legal-doc-nav__link">Purpose of Processing</a></li>
              <li><a href="#section-4" class="legal-doc-nav__link">Encryption &amp; Security</a></li>
              <li><a href="#section-5" class="legal-doc-nav__link">Cookies &amp; Telemetry</a></li>
              <li><a href="#section-6" class="legal-doc-nav__link">Data Rights &amp; Officer Contact</a></li>
            </ul>
          </aside>

          <!-- Right: Document Content -->
          <div ref="contentRef" class="legal-doc-content">
            <div id="section-1" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Principle of Absolute Discretion</h2>
              <p>
                At Incredible Groups, we hold client privacy and confidentiality as foundational tenets of our architectural atelier and private investment syndicate. We do not sell, license, rent, or trade personal data or confidential transaction briefs to any commercial third parties.
              </p>
              <p>
                This policy outlines how client inquiries, private acquisition briefs, and digital communications are collected, safeguarded, and processed under the Digital Personal Data Protection Act (DPDP), 2023 of India and the European Union General Data Protection Regulation (GDPR).
              </p>
            </div>

            <div id="section-2" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Information Collected via Client Briefs</h2>
              <p>
                When you initiate a private dialogue, submit an architectural brief, or schedule an advisory consultation, we collect only the information necessary to fulfill your request:
              </p>
              <ul class="legal-doc-list">
                <li>Direct contact details (Full Name, Phone/WhatsApp Number, Corporate/Personal Email).</li>
                <li>Advisory parameters (Preferred acquisition location, square footage, investment horizon).</li>
                <li>Confidential brief notes regarding spatial requirements or venture co-investment preferences.</li>
              </ul>
            </div>

            <div id="section-3" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Purpose of Processing &amp; Advisory Scope</h2>
              <p>
                Your data is utilized strictly for:
              </p>
              <ul class="legal-doc-list">
                <li>Facilitating direct private client communication with our principal architects and capital allocation partners.</li>
                <li>Arranging private viewings of off-market coastal estates in Goa and residential sky mansions in Mumbai.</li>
                <li>Providing institutional co-investment memoranda to qualified family offices and accredited sovereign syndicates.</li>
              </ul>
            </div>

            <div id="section-4" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Encryption, Storage &amp; Infrastructure Security</h2>
              <p>
                All data submitted through our digital consultation channels is encrypted in transit via Transport Layer Security (TLS 1.3) with cryptographic cipher suites. Client information is stored in hardened, SOC-2 certified cloud infrastructure with strict role-based access control.
              </p>
            </div>

            <div id="section-5" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Cookies &amp; Telemetry Governance</h2>
              <p>
                Our platform uses only essential functional cookies required for high-performance rendering (WebGL shader canvas initialization and smooth page state coordination) and privacy-preserving aggregated telemetry (Google Analytics 4 with IP anonymization enabled). We do not deploy third-party retargeting pixels or intrusive advertising trackers.
              </p>
            </div>

            <div id="section-6" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Your Rights &amp; Data Protection Officer Contact</h2>
              <p>
                You retain the right to request access to, rectification of, or complete deletion of any personal information or consultation briefs held by our atelier.
              </p>
              <p>
                For data protection inquiries or to exercise your rights, please reach our Data Stewardship Desk at <a href="mailto:privacy@incrediblegroups.com" class="legal-doc-inline-link">privacy@incrediblegroups.com</a> or via our Mumbai Executive HQ.
              </p>
            </div>

            <div class="legal-doc-footer">
              <NuxtLink to="/terms" class="legal-doc-footer__link">
                View Terms of Engagement &amp; Practice &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Monumental Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';
import AppFooter from '~/components/AppFooter.vue';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

useSeoMeta({
  title: 'Privacy & Data Stewardship Policy - Incredible Groups',
  description: 'Client confidentiality, data protection governance, and privacy stewardship policy of Incredible Groups Architectural Atelier.',
  ogTitle: 'Privacy Policy - Incredible Groups',
  ogImage: '/placeholders/og-cover.png'
});

const titleRef = ref<HTMLElement | null>(null);
const contentRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!import.meta.client) return;

  ctx = gsap.context(() => {
    if (titleRef.value) {
      const lines = splitTextIntoLines(titleRef.value);
      gsap.fromTo(
        lines,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
      );
    }

    if (contentRef.value) {
      const blocks = contentRef.value.querySelectorAll('.legal-doc-block');
      gsap.fromTo(
        blocks,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.value,
            start: 'top 80%'
          }
        }
      );
    }
  });
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

.legal-doc-page {
  position: relative;
  width: 100%;
  background-color: $color-bg-primary;
  color: $color-text-primary;
  overflow: hidden;
}

.legal-doc-hero {
  padding-top: clamp(140px, 18vh, 220px);
  border-bottom: 1px solid $color-border-light;
  padding-bottom: clamp(32px, 5vh, 60px);

  &__header {
    max-width: 900px;
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(2.5rem, 5.5vw, 5rem);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.025em;
    margin: 0;
    color: $color-text-primary;
  }
}

.legal-doc-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: clamp(40px, 6vw, 80px);
  padding-top: clamp(40px, 6vh, 80px);

  @include tablet {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.legal-doc-nav {
  position: sticky;
  top: 120px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @include tablet {
    position: static;
  }

  &__title {
    font-family: $font-mono;
    font-size: 0.6875rem;
    letter-spacing: 0.14em;
    color: $color-accent;
    text-transform: uppercase;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__link {
    font-family: $font-sans;
    font-size: 0.8125rem;
    color: $color-text-secondary;
    text-decoration: none;
    line-height: 1.4;
    transition: color 0.2s ease;

    &:hover {
      color: $color-text-primary;
    }
  }
}

.legal-doc-content {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  max-width: 800px;
}

.legal-doc-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid $color-border-light;

  &:last-of-type {
    border-bottom: none;
  }

  &__num {
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $color-accent;
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(1.5rem, 2.2vw, 2.25rem);
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    color: $color-text-primary;
  }

  p {
    font-family: $font-sans;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.75;
    color: $color-text-primary;
    margin: 0;
  }
}

.legal-doc-list {
  list-style: square;
  padding-left: 1.25rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    font-family: $font-sans;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.65;
    color: $color-text-primary;
  }
}

.legal-doc-inline-link {
  color: $color-text-primary;
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: $color-accent;
  }
}

.legal-doc-footer {
  padding-top: 2rem;

  &__link {
    font-family: $font-sans;
    font-size: 0.875rem;
    font-weight: 500;
    color: $color-text-primary;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.2s ease;

    &:hover {
      color: $color-accent;
    }
  }
}

.label-mono {
  font-family: $font-mono;
  font-size: 0.6875rem;
  letter-spacing: 0.16em;
  color: $color-accent;
  text-transform: uppercase;
}
</style>
