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
import { luxuryEase } from '../../theme/motion';

export const FinalCTA: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: '#0A0807',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        borderTop: `1px solid ${heritageColors.gold.border}`,
      }}
    >
      {/* 1. Cinematic Background with Entrance Scale 1.05 -> 1 & Subtle Continuous Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: luxuryEase }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at center, rgba(74, 23, 24, 0.65) 0%, rgba(23, 18, 14, 0.95) 70%, #0E0B09 100%)
          `,
          zIndex: 0,
        }}
      />

      {/* 2. Gold Architectural Palace Frame with Stroke Draw Effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: '1px solid rgba(176, 138, 69, 0.2)',
          margin: { xs: 2, sm: 3, md: 5 },
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <svg
          style={{
            position: 'absolute',
            top: -2,
            left: -2,
            width: 32,
            height: 32,
            fill: 'none',
          }}
          viewBox="0 0 32 32"
        >
          <motion.path
            d="M0 32 V 0 H 32"
            stroke={heritageColors.gold.highlight}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: luxuryEase }}
          />
        </svg>

        <svg
          style={{
            position: 'absolute',
            top: -2,
            right: -2,
            width: 32,
            height: 32,
            fill: 'none',
            transform: 'scaleX(-1)',
          }}
          viewBox="0 0 32 32"
        >
          <motion.path
            d="M0 32 V 0 H 32"
            stroke={heritageColors.gold.highlight}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: luxuryEase }}
          />
        </svg>

        <svg
          style={{
            position: 'absolute',
            bottom: -2,
            left: -2,
            width: 32,
            height: 32,
            fill: 'none',
            transform: 'scaleY(-1)',
          }}
          viewBox="0 0 32 32"
        >
          <motion.path
            d="M0 32 V 0 H 32"
            stroke={heritageColors.gold.highlight}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: luxuryEase }}
          />
        </svg>

        <svg
          style={{
            position: 'absolute',
            bottom: -2,
            right: -2,
            width: 32,
            height: 32,
            fill: 'none',
            transform: 'scale(-1, -1)',
          }}
          viewBox="0 0 32 32"
        >
          <motion.path
            d="M0 32 V 0 H 32"
            stroke={heritageColors.gold.highlight}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: luxuryEase }}
          />
        </svg>
      </Box>

      {/* 3. Foreground Sequential Content */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
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
          </motion.div>

          {/* Heading Line-by-Line Reveal with Blur Dissolve */}
          <Box sx={{ mb: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: 0.35, ease: luxuryEase }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: heritageColors.parchment.pure,
                  fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4.2rem' },
                  fontWeight: 800,
                  fontFamily: '"Cinzel", Georgia, serif',
                  letterSpacing: '0.03em',
                  lineHeight: 1.15,
                  textShadow: '0 4px 24px rgba(0,0,0,0.8)',
                }}
              >
                Come. Taste. Experience Maharashtra.
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.5, ease: luxuryEase }}
          >
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
          </motion.div>

          {/* CTA Buttons: Fade + Upward Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.65, ease: luxuryEase }}
          >
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
          </motion.div>

          {/* Phone / Contact Information Badge: Appears Last */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.8, ease: luxuryEase }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                px: 3,
                py: 1.2,
                border: '1px solid rgba(176, 138, 69, 0.35)',
                backgroundColor: 'rgba(23, 18, 14, 0.75)',
                backdropFilter: 'blur(8px)',
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
        </Box>
      </Container>
    </Box>
  );
};
