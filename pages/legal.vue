<template>
  <div class="legal-page">
    <div class="legal-page__container">
      <div class="legal-page__header">
        <h1 class="legal-page__title">Legal &amp; Regulatory Disclosures</h1>
        <p class="legal-page__subtitle">
          Incredible Groups • Architectural Atelier &amp; Alternative Capital Allocation
        </p>
      </div>

      <div class="legal-page__content">
        <section class="legal-page__section">
          <h2 class="legal-page__section-title">1. Architectural Practice &amp; Governance</h2>
          <p>
            Incredible Groups operates as a chartered architectural bureau and development advisory practice licensed under statutory architectural councils (Registration Nos. IN-MH-2024-9842 &amp; NL-BA-08576321). All concept drawings, structural calculations, spatial layouts, and technical documentation are executed under professional indemnity frameworks.
          </p>
        </section>

        <section class="legal-page__section">
          <h2 class="legal-page__section-title">2. Intellectual Property Rights</h2>
          <p>
            All architectural concepts, 3D visualizations, material formulations, typographic identities, and proprietary designs showcased across this platform represent the intellectual property of Incredible Groups and its affiliated portfolio entities. Unauthorized reproduction, transmission, or derivative execution is strictly prohibited.
          </p>
        </section>

        <section class="legal-page__section">
          <h2 class="legal-page__section-title">3. Privacy &amp; Data Stewardship</h2>
          <p>
            We process client inquiries and communication data with strict confidentiality in accordance with global data protection standards (GDPR and national data protection regulations). Inquiries submitted through our direct communication channels are never disclosed to third parties without prior written consent.
          </p>
        </section>

        <div class="legal-page__back">
          <NuxtLink to="/" class="legal-page__back-link">
            ← Return to Atelier Index
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Global Monolithic Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue';

useSeoMeta({
  title: 'Legal Documents - Incredible Groups',
  description: 'Legal disclosures, architectural licensing, and intellectual property governance of Incredible Groups.'
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;

.legal-page {
  position: relative;
  min-height: 100vh;
  background-color: #ffffff;
  color: #111111;
  padding-top: clamp(100px, 16vh, 220px);
  padding-bottom: 0;

  &__container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding-left: clamp(16px, 3vw, 40px);
    padding-right: clamp(16px, 3vw, 40px);
  }

  &__header {
    margin-bottom: clamp(32px, 6vh, 80px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding-bottom: 2rem;
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(2rem, 4.5vw, 54px);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.025em;
    margin: 0 0 1rem 0;
    overflow-wrap: anywhere;
  }

  &__subtitle {
    font-family: $font-sans;
    font-size: 0.85rem;
    color: #777777;
    margin: 0;
    line-height: 1.5;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 75ch;
  }

  &__section-title {
    font-family: $font-sans;
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
    color: #111111;
  }

  p {
    font-family: $font-sans;
    font-size: 0.95rem;
    line-height: 1.75;
    color: #444444;
    margin: 0;
    overflow-wrap: anywhere;
  }

  &__back {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  &__back-link {
    font-family: $font-sans;
    font-size: 0.9rem;
    color: #111111;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.5rem 0;
    transition: color 0.2s ease;

    &:hover {
      color: $color-accent;
    }
  }
}
</style>
