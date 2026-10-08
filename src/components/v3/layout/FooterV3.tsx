import React from 'react';
import { Box, Container, Grid, Typography, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { v3Colors } from '../../../theme/v3/colors';
import { contactInfo } from '../../../data/navigation';

const CURRENT_YEAR = new Date().getFullYear();

export const FooterV3: React.FC = () => {
  return (
    <Box
      component="footer"
      id="v3-contact"
      sx={{
        backgroundColor: v3Colors.obsidian.pure,
        color: v3Colors.neutral.ivory,
        pt: { xs: 10, md: 14 },
        pb: 5,
        position: 'relative',
        borderTop: `1px solid ${v3Colors.gold.hairline}`,
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(66, 18, 23, 0.35) 0%, transparent 65%)',
      }}
    >
      <Container maxWidth="xl">
        {/* Top Minimal Editorial Brand Banner */}
        <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: v3Colors.gold.antique,
              letterSpacing: '0.28em',
              fontWeight: 800,
              fontSize: '0.78rem',
              mb: 1.5,
            }}
          >
            CONTEMPORARY ROYAL HOSPITALITY • KARAD
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
              fontWeight: 900,
              fontSize: { xs: '2.4rem', sm: '3.6rem', md: '5rem' },
              letterSpacing: '0.04em',
              color: v3Colors.neutral.ivory,
              lineHeight: 1.05,
              textTransform: 'uppercase',
            }}
          >
            Hotel Shivraj Dhaba
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontStyle: 'italic',
              fontSize: { xs: '1.25rem', sm: '1.55rem' },
              color: v3Colors.gold.champagne,
              mt: 1.5,
            }}
          >
            “अस्सल चव, राजेशाही आदरातिथ्य आणि मराठमोळा स्वाभिमान”
          </Typography>
        </Box>

        {/* 4 Column Editorial Layout */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ mb: 8 }}>
            {/* Column 1: Philosophy & Roots */}
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Bodoni Moda", serif',
                      color: v3Colors.gold.champagne,
                      fontSize: '1rem',
                      letterSpacing: '0.12em',
                      mb: 2,
                    }}
                  >
                    THE ROYAL HOUSE
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: v3Colors.neutral.stone,
                      lineHeight: 1.85,
                      fontSize: '0.9rem',
                      mb: 3,
                    }}
                  >
                    Founded in Karad in 1998 by three visionary friends, Hotel Shivraj Dhaba elevated highway transit
                    dining into a celebrated royal feast. Today, with 20+ verified outlets across Maharashtra, our heritage
                    remains rooted in authentic woodfire cooking, pure ghee, and warm cultural hospitality.
                  </Typography>

                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1.2,
                      px: 2,
                      py: 1,
                      border: `1px solid ${v3Colors.gold.hairline}`,
                      backgroundColor: 'rgba(185, 147, 79, 0.06)',
                    }}
                  >
                    <VerifiedIcon sx={{ fontSize: 18, color: v3Colors.gold.champagne }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: v3Colors.gold.pale,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      ISO Certified Pure Vegetarian Hospitality
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Column 2: Navigation Links */}
            <Grid size={{ xs: 6, md: 2 }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Bodoni Moda", serif',
                    color: v3Colors.gold.champagne,
                    fontSize: '1rem',
                    letterSpacing: '0.12em',
                    mb: 2,
                  }}
                >
                  DISCOVER
                </Typography>
                <Stack spacing={1.5}>
                  {[
                    { label: 'The Heritage Court', href: '#v3-hero' },
                    { label: 'Founding Story', href: '#v3-legacy' },
                    { label: 'Signature Dishes', href: '#v3-menu' },
                    { label: 'The Experience', href: '#v3-experience' },
                    { label: 'Rooted Maharashtra', href: '#v3-heritage' },
                    { label: 'Our Branches', href: '#v3-branches' },
                    { label: 'Curated Gallery', href: '#v3-gallery' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      underline="none"
                      sx={{
                        color: v3Colors.text.lightSecondary,
                        fontSize: '0.85rem',
                        fontFamily: '"Manrope", sans-serif',
                        transition: 'all 0.22s ease',
                        '&:hover': {
                          color: v3Colors.gold.champagne,
                          transform: 'translateX(3px)',
                        },
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Column 3: Prime Corridors */}
            <Grid size={{ xs: 6, md: 3 }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Bodoni Moda", serif',
                    color: v3Colors.gold.champagne,
                    fontSize: '1rem',
                    letterSpacing: '0.12em',
                    mb: 2,
                  }}
                >
                  PRIME CORRIDORS
                </Typography>
                <Stack spacing={1.2}>
                  {[
                    'Karad (Highway AC Flagship)',
                    'Pune Corridor (Hinjawadi, Ravet)',
                    'Mumbai Region (Kamothe, Thane)',
                    'Sangli & Miraj Highway',
                    'Satara Highway Corridor',
                    'Konkan / Chiplun Gateway',
                  ].map((loc) => (
                    <Typography
                      key={loc}
                      variant="body2"
                      sx={{
                        color: v3Colors.neutral.stone,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: 4,
                          height: 4,
                          backgroundColor: v3Colors.gold.antique,
                          transform: 'rotate(45deg)',
                          display: 'inline-block',
                        }}
                      />
                      {loc}
                    </Typography>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Column 4: Welfare & Helplines */}
            <Grid size={{ xs: 12, md: 3 }}>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Bodoni Moda", serif',
                    color: v3Colors.gold.champagne,
                    fontSize: '1rem',
                    letterSpacing: '0.12em',
                    mb: 2,
                  }}
                >
                  PUBLIC SERVICE
                </Typography>

                <Box
                  sx={{
                    p: 2.5,
                    border: `1px solid ${v3Colors.gold.hairline}`,
                    backgroundColor: 'rgba(66, 18, 23, 0.45)',
                    mb: 2.5,
                  }}
                >
                  <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', mb: 1 }}>
                    <MedicalServicesIcon sx={{ color: v3Colors.gold.champagne, fontSize: 20 }} />
                    <Typography variant="subtitle2" sx={{ color: v3Colors.gold.champagne, fontSize: '0.78rem' }}>
                      24x7 FREE HIGHWAY AMBULANCE
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: v3Colors.neutral.ivory, fontWeight: 700, fontSize: '0.95rem' }}>
                    {contactInfo.ambulancePhone}
                  </Typography>
                  <Typography variant="caption" sx={{ color: v3Colors.neutral.ash, display: 'block', mt: 0.5 }}>
                    Public emergency response for travelers & local communities
                  </Typography>
                </Box>

                <Stack spacing={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PhoneIcon sx={{ fontSize: 16, color: v3Colors.gold.antique }} />
                    <Typography variant="body2" sx={{ color: v3Colors.neutral.ivory, fontSize: '0.85rem' }}>
                      {contactInfo.primaryPhone}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <LocationOnIcon sx={{ fontSize: 16, color: v3Colors.gold.antique, mt: 0.3 }} />
                    <Typography variant="body2" sx={{ color: v3Colors.neutral.stone, fontSize: '0.82rem' }}>
                      {contactInfo.headquarters}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Bottom Hairline & Legal */}
        <Box
          sx={{
            pt: 4,
            borderTop: `1px solid ${v3Colors.gold.hairline}`,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="body2" sx={{ color: v3Colors.neutral.ash, fontSize: '0.8rem' }}>
            © {CURRENT_YEAR} Hotel Shivraj Dhaba. All Rights Reserved. Pure Vegetarian Heritage.
          </Typography>
          <Typography variant="caption" sx={{ color: v3Colors.gold.antique, letterSpacing: '0.14em', fontWeight: 600 }}>
            CONTEMPORARY ROYAL HOSPITALITY • VERSION 3
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
