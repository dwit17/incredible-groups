<template>
  <div class="contact-page">
    <!-- ============================================================= -->
    <!-- SECTION 01: Full-Bleed 100vh Hero Canvas                      -->
    <!-- Matches HeroSection.vue & Projects Hero 1-to-1                -->
    <!-- ============================================================= -->
    <section ref="heroRef" class="contact-hero" aria-label="Contact and Advisory Hero">
      <div class="contact-hero__canvas">
        <div ref="heroImageWrapperRef" class="contact-hero__image-wrapper">
          <img
            ref="heroImageRef"
            src="/images/studio-01.jpg"
            alt="Incredible Groups - Architectural Atelier & Private Advisory Desk"
            class="contact-hero__image"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <div class="contact-hero__overlay"></div>

        <div ref="titleBlockRef" class="contact-hero__title-block">
          <h1 class="contact-hero__title">
            <span class="contact-hero__line-wrap">
              <span class="contact-hero__title-line contact-hero__title-line--sans">Initiate Private</span>
            </span>
            <span class="contact-hero__line-wrap">
              <span class="contact-hero__title-line contact-hero__title-line--serif">Dialogue &amp; Advisory</span>
            </span>
          </h1>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 02: Direct Channels & Fast Desks                      -->
    <!-- ============================================================= -->
    <section class="contact-channels section-pad" aria-label="Direct Advisory Channels">
      <div class="container container--fluid">
        <div class="contact-channels__intro">
          <h2 ref="channelsTitleRef" class="contact-channels__heading">
            Direct Client Desks
          </h2>
          <p ref="channelsDescRef" class="contact-channels__desc">
            Connect directly with our capital allocation partners, principal architects, and private client concierge for bespoke commissions, off-market acquisitions, or venture syndication.
          </p>
        </div>

        <div ref="quickBarRef" class="contact-quick-bar">
          <a
            href="https://wa.me/919737972097?text=Hello%20Incredible%20Groups%20Advisory%2C%20I%20would%20like%20to%20schedule%20a%20private%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            class="contact-quick-card contact-quick-card--highlight"
            aria-label="Direct WhatsApp Advisory Desk"
          >
            <div class="contact-quick-card__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.974.531 1.777.788 2.793.788h.005c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.774-5.773-5.774zm3.376 8.21c-.145.409-.846.75-1.164.793-.312.042-.719.062-2.316-.599-1.928-.796-3.167-2.766-3.262-2.894-.096-.129-.785-1.045-.785-1.993 0-.948.497-1.414.673-1.606.177-.193.386-.241.514-.241.129 0 .257.002.37.008.119.006.278-.045.435.334.161.386.551 1.343.599 1.439.048.096.08.209.016.337-.064.129-.096.209-.193.322-.096.113-.203.252-.29.338-.096.096-.197.201-.085.393.112.193.501.826 1.077 1.34 1.152 1.028 1.458 1.073 1.667 1.177.209.104.331.088.453-.052.122-.14.524-.611.664-.82.14-.209.28-.175.47-.104.19.071 1.213.572 1.422.677.209.105.348.157.399.245.051.088.051.51-.094.919zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.306C8.423 21.536 10.15 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </div>
            <div class="contact-quick-card__text">
              <span class="contact-quick-card__label">Instant WhatsApp Desk</span>
              <span class="contact-quick-card__value">+91 97379 72097</span>
            </div>
            <span class="contact-quick-card__arrow" aria-hidden="true">&rarr;</span>
          </a>

          <a href="tel:+919737972097" class="contact-quick-card" aria-label="Direct Telephone Line">
            <div class="contact-quick-card__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div class="contact-quick-card__text">
              <span class="contact-quick-card__label">Private Advisory Line</span>
              <span class="contact-quick-card__value">+91 97379 72097</span>
            </div>
            <span class="contact-quick-card__arrow" aria-hidden="true">&rarr;</span>
          </a>

          <a href="mailto:atelier@incrediblegroups.com" class="contact-quick-card" aria-label="Confidential Email Desk">
            <div class="contact-quick-card__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div class="contact-quick-card__text">
              <span class="contact-quick-card__label">Confidential Email</span>
              <span class="contact-quick-card__value">atelier@incrediblegroups.com</span>
            </div>
            <span class="contact-quick-card__arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 03: Studio & Capital Hubs (Standalone Spacious Grid)   -->
    <!-- ============================================================= -->
    <section ref="hubsSectionRef" class="contact-hubs-section section-pad" aria-label="Studio &amp; Capital Hubs">
      <div class="container container--fluid">
        <div class="contact-hubs-section__header">
          <h2 class="contact-hubs-section__title">Studio &amp; Capital Hubs</h2>
        </div>

        <div class="contact-hubs-grid">
          <!-- Mumbai HQ -->
          <div class="contact-hub-card">
            <h3 class="contact-hub-card__name">Mumbai</h3>
            <p class="contact-hub-card__landmark">Worli Sea Face Landmark</p>
            <p class="contact-hub-card__address">
              Palais Royale, Level 48, Worli Sea Face, Mumbai, Maharashtra 400030
            </p>
            <div class="contact-hub-card__meta">
              <span class="contact-hub-card__hours">Mon – Fri: 10:00 – 19:00 IST</span>
              <a href="mailto:mumbai@incrediblegroups.com" class="contact-hub-card__email">mumbai@incrediblegroups.com</a>
            </div>
          </div>

          <!-- Goa Studio -->
          <div class="contact-hub-card">
            <h3 class="contact-hub-card__name">Goa</h3>
            <p class="contact-hub-card__landmark">Assagao Badem Sanctuary</p>
            <p class="contact-hub-card__address">
              Badem Coastal Enclave, Assagao, North Goa 403507
            </p>
            <div class="contact-hub-card__meta">
              <span class="contact-hub-card__hours">Private Viewings by Appointment</span>
              <a href="mailto:goa@incrediblegroups.com" class="contact-hub-card__email">goa@incrediblegroups.com</a>
            </div>
          </div>

          <!-- GIFT City Hub -->
          <div class="contact-hub-card">
            <h3 class="contact-hub-card__name">GIFT City</h3>
            <p class="contact-hub-card__landmark">International Financial Centre</p>
            <p class="contact-hub-card__address">
              Brigade IFC, Tower 1, Level 14, GIFT City, Gandhinagar, Gujarat 382355
            </p>
            <div class="contact-hub-card__meta">
              <span class="contact-hub-card__hours">Alternative Investments Desk</span>
              <a href="mailto:invest@incrediblegroups.com" class="contact-hub-card__email">invest@incrediblegroups.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================= -->
    <!-- SECTION 04: Schedule Consultation (Dedicated Spacious Section)-->
    <!-- ============================================================= -->
    <section ref="formSectionRef" class="contact-form-section section-pad" aria-label="Schedule Consultation">
      <div class="container container--fluid">
        <div class="contact-form-layout">
          
          <div class="contact-form-layout__sidebar">
            <h2 class="contact-form-layout__title">Schedule Consultation</h2>
            <p class="contact-form-layout__lead">
              Submit your inquiry or brief. Our capital allocation partners and principal architects personally review each brief within four business hours.
            </p>
          </div>

          <div class="contact-form-wrap">
            <form class="contact-form" @submit.prevent="handleSubmit">
              <!-- Category Pills Selector -->
              <div class="form-group form-group--pills">
                <label class="form-label">Advisory Scope *</label>
                <div class="contact-pills" role="radiogroup" aria-label="Advisory Scope">
                  <button
                    v-for="cat in interestCategories"
                    :key="cat"
                    type="button"
                    role="radio"
                    :aria-checked="formData.interest === cat"
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

                <!-- Estimated Scale / Budget -->
                <div class="form-group form-group--full">
                  <label class="form-label">Estimated Investment / Project Horizon</label>
                  <div class="contact-scale-options" role="radiogroup" aria-label="Estimated Scale">
                    <button
                      v-for="scale in scaleOptions"
                      :key="scale"
                      type="button"
                      role="radio"
                      :aria-checked="formData.scale === scale"
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
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
import { useSiteLoaded } from '~/composables/useSiteLoaded';
import AppFooter from '~/components/AppFooter.vue';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

