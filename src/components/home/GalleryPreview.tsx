import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Tabs,
  Tab,
  Dialog,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { heritageColors } from '../../theme/colors';
import { galleryData } from '../../data/gallery';
import type { GalleryImage } from '../../types';
import { SectionHeading } from '../common/SectionHeading';

export const GalleryPreview: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages: GalleryImage[] =
    activeFilter === 'All'
      ? galleryData
      : galleryData.filter((img) => img.category === activeFilter);

  const activeLightbox = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredImages.length - 1));
    }
  }, [lightboxIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < filteredImages.length - 1 ? prev! + 1 : 0));
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
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
      id="gallery"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: heritageColors.charcoal.darkest,
        color: heritageColors.parchment.pure,
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        <SectionHeading
          eyebrow="A VISUAL JOURNEY"
          marathiEyebrow="चित्रमय सफर"
          title="The Royal Shivraj Gallery"
          marathiTitle="“मराठमोळी वास्तुकला, चव आणि आनंदाचे क्षण”"
          subtitle="Explore the warmth of our hospitality, the majesty of our architecture, and the craftsmanship poured into every single dish."
          mode="dark"
        />

        {/* Filter Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Tabs
            value={activeFilter}
            onChange={(_, val) => {
              setActiveFilter(val);
              setLightboxIndex(null);
            }}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: heritageColors.gold.highlight,
                height: 2,
                transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
              },
              '& .MuiTab-root': {
                color: heritageColors.text.mutedLight,
                fontFamily: '"Cinzel", Georgia, serif',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                px: { xs: 2, sm: 3 },
                transition: 'all 0.25s ease',
                '&.Mui-selected': {
                  color: heritageColors.gold.pale,
                  fontWeight: 700,
                },
                '&:hover': {
                  color: heritageColors.gold.highlight,
                },
              },
            }}
          >
            <Tab label="All Captures" value="All" />
            <Tab label="Food &amp; Thali" value="Food" />
            <Tab label="Heritage &amp; Forts" value="Heritage" />
            <Tab label="Ambiance &amp; Halls" value="Ambiance" />
            <Tab label="Family Experience" value="Experience" />
          </Tabs>
        </Box>

        {/* Editorial Masonry / Varied Grid */}
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          <AnimatePresence>
            {filteredImages.map((img, idx) => {
              const isLarge = idx === 0 || idx === 3;
              const colSpan = isLarge ? { xs: 12, md: 7 } : { xs: 12, sm: 6, md: 5 };

              // Coordinated editorial collage entrances: clip reveal, fade+scale, clip reveal, slide
              const entranceType = idx % 4;
              let initialAnim: Record<string, any> = { opacity: 0 };
              let visibleAnim: Record<string, any> = { opacity: 1 };

              if (entranceType === 0) {
                initialAnim = { opacity: 0, clipPath: 'inset(0% 100% 0% 0%)', scale: 1.08 };
                visibleAnim = { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1 };
              } else if (entranceType === 1) {
                initialAnim = { opacity: 0, scale: 0.93, y: 30 };
                visibleAnim = { opacity: 1, scale: 1, y: 0 };
              } else if (entranceType === 2) {
                initialAnim = { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)', scale: 1.08 };
                visibleAnim = { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1 };
              } else {
                initialAnim = { opacity: 0, x: -40 };
                visibleAnim = { opacity: 1, x: 0 };
              }

              return (
                <Grid size={colSpan} key={img.id}>
                  <motion.div
                    layout
                    initial={initialAnim}
                    whileInView={visibleAnim}
                    viewport={{ once: true, margin: '-50px' }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.85, delay: (idx % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Box
                      data-cursor="view"
                      onClick={() => setLightboxIndex(idx)}
                      sx={{
                        position: 'relative',
                        height: { xs: 260, sm: 320, md: 360 },
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: `1px solid ${heritageColors.charcoal.border}`,
                        backgroundColor: heritageColors.charcoal.surface,
                        transition: 'all 0.38s ease',
                        '&:hover .gallery-img': {
                          transform: 'scale(1.05)',
                        },
                        '&:hover .gallery-overlay': {
                          opacity: 1,
                        },
                        '&:hover .gallery-text-block': {
                          transform: 'translateY(0)',
                          opacity: 1,
                        },
                        '&:hover .gallery-gold-line': {
                          width: 44,
                        },
                        '&:hover': {
                          borderColor: heritageColors.gold.highlight,
                          boxShadow: '0 16px 36px rgba(0,0,0,0.6)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        className="gallery-img"
                        src={img.imageUrl}
                        alt={img.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      />

                      {/* Subtle Dark Gradient Overlay on Hover */}
                      <Box
                        className="gallery-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(12, 10, 9, 0.72)',
                          opacity: 0,
                          transition: 'opacity 0.38s ease',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          p: 3,
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography
                            variant="caption"
                            sx={{
                              backgroundColor: heritageColors.gold.main,
                              color: heritageColors.charcoal.darkest,
                              px: 1.2,
                              py: 0.4,
                              fontWeight: 700,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              fontSize: '0.7rem',
                            }}
                          >
                            {img.category}
                          </Typography>
                          <ZoomInIcon sx={{ color: heritageColors.gold.highlight, fontSize: 24 }} />
                        </Box>

                        <Box
                          className="gallery-text-block"
                          sx={{
                            transform: 'translateY(20px)',
                            opacity: 0,
                            transition: 'all 0.38s cubic-bezier(0.22, 1, 0.36, 1)',
                          }}
                        >
                          <Box
                            className="gallery-gold-line"
                            sx={{
                              width: 0,
                              height: '2px',
                              backgroundColor: heritageColors.gold.highlight,
                              mb: 1.2,
                              transition: 'width 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              color: heritageColors.parchment.pure,
                              fontFamily: '"Cinzel", Georgia, serif',
                              fontSize: '1.15rem',
                              fontWeight: 700,
                              mb: 0.5,
                            }}
                          >
                            {img.title}
                          </Typography>
                          {img.marathiTitle && (
                            <Typography
                              variant="body2"
                              sx={{
                                color: heritageColors.parchment.stone,
                                fontStyle: 'italic',
                                fontSize: '0.88rem',
                              }}
                            >
                              {img.marathiTitle}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Container>

      {/* Lightbox Modal with Keyboard Navigation & Prev/Next Controls */}
      <Dialog
        open={Boolean(activeLightbox)}
        onClose={() => setLightboxIndex(null)}
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: {
              backgroundColor: heritageColors.charcoal.darkest,
              border: `1px solid ${heritageColors.gold.main}`,
              borderRadius: 0,
              overflow: 'hidden',
              p: 0,
              m: { xs: 1, sm: 2 },
              position: 'relative',
            },
          },
        }}
      >
        {activeLightbox && (
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Close Button */}
            <IconButton
              onClick={() => setLightboxIndex(null)}
              aria-label="close gallery dialog"
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                color: heritageColors.parchment.pure,
                backgroundColor: 'rgba(23, 18, 14, 0.75)',
                border: `1px solid ${heritageColors.gold.border}`,
                zIndex: 10,
                '&:hover': {
                  backgroundColor: heritageColors.gold.main,
                  color: heritageColors.charcoal.darkest,
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
                left: 12,
                transform: 'translateY(-50%)',
                color: heritageColors.parchment.pure,
                backgroundColor: 'rgba(23, 18, 14, 0.75)',
                border: `1px solid ${heritageColors.gold.border}`,
                zIndex: 10,
                '&:hover': {
                  backgroundColor: heritageColors.gold.main,
                  color: heritageColors.charcoal.darkest,
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
                right: 12,
                transform: 'translateY(-50%)',
                color: heritageColors.parchment.pure,
                backgroundColor: 'rgba(23, 18, 14, 0.75)',
                border: `1px solid ${heritageColors.gold.border}`,
                zIndex: 10,
                '&:hover': {
                  backgroundColor: heritageColors.gold.main,
                  color: heritageColors.charcoal.darkest,
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
                maxHeight: '75vh',
                objectFit: 'contain',
                display: 'block',
                backgroundColor: '#000000',
              }}
            />

            <Box
              sx={{
                p: { xs: 2.5, sm: 3 },
                backgroundColor: heritageColors.charcoal.main,
                borderTop: `1px solid ${heritageColors.gold.border}`,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  color: heritageColors.gold.pale,
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                }}
              >
                {activeLightbox.title}
              </Typography>
              {activeLightbox.caption && (
                <Typography
                  variant="body2"
                  sx={{
                    color: heritageColors.parchment.stone,
                    fontStyle: 'italic',
                    mt: 0.5,
                  }}
                >
                  {activeLightbox.caption}
                </Typography>
              )}
            </Box>
          </motion.div>
        )}
      </Dialog>
    </Box>
  );
};
