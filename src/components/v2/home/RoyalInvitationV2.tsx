import React from 'react';
import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { v2Colors } from '../../../theme/v2/colors';
import { contactInfo } from '../../../data/navigation';

export const RoyalInvitationV2: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: v2Colors.obsidian.black,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        borderTop: `1px solid ${v2Colors.gold.hairline}`,
      }}
    >
      {/* Background scale 1.05 -> 1 with continuous subtle breathing */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 1.0 },
          default: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
        }}
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at center, rgba(82, 22, 28, 0.75) 0%, rgba(12, 10, 9, 0.98) 75%),
            linear-gradient(180deg, #0C0A09 0%, #1A0B0E 50%, #0C0A09 100%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Decorative SVG Architectural Gold Frame with Draw Animation */}
      <Box
        sx={{
          position: 'absolute',
          inset: { xs: 16, sm: 24, md: 40 },
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <svg
          width="100%"
          height="100%"
          style={{ position: 'absolute', inset: 0, overflow: 'visible' }}
        >
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke={v2Colors.gold.antique}
            strokeWidth="1"
            strokeDasharray="6 6"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        {/* Animated Corner Brackets */}
        <Box sx={{ position: 'absolute', top: -3, left: -3, width: 28, height: 28, borderTop: `2px solid ${v2Colors.gold.champagne}`, borderLeft: `2px solid ${v2Colors.gold.champagne}` }} />
        <Box sx={{ position: 'absolute', top: -3, right: -3, width: 28, height: 28, borderTop: `2px solid ${v2Colors.gold.champagne}`, borderRight: `2px solid ${v2Colors.gold.champagne}` }} />
        <Box sx={{ position: 'absolute', bottom: -3, left: -3, width: 28, height: 28, borderBottom: `2px solid ${v2Colors.gold.champagne}`, borderLeft: `2px solid ${v2Colors.gold.champagne}` }} />
        <Box sx={{ position: 'absolute', bottom: -3, right: -3, width: 28, height: 28, borderBottom: `2px solid ${v2Colors.gold.champagne}`, borderRight: `2px solid ${v2Colors.gold.champagne}` }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: v2Colors.gold.champagne,
                letterSpacing: '0.26em',
                fontWeight: 700,
                fontSize: '0.82rem',
                mb: 2,
              }}
            >
              ROYAL INVITATION • राजेशाही आमंत्रण
            </Typography>
          </motion.div>

          {/* Enormous Serif Typography: COME. TASTE. EXPERIENCE MAHARASHTRA. with line-by-line blur reveal */}
          <Box sx={{ mb: 2.5 }}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.5rem', sm: '4rem', md: '5.2rem', xl: '6.2rem' },
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                  color: v2Colors.ivory.warm,
                  textTransform: 'uppercase',
                }}
              >
                Come. Taste.
              </Typography>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
                },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.5rem', sm: '4rem', md: '5.2rem', xl: '6.2rem' },
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background: v2Colors.gradients.goldText,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Experience Maharashtra.
                </Box>
              </Typography>
            </motion.div>
          </Box>

          <motion.div variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              component="p"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: { xs: '1.35rem', sm: '1.75rem' },
                color: v2Colors.gold.champagne,
                fontWeight: 600,
                mb: 3,
              }}
            >
              “अस्सल चव, राजेशाही आदरातिथ्य आणि मराठमोळा स्वाभिमान”
            </Typography>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}>
            <Typography
              variant="body1"
              sx={{
                color: v2Colors.text.secondaryLight,
                maxWidth: 680,
                mx: 'auto',
                fontSize: { xs: '0.98rem', sm: '1.12rem' },
                lineHeight: 1.85,
                mb: 5,
              }}
            >
              Whether charting your route through the Sahyadris or celebrating a landmark occasion with family,
              a table steeped in royal Maratha hospitality awaits your presence.
            </Typography>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
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
                href="#v2-kitchen"
                endIcon={<RestaurantMenuIcon className="invitation-icon" />}
                sx={{
                  height: 54,
                  px: 4.2,
                  backgroundColor: v2Colors.gold.antique,
                  color: v2Colors.obsidian.black,
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  border: `1px solid ${v2Colors.gold.champagne}`,
                  boxShadow: '0 8px 24px rgba(195, 154, 82, 0.4)',
                  transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                  '&:hover': {
                    backgroundColor: v2Colors.gold.champagne,
                    transform: 'scale(1.02)',
                    boxShadow: '0 12px 32px rgba(195, 154, 82, 0.6)',
                    '& .invitation-icon': { transform: 'translateX(4px)' },
                  },
                  '& .invitation-icon': { transition: 'transform 0.25s ease' },
                }}
              >
                Explore Menu
              </Button>

              <Button
                component="a"
                href="#v2-branches"
                endIcon={<LocationOnOutlinedIcon className="invitation-icon" />}
                sx={{
                  height: 54,
                  px: 4.2,
                  backgroundColor: 'rgba(82, 22, 28, 0.55)',
                  color: v2Colors.ivory.warm,
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  border: `1px solid ${v2Colors.gold.antique}`,
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                  '&:hover': {
                    backgroundColor: v2Colors.maroon.burgundy,
                    transform: 'scale(1.02)',
                    boxShadow: '0 8px 24px rgba(82, 22, 28, 0.5)',
                    '& .invitation-icon': { transform: 'translateX(4px)' },
                  },
                  '& .invitation-icon': { transition: 'transform 0.25s ease' },
                }}
              >
                Locate Outlets
              </Button>
            </Stack>
          </motion.div>

          {/* Table Inquiry Hotline with Delayed Entrance */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
              },
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                px: 3,
                py: 1.4,
                border: `1px solid ${v2Colors.gold.hairline}`,
                backgroundColor: 'rgba(12, 10, 9, 0.8)',
              }}
            >
              <PhoneInTalkIcon sx={{ color: v2Colors.gold.champagne, fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: v2Colors.ivory.warm, fontSize: '0.88rem' }}>
                Table &amp; Large Party Bookings:{' '}
                <Box
                  component="a"
                  href={`tel:${contactInfo.primaryPhone}`}
                  sx={{
                    color: v2Colors.gold.champagne,
                    textDecoration: 'none',
                    fontWeight: 800,
                    '&:hover': { color: v2Colors.gold.pale },
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
