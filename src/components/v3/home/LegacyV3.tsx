import React, { useRef } from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { v3Colors } from '../../../theme/v3/colors';
import { v3Ease, v3Viewport } from '../../../theme/v3/motion';

const timelineStages = [
  {
    step: '01',
    title: 'THE GENESIS • १९९८',
    subtitle: 'The Three Friends of Karad',
    desc: 'Founded on friendship, relentless grit, and culinary devotion. Three close friends launched a roadside sanctuary in Karad committed to authentic Maharashtrian hospitality.',
    icon: <HistoryEduIcon sx={{ fontSize: 24, color: v3Colors.gold.antique }} />,
  },
  {
    step: '02',
    title: 'WOODFIRE CULINARY TRUTH',
    subtitle: 'Heirloom Handi Secret',
    desc: 'Refusing modern shortcuts, every lentil and vegetable was slow-braised over fragrant wood embers in heavy brass handis, accompanied by hand-patted jowar bhakris.',
    icon: <WhatshotIcon sx={{ fontSize: 24, color: v3Colors.gold.antique }} />,
  },
  {
    step: '03',
    title: 'THE HIGHWAY ICON',
    subtitle: 'Loved by Travelers & Families',
    desc: 'Word of the legendary Akkha Masoor spread along National Highway 4. Travelers, families, and dignitaries made Hotel Shivraj an essential pilgrimage.',
    icon: <VerifiedIcon sx={{ fontSize: 24, color: v3Colors.gold.antique }} />,
  },
  {
    step: '04',
    title: 'THE ROYAL EXPANSION',
    subtitle: '20+ Outlets Across Maharashtra',
    desc: 'Today, our royal standards flourish across Pune, Mumbai, Satara, Sangli, and the Konkan corridor, holding true to pure vegetarian integrity and 24x7 public service.',
    icon: <LocationCityIcon sx={{ fontSize: 24, color: v3Colors.gold.antique }} />,
  },
];

