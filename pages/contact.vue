<template>
  <div class="contact-page">
    <!-- ============================================================= -->
    <!-- 1. HERO SECTION: Direct Advisory Header                        -->
    <!-- ============================================================= -->
    <section class="contact-hero section-pad-top">
      <div class="container container--fluid">
        <div class="contact-hero__header">
          <span class="label-mono">CONFIDENTIAL CLIENT DESK</span>
          <h1 ref="heroTitleRef" class="contact-hero__title">
            INITIATE A PRIVATE DIALOGUE
          </h1>
          <p ref="heroSubtitleRef" class="contact-hero__subtitle">
            Connect directly with our capital allocation partners, principal architects, and private client concierge for bespoke commissions, off-market acquisitions, or venture syndication.
          </p>
        </div>

        <!-- Quick Access Direct Cards -->
        <div ref="quickBarRef" class="contact-quick-bar">
          <a
            href="https://wa.me/919737972097?text=Hello%20Incredible%20Groups%20Advisory%2C%20I%20would%20like%20to%20schedule%20a%20private%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            class="contact-quick-card contact-quick-card--highlight"
          >
            <div class="contact-quick-card__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.974.531 1.777.788 2.793.788h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.774-5.773-5.774zm3.376 8.21c-.145.409-.846.75-1.164.793-.312.042-.719.062-2.316-.599-1.928-.796-3.167-2.766-3.262-2.894-.096-.129-.785-1.045-.785-1.993 0-.948.497-1.414.673-1.606.177-.193.386-.241.514-.241.129 0 .257.002.37.008.119.006.278-.045.435.334.161.386.551 1.343.599 1.439.048.096.08.209.016.337-.064.129-.096.209-.193.322-.096.113-.203.252-.29.338-.096.096-.197.201-.085.393.112.193.501.826 1.077 1.34 1.152 1.028 1.458 1.073 1.667 1.177.209.104.331.088.453-.052.122-.14.524-.611.664-.82.14-.209.28-.175.47-.104.19.071 1.213.572 1.422.677.209.105.348.157.399.245.051.088.051.51-.094.919zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.306C8.423 21.536 10.15 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </div>
            <div class="contact-quick-card__text">
              <span class="contact-quick-card__label">Instant WhatsApp Desk</span>
              <span class="contact-quick-card__value">+91 97379 72097</span>
            </div>
            <span class="contact-quick-card__arrow">&rarr;</span>
          </a>

          <a href="tel:+919737972097" class="contact-quick-card">
            <div class="contact-quick-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div class="contact-quick-card__text">
              <span class="contact-quick-card__label">Private Advisory Line</span>
              <span class="contact-quick-card__value">+91 97379 72097</span>
            </div>
          </a>

          <a href="mailto:atelier@incrediblegroups.com" class="contact-quick-card">
            <div class="contact-quick-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div class="contact-quick-card__text">
              <span class="contact-quick-card__label">Confidential Email</span>
              <span class="contact-quick-card__value">atelier@incrediblegroups.com</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- 2. MAIN CONSULTATION & ATELIER HUBS SECTION                    -->
    <!-- ============================================================= -->
    <section class="contact-main section-pad">
      <div class="container container--fluid">
        <div class="contact-main__grid">
          <!-- Left: Atelier Hubs & Physical Presence -->
          <div ref="hubsColRef" class="contact-hubs">
            <span class="label-mono">PHYSICAL ATELIER PRESENCE</span>
            <h2 class="contact-hubs__title">Studio &amp; Capital Hubs</h2>

            <div class="contact-hubs__list">
              <!-- Mumbai HQ -->
              <div class="contact-hub-card">
                <div class="contact-hub-card__top">
                  <span class="contact-hub-card__tag">MUMBAI EXECUTIVE HQ</span>
                  <span class="contact-hub-card__idx">01</span>
                </div>
                <h3 class="contact-hub-card__name">Worli Sea Face Landmark</h3>
                <p class="contact-hub-card__address">
                  Palais Royale, Level 48, Worli Sea Face, Mumbai, Maharashtra 400030
                </p>
                <div class="contact-hub-card__meta">
                  <span>Mon – Fri: 10:00 – 19:00 IST</span>
                  <a href="mailto:mumbai@incrediblegroups.com" class="contact-hub-card__email">mumbai@incrediblegroups.com</a>
                </div>
              </div>

              <!-- Goa Studio -->
              <div class="contact-hub-card">
                <div class="contact-hub-card__top">
                  <span class="contact-hub-card__tag">GOA ARCHITECTURAL STUDIO</span>
                  <span class="contact-hub-card__idx">02</span>
                </div>
                <h3 class="contact-hub-card__name">Assagao Badem Sanctuary</h3>
                <p class="contact-hub-card__address">
                  Badem Coastal Enclave, Assagao, North Goa 403507
                </p>
                <div class="contact-hub-card__meta">
                  <span>Private Viewings by Appointment</span>
                  <a href="mailto:goa@incrediblegroups.com" class="contact-hub-card__email">goa@incrediblegroups.com</a>
                </div>
              </div>

              <!-- GIFT City Hub -->
              <div class="contact-hub-card">
                <div class="contact-hub-card__top">
                  <span class="contact-hub-card__tag">GIFT CITY CAPITAL HUB</span>
                  <span class="contact-hub-card__idx">03</span>
                </div>
                <h3 class="contact-hub-card__name">International Financial Centre</h3>
                <p class="contact-hub-card__address">
                  Brigade IFC, Tower 1, Level 14, GIFT City, Gandhinagar, Gujarat 382355
                </p>
                <div class="contact-hub-card__meta">
                  <span>Alternative Investments Desk</span>
                  <a href="mailto:invest@incrediblegroups.com" class="contact-hub-card__email">invest@incrediblegroups.com</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Consultation Form -->
          <div ref="formColRef" class="contact-form-wrap">
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="contact-form__header">
                <span class="label-mono">TRANSMIT BRIEF</span>
                <h2 class="contact-form__title">Schedule Consultation</h2>
                <p class="contact-form__desc">
                  Select your advisory scope and outline your requirements. Our principals respond within 4 business hours.
                </p>
              </div>

              <!-- Category Pills Selector -->
              <div class="form-group">
                <label class="form-label">Advisory Scope *</label>
                <div class="contact-pills">
                  <button
                    v-for="cat in interestCategories"
                    :key="cat"
                    type="button"
                    class="contact-pill"
                    :class="{ 'contact-pill--active': formData.interest === cat }"
                    @click="formData.interest = cat"
                  >
                    {{ cat }}
                  </button>
                </div>
              </div>

              <!-- Form Inputs Grid -->
              <div class="contact-form__grid">
                <!-- Full Name -->
                <div class="form-group">
                  <label for="c-name" class="form-label">Full Name *</label>
                  <input
                    id="c-name"
                    v-model="formData.name"
                    type="text"
                    required
                    placeholder="Vikramaditya Mehta"
                    class="form-input"
                  />
                </div>

                <!-- Phone / WhatsApp -->
                <div class="form-group">
                  <label for="c-phone" class="form-label">Phone / WhatsApp *</label>
                  <input
                    id="c-phone"
                    v-model="formData.phone"
                    type="tel"
                    required
                    placeholder="+91 98000 00000"
                    class="form-input"
                  />
                </div>

                <!-- Email -->
                <div class="form-group form-group--full">
                  <label for="c-email" class="form-label">Email Address *</label>
                  <input
                    id="c-email"
                    v-model="formData.email"
                    type="email"
                    required
                    placeholder="v.mehta@familyoffice.com"
                    class="form-input"
                  />
                </div>

                <!-- Estimated Scale / Budget (Optional) -->
                <div class="form-group form-group--full">
                  <label class="form-label">Estimated Investment / Project Horizon</label>
                  <div class="contact-scale-options">
                    <button
                      v-for="scale in scaleOptions"
                      :key="scale"
                      type="button"
                      class="contact-scale-btn"
                      :class="{ 'contact-scale-btn--active': formData.scale === scale }"
                      @click="formData.scale = scale"
                    >
                      {{ scale }}
                    </button>
                  </div>
                </div>

                <!-- Confidential Message -->
                <div class="form-group form-group--full">
                  <label for="c-message" class="form-label">Confidential Brief / Location Specifications</label>
                  <textarea
                    id="c-message"
                    v-model="formData.message"
                    rows="4"
                    placeholder="Detail acquisition criteria, target square footage, architectural vision, or syndication parameters..."
                    class="form-input form-textarea"
                  ></textarea>
                </div>
              </div>

              <!-- Submit & WhatsApp Dispatch -->
              <div class="contact-form__footer">
                <button
                  type="submit"
                  class="contact-form__btn"
                  :disabled="isSubmitting"
                >
                  <span>{{ isSubmitting ? 'Transmitting Brief...' : 'Dispatch Brief to Private Desk' }}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p v-if="submissionFeedback" class="contact-form__feedback">
                  {{ submissionFeedback }}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Monumental Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';
