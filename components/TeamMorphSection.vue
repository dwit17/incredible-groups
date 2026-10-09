<template>
  <section ref="teamSectionRef" class="team-morph" aria-label="Leadership & Group Directors">
    <div class="team-morph__pin-wrapper">
      <div class="container container--fluid">
        <!-- Section Header -->
        <div class="team-morph__header">
          <div class="team-morph__header-left">
            <span class="eyebrow">STEWARDSHIP & LEADERSHIP</span>
            <h2 class="team-morph__title">
              THE <span class="team-morph__title--accent">DIRECTORS</span>
            </h2>
          </div>

          <div class="team-morph__progress-indicator">
            <span class="team-morph__active-num">0{{ activeIndex + 1 }}</span>
            <span class="team-morph__divider">/</span>
            <span class="team-morph__total-num">0{{ teamMembers.length }}</span>
          </div>
        </div>

        <!-- Morphing Interactive Stage -->
        <div class="team-morph__stage grid">
          <!-- Left: Dynamic Leader Information -->
          <div class="col-6 col-mobile-full">
            <div class="team-morph__info">
              <div class="team-morph__division tag">
                {{ currentMember.division }}
              </div>

              <h3 class="team-morph__name">{{ currentMember.name }}</h3>
              <p class="team-morph__role">{{ currentMember.role }}</p>

              <blockquote class="team-morph__quote">
                &ldquo;{{ currentMember.quote }}&rdquo;
              </blockquote>

              <p class="body-text team-morph__bio">
                {{ currentMember.bio }}
              </p>

              <!-- Thumbnails / Director Selectors -->
              <div class="team-morph__selectors" role="tablist">
                <button
                  v-for="(member, idx) in teamMembers"
                  :key="member.id"
                  class="team-morph__selector-btn"
                  :class="{ 'team-morph__selector-btn--active': activeIndex === idx }"
                  :aria-label="`Select ${member.name}`"
                  @click="selectMember(idx)"
                >
                  <span class="team-morph__selector-dot"></span>
                  <span class="team-morph__selector-name">{{ member.name.split(' ')[0] }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Right: Central Morphing Shape Frame -->
          <div class="col-6 col-mobile-full">
            <div class="team-morph__visual-container">
              <div
                ref="morphFrameRef"
                class="team-morph__frame"
                :class="`team-morph__frame--${currentMember.shapeKey}`"
              >
                <div class="team-morph__frame-glow"></div>
                <img
                  :src="currentMember.portrait"
                  :alt="`${currentMember.name} - ${currentMember.role}`"
                  class="team-morph__portrait"
                  width="600"
                  height="600"
                />
              </div>

              <div class="team-morph__shape-tag tag">
                <span>GEOMETRY: {{ currentMember.shapeKey.toUpperCase() }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { teamMembers } from '~/data/team';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const teamSectionRef = ref<HTMLElement | null>(null);
const morphFrameRef = ref<HTMLElement | null>(null);
const activeIndex = ref(0);

const currentMember = computed(() => teamMembers[activeIndex.value] || teamMembers[0]);

const selectMember = (idx: number) => {
  activeIndex.value = idx;
};

onMounted(() => {
  if (!import.meta.client || !teamSectionRef.value) return;

  // Pin section and scrub through directors
  ScrollTrigger.create({
    trigger: teamSectionRef.value,
    start: 'top top',
    end: `+=${window.innerHeight * 2.5}`,
    pin: true,
    scrub: 0.5,
    onUpdate: (self) => {
      const total = teamMembers.length;
      const index = Math.min(Math.floor(self.progress * total), total - 1);
      if (index !== activeIndex.value) {
        activeIndex.value = index;
      }
    }
  });
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.team-morph {
  position: relative;
  background-color: #0c0d0e;
  border-top: 1px solid $color-border;
  z-index: $z-content;

  &__pin-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: clamp(2.5rem, 5vw, 4.5rem);
  }

  &__title {
    font-size: clamp(2.2rem, 5vw, 4.5rem);
    line-height: 1.05;
    margin-top: 0.5rem;

    &--accent {
      color: $color-accent;
    }
  }

  &__progress-indicator {
    font-family: $font-mono;
    font-size: 1.15rem;
    color: $color-text-dim;
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  &__active-num {
    color: $color-accent;
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
  }

  &__stage {
    align-items: center;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 540px;
  }

  &__division {
    align-self: flex-start;
  }

  &__name {
    font-size: clamp(1.8rem, 3.2vw, 3rem);
    line-height: 1.1;
    color: $color-text;
  }

  &__role {
    font-family: $font-mono;
    font-size: 0.875rem;
    letter-spacing: $letter-spacing-wide;
    color: $color-accent;
    text-transform: uppercase;
  }

  &__quote {
    font-family: $font-display;
    font-size: clamp(1.1rem, 1.4vw, 1.35rem);
    font-style: italic;
    line-height: 1.5;
    color: #e2e2e5;
    border-left: 2px solid $color-accent;
    padding-left: 1.25rem;
    margin: 0.5rem 0;
  }

  &__bio {
    font-size: 0.95rem;
  }

  &__selectors {
    display: flex;
    gap: 1.25rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }

  &__selector-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $color-text-dim;
    padding: 0.4rem 0.8rem;
    border: 1px solid $color-border;
    border-radius: 2px;
    transition: all $duration-fast ease;

    &--active {
      border-color: $color-accent;
      color: $color-text;
      background: rgba(200, 169, 126, 0.08);

      .team-morph__selector-dot {
        background-color: $color-accent;
        box-shadow: 0 0 6px rgba(200, 169, 126, 0.8);
      }
    }
  }

  &__selector-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: $color-text-dim;
    transition: background-color 0.3s ease;
  }

  // Visual container and morphing frames
  &__visual-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  &__frame {
    width: min(420px, 85vw);
    height: min(420px, 85vw);
    position: relative;
    overflow: hidden;
    background-color: $color-bg-card;
    border: 1px solid $color-border-hover;
    transition: border-radius 0.8s $ease-editorial, clip-path 0.8s $ease-editorial;

    &--circle {
      border-radius: 50%;
    }

    &--squircle {
      border-radius: 28%;
    }

    &--organic {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    &--hexagon {
      border-radius: 12px;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }
  }

  &__frame-glow {
    @include absolute-cover;
    background: radial-gradient(circle at center, rgba(200, 169, 126, 0.12) 0%, transparent 70%);
    pointer-events: none;
  }

  &__portrait {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &__shape-tag {
    margin-top: 1.5rem;
  }
}
</style>
