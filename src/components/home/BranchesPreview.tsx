import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Tabs,
  Tab,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  InputAdornment,
  Chip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import DirectionsIcon from '@mui/icons-material/Directions';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { heritageColors } from '../../theme/colors';
import { branchesData } from '../../data/branches';
import type { Branch, BranchRegion } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { HeritageFrame } from '../common/HeritageFrame';
import { CTAButton } from '../common/CTAButton';

export const BranchesPreview: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [allBranchesOpen, setAllBranchesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Featured branches on the homepage
  const featuredBranches = branchesData.filter((b) => b.isFlagship);

  const displayedBranches: Branch[] =
    selectedRegion === 'All'
      ? featuredBranches
      : branchesData.filter((b) => b.region === (selectedRegion as BranchRegion));

  // Search filter inside the modal
  const modalFilteredBranches = branchesData.filter((b) => {
    const q = searchQuery.toLowerCase();
    return (
      b.name.toLowerCase().includes(q) ||
      b.city.toLowerCase().includes(q) ||
      b.area.toLowerCase().includes(q) ||
      b.region.toLowerCase().includes(q)
    );
  });

  return (
    <Box
      id="branches"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: heritageColors.parchment.main,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Maharashtra Highway Corridor Motif */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.035,
          pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(circle at 75% 40%, rgba(74, 23, 24, 0.5) 0%, transparent 60%),
            radial-gradient(circle at 25% 70%, rgba(176, 138, 69, 0.5) 0%, transparent 60%)
          `,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionHeading
          eyebrow="EXPANDING OUR ROOTS"
          marathiEyebrow="शाखा विस्तार"
          title="Find Us Across Maharashtra"
          marathiTitle="“कोकणापासून ते राजधानी मुंबईपर्यंत — खवय्यांच्या सेवेत तत्पर”"
          subtitle="From our historic foundation on the Karad-Chiplun highway to vibrant dining destinations across Pune, Mumbai, Satara, and Sangli."
          mode="light"
        />

        {/* Region Filter Tabs with Smooth Active Indicator */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Tabs
            value={selectedRegion}
            onChange={(_, val) => setSelectedRegion(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: heritageColors.maroon.main,
                height: 2,
                transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
              },
              '& .MuiTab-root': {
                color: heritageColors.text.secondaryDark,
                fontFamily: '"Cinzel", Georgia, serif',
                fontSize: '0.85rem',
                letterSpacing: '0.06em',
                px: { xs: 2, sm: 2.8 },
                py: 1.2,
                transition: 'all 0.25s ease',
                '&.Mui-selected': {
                  color: heritageColors.maroon.main,
                  fontWeight: 700,
                },
                '&:hover': {
                  color: heritageColors.maroon.rich,
                },
              },
            }}
          >
            <Tab label="Featured Outlets" value="All" />
            <Tab label="Karad &amp; Satara" value="Karad & Satara" />
            <Tab label="Pune Corridor" value="Pune" />
            <Tab label="Mumbai Region" value="Mumbai" />
            <Tab label="Sangli &amp; Kolhapur" value="Sangli & Kolhapur" />
            <Tab label="Konkan / Chiplun" value="Konkan" />
          </Tabs>
        </Box>

        {/* Branches Grid with Lift on Hover */}
        <Grid container spacing={{ xs: 3, md: 3.5 }} sx={{ mb: 6 }}>
          <AnimatePresence>
            {displayedBranches.map((branch, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={branch.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
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
                        boxShadow: '0 16px 36px rgba(23, 18, 14, 0.08)',
                        '& .branch-directions-icon': {
                          transform: 'translateX(3px)',
                        },
                      },
                    }}
                  >
                    <Box>
                      {/* Top Header */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LocationOnIcon sx={{ color: heritageColors.maroon.main, fontSize: 20 }} />
                          <Typography
                            variant="overline"
                            sx={{
                              color: heritageColors.gold.dark,
                              fontWeight: 700,
                              letterSpacing: '0.12em',
                              fontSize: '0.72rem',
                            }}
                          >
                            {branch.region}
                          </Typography>
                        </Box>

                        {branch.isFlagship && (
                          <Chip
                            label="ORIGINAL DHABA"
                            size="small"
                            sx={{
                              backgroundColor: heritageColors.gold.pale,
                              color: heritageColors.charcoal.main,
                              fontSize: '0.65rem',
                              fontWeight: 800,
                              borderRadius: 0,
                              border: `1px solid ${heritageColors.gold.border}`,
                            }}
                          />
                        )}
                      </Box>

                      {/* Outlet Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: heritageColors.charcoal.main,
                          fontFamily: '"Cinzel", Georgia, serif',
                          mb: 0.5,
                        }}
                      >
                        {branch.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: heritageColors.maroon.main,
                          fontWeight: 600,
                          mb: 1.5,
                          fontSize: '0.88rem',
                        }}
                      >
                        {branch.area}, {branch.city}
                      </Typography>

                      {/* Full Address */}
                      {branch.address && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: heritageColors.text.secondaryDark,
                            fontSize: '0.85rem',
                            lineHeight: 1.6,
                            mb: 2,
                          }}
                        >
                          {branch.address}
                        </Typography>
                      )}

                      {/* Facilities Chips */}
                      {branch.facilities && branch.facilities.length > 0 && (
                        <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 0.8 }}>
                          {branch.facilities.map((fac) => (
                            <Chip
                              key={fac}
                              size="small"
                              label={fac}
                              sx={{
                                backgroundColor: 'rgba(244, 235, 221, 0.8)',
                                color: heritageColors.charcoal.main,
                                fontSize: '0.7rem',
                                borderRadius: 0,
                              }}
                            />
                          ))}
                        </Stack>
                      )}
                    </Box>

                    {/* Actions: Call & Directions */}
                    <Box
                      sx={{
                        pt: 2,
                        borderTop: '1px solid rgba(176, 138, 69, 0.18)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        component="a"
                        href={`tel:${branch.phone}`}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.8,
                          color: heritageColors.charcoal.main,
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          transition: 'color 0.2s',
                          '&:hover': {
                            color: heritageColors.maroon.main,
                          },
                        }}
                      >
                        <PhoneIcon sx={{ fontSize: 16, color: heritageColors.maroon.main }} />
                        <span>{branch.phone}</span>
                      </Box>

                      <Box
                        component="a"
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          color: heritageColors.gold.dark,
                          textDecoration: 'none',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          transition: 'color 0.2s',
                          '&:hover': {
                            color: heritageColors.charcoal.main,
                          },
                        }}
                      >
                        <span>Directions</span>
                        <DirectionsIcon className="branch-directions-icon" sx={{ fontSize: 16, transition: 'transform 0.2s ease' }} />
                      </Box>
                    </Box>
                  </HeritageFrame>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        {/* View All Outlets CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <CTAButton
            variantType="maroon-filled"
            onClick={() => setAllBranchesOpen(true)}
            icon={<ArrowForwardIcon />}
            sx={{ minWidth: 260 }}
          >
            View All 20+ Outlets
          </CTAButton>
        </Box>
      </Container>

      {/* MODAL: Complete All Branches Directory with Search */}
      <Dialog
        open={allBranchesOpen}
        onClose={() => setAllBranchesOpen(false)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: heritageColors.parchment.pure,
              backgroundImage: 'radial-gradient(circle at top right, rgba(176, 138, 69, 0.08), transparent 60%)',
              border: `1px solid ${heritageColors.gold.main}`,
              borderRadius: 0,
              p: { xs: 2, sm: 3 },
            },
          },
        }}
      >
        <DialogTitle sx={{ px: 1, pt: 1, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Cinzel", Georgia, serif',
                fontWeight: 800,
                color: heritageColors.charcoal.main,
              }}
            >
              All Hotel Shivraj Dhaba Outlets
            </Typography>
            <Typography variant="caption" sx={{ color: heritageColors.gold.dark, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
              Connecting Maharashtra with Royal Hospitality
            </Typography>
          </Box>
          <IconButton onClick={() => setAllBranchesOpen(false)} sx={{ border: '1px solid rgba(176,138,69,0.3)' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 1 }}>
          {/* Search Bar */}
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search by city (Pune, Mumbai, Karad, Sangli, Satara) or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: heritageColors.gold.dark }} />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 0,
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${heritageColors.gold.border}`,
                  },
                },
              }}
            />
          </Box>

          {/* Modal Branch List */}
          <Stack spacing={2} sx={{ maxHeight: 480, overflowY: 'auto', pr: 1 }}>
            {modalFilteredBranches.map((b) => (
              <Box
                key={b.id}
                sx={{
                  p: 2,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(176, 138, 69, 0.2)',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 1.5,
                  transition: 'border-color 0.2s',
                  '&:hover': {
                    borderColor: heritageColors.gold.main,
                  },
                }}
              >
                <Box>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 0.5 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: heritageColors.charcoal.main }}>
                      {b.name}
                    </Typography>
                    <Chip label={b.region} size="small" sx={{ fontSize: '0.65rem', height: 20, borderRadius: 0 }} />
                  </Stack>
                  <Typography variant="body2" sx={{ color: heritageColors.text.mutedDark, fontSize: '0.82rem' }}>
                    {b.address || `${b.area}, ${b.city}`}
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1.5} sx={{ mt: { xs: 1, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}>
                  <Box
                    component="a"
                    href={`tel:${b.phone}`}
                    sx={{
                      px: 2,
                      py: 0.75,
                      border: `1px solid ${heritageColors.gold.border}`,
                      color: heritageColors.charcoal.main,
                      textDecoration: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      flexGrow: { xs: 1, sm: 0 },
                    }}
                  >
                    Call: {b.phone}
                  </Box>
                  <Box
                    component="a"
                    href={b.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      px: 2,
                      py: 0.75,
                      backgroundColor: heritageColors.maroon.main,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textAlign: 'center',
                      flexGrow: { xs: 1, sm: 0 },
                    }}
                  >
                    Directions
                  </Box>
                </Stack>
              </Box>
            ))}

            {modalFilteredBranches.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="body2" sx={{ color: heritageColors.text.mutedDark }}>
                  No outlets found matching "{searchQuery}". Try searching for Pune, Mumbai, Satara, or Karad.
                </Typography>
              </Box>
            )}
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