import AppFooter from '~/components/AppFooter.vue';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

useSeoMeta({
  title: 'Contact & Advisory - Incredible Groups Architectural Atelier',
  description: 'Initiate a confidential dialogue with Incredible Groups. Direct WhatsApp desk, private client concierge, and studio hubs in Mumbai, Goa, and GIFT City.',
  ogTitle: 'Contact & Advisory - Incredible Groups',
  ogImage: '/placeholders/og-cover.png'
});

const interestCategories = [
  'Residential Sky Mansions',
  'Coastal Villa Sanctuaries',
  'Architectural Commission',
  'Venture Equity Syndication',
  'Structured Real Estate Debt',
  'General Inquiry'
];

const scaleOptions = [
  '₹25 Cr – ₹50 Cr',
  '₹50 Cr – ₹150 Cr',
  '₹150 Cr+'
];

const formData = reactive({
  name: '',
  phone: '',
  email: '',
  interest: 'Residential Sky Mansions',
  scale: '₹50 Cr – ₹150 Cr',
  message: ''
});

const isSubmitting = ref(false);
const submissionFeedback = ref('');

const handleSubmit = async () => {
  isSubmitting.value = true;
  submissionFeedback.value = 'Preparing transmission...';

  try {
    // 1. Dispatch payload to Nuxt server API route
    await $fetch('/api/whatsapp', {
      method: 'POST',
      body: formData
    }).catch(() => {
      // Continue gracefully even if server runs in static export
    });

    // 2. Build prefilled WhatsApp message and open
    const prefilledText = `*Incredible Groups Client Brief*\n\n` +
      `*Client:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Scope:* ${formData.interest}\n` +
      `*Target Horizon:* ${formData.scale}\n` +
      `*Brief:* ${formData.message || 'Private consultation requested.'}`;

    const waUrl = `https://wa.me/919737972097?text=${encodeURIComponent(prefilledText)}`;
    submissionFeedback.value = 'Opening confidential WhatsApp connection...';

    if (import.meta.client) {
      window.open(waUrl, '_blank');
    }
  } catch (err) {
    submissionFeedback.value = 'Connecting to WhatsApp desk...';
  } finally {
    isSubmitting.value = false;
  }
};

