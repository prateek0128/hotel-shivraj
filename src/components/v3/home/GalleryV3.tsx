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
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { v3Colors } from '../../../theme/v3/colors';
import { v3Ease, v3Viewport } from '../../../theme/v3/motion';
import { galleryData } from '../../../data/gallery';

export const GalleryV3: React.FC = () => {
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
      id="v3-gallery"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: v3Colors.obsidian.pure,
        color: v3Colors.neutral.ivory,
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${v3Colors.gold.hairline}`,
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: { xs: 8, md: 10 } }}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={v3Viewport}
            transition={{ duration: 0.8, ease: v3Ease }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: v3Colors.gold.antique,
                letterSpacing: '0.26em',
                fontWeight: 800,
                fontSize: '0.8rem',
                mb: 1.5,
              }}
            >
              06 / CHRONICLES IN FRAMES
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                fontWeight: 900,
                fontSize: { xs: '2.4rem', sm: '3.4rem', md: '4.6rem' },
                letterSpacing: '0.04em',
                color: v3Colors.neutral.ivory,
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
                color: v3Colors.gold.champagne,
                fontWeight: 600,
                mb: 2,
              }}
            >
              “मराठमोळी वास्तुकला, चव आणि अनमोल क्षणांची झलक”
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: v3Colors.neutral.stone,
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              An editorial visual journey through our fort courtyard architecture, brass handi preparations,
              and multi-generational family gatherings across Maharashtra.
            </Typography>
          </motion.div>
        </Box>

        {/* Asymmetrical Editorial Collage Grid */}
        <Grid container spacing={3}>
          {galleryData.map((img, idx) => {
            // Asymmetric layout rhythm: 1st and 4th items are wider
            const isWide = idx === 0 || idx === 3;
            const colSpan = isWide ? { xs: 12, md: 7 } : { xs: 12, sm: 6, md: 5 };
            const height = isWide ? { xs: 280, sm: 360, md: 400 } : { xs: 280, sm: 360, md: 400 };

            return (
              <Grid size={colSpan} key={img.id}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={v3Viewport}
                  transition={{ duration: 0.85, delay: idx * 0.1, ease: v3Ease }}
                >
                  <Box
                    data-cursor="view"
                    onClick={() => setLightboxIndex(idx)}
                    sx={{
                      position: 'relative',
                      height,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: `1px solid ${v3Colors.gold.hairline}`,
                      backgroundColor: v3Colors.obsidian.surface,
                      transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
                      '&:hover img': {
                        transform: 'scale(1.05)',
                      },
                      '&:hover .v3-gallery-overlay': {
                        opacity: 1,
                      },
                      '&:hover .v3-gold-line': {
                        width: '42px',
                      },
                      '&:hover .v3-overlay-text': {
                        transform: 'translateY(0)',
                        opacity: 1,
                      },
                      '&:hover': {
                        borderColor: v3Colors.gold.champagne,
                        boxShadow: '0 20px 48px rgba(0, 0, 0, 0.8)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={img.imageUrl}
                      alt={img.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />

                    {/* Dark Burgundy Overlay on Hover */}
                    <Box
                      className="v3-gallery-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(11,10,9,0.3) 0%, rgba(66,18,23,0.92) 85%)',
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
                            backgroundColor: v3Colors.gold.antique,
                            color: v3Colors.obsidian.pure,
                            px: 1.5,
                            py: 0.6,
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            fontSize: '0.7rem',
                          }}
                        >
                          {img.category}
                        </Typography>
                        <ZoomInIcon sx={{ color: v3Colors.gold.champagne, fontSize: 26 }} />
                      </Box>

                      <Box
                        className="v3-overlay-text"
                        sx={{
                          transform: 'translateY(20px)',
                          opacity: 0,
                          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: '"Bodoni Moda", serif',
                            fontWeight: 800,
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            color: v3Colors.neutral.ivory,
                            mb: 0.5,
                          }}
                        >
                          {img.title}
                        </Typography>

                        {/* Growing Gold Line */}
                        <Box
                          className="v3-gold-line"
                          sx={{
                            width: 0,
                            height: 2,
                            backgroundColor: v3Colors.gold.champagne,
                            mb: 1.2,
                            transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                          }}
                        />

                        {img.caption && (
                          <Typography
                            variant="body2"
                            sx={{
                              color: v3Colors.neutral.stone,
                              fontSize: '0.85rem',
                              lineHeight: 1.55,
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

      {/* Accessible Lightbox Modal */}
      <Dialog
        open={Boolean(activeLightbox)}
        onClose={() => setLightboxIndex(null)}
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: {
              backgroundColor: v3Colors.obsidian.pure,
              border: `1px solid ${v3Colors.gold.antique}`,
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
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: v3Ease }}
            >
              <Box sx={{ position: 'relative' }}>
                <IconButton
                  onClick={() => setLightboxIndex(null)}
                  aria-label="close lightbox"
                  sx={{
                    position: 'absolute',
                    top: 14,
                    right: 14,
                    color: v3Colors.neutral.ivory,
                    backgroundColor: 'rgba(11, 10, 9, 0.85)',
                    border: `1px solid ${v3Colors.gold.hairline}`,
                    zIndex: 10,
                    '&:hover': {
                      backgroundColor: v3Colors.gold.antique,
                      color: v3Colors.obsidian.pure,
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
                    color: v3Colors.neutral.ivory,
                    backgroundColor: 'rgba(11, 10, 9, 0.85)',
                    border: `1px solid ${v3Colors.gold.hairline}`,
                    zIndex: 10,
                    '&:hover': {
                      backgroundColor: v3Colors.gold.antique,
                      color: v3Colors.obsidian.pure,
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
                    color: v3Colors.neutral.ivory,
                    backgroundColor: 'rgba(11, 10, 9, 0.85)',
                    border: `1px solid ${v3Colors.gold.hairline}`,
                    zIndex: 10,
                    '&:hover': {
                      backgroundColor: v3Colors.gold.antique,
                      color: v3Colors.obsidian.pure,
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
                    backgroundColor: v3Colors.obsidian.surface,
                    borderTop: `1px solid ${v3Colors.gold.hairline}`,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Bodoni Moda", serif',
                      color: v3Colors.gold.champagne,
                      fontWeight: 800,
                      fontSize: { xs: '1.2rem', sm: '1.4rem' },
                    }}
                  >
                    {activeLightbox.title}
                  </Typography>
                  {activeLightbox.caption && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: v3Colors.neutral.stone,
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
