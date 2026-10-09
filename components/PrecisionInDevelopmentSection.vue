<template>
  <section ref="sectionRef" class="precision-development" aria-label="Precision in Development">
    <!-- Title: Clean Light Grotesk / Sans-Serif, Solid Black, Center-Aligned (Exact Reference Match) -->
    <div ref="titleBoxRef" class="precision-development__title-box">
      <h2 class="precision-development__title">
        <span class="precision-development__title-mask">
          <span class="precision-development__title-line">Precision in</span>
        </span>
        <span class="precision-development__title-mask">
          <span class="precision-development__title-line">Development</span>
        </span>
      </h2>
    </div>

    <!-- Architectural Canvas Stage: Independent 100vh Viewport (Materialization & Cursor Lens) -->
    <div 
      ref="stageRef"
      class="precision-development__stage"
      @mousemove="onMouseMove"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <!-- WebGL Materialization Canvas (100% GPU-Accelerated) -->
      <canvas
        ref="canvasRef"
        class="precision-development__canvas"
      ></canvas>

      <!-- Debug Info (Only if ?debugMask=true is present in URL) -->
      <div v-if="isDebug" class="precision-development__debug">
        <div>Scroll: {{ (scrollProgress * 100).toFixed(1) }}%</div>
        <div>Reveal: {{ (Math.max(0, Math.min(100, (1.05 - thresholdA) / 1.10 * 100))).toFixed(0) }}%</div>
      </div>
    </div>

    <!-- Continuation Section: Left-Aligned Editorial Paragraph (Exact Reference Match) -->
    <div ref="editorialRef" class="precision-development__editorial">
      <div class="precision-development__editorial-inner">
        <div ref="narrativeBoxRef" class="precision-development__narrative-box">
          <p class="precision-development__narrative-p">
            At this stage, the idea takes on architectural clarity. We work out the layout, volume, and facades, create structural logic, and prepare the project for implementation. Through drawings, models, and approvals, the project gains precision—transforming from a concept into a coherent architectural system.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitTextIntoLines } from '~/composables/useReveal';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const sectionRef = ref<HTMLElement | null>(null);
const titleBoxRef = ref<HTMLElement | null>(null);
const stageRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const editorialRef = ref<HTMLElement | null>(null);
const narrativeBoxRef = ref<HTMLElement | null>(null);

const thresholdA = ref(1.05); // 1.05 = fully hidden, -0.05 = fully revealed
const scrollProgress = ref(0);
const isDebug = ref(false);

// Mouse circle lens coordinates & state
const mouseX = ref(0.5);
const mouseY = ref(0.5);
const targetMouseX = ref(0.5);
const targetMouseY = ref(0.5);
const currentHover = ref(0.0);
const targetHover = ref(0.0);

let ctx: gsap.Context | null = null;
let gl: WebGLRenderingContext | null = null;
let program: WebGLProgram | null = null;
let animFrameId: number | null = null;
let texA: WebGLTexture | null = null;
let texB: WebGLTexture | null = null;
let isMounted = false;

const onMouseMove = (e: MouseEvent) => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  targetMouseX.value = (e.clientX - rect.left) / rect.width;
  targetMouseY.value = (e.clientY - rect.top) / rect.height;
  targetHover.value = 1.0;
};

const onMouseEnter = () => {
  targetHover.value = 1.0;
};

const onMouseLeave = () => {
  targetHover.value = 0.0;
};

