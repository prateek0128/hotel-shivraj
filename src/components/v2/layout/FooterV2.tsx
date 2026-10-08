import React from 'react';
import { Box, Container, Grid, Typography, Stack, Link } from '@mui/material';
import { motion } from 'framer-motion';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VerifiedIcon from '@mui/icons-material/Verified';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { v2Colors } from '../../../theme/v2/colors';
import { contactInfo } from '../../../data/navigation';

const CURRENT_YEAR = new Date().getFullYear();

export const FooterV2: React.FC = () => {
  return (
    <Box
      component="footer"
      id="v2-contact"
      sx={{
        backgroundColor: v2Colors.obsidian.black,
        color: v2Colors.ivory.warm,
        pt: { xs: 10, md: 14 },
        pb: 5,
        position: 'relative',
        borderTop: `1px solid ${v2Colors.gold.hairline}`,
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(82, 22, 28, 0.4) 0%, transparent 70%)',
      }}
    >
      <Container maxWidth="xl">
        {/* Top Grand Heading Banner */}
        <Box sx={{ mb: { xs: 8, md: 10 }, textAlign: 'center' }}>
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
            MODERN MAHARAJA • KARAD
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Cinzel", Georgia, serif',
              fontWeight: 900,
              fontSize: { xs: '2.4rem', sm: '3.6rem', md: '5rem' },
              letterSpacing: '0.04em',
              color: v2Colors.ivory.warm,
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
              fontSize: { xs: '1.25rem', sm: '1.6rem' },
              color: v2Colors.gold.champagne,
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
                  fontFamily: '"Cinzel", Georgia, serif',
                  color: v2Colors.gold.champagne,
                  fontSize: '1rem',
                  letterSpacing: '0.12em',
                  mb: 2,
                }}
              >
                THE PALACE LEGACY
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: v2Colors.ivory.muted,
                  lineHeight: 1.8,
                  fontSize: '0.9rem',
                  mb: 3,
                }}
              >
                Born out of the relentless vision of three close friends in Karad in 1998,
                Hotel Shivraj Dhaba redefined roadside dining into a royal Maharashtrian gastronomic celebration.
                Today, 20+ outlets across Maharashtra carry forward this sacred heritage of authentic taste and royal care.
              </Typography>

              {/* ISO Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.2,
                  px: 2,
                  py: 1,
                  border: `1px solid ${v2Colors.gold.hairline}`,
                  backgroundColor: 'rgba(195, 154, 82, 0.06)',
                }}
              >
                <VerifiedIcon sx={{ fontSize: 18, color: v2Colors.gold.champagne }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: v2Colors.gold.pale,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  ISO Certified Pure Veg Hospitality
                </Typography>
              </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Column 2: Quick Navigation */}
          <Grid size={{ xs: 6, md: 2 }}>
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  color: v2Colors.gold.champagne,
                  fontSize: '1rem',
                  letterSpacing: '0.12em',
                  mb: 2,
                }}
              >
                EXPLORE
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: 'The Royal Court', href: '#v2-hero' },
                  { label: 'Founding Legacy', href: '#v2-legacy' },
                  { label: 'Royal Kitchen', href: '#v2-kitchen' },
                  { label: 'Maharaja Experience', href: '#v2-experience' },
                  { label: 'Fort Architecture', href: '#v2-forts' },
                  { label: 'Maharashtra Outlets', href: '#v2-branches' },
                  { label: 'Curated Gallery', href: '#v2-gallery' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    underline="none"
                    sx={{
                      color: v2Colors.text.secondaryLight,
                      fontSize: '0.85rem',
                      fontFamily: '"Manrope", sans-serif',
                      transition: 'all 0.22s ease',
                      '&:hover': {
                        color: v2Colors.gold.champagne,
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
                  fontFamily: '"Cinzel", Georgia, serif',
                  color: v2Colors.gold.champagne,
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
                      color: v2Colors.ivory.muted,
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
                        backgroundColor: v2Colors.gold.antique,
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
                  fontFamily: '"Cinzel", Georgia, serif',
                  color: v2Colors.gold.champagne,
                  fontSize: '1rem',
                  letterSpacing: '0.12em',
                  mb: 2,
                }}
              >
                ROYAL WELFARE
              </Typography>

              <Box
                sx={{
                  p: 2.5,
                  border: `1px solid ${v2Colors.gold.hairline}`,
                  backgroundColor: 'rgba(82, 22, 28, 0.45)',
                  mb: 2.5,
                }}
              >
                <Stack direction="row" spacing={1.2} sx={{ alignItems: 'center', mb: 1 }}>
                  <MedicalServicesIcon sx={{ color: v2Colors.gold.champagne, fontSize: 20 }} />
                  <Typography variant="subtitle2" sx={{ color: v2Colors.gold.champagne, fontSize: '0.78rem' }}>
                    24x7 FREE AMBULANCE
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: v2Colors.ivory.warm, fontWeight: 700, fontSize: '0.95rem' }}>
                  {contactInfo.ambulancePhone}
                </Typography>
                <Typography variant="caption" sx={{ color: v2Colors.ivory.stone, display: 'block', mt: 0.5 }}>
                  Free public highway emergency service
                </Typography>
              </Box>

              <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ fontSize: 16, color: v2Colors.gold.antique }} />
                  <Typography variant="body2" sx={{ color: v2Colors.ivory.warm, fontSize: '0.85rem' }}>
                    {contactInfo.primaryPhone}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 16, color: v2Colors.gold.antique, mt: 0.3 }} />
                  <Typography variant="body2" sx={{ color: v2Colors.ivory.muted, fontSize: '0.82rem' }}>
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
            borderTop: `1px solid ${v2Colors.gold.hairline}`,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="caption" sx={{ color: v2Colors.ivory.muted }}>
            © {CURRENT_YEAR} Hotel Shivraj Dhaba. All Rights Reserved. • Version 2 (Modern Maharaja Edition).
          </Typography>
          <Typography variant="caption" sx={{ color: v2Colors.gold.antique, letterSpacing: '0.1em' }}>
            कराड • पश्चिम महाराष्ट्राची स्वतंत्र रुचकर ओळख
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
