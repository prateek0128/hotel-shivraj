import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import { heritageColors } from '../../theme/colors';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageFrame } from '../common/HeritageFrame';
import { CTAButton } from '../common/CTAButton';
import { imageClipRevealVariants } from '../../theme/motion';

const featureCards = [
  {
    icon: <AutoStoriesOutlinedIcon sx={{ color: heritageColors.maroon.main, fontSize: 24 }} />,
    title: 'अस्सल चव • Authenticity',
    desc: 'Traditional recipes crafted with stone-ground spices and heritage slow-cooking.',
    borderAccent: heritageColors.maroon.main,
  },
  {
    icon: <VerifiedOutlinedIcon sx={{ color: heritageColors.gold.dark, fontSize: 24 }} />,
    title: 'ISO दर्जा • Quality',
    desc: 'ISO certified food safety, cleanliness, and pure vegetarian hygiene standards.',
    borderAccent: heritageColors.gold.main,
  },
  {
    icon: <FavoriteBorderIcon sx={{ color: heritageColors.gold.dark, fontSize: 24 }} />,
    title: 'विनम्र सेवा • Royal Care',
    desc: 'Warm, family-friendly hospitality that makes every guest feel like royalty.',
    borderAccent: heritageColors.gold.main,
  },
  {
    icon: <MedicalServicesOutlinedIcon sx={{ color: heritageColors.maroon.main, fontSize: 24 }} />,
    title: 'समाजकार्य • Social Duty',
    desc: 'Free 24x7 ambulance helpline serving highway accident victims & locals.',
    borderAccent: heritageColors.maroon.main,
  },
];

