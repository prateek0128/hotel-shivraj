import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CastleOutlinedIcon from '@mui/icons-material/CastleOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { v2Colors } from '../../../theme/v2/colors';
import { v2SectionReveal } from '../../../theme/v2/motion';

const maharajaPillars = [
  {
    num: '01',
    icon: <CastleOutlinedIcon sx={{ fontSize: 28, color: v2Colors.gold.champagne }} />,
    title: 'ROYAL AMBIENCE',
    marathi: 'किल्ले व राजदरबाराची प्रेरणा',
    desc: 'Grand basalt stone architecture, wooden pillars, warm brass lighting, and open courtyards evoking Maharashtra’s majestic fort heritage.',
  },
  {
    num: '02',
    icon: <RestaurantOutlinedIcon sx={{ fontSize: 28, color: v2Colors.gold.champagne }} />,
    title: 'AUTHENTIC FLAVOURS',
    marathi: 'अस्सल लाकडी चुलीची चव',
    desc: 'Uncompromising culinary integrity: hand-patted jowar bhakris, stone-ground red chilies, and clay handis simmering over fragrant woodfire.',
  },
  {
    num: '03',
    icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 28, color: v2Colors.gold.champagne }} />,
    title: 'WARM HOSPITALITY',
    marathi: 'अतिथी देवो भव परंपरा',
    desc: 'Rooted in timeless Maharashtrian warmth where every highway traveler and family is received as a revered royal guest.',
  },
  {
    num: '04',
    icon: <PeopleOutlineOutlinedIcon sx={{ fontSize: 28, color: v2Colors.gold.champagne }} />,
    title: 'FAMILY MOMENTS',
    marathi: 'कौटुंबिक सोहळे व आनंद',
    desc: 'Expansive air-conditioned family dining halls designed for peaceful feasts, joyful reunions, and comfortable highway stopovers.',
  },
];

export const MaharajaExperienceV2: React.FC = () => {
  return (
    <Box
      id="v2-experience"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: v2Colors.maroon.royal,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `
          radial-gradient(circle at 50% 20%, rgba(82, 22, 28, 0.75) 0%, transparent 70%),
          linear-gradient(180deg, #0C0A09 0%, #3A0E12 15%, #3A0E12 85%, #0C0A09 100%)
        `,
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: { xs: 8, md: 12 } }}>
          <motion.div
            variants={v2SectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: v2Colors.gold.champagne,
                letterSpacing: '0.24em',
                fontWeight: 700,
                fontSize: '0.8rem',
                mb: 1.5,
              }}
            >
              COURT OF HOSPITALITY
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Cinzel", Georgia, serif',
                fontWeight: 900,
                fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.8rem' },
                letterSpacing: '0.04em',
                color: v2Colors.ivory.warm,
                lineHeight: 1.05,
                mb: 1.5,
                textTransform: 'uppercase',
              }}
            >
              The Maharaja Experience
            </Typography>

            <Typography
              component="p"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: { xs: '1.25rem', sm: '1.6rem' },
                color: v2Colors.gold.champagne,
                fontWeight: 600,
                mb: 2.5,
              }}
            >
              “कुठेच नाही शिवराज ढाब्याची सर, म्हणूनच इथे मिळतो तृप्तीचा ढेकर!”
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: v2Colors.text.secondaryLight,
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              An experience envisioned not merely as a stopover, but as an immersion into royal Deccan courtliness,
              unrivaled cleanliness, and pure Maharashtrian cultural pride.
            </Typography>
          </motion.div>
        </Box>

        {/* 4 Editorial Pillars with Staggered Entrance & Icon Pop */}
        <Grid container spacing={{ xs: 3.5, md: 4 }}>
          {maharajaPillars.map((pillar, idx) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={pillar.num}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: idx * 0.14,
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
                    p: { xs: 3.5, md: 4 },
                    height: '100%',
                    backgroundColor: 'rgba(12, 10, 9, 0.4)',
                    border: `1px solid ${v2Colors.gold.hairline}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative',
                    '&:hover': {
                      borderColor: v2Colors.gold.champagne,
                      backgroundColor: 'rgba(12, 10, 9, 0.7)',
                      boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7)',
                    },
                  }}
                >
                  <Box>
                    {/* Top: Large Number & Minimalist Icon with Delayed Scale Pop */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: '"Cinzel", Georgia, serif',
                          fontWeight: 900,
                          fontSize: '2.5rem',
                          color: v2Colors.gold.antique,
                          opacity: 0.9,
                          lineHeight: 1,
                        }}
                      >
                        {pillar.num}
                      </Typography>
                      <motion.div
                        variants={{
                          hidden: { scale: 0.7, opacity: 0 },
                          visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1],
                              delay: 0.2 + idx * 0.14,
                            },
                          },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                      >
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `1px solid ${v2Colors.gold.hairline}`,
                            backgroundColor: 'rgba(195, 154, 82, 0.08)',
                          }}
                        >
                          {pillar.icon}
                        </Box>
                      </motion.div>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: '"Cinzel", Georgia, serif',
                        fontWeight: 800,
                        fontSize: '1.2rem',
                        color: v2Colors.ivory.warm,
                        letterSpacing: '0.04em',
                        mb: 0.5,
                      }}
                    >
                      {pillar.title}
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        fontStyle: 'italic',
                        fontSize: '1.05rem',
                        color: v2Colors.gold.champagne,
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {pillar.marathi}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: v2Colors.ivory.muted,
                        lineHeight: 1.75,
                        fontSize: '0.88rem',
                      }}
                    >
                      {pillar.desc}
                    </Typography>
                  </Box>

                  {/* Bottom Hairline & Small Seal */}
                  <Box
                    sx={{
                      pt: 2.5,
                      mt: 3,
                      borderTop: `1px solid ${v2Colors.gold.hairline}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 5,
                        height: 5,
                        backgroundColor: v2Colors.gold.antique,
                        transform: 'rotate(45deg)',
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: v2Colors.gold.champagne,
                        letterSpacing: '0.12em',
                        fontWeight: 700,
                        fontSize: '0.68rem',
                      }}
                    >
                      ROYAL BENCHMARK
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
