<template>
  <div class="company-brand-logo" :class="[`company-brand-logo--${companyId}`, { 'company-brand-logo--dark': isDark }]">
    
    <!-- 1. Vanguard PropTech -->
    <template v-if="companyId === 'c1'">
      <svg viewBox="0 0 48 32" class="brand-svg" aria-hidden="true">
        <path d="M6 6 L24 26 L42 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 6 L24 18 L34 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="24" cy="6" r="2.2" fill="currentColor" />
      </svg>
      <span class="brand-primary-text">VANGUARD</span>
    </template>

    <!-- 2. Aethelred Capital & Credit -->
    <template v-else-if="companyId === 'c2'">
      <svg viewBox="0 0 44 32" class="brand-svg" aria-hidden="true">
        <path d="M22 4 L6 28 L38 28 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" />
        <line x1="12" y1="20" x2="32" y2="20" stroke="currentColor" stroke-width="1.8" />
        <line x1="22" y1="4" x2="22" y2="28" stroke="currentColor" stroke-width="1.4" stroke-dasharray="2 2" />
      </svg>
      <span class="brand-primary-text brand-primary-text--serif">AETHELRED</span>
    </template>

    <!-- 3. Kallisto Luxury Living -->
    <template v-else-if="companyId === 'c3'">
      <svg viewBox="0 0 40 32" class="brand-svg" aria-hidden="true">
        <path d="M10 6 L10 26 M10 16 L28 6 M13 13 L30 26" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
        <circle cx="30" cy="6" r="2" fill="currentColor" />
      </svg>
      <span class="brand-primary-text brand-primary-text--serif">KALLISTO</span>
    </template>

    <!-- 4. Zenith Modular Systems -->
    <template v-else-if="companyId === 'c4'">
      <svg viewBox="0 0 44 32" class="brand-svg" aria-hidden="true">
        <path d="M8 8 L36 8 L8 24 L36 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="22" y1="4" x2="22" y2="28" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 3" />
      </svg>
      <span class="brand-primary-text">ZENITH</span>
    </template>

    <!-- 5. Solaria Clean Energy Grid -->
    <template v-else-if="companyId === 'c5'">
      <svg viewBox="0 0 40 32" class="brand-svg" aria-hidden="true">
        <circle cx="20" cy="16" r="6" fill="none" stroke="currentColor" stroke-width="2.2" />
        <path d="M20 4 L20 8 M20 24 L20 28 M8 16 L12 16 M28 16 L32 16 M11 7 L14 10 M26 22 L29 25 M11 25 L14 22 M26 10 L29 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
      <span class="brand-primary-text">SOLARIA</span>
    </template>

    <!-- 6. Helios Aviation Services -->
    <template v-else-if="companyId === 'c6'">
      <svg viewBox="0 0 48 28" class="brand-svg" aria-hidden="true">
        <path d="M4 22 L24 6 L44 22 L34 22 L24 13 L14 22 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" />
      </svg>
      <span class="brand-primary-text">HELIOS</span>
    </template>

    <!-- 7. Orion Materials Research -->
    <template v-else-if="companyId === 'c7'">
      <svg viewBox="0 0 38 32" class="brand-svg" aria-hidden="true">
        <path d="M19 4 L33 12 L33 24 L19 30 L5 24 L5 12 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <circle cx="19" cy="17" r="3.5" fill="currentColor" />
      </svg>
      <span class="brand-primary-text">ORION</span>
    </template>

    <!-- 8. Terra Nova Urban Farms -->
    <template v-else-if="companyId === 'c8'">
      <svg viewBox="0 0 40 32" class="brand-svg" aria-hidden="true">
        <path d="M10 26 C10 12 20 6 30 6 C30 20 20 26 10 26 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M10 26 L22 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      </svg>
      <span class="brand-primary-text">TERRA NOVA</span>
    </template>

    <!-- 9. Hyperion Water Stewardship -->
    <template v-else-if="companyId === 'c9'">
      <svg viewBox="0 0 40 32" class="brand-svg" aria-hidden="true">
        <path d="M20 5 C20 5 10 16 10 22 C10 27.5 14.5 30 20 30 C25.5 30 30 27.5 30 22 C30 16 20 5 20 5 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M16 22 C16 24 17.8 26 20 26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
      </svg>
      <span class="brand-primary-text">HYPERION</span>
    </template>

    <!-- 10. Aegis Asset Tokenization -->
    <template v-else-if="companyId === 'c10'">
      <svg viewBox="0 0 38 32" class="brand-svg" aria-hidden="true">
        <path d="M19 4 L33 9 L33 19 C33 26 19 30 19 30 C19 30 5 26 5 19 L5 9 Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" />
        <path d="M14 16 L18 20 L24 13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span class="brand-primary-text">AEGIS</span>
    </template>

    <!-- Fallback -->
    <template v-else>
      <span class="brand-primary-text">{{ fallbackName }}</span>
    </template>

  </div>
</template>

<script setup lang="ts">
interface Props {
  companyId: string;
  fallbackName?: string;
  isDark?: boolean;
}

withDefaults(defineProps<Props>(), {
  fallbackName: 'INVESTED COMPANY',
  isDark: true
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;

.company-brand-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  color: #111111;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;

  .brand-svg {
    width: 36px;
    height: 26px;
    display: block;
    color: #111111;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
  }

  .brand-text-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
  }

  .brand-primary-text {
    font-family: $font-sans;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #111111;
    line-height: 1.1;

    &--serif {
      font-family: $font-serif;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.06em;
    }
  }

  .brand-sub-text {
    font-family: $font-sans;
    font-size: 8.5px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #70757d;
    line-height: 1;
  }

  &--dark {
    color: #ffffff;

    .brand-svg {
      color: #ffffff;
    }

    .brand-primary-text {
      color: #ffffff;
    }

    .brand-sub-text {
      color: rgba(255, 255, 255, 0.45);
    }
  }
}
</style>