// -------------------------------------------------------------
// WebGL Shaders: Organic Scroll Materialization & Lens Reveal
// -------------------------------------------------------------
const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    v_uv.y = 1.0 - v_uv.y;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  varying vec2 v_uv;

  uniform sampler2D u_imageA;
  uniform sampler2D u_imageB;
  uniform float u_thresholdA;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_mouseRadius;
  uniform float u_mouseHover;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                   + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 st, float seedOffset) {
    vec2 p = st * 3.4 + vec2(seedOffset * 13.17, seedOffset * 7.91);
    float value = 0.0;
    value += 0.52 * (snoise(p) * 0.5 + 0.5);
    vec2 p2 = p * 2.5 + vec2(43.1, 19.7);
    value += 0.30 * (snoise(p2) * 0.5 + 0.5);
    vec2 p3 = p2 * 2.7 + vec2(11.3, 87.2);
    value += 0.18 * (snoise(p3) * 0.5 + 0.5);
    return clamp(value, 0.0, 1.0);
  }

  void main() {
    float canvasAspect = u_resolution.x / u_resolution.y;
    float imgAspect = 16.0 / 9.0;
    vec2 uv = v_uv;

    if (canvasAspect > imgAspect) {
      float scale = canvasAspect / imgAspect;
      uv.y = (uv.y - 0.5) / scale + 0.5;
    } else {
      float scale = imgAspect / canvasAspect;
      uv.x = (uv.x - 0.5) / scale + 0.5;
    }

    vec3 finalColor = vec3(1.0);

    vec4 rawA = texture2D(u_imageA, clamp(uv, 0.0, 1.0));
    vec3 baseInkA = mix(vec3(1.0), rawA.rgb, 0.88);

    vec4 rawB = texture2D(u_imageB, clamp(uv, 0.0, 1.0));
    vec3 polishedInkB = clamp(pow(rawB.rgb, vec3(1.2)) * 0.96, 0.0, 1.0);

    // Scroll Materialization for preliminary sketch
    float noiseA = fbm(v_uv, 28.45);
    float softnessA = 0.07;
    float alphaA = smoothstep(u_thresholdA - softnessA, u_thresholdA + softnessA, noiseA);
    finalColor = mix(finalColor, baseInkA, alphaA);

    // Cursor Lens Window revealing detailed architectural rendering
    float revealGating = smoothstep(0.35, -0.05, u_thresholdA);

    if (u_mouseHover > 0.005 && revealGating > 0.005) {
      vec2 screenCoord = v_uv * u_resolution;
      vec2 mouseCoord = u_mouse * u_resolution;
      float dist = distance(screenCoord, mouseCoord);

      float radius = u_mouseRadius;
      float feather = 35.0;
      float circleLens = smoothstep(radius, radius - feather, dist) * u_mouseHover * revealGating * alphaA;

      if (circleLens > 0.001) {
        finalColor = mix(finalColor, polishedInkB, circleLens);
      }
    }

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const createShader = (glCtx: WebGLRenderingContext, type: number, source: string) => {
  const shader = glCtx.createShader(type);
  if (!shader) return null;
  glCtx.shaderSource(shader, source);
  glCtx.compileShader(shader);
  if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
    console.error(glCtx.getShaderInfoLog(shader));
    glCtx.deleteShader(shader);
    return null;
  }
  return shader;
};

const initWebGL = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  gl = canvas.getContext('webgl', { alpha: false, antialias: true, premultipliedAlpha: false });
  if (!gl) return;

  const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  if (!vs || !fs) return;

  program = gl.createProgram();
  if (!program) return;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return;
  }

  gl.useProgram(program);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
     1, -1,
    -1,  1,
    -1,  1,
     1, -1,
     1,  1
  ]), gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(aPosition);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

  // Load Preliminary Sketch Image
  const imgA = new Image();
  imgA.src = '/images/precision-preliminary.jpg';
  imgA.onload = () => {
    if (!gl || !program) return;
    texA = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texA);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgA);
    gl.uniform1i(gl.getUniformLocation(program, 'u_imageA'), 0);
  };

  // Load Detailed Technical Drawing Image
  const imgB = new Image();
  imgB.src = '/images/precision-detail.jpg';
  imgB.onload = () => {
    if (!gl || !program) return;
    texB = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texB);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgB);
    gl.uniform1i(gl.getUniformLocation(program, 'u_imageB'), 1);
  };

  // Cache uniform locations
  locations = {
    uRes: gl.getUniformLocation(program, 'u_resolution'),
    uThreshA: gl.getUniformLocation(program, 'u_thresholdA'),
    uMouse: gl.getUniformLocation(program, 'u_mouse'),
    uMouseRad: gl.getUniformLocation(program, 'u_mouseRadius'),
    uMouseHov: gl.getUniformLocation(program, 'u_mouseHover')
  };

  resizeCanvas();
  render();
};

