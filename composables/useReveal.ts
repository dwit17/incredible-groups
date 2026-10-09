// GSAP Line-by-Line Split & ScrollTrigger Reveal Composable
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Splits text inside an HTMLElement into individual wrapped lines
 * preserving layout, explicit <br> line breaks, and natural wrapping across responsive viewports.
 */
export function splitTextIntoLines(el: HTMLElement, options: { inline?: boolean } = {}): HTMLElement[] {
  if (!el || !import.meta.client) return [];

  // Check if already split
  const existingInners = el.querySelectorAll<HTMLElement>('.split-line-inner');
  if (existingInners.length > 0) {
    return Array.from(existingInners);
  }

  const isInline = options.inline ?? (window.getComputedStyle(el).display.includes('inline') && el.tagName.toLowerCase() === 'span');
  const displayVal = isInline ? 'inline-block' : 'block';

  // If element contains <br> tags, process each segment separately
  const htmlContent = el.innerHTML;
  if (htmlContent.includes('<br') || htmlContent.includes('<BR')) {
    const rawSegments = htmlContent.split(/<br\s*[\/]?>/gi);
    const allLineStrings: string[] = [];

    for (const seg of rawSegments) {
      const cleanSeg = seg.replace(/<[^>]*>/g, '').trim();
      if (!cleanSeg) continue;
      const words = cleanSeg.split(/\s+/).filter(Boolean);
      if (words.length === 0) continue;

      el.innerHTML = words
        .map(word => `<span class="split-word-temp" style="display:inline-block;white-space:pre;">${word} </span>`)
        .join('');

      const wordSpans = el.querySelectorAll<HTMLElement>('.split-word-temp');
      let currentLineWords: string[] = [];
      let currentTop = -1;

      wordSpans.forEach((span) => {
        const top = Math.round(span.offsetTop);
        const word = span.textContent?.trim() || '';

        if (currentTop === -1) {
          currentTop = top;
          currentLineWords.push(word);
        } else if (Math.abs(top - currentTop) <= 6) {
          currentLineWords.push(word);
        } else {
          allLineStrings.push(currentLineWords.join(' '));
          currentLineWords = [word];
          currentTop = top;
        }
      });

      if (currentLineWords.length > 0) {
        allLineStrings.push(currentLineWords.join(' '));
      }
    }

    el.innerHTML = allLineStrings
      .map(
        line =>
          `<span class="split-line-mask" style="display:${displayVal};overflow:hidden;vertical-align:top;padding-bottom:0.08em;line-height:inherit;"><span class="split-line-inner" style="display:${displayVal};will-change:transform,opacity;">${line}</span></span>`
      )
      .join(isInline ? ' ' : '');

    return Array.from(el.querySelectorAll<HTMLElement>('.split-line-inner'));
  }

  const rawText = el.innerText || el.textContent || '';
  const words = rawText.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  // Temporarily render words as inline spans to measure line breaks
  el.innerHTML = words
    .map(word => `<span class="split-word-temp" style="display:inline-block;white-space:pre;">${word} </span>`)
    .join('');

  const wordSpans = el.querySelectorAll<HTMLElement>('.split-word-temp');
  if (wordSpans.length === 0) return [];

  let currentLineWords: string[] = [];
  let currentTop = -1;
  const lineStrings: string[] = [];

  wordSpans.forEach((span) => {
    const top = Math.round(span.offsetTop);
    const word = span.textContent?.trim() || '';

    if (currentTop === -1) {
      currentTop = top;
      currentLineWords.push(word);
    } else if (Math.abs(top - currentTop) <= 6) {
      currentLineWords.push(word);
    } else {
      lineStrings.push(currentLineWords.join(' '));
      currentLineWords = [word];
      currentTop = top;
    }
  });

  if (currentLineWords.length > 0) {
    lineStrings.push(currentLineWords.join(' '));
  }

  // Replace element content with masked lines
  el.innerHTML = lineStrings
    .map(
      line =>
        `<span class="split-line-mask" style="display:${displayVal};overflow:hidden;vertical-align:top;padding-bottom:0.08em;line-height:inherit;"><span class="split-line-inner" style="display:${displayVal};will-change:transform,opacity;">${line}</span></span>`
    )
    .join(isInline ? ' ' : '');

  return Array.from(el.querySelectorAll<HTMLElement>('.split-line-inner'));
}

export function useReveal() {
  /**
   * Animates lines of text in an element line-by-line using GSAP ScrollTrigger
   */
  const animateTextReveal = (
    element: HTMLElement | string,
    options: {
      delay?: number;
      stagger?: number;
      duration?: number;
      trigger?: HTMLElement | string;
      start?: string;
      end?: string;
      scrub?: boolean | number;
      once?: boolean;
      ease?: string;
      yPercent?: number;
      autoSplit?: boolean;
    } = {}
  ) => {
    if (!import.meta.client) return null;

    const el = typeof element === 'string' ? document.querySelector<HTMLElement>(element) : element;
    if (!el) return null;

    let lines: HTMLElement[] = [];

    if (options.autoSplit !== false) {
      lines = splitTextIntoLines(el);
    }

    if (lines.length === 0) {
      const queried = el.querySelectorAll<HTMLElement>('.split-line-inner, .line-inner, .line, [data-line]');
      lines = queried.length > 0 ? Array.from(queried) : [el];
    }

    const triggerTarget = options.trigger
      ? (typeof options.trigger === 'string' ? document.querySelector<HTMLElement>(options.trigger) : options.trigger)
      : el;

    return gsap.fromTo(
      lines,
      {
        yPercent: options.yPercent !== undefined ? options.yPercent : 115,
        opacity: 0
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: options.duration || 1.15,
        delay: options.delay || 0,
        stagger: options.stagger !== undefined ? options.stagger : 0.08,
        ease: options.ease || 'power3.out',
        scrollTrigger: triggerTarget
          ? {
              trigger: triggerTarget,
              start: options.start || 'top 85%',
              end: options.end,
              toggleActions: options.once !== false ? 'play none none none' : 'play none none reverse',
              scrub: options.scrub
            }
          : undefined
      }
    );
  };

  /**
   * Animates multiple elements line-by-line across a container
   */
  const animateContainerLines = (
    container: HTMLElement | string,
    selector: string = 'p, h1, h2, h3, h4, .split-target',
    options: {
      start?: string;
      stagger?: number;
      scrub?: boolean | number;
      delay?: number;
    } = {}
  ) => {
    if (!import.meta.client) return;

    const cont = typeof container === 'string' ? document.querySelector<HTMLElement>(container) : container;
    if (!cont) return;

    const targets = cont.querySelectorAll<HTMLElement>(selector);
    const allLines: HTMLElement[] = [];

    targets.forEach((target) => {
      const lines = splitTextIntoLines(target);
      allLines.push(...lines);
    });

    if (allLines.length === 0) return;

    gsap.fromTo(
      allLines,
      {
        yPercent: 115,
        opacity: 0
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.1,
        stagger: options.stagger !== undefined ? options.stagger : 0.06,
        delay: options.delay || 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cont,
          start: options.start || 'top 82%',
          toggleActions: 'play none none none',
          scrub: options.scrub
        }
      }
    );
  };

  return {
    splitTextIntoLines,
    animateTextReveal,
    animateContainerLines
  };
}
