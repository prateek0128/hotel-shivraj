import React, { useRef } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import FortIcon from '@mui/icons-material/Fort';
import { v2Colors } from '../../../theme/v2/colors';
import { luxuryEase } from '../../../theme/motion';

export const FortHeritageV2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <Box
      ref={containerRef}
      id="v2-forts"
      sx={{
        py: { xs: 12, md: 20 },
        position: 'relative',
        backgroundColor: v2Colors.obsidian.black,
        overflow: 'hidden',
      }}
    >
      {/* Background Architectural Canvas with Parallax & Entrance Scale 1.1 -> 1 */}
      <motion.div
        style={{
          position: 'absolute',
          top: -40,
          left: 0,
          right: 0,
          bottom: -40,
          y: parallaxY,
          zIndex: 0,
        }}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.3, ease: luxuryEase }}
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: "url('/images/maratha_palace_hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'contrast(1.15) brightness(0.65)',
          }}
        />
      </motion.div>

      {/* Dark Obsidian & Royal Burgundy Atmospheric Overlays */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(180deg, #0C0A09 0%, rgba(12, 10, 9, 0.75) 40%, rgba(58, 14, 18, 0.8) 70%, #0C0A09 100%),
            radial-gradient(circle at center, transparent 30%, rgba(12, 10, 9, 0.9) 85%)
          `,
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ maxWidth: 940, mx: 'auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: luxuryEase }}
          >
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <FortIcon sx={{ color: v2Colors.gold.champagne, fontSize: 22 }} />
              <Typography
                variant="subtitle2"
                sx={{
                  color: v2Colors.gold.champagne,
                  letterSpacing: '0.26em',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                }}
              >
                SAHYADRI FORT ARCHITECTURE
              </Typography>
            </Stack>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Cinzel", Georgia, serif',
                fontWeight: 900,
                fontSize: { xs: '2.5rem', sm: '3.8rem', md: '5.2rem' },
                lineHeight: 1.05,
                letterSpacing: '0.04em',
                color: v2Colors.ivory.warm,
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Rooted in the Land of Maharashtra
            </Typography>

            {/* Expanding Gold Divider: width 0 -> 60px */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 60, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
              style={{
                height: 2,
                backgroundColor: '#D4B06A',
                margin: '0 auto 24px auto',
              }}
            />

            <Typography
              component="p"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: { xs: '1.35rem', sm: '1.75rem' },
                color: v2Colors.gold.champagne,
                fontWeight: 600,
                mb: 3.5,
              }}
            >
              “रायगड, प्रतापगड अन् पन्हाळ्याची माती — आमच्या आतिथ्याची खरी पुण्याई”
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: v2Colors.ivory.stone,
                fontSize: { xs: '1rem', sm: '1.12rem' },
                lineHeight: 1.85,
                maxWidth: 780,
                mx: 'auto',
                mb: 6,
              }}
            >
              Every stone, carved wooden post, and warm copper lamp across Hotel Shivraj pays tribute to
              the rugged majesty of Deccan forts. We honor the resilient Maratha spirit by welcoming travelers
              with wholesome feasts worthy of a royal celebration.
            </Typography>
          </motion.div>

            {/* Architectural Badges Bar */}
            <Box
              sx={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: { xs: 2, sm: 4 },
                p: { xs: 2, sm: 3 },
                border: `1px solid ${v2Colors.gold.hairline}`,
                backgroundColor: 'rgba(12, 10, 9, 0.75)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {[
                'Sahyadri Basalt Masonry',
                'Handcrafted Brass Accents',
                'Woodfire Kitchen Heart',
                'Open Courtyard Dining',
              ].map((badge) => (
                <Stack key={badge} direction="row" spacing={1.2} sx={{ alignItems: 'center' }}>
                  <Box sx={{ width: 6, height: 6, backgroundColor: v2Colors.gold.antique, transform: 'rotate(45deg)' }} />
                  <Typography variant="body2" sx={{ color: v2Colors.ivory.warm, fontWeight: 700, fontSize: '0.85rem' }}>
                    {badge}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
  );
};
