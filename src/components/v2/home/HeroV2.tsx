import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarIcon from '@mui/icons-material/Star';
import { v2Colors } from '../../../theme/v2/colors';
import { v2WordReveal, v2StaggerWords } from '../../../theme/v2/motion';
import { AnimatedCounter } from '../../common/AnimatedCounter';

export const HeroV2: React.FC = () => {
  return (
    <Box
      id="v2-hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 15, md: 16 },
        pb: { xs: 8, md: 10 },
        backgroundColor: v2Colors.obsidian.black,
        overflow: 'hidden',
        backgroundImage: `
          radial-gradient(circle at 75% 25%, rgba(82, 22, 28, 0.45) 0%, transparent 60%),
          radial-gradient(circle at 20% 80%, rgba(195, 154, 82, 0.08) 0%, transparent 50%),
          linear-gradient(180deg, rgba(12, 10, 9, 0.6) 0%, #0C0A09 100%)
        `,
      }}
    >
      {/* 400ms Black Overlay Entrance */}
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
      {/* Vertical Decorative Sidebar Text (Desktop Only) */}
      <Box
        sx={{
          display: { xs: 'none', xl: 'flex' },
          position: 'absolute',
          left: 32,
          top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'center center',
          alignItems: 'center',
          gap: 2,
          zIndex: 4,
          pointerEvents: 'none',
        }}
      >
        <Box sx={{ width: 40, height: '1px', backgroundColor: v2Colors.gold.antique, opacity: 0.6 }} />
        <Typography
          variant="caption"
          sx={{
            color: v2Colors.gold.champagne,
            letterSpacing: '0.28em',
            fontSize: '0.68rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
          }}
        >
          HOTEL SHIVRAJ DHABA • KARAD, MAHARASHTRA • ESTD. 1998
        </Typography>
        <Box sx={{ width: 40, height: '1px', backgroundColor: v2Colors.gold.antique, opacity: 0.6 }} />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' },
            gap: { xs: 6, lg: 8 },
            alignItems: 'center',
          }}
        >
          {/* ========================================================= */}
          {/* LEFT: Dramatic Stacked Typography & Editorial Message     */}
          {/* ========================================================= */}
          <Box sx={{ pr: { lg: 3 } }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: { xs: 2.5, md: 3 } }}>
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    backgroundColor: v2Colors.gold.antique,
                    transform: 'rotate(45deg)',
                  }}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: v2Colors.gold.champagne,
                    letterSpacing: '0.24em',
                    fontSize: { xs: '0.7rem', sm: '0.78rem' },
                    fontWeight: 700,
                  }}
                >
                  THE ROYAL HOUSE OF MAHARASHTRIAN FLAVOURS
                </Typography>
              </Stack>
            </motion.div>

            {/* Oversized Stacked Display Typography: THE / ROYAL / TABLE */}
            <motion.div
              variants={v2StaggerWords}
              initial="hidden"
              animate="visible"
            >
              <Box component="h1" sx={{ m: 0, p: 0 }}>
                <motion.div variants={v2WordReveal}>
                  <Typography
                    component="span"
                    sx={{
                      display: 'block',
                      fontFamily: '"Cinzel", Georgia, serif',
                      fontWeight: 900,
                      fontSize: { xs: '3.2rem', sm: '5rem', md: '6.2rem', xl: '7rem' },
                      lineHeight: 0.95,
                      letterSpacing: '0.04em',
                      color: v2Colors.ivory.warm,
                      textTransform: 'uppercase',
                    }}
                  >
                    THE
                  </Typography>
                </motion.div>

                <motion.div variants={v2WordReveal}>
                  <Typography
                    component="span"
                    sx={{
                      display: 'block',
                      fontFamily: '"Cinzel", Georgia, serif',
                      fontWeight: 900,
                      fontSize: { xs: '3.2rem', sm: '5rem', md: '6.2rem', xl: '7rem' },
                      lineHeight: 0.95,
                      letterSpacing: '0.04em',
                      background: v2Colors.gradients.goldText,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textTransform: 'uppercase',
                    }}
                  >
                    ROYAL
                  </Typography>
                </motion.div>

                <motion.div variants={v2WordReveal}>
                  <Typography
                    component="span"
                    sx={{
                      display: 'block',
                      fontFamily: '"Cinzel", Georgia, serif',
                      fontWeight: 900,
                      fontSize: { xs: '3.2rem', sm: '5rem', md: '6.2rem', xl: '7rem' },
                      lineHeight: 0.95,
                      letterSpacing: '0.04em',
                      color: v2Colors.ivory.warm,
                      textTransform: 'uppercase',
                      mb: { xs: 2.5, md: 3 },
                    }}
                  >
                    TABLE
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>

            {/* Marathi Italic Quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <Typography
                component="p"
                sx={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  color: v2Colors.gold.champagne,
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  mb: { xs: 2, md: 2.5 },
                }}
              >
                “अस्सल चव, राजेशाही आदरातिथ्य आणि मराठमोळा स्वाभिमान”
              </Typography>
            </motion.div>

            {/* Narrative Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: v2Colors.text.secondaryLight,
                  maxWidth: 560,
                  fontSize: { xs: '0.95rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  mb: { xs: 4, md: 5 },
                }}
              >
                Welcome to a dining sanctuary inspired by the architectural grandeur of Maharashtra's historic forts.
                Born in Karad, where time-honored slow-cooked Akkha Masoor meets contemporary royal hospitality.
              </Typography>
            </motion.div>

            {/* Dual Royal CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
            >
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ mb: { xs: 4, lg: 0 } }}>
                <Button
                  component="a"
                  href="#v2-kitchen"
                  endIcon={<RestaurantMenuIcon className="hero-cta-icon" />}
                  sx={{
                    height: 52,
                    px: 3.8,
                    backgroundColor: v2Colors.gold.antique,
                    color: v2Colors.obsidian.black,
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    border: `1px solid ${v2Colors.gold.champagne}`,
                    boxShadow: '0 8px 24px rgba(195, 154, 82, 0.35)',
                    '&:hover': {
                      backgroundColor: v2Colors.gold.champagne,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 30px rgba(195, 154, 82, 0.55)',
                      '& .hero-cta-icon': { transform: 'translateX(4px)' },
                    },
                    '& .hero-cta-icon': { transition: 'transform 0.25s ease' },
                  }}
                >
                  Explore Royal Menu
                </Button>

                <Button
                  component="a"
                  href="#v2-branches"
                  endIcon={<LocationOnOutlinedIcon className="hero-cta-icon" />}
                  sx={{
                    height: 52,
                    px: 3.8,
                    backgroundColor: 'rgba(82, 22, 28, 0.45)',
                    color: v2Colors.ivory.warm,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    border: `1px solid ${v2Colors.gold.hairline}`,
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      backgroundColor: v2Colors.maroon.burgundy,
                      borderColor: v2Colors.gold.antique,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(82, 22, 28, 0.45)',
                      '& .hero-cta-icon': { transform: 'translateX(4px)' },
                    },
                    '& .hero-cta-icon': { transition: 'transform 0.25s ease' },
                  }}
                >
                  Locate Outlets
                </Button>
              </Stack>
            </motion.div>
          </Box>

          {/* ========================================================= */}
          {/* RIGHT: Layered Royal Palace Canvas & Floating Badges      */}
          {/* ========================================================= */}
          <Box sx={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Outer Fine Gold Palace Gateway Frame */}
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 1.5, sm: 2.5 },
                  border: `1px solid ${v2Colors.gold.hairline}`,
                  backgroundColor: 'rgba(20, 16, 14, 0.65)',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8)',
                }}
              >
                {/* SVG Corner Accents */}
                <Box sx={{ position: 'absolute', top: -3, left: -3, width: 24, height: 24, borderTop: `2px solid ${v2Colors.gold.antique}`, borderLeft: `2px solid ${v2Colors.gold.antique}` }} />
                <Box sx={{ position: 'absolute', top: -3, right: -3, width: 24, height: 24, borderTop: `2px solid ${v2Colors.gold.antique}`, borderRight: `2px solid ${v2Colors.gold.antique}` }} />
                <Box sx={{ position: 'absolute', bottom: -3, left: -3, width: 24, height: 24, borderBottom: `2px solid ${v2Colors.gold.antique}`, borderLeft: `2px solid ${v2Colors.gold.antique}` }} />
                <Box sx={{ position: 'absolute', bottom: -3, right: -3, width: 24, height: 24, borderBottom: `2px solid ${v2Colors.gold.antique}`, borderRight: `2px solid ${v2Colors.gold.antique}` }} />

                {/* Main Hero Imagery */}
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 360, sm: 460, md: 540 },
                    overflow: 'hidden',
                    border: '1px solid rgba(195, 154, 82, 0.2)',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/maratha_palace_hero.jpg"
                    alt="Royal Courtyard of Hotel Shivraj"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 40%',
                      filter: 'contrast(1.1) saturate(1.1)',
                      transition: 'transform 1.2s cubic-bezier(0.2, 0, 0, 1)',
                      '&:hover': {
                        transform: 'scale(1.04)',
                      },
                    }}
                  />

                  {/* Dramatic Dark Burgundy Gradient Vignette */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `
                        linear-gradient(180deg, transparent 40%, rgba(12, 10, 9, 0.85) 85%, #0C0A09 100%),
                        linear-gradient(90deg, rgba(82, 22, 28, 0.3) 0%, transparent 50%)
                      `,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Overlaid Bottom Title */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 2.5, sm: 3.5 },
                      zIndex: 2,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: v2Colors.gold.champagne,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        display: 'block',
                        mb: 0.5,
                      }}
                    >
                      THE FLAGSHIP AT KARAD
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: '"Cinzel", Georgia, serif',
                        color: v2Colors.ivory.warm,
                        fontSize: { xs: '1.25rem', sm: '1.6rem' },
                        fontWeight: 800,
                      }}
                    >
                      Historic Fort Ambiance &amp; Grand Hospitality
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>

            {/* Floating Royal Crest Badge (Bottom Left of Image) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: -20, sm: -24 },
                  left: { xs: 16, sm: -24 },
                  p: 2.2,
                  backgroundColor: v2Colors.obsidian.black,
                  border: `1px solid ${v2Colors.gold.antique}`,
                  backgroundImage: 'radial-gradient(circle at top right, rgba(82,22,28,0.7), transparent 80%)',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.8,
                  zIndex: 3,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    backgroundColor: v2Colors.maroon.burgundy,
                    border: `1px solid ${v2Colors.gold.champagne}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: v2Colors.gold.champagne,
                  }}
                >
                  <StarIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: v2Colors.ivory.warm, fontSize: '0.85rem' }}>
                    <AnimatedCounter value={26} suffix="+ Years" /> of Royal Trust
                  </Typography>
                  <Typography variant="caption" sx={{ color: v2Colors.gold.champagne, fontSize: '0.72rem', letterSpacing: '0.06em' }}>
                    Estd. 1998 in Karad • <AnimatedCounter value={20} suffix="+ Outlets" />
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Calm Scroll Indicator */}
        <Box
          component="a"
          href="#v2-legacy"
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: { xs: 6, md: 8 },
            color: v2Colors.gold.champagne,
            textDecoration: 'none',
            mx: 'auto',
            width: '100%',
            opacity: 0.88,
            transition: 'all 0.25s ease',
            '&:hover': { opacity: 1, color: v2Colors.gold.pale },
          }}
        >
          <Typography variant="caption" sx={{ letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.68rem', fontWeight: 700 }}>
            SCROLL TO DISCOVER
          </Typography>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <KeyboardArrowDownIcon sx={{ fontSize: 22, mt: 0.5, color: v2Colors.gold.antique }} />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};
