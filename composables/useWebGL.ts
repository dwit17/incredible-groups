// DOM-Synced Three.js WebGL Engine with Custom Sketch Reveal & Distortion Shaders
import { ref } from 'vue';
import * as THREE from 'three';
import { gsap } from 'gsap';

export interface WebGLPlaneTarget {
  id: string;
  element: HTMLElement;
  textureUrl: string;
  mesh?: THREE.Mesh;
  material?: THREE.ShaderMaterial;
  aspectRatio?: number;
  progress?: number;
}

// Custom Vertex Shader with Scroll & Hover Distortion
const vertexShader = `
  varying vec2 vUv;
  uniform vec2 uOffset;
  uniform float uDistortion;
  uniform float uHover;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Subtle wave distortion based on displacement & hover
    float wave = sin(pos.y * 0.01 + uDistortion * 2.0) * (uDistortion * 15.0);
    pos.x += wave;
    pos.z += sin(pos.x * 0.02) * (uHover * 10.0);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

// Custom Fragment Shader with Architectural Sketch Reveal & Luminance Ink Lines
const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uProgress;
  uniform float uHover;
  uniform vec2 uResolution;
  uniform vec2 uTextureSize;
  varying vec2 vUv;

  // Simple pseudo-noise for organic sketch line thresholding
  float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
    // Preserve image aspect ratio / cover calculation
    vec2 ratio = vec2(
      min((uResolution.x / uResolution.y) / (uTextureSize.x / uTextureSize.y), 1.0),
      min((uResolution.y / uResolution.x) / (uTextureSize.y / uTextureSize.x), 1.0)
    );
    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    vec4 texColor = texture2D(uTexture, uv);

    // Calculate luminance for architectural sketch line effect
    float luminance = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
    
    // Procedural noise pattern simulating hand-drawn graphite / ink lines
    float noise = rand(uv * 120.0) * 0.15;
    
    // Threshold progression
    float threshold = smoothstep(0.0, 1.0, uProgress);
    
    // Monochrome ink sketch representation
    float sketchLine = step(0.35 + noise, luminance);
    vec3 sketchColor = mix(vec3(0.08, 0.08, 0.09), vec3(0.78, 0.66, 0.49), sketchLine);
    
    // Dynamic transition from ink sketch to full photographic tone
    vec3 finalColor = mix(sketchColor, texColor.rgb, threshold);
    
    // Hover micro-tinting
    finalColor += vec3(0.04, 0.03, 0.02) * uHover;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

class WebGLSceneManager {
  private container: HTMLElement | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private renderer: THREE.WebGLRenderer | null = null;
  private planeTargets: Map<string, WebGLPlaneTarget> = new Map();
  private textureLoader: THREE.TextureLoader = new THREE.TextureLoader();
  private isRunning: boolean = false;
  private currentScroll: number = 0;
  private lastScroll: number = 0;
  private scrollVelocity: number = 0;
  private fov: number = 45;

  init(container: HTMLElement, canvas: HTMLCanvasElement) {
    if (!import.meta.client) return;

    this.container = container;
    this.canvas = canvas;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Scene setup
    this.scene = new THREE.Scene();

    // 2. Camera setup with distance calculated for 1:1 pixel-to-unit mapping
    const cameraDistance = height / (2 * Math.tan((this.fov * Math.PI) / 360));
    this.camera = new THREE.PerspectiveCamera(this.fov, width / height, 0.1, 5000);
    this.camera.position.z = cameraDistance;

    // 3. Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Register to single shared gsap.ticker
    this.isRunning = true;
    gsap.ticker.add(this.renderLoop);

    // 5. Window Resize Handler
    window.addEventListener('resize', this.onResize);
  }

  private renderLoop = () => {
    if (!this.isRunning || !this.renderer || !this.scene || !this.camera) return;
    if (this.planeTargets.size === 0) return; // Skip rendering when no planes registered

    // Calculate scroll velocity for shader distortion
    this.currentScroll = window.scrollY || window.pageYOffset;
    this.scrollVelocity = (this.currentScroll - this.lastScroll) * 0.005;
    this.lastScroll = this.currentScroll;

    // Dampen scroll velocity
    this.scrollVelocity *= 0.92;

    // Update each registered DOM-synced plane mesh position and rect
    this.updatePlanes();

    this.renderer.render(this.scene, this.camera);
  };

  registerPlane(target: WebGLPlaneTarget) {
    if (!this.scene) return;

    const rect = target.element.getBoundingClientRect();
    const geometry = new THREE.PlaneGeometry(rect.width, rect.height, 16, 16);

    const texture = this.textureLoader.load(target.textureUrl);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTexture: { value: texture },
        uProgress: { value: target.progress !== undefined ? target.progress : 1.0 },
        uHover: { value: 0.0 },
        uDistortion: { value: 0.0 },
        uResolution: { value: new THREE.Vector2(rect.width, rect.height) },
        uTextureSize: { value: new THREE.Vector2(800, 1000) }
      },
      transparent: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);

    target.mesh = mesh;
    target.material = material;
    this.planeTargets.set(target.id, target);

    // Mark DOM target as WebGL active
    target.element.classList.add('webgl-active');
    this.updatePlanePosition(target);
  }

  unregisterPlane(id: string) {
    const target = this.planeTargets.get(id);
    if (target && this.scene) {
      if (target.mesh) {
        this.scene.remove(target.mesh);
        target.mesh.geometry.dispose();
        if (target.material) target.material.dispose();
      }
      target.element?.classList.remove('webgl-active');
      this.planeTargets.delete(id);
    }
  }

  setPlaneProgress(id: string, progress: number) {
    const target = this.planeTargets.get(id);
    if (target?.material) {
      target.material.uniforms.uProgress.value = progress;
    }
  }

  setPlaneHover(id: string, isHovered: boolean) {
    const target = this.planeTargets.get(id);
    if (target?.material) {
      gsap.to(target.material.uniforms.uHover, {
        value: isHovered ? 1.0 : 0.0,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }

  private updatePlanePosition(target: WebGLPlaneTarget) {
    if (!target.mesh || !this.camera) return;

    const rect = target.element.getBoundingClientRect();
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Convert DOM pixels to Three.js coordinates
    const x = rect.left + rect.width / 2 - width / 2;
    const y = -rect.top - rect.height / 2 + height / 2;

    target.mesh.position.set(x, y, 0);

    // Update geometry size if dimensions changed
    if (
      target.mesh.geometry.parameters.width !== rect.width ||
      target.mesh.geometry.parameters.height !== rect.height
    ) {
      target.mesh.geometry.dispose();
      target.mesh.geometry = new THREE.PlaneGeometry(rect.width, rect.height, 16, 16);
      if (target.material) {
        target.material.uniforms.uResolution.value.set(rect.width, rect.height);
      }
    }

    // Pass distortion uniform
    if (target.material) {
      target.material.uniforms.uDistortion.value = this.scrollVelocity;
    }

    // Hide planes if completely offscreen to optimize GPU
    const isVisible = rect.bottom > 0 && rect.top < height;
    target.mesh.visible = isVisible;
  }

  private updatePlanes() {
    this.planeTargets.forEach((target) => {
      this.updatePlanePosition(target);
    });
  }

  private onResize = () => {
    if (!this.renderer || !this.camera) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.position.z = height / (2 * Math.tan((this.fov * Math.PI) / 360));
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.updatePlanes();
  };

  dispose() {
    this.isRunning = false;
    gsap.ticker.remove(this.renderLoop);
    window.removeEventListener('resize', this.onResize);

    this.planeTargets.forEach((target) => {
      if (target.mesh && this.scene) {
        this.scene.remove(target.mesh);
        target.mesh.geometry.dispose();
        target.material?.dispose();
      }
    });
    this.planeTargets.clear();

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
    this.scene = null;
    this.camera = null;
  }
}

const webglManager = new WebGLSceneManager();

export function useWebGL() {
  return {
    webglManager,
    initWebGL: (container: HTMLElement, canvas: HTMLCanvasElement) => webglManager.init(container, canvas),
    registerPlane: (target: WebGLPlaneTarget) => webglManager.registerPlane(target),
    unregisterPlane: (id: string) => webglManager.unregisterPlane(id),
    setPlaneProgress: (id: string, progress: number) => webglManager.setPlaneProgress(id, progress),
    setPlaneHover: (id: string, isHovered: boolean) => webglManager.setPlaneHover(id, isHovered),
    disposeWebGL: () => webglManager.dispose()
  };
}