let locations: {
  uRes: WebGLUniformLocation | null;
  uThreshA: WebGLUniformLocation | null;
  uMouse: WebGLUniformLocation | null;
  uMouseRad: WebGLUniformLocation | null;
  uMouseHov: WebGLUniformLocation | null;
} = {
  uRes: null,
  uThreshA: null,
  uMouse: null,
  uMouseRad: null,
  uMouseHov: null
};

const resizeCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas || !gl) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const displayWidth = Math.floor(canvas.clientWidth * dpr);
  const displayHeight = Math.floor(canvas.clientHeight * dpr);

  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
    gl.viewport(0, 0, displayWidth, displayHeight);
  }
};

const isStageVisible = ref(true);
let stageObserver: IntersectionObserver | null = null;

const render = () => {
  if (!gl || !program || !isMounted || !isStageVisible.value) {
    animFrameId = null;
    return;
  }

  mouseX.value += (targetMouseX.value - mouseX.value) * 0.12;
  mouseY.value += (targetMouseY.value - mouseY.value) * 0.12;
  currentHover.value += (targetHover.value - currentHover.value) * 0.10;

  gl.useProgram(program);

  // Use cached uniform locations
  if (locations.uRes) gl.uniform2f(locations.uRes, gl.canvas.width, gl.canvas.height);
  if (locations.uThreshA) gl.uniform1f(locations.uThreshA, thresholdA.value);

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  if (locations.uMouse) gl.uniform2f(locations.uMouse, mouseX.value, mouseY.value);
  if (locations.uMouseRad) gl.uniform1f(locations.uMouseRad, 160.0 * dpr);
  if (locations.uMouseHov) gl.uniform1f(locations.uMouseHov, currentHover.value);

  gl.drawArrays(gl.TRIANGLES, 0, 6);

  animFrameId = requestAnimationFrame(render);
};

onMounted(async () => {
  await nextTick();
  isMounted = true;

  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    isDebug.value = urlParams.get('debugMask') === 'true';
  }

  initWebGL();
  window.addEventListener('resize', resizeCanvas);

  // Pause render loop when off-screen to preserve 60/120fps smoothness
  if (stageRef.value && typeof IntersectionObserver !== 'undefined') {
    stageObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      isStageVisible.value = entry.isIntersecting;
      if (entry.isIntersecting && !animFrameId) {
        render();
      }
    }, { rootMargin: '200px 0px 200px 0px' });
    stageObserver.observe(stageRef.value);
  }  if (!import.meta.client || !stageRef.value) return;

  ctx = gsap.context(() => {
    // 1. Center Title Entrance (Line-by-Line Masked Pop-Up)
    if (titleBoxRef.value) {
      const titleLines = titleBoxRef.value.querySelectorAll('.precision-development__title-line');
      gsap.fromTo(
        titleLines,
        {
          yPercent: 115,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: titleBoxRef.value,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 0.6
          },
          yPercent: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    }

    // 2. Stage Pinning & Continuous Materialization
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stageRef.value,
        start: 'top top',
        end: '+=140%',
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          scrollProgress.value = progress;
          thresholdA.value = 1.05 - Math.min(1.0, progress / 0.85) * 1.10;
        }
      }
    });

    tl.to({}, { duration: 1 });

    // 3. Left-Aligned Narrative Text Scroll Animation (Line-by-Line Reveal)
    if (narrativeBoxRef.value) {
      const narrativeP = narrativeBoxRef.value.querySelector<HTMLElement>('.precision-development__narrative-p');
      if (narrativeP) {
        const narrativeLines = splitTextIntoLines(narrativeP);
        gsap.fromTo(
          narrativeLines,
          {
            yPercent: 115,
            opacity: 0
          },
          {
            scrollTrigger: {
              trigger: narrativeBoxRef.value,
              start: 'top 82%',
              end: 'top 40%',
              scrub: 0.7
            },
            yPercent: 0,
            opacity: 1,
            stagger: 0.08,
            ease: 'power3.out'
          }
        );
      }
    }
  }, sectionRef.value);
});

