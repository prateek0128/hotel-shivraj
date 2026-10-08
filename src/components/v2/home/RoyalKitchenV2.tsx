import React from 'react';
import { Box, Container, Grid, Typography, Stack, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { v2Colors } from '../../../theme/v2/colors';
import { v2SectionReveal } from '../../../theme/v2/motion';
import { dishesData } from '../../../data/dishes';

export const RoyalKitchenV2: React.FC = () => {
  const akkhaMasoor = dishesData.find((d) => d.id === 'akkha-masoor')!;
  const editorialDishes = dishesData.filter((d) => d.id !== 'akkha-masoor');

  return (
    <Box
      id="v2-kitchen"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: v2Colors.obsidian.black,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 880, mx: 'auto', mb: { xs: 8, md: 10 } }}>
          <motion.div
            variants={v2SectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: v2Colors.gold.antique,
                letterSpacing: '0.24em',
                fontWeight: 700,
                fontSize: '0.8rem',
                mb: 1.5,
              }}
            >
              CHULI VARCHI MAHARASHTRIAN CHAV
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Cinzel", Georgia, serif',
                fontWeight: 900,
                fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4.5rem' },
                letterSpacing: '0.03em',
                color: v2Colors.ivory.warm,
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
                color: v2Colors.gold.champagne,
                fontWeight: 600,
                mb: 2,
              }}
            >
              “हस्तनिर्मित मसाले, जड पितळी हंडी आणि परंपरेचा अनमोल ठेवा”
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: v2Colors.text.secondaryLight,
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: 720,
                mx: 'auto',
              }}
            >
              Every delicacy is prepared according to strict heirloom recipes: slow woodfire simmering,
              authentic stone-ground spice blends, cold-pressed oils, and pure desi ghee.
            </Typography>
          </motion.div>
        </Box>

        {/* ========================================================= */}
        {/* HERO FOOD CANVAS: AKKHA MASOOR FULL-WIDTH SPOTLIGHT       */}
        {/* ========================================================= */}
        <Box sx={{ mb: { xs: 10, md: 14 } }}>
          <motion.div
            variants={v2SectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <Box
              sx={{
                position: 'relative',
                p: { xs: 2.5, sm: 4, md: 6 },
                backgroundColor: 'rgba(26, 20, 18, 0.75)',
                border: `1px solid ${v2Colors.gold.antique}`,
                boxShadow: '0 28px 70px rgba(0, 0, 0, 0.85)',
                backgroundImage: 'radial-gradient(circle at top right, rgba(82,22,28,0.55), transparent 70%)',
              }}
            >
              {/* Corner Ornaments */}
              <Box sx={{ position: 'absolute', top: -3, left: -3, width: 26, height: 26, borderTop: `2px solid ${v2Colors.gold.champagne}`, borderLeft: `2px solid ${v2Colors.gold.champagne}` }} />
              <Box sx={{ position: 'absolute', top: -3, right: -3, width: 26, height: 26, borderTop: `2px solid ${v2Colors.gold.champagne}`, borderRight: `2px solid ${v2Colors.gold.champagne}` }} />
              <Box sx={{ position: 'absolute', bottom: -3, left: -3, width: 26, height: 26, borderBottom: `2px solid ${v2Colors.gold.champagne}`, borderLeft: `2px solid ${v2Colors.gold.champagne}` }} />
              <Box sx={{ position: 'absolute', bottom: -3, right: -3, width: 26, height: 26, borderBottom: `2px solid ${v2Colors.gold.champagne}`, borderRight: `2px solid ${v2Colors.gold.champagne}` }} />

              <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
                {/* Left: Dramatic Big Food Image with Clip-Path Reveal */}
                <Grid size={{ xs: 12, md: 6.5 }}>
                  <motion.div
                    variants={{
                      hidden: { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.12, opacity: 0 },
                      visible: {
                        clipPath: 'inset(0% 0% 0% 0%)',
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    style={{ position: 'relative', overflow: 'hidden' }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: 320, sm: 420, md: 480 },
                        overflow: 'hidden',
                        border: '1px solid rgba(195, 154, 82, 0.25)',
                        '&:hover .food-hover-overlay': {
                          opacity: 0.15,
                        },
                        '&:hover .explore-badge': {
                          opacity: 1,
                          transform: 'translate(-50%, -50%) scale(1)',
                        },
                        '&:hover img': {
                          transform: 'scale(1.04)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={akkhaMasoor.image}
                        alt="Signature Akkha Masoor at Hotel Shivraj"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'contrast(1.1) saturate(1.15)',
                          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      />
                      {/* Hover subtle darkening overlay */}
                      <Box
                        className="food-hover-overlay"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: '#000',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                          pointerEvents: 'none',
                        }}
                      />
                      {/* Small Explore Indicator */}
                      <Box
                        className="explore-badge"
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%) scale(0.85)',
                          opacity: 0,
                          transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                          backgroundColor: 'rgba(12, 10, 9, 0.85)',
                          border: `1px solid ${v2Colors.gold.antique}`,
                          backdropFilter: 'blur(8px)',
                          px: 2.5,
                          py: 1,
                          color: v2Colors.gold.champagne,
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.18em',
                          pointerEvents: 'none',
                        }}
                      >
                        EXPLORE DISH
                      </Box>
                      <Chip
                        icon={<StarIcon sx={{ color: '#0C0A09 !important', fontSize: 16 }} />}
                        label="CROWN SIGNATURE • मुख्य आकर्षण"
                        sx={{
                          position: 'absolute',
                          top: 20,
                          left: 20,
                          backgroundColor: v2Colors.gold.champagne,
                          color: v2Colors.obsidian.black,
                          fontWeight: 900,
                          fontSize: '0.74rem',
                          letterSpacing: '0.1em',
                          borderRadius: 0,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid>

                {/* Right: Detailed Story & Pairing Details (Sequential x: 50 -> 0) */}
                <Grid size={{ xs: 12, md: 5.5 }}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.9,
                          ease: [0.22, 1, 0.36, 1],
                          staggerChildren: 0.12,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                  >
                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: v2Colors.gold.antique,
                          letterSpacing: '0.2em',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          mb: 1,
                        }}
                      >
                        SIGNATURE OF THE HOUSE
                      </Typography>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontFamily: '"Cinzel", Georgia, serif',
                          fontWeight: 900,
                          fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                          color: v2Colors.ivory.warm,
                          lineHeight: 1.1,
                          mb: 0.8,
                        }}
                      >
                        {akkhaMasoor.name}
                      </Typography>
                    </motion.div>

                    {/* Gold Divider expanding 0 -> 50px */}
                    <Box sx={{ my: 1.5 }}>
                      <motion.div
                        variants={{
                          hidden: { width: 0, opacity: 0 },
                          visible: { width: 50, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                        }}
                        style={{ height: 2, backgroundColor: v2Colors.gold.champagne }}
                      />
                    </Box>

                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                      <Typography
                        component="p"
                        sx={{
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          fontStyle: 'italic',
                          fontSize: { xs: '1.3rem', sm: '1.55rem' },
                          color: v2Colors.gold.champagne,
                          fontWeight: 600,
                          mb: 2.5,
                        }}
                      >
                        {akkhaMasoor.marathiName}
                      </Typography>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: v2Colors.text.secondaryLight,
                          fontSize: '0.98rem',
                          lineHeight: 1.85,
                          mb: 3.5,
                        }}
                      >
                        {akkhaMasoor.description}
                      </Typography>
                    </motion.div>

                    {/* Highlights Grid */}
                    <Grid container spacing={2} sx={{ mb: 4 }}>
                      <Grid size={6}>
                        <Box sx={{ p: 2, borderLeft: `2px solid ${v2Colors.gold.antique}`, backgroundColor: 'rgba(12,10,9,0.5)' }}>
                          <Typography variant="caption" sx={{ color: v2Colors.gold.champagne, fontWeight: 700, letterSpacing: '0.08em', display: 'block' }}>
                            ROYAL PAIRING
                          </Typography>
                          <Typography variant="body2" sx={{ color: v2Colors.ivory.warm, fontSize: '0.85rem', mt: 0.4 }}>
                            Jowar Bhakri &amp; Matka Dahi
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid size={6}>
                        <Box sx={{ p: 2, borderLeft: `2px solid ${v2Colors.gold.antique}`, backgroundColor: 'rgba(12,10,9,0.5)' }}>
                          <Typography variant="caption" sx={{ color: v2Colors.gold.champagne, fontWeight: 700, letterSpacing: '0.08em', display: 'block' }}>
                            COOKING SECRET
                          </Typography>
                          <Typography variant="body2" sx={{ color: v2Colors.ivory.warm, fontSize: '0.85rem', mt: 0.4 }}>
                            Heavy Brass Handis &amp; White Butter
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button
                          component="a"
                          href="#v2-branches"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            backgroundColor: v2Colors.gold.antique,
                            color: v2Colors.obsidian.black,
                            fontWeight: 800,
                            fontSize: '0.82rem',
                            letterSpacing: '0.1em',
                            px: 3.5,
                            py: 1.4,
                            transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                            '&:hover': {
                              backgroundColor: v2Colors.gold.champagne,
                              transform: 'scale(1.02)',
                              '& .MuiButton-endIcon': {
                                transform: 'translateX(4px)',
                              },
                            },
                            '& .MuiButton-endIcon': {
                              transition: 'transform 0.25s ease',
                            },
                          }}
                        >
                          Taste at Nearest Outlet
                        </Button>
                      </Stack>
                    </motion.div>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>

        {/* ========================================================= */}
        {/* ASYMMETRIC EDITORIAL MAGAZINE FOOD SHOWCASE               */}
        {/* ========================================================= */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Cinzel", Georgia, serif',
              fontWeight: 800,
              fontSize: { xs: '1.6rem', sm: '2.2rem' },
              color: v2Colors.ivory.warm,
              mb: 1,
            }}
          >
            Specialties of The Royal Court
          </Typography>
          <Typography variant="body2" sx={{ color: v2Colors.ivory.muted, mb: 5 }}>
            Carefully curated Maharashtrian vegetarian treasures slow-simmered daily.
          </Typography>

          <Grid container spacing={3.5}>
            {editorialDishes.map((dish, idx) => {
              // Create asymmetric magazine rhythm: alternating between colSpan 7 and 5
              const isWide = idx === 0 || idx === 3;
              const colSpan = isWide ? { xs: 12, md: 7 } : { xs: 12, md: 5 };
              const cardHeight = isWide ? { xs: 260, sm: 340 } : { xs: 260, sm: 380 };

              return (
                <Grid size={colSpan} key={dish.id}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.85,
                          ease: [0.22, 1, 0.36, 1],
                          delay: idx * 0.12,
                        },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    whileHover={{ y: -6, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: cardHeight,
                        overflow: 'hidden',
                        border: '1px solid rgba(195, 154, 82, 0.22)',
                        backgroundColor: v2Colors.obsidian.surface,
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          borderColor: v2Colors.gold.champagne,
                          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.6)',
                          '& .dish-canvas-img': {
                            transform: 'scale(1.04)',
                          },
                          '& .dish-canvas-overlay': {
                            backgroundColor: 'rgba(12, 10, 9, 0.65)',
                          },
                        },
                      }}
                    >
                      <Box
                        component="img"
                        className="dish-canvas-img"
                        src={dish.image}
                        alt={dish.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transform: 'scale(1.08)',
                          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      />

                      {/* Dark Burgundy Gradient Overlay */}
                      <Box
                        className="dish-canvas-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(180deg, rgba(12,10,9,0.2) 0%, rgba(12,10,9,0.92) 80%)',
                          p: { xs: 2.5, sm: 3.5 },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        <Chip
                          label={dish.category}
                          size="small"
                          sx={{
                            alignSelf: 'flex-start',
                            mb: 1.5,
                            backgroundColor: v2Colors.maroon.burgundy,
                            color: v2Colors.gold.pale,
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            borderRadius: 0,
                            border: `1px solid ${v2Colors.gold.hairline}`,
                          }}
                        />

                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: '"Cinzel", Georgia, serif',
                            fontWeight: 800,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            color: v2Colors.ivory.warm,
                            mb: 0.3,
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
                            color: v2Colors.gold.champagne,
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          {dish.marathiName}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: v2Colors.ivory.muted,
                            fontSize: '0.85rem',
                            lineHeight: 1.5,
                            maxWidth: 520,
                          }}
                        >
                          {dish.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
