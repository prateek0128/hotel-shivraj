import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Box } from '@mui/material';
import { heritageColors } from '../../theme/colors';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 2000,
        pointerEvents: 'none',
      }}
    >
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          width: '100%',
          height: '100%',
          background: `linear-gradient(90deg, ${heritageColors.gold.dark} 0%, ${heritageColors.gold.main} 50%, ${heritageColors.gold.highlight} 100%)`,
          boxShadow: '0 0 8px rgba(212, 176, 106, 0.4)',
        }}
      />
    </Box>
  );
};
