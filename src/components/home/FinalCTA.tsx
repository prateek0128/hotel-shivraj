import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { heritageColors } from '../../theme/colors';
import { contactInfo } from '../../data/navigation';
import { CTAButton } from '../common/CTAButton';
import { HeritageDivider } from '../common/HeritageDivider';

export const FinalCTA: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: heritageColors.charcoal.darkest,
        backgroundImage: `
          radial-gradient(circle at center, rgba(74, 23, 24, 0.6) 0%, rgba(23, 18, 14, 0.95) 75%, #0E0B09 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        borderTop: `1px solid ${heritageColors.gold.border}`,
      }}
    >
      {/* Decorative Palace Framing */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: '1px solid rgba(176, 138, 69, 0.15)',
          margin: { xs: 2, sm: 3, md: 5 },
          pointerEvents: 'none',
        }}
      >
        <Box sx={{ position: 'absolute', top: -1, left: -1, width: 24, height: 24, borderTop: `2px solid ${heritageColors.gold.highlight}`, borderLeft: `2px solid ${heritageColors.gold.highlight}` }} />
        <Box sx={{ position: 'absolute', top: -1, right: -1, width: 24, height: 24, borderTop: `2px solid ${heritageColors.gold.highlight}`, borderRight: `2px solid ${heritageColors.gold.highlight}` }} />
        <Box sx={{ position: 'absolute', bottom: -1, left: -1, width: 24, height: 24, borderBottom: `2px solid ${heritageColors.gold.highlight}`, borderLeft: `2px solid ${heritageColors.gold.highlight}` }} />
        <Box sx={{ position: 'absolute', bottom: -1, right: -1, width: 24, height: 24, borderBottom: `2px solid ${heritageColors.gold.highlight}`, borderRight: `2px solid ${heritageColors.gold.highlight}` }} />
      </Box>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: heritageColors.gold.highlight,
              letterSpacing: '0.22em',
              fontWeight: 700,
              fontSize: { xs: '0.75rem', sm: '0.85rem' },
              mb: 2,
            }}
          >
            आदरातिथ्य • ROYAL INVITATION
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: heritageColors.parchment.pure,
              fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4.2rem' },
              fontWeight: 800,
              fontFamily: '"Cinzel", Georgia, serif',
              letterSpacing: '0.03em',
              lineHeight: 1.15,
              mb: 1.5,
              textShadow: '0 4px 24px rgba(0,0,0,0.8)',
            }}
          >
            Come. Taste. Experience Maharashtra.
          </Typography>

          <Typography
            component="p"
            sx={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontStyle: 'italic',
              fontSize: { xs: '1.3rem', sm: '1.65rem' },
              color: heritageColors.gold.pale,
              fontWeight: 600,
              mb: 2,
            }}
          >
            “अस्सल चव, राजेशाही आदरातिथ्य आणि मराठमोळा स्वाभिमान”
          </Typography>

          <HeritageDivider mode="dark" maxWidth={200} spacing={2.5} />

          <Typography
            variant="body1"
            sx={{
              color: heritageColors.parchment.stone,
              fontSize: { xs: '0.98rem', sm: '1.1rem' },
              lineHeight: 1.75,
              maxWidth: 640,
              mx: 'auto',
              mb: { xs: 4, md: 5 },
            }}
          >
            Whether embarking on a scenic journey through the Sahyadris or craving comforting,
            slow-simmered dishes with family, your royal seat awaits at Hotel Shivraj Dhaba.
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 2.5 }}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              mb: 5,
            }}
          >
            <CTAButton
              variantType="gold-filled"
              href="#signature-food"
              icon={<RestaurantMenuIcon />}
              sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: 210 }}
            >
              Explore Our Menu
            </CTAButton>

            <CTAButton
              variantType="gold-outlined"
              href="#branches"
              icon={<LocationOnOutlinedIcon />}
              sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: 210 }}
            >
              Find a Branch
            </CTAButton>
          </Stack>

          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.2,
              px: 3,
              py: 1.2,
              border: '1px solid rgba(176, 138, 69, 0.35)',
              backgroundColor: 'rgba(23, 18, 14, 0.75)',
            }}
          >
            <PhoneInTalkIcon sx={{ color: heritageColors.gold.highlight, fontSize: 18 }} />
            <Typography variant="body2" sx={{ color: heritageColors.parchment.light, fontSize: '0.85rem' }}>
              Table &amp; Large Party Inquiries:{' '}
              <Box
                component="a"
                href={`tel:${contactInfo.primaryPhone}`}
                sx={{
                  color: heritageColors.gold.pale,
                  textDecoration: 'none',
                  fontWeight: 700,
                  '&:hover': { color: heritageColors.gold.highlight },
                }}
              >
                {contactInfo.primaryPhone}
              </Box>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};
