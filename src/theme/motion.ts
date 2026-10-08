import type { Variants } from 'framer-motion';

/**
 * Hotel Shivraj Dhaba — Core Motion Design System
 * Luxury hospitality + Modern editorial + Cinematic Indian heritage.
 * Clearly visible, bold, graceful motion.
 */

export const luxuryEase = [0.22, 1, 0.36, 1] as const;
export const smoothEase = [0.25, 1, 0.5, 1] as const;

export const viewportConfig = {
  once: true,
  margin: '-80px',
};

// Clearly visible section entrance reveal
export const sectionRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: luxuryEase,
    },
  },
};

// Line-by-line or word-by-word heading entrance with blur dissolve
export const lineRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

// Stagger parent container for lines or sequential elements
export const staggerSequentialVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

// Cinematic image clip-path reveal (horizontal wipe + zoom settling)
export const imageClipRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(0% 100% 0% 0%)',
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    transition: {
      duration: 1.15,
      ease: smoothEase,
    },
  },
};

// Bold card entrance with y-lift and scale
export const cardRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: luxuryEase,
    },
  },
};

// Card icon pop-in after card reveals
export const iconPopVariants: Variants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: luxuryEase,
    },
  },
};

// SVG architectural border stroke drawing
export const strokeDrawVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: smoothEase,
      delay: 0.2,
    },
  },
};

// Subtle continuous floating effect for featured monuments/hero imagery
export const subtleFloatVariants: Variants = {
  animate: {
    y: [0, -7, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Gold divider expansion
export const dividerExpandVariants: Variants = {
  hidden: {
    width: 0,
    opacity: 0,
  },
  visible: {
    width: 60,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};
