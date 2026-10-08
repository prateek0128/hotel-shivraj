import type { Variants } from 'framer-motion';

/**
 * Hotel Shivraj Dhaba — Motion Design System
 * Philosophy: "Slow, graceful, cinematic."
 * Restrained luxury hospitality motion respecting prefers-reduced-motion.
 */

export const viewportConfig = {
  once: true,
  margin: '-60px',
};

// Subtle upward fade for headings and text blocks
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1], // Custom smooth ease-out
    },
  },
};

// Pure opacity fade for overlays and textures
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

// Clip-path reveal for editorial imagery
export const imageClipRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(0% 100% 0% 0%)',
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

// Stagger container for card grids and stats lists
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

// Card lift and reveal
export const cardRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Corner ornament stroke drawing
export const strokeDrawVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
      delay: 0.2,
    },
  },
};
