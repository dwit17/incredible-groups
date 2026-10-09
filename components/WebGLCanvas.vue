<template>
  <div ref="containerRef" class="webgl-container" aria-hidden="true">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useWebGL } from '~/composables/useWebGL';

const containerRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const { initWebGL, disposeWebGL } = useWebGL();

onMounted(() => {
  if (containerRef.value && canvasRef.value && window.innerWidth >= 768) {
    initWebGL(containerRef.value, canvasRef.value);
  }
});

onUnmounted(() => {
  disposeWebGL();
});
</script>

<style scoped lang="scss">
.webgl-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
