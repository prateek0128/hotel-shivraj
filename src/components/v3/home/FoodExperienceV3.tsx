import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Stack, Button, IconButton, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { v3Colors } from '../../../theme/v3/colors';
import { v3Ease, v3Viewport } from '../../../theme/v3/motion';
import { dishesData } from '../../../data/dishes';

export const FoodExperienceV3: React.FC = () => {
  const akkhaMasoor = dishesData.find((d) => d.id === 'akkha-masoor')!;
  const carouselDishes = dishesData.filter((d) => d.id !== 'akkha-masoor');

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : carouselDishes.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < carouselDishes.length - 1 ? prev + 1 : 0));
  };

  return (
    <Box
      id="v3-menu"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: v3Colors.obsidian.pure,
        color: v3Colors.neutral.ivory,
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${v3Colors.gold.hairline}`,
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(66, 18, 23, 0.5) 0%, transparent 60%)',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={v3Viewport}
            transition={{ duration: 0.8, ease: v3Ease }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: v3Colors.gold.antique,
                letterSpacing: '0.26em',
                fontWeight: 800,
                fontSize: '0.8rem',
                mb: 1.5,
              }}
            >
              02 / CULINARY MASTERPIECES
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                fontWeight: 900,
                fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.6rem' },
                letterSpacing: '0.03em',
                color: v3Colors.neutral.ivory,
                lineHeight: 1.05,
                mb: 1.5,
              }}
            >
              The Royal Kitchen
            </Typography>

            <Typography
              component="p"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: { xs: '1.25rem', sm: '1.6rem' },
                color: v3Colors.gold.champagne,
                fontWeight: 600,
                mb: 2,
              }}
            >
              “हस्तनिर्मित मसाले, जड पितळी हंडी आणि परंपरेचा अनमोल ठेवा”
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: v3Colors.neutral.stone,
                fontSize: '1.02rem',
                lineHeight: 1.85,
                maxWidth: 680,
                mx: 'auto',
              }}
            >
              Every delicacy is prepared according to strict heirloom recipes: slow woodfire simmering,
              authentic stone-ground spice blends, cold-pressed oils, and pure desi ghee.
            </Typography>
          </motion.div>
        </Box>

        {/* ========================================================= */}
        {/* EMOTIONAL CENTERPIECE: AKKHA MASOOR 70 / 30 ASYMMETRIC      */}
        {/* ========================================================= */}
        <Box sx={{ mb: { xs: 12, md: 16 } }}>
          <Box
            sx={{
              p: { xs: 2.5, sm: 4, md: 6 },
              backgroundColor: 'rgba(21, 18, 16, 0.75)',
              border: `1px solid ${v3Colors.gold.antique}`,
              boxShadow: '0 32px 80px rgba(0, 0, 0, 0.9)',
              position: 'relative',
            }}
          >
            {/* Architectural Gold Corner Accents */}
            <Box sx={{ position: 'absolute', top: -3, left: -3, width: 28, height: 28, borderTop: `2px solid ${v3Colors.gold.champagne}`, borderLeft: `2px solid ${v3Colors.gold.champagne}` }} />
            <Box sx={{ position: 'absolute', top: -3, right: -3, width: 28, height: 28, borderTop: `2px solid ${v3Colors.gold.champagne}`, borderRight: `2px solid ${v3Colors.gold.champagne}` }} />
            <Box sx={{ position: 'absolute', bottom: -3, left: -3, width: 28, height: 28, borderBottom: `2px solid ${v3Colors.gold.champagne}`, borderLeft: `2px solid ${v3Colors.gold.champagne}` }} />
            <Box sx={{ position: 'absolute', bottom: -3, right: -3, width: 28, height: 28, borderBottom: `2px solid ${v3Colors.gold.champagne}`, borderRight: `2px solid ${v3Colors.gold.champagne}` }} />

            <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
              {/* 70% Food Image with Clip-Path Reveal */}
              <Grid size={{ xs: 12, md: 7 }}>
                <motion.div
                  initial={{ clipPath: 'inset(0% 100% 0% 0%)', scale: 1.12, opacity: 0 }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1, opacity: 1 }}
                  viewport={v3Viewport}
                  transition={{ duration: 1.2, ease: v3Ease }}
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 320, sm: 440, md: 500 },
                      overflow: 'hidden',
                      border: '1px solid rgba(185, 147, 79, 0.25)',
                      '&:hover img': { transform: 'scale(1.04)' },
                    }}
                  >
                    <Box
                      component="img"
                      src={akkhaMasoor.image}
                      alt="Signature Akkha Masoor Special"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'contrast(1.15) saturate(1.15)',
                        transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />

                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(11,10,9,0.1) 0%, rgba(11,10,9,0.7) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    <Chip
                      icon={<StarIcon sx={{ color: '#0B0A09 !important', fontSize: 16 }} />}
                      label="HALLMARK OF KARAD • मुख्य आकर्षण"
                      sx={{
                        position: 'absolute',
                        top: 24,
                        left: 24,
                        backgroundColor: v3Colors.gold.champagne,
                        color: v3Colors.obsidian.pure,
                        fontWeight: 900,
                        fontSize: '0.74rem',
                        letterSpacing: '0.12em',
                        borderRadius: 0,
                        boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>

              {/* 30% Story & Pairing Information */}
              <Grid size={{ xs: 12, md: 5 }}>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={v3Viewport}
                  transition={{ duration: 0.85, ease: v3Ease }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: v3Colors.gold.antique,
                      letterSpacing: '0.22em',
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      mb: 1,
                    }}
                  >
                    THE SIGNATURE OF THE HOUSE
                  </Typography>

                  <Typography
                    variant="h2"
                    sx={{
                      fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                      fontWeight: 900,
                      fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                      color: v3Colors.neutral.ivory,
                      lineHeight: 1.1,
                      mb: 0.8,
                    }}
                  >
                    {akkhaMasoor.name}
                  </Typography>

                  {/* Gold Divider expanding 0 -> 50px */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 50, opacity: 1 }}
                    viewport={v3Viewport}
                    transition={{ duration: 0.7, delay: 0.2, ease: v3Ease }}
                    style={{ height: 2, backgroundColor: v3Colors.gold.champagne, marginBottom: 12 }}
                  />

                  <Typography
                    component="p"
                    sx={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: { xs: '1.3rem', sm: '1.55rem' },
                      color: v3Colors.gold.champagne,
                      fontWeight: 600,
                      mb: 2.5,
                    }}
                  >
                    {akkhaMasoor.marathiName}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: v3Colors.neutral.stone,
                      fontSize: '0.98rem',
                      lineHeight: 1.85,
                      mb: 3.5,
                    }}
                  >
                    {akkhaMasoor.description}
                  </Typography>

                  {/* Highlights Grid */}
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid size={6}>
                      <Box sx={{ p: 2, borderLeft: `2px solid ${v3Colors.gold.antique}`, backgroundColor: 'rgba(11,10,9,0.5)' }}>
                        <Typography variant="caption" sx={{ color: v3Colors.gold.champagne, fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
                          ROYAL PAIRING
                        </Typography>
                        <Typography variant="body2" sx={{ color: v3Colors.neutral.ivory, fontSize: '0.85rem', mt: 0.4 }}>
                          Jowar Bhakri &amp; Matka Dahi
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={6}>
                      <Box sx={{ p: 2, borderLeft: `2px solid ${v3Colors.gold.antique}`, backgroundColor: 'rgba(11,10,9,0.5)' }}>
                        <Typography variant="caption" sx={{ color: v3Colors.gold.champagne, fontWeight: 800, letterSpacing: '0.08em', display: 'block' }}>
                          SECRET PREPARATION
                        </Typography>
                        <Typography variant="body2" sx={{ color: v3Colors.neutral.ivory, fontSize: '0.85rem', mt: 0.4 }}>
                          Heavy Brass Handis &amp; White Butter
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Button
                    component="a"
                    href="#v3-branches"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: v3Colors.gold.antique,
                      color: v3Colors.obsidian.pure,
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      letterSpacing: '0.1em',
                      px: 3.5,
                      py: 1.4,
                      transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                      '&:hover': {
                        backgroundColor: v3Colors.gold.champagne,
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    Taste at Nearest Outlet
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* ========================================================= */}
        {/* INTERACTIVE HORIZONTAL FOOD CAROUSEL                      */}
        {/* ========================================================= */}
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Bodoni Moda", serif',
                  fontWeight: 900,
                  fontSize: { xs: '1.6rem', sm: '2.2rem' },
                  color: v3Colors.neutral.ivory,
                  mb: 0.8,
                }}
              >
                Specialties of the Royal Court
              </Typography>
              <Typography variant="body2" sx={{ color: v3Colors.neutral.stone }}>
                Slow-simmered Maharashtrian vegetarian treasures prepared fresh daily.
              </Typography>
            </Box>

            {/* Carousel Controls */}
            <Stack direction="row" spacing={1.5}>
              <IconButton
                onClick={handlePrev}
                aria-label="Previous Dish"
                sx={{
                  color: v3Colors.neutral.ivory,
                  border: `1px solid ${v3Colors.gold.hairline}`,
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  '&:hover': {
                    backgroundColor: v3Colors.gold.antique,
                    color: v3Colors.obsidian.pure,
                  },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton
                onClick={handleNext}
                aria-label="Next Dish"
                sx={{
                  color: v3Colors.neutral.ivory,
                  border: `1px solid ${v3Colors.gold.hairline}`,
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  '&:hover': {
                    backgroundColor: v3Colors.gold.antique,
                    color: v3Colors.obsidian.pure,
                  },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          {/* Carousel Slide Track */}
          <Grid container spacing={3}>
            {carouselDishes.slice(currentIndex, currentIndex + 3).concat(
              currentIndex + 3 > carouselDishes.length
                ? carouselDishes.slice(0, (currentIndex + 3) % carouselDishes.length)
                : []
            ).slice(0, 3).map((dish, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={`${dish.id}-${idx}`}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={v3Viewport}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: v3Ease }}
                  whileHover={{ y: -5, transition: { duration: 0.28, ease: v3Ease } }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: 420,
                      backgroundColor: v3Colors.obsidian.card,
                      border: `1px solid ${v3Colors.gold.hairline}`,
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        borderColor: v3Colors.gold.champagne,
                        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8)',
                        '& .carousel-dish-img': { transform: 'scale(1.05)' },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      className="carousel-dish-img"
                      src={dish.image}
                      alt={dish.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />

                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(11,10,9,0.2) 0%, rgba(11,10,9,0.92) 80%)',
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Chip
                        label={dish.category}
                        size="small"
                        sx={{
                          alignSelf: 'flex-start',
                          mb: 1.5,
                          backgroundColor: v3Colors.burgundy.deep,
                          color: v3Colors.gold.pale,
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          borderRadius: 0,
                        }}
                      />

                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: '"Bodoni Moda", serif',
                          fontWeight: 800,
                          fontSize: '1.35rem',
                          color: v3Colors.neutral.ivory,
                          mb: 0.4,
                        }}
                      >
                        {dish.name}
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          fontStyle: 'italic',
                          fontSize: '1.1rem',
                          color: v3Colors.gold.champagne,
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {dish.marathiName}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: v3Colors.neutral.stone,
                          fontSize: '0.85rem',
                          lineHeight: 1.55,
                        }}
                      >
                        {dish.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
