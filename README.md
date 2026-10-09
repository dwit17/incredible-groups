# Incredible Groups — Premium Real Estate & Alternative Investments

An ultra-premium, editorial web platform for **Incredible Groups** (India), built with Nuxt 3, SCSS, GSAP, Lenis, and Three.js. Replicates the exact motion, timing, smooth-scrolling feel, and DOM-synced WebGL shaders of world-class architectural bureau websites while adhering strictly to clean-room development rules.

---

## 🏛️ Technical Stack & Architecture

- **Core Framework:** [Nuxt 3](https://nuxt.com/) + Vue 3 + TypeScript
- **Styling Architecture:** Pure Sass/SCSS with BEM and 12-column responsive layout system (Zero Tailwind / UI kits)
- **Animation Engine:** [GSAP](https://gsap.com/) + ScrollTrigger + SplitText
- **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis)
- **3D Graphics & Shaders:** [Three.js](https://threejs.org/) (DOM-synced WebGL image planes with custom sketch reveal and distortion shaders)
- **SEO & Meta:** `@nuxtjs/seo` (Robots, Sitemap, OpenGraph, Twitter Cards, Schema.org Organization & RealEstateAgent JSON-LD)
- **Analytics:** `nuxt-gtag` (GA4) + Cloudflare Web Analytics beacon
- **Hosting / Preset:** Nitro preset configured for **Vercel** with full route pre-rendering (`nitro.prerender.routes`)

---

## ⚡ Key Technical Behaviors

1. **One Shared Clock Loop (`gsap.ticker`):**
   - Lenis smooth scroll and Three.js render loops run strictly off the single `gsap.ticker` (`lenis.raf` inside `gsap.ticker.add`, `gsap.ticker.lagSmoothing(0)`).
   - Guarantees zero frame-drop, zero jitter, and frame-perfect alignment between DOM elements and WebGL planes.

2. **DOM-Synced WebGL Layer:**
   - HTML DOM acts as the single source of truth for sizing and positioning.
   - On desktop, project images are mapped to Three.js planes using `getBoundingClientRect()` updated on scroll/resize.
   - High-performance native `<picture>` / `<img>` elements automatically activate on mobile, low-power devices, and `prefers-reduced-motion`.

3. **Architectural Sketch Reveal Shader:**
   - Custom GLSL fragment shader transforms image luminance into procedural ink sketch lines thresholded against scroll scrub progress before resolving into high-definition photography.

4. **Multi-Mode Viewing:**
   - Homepage & `/projects` support interactive **Grid**, **List**, and **Active Gallery** modes where hovering a project highlights it and fades non-hovered siblings to faint outlines (`opacity: 0.25`).

5. **Pinned Leadership Geometric Morphing Sequence:**
   - ScrollTrigger-pinned stage scrubbed across $2.5\times$ viewport height, morphing circular portraits into squircle, organic curves, and hexagonal geometries while updating director profiles in real-time.

---

## 🚀 Quick Start & Local Development

### 1. Prerequisites
- **Node.js:** v18.0.0 or higher (v20+ recommended)
- **Package Manager:** `npm` (or `pnpm` / `yarn`)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-org/incredible-groups.git
cd incredible-groups

# Install dependencies
npm install
```

### 3. Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Static Generation
```bash
# Build for Vercel / Production deployment
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```ini
# Site Canonical URL
NUXT_PUBLIC_SITE_URL=https://incrediblegroups.com

# Google Analytics 4 Measurement ID
NUXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX

# WhatsApp Direct Inquiries (Primary Contact Number)
WHATSAPP_ADMIN_PHONE=919737972097

# Optional: WhatsApp Cloud API Credentials (for server/api/whatsapp.post.ts)
WHATSAPP_CLOUD_API_TOKEN=your_meta_cloud_api_token_here
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id_here
```

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub / GitLab.
2. Import the project into your [Vercel Dashboard](https://vercel.com).
3. Vercel will automatically detect Nuxt 3 with the Nitro Vercel preset (`preset: 'vercel'`).
4. Add the environment variables from above in **Project Settings > Environment Variables**.
5. Deploy!

---

## 🎨 White-Label Customization Guide

### 1. Colors & Design Tokens
All color tokens, accents, and spacing scales are isolated in [`assets/scss/_variables.scss`](file:///e:/RealEstate/assets/scss/_variables.scss).
- `$color-bg`: Main dark background (`#0c0d0e`)
- `$color-accent`: Champagne gold brand accent (`#c8a97e`)
- `$color-text`: Primary typography color (`#f3f3f4`)

### 2. Custom Fonts
Typography variables are defined in [`assets/scss/_variables.scss`](file:///e:/RealEstate/assets/scss/_variables.scss) and `@font-face` stubs are located in [`assets/scss/_typography.scss`](file:///e:/RealEstate/assets/scss/_typography.scss).
1. Place your `.woff2` files in `public/fonts/`.
2. Uncomment the `@font-face` declarations in `_typography.scss`.
3. Update `$font-display` and `$font-body`.

### 3. Data & Content Management
All content is fully typed and ready to migrate to a headless CMS (e.g. Prismic, Storyblok, Strapi):
- **Real Estate Projects:** [`data/projects.ts`](file:///e:/RealEstate/data/projects.ts)
- **10 Portfolio Investment Companies:** [`data/companies.ts`](file:///e:/RealEstate/data/companies.ts)
- **Leadership & Directors:** [`data/team.ts`](file:///e:/RealEstate/data/team.ts)

---

## 📋 TODO Checklist for Technical Lead

- [ ] **Custom Typography:** Provide brand `.woff2` font files and link in `_typography.scss`.
- [ ] **High-Resolution Photography:** Replace SVGs in `/public/placeholders/` with production photography.
- [ ] **Google Analytics:** Set `NUXT_PUBLIC_GTAG_ID` in `.env` / Vercel settings.
- [ ] **Cloudflare Web Analytics:** Replace `YOUR_CLOUDFLARE_BEACON_TOKEN_HERE` in `nuxt.config.ts`.
- [ ] **Meta Cloud API:** Add WhatsApp Cloud API token to `.env` if automated backend CRM webhook integration is desired.
