<template>
  <div class="app-layout">
    <!-- WebGL Canvas for 3D Shaders & DOM image plane synchronization -->
    <WebGLCanvas />

    <!-- Minimalist Preloader -->
    <Preloader @complete="onPreloadComplete" />

    <!-- Global Header & Navigation -->
    <AppHeader />

    <!-- Page Content Slot -->
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from '~/composables/useLenis';
import WebGLCanvas from '~/components/WebGLCanvas.vue';
import Preloader from '~/components/Preloader.vue';
import AppHeader from '~/components/AppHeader.vue';

const { initLenis, scrollToTop } = useLenis();
const router = useRouter();

const onPreloadComplete = () => {
  if (import.meta.client) {
    ScrollTrigger.refresh();
  }
};

onMounted(() => {
  initLenis();

  if (import.meta.client) {
    // Refresh ScrollTrigger once fonts and layout have stabilized
    if (document.fonts) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    router.afterEach((to) => {
      if (!to.hash) {
        scrollToTop(true);
      }
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    });
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;

.app-layout {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $color-bg-primary;
  color: $color-text-primary;
}

.main-content {
  flex: 1;
  position: relative;
  z-index: 10;
}
</style>
