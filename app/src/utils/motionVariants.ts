/**
 * Shared Framer Motion design system for the clinic site.
 *
 * Every section pulls its easing curve, durations, viewport rules and
 * micro-interactions from here so the whole page animates with one
 * consistent, silky 60fps feel.
 *
 * Conventions used across the app:
 * - `initial="hidden"` + `animate="visible"`  -> plays on page load (hero, navbar).
 * - `initial="hidden"` + `whileInView="visible"` + `viewportOnce`
 *                                             -> plays once when scrolled into view.
 */

import type { TargetAndTransition, Variants } from 'framer-motion';

/** Apple/Stripe-grade cubic bezier: luxurious, silky deceleration. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Scroll reveals fire exactly once per visit, so nothing re-plays on scroll-back. */
export const viewportOnce = { once: true, amount: 0.15 };

/** Same, but requires a little more of the element to be on screen first. */
export const viewportReveal = { once: true, amount: 0.2 };

/** Common viewport threshold preset */
export const VIEWPORT_THRESHOLDS = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -40px 0px',
};

/* ------------------------------------------------------------------ *
 * Navbar variants
 * ------------------------------------------------------------------ */

/** Brand text & logo slide in */
export const brandTextVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Staggered navigation links */
export const navLinksVariants = (index: number = 0): Variants => ({
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.08 * index, ease: EASE },
  },
});

/** Navbar quick CTA button */
export const ctaButtonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.2, ease: EASE },
  },
};


/** Hero wrapper: cinematic scale-up appear on first paint. */
export const heroSectionVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/** 3D anatomical centerpiece showcase frame. */
export const showcaseFrameVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.3, ease: EASE },
  },
};

/**
 * Scroll-triggered card scale-up. Pass `custom={index}` to the motion
 * component so cards ripple in, one column at a time.
 */
export const scrollCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: (index % 4) * 0.08, ease: EASE },
  }),
};

/** Persistent header: smooth slide-down entrance on page load. */
export const navbarVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Success modal: tactile scale-up pop. */
export const modalPopVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 320, damping: 26 },
  },
};

/** Modal backdrop: quick fade. */
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
};

/* ------------------------------------------------------------------ *
 * Delay helpers — bake the stagger delay straight into the variant
 * ------------------------------------------------------------------ */

/** Soft rise + fade. */
export const fadeRise = (delay = 0, duration = 0.6): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration, delay, ease: EASE } },
});

/** Scale-up appear (0.94 -> 1 by default). */
export const scaleUp = (delay = 0, from = 0.94, duration = 0.7): Variants => ({
  hidden: { opacity: 0, scale: from, y: 18 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration, delay, ease: EASE } },
});

/** Slide + scale in from the left or the right. */
export const slideIn = (from: 'left' | 'right', delay = 0): Variants => ({
  hidden: { opacity: 0, x: from === 'left' ? -40 : 40, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, delay, ease: EASE } },
});

/** Springy pop — used for certification pills and CTA clusters. */
export const popIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 240, damping: 18, delay },
  },
});

/* ------------------------------------------------------------------ *
 * Interactive micro-interactions
 * ------------------------------------------------------------------ */

/** Default hover: gentle lift + subtle magnification. */
export const hoverLift: TargetAndTransition = {
  y: -5,
  scale: 1.02,
  transition: { duration: 0.2, ease: 'easeOut' },
};

/** Hover for larger surfaces (cards, form panels). */
export const hoverLiftLarge: TargetAndTransition = {
  y: -6,
  transition: { duration: 0.2, ease: 'easeOut' },
};

/** Hover: scale only (buttons that already carry their own lift in CSS). */
export const hoverPulse: TargetAndTransition = {
  scale: 1.02,
  transition: { duration: 0.2, ease: 'easeOut' },
};

/** Press feedback. */
export const tapPress: TargetAndTransition = {
  scale: 0.98,
  transition: { duration: 0.15, ease: 'easeOut' },
};

/* ------------------------------------------------------------------ *
 * Hero aliases
 * ------------------------------------------------------------------ */
export const heroContainer: Variants = heroSectionVariants;
export const heroBadgeVariants: Variants = fadeRise(0.1);
export const heroHeadlineVariants: Variants = fadeRise(0.2);
export const heroSubtextVariants: Variants = fadeRise(0.3);
export const heroButtonsVariants: Variants = popIn(0.4);
export const centerpieceVariants: Variants = showcaseFrameVariants;
export const metricCardVariants = (index = 0): Variants => fadeRise(index * 0.08);

