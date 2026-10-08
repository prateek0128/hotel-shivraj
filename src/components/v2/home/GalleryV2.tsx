import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Dialog,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { v2Colors } from '../../../theme/v2/colors';
import { v2SectionReveal } from '../../../theme/v2/motion';
import { luxuryEase } from '../../../theme/motion';
import { galleryData } from '../../../data/gallery';

export const GalleryV2: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeLightbox = lightboxIndex !== null ? galleryData[lightboxIndex] : null;

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : galleryData.length - 1));
    }
  }, [lightboxIndex]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < galleryData.length - 1 ? prev! + 1 : 0));
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <Box
      id="v2-gallery"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: v2Colors.obsidian.black,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: { xs: 8, md: 10 } }}>
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
                fontSize: '0.8rem',
                mb: 1.5,
              }}
            >
              CHRONICLES IN FRAMES
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Cinzel", Georgia, serif',
                fontWeight: 900,
                fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4.5rem' },
                letterSpacing: '0.04em',
                color: v2Colors.ivory.warm,
                lineHeight: 1.05,
                mb: 1.5,
                textTransform: 'uppercase',
              }}
            >
              The Curated Gallery
            </Typography>

            <Typography
              component="p"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: { xs: '1.25rem', sm: '1.6rem' },
                color: v2Colors.gold.champagne,
                fontWeight: 600,
                mb: 2,
              }}
            >
              “मराठमोळी वास्तुकला, चव आणि अनमोल क्षणांची झलक”
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: v2Colors.text.secondaryLight,
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              An editorial visual journey through our fort courtyard architectures, brass handi preparations,
              and multi-generational family gatherings.
            </Typography>
          </motion.div>
        </Box>

        {/* Coordinated Editorial Collage Grid */}
        <Grid container spacing={3}>
          {galleryData.map((img, idx) => {
            // Asymmetric layout rhythm: 1st and 4th items are wider
            const isWide = idx === 0 || idx === 3;
            const colSpan = isWide ? { xs: 12, md: 7 } : { xs: 12, sm: 6, md: 5 };
            const height = isWide ? { xs: 260, sm: 340, md: 380 } : { xs: 260, sm: 340, md: 380 };

            // Distinct editorial entrance variants
            const getEntranceVariant = (i: number): Variants => {
              switch (i % 4) {
                case 0:
                  return {
                    hidden: { clipPath: 'inset(0% 100% 0% 0%)', opacity: 0, scale: 1.08 },
                    visible: { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1, transition: { duration: 1.1, ease: luxuryEase } },
                  };
                case 1:
                  return {
                    hidden: { opacity: 0, scale: 0.92 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: luxuryEase, delay: 0.15 } },
                  };
                case 2:
                  return {
                    hidden: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0, scale: 1.08 },
                    visible: { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1, transition: { duration: 1.0, ease: luxuryEase, delay: 0.25 } },
                  };
                case 3:
                default:
                  return {
                    hidden: { opacity: 0, x: 40 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: luxuryEase, delay: 0.3 } },
                  };
              }
            };

            return (
              <Grid size={colSpan} key={img.id}>
                <motion.div
                  variants={getEntranceVariant(idx)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <Box
                    data-cursor="view"
                    onClick={() => setLightboxIndex(idx)}
                    sx={{
                      position: 'relative',
                      height,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: `1px solid ${v2Colors.gold.hairline}`,
                      backgroundColor: v2Colors.obsidian.surface,
                      transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
                      '&:hover .v2-gallery-img': {
                        transform: 'scale(1.05)',
                      },
                      '&:hover .v2-gallery-overlay': {
                        opacity: 1,
                      },
                      '&:hover .v2-gold-line': {
                        width: '36px',
                      },
                      '&:hover .v2-overlay-text': {
                        transform: 'translateY(0)',
                        opacity: 1,
                      },
                      '&:hover': {
                        borderColor: v2Colors.gold.champagne,
                        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.75)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      className="v2-gallery-img"
                      src={img.imageUrl}
                      alt={img.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />

                    {/* Dark Burgundy Overlay on Hover */}
                    <Box
                      className="v2-gallery-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(12,10,9,0.3) 0%, rgba(58,14,18,0.92) 85%)',
                        opacity: 0,
                        transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: { xs: 2.5, sm: 3.5 },
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography
                          variant="caption"
                          sx={{
                            backgroundColor: v2Colors.gold.antique,
                            color: v2Colors.obsidian.black,
                            px: 1.4,
                            py: 0.5,
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            fontSize: '0.7rem',
                          }}
                        >
                          {img.category}
                        </Typography>
                        <ZoomInIcon sx={{ color: v2Colors.gold.champagne, fontSize: 26 }} />
                      </Box>

                      <Box
                        className="v2-overlay-text"
                        sx={{
                          transform: 'translateY(20px)',
                          opacity: 0,
                          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: '"Cinzel", Georgia, serif',
                            fontWeight: 800,
                            fontSize: { xs: '1.2rem', sm: '1.45rem' },
                            color: v2Colors.ivory.warm,
                            mb: 0.5,
                          }}
                        >
                          {img.title}
                        </Typography>

                        {/* Small expanding gold line */}
                        <Box
                          className="v2-gold-line"
                          sx={{
                            width: 0,
                            height: 2,
                            backgroundColor: v2Colors.gold.champagne,
                            mb: 1,
                            transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                          }}
                        />

                        {img.caption && (
                          <Typography
                            variant="body2"
                            sx={{
                              color: v2Colors.ivory.muted,
                              fontSize: '0.85rem',
                              lineHeight: 1.5,
                            }}
                          >
                            {img.caption}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Lightbox Modal */}
      <Dialog
        open={Boolean(activeLightbox)}
        onClose={() => setLightboxIndex(null)}
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: {
              backgroundColor: v2Colors.obsidian.black,
              border: `1px solid ${v2Colors.gold.antique}`,
              borderRadius: 0,
              overflow: 'hidden',
              p: 0,
              m: { xs: 1, sm: 2 },
            },
          },
        }}
      >
        <AnimatePresence mode="wait">
          {activeLightbox && (
            <motion.div
              key={activeLightbox.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box sx={{ position: 'relative' }}>
                <IconButton
                  onClick={() => setLightboxIndex(null)}
                  aria-label="close lightbox"
                  sx={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    color: v2Colors.ivory.warm,
                    backgroundColor: 'rgba(12, 10, 9, 0.85)',
                    border: `1px solid ${v2Colors.gold.hairline}`,
                    zIndex: 10,
                    '&:hover': {
                      backgroundColor: v2Colors.gold.antique,
                      color: v2Colors.obsidian.black,
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>

            {/* Prev Button */}
            <IconButton
              onClick={handlePrev}
              aria-label="previous image"
              sx={{
                position: 'absolute',
                top: '50%',
                left: 14,
                transform: 'translateY(-50%)',
                color: v2Colors.ivory.warm,
                backgroundColor: 'rgba(12, 10, 9, 0.85)',
                border: `1px solid ${v2Colors.gold.hairline}`,
                zIndex: 10,
                '&:hover': {
                  backgroundColor: v2Colors.gold.antique,
                  color: v2Colors.obsidian.black,
                },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* Next Button */}
            <IconButton
              onClick={handleNext}
              aria-label="next image"
              sx={{
                position: 'absolute',
                top: '50%',
                right: 14,
                transform: 'translateY(-50%)',
                color: v2Colors.ivory.warm,
                backgroundColor: 'rgba(12, 10, 9, 0.85)',
                border: `1px solid ${v2Colors.gold.hairline}`,
                zIndex: 10,
                '&:hover': {
                  backgroundColor: v2Colors.gold.antique,
                  color: v2Colors.obsidian.black,
                },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            <Box
              component="img"
              src={activeLightbox.imageUrl}
              alt={activeLightbox.title}
              sx={{
                width: '100%',
                maxHeight: '76vh',
                objectFit: 'contain',
                display: 'block',
                backgroundColor: '#000000',
              }}
            />

            <Box
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                backgroundColor: v2Colors.obsidian.surface,
                borderTop: `1px solid ${v2Colors.gold.hairline}`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  color: v2Colors.gold.champagne,
                  fontWeight: 800,
                  fontSize: { xs: '1.15rem', sm: '1.35rem' },
                }}
              >
                {activeLightbox.title}
              </Typography>
              {activeLightbox.caption && (
                <Typography
                  variant="body2"
                  sx={{
                    color: v2Colors.ivory.muted,
                    mt: 0.5,
                  }}
                >
                  {activeLightbox.caption}
                </Typography>
              )}
            </Box>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
    </Dialog>
    </Box>
  );
};
