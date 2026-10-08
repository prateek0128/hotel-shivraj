import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CastleIcon from '@mui/icons-material/Castle';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { v3Colors } from '../../../theme/v3/colors';
import { v3Ease, v3Viewport } from '../../../theme/v3/motion';

const experiencePillars = [
  {
    num: '01',
    title: 'AUTHENTIC FOOD',
    marathi: 'अस्सल लाकडी चुलीची चव',
    desc: 'Uncompromising culinary integrity: hand-patted jowar bhakris, stone-ground red chilies, and clay handis simmering over fragrant woodfire. Every recipe is an heirloom passed down through generations.',
    icon: <RestaurantMenuIcon sx={{ fontSize: 32, color: v3Colors.gold.antique }} />,
  },
  {
    num: '02',
    title: 'ROYAL AMBIENCE',
    marathi: 'किल्ले व राजदरबाराची प्रेरणा',
    desc: 'Grand basalt stone architecture, wooden pillars, warm brass lighting, and open courtyards evoking Maharashtra’s majestic fort heritage. An atmosphere of timeless dignity and comfort.',
    icon: <CastleIcon sx={{ fontSize: 32, color: v3Colors.gold.antique }} />,
  },
  {
    num: '03',
    title: 'FAMILY HOSPITALITY',
    marathi: 'कौटुंबिक सोहळे व आनंद',
    desc: 'Spacious, clean, air-conditioned dining halls designed for peaceful feasts and joyful family gatherings. Rooted in the ancient Maratha belief: “अतिथी देवो भव” — every traveler is revered.',
    icon: <FamilyRestroomIcon sx={{ fontSize: 32, color: v3Colors.gold.antique }} />,
  },
  {
    num: '04',
    title: 'MAHARASHTRA HERITAGE',
    marathi: 'महाराष्ट्रीयन संस्कृतीचा अभिमान',
    desc: 'From our signature Akkha Masoor to traditional kanda-lasun chutneys and chilled matka dahi, every bite connects highway voyagers to the rich culinary soil of the Deccan.',
    icon: <AccountBalanceIcon sx={{ fontSize: 32, color: v3Colors.gold.antique }} />,
  },
];

export const ExperienceStorytellingV3: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <Box
      id="v3-experience"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: v3Colors.lightSection.bg,
        color: v3Colors.lightSection.textPrimary,
        position: 'relative',
        borderTop: `1px solid ${v3Colors.gold.hairline}`,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, lg: 8 }}>
          {/* LEFT: STICKY EDITORIAL HEADLINE & ACTIVE PILLAR COUNTER */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                position: { lg: 'sticky' },
                top: { lg: 130 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={v3Viewport}
                transition={{ duration: 0.85, ease: v3Ease }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Bodoni Moda", serif',
                    fontSize: '0.9rem',
                    fontWeight: 900,
                    color: v3Colors.burgundy.deep,
                    letterSpacing: '0.22em',
                    display: 'block',
                    mb: 1.5,
                  }}
                >
                  03 / THE EXPERIENCE
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                    fontWeight: 900,
                    fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4.2rem' },
                    lineHeight: 1.05,
                    color: v3Colors.lightSection.textPrimary,
                    textTransform: 'uppercase',
                    mb: 2.5,
                  }}
                >
                  The Shivraj Experience
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    color: v3Colors.burgundy.deep,
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  “कुठेच नाही शिवराज ढाब्याची सर, म्हणूनच इथे मिळतो तृप्तीचा ढेकर!”
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: v3Colors.lightSection.textSecondary,
                    fontSize: '1.02rem',
                    lineHeight: 1.85,
                    mb: 4,
                  }}
                >
                  An experience envisioned not merely as a highway pause, but as an immersion into royal Deccan courtliness,
                  spotless hygiene, and authentic Maharashtrian cultural pride.
                </Typography>

                {/* Active Indicator Bar on Desktop */}
                <Box
                  sx={{
                    display: { xs: 'none', lg: 'flex' },
                    alignItems: 'center',
                    gap: 2,
                    pt: 3,
                    borderTop: `1px solid ${v3Colors.lightSection.border}`,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Bodoni Moda", serif',
                      fontWeight: 900,
                      color: v3Colors.gold.antique,
                      fontSize: '2.6rem',
                    }}
                  >
                    {experiencePillars[activePillar].num}
                  </Typography>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: v3Colors.burgundy.deep,
                        fontWeight: 900,
                        letterSpacing: '0.14em',
                        display: 'block',
                      }}
                    >
                      ACTIVE PILLAR
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 800, color: v3Colors.lightSection.textPrimary }}>
                      {experiencePillars[activePillar].title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* RIGHT: INTERACTIVE SCROLLING PILLAR CARDS */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={4}>
              {experiencePillars.map((pillar, idx) => {
                const isActive = activePillar === idx;

                return (
                  <motion.div
                    key={pillar.num}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onViewportEnter={() => setActivePillar(idx)}
                    viewport={{ margin: '-120px 0px -120px 0px' }}
                    transition={{ duration: 0.75, ease: v3Ease }}
                  >
                    <Box
                      sx={{
                        p: { xs: 3.5, sm: 5 },
                        backgroundColor: '#FFFFFF',
                        border: `1px solid ${
                          isActive ? v3Colors.gold.antique : v3Colors.lightSection.border
                        }`,
                        boxShadow: isActive
                          ? '0 20px 50px rgba(185, 147, 79, 0.16)'
                          : '0 8px 24px rgba(109, 84, 64, 0.06)',
                        transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                        position: 'relative',
                        '&:hover': {
                          borderColor: v3Colors.gold.antique,
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      {/* Top: Large Number & Minimal Icon */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
                        <Typography
                          variant="h3"
                          sx={{
                            fontFamily: '"Bodoni Moda", serif',
                            fontWeight: 900,
                            fontSize: { xs: '2.5rem', sm: '3.2rem' },
                            color: isActive ? v3Colors.gold.antique : '#C9BEB0',
                            lineHeight: 1,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {pillar.num}
                        </Typography>

                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: isActive ? 'rgba(185, 147, 79, 0.1)' : '#F5EFE6',
                            border: `1px solid ${v3Colors.gold.hairline}`,
                            transition: 'background-color 0.3s ease',
                          }}
                        >
                          {pillar.icon}
                        </Box>
                      </Box>

                      {/* Pillar Title */}
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                          fontWeight: 800,
                          fontSize: { xs: '1.4rem', sm: '1.75rem' },
                          color: v3Colors.lightSection.textPrimary,
                          letterSpacing: '0.03em',
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
                          fontSize: '1.15rem',
                          color: v3Colors.burgundy.deep,
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {pillar.marathi}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: v3Colors.lightSection.textSecondary,
                          fontSize: '0.96rem',
                          lineHeight: 1.85,
                        }}
                      >
                        {pillar.desc}
                      </Typography>

                      {/* Hairline Divider */}
                      <Box
                        sx={{
                          mt: 3,
                          pt: 2.5,
                          borderTop: `1px solid ${v3Colors.lightSection.border}`,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <Box sx={{ width: 6, height: 6, backgroundColor: v3Colors.gold.antique, transform: 'rotate(45deg)' }} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: v3Colors.burgundy.deep,
                            fontWeight: 800,
                            letterSpacing: '0.14em',
                            fontSize: '0.72rem',
                          }}
                        >
                          ROYAL BENCHMARK OF MAHARASHTRA
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
