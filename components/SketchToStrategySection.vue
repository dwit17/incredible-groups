<template>
  <section ref="sectionRef" class="sketch-strategy" aria-label="From Sketch to Strategy">
    <!-- Title: Clean Light Grotesk / Sans-Serif, Solid Black, Dedicated Space Above Image -->
    <div ref="titleBoxRef" class="sketch-strategy__title-box">
      <h2 class="sketch-strategy__title">
        <span class="sketch-strategy__title-mask">
          <span class="sketch-strategy__title-line">From Sketch</span>
        </span>
        <span class="sketch-strategy__title-mask">
          <span class="sketch-strategy__title-line">to Strategy</span>
        </span>
      </h2>
    </div>

    <!-- Architectural Canvas Stage: Independent 100vh Viewport Below Title (Zero Text Overlap) -->
    <div 
      ref="stageRef"
      class="sketch-strategy__stage"
      @mousemove="onMouseMove"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <!-- WebGL Materialization Canvas (100% GPU-Accelerated, Full Screen Stage Sizing) -->
      <canvas
        ref="canvasRef"
        class="sketch-strategy__canvas"
      ></canvas>

      <!-- Debug Info (Only if ?debugMask=true is present in URL) -->
      <div v-if="isDebug" class="sketch-strategy__debug">
        <div>Scroll: {{ (scrollProgress * 100).toFixed(1) }}%</div>
        <div>Image A Reveal: {{ (Math.max(0, Math.min(100, (1.05 - thresholdA) / 1.10 * 100))).toFixed(0) }}% (Thresh: {{ thresholdA.toFixed(2) }})</div>
        <div>Cursor Lens (Image B): {{ (currentHover * 100).toFixed(0) }}%</div>
      </div>
    </div>

    <!-- Continuation Section: Editorial Statement, Narrative & Publications (Exact Reference Match) -->
    <div ref="editorialRef" class="sketch-strategy__editorial">
      <div class="sketch-strategy__editorial-inner">
        <!-- 1. Large Serif Statement Headline -->
        <div ref="statementBoxRef" class="sketch-strategy__statement-box">
          <h3 class="sketch-strategy__statement">
            <span class="sketch-strategy__statement-mask">
              <span class="sketch-strategy__statement-line">Early-stage ideas are distilled into</span>
            </span>
            <span class="sketch-strategy__statement-mask">
              <span class="sketch-strategy__statement-line">precise frameworks, balancing</span>
            </span>
            <span class="sketch-strategy__statement-mask">
              <span class="sketch-strategy__statement-line">intuition, analysis, and clarity.</span>
            </span>
          </h3>
        </div>

        <!-- 2. Dual-Column Narrative Section -->
        <div ref="narrativeRowRef" class="sketch-strategy__narrative-row">
          <div class="sketch-strategy__narrative-left">
            <span class="sketch-strategy__narrative-tag">
              <span>From Sketch</span>
              <span>to Strategy</span>
            </span>
          </div>
          <div class="sketch-strategy__narrative-right">
            <p class="sketch-strategy__narrative-p">
              We begin with the essentials — sketches, diagrams, raw outlines. This is where we test the logic of space, the rhythm of circulation, and the relationship between human behavior and built form. Every line on paper is a question and an answer, a tool for clarity. Through dialogue between architects and developers, between vision and feasibility, we evolve each idea into a grounded, strategic direction — thoughtful, adaptable, and ready to be built.
            </p>
          </div>
        </div>

        <!-- 3. Publications & Awards Section -->
        <div ref="awardsRowRef" class="sketch-strategy__awards-row">
          <div class="sketch-strategy__awards-left">
            <span class="sketch-strategy__awards-tag">Publications</span>
          </div>
          <div class="sketch-strategy__awards-right">
            <div class="sketch-strategy__award-item">
              <h4 class="sketch-strategy__award-name">Kukha Design Award 2025</h4>
              <p class="sketch-strategy__award-detail">1st place in the category</p>
              <p class="sketch-strategy__award-detail">"Public Building Architecture"</p>
              <p class="sketch-strategy__award-detail">"Completed Apartment Interior over 60 sq.m"</p>
            </div>

            <div class="sketch-strategy__award-item">
              <h4 class="sketch-strategy__award-name">Addawards 2023</h4>
              <p class="sketch-strategy__award-detail">1st place in the competition "Space", "Garden Ring"</p>
            </div>

            <div class="sketch-strategy__award-item">
              <h4 class="sketch-strategy__award-name">Addawards 2023</h4>
              <p class="sketch-strategy__award-detail">1st place in the competition "Space", "Garden Ring"</p>
            </div>

            <div class="sketch-strategy__award-item">
              <h4 class="sketch-strategy__award-name">Over 80+ awards</h4>
              <p class="sketch-strategy__award-detail">in global competitions</p>
            </div>
          </div>
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

