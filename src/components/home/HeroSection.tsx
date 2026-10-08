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
import { luxuryEase } from '../../theme/motion';
import { CTAButton } from '../common/CTAButton';
import { AnimatedCounter } from '../common/AnimatedCounter';

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
        width: 36,
        height: 36,
        pointerEvents: 'none',
        zIndex: 3,
        transform: `${!isLeft ? 'scaleX(-1)' : ''} ${!isTop ? 'scaleY(-1)' : ''}`,
      }}
    >
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        {/* Outer Corner Frame */}
        <motion.path
          d="M0 36 V 0 H 36"
          stroke={heritageColors.gold.highlight}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Inner Decorative Accent */}
        <motion.path
          d="M8 22 V 8 H 22"
          stroke={heritageColors.gold.main}
          strokeWidth="1.2"
          strokeDasharray="3 3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Tiny Regal Diamond */}
        <motion.rect
          x="5"
          y="5"
          width="4"
          height="4"
          fill={heritageColors.gold.highlight}
          transform="rotate(45 7 7)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
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

  // Parallax depth: background moves slower than foreground
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
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
        backgroundColor: '#070504',
      }}
    >
      {/* STEP 1: Dark/Black overlay initial fade sequence (~400ms) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#050403',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* STEP 2: Cinematic Background with entrance scale 1.08 -> 1 + subtle continuous breathing motion */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{
          opacity: 1,
          scale: [1.08, 1, 1.025, 1],
        }}
        transition={{
          opacity: { duration: 1.1, ease: luxuryEase },
          scale: {
            times: [0, 0.12, 0.55, 1],
            duration: 14,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          },
        }}
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
          {/* STEP 4: Eyebrow: opacity 0 -> 1, y 25 -> 0 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: luxuryEase }}
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

          {/* STEP 5: Main Heading Line-by-Line Reveal with Blur Dissolve */}
          <Box sx={{ mb: { xs: 1.5, md: 2 } }}>
            <motion.div
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.48, ease: luxuryEase }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: heritageColors.parchment.pure,
                  fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.8rem', lg: '5.4rem' },
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                  lineHeight: 1.12,
                  textShadow: '0 4px 30px rgba(0,0,0,0.85)',
                }}
              >
                Experience the Taste of
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.65, ease: luxuryEase }}
            >
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.8rem', lg: '5.4rem' },
                  fontWeight: 800,
                  letterSpacing: '0.03em',
                  lineHeight: 1.15,
                  textShadow: '0 4px 30px rgba(0,0,0,0.85)',
                }}
              >
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
          </Box>

          {/* STEP 6: Marathi Quote sequence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.82, ease: luxuryEase }}
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

          {/* STEP 7: Supporting Description */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.98, ease: luxuryEase }}
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

          {/* STEP 8: CTA Buttons with micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.12, ease: luxuryEase }}
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

          {/* STEP 9: Stats Bar with Animated Counter */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.28, ease: luxuryEase }}
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
                      <AnimatedCounter value={20} suffix="+ Outlets" />
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
                      <AnimatedCounter value={3} suffix=" Founders" />
                    </Typography>
                    <Typography variant="caption" sx={{ color: heritageColors.text.mutedLight, fontSize: '0.72rem' }}>
                      Karad Origins (1998)
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </motion.div>

          {/* STEP 10: Scroll Indicator with Smooth Ease In Out */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.45 }}
          >
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
                opacity: 0.88,
                '&:hover': {
                  color: heritageColors.gold.highlight,
                  opacity: 1,
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                }}
              >
                SCROLL TO DISCOVER
              </Typography>
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              >
                <KeyboardArrowDownIcon sx={{ fontSize: 24, mt: 0.5, color: heritageColors.gold.highlight }} />
              </motion.div>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};
