import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import CastleIcon from '@mui/icons-material/Castle';
import GroupsIcon from '@mui/icons-material/Groups';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import { heritageColors } from '../../theme/colors';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageFrame } from '../common/HeritageFrame';

const experienceCards = [
  {
    icon: <CastleIcon sx={{ fontSize: 28, color: heritageColors.gold.highlight }} />,
    title: 'Maratha Fort Ambiance',
    marathi: 'किल्ले व राजदरबाराची प्रेरणा',
    desc: 'Grand stone masonry, warm mashaals, wooden pillars, and brass accents evoking the spirit of Raigad, Panhala, and Pratapgad.',
  },
  {
    icon: <SanitizerIcon sx={{ fontSize: 28, color: heritageColors.gold.highlight }} />,
    title: 'Purity & Cleanliness',
    marathi: 'स्वच्छता आणि शुद्धता',
    desc: 'ISO-certified hygiene standards, open master kitchens, and purest vegetarian ingredients prepared fresh daily.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 28, color: heritageColors.gold.highlight }} />,
    title: 'Family-Friendly Comfort',
    marathi: 'परिवारासोबत निवांत भोजन',
    desc: 'Safe, gracious, and welcoming family seating where multiple generations gather over comforting Maharashtrian meals.',
  },
  {
    icon: <AcUnitIcon sx={{ fontSize: 28, color: heritageColors.gold.highlight }} />,
    title: 'Grand Air-Conditioned Halls',
    marathi: 'वातानुकूलित भव्य डायनिंग',
    desc: 'Beat the highway heat in climate-controlled luxury halls designed for relaxed dining and long journeys.',
  },
  {
    icon: <CelebrationIcon sx={{ fontSize: 28, color: heritageColors.gold.highlight }} />,
    title: 'Celebration & Banquet Areas',
    marathi: 'कौटुंबिक सोहळे व समारंभ',
    desc: 'Spacious banquet areas dedicated to birthdays, family reunions, corporate lunches, and milestone celebrations.',
  },
  {
    icon: <LocalParkingIcon sx={{ fontSize: 28, color: heritageColors.gold.highlight }} />,
    title: 'Extensive Parking Facilities',
    marathi: 'भव्य व सुरक्षित पार्किंग',
    desc: 'Hassle-free parking for hundreds of cars and tourist buses right along Maharashtra’s prime highway corridors.',
  },
];

export const HeritageExperience: React.FC = () => {
  return (
    <Box
      id="maratha-experience"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: heritageColors.parchment.light,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Architectural Linework & Fort Silhouette */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.04,
          pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(176, 138, 69, 0.4) 0%, transparent 70%),
            repeating-linear-gradient(45deg, ${heritageColors.gold.dark} 0, ${heritageColors.gold.dark} 1px, transparent 0, transparent 40px)
          `,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionHeading
          eyebrow="THE SHIVRAJ WAY"
          marathiEyebrow="आदरातिथ्य संस्कृती"
          title="More Than a Meal — A Royal Maratha Experience"
          marathiTitle="“कुठेच नाही शिवराज ढाब्याची सर, म्हणूनच इथे मिळतो तृप्तीचा ढेकर!”"
          subtitle="A dining haven meticulously crafted with architectural grandeur, wholesome flavors, and time-honored Maharashtrian hospitality."
          mode="light"
        />

        {/* Feature Grid with Heritage Framed Icons */}
        <Grid container spacing={{ xs: 3, md: 3.5 }} sx={{ mb: 6 }}>
          {experienceCards.map((card, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={card.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: '100%' }}
              >
                <HeritageFrame
                  mode="light"
                  padding={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(176, 138, 69, 0.22)',
                    transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      borderColor: heritageColors.gold.main,
                      boxShadow: '0 16px 36px rgba(74, 23, 24, 0.09)',
                      '& .exp-icon-box': {
                        backgroundColor: heritageColors.maroon.main,
                        borderColor: heritageColors.gold.highlight,
                      },
                    },
                  }}
                >
                  <Box>
                    {/* Custom Heritage Framed Icon with delayed scale pop */}
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Box
                        className="exp-icon-box"
                        sx={{
                          width: 52,
                          height: 52,
                          backgroundColor: heritageColors.charcoal.main,
                          border: `1px solid ${heritageColors.gold.border}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2.5,
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        }}
                      >
                        {card.icon}
                      </Box>
                    </motion.div>

                    <Typography
                      variant="h5"
                      sx={{
                        color: heritageColors.charcoal.main,
                        fontSize: '1.18rem',
                        fontWeight: 700,
                        mb: 0.5,
                        fontFamily: '"Cinzel", Georgia, serif',
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        color: heritageColors.maroon.main,
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        fontStyle: 'italic',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      {card.marathi}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: heritageColors.text.secondaryDark,
                        lineHeight: 1.7,
                        fontSize: '0.9rem',
                      }}
                    >
                      {card.desc}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      pt: 2,
                      mt: 2,
                      borderTop: '1px solid rgba(176, 138, 69, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        backgroundColor: heritageColors.gold.main,
                        transform: 'rotate(45deg)',
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: heritageColors.gold.dark,
                        letterSpacing: '0.08em',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '0.72rem',
                      }}
                    >
                      Royal Standard
                    </Typography>
                  </Box>
                </HeritageFrame>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* 24x7 Ambulance Helpline Banner */}
        <Box
          sx={{
            p: { xs: 3, md: 4 },
            backgroundColor: heritageColors.charcoal.main,
            border: `1px solid ${heritageColors.gold.main}`,
            backgroundImage: 'radial-gradient(circle at top right, rgba(74,23,24,0.6), transparent 70%)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
            boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: heritageColors.gold.highlight,
                letterSpacing: '0.15em',
                fontWeight: 700,
                fontSize: '0.78rem',
                mb: 0.5,
              }}
            >
              सेवाभाव • SOCIAL RESPONSIBILITY
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: heritageColors.parchment.pure,
                fontSize: { xs: '1.35rem', sm: '1.75rem' },
                fontWeight: 700,
                fontFamily: '"Cinzel", Georgia, serif',
                mb: 0.8,
              }}
            >
              24-Hour Free Ambulance Service for Highway Travelers
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: heritageColors.parchment.stone,
                maxWidth: 620,
                fontSize: '0.9rem',
              }}
            >
              As part of our commitment to Maharashtra, Hotel Shivraj Dhaba operates an uninterrupted,
              free emergency ambulance helpline along highway corridors.
            </Typography>
          </Box>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: { xs: '100%', md: 'auto' } }}>
            <Box
              component="a"
              href="tel:7410057007"
              sx={{
                px: 3,
                py: 1.4,
                backgroundColor: heritageColors.gold.main,
                color: heritageColors.charcoal.darkest,
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: heritageColors.gold.highlight,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Helpline: 74 1005 7007
            </Box>
            <Box
              component="a"
              href="tel:9620037007"
              sx={{
                px: 3,
                py: 1.4,
                border: `1px solid ${heritageColors.gold.main}`,
                color: heritageColors.gold.pale,
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                textAlign: 'center',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: 'rgba(176,138,69,0.15)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Helpline: 96 2003 7007
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
