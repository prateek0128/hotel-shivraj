import type { Variants } from 'framer-motion';

/**
 * Hotel Shivraj Dhaba — Version 2 Motion Design System
 * "MODERN MAHARAJA CINEMATIC MOTION"
 */

export const v2Viewport = {
  once: true,
  margin: '-60px',
};

// Dramatic word / title entrance with blur dissolve (matches requirement 3)
export const v2WordReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger parent for words and lines
export const v2StaggerWords: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

// Editorial Section Reveal (matches requirement 8)
export const v2SectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Royal Clip-Path Canvas Reveal (horizontal wipe + zoom settling, matches requirement 10)
export const v2ClipCanvas: Variants = {
  hidden: {
    clipPath: 'inset(0% 100% 0% 0%)',
    scale: 1.1,
    opacity: 0,
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Staggered card grid
export const v2StaggerCards: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Subtle line drawing for royal gold brackets
export const v2LineDraw: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0.25, 1, 0.5, 1],
      delay: 0.25,
    },
  },
};