useSeoMeta({
  title: 'Contact & Advisory - Incredible Groups Architectural Atelier',
  description: 'Initiate a confidential dialogue with Incredible Groups. Direct WhatsApp desk, private client concierge, and studio hubs in Mumbai, Goa, and GIFT City.',
  ogTitle: 'Contact & Advisory - Incredible Groups',
  ogImage: '/images/hero-architecture.jpg'
});

const { isSiteLoaded } = useSiteLoaded();

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
    submissionFeedback.value = 'Connecting to confidential WhatsApp desk...';

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
const heroRef = ref<HTMLElement | null>(null);
const heroImageWrapperRef = ref<HTMLElement | null>(null);
const heroImageRef = ref<HTMLElement | null>(null);
const titleBlockRef = ref<HTMLElement | null>(null);
const channelsTitleRef = ref<HTMLElement | null>(null);
const channelsDescRef = ref<HTMLElement | null>(null);
const quickBarRef = ref<HTMLElement | null>(null);
const hubsSectionRef = ref<HTMLElement | null>(null);
const formSectionRef = ref<HTMLElement | null>(null);

let scrollTriggerInstance: ScrollTrigger | null = null;
let ctx: gsap.Context | null = null;
let hasPlayedEntrance = false;

const playEntranceAnimation = () => {
  if (hasPlayedEntrance || !import.meta.client) return;
  hasPlayedEntrance = true;

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });

  if (heroImageRef.value) {
    tl.fromTo(
      heroImageRef.value,
      { scale: 1.08, opacity: 0.88 },
      { scale: 1.0, opacity: 1.0, duration: 2.0, ease: 'power2.out' },
      0
    );
  }

  if (titleBlockRef.value) {
    const lines = titleBlockRef.value.querySelectorAll('.contact-hero__title-line');
    tl.fromTo(
      lines,
      { yPercent: 120, opacity: 0, scale: 0.97 },
      { yPercent: 0, opacity: 1, scale: 1.0, duration: 1.3, stagger: 0.15, ease: 'power3.out' },
      0.15
    );
  }
};

