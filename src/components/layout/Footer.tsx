import React from 'react';
import { Box, Container, Grid, Typography, Stack, IconButton, Link } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import VerifiedIcon from '@mui/icons-material/Verified';
import { heritageColors } from '../../theme/colors';
import { navigationItems, contactInfo } from '../../data/navigation';
import { HeritageDivider } from '../common/HeritageDivider';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        backgroundColor: heritageColors.charcoal.darkest,
        color: heritageColors.parchment.light,
        pt: { xs: 8, md: 10 },
        pb: 4,
        position: 'relative',
        borderTop: `1px solid ${heritageColors.gold.border}`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent 0%, ${heritageColors.gold.main} 50%, transparent 100%)`,
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 5, md: 6 }} sx={{ mb: 6 }}>
          {/* Column 1: Brand & Philosophy */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 3 }}>
              <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: 'center' }}>
                <Box
                  component="img"
                  src="/images/shivraj_logo.png"
                  alt="Hotel Shivraj Dhaba"
                  sx={{
                    height: 64,
                    width: 'auto',
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
                  }}
                />
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: '"Cinzel", Georgia, serif',
                      fontWeight: 800,
                      color: heritageColors.parchment.pure,
                      letterSpacing: '0.04em',
                      lineHeight: 1.1,
                      fontSize: '1.25rem',
                    }}
                  >
                    HOTEL SHIVRAJ DHABA
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: heritageColors.gold.highlight,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      display: 'block',
                      mt: 0.5,
                    }}
                  >
                    कराडची स्वतंत्र रुचकर ओळख
                  </Typography>
                </Box>
              </Stack>

              <Typography
                variant="body2"
                sx={{
                  color: heritageColors.text.mutedLight,
                  lineHeight: 1.75,
                  mb: 2.5,
                  fontSize: '0.9rem',
                }}
              >
                तीन मित्रांच्या ध्येयवेड्या विचारातून उगम पावलेला शिवराज ढाबा आज अस्सल
                महाराष्ट्रीय संस्कृती, शुद्ध-सात्विक गुणवत्ता आणि राजेशाही आदरातिथ्याचे प्रतिक बनला आहे.
                पश्चिम महाराष्ट्राची शानं — तुम्हा सर्वांचा अभिमान!
              </Typography>

              {/* ISO Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.8,
                  py: 0.8,
                  border: `1px solid ${heritageColors.gold.border}`,
                  backgroundColor: 'rgba(176, 138, 69, 0.08)',
                }}
              >
                <VerifiedIcon sx={{ fontSize: 18, color: heritageColors.gold.highlight }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: heritageColors.gold.pale,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  ISO Certified Standard of Hospitality
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Column 2: Navigation Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Cinzel", Georgia, serif',
                color: heritageColors.gold.highlight,
                fontSize: '0.95rem',
                letterSpacing: '0.12em',
                mb: 2.5,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  width: 28,
                  height: '1px',
                  backgroundColor: heritageColors.gold.main,
                },
              }}
            >
              EXPLORE
            </Typography>
            <Stack spacing={1.5}>
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: heritageColors.text.secondaryLight,
                    fontSize: '0.875rem',
                    transition: 'all 0.25s ease',
                    display: 'inline-block',
                    '&:hover': {
                      color: heritageColors.gold.highlight,
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Presence Across Maharashtra */}
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Cinzel", Georgia, serif',
                color: heritageColors.gold.highlight,
                fontSize: '0.95rem',
                letterSpacing: '0.12em',
                mb: 2.5,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  width: 28,
                  height: '1px',
                  backgroundColor: heritageColors.gold.main,
                },
              }}
            >
              LOCATIONS
            </Typography>
            <Stack spacing={1.2}>
              {[
                'Karad (Highway AC Flagship)',
                'Pune (Hinjawadi, Ravet, Sasvad)',
                'Mumbai (Kamothe, Prabhadevi, Thane)',
                'Sangli (City, Miraj, Vita)',
                'Satara (Highway, Umbraj, Koregaon)',
                'Konkan (Chiplun Gateway)',
              ].map((loc) => (
                <Typography
                  key={loc}
                  variant="body2"
                  sx={{
                    color: heritageColors.text.mutedLight,
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
                      backgroundColor: heritageColors.gold.main,
                      transform: 'rotate(45deg)',
                      display: 'inline-block',
                    }}
                  />
                  {loc}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact & Social Impact */}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Cinzel", Georgia, serif',
                color: heritageColors.gold.highlight,
                fontSize: '0.95rem',
                letterSpacing: '0.12em',
                mb: 2.5,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  width: 28,
                  height: '1px',
                  backgroundColor: heritageColors.gold.main,
                },
              }}
            >
              CONTACT &amp; CARE
            </Typography>

            <Stack spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <PhoneIcon sx={{ fontSize: 18, color: heritageColors.gold.main, mt: 0.2 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: heritageColors.parchment.pure, fontWeight: 600 }}>
                    {contactInfo.primaryPhone}
                  </Typography>
                  <Typography variant="caption" sx={{ color: heritageColors.text.mutedLight }}>
                    Alt: {contactInfo.secondaryPhone}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <EmailIcon sx={{ fontSize: 18, color: heritageColors.gold.main, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: heritageColors.text.secondaryLight }}>
                  {contactInfo.email}
                </Typography>
              </Box>

              {/* Free Ambulance Helpline Card */}
              <Box
                sx={{
                  p: 1.8,
                  backgroundColor: 'rgba(74, 23, 24, 0.45)',
                  border: `1px solid rgba(176, 138, 69, 0.35)`,
                  borderRadius: 0,
                }}
              >
                <Stack direction="row" spacing={1.2} sx={{ mb: 0.5, alignItems: 'center' }}>
                  <MedicalServicesIcon sx={{ color: heritageColors.gold.highlight, fontSize: 20 }} />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: heritageColors.gold.pale, fontSize: '0.8rem', fontWeight: 700 }}
                  >
                    24x7 FREE AMBULANCE SERVICE
                  </Typography>
                </Stack>
                <Typography variant="caption" sx={{ color: heritageColors.text.mutedLight, display: 'block', mb: 0.8 }}>
                  A public welfare initiative by Hotel Shivraj Dhaba:
                </Typography>
                <Typography
                  component="a"
                  href={`tel:${contactInfo.ambulancePhone}`}
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    letterSpacing: '0.05em',
                    '&:hover': { color: heritageColors.gold.highlight },
                  }}
                >
                  Call: {contactInfo.ambulancePhone}
                </Typography>
              </Box>
            </Stack>

            {/* Social Icons */}
            <Stack direction="row" spacing={1.5}>
              <IconButton
                component="a"
                href={contactInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: heritageColors.gold.pale,
                  border: `1px solid ${heritageColors.gold.border}`,
                  '&:hover': {
                    color: '#FFFFFF',
                    backgroundColor: heritageColors.maroon.main,
                    borderColor: heritageColors.gold.light,
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>

              <IconButton
                component="a"
                href={contactInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: heritageColors.gold.pale,
                  border: `1px solid ${heritageColors.gold.border}`,
                  '&:hover': {
                    color: '#FFFFFF',
                    backgroundColor: heritageColors.maroon.main,
                    borderColor: heritageColors.gold.light,
                  },
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <HeritageDivider mode="dark" maxWidth={240} spacing={3} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            pt: 2,
            fontSize: '0.8rem',
            color: heritageColors.text.mutedLight,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="caption" sx={{ color: heritageColors.text.mutedLight }}>
            © {CURRENT_YEAR} Hotel Shivraj Dhaba. All Rights Reserved. • ISO Certified.
          </Typography>
          <Typography variant="caption" sx={{ color: heritageColors.gold.dark, letterSpacing: '0.08em' }}>
            अस्सल मराठमोळी चव • राजेशाही आदरातिथ्य • कराड
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