export const LegacyV3: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Animated Gold Progress Bar 0 -> 100%
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-20px', '20px']);

  return (
    <Box
      id="v3-legacy"
      ref={containerRef}
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: v3Colors.lightSection.bg,
        color: v3Colors.lightSection.textPrimary,
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${v3Colors.gold.hairline}`,
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header: Magazine Editorial Style */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={v3Viewport}
            transition={{ duration: 0.8, ease: v3Ease }}
          >
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 1.5 }}>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: '"Bodoni Moda", serif',
                  fontSize: '0.9rem',
                  fontWeight: 900,
                  color: v3Colors.burgundy.deep,
                  letterSpacing: '0.2em',
                }}
              >
                01 / THE LEGACY
              </Typography>
              <Box sx={{ width: 36, height: 1.5, backgroundColor: v3Colors.gold.antique }} />
            </Stack>

            <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: 'flex-end' }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                    fontWeight: 900,
                    fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.6rem' },
                    lineHeight: 1.05,
                    color: v3Colors.lightSection.textPrimary,
                    textTransform: 'uppercase',
                  }}
                >
                  Rooted In Maharashtra. <br />
                  <Box
                    component="span"
                    sx={{
                      color: v3Colors.burgundy.deep,
                      fontStyle: 'italic',
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                    }}
                  >
                    Created for Generations.
                  </Box>
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: v3Colors.lightSection.textSecondary,
                    fontSize: '1.05rem',
                    lineHeight: 1.85,
                    borderLeft: `2px solid ${v3Colors.gold.antique}`,
                    pl: 3,
                  }}
                >
                  “स्वाभिमान, अस्सल चव आणि माणसांवर केलेलं निस्वार्थ प्रेम — हीच आमची खरी दौलत!”
                  <br />
                  From a humble dhaba along the Krishna river basin in Karad to an iconic royal hospitality brand.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Box>

        {/* ========================================================= */}
        {/* EDITORIAL MAGAZINE SPREAD: LARGE IMAGE + FLOATING METADATA */}
        {/* ========================================================= */}
        <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: 'center', mb: { xs: 12, md: 16 } }}>
          {/* Left: Magazine Image with Clip-Path Reveal & Subtle Parallax */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ clipPath: 'inset(0% 100% 0% 0%)', opacity: 0 }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
              viewport={v3Viewport}
              transition={{ duration: 1.2, ease: v3Ease }}
              style={{ position: 'relative' }}
            >
              <motion.div style={{ y: imageY }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 360, sm: 460, md: 520 },
                    overflow: 'hidden',
                    backgroundColor: '#EBE2D5',
                    boxShadow: '0 24px 60px rgba(109, 84, 64, 0.16)',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/maharaj_statue.png"
                    alt="Chattrapati Shivaji Maharaj Legacy at Hotel Shivraj"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(1.08)',
                      transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                      '&:hover': { transform: 'scale(1.04)' },
                    }}
                  />

                  {/* Floating Metadata Card 1: 1998 Founding Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 24,
                      left: 24,
                      p: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.94)',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${v3Colors.gold.antique}`,
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: v3Colors.burgundy.deep,
                        fontWeight: 900,
                        letterSpacing: '0.14em',
                        display: 'block',
                      }}
                    >
                      FOUNDED IN 1998
                    </Typography>
                    <Typography variant="body2" sx={{ color: v3Colors.lightSection.textPrimary, fontWeight: 700 }}>
                      Karad, Maharashtra
                    </Typography>
                  </Box>

                  {/* Floating Metadata Card 2: Pure Vegetarian Authenticity */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 24,
                      right: 24,
                      p: 2.2,
                      backgroundColor: 'rgba(21, 18, 16, 0.92)',
                      backdropFilter: 'blur(8px)',
                      border: `1px solid ${v3Colors.gold.antique}`,
                      color: v3Colors.neutral.ivory,
                      maxWidth: 240,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: v3Colors.gold.champagne,
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        display: 'block',
                      }}
                    >
                      PURE CULINARY HONESTY
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.82rem', mt: 0.4, color: v3Colors.neutral.stone }}>
                      100% Pure Vegetarian dining with zero compromise on regional spice purity.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right: Editorial Narrative */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={v3Viewport}
              transition={{ duration: 0.85, ease: v3Ease }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: v3Colors.burgundy.deep,
                  fontWeight: 800,
                  letterSpacing: '0.22em',
                  fontSize: '0.78rem',
                  mb: 1.5,
                }}
              >
                OUR CULINARY PHILOSOPHY
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                  fontWeight: 900,
                  fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
                  color: v3Colors.lightSection.textPrimary,
                  lineHeight: 1.15,
                  mb: 2.5,
                }}
              >
                Where Every Feast Honors the Maratha Spirit
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: v3Colors.lightSection.textSecondary,
                  fontSize: '1.02rem',
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                At Hotel Shivraj, dining is never a rushed transaction. It is an invitation to taste Maharashtra’s
                heirloom flavors prepared over slow woodfire embers. From travelers charting the Sahyadri passes to
                families celebrating milestone reunions, our kitchens welcome everyone with unpretentious warmth.
              </Typography>

              {/* 3 Pillars Summary */}
              <Grid container spacing={2.5}>
                {[
                  { title: 'Woodfire Handis', desc: 'Simmered in copper & brass vessels with cold-pressed oils.' },
                  { title: 'Stone-Ground Spices', desc: 'Handcrafted masala blends from Krishna valley red chilies.' },
                  { title: 'Highway Welfare', desc: 'Pioneered 24x7 free ambulance service for community safety.' },
                ].map((p, idx) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: '#FFFFFF',
                        border: `1px solid ${v3Colors.lightSection.border}`,
                        borderTop: `2px solid ${v3Colors.gold.antique}`,
                        height: '100%',
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: v3Colors.burgundy.deep,
                          fontWeight: 800,
                          fontSize: '0.82rem',
                          mb: 0.5,
                        }}
                      >
                        {p.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: v3Colors.lightSection.textSecondary, fontSize: '0.82rem' }}>
                        {p.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>

        {/* ========================================================= */}
        {/* STORY TIMELINE WITH ANIMATED SCROLL GOLD PROGRESS LINE     */}
        {/* ========================================================= */}
        <Box sx={{ pt: 4 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: v3Colors.burgundy.deep,
                fontWeight: 800,
                letterSpacing: '0.24em',
                fontSize: '0.78rem',
                mb: 1,
              }}
            >
              CHRONOLOGY OF DEVOTION
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Bodoni Moda", serif',
                fontWeight: 900,
                fontSize: { xs: '1.8rem', sm: '2.5rem' },
                color: v3Colors.lightSection.textPrimary,
              }}
            >
              The Four Chapters of Shivraj
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: 1040, mx: 'auto' }}>
            {/* Background Static Line */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: { xs: 20, md: '50%' },
                transform: { xs: 'none', md: 'translateX(-50%)' },
                width: 2,
                backgroundColor: 'rgba(185, 147, 79, 0.2)',
              }}
            />

            {/* Dynamic Gold Progress Line that draws 0 -> 100% on scroll */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                width: 2,
                height: timelineHeight,
                backgroundColor: v3Colors.gold.antique,
                transformOrigin: 'top',
              }}
            />

            <Stack spacing={{ xs: 5, md: 6 }}>
              {timelineStages.map((stage, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={v3Viewport}
                    transition={{ duration: 0.75, delay: idx * 0.1, ease: v3Ease }}
                  >
                    <Grid
                      container
                      spacing={3}
                      sx={{
                        alignItems: 'center',
                        flexDirection: { xs: 'row', md: isEven ? 'row' : 'row-reverse' },
                      }}
                    >
                      {/* Timeline Content Card */}
                      <Grid size={{ xs: 10, md: 5.5 }} sx={{ pl: { xs: 6, md: 0 } }}>
                        <Box
                          sx={{
                            p: { xs: 2.5, sm: 3.5 },
                            backgroundColor: '#FFFFFF',
                            border: `1px solid ${v3Colors.lightSection.border}`,
                            boxShadow: '0 8px 24px rgba(109, 84, 64, 0.08)',
                            textAlign: { xs: 'left', md: isEven ? 'right' : 'left' },
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: v3Colors.gold.antique,
                              transform: 'translateY(-3px)',
                              boxShadow: '0 16px 36px rgba(109, 84, 64, 0.14)',
                            },
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: v3Colors.gold.antique,
                              fontWeight: 900,
                              letterSpacing: '0.14em',
                              display: 'block',
                              mb: 0.5,
                            }}
                          >
                            CHAPTER {stage.step}
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: '"Bodoni Moda", serif',
                              fontWeight: 800,
                              fontSize: { xs: '1.25rem', sm: '1.45rem' },
                              color: v3Colors.lightSection.textPrimary,
                              mb: 0.3,
                            }}
                          >
                            {stage.title}
                          </Typography>
                          <Typography
                            component="p"
                            sx={{
                              fontFamily: '"Cormorant Garamond", Georgia, serif',
                              fontStyle: 'italic',
                              fontSize: '1.1rem',
                              color: v3Colors.burgundy.deep,
                              fontWeight: 600,
                              mb: 1.5,
                            }}
                          >
                            {stage.subtitle}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: v3Colors.lightSection.textSecondary,
                              lineHeight: 1.7,
                              fontSize: '0.88rem',
                            }}
                          >
                            {stage.desc}
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Center Node Marker */}
                      <Grid
                        size={{ xs: 2, md: 1 }}
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          position: 'relative',
                        }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: '50%',
                            backgroundColor: '#FFFFFF',
                            border: `2px solid ${v3Colors.gold.antique}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 14px rgba(185, 147, 79, 0.3)',
                            zIndex: 2,
                          }}
                        >
                          {stage.icon}
                        </Box>
                      </Grid>

                      {/* Empty spacer for alternating layout on desktop */}
                      <Grid size={{ xs: 12, md: 5.5 }} sx={{ display: { xs: 'none', md: 'block' } }} />
                    </Grid>
                  </motion.div>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