// GSAP Animations
const heroTitleRef = ref<HTMLElement | null>(null);
const heroSubtitleRef = ref<HTMLElement | null>(null);
const quickBarRef = ref<HTMLElement | null>(null);
const hubsColRef = ref<HTMLElement | null>(null);
const formColRef = ref<HTMLElement | null>(null);

let ctx: gsap.Context | null = null;

onMounted(async () => {
  await nextTick();
  if (!import.meta.client) return;

  ctx = gsap.context(() => {
    // 1. Title Split Reveal
    if (heroTitleRef.value) {
      const titleLines = splitTextIntoLines(heroTitleRef.value);
      gsap.fromTo(
        titleLines,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
      );
    }

    if (heroSubtitleRef.value) {
      gsap.fromTo(
        heroSubtitleRef.value,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.35 }
      );
    }

    // 2. Quick cards stagger
    if (quickBarRef.value) {
      const cards = quickBarRef.value.querySelectorAll('.contact-quick-card');
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.45 }
      );
    }

    // 3. Main Hubs and Form Reveal
    if (hubsColRef.value) {
      const hubCards = hubsColRef.value.querySelectorAll('.contact-hub-card');
      gsap.fromTo(
        hubCards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hubsColRef.value,
            start: 'top 80%'
          }
        }
      );
    }

    if (formColRef.value) {
      gsap.fromTo(
        formColRef.value,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formColRef.value,
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

.contact-page {
  position: relative;
  width: 100%;
  background-color: $color-bg-primary;
  color: $color-text-primary;
  overflow: hidden;
}

// 1. HERO
.contact-hero {
  padding-top: clamp(140px, 18vh, 220px);
  border-bottom: 1px solid $color-border-light;
  padding-bottom: clamp(40px, 6vh, 80px);

  &__header {
    max-width: 980px;
    margin-bottom: clamp(32px, 5vh, 60px);
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(2.5rem, 6vw, 5.5rem);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.025em;
    margin: 0.75rem 0 1.25rem 0;
    color: $color-text-primary;
  }

  &__subtitle {
    font-family: $font-sans;
    font-size: clamp(1rem, 1.3vw, 1.15rem);
    font-weight: 300;
    line-height: 1.65;
    color: $color-text-secondary;
    max-width: 720px;
    margin: 0;
  }
}

.contact-quick-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2vw, 24px);

  @include tablet {
    grid-template-columns: 1fr;
  }
}

