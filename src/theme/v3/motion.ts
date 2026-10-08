import type { Variants, Transition } from 'framer-motion';

/**
 * Hotel Shivraj Dhaba — Version 3 Motion Design System
 * "CONTEMPORARY ROYAL HOSPITALITY"
 * Luxury editorial timing, cinematic reveals, and restrained premium movement.
 */

export const v3Ease = [0.22, 1, 0.36, 1] as const;

export const v3Transition: Transition = {
  duration: 0.85,
  ease: v3Ease,
};

export const v3Viewport = {
  once: true,
  margin: '-60px',
};

// 1. Fade Up Reveal
export const v3FadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: v3Ease },
  },
};

// 2. Pure Fade In
export const v3FadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: v3Ease },
  },
};

// 3. Slide Left Entrance
export const v3SlideLeft: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: v3Ease },
  },
};

// 4. Slide Right Entrance
export const v3SlideRight: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: v3Ease },
  },
};

// 5. Cinematic Image Reveal with horizontal clip-path & scale settling
export const v3ImageReveal: Variants = {
  hidden: {
    clipPath: 'inset(0% 100% 0% 0%)',
    scale: 1.1,
    opacity: 0,
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    opacity: 1,
    transition: { duration: 1.15, ease: v3Ease },
  },
};

// 6. Scale Reveal
export const v3ScaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: v3Ease },
  },
};

// 7. Gold Line Reveal (width 0 -> 100%)
export const v3LineReveal: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: '100%',
    opacity: 1,
    transition: { duration: 0.9, ease: v3Ease },
  },
};

// 8. Stagger Container
export const v3StaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

// 9. Editorial Word / Line Reveal with blur dissolve
export const v3WordReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: v3Ease },
  },
};
