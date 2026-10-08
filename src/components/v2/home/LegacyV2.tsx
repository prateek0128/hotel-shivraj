import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { v2Colors } from '../../../theme/v2/colors';
import { v2SectionReveal } from '../../../theme/v2/motion';

const legacyPillars = [
  {
    num: '01',
    title: 'THE KARAD GENESIS (1998)',
    marathi: 'कराडची ऐतिहासिक सुरुवात',
    desc: 'Founded by three visionary friends along the Karad-Chiplun highway with a steadfast dream to honor genuine Maharashtrian flavors.',
  },
  {
    num: '02',
    title: 'CHHATRAPATI AS INSPIRATION',
    marathi: 'शिवरायांचे विचार व प्रेरणा',
    desc: 'Guided by the principles of Chhatrapati Shivaji Maharaj — hospitality rooted in self-respect, cultural pride, and universal welfare.',
  },
  {
    num: '03',
    title: 'SLOW HEIRLOOM COOKING',
    marathi: 'अस्सल लाकडी चुलीची चव',
    desc: 'Slow-simmered whole brown lentils, fresh stone-ground spices, and pure unadulterated Maharashtrian recipes passed down generations.',
  },
  {
    num: '04',
    title: 'SEVABHAV & WELFARE',
    marathi: '२४ तास मोफत रुग्णवाहिका',
    desc: 'Deeply committed to public good with 24x7 complimentary highway emergency ambulances saving lives along Maharashtra’s prime roads.',
  },
];