export const HeritageIntro: React.FC = () => {
  return (
    <Box
      id="heritage-intro"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: heritageColors.parchment.main,
        backgroundImage: `
          radial-gradient(circle at top right, rgba(176, 138, 69, 0.08), transparent 60%),
          radial-gradient(circle at bottom left, rgba(74, 23, 24, 0.06), transparent 60%)
        `,
        position: 'relative',
        borderBottom: `1px solid ${heritageColors.gold.border}`,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="THE SHIVRAJ LEGACY"
          marathiEyebrow="शिवराज परंपरा"
          title="Where Maharashtra's Heritage Meets the Table"
          marathiTitle="“ढाबा या संकल्पनेला मराठमोळं रूप देऊन एका वेगळ्याच उंचीवर नेऊन ठेवलंय”"
          subtitle="Born out of the passionate vision of three friends in Karad, Hotel Shivraj Dhaba has evolved from a humble highway retreat into an icon of authentic Maharashtrian royal hospitality."
          mode="light"
        />

        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ mt: 1, alignItems: 'center' }}>
          {/* Left Column: Masked Clip-Path Image Reveal with Ambient Glow */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <motion.div
              variants={imageClipRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <HeritageFrame
                mode="light"
                padding={{ xs: 2, sm: 2.5 }}
                sx={{
                  backgroundColor: heritageColors.charcoal.main,
                  boxShadow: '0 24px 48px rgba(23, 18, 14, 0.22)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    right: -10,
                    bottom: -10,
                    background: 'radial-gradient(circle at center, rgba(176, 138, 69, 0.15), transparent 70%)',
                    zIndex: -1,
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 0,
                    backgroundColor: heritageColors.charcoal.surface,
                    border: `1px solid ${heritageColors.gold.border}`,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/maharaj_statue.png"
                    alt="Chhatrapati Shivaji Maharaj Monument at Hotel Shivraj"
                    sx={{
                      width: '100%',
                      height: { xs: 360, sm: 460, md: 520 },
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      filter: 'contrast(1.05) saturate(1.05)',
                      transition: 'transform 0.6s cubic-bezier(0.2, 0, 0, 1)',
                      '&:hover': {
                        transform: 'scale(1.03)',
                      },
                    }}
                  />

                  {/* Bottom Royal Caption Card */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: { xs: 2, sm: 2.5 },
                      background: 'linear-gradient(180deg, transparent 0%, rgba(14, 11, 9, 0.95) 45%)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: heritageColors.gold.highlight,
                        fontSize: '0.75rem',
                        letterSpacing: '0.18em',
                        mb: 0.5,
                      }}
                    >
                      प्रेरणास्थान • OUR GUIDING LIGHT
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: heritageColors.parchment.pure,
                        fontSize: { xs: '1.1rem', sm: '1.25rem' },
                        fontWeight: 700,
                        fontFamily: '"Cinzel", Georgia, serif',
                      }}
                    >
                      छत्रपती शिवाजी महाराज
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: heritageColors.parchment.stone,
                        display: 'block',
                        fontSize: '0.78rem',
                        mt: 0.5,
                        fontStyle: 'italic',
                      }}
                    >
                      "अद्भुत शिल्प — आदरातिथ्य, स्वाभिमान व लोककल्याणाची प्रेरणा"
                    </Typography>
                  </Box>
                </Box>
              </HeritageFrame>
            </motion.div>
          </Grid>

          {/* Right Column: Staggered Story & Elevated Feature Cards */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: heritageColors.maroon.main,
                  letterSpacing: '0.15em',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  mb: 1.5,
                }}
              >
                THE STORY OF THREE VISIONARIES
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  color: heritageColors.charcoal.main,
                  fontSize: { xs: '1.65rem', sm: '2.1rem', md: '2.35rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  mb: 2.5,
                }}
              >
                कारण हा फक्त ढाबा नाही, ओळख आहे कराडची!
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: heritageColors.text.primaryDark,
                  fontSize: { xs: '0.98rem', sm: '1.05rem' },
                  lineHeight: 1.8,
                  mb: 2.5,
                }}
              >
                अनेक क्षेत्रात स्वतंत्र ओळख तयार करणाऱ्या कराड ची आणखीन एक रुचकर ओळख म्हणजे <strong>शिवराज ढाबा</strong>.
                कराड चिपळूण हायवेलगत उजव्या हाताला असलेलं हे ठिकाण ढाबा या संकल्पनेला अस्सल मराठमोळं रूप देऊन
                एका वेगळ्याच उंचीवर घेऊन गेले. तीन मित्रांच्या ध्येयवेड्या विचारातून शिवराज ची मुहूर्तमेढ झाली.
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: heritageColors.text.secondaryDark,
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  mb: 4,
                }}
              >
                नादखुळा अख्खा मसूर, कृष्णाकाठच्या वांग्याचा रसरशीत बैंगन मसाला, काटाकिर्र काजूकरी,
                आणि मटक्यातलं पांढराशुभ्र गार दही — एकापेक्षा एक सरस पदार्थांनी लाखो खवय्यांच्या मनात हक्काचे स्थान निर्माण केले.
                जसा व्यवसाय वाढत गेला, तसेच समाजकार्याची बांधीलकी जपत २४ तास मोफत रुग्णवाहिका सेवेसारखे सामाजिक व्रतही अंगीकारले.
              </Typography>

              {/* Elevated 4 Pillars Cards with Architectural Framing & Micro-Interactions */}
              <Grid container spacing={2.5} sx={{ mb: 4.5 }}>
                {featureCards.map((card) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={card.title}>
                    <Box
                      sx={{
                        p: 2.2,
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        border: '1px solid rgba(176, 138, 69, 0.22)',
                        borderLeft: `3px solid ${card.borderAccent}`,
                        position: 'relative',
                        transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          borderColor: heritageColors.gold.main,
                          backgroundColor: '#FFFFFF',
                          boxShadow: '0 12px 28px rgba(23, 18, 14, 0.08)',
                          '& .card-icon-frame': {
                            backgroundColor: heritageColors.gold.pale,
                          },
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.5} sx={{ mb: 1, alignItems: 'center' }}>
                        <Box
                          className="card-icon-frame"
                          sx={{
                            width: 36,
                            height: 36,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(244, 235, 221, 0.6)',
                            border: `1px solid ${heritageColors.gold.border}`,
                            transition: 'all 0.25s ease',
                          }}
                        >
                          {card.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: '0.88rem',
                            fontWeight: 700,
                            color: heritageColors.charcoal.main,
                          }}
                        >
                          {card.title}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="caption"
                        sx={{
                          color: heritageColors.text.mutedDark,
                          lineHeight: 1.6,
                          display: 'block',
                        }}
                      >
                        {card.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <CTAButton variantType="maroon-filled" href="#signature-food">
                Discover Our Flavors
              </CTAButton>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
