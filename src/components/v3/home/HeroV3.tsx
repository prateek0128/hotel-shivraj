import React, { useRef } from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Chip } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import StarIcon from '@mui/icons-material/Star';
import { v3Colors } from '../../../theme/v3/colors';
import { v3Ease } from '../../../theme/v3/motion';
import { AnimatedCounter } from '../../common/AnimatedCounter';

export const HeroV3: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Restrained parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const visualY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const typographyY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <Box
      id="v3-hero"
      ref={heroRef}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: v3Colors.obsidian.pure,
        overflow: 'hidden',
        pt: { xs: 14, md: 16 },
        pb: { xs: 10, md: 12 },
      }}
    >
      {/* 1. INITIAL 400ms VIEWPORT DARK OVERLAY FADE */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#000000',
          zIndex: 50,
          pointerEvents: 'none',
        }}
      />

      {/* 2. BACKGROUND AMBIENCE WITH SLOW BREATHING SCALE & PARALLAX */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          right: 0,
          bottom: '-10%',
          y: backgroundY,
          zIndex: 0,
        }}
      >
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: [1, 1.025, 1], opacity: 1 }}
          transition={{
            scale: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 1.2, ease: 'easeOut' },
          }}
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `
              radial-gradient(circle at 75% 35%, rgba(66, 18, 23, 0.45) 0%, transparent 60%),
              radial-gradient(circle at 20% 70%, rgba(185, 147, 79, 0.12) 0%, transparent 55%),
              linear-gradient(180deg, rgba(11, 10, 9, 0.85) 0%, rgba(11, 10, 9, 0.65) 50%, #0B0A09 100%),
              url('/images/maratha_palace_hero.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.1) brightness(0.65)',
          }}
        />
      </motion.div>

      {/* 3. VERTICAL SIDE LABEL: EST. 1998 • KARAD */}
      <Box
        sx={{
          display: { xs: 'none', xl: 'flex' },
          position: 'absolute',
          left: 36,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          alignItems: 'center',
          gap: 2,
        }}
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 48 }}
          transition={{ duration: 1.1, delay: 0.6, ease: v3Ease }}
          style={{ width: 1.5, backgroundColor: v3Colors.gold.antique }}
        />
        <Typography
          sx={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontFamily: '"Manrope", sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.3em',
            fontWeight: 800,
            color: v3Colors.neutral.stone,
            textTransform: 'uppercase',
          }}
        >
          EST. 1998 • KARAD • MAHARASHTRA
        </Typography>
      </Box>

      {/* 4. MAIN HERO CONTENT CONTAINER (ASYMMETRIC 60 / 40 COMPOSITION) */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <motion.div style={{ opacity: opacityFade }}>
          <Grid container spacing={{ xs: 6, md: 5, lg: 8 }} sx={{ alignItems: 'center' }}>
            {/* LEFT 60%: EDITORIAL TYPOGRAPHY & STORYTELLING */}
            <Grid size={{ xs: 12, md: 7, lg: 6.8 }}>
              <motion.div style={{ y: typographyY }}>
                {/* Step 4: Small Eyebrow Label */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.35, ease: v3Ease }}
                >
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
                    <Box sx={{ width: 8, height: 8, backgroundColor: v3Colors.gold.antique, transform: 'rotate(45deg)' }} />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: v3Colors.gold.champagne,
                        letterSpacing: '0.26em',
                        fontWeight: 800,
                        fontSize: { xs: '0.75rem', sm: '0.82rem' },
                      }}
                    >
                      CONTEMPORARY ROYAL HOSPITALITY
                    </Typography>
                  </Stack>
                </motion.div>

                {/* Step 5: Large Heading with Line-by-Line Blur Dissolve */}
                <Box sx={{ mb: 2.5 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 55, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.85, delay: 0.5, ease: v3Ease }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                        fontWeight: 900,
                        fontSize: { xs: '2.8rem', sm: '4.2rem', md: '5rem', lg: '5.8rem' },
                        letterSpacing: '0.02em',
                        lineHeight: 1.02,
                        color: v3Colors.neutral.ivory,
                        textTransform: 'uppercase',
                      }}
                    >
                      The Taste Of
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 55, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.85, delay: 0.68, ease: v3Ease }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                        fontWeight: 900,
                        fontSize: { xs: '2.8rem', sm: '4.2rem', md: '5rem', lg: '5.8rem' },
                        letterSpacing: '0.02em',
                        lineHeight: 1.02,
                        textTransform: 'uppercase',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          background: v3Colors.gradients.goldText,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          display: 'inline-block',
                        }}
                      >
                        Royal Maharashtra.
                      </Box>
                    </Typography>
                  </motion.div>
                </Box>

                {/* Step 6: Marathi Poetry & Supporting Copy */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.85, ease: v3Ease }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: { xs: '1.25rem', sm: '1.65rem' },
                      color: v3Colors.gold.champagne,
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    “अस्सल लाकडी चुलीची चव अन् राजेशाही मराठमोळा पाहुणचार”
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: v3Colors.neutral.stone,
                      fontSize: { xs: '0.98rem', sm: '1.1rem' },
                      lineHeight: 1.85,
                      maxWidth: 620,
                      mb: 4.5,
                    }}
                  >
                    Born in Karad in 1998 from the vision of three friends, Hotel Shivraj Dhaba evolved highway dining
                    into an iconic royal tradition. Prepared in brass handis with cold-pressed oils, pure ghee, and
                    stone-ground spices.
                  </Typography>
                </motion.div>

                {/* Step 7: Dual CTA Buttons with Stagger */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.05, ease: v3Ease }}
                >
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ mb: { xs: 5, md: 6 } }}>
                    <Button
                      component="a"
                      href="#v3-menu"
                      startIcon={<RestaurantMenuIcon />}
                      endIcon={<ArrowForwardIcon className="v3-hero-icon" />}
                      sx={{
                        height: 54,
                        px: 4.2,
                        backgroundColor: v3Colors.gold.antique,
                        color: v3Colors.obsidian.pure,
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        boxShadow: '0 8px 24px rgba(185, 147, 79, 0.4)',
                        transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                        '&:hover': {
                          backgroundColor: v3Colors.gold.champagne,
                          transform: 'scale(1.02)',
                          boxShadow: '0 12px 32px rgba(185, 147, 79, 0.6)',
                          '& .v3-hero-icon': { transform: 'translateX(4px)' },
                        },
                        '& .v3-hero-icon': { transition: 'transform 0.25s ease' },
                      }}
                    >
                      Explore Our Menu
                    </Button>

                    <Button
                      component="a"
                      href="#v3-legacy"
                      startIcon={<AutoStoriesOutlinedIcon />}
                      sx={{
                        height: 54,
                        px: 3.8,
                        backgroundColor: 'rgba(66, 18, 23, 0.55)',
                        color: v3Colors.neutral.ivory,
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        border: `1px solid ${v3Colors.gold.hairline}`,
                        backdropFilter: 'blur(8px)',
                        transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                        '&:hover': {
                          backgroundColor: v3Colors.burgundy.royal,
                          transform: 'scale(1.02)',
                          borderColor: v3Colors.gold.champagne,
                        },
                      }}
                    >
                      Discover Our Story
                    </Button>
                  </Stack>
                </motion.div>

                {/* Step 8: Verified Statistics Counters */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.25, ease: v3Ease }}
                >
                  <Stack
                    direction="row"
                    spacing={{ xs: 3, sm: 5 }}
                    sx={{
                      pt: 3,
                      borderTop: `1px solid ${v3Colors.gold.hairline}`,
                      maxWidth: 620,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: '"Bodoni Moda", serif',
                          fontWeight: 900,
                          color: v3Colors.gold.champagne,
                          fontSize: { xs: '1.8rem', sm: '2.4rem' },
                        }}
                      >
                        <AnimatedCounter value={26} suffix="+" />
                      </Typography>
                      <Typography variant="caption" sx={{ color: v3Colors.neutral.stone, letterSpacing: '0.1em', fontWeight: 600 }}>
                        YEARS OF LEGACY
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: '"Bodoni Moda", serif',
                          fontWeight: 900,
                          color: v3Colors.gold.champagne,
                          fontSize: { xs: '1.8rem', sm: '2.4rem' },
                        }}
                      >
                        <AnimatedCounter value={20} suffix="+" />
                      </Typography>
                      <Typography variant="caption" sx={{ color: v3Colors.neutral.stone, letterSpacing: '0.1em', fontWeight: 600 }}>
                        OUTLETS IN MAHARASHTRA
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: '"Bodoni Moda", serif',
                          fontWeight: 900,
                          color: v3Colors.gold.champagne,
                          fontSize: { xs: '1.8rem', sm: '2.4rem' },
                        }}
                      >
                        <AnimatedCounter value={3} />
                      </Typography>
                      <Typography variant="caption" sx={{ color: v3Colors.neutral.stone, letterSpacing: '0.1em', fontWeight: 600 }}>
                        FOUNDING VISIONARIES
                      </Typography>
                    </Box>
                  </Stack>
                </motion.div>
              </motion.div>
            </Grid>

            {/* RIGHT 40%: LAYERED EDITORIAL IMAGE COMPOSITION */}
            <Grid size={{ xs: 12, md: 5, lg: 5.2 }}>
              <motion.div style={{ y: visualY }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 520,
                    mx: 'auto',
                  }}
                >
                  {/* Decorative Architectural Gold Framing Brackets */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, delay: 0.4, ease: v3Ease }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: -16,
                        border: `1px solid ${v3Colors.gold.hairline}`,
                        pointerEvents: 'none',
                        zIndex: 1,
                      }}
                    >
                      <Box sx={{ position: 'absolute', top: -3, left: -3, width: 22, height: 22, borderTop: `2px solid ${v3Colors.gold.champagne}`, borderLeft: `2px solid ${v3Colors.gold.champagne}` }} />
                      <Box sx={{ position: 'absolute', top: -3, right: -3, width: 22, height: 22, borderTop: `2px solid ${v3Colors.gold.champagne}`, borderRight: `2px solid ${v3Colors.gold.champagne}` }} />
                      <Box sx={{ position: 'absolute', bottom: -3, left: -3, width: 22, height: 22, borderBottom: `2px solid ${v3Colors.gold.champagne}`, borderLeft: `2px solid ${v3Colors.gold.champagne}` }} />
                      <Box sx={{ position: 'absolute', bottom: -3, right: -3, width: 22, height: 22, borderBottom: `2px solid ${v3Colors.gold.champagne}`, borderRight: `2px solid ${v3Colors.gold.champagne}` }} />
                    </Box>
                  </motion.div>

                  {/* Main Signature Food Image with Clip-Path Reveal */}
                  <motion.div
                    initial={{ clipPath: 'inset(0% 100% 0% 0%)', scale: 1.12, opacity: 0 }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1, opacity: 1 }}
                    transition={{ duration: 1.25, delay: 0.35, ease: v3Ease }}
                    style={{ position: 'relative', overflow: 'hidden', zIndex: 2 }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: 380, sm: 480, lg: 540 },
                        backgroundColor: v3Colors.obsidian.surface,
                        border: `1px solid ${v3Colors.obsidian.borderStrong}`,
                        boxShadow: '0 32px 80px rgba(0, 0, 0, 0.9)',
                        overflow: 'hidden',
                        '&:hover img': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src="/images/signature_akkha_masur.jpg"
                        alt="Signature Akkha Masoor Special at Hotel Shivraj"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'contrast(1.15) saturate(1.1)',
                          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      />

                      {/* Dark Vignette Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, rgba(11,10,9,0.1) 0%, rgba(11,10,9,0.65) 100%)',
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Crown Signature Badge */}
                      <Chip
                        icon={<StarIcon sx={{ color: '#0B0A09 !important', fontSize: 16 }} />}
                        label="CROWN SIGNATURE • AKKHA MASOOR"
                        sx={{
                          position: 'absolute',
                          top: 22,
                          left: 22,
                          backgroundColor: v3Colors.gold.champagne,
                          color: v3Colors.obsidian.pure,
                          fontWeight: 900,
                          fontSize: '0.74rem',
                          letterSpacing: '0.1em',
                          borderRadius: 0,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
                        }}
                      />

                      {/* Bottom Floating Metadata Card */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 3,
                          backgroundColor: 'rgba(11, 10, 9, 0.85)',
                          backdropFilter: 'blur(12px)',
                          borderTop: `1px solid ${v3Colors.gold.hairline}`,
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            color: v3Colors.gold.champagne,
                            fontWeight: 800,
                            letterSpacing: '0.14em',
                            display: 'block',
                          }}
                        >
                          HEIRLOOM WOODFIRE RECIPE
                        </Typography>
                        <Typography variant="body2" sx={{ color: v3Colors.neutral.ivory, fontSize: '0.88rem', mt: 0.4 }}>
                          Simmered in heavy brass handis with golden jowar bhakri &amp; fresh white butter.
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* 5. FLOATING SCROLL INDICATOR */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: v3Ease }}
        >
          <Box
            component="a"
            href="#v3-legacy"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.6,
              textDecoration: 'none',
              color: v3Colors.neutral.stone,
              transition: 'color 0.25s ease',
              '&:hover': { color: v3Colors.gold.champagne },
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: '0.68rem',
                letterSpacing: '0.24em',
                fontWeight: 800,
                textTransform: 'uppercase',
              }}
            >
              Scroll To Discover
            </Typography>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Typography sx={{ fontSize: '1.2rem', color: v3Colors.gold.antique, lineHeight: 1 }}>
                ↓
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};
