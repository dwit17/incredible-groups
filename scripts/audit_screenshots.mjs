import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3001';
const OUT_DIR = path.resolve('C:/Users/gosai/.gemini/antigravity-ide/brain/1404259e-43af-4584-9b16-ed4bde80b462/scratch/screenshots');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: 'phone-390x844', width: 390, height: 844 },
  { name: 'small-android-360x740', width: 360, height: 740 },
  { name: 'tablet-portrait-820x1180', width: 820, height: 1180 },
  { name: 'tablet-landscape-1024x768', width: 1024, height: 768 }
];

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'projects-index', path: '/projects' },
  { name: 'project-detail', path: '/projects/the-aurum-monolith' },
  { name: 'companies-index', path: '/companies' },
  { name: 'company-detail', path: '/companies/vanguard-proptech' },
  { name: 'contact', path: '/contact' },
  { name: 'terms', path: '/terms' },
  { name: 'privacy', path: '/privacy' },
  { name: 'legal', path: '/legal' }
];

async function runAudit() {
  const browser = await chromium.launch({ headless: true });
  const report = [];

  for (const vp of VIEWPORTS) {
    console.log(`\n========================================`);
    console.log(`Testing Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`========================================`);

    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2
    });

    const page = await context.newPage();

    for (const pg of PAGES) {
      const url = `${BASE_URL}${pg.path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 25000 });
        // Wait for preloader & layout settling
        await page.waitForTimeout(2000);

        // Check horizontal overflow
        const overflowData = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const innerWidth = window.innerWidth;
          const hasOverflow = scrollWidth > innerWidth + 1;

          // Find overflowing elements if any
          const overflowingElements = [];
          if (hasOverflow) {
            const allElements = document.querySelectorAll('*');
            for (const el of allElements) {
              const r = el.getBoundingClientRect();
              if (r.right > innerWidth + 1.5 || r.left < -1.5) {
                const tag = el.tagName.toLowerCase();
                const cls = el.className ? `.${String(el.className).split(' ').slice(0, 2).join('.')}` : '';
                const id = el.id ? `#${el.id}` : '';
                overflowingElements.push({
                  selector: `${tag}${id}${cls}`,
                  left: Math.round(r.left),
                  right: Math.round(r.right),
                  width: Math.round(r.width)
                });
                if (overflowingElements.length >= 8) break;
              }
            }
          }

          return {
            scrollWidth,
            innerWidth,
            hasOverflow,
            diff: scrollWidth - innerWidth,
            overflowingElements
          };
        });

        const screenshotPath = path.join(OUT_DIR, `${pg.name}-${vp.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });

        const item = {
          page: pg.name,
          route: pg.path,
          viewport: vp.name,
          width: vp.width,
          height: vp.height,
          scrollWidth: overflowData.scrollWidth,
          hasOverflow: overflowData.hasOverflow,
          overflowDiff: overflowData.diff,
          overflowElements: overflowData.overflowingElements,
          screenshot: screenshotPath
        };

        report.push(item);
        console.log(`[${pg.name}] ${vp.name}: ${overflowData.hasOverflow ? `❌ OVERFLOW by ${overflowData.diff}px` : '✅ OK'} (scrollWidth: ${overflowData.scrollWidth}px, innerWidth: ${overflowData.innerWidth}px)`);
        if (overflowData.hasOverflow && overflowData.overflowingElements.length > 0) {
          console.log(`  Elements:`, JSON.stringify(overflowData.overflowingElements));
        }
      } catch (err) {
        console.error(`Error on ${pg.name} @ ${vp.name}:`, err.message);
      }
    }

    // Special test: Menu Drawer on mobile
    if (vp.name === 'phone-390x844') {
      try {
        await page.goto(`${BASE_URL}/about`, { waitUntil: 'networkidle', timeout: 15000 });
        await page.waitForTimeout(1500);

        const toggleBtn = page.locator('.header__mobile-toggle');
        if (await toggleBtn.isVisible()) {
          await toggleBtn.click();
          await page.waitForTimeout(600);
          const menuScreenshot = path.join(OUT_DIR, `menu-drawer-${vp.name}.png`);
          await page.screenshot({ path: menuScreenshot, fullPage: false });
          console.log(`[Menu Drawer] Captured open menu drawer screenshot`);
        }
      } catch (e) {
        console.error(`Menu drawer test error:`, e.message);
      }
    }

    await context.close();
  }

  await browser.close();

  const reportPath = path.join(OUT_DIR, 'audit_report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\nAudit complete! Report written to ${reportPath}`);
}

runAudit().catch(console.error);
