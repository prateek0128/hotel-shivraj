import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { v3Colors } from '../../../theme/v3/colors';
import { v3Ease, v3Viewport } from '../../../theme/v3/motion';
import { contactInfo } from '../../../data/navigation';

export const RoyalInvitationV3: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 14, md: 20 },
        backgroundColor: v3Colors.obsidian.pure,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        borderTop: `1px solid ${v3Colors.gold.hairline}`,
      }}
    >
      {/* Background with Slow Breathing Scale */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        animate={{ scale: [1, 1.025, 1] }}
        transition={{
          scale: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1.2 },
        }}
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at center, rgba(66, 18, 23, 0.75) 0%, rgba(11, 10, 9, 0.98) 75%),
            linear-gradient(180deg, #0B0A09 0%, #20090D 50%, #0B0A09 100%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Architectural Line-Draw Frame */}
      <Box
        sx={{
          position: 'absolute',
          inset: { xs: 16, sm: 28, md: 48 },
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke={v3Colors.gold.antique}
            strokeWidth="1"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={v3Viewport}
            transition={{ duration: 1.8, ease: v3Ease }}
          />
        </svg>

        {/* Four Corner Brackets */}
        <Box sx={{ position: 'absolute', top: -3, left: -3, width: 26, height: 26, borderTop: `2px solid ${v3Colors.gold.champagne}`, borderLeft: `2px solid ${v3Colors.gold.champagne}` }} />
        <Box sx={{ position: 'absolute', top: -3, right: -3, width: 26, height: 26, borderTop: `2px solid ${v3Colors.gold.champagne}`, borderRight: `2px solid ${v3Colors.gold.champagne}` }} />
        <Box sx={{ position: 'absolute', bottom: -3, left: -3, width: 26, height: 26, borderBottom: `2px solid ${v3Colors.gold.champagne}`, borderLeft: `2px solid ${v3Colors.gold.champagne}` }} />
        <Box sx={{ position: 'absolute', bottom: -3, right: -3, width: 26, height: 26, borderBottom: `2px solid ${v3Colors.gold.champagne}`, borderRight: `2px solid ${v3Colors.gold.champagne}` }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={v3Viewport}
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={v3Viewport}
            transition={{ duration: 0.7, ease: v3Ease }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: v3Colors.gold.champagne,
                letterSpacing: '0.28em',
                fontWeight: 800,
                fontSize: '0.82rem',
                mb: 2,
              }}
            >
              ROYAL INVITATION • राजेशाही आमंत्रण
            </Typography>
          </motion.div>

          {/* Heading Line-by-Line Reveal with Blur Dissolve */}
          <Box sx={{ mb: 2.5 }}>
            <motion.div
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={v3Viewport}
              transition={{ duration: 0.85, ease: v3Ease }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.5rem', sm: '4rem', md: '5.2rem', xl: '6.2rem' },
                  letterSpacing: '0.03em',
                  lineHeight: 1.05,
                  color: v3Colors.neutral.ivory,
                  textTransform: 'uppercase',
                }}
              >
                Come. Taste.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={v3Viewport}
              transition={{ duration: 0.85, delay: 0.15, ease: v3Ease }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.5rem', sm: '4rem', md: '5.2rem', xl: '6.2rem' },
                  letterSpacing: '0.03em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background: v3Colors.gradients.goldText,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Experience Maharashtra.
                </Box>
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={v3Viewport}
            transition={{ duration: 0.8, delay: 0.3, ease: v3Ease }}
          >
            <Typography
              component="p"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: { xs: '1.35rem', sm: '1.75rem' },
                color: v3Colors.gold.champagne,
                fontWeight: 600,
                mb: 3,
              }}
            >
              “अस्सल चव, राजेशाही आदरातिथ्य आणि मराठमोळा स्वाभिमान”
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: v3Colors.neutral.stone,
                maxWidth: 680,
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.12rem' },
                lineHeight: 1.85,
                mb: 5,
              }}
            >
              Whether charting your route through the Sahyadri mountains or gathering with loved ones for a celebration,
              a table steeped in royal Maratha hospitality awaits your arrival.
            </Typography>
          </motion.div>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={v3Viewport}
            transition={{ duration: 0.8, delay: 0.45, ease: v3Ease }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2.5}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                mb: 5,
              }}
            >
              <Button
                component="a"
                href="#v3-menu"
                startIcon={<RestaurantMenuIcon />}
                sx={{
                  height: 54,
                  px: 4.2,
                  backgroundColor: v3Colors.gold.antique,
                  color: v3Colors.obsidian.pure,
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  boxShadow: '0 8px 24px rgba(185, 147, 79, 0.4)',
                  transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                  '&:hover': {
                    backgroundColor: v3Colors.gold.champagne,
                    transform: 'scale(1.02)',
                    boxShadow: '0 12px 32px rgba(185, 147, 79, 0.6)',
                  },
                }}
              >
                Explore Menu
              </Button>

              <Button
                component="a"
                href="#v3-branches"
                startIcon={<LocationOnOutlinedIcon />}
                sx={{
                  height: 54,
                  px: 4.2,
                  backgroundColor: 'rgba(66, 18, 23, 0.55)',
                  color: v3Colors.neutral.ivory,
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  border: `1px solid ${v3Colors.gold.hairline}`,
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                  '&:hover': {
                    backgroundColor: v3Colors.burgundy.royal,
                    transform: 'scale(1.02)',
                    borderColor: v3Colors.gold.champagne,
                  },
                }}
              >
                Locate Outlets
              </Button>
            </Stack>
          </motion.div>

          {/* Table Inquiry Hotline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={v3Viewport}
            transition={{ duration: 0.6, delay: 0.6, ease: v3Ease }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                px: 3,
                py: 1.4,
                border: `1px solid ${v3Colors.gold.hairline}`,
                backgroundColor: 'rgba(11, 10, 9, 0.85)',
              }}
            >
              <PhoneInTalkIcon sx={{ color: v3Colors.gold.champagne, fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: v3Colors.neutral.ivory, fontSize: '0.88rem' }}>
                Table &amp; Large Party Bookings:{' '}
                <Box
                  component="a"
                  href={`tel:${contactInfo.primaryPhone}`}
                  sx={{
                    color: v3Colors.gold.champagne,
                    textDecoration: 'none',
                    fontWeight: 800,
                    '&:hover': { color: v3Colors.gold.pale },
                  }}
                >
                  {contactInfo.primaryPhone}
                </Box>
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};
