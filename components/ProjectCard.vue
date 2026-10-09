<template>
  <article
    ref="cardRef"
    class="project-card"
    :class="[
      `project-card--${viewMode}`,
      `project-card--${project.aspectRatio}`,
      { 'project-card--dimmed': isDimmed, 'project-card--active': isHovered }
    ]"
    @mouseenter="onHover(true)"
    @mouseleave="onHover(false)"
  >
    <NuxtLink :to="`/projects/${project.slug}`" class="project-card__link">
      <!-- DOM Image Target for WebGL Sync with Native Fallback -->
      <div
        ref="imageTargetRef"
        class="project-card__media webgl-target"
        :data-webgl-id="`project-${project.id}`"
      >
        <!-- Native <img> fallback for mobile & non-WebGL -->
        <img
          :src="project.coverImage"
          :alt="`${project.title} - ${project.subtitle} by Incredible Groups`"
          loading="lazy"
          width="800"
          height="1000"
          class="project-card__img"
        />

        <div class="project-card__badge tag">
          {{ project.category }}
        </div>
      </div>

      <!-- Project Metadata & Typography -->
      <div class="project-card__info">
        <div class="project-card__top">
          <span class="project-card__location">{{ project.location }}</span>
        </div>

        <h3 class="project-card__title">{{ project.title }}</h3>
        <p class="project-card__subtitle">{{ project.subtitle }}</p>

        <div class="project-card__footer">
          <span class="project-card__area">{{ project.area }}</span>
          <span class="project-card__arrow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Project } from '~/data/projects';
import { useWebGL } from '~/composables/useWebGL';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = defineProps<{
  project: Project;
  index: number;
  viewMode: 'grid' | 'list';
  isDimmed: boolean;
}>();

const emit = defineEmits(['hover-change']);

const cardRef = ref<HTMLElement | null>(null);
const imageTargetRef = ref<HTMLElement | null>(null);
const isHovered = ref(false);

const { registerPlane, unregisterPlane, setPlaneProgress, setPlaneHover } = useWebGL();

const onHover = (hovered: boolean) => {
  isHovered.value = hovered;
  emit('hover-change', { index: props.index, hovered });
  setPlaneHover(`project-${props.project.id}`, hovered);
};

onMounted(() => {
  if (!import.meta.client) return;

  const targetId = `project-${props.project.id}`;

  if (imageTargetRef.value && window.innerWidth >= 768) {
    registerPlane({
      id: targetId,
      element: imageTargetRef.value,
      textureUrl: props.project.coverImage,
      progress: 0.0
    });

    // ScrollTrigger to scrub the sketch reveal shader progress
    if (cardRef.value) {
      ScrollTrigger.create({
        trigger: cardRef.value,
        start: 'top 85%',
        end: 'top 35%',
        scrub: 1,
        onUpdate: (self) => {
          setPlaneProgress(targetId, self.progress);
        }
      });
    }
  }
});

onUnmounted(() => {
  unregisterPlane(`project-${props.project.id}`);
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.project-card {
  position: relative;
  transition: opacity 0.45s $ease-editorial, transform 0.45s $ease-editorial;
  border-radius: 2px;

  &--dimmed {
    opacity: 0.25;
  }

  &__link {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__media {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: $color-bg-card;
    border-radius: 2px;
    border: 1px solid $color-border;
    transition: border-color 0.4s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s $ease-editorial;
    }
  }

  &--portrait &__media {
    aspect-ratio: 4 / 5;
  }

  &--landscape &__media {
    aspect-ratio: 16 / 10;
  }

  &--square &__media {
    aspect-ratio: 1 / 1;
  }

  &:hover &__media {
    border-color: $color-accent;

    img {
      transform: scale(1.03);
    }
  }

  &__badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 5;
    background: rgba(12, 13, 14, 0.75);
    backdrop-filter: blur(8px);
  }

  &__info {
    display: flex;
    flex-direction: column;
    padding-top: 1.25rem;
    gap: 0.35rem;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $color-text-dim;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
  }

  &__num {
    color: $color-accent;
  }

  &__title {
    font-size: clamp(1.4rem, 2vw, 1.85rem);
    color: $color-text;
    transition: color 0.3s ease;
  }

  &:hover &__title {
    color: $color-accent;
  }

  &__subtitle {
    font-size: 0.9375rem;
    color: $color-text-muted;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $color-border;
    padding-top: 0.75rem;
    margin-top: 0.5rem;
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $color-text-dim;
  }

  &__arrow {
    color: $color-text-muted;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover &__arrow {
    transform: translate(3px, -3px);
    color: $color-accent;
  }

  // List view mode styles
  &--list {
    margin-bottom: 2rem;

    .project-card__link {
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: 2rem;
      align-items: center;

      @include mobile {
        grid-template-columns: 1fr;
      }
    }

    .project-card__media {
      aspect-ratio: 16 / 10;
    }
  }
}
</style>
