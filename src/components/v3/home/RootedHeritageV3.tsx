import React, { useRef } from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import FortIcon from '@mui/icons-material/Fort';
import { v3Colors } from '../../../theme/v3/colors';
import { v3Ease, v3Viewport } from '../../../theme/v3/motion';

export const RootedHeritageV3: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Multi-layered parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ['-35px', '35px']);
  const textY = useTransform(scrollYProgress, [0, 1], ['25px', '-25px']);

  return (
    <Box
      id="v3-heritage"
      ref={sectionRef}
      sx={{
        py: { xs: 14, md: 22 },
        position: 'relative',
        backgroundColor: v3Colors.obsidian.pure,
        color: v3Colors.neutral.ivory,
        overflow: 'hidden',
        borderTop: `1px solid ${v3Colors.gold.hairline}`,
      }}
    >
      {/* Layer 1: Parallax Heritage Architecture Canvas */}
      <motion.div
        style={{
          position: 'absolute',
          top: -40,
          left: 0,
          right: 0,
          bottom: -40,
          y: bgY,
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: "url('/images/maratha_palace_hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            filter: 'contrast(1.2) brightness(0.4)',
          }}
        />
      </motion.div>

      {/* Layer 2: Deep Burgundy & Obsidian Vignette Overlays */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg, #0B0A09 0%, rgba(11, 10, 9, 0.72) 40%, rgba(66, 18, 23, 0.75) 70%, #0B0A09 100%),
            radial-gradient(circle at center, transparent 20%, rgba(11, 10, 9, 0.92) 85%)
          `,
          zIndex: 1,
        }}
      />

      {/* Decorative Maharashtra Cultural Emblem Seal in Background */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: 320, md: 560 },
          height: { xs: 320, md: 560 },
          borderRadius: '50%',
          border: '1px solid rgba(185, 147, 79, 0.12)',
          boxShadow: '0 0 120px rgba(66, 18, 23, 0.45)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Layer 3: Foreground Content */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div style={{ y: textY }}>
          <Box sx={{ maxWidth: 960, mx: 'auto', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={v3Viewport}
              transition={{ duration: 0.85, ease: v3Ease }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <FortIcon sx={{ color: v3Colors.gold.champagne, fontSize: 24 }} />
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: v3Colors.gold.champagne,
                    letterSpacing: '0.28em',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                  }}
                >
                  04 / SAHYADRI SOIL &amp; PALACE HERITAGE
                </Typography>
              </Stack>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.6rem', sm: '4rem', md: '5.2rem' },
                  lineHeight: 1.05,
                  letterSpacing: '0.03em',
                  color: v3Colors.neutral.ivory,
                  textTransform: 'uppercase',
                  mb: 2.5,
                }}
              >
                Rooted In <br />
                <Box
                  component="span"
                  sx={{
                    background: v3Colors.gradients.goldText,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Maharashtra.
                </Box>
              </Typography>

              {/* Gold Divider width 0 -> 60px */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 60, opacity: 1 }}
                viewport={v3Viewport}
                transition={{ duration: 0.7, delay: 0.3, ease: v3Ease }}
                style={{
                  height: 2,
                  backgroundColor: v3Colors.gold.champagne,
                  margin: '0 auto 24px auto',
                }}
              />

              <Typography
                component="p"
                sx={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: { xs: '1.35rem', sm: '1.8rem' },
                  color: v3Colors.gold.champagne,
                  fontWeight: 600,
                  mb: 3.5,
                }}
              >
                “रायगड, प्रतापगड अन् पन्हाळ्याची माती — आमच्या आतिथ्याची खरी पुण्याई”
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: v3Colors.neutral.stone,
                  fontSize: { xs: '1.02rem', sm: '1.15rem' },
                  lineHeight: 1.9,
                  maxWidth: 780,
                  mx: 'auto',
                  mb: 6,
                }}
              >
                Every basalt stone pillar, hand-turned brass vessel, and fragrant woodfire stove across Hotel Shivraj
                pays homage to the rugged dignity of the Maratha empire. We celebrate the pride of our motherland by
                treating every traveler as an honored guest of the royal court.
              </Typography>
            </motion.div>

            {/* 4 Architectural Badges Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={v3Viewport}
              transition={{ duration: 0.8, delay: 0.35, ease: v3Ease }}
            >
              <Grid container spacing={2} sx={{ maxWidth: 880, mx: 'auto' }}>
                {[
                  { title: 'Sahyadri Basalt Stone', desc: 'Crafted with authentic Deccan stone masonry' },
                  { title: 'Pure Desi Ghee Handis', desc: 'Uncompromising heirloom Maharashtrian recipes' },
                  { title: 'Woodfire Simmering', desc: 'Authentic chulivarchi chav with fragrant embers' },
                  { title: 'Courtly Hospitality', desc: 'Rooted in the eternal Atithi Devo Bhava tradition' },
                ].map((badge, idx) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                    <Box
                      sx={{
                        p: 2.5,
                        backgroundColor: 'rgba(21, 18, 16, 0.75)',
                        border: `1px solid ${v3Colors.gold.hairline}`,
                        backdropFilter: 'blur(8px)',
                        textAlign: 'center',
                        height: '100%',
                        transition: 'border-color 0.3s ease',
                        '&:hover': { borderColor: v3Colors.gold.champagne },
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          backgroundColor: v3Colors.gold.antique,
                          transform: 'rotate(45deg)',
                          mx: 'auto',
                          mb: 1.2,
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: v3Colors.neutral.ivory,
                          fontWeight: 800,
                          fontSize: '0.82rem',
                          mb: 0.5,
                        }}
                      >
                        {badge.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: v3Colors.neutral.ash, fontSize: '0.72rem', display: 'block' }}>
                        {badge.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