.contact-quick-card {
  background: #ffffff;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  text-decoration: none;
  color: $color-text-primary;
  transition: transform 0.25s $ease-editorial, box-shadow 0.25s $ease-editorial, border-color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
    border-color: rgba(17, 17, 17, 0.3);
  }

  &--highlight {
    background-color: #0c0d0e;
    color: #ffffff;
    border-color: #0c0d0e;

    .contact-quick-card__icon {
      background-color: rgba(255, 255, 255, 0.1);
      color: #25d366;
    }

    .contact-quick-card__label {
      color: #aaaaaa;
    }

    .contact-quick-card__value {
      color: #ffffff;
    }

    .contact-quick-card__arrow {
      color: $color-accent;
    }

    &:hover {
      border-color: $color-accent;
    }
  }

  &__icon {
    width: 44px;
    height: 44px;
    border-radius: 4px;
    background-color: $color-bg-alt;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-text-primary;
    flex-shrink: 0;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    flex-grow: 1;
  }

  &__label {
    font-family: $font-mono;
    font-size: 0.6875rem;
    letter-spacing: 0.08em;
    color: $color-text-secondary;
    text-transform: uppercase;
  }

  &__value {
    font-family: $font-sans;
    font-size: 0.95rem;
    font-weight: 500;
  }

  &__arrow {
    font-size: 1.25rem;
    color: $color-text-secondary;
  }
}

// 2. MAIN GRID
.contact-main {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1.35fr;
    gap: clamp(40px, 6vw, 90px);
    align-items: start;

    @include tablet {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }
}

// HUBS
.contact-hubs {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__title {
    font-family: $font-serif;
    font-size: clamp(2rem, 3.2vw, 3.25rem);
    font-weight: 400;
    line-height: 1.1;
    margin: 0;
    color: $color-text-primary;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 0.5rem;
  }
}

.contact-hub-card {
  background: #ffffff;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.25s ease;

  &:hover {
    border-color: rgba(17, 17, 17, 0.3);
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__tag {
    font-family: $font-mono;
    font-size: 0.6875rem;
    letter-spacing: 0.12em;
    color: $color-accent;
  }

  &__idx {
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $color-text-dim;
  }

  &__name {
    font-family: $font-sans;
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0;
    color: $color-text-primary;
  }

  &__address {
    font-family: $font-sans;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.6;
    color: $color-text-secondary;
    margin: 0;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-top: 0.75rem;
    border-top: 1px solid $color-border-light;
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $color-text-dim;
  }

  &__email {
    color: $color-text-primary;
    text-decoration: underline;
    text-underline-offset: 3px;
    font-family: $font-sans;
    font-size: 0.8125rem;
  }
}

// FORM
.contact-form-wrap {
  width: 100%;
}

.contact-form {
  background: #ffffff;
  border: 1px solid $color-border-light;
  border-radius: 4px;
  padding: clamp(24px, 4vw, 48px);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__title {
    font-family: $font-serif;
    font-size: clamp(1.85rem, 3vw, 2.75rem);
    font-weight: 400;
    line-height: 1.1;
    margin: 0;
    color: $color-text-primary;
  }

  &__desc {
    font-family: $font-sans;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.6;
    color: $color-text-secondary;
    margin: 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 0.5rem;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: #0c0d0e;
    color: #ffffff;
    border: 1px solid #0c0d0e;
    border-radius: 2px;
    padding: 1.1rem 2rem;
    font-family: $font-sans;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    cursor: pointer;
    transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;

    &:hover {
      background-color: $color-accent;
      border-color: $color-accent;
      color: #000000;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &__feedback {
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $color-accent;
    margin: 0;
  }
}

.contact-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 0.35rem;
}

.contact-pill {
  background: $color-bg-alt;
  border: 1px solid $color-border-light;
  border-radius: 20px;
  padding: 0.45rem 0.9rem;
  font-family: $font-sans;
  font-size: 0.75rem;
  color: $color-text-primary;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: $color-text-primary;
  }

  &--active {
    background-color: #0c0d0e;
    color: #ffffff;
    border-color: #0c0d0e;
  }
}

.contact-scale-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 0.35rem;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.contact-scale-btn {
  background: $color-bg-alt;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: 0.6rem 0.75rem;
  font-family: $font-mono;
  font-size: 0.75rem;
  color: $color-text-primary;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: $color-text-primary;
  }

  &--active {
    background-color: #0c0d0e;
    color: #ffffff;
    border-color: #0c0d0e;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;

  &--full {
    grid-column: 1 / -1;
  }
}

.form-label {
  font-family: $font-mono;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  color: $color-text-secondary;
  text-transform: uppercase;
}

.form-input {
  background: $color-bg-primary;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: 0.85rem 1rem;
  font-family: $font-sans;
  font-size: 0.9rem;
  color: $color-text-primary;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: $color-text-primary;
    background-color: #ffffff;
  }

  &::placeholder {
    color: $color-text-dim;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.label-mono {
  font-family: $font-mono;
  font-size: 0.6875rem;
  letter-spacing: 0.16em;
  color: $color-accent;
  text-transform: uppercase;
}
</style>
