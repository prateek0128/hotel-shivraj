import React, { useRef } from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import StarsIcon from '@mui/icons-material/Stars';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { heritageColors } from '../../theme/colors';
import { CTAButton } from '../common/CTAButton';

// SVG Corner Ornament with stroke-drawing animation
const PalaceCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}> = ({ position }) => {
  const isTop = position.includes('top');
  const isLeft = position.includes('left');

  return (
    <Box
      sx={{
        position: 'absolute',
        top: isTop ? -2 : 'auto',
        bottom: !isTop ? -2 : 'auto',
        left: isLeft ? -2 : 'auto',
        right: !isLeft ? -2 : 'auto',
        width: 32,
        height: 32,
        pointerEvents: 'none',
        zIndex: 3,
        transform: `${!isLeft ? 'scaleX(-1)' : ''} ${!isTop ? 'scaleY(-1)' : ''}`,
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* Outer Corner Frame */}
        <motion.path
          d="M0 32 V 0 H 32"
          stroke={heritageColors.gold.highlight}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        />
        {/* Inner Decorative Accent */}
        <motion.path
          d="M6 18 V 6 H 18"
          stroke={heritageColors.gold.main}
          strokeWidth="1.2"
          strokeDasharray="2 2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        />
        {/* Tiny Regal Diamond */}
        <motion.rect
          x="4"
          y="4"
          width="3"
          height="3"
          fill={heritageColors.gold.highlight}
          transform="rotate(45 5.5 5.5)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        />
      </svg>
    </Box>
  );
};

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Extremely subtle parallax depth: background moves slower than foreground
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <Box
      ref={containerRef}
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: { xs: 15, sm: 17, md: 20 },
        pb: { xs: 9, md: 11 },
        overflow: 'hidden',
        backgroundColor: heritageColors.charcoal.darkest,
      }}
    >
      {/* 1. Cinematic Background Layer with Parallax & Slow Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          y: backgroundY,
          backgroundImage: "url('/images/maratha_palace_hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 38%',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* 2. Atmospheric Gradients & Warm Vignette */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          background: `
            radial-gradient(circle at 50% 30%, rgba(212, 176, 106, 0.08) 0%, transparent 60%),
            linear-gradient(180deg, rgba(14, 11, 9, 0.78) 0%, rgba(23, 18, 14, 0.75) 45%, rgba(23, 18, 14, 0.94) 88%, #17120E 100%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* 3. Architectural Palace Gateway Frame with Animated Corners */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: '1px solid rgba(176, 138, 69, 0.18)',
          margin: { xs: 1, sm: 2, md: 3 },
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <PalaceCorner position="top-left" />
        <PalaceCorner position="top-right" />
        <PalaceCorner position="bottom-left" />
        <PalaceCorner position="bottom-right" />
      </Box>

      {/* 4. Foreground Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <motion.div style={{ opacity: contentOpacity }}>
          {/* Eyebrow: 0.5s sequence */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: { xs: 2.2, sm: 3 },
                py: 0.85,
                mb: { xs: 2.5, md: 3 },
                border: `1px solid ${heritageColors.gold.border}`,
                backgroundColor: 'rgba(74, 23, 24, 0.55)',
                backdropFilter: 'blur(10px)',
                borderRadius: 0,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  backgroundColor: heritageColors.gold.highlight,
                  transform: 'rotate(45deg)',
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  color: heritageColors.gold.pale,
                  fontSize: { xs: '0.68rem', sm: '0.78rem' },
                  letterSpacing: '0.22em',
                  fontWeight: 700,
                }}
              >
                अस्सल महाराष्ट्रीय परंपरा • AUTHENTIC MARATHA HOSPITALITY
              </Typography>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  backgroundColor: heritageColors.gold.highlight,
                  transform: 'rotate(45deg)',
                }}
              />
            </Box>
          </motion.div>

          {/* Main Heading: 0.8s sequence */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="h1"
              sx={{
                color: heritageColors.parchment.pure,
                fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.8rem', lg: '5.4rem' },
                fontWeight: 800,
                letterSpacing: '0.03em',
                lineHeight: 1.12,
                mb: { xs: 1.5, md: 2 },
                textShadow: '0 4px 30px rgba(0,0,0,0.85)',
              }}
            >
              Experience the Taste of <br />
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${heritageColors.gold.pale} 0%, ${heritageColors.gold.main} 50%, ${heritageColors.gold.highlight} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  fontFamily: '"Cinzel", Georgia, serif',
                }}
              >
                Maratha Heritage
              </Box>
            </Typography>
          </motion.div>

          {/* Marathi Quote: 0.6s sequence */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
          >
            <Typography
              component="p"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: { xs: '1.25rem', sm: '1.55rem', md: '1.85rem' },
                color: heritageColors.gold.pale,
                fontWeight: 600,
                letterSpacing: '0.02em',
                mb: { xs: 2.5, md: 3 },
                textShadow: '0 2px 12px rgba(0,0,0,0.7)',
              }}
            >
              “कराडची स्वतंत्र रुचकर ओळख • पश्चिम महाराष्ट्राची शानं”
            </Typography>
          </motion.div>

          {/* Description: 0.6s sequence */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
          >
            <Typography
              variant="body1"
              sx={{
                color: heritageColors.parchment.stone,
                maxWidth: 720,
                mx: 'auto',
                fontSize: { xs: '0.95rem', sm: '1.1rem' },
                lineHeight: 1.75,
                mb: { xs: 4, md: 5 },
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              }}
            >
              Elevating authentic Maharashtrian dhaba dining into a royal culinary voyage.
              Home to the legendary slow-simmered Akkha Masoor, traditional earthen matka curd,
              and royal hospitality born in Karad.
            </Typography>
          </motion.div>

          {/* CTA Buttons: 0.5s stagger */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease: 'easeOut' }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 2.5 }}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: 6, md: 8 },
              }}
            >
              <CTAButton
                variantType="gold-filled"
                href="#signature-food"
                icon={<RestaurantMenuIcon />}
                sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: 210 }}
              >
                Explore Our Menu
              </CTAButton>

              <CTAButton
                variantType="gold-outlined"
                href="#branches"
                icon={<LocationOnOutlinedIcon />}
                sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: 210 }}
              >
                Find a Branch
              </CTAButton>
            </Stack>
          </motion.div>

          {/* Stats Bar: 0.7s sequence with staggered items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                maxWidth: 960,
                mx: 'auto',
                p: { xs: 2, sm: 2.5 },
                backgroundColor: 'rgba(23, 18, 14, 0.82)',
                border: `1px solid rgba(176, 138, 69, 0.28)`,
                backdropFilter: 'blur(12px)',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Grid size={{ xs: 6, sm: 3 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                  <StarsIcon sx={{ color: heritageColors.gold.highlight, fontSize: 24 }} />
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" sx={{ color: heritageColors.parchment.pure, fontWeight: 700, fontSize: '0.85rem' }}>
                      Akkha Masoor
                    </Typography>
                    <Typography variant="caption" sx={{ color: heritageColors.text.mutedLight, fontSize: '0.72rem' }}>
                      Legendary Signature
                    </Typography>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                  <StorefrontIcon sx={{ color: heritageColors.gold.highlight, fontSize: 24 }} />
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" sx={{ color: heritageColors.parchment.pure, fontWeight: 700, fontSize: '0.85rem' }}>
                      20+ Outlets
                    </Typography>
                    <Typography variant="caption" sx={{ color: heritageColors.text.mutedLight, fontSize: '0.72rem' }}>
                      Across Maharashtra
                    </Typography>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldOutlinedIcon sx={{ color: heritageColors.gold.highlight, fontSize: 24 }} />
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" sx={{ color: heritageColors.parchment.pure, fontWeight: 700, fontSize: '0.85rem' }}>
                      ISO Certified
                    </Typography>
                    <Typography variant="caption" sx={{ color: heritageColors.text.mutedLight, fontSize: '0.72rem' }}>
                      Standard of Hygiene
                    </Typography>
                  </Box>
                </Stack>
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: `1.5px solid ${heritageColors.gold.highlight}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: heritageColors.gold.highlight,
                      fontSize: '0.75rem',
                      fontWeight: 800,
                    }}
                  >
                    3
                  </Box>
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" sx={{ color: heritageColors.parchment.pure, fontWeight: 700, fontSize: '0.85rem' }}>
                      Visionary Founders
                    </Typography>
                    <Typography variant="caption" sx={{ color: heritageColors.text.mutedLight, fontSize: '0.72rem' }}>
                      Karad Origins (1998)
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </motion.div>

          {/* 5. Calmed Scroll Indicator */}
          <Box
            component="a"
            href="#heritage-intro"
            sx={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: { xs: 4, md: 5 },
              color: heritageColors.gold.pale,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              opacity: 0.85,
              '&:hover': {
                color: heritageColors.gold.highlight,
                opacity: 1,
              },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontSize: '0.7rem',
                fontWeight: 600,
              }}
            >
              Discover Our Story
            </Typography>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
            >
              <KeyboardArrowDownIcon sx={{ fontSize: 22, mt: 0.5, color: heritageColors.gold.highlight }} />
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
