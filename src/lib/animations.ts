// =========================================================
// LIB: Animation utilities & GSAP helpers
// =========================================================

/**
 * Scroll reveal observer — attaches IntersectionObserver to .reveal elements
 */
export function initScrollReveal(): void {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  document
    .querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children')
    .forEach((el) => observer.observe(el));
}

/**
 * Animated counter — counts up to target value
 */
export function animateCounter(
  element: HTMLElement,
  target: number,
  duration = 2000,
  suffix = ''
): void {
  const startTime = performance.now();
  const start = 0;

  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);
    element.textContent = current.toLocaleString() + suffix;

    if (progress < 1) requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}

/**
 * Init counter animations triggered by intersection
 */
export function initCounters(): void {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset['target'] ?? '0', 10);
          const suffix = el.dataset['suffix'] ?? '';
          const duration = parseInt(el.dataset['duration'] ?? '2000', 10);
          animateCounter(el, target, duration, suffix);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-counter]').forEach((el) => observer.observe(el));
}

/**
 * Cursor glow effect
 */
export function initCursorGlow(): void {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(pointer: coarse)').matches) return; // Skip on touch devices

  const cursor = document.createElement('div');
  cursor.className = 'cursor-glow';
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  };

  animateCursor();
}

/**
 * Parallax effect for elements with data-parallax attribute
 */
export function initParallax(): void {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const elements = document.querySelectorAll<HTMLElement>('[data-parallax]');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    elements.forEach((el) => {
      const speed = parseFloat(el.dataset['parallax'] ?? '0.3');
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2 + scrollY;
      const offset = (scrollY - centerY) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Stagger animation helper
 */
export function staggerReveal(selector: string, delay = 100): void {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, i * delay);
  });
}

/**
 * Floating orbs creator
 */
export function createFloatingOrbs(
  container: HTMLElement,
  count = 5,
  colors = ['#00D4FF', '#8B5CF6', '#00FFE7']
): void {
  for (let i = 0; i < count; i++) {
    const orb = document.createElement('div');
    const size = Math.random() * 300 + 100;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 8;
    const duration = Math.random() * 6 + 10;

    orb.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: radial-gradient(circle, ${color}15 0%, transparent 70%);
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      transform: translate(-50%, -50%);
      animation: orbFloat ${duration}s ease-in-out ${delay}s infinite;
      pointer-events: none;
      z-index: 0;
    `;

    container.appendChild(orb);
  }
}