onUnmounted(() => {
  isMounted = false;
  if (animFrameId) {
    cancelAnimationFrame(animFrameId);
  }
  stageObserver?.disconnect();
  stageObserver = null;
  window.removeEventListener('resize', resizeCanvas);
  if (ctx) {
    ctx.revert();
    ctx = null;
  }
});
</script>

<style scoped lang="scss">
@use '~/assets/scss/variables' as *;
@use '~/assets/scss/mixins' as *;

.precision-development {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: #111111;
  padding: 0;
  margin: 0;

  // -------------------------------------------------------------
  // Title Header: Center Aligned, Clean Space Above Image
  // -------------------------------------------------------------
  &__title-box {
    width: 100%;
    padding: 12vh 24px 8vh 24px;
    text-align: center;
    box-sizing: border-box;
    background-color: #ffffff;
    position: relative;
    z-index: 5;
    will-change: transform, opacity;
  }

  &__title {
    font-family: $font-sans;
    font-size: clamp(52px, 5.2vw, 88px);
    font-weight: 400;
    line-height: 0.94;
    letter-spacing: -0.035em;
    color: #111111;
    margin: 0;
    padding: 0;
  }

  &__title-mask {
    display: block;
    overflow: hidden;
    padding-bottom: 0.12em;
    line-height: inherit;
  }

  &__title-line {
    display: block;
    white-space: nowrap;
    will-change: transform, opacity;
  }

  // -------------------------------------------------------------
  // Architectural Canvas Stage
  // -------------------------------------------------------------
  &__stage {
    position: relative;
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    background-color: #ffffff;
    user-select: none;
    overflow: hidden;
    cursor: crosshair;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__canvas {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #ffffff;
  }

  &__debug {
    position: absolute;
    top: 20px;
    right: 25px;
    background: rgba(0, 0, 0, 0.85);
    color: #ffffff;
    padding: 8px 14px;
    font-family: $font-content;
    font-size: 12px;
    border-radius: 4px;
    pointer-events: none;
    z-index: 100;
  }

  // -------------------------------------------------------------
  // Continuation Editorial Section: Left-Aligned Paragraph
  // -------------------------------------------------------------
  &__editorial {
    position: relative;
    width: 100%;
    background-color: #ffffff;
    padding-top: clamp(4.5rem, 9vh, 9rem);
    padding-bottom: clamp(6rem, 14vh, 14rem);
    box-sizing: border-box;
    z-index: 5;
  }

  &__editorial-inner {
    width: 100%;
    max-width: $container-max-width;
    margin: 0 auto;
    padding-left: clamp(24px, 3.8vw, 64px);
    padding-right: clamp(24px, 3.8vw, 64px);
    box-sizing: border-box;
  }

  &__narrative-box {
    width: 100%;
    max-width: clamp(480px, 48vw, 760px); // Left-aligned compact column
    will-change: transform, opacity;
  }

  &__narrative-p {
    font-family: $font-serif;
    font-size: clamp(22px, 2.3vw, 38px);
    font-weight: 400;
    line-height: 1.22;
    letter-spacing: -0.012em;
    color: #111111;
    margin: 0;
    padding: 0;
  }

  @include mobile {
    &__title-box {
      padding: 8vh 16px 5vh 16px;
    }

    &__title {
      font-size: clamp(38px, 9.5vw, 54px);
      line-height: 0.96;
    }

    &__editorial {
      padding-top: 3.5rem;
      padding-bottom: 5rem;
    }

    &__editorial-inner {
      padding-left: 20px;
      padding-right: 20px;
    }

    &__narrative-box {
      max-width: 100%;
    }

    &__narrative-p {
      font-size: clamp(18px, 5vw, 24px);
      line-height: 1.35;
    }
  }
}
</style>