export const LegacyV2: React.FC = () => {
  return (
    <Box
      id="v2-legacy"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: v2Colors.obsidian.surface,
        position: 'relative',
        borderTop: `1px solid ${v2Colors.gold.hairline}`,
        borderBottom: `1px solid ${v2Colors.gold.hairline}`,
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(82, 22, 28, 0.35) 0%, transparent 60%),
          radial-gradient(circle at 90% 80%, rgba(195, 154, 82, 0.08) 0%, transparent 50%)
        `,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, lg: 10 }} sx={{ alignItems: 'center' }}>
          {/* Left Column: Overlapping Editorial Imagery with Clip Reveal & Floating */}
          <Grid size={{ xs: 12, lg: 5.5 }}>
            <motion.div
              variants={v2SectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <Box sx={{ position: 'relative' }}>
                {/* Main Statue Image Frame with Clip-Path Reveal */}
                <motion.div
                  initial={{ clipPath: 'inset(0% 100% 0% 0%)', opacity: 0, scale: 1.08 }}
                  whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                  >
                    <Box
                      sx={{
                        p: { xs: 1.5, sm: 2 },
                        border: `1px solid ${v2Colors.gold.antique}`,
                        backgroundColor: v2Colors.obsidian.black,
                        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.75)',
                        position: 'relative',
                      }}
                    >
                      <Box
                        component="img"
                        src="/images/maharaj_statue.png"
                    alt="Chhatrapati Shivaji Maharaj Monument at Karad"
                    sx={{
                      width: '100%',
                      height: { xs: 380, sm: 480, md: 540 },
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      filter: 'contrast(1.08) saturate(1.05)',
                      display: 'block',
                    }}
                  />

                  {/* Corner Gold Highlights */}
                  <Box sx={{ position: 'absolute', top: -3, left: -3, width: 20, height: 20, borderTop: `2px solid ${v2Colors.gold.champagne}`, borderLeft: `2px solid ${v2Colors.gold.champagne}` }} />
                  <Box sx={{ position: 'absolute', top: -3, right: -3, width: 20, height: 20, borderTop: `2px solid ${v2Colors.gold.champagne}`, borderRight: `2px solid ${v2Colors.gold.champagne}` }} />
                  <Box sx={{ position: 'absolute', bottom: -3, left: -3, width: 20, height: 20, borderBottom: `2px solid ${v2Colors.gold.champagne}`, borderLeft: `2px solid ${v2Colors.gold.champagne}` }} />
                </Box>
                  </motion.div>
                </motion.div>

                {/* Floating Gold Card */}
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    position: 'absolute',
                    bottom: -28,
                    right: -24,
                    p: 2.8,
                    maxWidth: 280,
                    backgroundColor: v2Colors.obsidian.black,
                    border: `1px solid ${v2Colors.gold.antique}`,
                    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.85)',
                    backgroundImage: 'radial-gradient(circle at top left, rgba(82,22,28,0.7), transparent 80%)',
                    zIndex: 2,
                  }}
                >
                  <Typography variant="overline" sx={{ color: v2Colors.gold.champagne, letterSpacing: '0.18em', fontWeight: 700, display: 'block', fontSize: '0.7rem' }}>
                    THE SACRED MONUMENT
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: '"Cinzel", Georgia, serif', color: v2Colors.ivory.warm, fontSize: '1rem', fontWeight: 800, mt: 0.5 }}>
                    छत्रपती शिवाजी महाराज
                  </Typography>
                  <Typography variant="caption" sx={{ color: v2Colors.ivory.muted, display: 'block', mt: 0.8, fontStyle: 'italic', lineHeight: 1.5 }}>
                    "आदरातिथ्य, स्वाभिमान व लोककल्याण हीच आमची खरी प्रेरणा"
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Column: Editorial Narrative & 4 Numbered Pillars */}
          <Grid size={{ xs: 12, lg: 6.5 }}>
            <motion.div
              variants={v2SectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: v2Colors.gold.antique,
                  letterSpacing: '0.24em',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  mb: 1.5,
                }}
              >
                THE SHIVRAJ CHRONICLES
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  fontWeight: 900,
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
                  letterSpacing: '0.03em',
                  color: v2Colors.ivory.warm,
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                A Legacy Serving Maharashtra
              </Typography>

              <Typography
                component="p"
                sx={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: { xs: '1.25rem', sm: '1.45rem' },
                  color: v2Colors.gold.champagne,
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                “कारण हा फक्त ढाबा नाही, ओळख आहे कराडची!”
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: v2Colors.text.secondaryLight,
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  mb: 4.5,
                }}
              >
                अनेक क्षेत्रात स्वतंत्र ओळख तयार करणाऱ्या कराडची आणखीन एक रुचकर ओळख म्हणजे <strong>शिवराज ढाबा</strong>.
                कराड चिपळूण हायवेलगत उजव्या हाताला असलेलं हे ठिकाण ढाबा या संकल्पनेला अस्सल मराठमोळं रूप देऊन
                एका वेगळ्याच उंचीवर घेऊन गेले. तीन मित्रांच्या ध्येयवेड्या विचारातून शिवराज ची मुहूर्तमेढ झाली.
              </Typography>

              {/* 4 Minimalist Luxury Pillars */}
              <Grid container spacing={3} sx={{ mb: 5 }}>
                {legacyPillars.map((p) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={p.num}>
                    <Box
                      sx={{
                        p: 2.5,
                        height: '100%',
                        backgroundColor: 'rgba(12, 10, 9, 0.65)',
                        border: '1px solid rgba(195, 154, 82, 0.18)',
                        borderLeft: `2px solid ${v2Colors.gold.antique}`,
                        transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          borderColor: v2Colors.gold.champagne,
                          backgroundColor: 'rgba(26, 20, 18, 0.85)',
                        },
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: '"Cinzel", Georgia, serif',
                          color: v2Colors.gold.champagne,
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          display: 'block',
                          mb: 0.5,
                        }}
                      >
                        {p.num}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: '"Cinzel", Georgia, serif',
                          color: v2Colors.ivory.warm,
                          fontSize: '0.92rem',
                          fontWeight: 700,
                          mb: 0.3,
                        }}
                      >
                        {p.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: v2Colors.gold.pale,
                          fontStyle: 'italic',
                          display: 'block',
                          mb: 1,
                        }}
                      >
                        {p.marathi}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: v2Colors.ivory.muted,
                          fontSize: '0.82rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {p.desc}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Button
                component="a"
                href="#v2-kitchen"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: v2Colors.maroon.burgundy,
                  color: v2Colors.ivory.warm,
                  border: `1px solid ${v2Colors.gold.antique}`,
                  px: 3.5,
                  py: 1.4,
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  '&:hover': {
                    backgroundColor: v2Colors.maroon.royal,
                    borderColor: v2Colors.gold.champagne,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(82, 22, 28, 0.5)',
                  },
                }}
              >
                Discover The Royal Kitchen
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
