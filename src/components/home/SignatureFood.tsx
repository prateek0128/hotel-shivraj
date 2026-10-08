import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Stack, Tabs, Tab, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { heritageColors } from '../../theme/colors';
import { dishesData } from '../../data/dishes';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageFrame } from '../common/HeritageFrame';
import { CTAButton } from '../common/CTAButton';
import { imageClipRevealVariants } from '../../theme/motion';

export const SignatureFood: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredDishes =
    activeCategory === 'All'
      ? dishesData
      : dishesData.filter((d) => d.category === activeCategory);

  const akkhaMasoor = dishesData.find((d) => d.id === 'akkha-masoor')!;

  return (
    <Box
      id="signature-food"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: heritageColors.charcoal.main,
        color: heritageColors.parchment.pure,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `
          radial-gradient(circle at top left, rgba(74, 23, 24, 0.45), transparent 55%),
          radial-gradient(circle at bottom right, rgba(176, 138, 69, 0.12), transparent 50%)
        `,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="CULINARY TREASURES OF MAHARASHTRA"
          marathiEyebrow="स्वादाचा वारसा"
          title="Signature Maharashtrian Specialties"
          marathiTitle="“नादखुळा अख्खा मसूर आणि अस्सल गावरान चव”"
          subtitle="Every recipe is slow-simmered in traditional brass vessels with authentic stone-ground spices, pure ghee, and century-old Maharashtrian cooking secrets."
          mode="dark"
        />

        {/* HERO SHOWCASE: The Crown Jewel - AKKHA MASOOR with Clip-Path Reveal */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <HeritageFrame
            mode="dark"
            padding={{ xs: 2.5, sm: 3.5, md: 5 }}
            sx={{
              backgroundColor: 'rgba(23, 18, 14, 0.88)',
              border: `1px solid ${heritageColors.gold.border}`,
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
            }}
          >
            <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
              {/* Left: Dramatic Food Photography with Slow Clip-Path Reveal */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  variants={imageClipRevealVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 0,
                      border: `1px solid ${heritageColors.gold.border}`,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
                      '&:hover .signature-dish-img': {
                        transform: 'scale(1.035)',
                      },
                      '&:hover .dish-glow-overlay': {
                        opacity: 0.25,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      className="signature-dish-img"
                      src={akkhaMasoor.image}
                      alt="Signature Akkha Masoor at Hotel Shivraj Dhaba"
                      sx={{
                        width: '100%',
                        height: { xs: 300, sm: 400, md: 460 },
                        objectFit: 'cover',
                        filter: 'contrast(1.08) saturate(1.1)',
                        transition: 'transform 0.8s cubic-bezier(0.2, 0, 0, 1)',
                      }}
                    />

                    {/* Subtle warm glow overlay on hover */}
                    <Box
                      className="dish-glow-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at center, rgba(212, 176, 106, 0.3), transparent 70%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                      }}
                    />

                    <Chip
                      icon={<StarIcon sx={{ color: '#000 !important', fontSize: 16 }} />}
                      label="CROWN SIGNATURE • मुख्य आकर्षण"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        backgroundColor: heritageColors.gold.highlight,
                        color: heritageColors.charcoal.darkest,
                        fontWeight: 800,
                        fontSize: '0.75rem',
                        letterSpacing: '0.08em',
                        borderRadius: 0,
                        border: '1px solid #FFFFFF',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>

              {/* Right: The Akkha Masoor Story & Staggered Details */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: heritageColors.gold.highlight,
                      letterSpacing: '0.18em',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    KARAD'S MOST ICONIC DELICACY
                  </Typography>

                  <Typography
                    variant="h2"
                    sx={{
                      color: heritageColors.parchment.pure,
                      fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
                      fontWeight: 800,
                      lineHeight: 1.15,
                      mb: 1,
                    }}
                  >
                    {akkhaMasoor.name}
                  </Typography>

                  <Typography
                    component="p"
                    sx={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: { xs: '1.35rem', sm: '1.6rem' },
                      color: heritageColors.gold.pale,
                      fontWeight: 600,
                      mb: 2.5,
                    }}
                  >
                    {akkhaMasoor.marathiName}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: heritageColors.parchment.stone,
                      fontSize: { xs: '0.95rem', sm: '1.05rem' },
                      lineHeight: 1.8,
                      mb: 3.5,
                    }}
                  >
                    {akkhaMasoor.description}
                  </Typography>

                  {/* Traditional Highlights */}
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid size={6}>
                      <Box sx={{ p: 1.8, borderLeft: `2px solid ${heritageColors.gold.main}`, backgroundColor: 'rgba(255,255,255,0.04)' }}>
                        <Typography variant="caption" sx={{ color: heritageColors.gold.highlight, display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>
                          TRADITIONAL PAIRING
                        </Typography>
                        <Typography variant="body2" sx={{ color: heritageColors.parchment.light, fontSize: '0.85rem', mt: 0.5 }}>
                          Hot Jowar Bhakri &amp; Earthen Matka Dahi
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={6}>
                      <Box sx={{ p: 1.8, borderLeft: `2px solid ${heritageColors.gold.main}`, backgroundColor: 'rgba(255,255,255,0.04)' }}>
                        <Typography variant="caption" sx={{ color: heritageColors.gold.highlight, display: 'block', fontWeight: 700, letterSpacing: '0.05em' }}>
                          COOKING VESSEL
                        </Typography>
                        <Typography variant="body2" sx={{ color: heritageColors.parchment.light, fontSize: '0.85rem', mt: 0.5 }}>
                          Slow-simmered in Heavy Brass Handis
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <CTAButton variantType="gold-filled" href="#branches">
                      Taste at Nearest Branch
                    </CTAButton>
                    <CTAButton variantType="gold-outlined" href="#branches">
                      Explore All Outlets
                    </CTAButton>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          </HeritageFrame>
        </Box>

        {/* CATEGORY FILTER TABS WITH SMOOTH TRANSITION */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Tabs
            value={activeCategory}
            onChange={(_, val) => setActiveCategory(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: heritageColors.gold.highlight,
                height: 2,
                transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
              },
              '& .MuiTab-root': {
                color: heritageColors.text.mutedLight,
                fontFamily: '"Cinzel", Georgia, serif',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                px: { xs: 2.2, sm: 3.2 },
                py: 1.2,
                transition: 'all 0.25s ease',
                '&.Mui-selected': {
                  color: heritageColors.gold.pale,
                  fontWeight: 700,
                },
                '&:hover': {
                  color: heritageColors.gold.highlight,
                },
              },
            }}
          >
            <Tab label="All Specialties" value="All" />
            <Tab label="Signature" value="Signature" />
            <Tab label="Main Course" value="Main Course" />
            <Tab label="Curd &amp; Accompaniments" value="Curd & Dessert" />
          </Tabs>
        </Box>

        {/* DISHES EDITORIAL GRID WITH MICRO-INTERACTIONS */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <AnimatePresence>
            {filteredDishes
              .filter((d) => d.id !== 'akkha-masoor')
              .map((dish, idx) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dish.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                  >
                    <Box
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'rgba(23, 18, 14, 0.75)',
                        border: '1px solid rgba(176, 138, 69, 0.22)',
                        backdropFilter: 'blur(8px)',
                        transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
                        position: 'relative',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: heritageColors.gold.highlight,
                          boxShadow: '0 16px 36px rgba(0,0,0,0.6)',
                          '& .dish-img': {
                            transform: 'scale(1.03)',
                          },
                          '& .dish-card-icon': {
                            transform: 'translateX(4px)',
                            color: heritageColors.gold.highlight,
                          },
                        },
                      }}
                    >
                      {/* Image Container */}
                      <Box sx={{ position: 'relative', height: 230, overflow: 'hidden' }}>
                        <Box
                          component="img"
                          className="dish-img"
                          src={dish.image}
                          alt={dish.name}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s cubic-bezier(0.2, 0, 0, 1)',
                          }}
                        />
                        <Chip
                          label={dish.category}
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            backgroundColor: 'rgba(23, 18, 14, 0.85)',
                            color: heritageColors.gold.pale,
                            border: `1px solid ${heritageColors.gold.border}`,
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            borderRadius: 0,
                          }}
                        />
                      </Box>

                      {/* Content */}
                      <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: heritageColors.parchment.pure,
                            fontFamily: '"Cinzel", Georgia, serif',
                            mb: 0.5,
                          }}
                        >
                          {dish.name}
                        </Typography>

                        <Typography
                          component="p"
                          sx={{
                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                            fontStyle: 'italic',
                            fontSize: '1.05rem',
                            color: heritageColors.gold.pale,
                            mb: 1.5,
                          }}
                        >
                          {dish.marathiName}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: heritageColors.text.secondaryLight,
                            fontSize: '0.88rem',
                            lineHeight: 1.6,
                            mb: 2.5,
                            flexGrow: 1,
                          }}
                        >
                          {dish.description}
                        </Typography>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            pt: 1.5,
                            borderTop: '1px solid rgba(176, 138, 69, 0.15)',
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{
                              color: heritageColors.gold.highlight,
                              letterSpacing: '0.08em',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                            }}
                          >
                            <span>Experience Taste</span>
                            <ArrowForwardIcon
                              className="dish-card-icon"
                              sx={{
                                fontSize: 14,
                                transition: 'all 0.25s ease',
                              }}
                            />
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: heritageColors.text.mutedLight, fontStyle: 'italic' }}
                          >
                            Karad Recipe
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};