onMounted(() => {
  if (!import.meta.client) return;

  ctx = gsap.context(() => {
    // 1. Entrance animation
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
      }, 1500);
    }

    // 2. Hero Scroll Parallax
    if (heroImageRef.value && heroRef.value) {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: heroRef.value,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
          if (!heroImageRef.value) return;
          const progress = self.progress;
          gsap.set(heroImageRef.value, {
            y: progress * 60,
            scale: 1 + progress * 0.05
          });
        }
      });
    }

    // 3. Channels Section Reveal
    if (quickBarRef.value) {
      const cards = quickBarRef.value.querySelectorAll('.contact-quick-card');
      gsap.fromTo(
        cards,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quickBarRef.value,
            start: 'top 85%'
          }
        }
      );
    }

    // 4. Hubs Section Reveal
    if (hubsSectionRef.value) {
      const hubCards = hubsSectionRef.value.querySelectorAll('.contact-hub-card');
      gsap.fromTo(
        hubCards,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hubsSectionRef.value,
            start: 'top 85%'
          }
        }
      );
    }

    // 5. Form Section Reveal
    if (formSectionRef.value) {
      gsap.fromTo(
        formSectionRef.value,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formSectionRef.value,
            start: 'top 85%'
          }
        }
      );
    }
  });
});

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
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

.contact-page {
  position: relative;
  width: 100%;
  background-color: $color-bg-primary;
  color: $color-text-primary;
  overflow: hidden;
}

