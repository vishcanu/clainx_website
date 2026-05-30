// =========================================================
// LIB: Utility functions
// =========================================================

/**
 * Clamps a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Maps a value from one range to another
 */
export function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

/**
 * Lerp between two values
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Format number with K/M suffix
 */
export function formatNumber(num: number): string {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
}

/**
 * Generate random number between min and max
 */
export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  }) as T;
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: Element, threshold = 0): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - threshold) &&
    rect.bottom >= 0
  );
}

/**
 * CSS class names joiner
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Generate HEX color from string (for avatars)
 */
export function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 60%)`;
}
