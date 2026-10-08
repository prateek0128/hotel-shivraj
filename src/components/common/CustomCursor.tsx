import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { Box } from '@mui/material';

export const CustomCursor: React.FC = () => {
  const [isHoveredGallery, setIsHoveredGallery] = useState(false);
  const [isHoveredCTA, setIsHoveredCTA] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() => {
    return typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  });

  const mouseX = useSpring(0, { stiffness: 450, damping: 32 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 32 });

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const galleryEl = target.closest('[data-cursor="view"]');
      setIsHoveredGallery(Boolean(galleryEl));

      const ctaEl = target.closest('button, a, [data-cursor="pointer"]');
      setIsHoveredCTA(Boolean(ctaEl));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHoveredGallery ? 64 : isHoveredCTA ? 36 : 14,
            height: isHoveredGallery ? 64 : isHoveredCTA ? 36 : 14,
            backgroundColor: isHoveredGallery
              ? 'rgba(195, 154, 82, 0.9)'
              : isHoveredCTA
              ? 'rgba(195, 154, 82, 0.25)'
              : 'rgba(212, 176, 106, 0.65)',
            borderColor: '#C39A52',
            borderWidth: isHoveredGallery ? 0 : 1,
            borderStyle: 'solid',
          }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          style={{
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: isHoveredCTA ? 'blur(2px)' : 'none',
            boxShadow: '0 0 12px rgba(195, 154, 82, 0.4)',
          }}
        >
          {isHoveredGallery && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                color: '#0C0A09',
                fontSize: '0.62rem',
                fontFamily: '"Cinzel", serif',
                fontWeight: 900,
                letterSpacing: '0.12em',
              }}
            >
              VIEW
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </Box>
  );
};
