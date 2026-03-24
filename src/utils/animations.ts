/**
 * Shared animation utilities — single source of truth for easing curves,
 * durations, and reusable animation helpers used across all pages.
 */
import { animate } from 'motion';

/* ── Easing curves ────────────────────────────────────────────── */

/** Spring overshoot — elements launch up and settle past their target */
export const SPRING: [number, number, number, number] = [0.34, 1.45, 0.64, 1];

/** Smooth ease-out — general-purpose deceleration */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Buttery ease-in-out — used for grey line draws */
export const EASE_IN_OUT: [number, number, number, number] = [0.45, 0, 0.55, 1];

/* ── Reduced-motion check ─────────────────────────────────────── */

/** Returns true when the user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ── Reusable animation helpers ───────────────────────────────── */

/** Fade + spring lift — headlines, text blocks, table items */
export function springLift(
  el: Element,
  { y = 40, duration = 0.85, delay = 0.15 } = {}
) {
  if (prefersReducedMotion()) {
    (el as HTMLElement).style.opacity = '1';
    return;
  }
  animate(el, { opacity: [0, 1], y: [y, 0] }, { duration, delay, easing: SPRING });
}

/** Fade only — no movement */
export function fadeIn(
  el: Element,
  { duration = 0.7, delay = 0.5 } = {}
) {
  if (prefersReducedMotion()) {
    (el as HTMLElement).style.opacity = '1';
    return;
  }
  animate(el, { opacity: [0, 1] }, { duration, delay, easing: EASE_OUT });
}

/** Grey line scaleX draw — buttery smooth */
export function lineDraw(
  el: HTMLElement,
  { duration = 1.8, delay = 0.35 } = {}
) {
  if (prefersReducedMotion()) {
    el.style.transform = 'scaleX(1)';
    return;
  }
  el.style.transformOrigin = 'left center';
  animate(el, { scaleX: [0, 1] }, { duration, delay, easing: EASE_IN_OUT });
}

/** Image clip-path wipe from bottom + inner scale/drift spring */
export function imageReveal(
  container: Element,
  { duration = 0.8, delay = 0.38 } = {}
) {
  if (prefersReducedMotion()) {
    (container as HTMLElement).style.clipPath = 'inset(0% 0 0 0)';
    return;
  }
  animate(
    container,
    { clipPath: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'] },
    { duration, delay, easing: EASE_OUT }
  );
  const img = container.querySelector<HTMLElement>('img');
  if (img) {
    animate(
      img,
      { scale: [1.1, 1.0], y: [25, 0] },
      { duration: duration + 0.3, delay, easing: SPRING }
    );
  }
}