// -------------------------------------------------------------
// SECTION 01: 100VH CINEMATIC HERO (Matches Home & Projects 1-to-1)
// -------------------------------------------------------------
.contact-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  margin: 0;
  padding: 0;
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 38%;
    display: block;
    will-change: transform;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(
      180deg,
      rgba(12, 13, 14, 0.4) 0%,
      rgba(12, 13, 14, 0.05) 30%,
      rgba(12, 13, 14, 0.15) 55%,
      rgba(12, 13, 14, 0.7) 100%
    );
  }

  &__title-block {
    position: absolute;
    bottom: clamp(32px, 5vh, 60px);
    left: clamp(16px, 3.8vw, 64px);
    z-index: 10;
    color: #ffffff;
    pointer-events: none;
    max-width: calc(100% - 32px);

    @include mobile {
      bottom: 2rem;
      left: 1.25rem;
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  &__line-wrap {
    display: block;
    overflow: hidden;
    line-height: 0.94;
    padding-bottom: 0.08em;
  }

  &__title-line {
    display: block;
    will-change: transform, opacity;

    &--sans {
      font-family: $font-sans;
      font-size: clamp(2.4rem, 6.2vw, 6.4rem);
      font-weight: 600;
      line-height: 0.95;
      letter-spacing: -0.035em;
      color: #ffffff;
      overflow-wrap: anywhere;
    }

    &--serif {
      font-family: $font-serif;
      font-size: clamp(2.4rem, 6.2vw, 6.4rem);
      font-weight: 400;
      line-height: 0.95;
      letter-spacing: -0.01em;
      color: #ffffff;
      overflow-wrap: anywhere;
    }
  }
}

// -------------------------------------------------------------
// SECTION 02: DIRECT CHANNELS (Spacious, Clean)
// -------------------------------------------------------------
.contact-channels {
  background-color: #ffffff;
  border-bottom: 1px solid $color-border-light;
  padding-top: clamp(48px, 10vh, 140px);
  padding-bottom: clamp(48px, 10vh, 140px);

  &__intro {
    max-width: 840px;
    margin-bottom: clamp(32px, 5vh, 72px);
  }

  &__heading {
    font-family: $font-heading;
    font-size: clamp(2rem, 4vw, 4rem);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.035em;
    margin: 0 0 1.25rem 0;
    color: #111111;
  }

  &__desc {
    font-family: $font-content;
    font-size: clamp(0.95rem, 1.2vw, 1.15rem);
    font-weight: 300;
    line-height: 1.65;
    color: $color-text-secondary;
    margin: 0;
  }
}

.contact-quick-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2.5vw, 36px);

  @include tablet-down {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.contact-quick-card {
  background: $color-bg-primary;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: clamp(1.4rem, 2.2vw, 2.4rem) clamp(1.4rem, 2.2vw, 2.5rem);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  text-decoration: none;
  color: $color-text-primary;
  min-height: 48px;
  transition: transform 0.35s $ease-editorial, box-shadow 0.35s $ease-editorial, border-color 0.25s ease, background-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(17, 17, 17, 0.3);
    background-color: #ffffff;

    .contact-quick-card__arrow {
      transform: translateX(6px);
      color: $color-text-primary;
    }
  }

  &--highlight {
    background-color: #0c0d0e;
    color: #ffffff;
    border-color: #0c0d0e;

    .contact-quick-card__icon {
      background-color: rgba(255, 255, 255, 0.1);
      color: #ffffff;
    }

    .contact-quick-card__label {
      color: #888888;
    }

    .contact-quick-card__value {
      color: #ffffff;
    }

    .contact-quick-card__arrow {
      color: $color-accent;
    }

    &:hover {
      background-color: #000000;
      border-color: $color-accent;
      box-shadow: 0 20px 48px rgba(0, 0, 0, 0.25);

      .contact-quick-card__arrow {
        color: #ffffff;
      }
    }
  }

  &__icon {
    width: 48px;
    height: 48px;
    border-radius: 2px;
    background-color: rgba(17, 17, 17, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-text-primary;
    flex-shrink: 0;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    flex-grow: 1;
    min-width: 0;
  }

  &__label {
    font-family: $font-content;
    font-size: 0.6875rem;
    letter-spacing: 0.1em;
    color: $color-text-secondary;
    text-transform: uppercase;
  }

  &__value {
    font-family: $font-heading;
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    font-weight: 400;
    letter-spacing: -0.01em;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  &__arrow {
    font-size: 1.25rem;
    color: $color-text-dim;
    flex-shrink: 0;
    transition: transform 0.3s ease, color 0.3s ease;
  }
}

// -------------------------------------------------------------
// SECTION 03: STUDIO & CAPITAL HUBS (Clean 3-Column Grid)
// -------------------------------------------------------------
.contact-hubs-section {
  background-color: $color-bg-primary;
  border-bottom: 1px solid $color-border-light;
  padding-top: clamp(48px, 10vh, 160px);
  padding-bottom: clamp(48px, 10vh, 160px);

  &__header {
    margin-bottom: clamp(32px, 5vh, 80px);
  }

  &__title {
    font-family: $font-heading;
    font-size: clamp(2rem, 4vw, 4.2rem);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.035em;
    margin: 0;
    color: #111111;
  }
}

.contact-hubs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(20px, 3vw, 44px);

  @include tablet {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

.contact-hub-card {
  background: #ffffff;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: clamp(1.6rem, 2.5vw, 3rem);
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: rgba(17, 17, 17, 0.3);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.04);
    transform: translateY(-3px);
  }

  &__name {
    font-family: $font-heading;
    font-size: clamp(1.3rem, 1.8vw, 1.75rem);
    font-weight: 400;
    letter-spacing: -0.025em;
    margin: 0;
    color: $color-text-primary;
  }

  &__landmark {
    font-family: $font-content;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: $color-accent;
    margin: 0;
  }

  &__address {
    font-family: $font-content;
    font-size: 0.9375rem;
    font-weight: 300;
    line-height: 1.65;
    color: $color-text-secondary;
    margin: 0;
    flex-grow: 1;
    overflow-wrap: anywhere;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    padding-top: 1.5rem;
    margin-top: 1rem;
    border-top: 1px solid $color-border-light-subtle;
  }

  &__hours {
    font-family: $font-content;
    font-size: 0.8125rem;
    color: $color-text-dim;
  }

  &__email {
    color: $color-text-primary;
    text-decoration: none;
    font-family: $font-content;
    font-size: 0.875rem;
    position: relative;
    width: fit-content;
    padding-bottom: 2px;
    overflow-wrap: anywhere;
    word-break: break-word;
    transition: color 0.2s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: $color-accent;
      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
}

// -------------------------------------------------------------
// SECTION 04: SCHEDULE CONSULTATION (Dedicated Architectural Section)
// -------------------------------------------------------------
.contact-form-section {
  background-color: #ffffff;
  padding-top: clamp(48px, 12vh, 180px);
  padding-bottom: clamp(60px, 14vh, 200px);
}

.contact-form-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: clamp(40px, 8vw, 140px);
  align-items: start;

  @include tablet-down {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  &__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 480px;
    position: sticky;
    top: 120px;

    @include tablet-down {
      position: static;
      max-width: 100%;
    }
  }

  &__title {
    font-family: $font-heading;
    font-size: clamp(2rem, 4.2vw, 4.4rem);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.035em;
    margin: 0;
    color: #111111;
  }

  &__lead {
    font-family: $font-content;
    font-size: clamp(0.95rem, 1.2vw, 1.15rem);
    font-weight: 300;
    line-height: 1.7;
    color: $color-text-secondary;
    margin: 0;
  }
}

.contact-form-wrap {
  width: 100%;
}

.contact-form {
  background: $color-bg-primary;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: clamp(20px, 4vw, 64px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
  }

  &__footer {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-top: 0.5rem;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.85rem;
    background-color: #0c0d0e;
    color: #ffffff;
    border: 1px solid #0c0d0e;
    border-radius: 2px;
    padding: 1.1rem 2rem;
    min-height: 48px;
    font-family: $font-content;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.25s ease;

    svg {
      transition: transform 0.25s ease;
    }

    &:hover:not(:disabled) {
      background-color: #000000;
      border-color: $color-accent;
      color: $color-accent;
      transform: translateY(-2px);

      svg {
        transform: translateX(5px);
      }
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  &__feedback {
    font-family: $font-content;
    font-size: 0.875rem;
    color: $color-accent;
    margin: 0;
    padding: 0.9rem 1.25rem;
    background: rgba(200, 169, 126, 0.08);
    border: 1px solid rgba(200, 169, 126, 0.25);
    border-radius: 2px;
  }
}

.form-group--pills {
  margin-bottom: 0.5rem;
}

.contact-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 0.65rem;
}

.contact-pill {
  background: #ffffff;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: 0.65rem 1rem;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: $font-content;
  font-size: 0.85rem;
  font-weight: 300;
  letter-spacing: 0.01em;
  color: $color-text-primary;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: rgba(17, 17, 17, 0.5);
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
  gap: 10px;
  margin-top: 0.65rem;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.contact-scale-btn {
  background: #ffffff;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: 0.85rem 1rem;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: $font-content;
  font-size: 0.85rem;
  font-weight: 300;
  color: $color-text-primary;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: rgba(17, 17, 17, 0.5);
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
  gap: 0.65rem;

  &--full {
    grid-column: 1 / -1;
  }
}

.form-label {
  font-family: $font-content;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: $color-text-secondary;
  text-transform: uppercase;
}

.form-input {
  background: #ffffff;
  border: 1px solid $color-border-light;
  border-radius: 2px;
  padding: 0.9rem 1.15rem;
  min-height: 48px;
  font-family: $font-content;
  font-size: 1rem; /* 16px to prevent iOS auto-zoom */
  color: $color-text-primary;
  transition: border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: none;
    border-color: #111111;
    background-color: #ffffff;
    box-shadow: 0 0 0 1px #111111;
  }

  &::placeholder {
    color: $color-text-dim;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.65;
}
</style>