// Continuation section element refs
const editorialRef = ref<HTMLElement | null>(null);
const statementBoxRef = ref<HTMLElement | null>(null);
const narrativeRowRef = ref<HTMLElement | null>(null);
const awardsRowRef = ref<HTMLElement | null>(null);

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
// WebGL Shaders: Full-Screen Cover, Static 3-Scale Noise & Circle Lens
// -------------------------------------------------------------
const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = (a_position + 1.0) * 0.5;
    v_uv.y = 1.0 - v_uv.y; // Flip Y for standard image orientation
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  varying vec2 v_uv;

  uniform sampler2D u_imageA;
  uniform sampler2D u_imageB;
  uniform float u_thresholdA;
  uniform float u_thresholdB;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_mouseRadius;
  uniform float u_mouseHover;

  // Permutation polynomial for Simplex noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  // 2D Simplex Noise
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

  // Multi-Scale Deterministic FBM (Static Organic Noise Mask)
  // Large scale (~15-30%), Medium scale (~5-15%), Fine scale (~1-5%)
  float fbm(vec2 st, float seedOffset) {
    vec2 p = st * 3.4 + vec2(seedOffset * 13.17, seedOffset * 7.91);
    float value = 0.0;

    // Octave 1: Large cloudy regions (~20-30% scale)
    value += 0.52 * (snoise(p) * 0.5 + 0.5);

    // Octave 2: Medium irregular regions (~8-15% scale)
    vec2 p2 = p * 2.5 + vec2(43.1, 19.7);
    value += 0.30 * (snoise(p2) * 0.5 + 0.5);

    // Octave 3: Fine organic edge detail (~2-5% scale)
    vec2 p3 = p2 * 2.7 + vec2(11.3, 87.2);
    value += 0.18 * (snoise(p3) * 0.5 + 0.5);

    return clamp(value, 0.0, 1.0);
  }

  void main() {
    // Full Screen Sizing Cover UV calculation (filling 100vw and 100vh stage)
    float canvasAspect = u_resolution.x / u_resolution.y;
    float imgAspect = 16.0 / 9.0;
    vec2 uv = v_uv;

    if (canvasAspect > imgAspect) {
      // Screen is wider than 16:9: scale Y to cover full screen
      float scale = canvasAspect / imgAspect;
      uv.y = (uv.y - 0.5) / scale + 0.5;
    } else {
      // Screen is taller than 16:9: scale X to cover full screen
      float scale = imgAspect / canvasAspect;
      uv.x = (uv.x - 0.5) / scale + 0.5;
    }

    // Default paper surface is pure solid white (#ffffff)
    vec3 finalColor = vec3(1.0);

    // Sample Image A (Base 70% Preliminary Rough Concept Sketch)
    vec4 rawA = texture2D(u_imageA, clamp(uv, 0.0, 1.0));
    vec3 baseInkA = mix(vec3(1.0), rawA.rgb, 0.85);

    // Sample Image B (Polished 100% Final Architectural Presentation Rendering)
    vec4 rawB = texture2D(u_imageB, clamp(uv, 0.0, 1.0));
    vec3 polishedInkB = clamp(pow(rawB.rgb, vec3(1.25)) * 0.96, 0.0, 1.0);

    // -----------------------------------------------------------
    // SCROLL MATERIALIZATION: Only Image A (Rough Concept Sketch)
    // -----------------------------------------------------------
    float noiseA = fbm(v_uv, 14.82);
    float softnessA = 0.07;
    float alphaA = smoothstep(u_thresholdA - softnessA, u_thresholdA + softnessA, noiseA);
    finalColor = mix(finalColor, baseInkA, alphaA);

    // -----------------------------------------------------------
    // CURSOR LENS WINDOW: Image B is revealed ONLY through the cursor window
    // Only visible once the user has scrolled and can see the first image!
    // -----------------------------------------------------------
    float revealGating = smoothstep(0.35, -0.05, u_thresholdA);

    if (u_mouseHover > 0.005 && revealGating > 0.005) {
      vec2 screenCoord = v_uv * u_resolution;
      vec2 mouseCoord = u_mouse * u_resolution;
      float dist = distance(screenCoord, mouseCoord);

      float radius = u_mouseRadius;
      float feather = 35.0; // Soft organic circle lens edge
      float circleLens = smoothstep(radius, radius - feather, dist) * u_mouseHover * revealGating * alphaA;

      if (circleLens > 0.001) {
        // Reveal the polished detailed architectural drawing inside the cursor window
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
    console.error(gl.getProgramInfoLog(program));
    return;
  }

  gl.useProgram(program);

  // Setup full-screen quad vertices
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

  // Load Image A (70% preliminary rough concept sketch)
  const imgA = new Image();
  imgA.src = '/images/sketch-preliminary.jpg';
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

  // Load Image B (100% final polished detailed architectural rendering)
  const imgB = new Image();
  imgB.src = '/images/sketch-detail.jpg';
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

  // Smooth mouse lerping
  mouseX.value += (targetMouseX.value - mouseX.value) * 0.12;
  mouseY.value += (targetMouseY.value - mouseY.value) * 0.12;
  currentHover.value += (targetHover.value - currentHover.value) * 0.10;

  gl.useProgram(program);

  // Set cached uniform values
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
  }

  if (!import.meta.client || !stageRef.value) return;

  ctx = gsap.context(() => {
    // -------------------------------------------------------------
    // 1. Text Title Scroll Reveal (Line-by-Line Masked Pop-Up)
    // -------------------------------------------------------------
    if (titleBoxRef.value) {
      const titleLines = titleBoxRef.value.querySelectorAll('.sketch-strategy__title-line');
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

    // -------------------------------------------------------------
    // 2. Continuous Organic Materialization of Image A on Dedicated 100vh Stage
    // Gated so Image B is revealed solely through the interactive cursor lens window
    // -------------------------------------------------------------
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

          // Scroll materializes Image A (Rough Concept) from 1.05 down to -0.05
          thresholdA.value = 1.05 - Math.min(1.0, progress / 0.85) * 1.10;
        }
      }
    });

    // Invisible timeline anchor for ScrollTrigger scrub continuity
    tl.to({}, { duration: 1 });

    // -------------------------------------------------------------
    // 3. Editorial Statement Scroll Animation (Line-by-Line Reveal)
    // -------------------------------------------------------------
    if (statementBoxRef.value) {
      const statementLines = statementBoxRef.value.querySelectorAll('.sketch-strategy__statement-line');
      
      gsap.fromTo(
        statementLines,
        {
          yPercent: 115,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: statementBoxRef.value,
            start: 'top 82%',
            end: 'top 35%',
            scrub: 0.7
          },
          yPercent: 0,
          opacity: 1,
          stagger: 0.10,
          ease: 'power3.out'
        }
      );
    }

    // -------------------------------------------------------------
    // 4. Narrative Row Scroll Animation (Dual-Column Line-by-Line)
    // -------------------------------------------------------------
    if (narrativeRowRef.value) {
      const leftTag = narrativeRowRef.value.querySelector<HTMLElement>('.sketch-strategy__narrative-tag');
      const narrativeP = narrativeRowRef.value.querySelector<HTMLElement>('.sketch-strategy__narrative-p');

      let tagLines: HTMLElement[] = [];
      let narrativeLines: HTMLElement[] = [];

      if (leftTag) tagLines = splitTextIntoLines(leftTag);
      if (narrativeP) narrativeLines = splitTextIntoLines(narrativeP);

      if (tagLines.length > 0) {
        gsap.fromTo(
          tagLines,
          { yPercent: 120, opacity: 0 },
          {
            scrollTrigger: {
              trigger: narrativeRowRef.value,
              start: 'top 82%',
              end: 'top 45%',
              scrub: 0.6
            },
            yPercent: 0,
            opacity: 1,
            stagger: 0.08,
            ease: 'power3.out'
          }
        );
      }

      if (narrativeLines.length > 0) {
        gsap.fromTo(
          narrativeLines,
          { yPercent: 115, opacity: 0 },
          {
            scrollTrigger: {
              trigger: narrativeRowRef.value,
              start: 'top 80%',
              end: 'top 35%',
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

    // -------------------------------------------------------------
    // 5. Publications & Awards Scroll Animation (Exact Staggered Cascade)
    // -------------------------------------------------------------
    if (awardsRowRef.value) {
      const awardsTag = awardsRowRef.value.querySelector<HTMLElement>('.sketch-strategy__awards-tag');
      const awardTextEls = awardsRowRef.value.querySelectorAll<HTMLElement>('.sketch-strategy__award-name, .sketch-strategy__award-detail');

      let awardTagLines: HTMLElement[] = [];
      let awardLines: HTMLElement[] = [];

      if (awardsTag) awardTagLines = splitTextIntoLines(awardsTag, { inline: true });
      awardTextEls.forEach(el => {
        awardLines.push(...splitTextIntoLines(el));
      });

      if (awardTagLines.length > 0) {
        gsap.fromTo(
          awardTagLines,
          { yPercent: 120, opacity: 0 },
          {
            scrollTrigger: {
              trigger: awardsRowRef.value,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 0.5
            },
            yPercent: 0,
            opacity: 1,
            ease: 'power3.out'
          }
        );
      }

      if (awardLines.length > 0) {
        gsap.fromTo(
          awardLines,
          { yPercent: 120, opacity: 0 },
          {
            scrollTrigger: {
              trigger: awardsRowRef.value,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 0.7
            },
            yPercent: 0,
            opacity: 1,
            stagger: 0.05,
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

.sketch-strategy {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  color: #111111;
  padding: 0;
  margin: 0;

  // -------------------------------------------------------------
  // Title Header: Clean Dedicated Space ABOVE Image (Zero Overlap)
  // -------------------------------------------------------------
  &__title-box {
    width: 100%;
    padding: 10vh 24px 7vh 24px;
    text-align: center;
    box-sizing: border-box;
    background-color: #ffffff;
    position: relative;
    z-index: 5;
    will-change: transform, opacity;
  }

  &__title {
    font-family: $font-sans;
    font-size: clamp(52px, 5vw, 88px);
    font-weight: 400; // Clean regular grotesk sans-serif
    line-height: 0.92;
    letter-spacing: -0.035em;
    color: #111111; // Solid black
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
  // Architectural Canvas Stage: Dedicated 100vh Viewport Below Title
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

  // Debug overlay
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
  // Continuation Editorial Section: Statement, Narrative & Awards
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

  // 1. Large Serif Statement Headline
  &__statement-box {
    width: 100%;
    margin-bottom: clamp(5.5rem, 11vh, 11.5rem);
  }

  &__statement {
    font-family: $font-serif;
    font-size: clamp(42px, 5.6vw, 92px);
    font-weight: 400;
    line-height: 0.98;
    letter-spacing: -0.025em;
    color: #111111;
    margin: 0;
    padding: 0;
  }

  &__statement-mask {
    display: block;
    overflow: hidden;
    padding-bottom: 0.12em;
    line-height: inherit;
  }

  &__statement-line {
    display: block;
    will-change: transform, opacity;
  }

  // 2. Dual-Column Narrative Section
  &__narrative-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp(2rem, 5vw, 6rem);
    width: 100%;
    margin-bottom: clamp(5rem, 10vh, 10.5rem);
  }

  &__narrative-left {
    flex-shrink: 0;
    width: clamp(140px, 18vw, 240px);
    will-change: transform, opacity;
  }

  &__narrative-tag {
    display: flex;
    flex-direction: column;
    font-family: $font-sans;
    font-size: clamp(0.8125rem, 0.85vw, 0.875rem);
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: #111111;
  }

  &__narrative-right {
    margin-left: auto; // Pushes narrative paragraph to the right side of page
    width: 100%;
    max-width: clamp(540px, 62vw, 980px);
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

  // 3. Publications & Awards Section (Centered on Page)
  &__awards-row {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: clamp(2.5rem, 6vw, 6rem);
    width: 100%;
    max-width: 820px;
    margin: 0 auto; // Centers the 3rd text section in the middle of the page
  }

  &__awards-left {
    flex-shrink: 0;
    width: auto;
    min-width: 100px;
    will-change: transform, opacity;
  }

  &__awards-tag {
    font-family: $font-sans;
    font-size: clamp(0.8125rem, 0.85vw, 0.875rem);
    font-weight: 400;
    letter-spacing: -0.01em;
    color: #111111;
    display: inline-block;
  }

  &__awards-right {
    flex: 1;
    min-width: 0;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: clamp(1.75rem, 3.2vh, 2.75rem);
  }

  &__award-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    will-change: transform, opacity;
  }

  &__award-name {
    font-family: $font-sans;
    font-size: clamp(0.8125rem, 0.85vw, 0.875rem);
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #111111;
    margin: 0 0 0.15rem 0;
    padding: 0;
  }

  &__award-detail {
    font-family: $font-sans;
    font-size: clamp(0.75rem, 0.8vw, 0.8125rem);
    line-height: 1.4;
    color: #70757d;
    margin: 0;
    padding: 0;
  }

  // Responsive Breakpoints
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

    &__statement-box {
      margin-bottom: 3.5rem;
    }

    &__statement {
      font-size: clamp(28px, 8.5vw, 44px);
      line-height: 1.05;
    }

    &__narrative-row {
      flex-direction: column;
      gap: 1.25rem;
      margin-bottom: 3.5rem;
    }

    &__narrative-left {
      width: 100%;
    }

    &__narrative-p {
      font-size: clamp(18px, 5vw, 24px);
      line-height: 1.35;
    }

    &__awards-row {
      flex-direction: column;
      gap: 1.25rem;
    }

    &__awards-left {
      width: 100%;
    }

    &__awards-right {
      gap: 1.75rem;
    }
  }
}
</style>

