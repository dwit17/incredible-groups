<template>
  <div class="legal-doc-page">
    <section class="legal-doc-hero section-pad-top">
      <div class="container container--fluid">
        <div class="legal-doc-hero__header">
          <h1 ref="titleRef" class="legal-doc-hero__title">
            TERMS OF ENGAGEMENT &amp; PRACTICE
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
              <li><a href="#section-1" class="legal-doc-nav__link">01. Atelier Practice &amp; Licensing</a></li>
              <li><a href="#section-2" class="legal-doc-nav__link">02. Intellectual Property Rights</a></li>
              <li><a href="#section-3" class="legal-doc-nav__link">03. Private Capital Syndication</a></li>
              <li><a href="#section-4" class="legal-doc-nav__link">04. Confidentiality &amp; NDA</a></li>
              <li><a href="#section-5" class="legal-doc-nav__link">05. Warranties &amp; Indemnity</a></li>
              <li><a href="#section-6" class="legal-doc-nav__link">06. Jurisdiction &amp; Dispute Resolution</a></li>
            </ul>
          </aside>

          <!-- Right: Document Content -->
          <div ref="contentRef" class="legal-doc-content">
            <div id="section-1" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Architectural Practice &amp; Statutory Governance</h2>
              <p>
                Incredible Groups operates as a chartered architectural atelier and spatial development advisory practice registered under statutory architectural authorities (Council of Architecture Registration No. IN-MH-2024-9842 and International Practice Charter NL-BA-08576321).
              </p>
              <p>
                All concept drawings, schematic blueprints, structural load calculations, biophilic masterplans, and spatial documentation are executed under professional indemnity frameworks and in accordance with National Building Code (NBC) safety benchmarks.
              </p>
            </div>

            <div id="section-2" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Intellectual Property &amp; Visual Rights</h2>
              <p>
                All architectural geometries, 3D computer-generated visualizations, physical maquette designs, material formulations, typographic signatures, and proprietary engineering methodologies presented on this website or in private client memoranda remain the exclusive intellectual property of Incredible Groups.
              </p>
              <p>
                Unauthorized copying, reproduction, distribution, public display, or derivative structural execution without prior written authorization from the principal atelier is strictly prohibited and subject to statutory copyright protection laws.
              </p>
            </div>

            <div id="section-3" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Private Capital Syndication &amp; Advisory Scope</h2>
              <p>
                Materials and project overviews presented on this website are for informational and private portfolio demonstration purposes only. Nothing contained herein constitutes a public offering of securities, solicitation of retail investment, or binding financial advisory commitment.
              </p>
              <p>
                Direct equity co-investments, mezzanine debt structures, and SPV participations in our affiliated PropTech or infrastructure ventures are restricted exclusively to accredited institutional investors, sovereign funds, and qualified family offices following statutory KYC and AML clearance.
              </p>
            </div>

            <div id="section-4" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Confidentiality &amp; Non-Disclosure Protocol</h2>
              <p>
                Due to the off-market nature of our private coastal estate acquisitions in Goa and sky mansion landmarks in Mumbai, all prospective client briefs, site locations, valuation thresholds, and ownership details are governed by strict non-disclosure obligations.
              </p>
              <p>
                Client information submitted via our consultation desks or encrypted channels will never be traded, shared, or publicly disclosed without explicit written consent.
              </p>
            </div>

            <div id="section-5" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Warranties &amp; Professional Indemnity</h2>
              <p>
                While Incredible Groups takes meticulous care to maintain accurate dimensions, material specifications, and project milestones, all spatial renders and timelines are conceptual until formalized in executed Development Management Agreements (DMA) or Architectural Commission Charters.
              </p>
            </div>

            <div id="section-6" class="legal-doc-block">
              <h2 class="legal-doc-block__title">Governing Law &amp; Dispute Resolution</h2>
              <p>
                These Terms of Engagement shall be governed by and construed in accordance with the substantive laws of India. Any controversy, claim, or dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts of Mumbai, Maharashtra, or arbitration under the International Arbitration Centre at GIFT City, Gandhinagar, Gujarat.
              </p>
            </div>

            <div class="legal-doc-footer">
              <NuxtLink to="/privacy" class="legal-doc-footer__link">
                View Privacy &amp; Data Stewardship Policy &rarr;
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
  title: 'Terms of Engagement - Incredible Groups Architectural Atelier',
  description: 'Statutory governance, architectural licensing, intellectual property rights, and capital syndicate terms of Incredible Groups.',
  ogTitle: 'Terms of Engagement - Incredible Groups',
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
