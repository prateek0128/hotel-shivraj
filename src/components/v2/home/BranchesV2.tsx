import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Tabs,
  Tab,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  InputAdornment,
  Chip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsIcon from '@mui/icons-material/Directions';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { v2Colors } from '../../../theme/v2/colors';
import { v2SectionReveal } from '../../../theme/v2/motion';
import { branchesData } from '../../../data/branches';
import type { Branch, BranchRegion } from '../../../types';

export const BranchesV2: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [allBranchesOpen, setAllBranchesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredBranches = branchesData.filter((b) => b.isFlagship);

  const displayedBranches: Branch[] =
    selectedRegion === 'All'
      ? featuredBranches
      : branchesData.filter((b) => b.region === (selectedRegion as BranchRegion));

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
      id="v2-branches"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: v2Colors.obsidian.surface,
        position: 'relative',
        borderTop: `1px solid ${v2Colors.gold.hairline}`,
        borderBottom: `1px solid ${v2Colors.gold.hairline}`,
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
              ROYAL EXPANSION ACROSS MAHARASHTRA
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Cinzel", Georgia, serif',
                fontWeight: 900,
                fontSize: { xs: '2.2rem', sm: '3.4rem', md: '4.2rem' },
                letterSpacing: '0.03em',
                color: v2Colors.ivory.warm,
                lineHeight: 1.05,
                mb: 1.5,
                textTransform: 'uppercase',
              }}
            >
              The Royal House Across Maharashtra
            </Typography>

            <Typography
              component="p"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: { xs: '1.25rem', sm: '1.55rem' },
                color: v2Colors.gold.champagne,
                fontWeight: 600,
                mb: 2,
              }}
            >
              “कराड, पुणे, मुंबई, सांगली व साताऱ्यापर्यंत पसरलेला खवय्यांचा विश्वास”
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: v2Colors.text.secondaryLight,
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              Starting from the iconic Highway AC flagship in Karad to bustling metropolitan hubs across Pune and Mumbai,
              discover royal hospitality wherever your journeys lead you.
            </Typography>
          </motion.div>
        </Box>

        {/* Region Filter Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Tabs
            value={selectedRegion}
            onChange={(_, val) => setSelectedRegion(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: v2Colors.gold.champagne,
                height: 2,
              },
              '& .MuiTab-root': {
                color: v2Colors.ivory.muted,
                fontFamily: '"Manrope", sans-serif',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                px: { xs: 2, sm: 3 },
                py: 1.2,
                '&.Mui-selected': {
                  color: v2Colors.gold.champagne,
                  fontWeight: 700,
                },
                '&:hover': {
                  color: v2Colors.gold.pale,
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

        {/* Luxury Branch Cards Grid */}
        <Grid container spacing={3.5} sx={{ mb: 7 }}>
          <AnimatePresence>
            {displayedBranches.map((branch, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={branch.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 50 + (idx % 3) * 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                >
                  <Box
                    sx={{
                      p: 3.5,
                      height: '100%',
                      backgroundColor: 'rgba(12, 10, 9, 0.75)',
                      border: `1px solid ${v2Colors.gold.hairline}`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      position: 'relative',
                      '&:hover': {
                        borderColor: v2Colors.gold.champagne,
                        boxShadow: '0 16px 36px rgba(0, 0, 0, 0.8)',
                        '& .branch-loc-icon': {
                          transform: 'scale(1.1)',
                        },
                        '& .branch-dir-icon': {
                          transform: 'translateX(4px)',
                        },
                      },
                    }}
                  >
                    <Box>
                      {/* Top Header */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center' }}>
                          <LocationOnIcon
                            className="branch-loc-icon"
                            sx={{
                              color: v2Colors.gold.champagne,
                              fontSize: 18,
                              transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                          />
                          <Typography
                            variant="overline"
                            sx={{
                              color: v2Colors.gold.antique,
                              fontWeight: 700,
                              letterSpacing: '0.14em',
                              fontSize: '0.7rem',
                            }}
                          >
                            {branch.region}
                          </Typography>
                        </Stack>

                        {branch.isFlagship && (
                          <Chip
                            label="ORIGINAL DHABA"
                            size="small"
                            sx={{
                              backgroundColor: v2Colors.maroon.burgundy,
                              color: v2Colors.gold.pale,
                              fontSize: '0.65rem',
                              fontWeight: 800,
                              borderRadius: 0,
                              border: `1px solid ${v2Colors.gold.hairline}`,
                            }}
                          />
                        )}
                      </Box>

                      {/* Name */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: '"Cinzel", Georgia, serif',
                          fontWeight: 800,
                          fontSize: '1.25rem',
                          color: v2Colors.ivory.warm,
                          mb: 0.5,
                        }}
                      >
                        {branch.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: v2Colors.gold.champagne,
                          fontWeight: 600,
                          fontSize: '0.88rem',
                          mb: 1.5,
                        }}
                      >
                        {branch.area}, {branch.city}
                      </Typography>

                      {branch.address && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: v2Colors.ivory.muted,
                            fontSize: '0.82rem',
                            lineHeight: 1.6,
                            mb: 2.5,
                          }}
                        >
                          {branch.address}
                        </Typography>
                      )}

                      {/* Facilities */}
                      {branch.facilities && (
                        <Stack direction="row" spacing={0.8} sx={{ mb: 3, flexWrap: 'wrap', gap: 0.8 }}>
                          {branch.facilities.slice(0, 3).map((f) => (
                            <Chip
                              key={f}
                              label={f}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                color: v2Colors.ivory.stone,
                                fontSize: '0.68rem',
                                borderRadius: 0,
                                border: '1px solid rgba(195, 154, 82, 0.15)',
                              }}
                            />
                          ))}
                        </Stack>
                      )}
                    </Box>

                    {/* Actions: Call & Directions */}
                    <Box
                      sx={{
                        pt: 2.5,
                        borderTop: `1px solid ${v2Colors.gold.hairline}`,
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
                          color: v2Colors.ivory.warm,
                          textDecoration: 'none',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          transition: 'color 0.2s',
                          '&:hover': { color: v2Colors.gold.champagne },
                        }}
                      >
                        <PhoneIcon sx={{ fontSize: 16, color: v2Colors.gold.antique }} />
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
                          gap: 0.6,
                          color: v2Colors.gold.champagne,
                          textDecoration: 'none',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          transition: 'color 0.2s',
                          '&:hover': { color: v2Colors.ivory.warm },
                        }}
                      >
                        <span>Directions</span>
                        <DirectionsIcon
                          className="branch-dir-icon"
                          sx={{ fontSize: 16, transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)' }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>

        {/* View All Outlets CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            onClick={() => setAllBranchesOpen(true)}
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: v2Colors.gold.antique,
              color: v2Colors.obsidian.black,
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.1em',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: v2Colors.gold.champagne,
                transform: 'translateY(-2px)',
              },
            }}
          >
            Explore Complete Directory (20+ Outlets)
          </Button>
        </Box>
      </Container>

      {/* Complete Directory Modal */}
      <Dialog
        open={allBranchesOpen}
        onClose={() => setAllBranchesOpen(false)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: v2Colors.obsidian.surface,
              border: `1px solid ${v2Colors.gold.antique}`,
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
                color: v2Colors.ivory.warm,
              }}
            >
              All Hotel Shivraj Dhaba Outlets
            </Typography>
            <Typography variant="caption" sx={{ color: v2Colors.gold.champagne, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
              Royal Hospitality Across Maharashtra
            </Typography>
          </Box>
          <IconButton onClick={() => setAllBranchesOpen(false)} sx={{ border: `1px solid ${v2Colors.gold.hairline}` }}>
            <CloseIcon fontSize="small" sx={{ color: v2Colors.gold.champagne }} />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 1 }}>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search by city (Pune, Mumbai, Karad, Sangli, Satara)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: v2Colors.gold.antique }} />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 0,
                    backgroundColor: v2Colors.obsidian.black,
                    border: `1px solid ${v2Colors.gold.hairline}`,
                    color: v2Colors.ivory.warm,
                  },
                },
              }}
            />
          </Box>

          <Stack spacing={2} sx={{ maxHeight: 480, overflowY: 'auto', pr: 1 }}>
            {modalFilteredBranches.map((b) => (
              <Box
                key={b.id}
                sx={{
                  p: 2,
                  backgroundColor: v2Colors.obsidian.black,
                  border: `1px solid ${v2Colors.gold.hairline}`,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  gap: 1.5,
                  '&:hover': {
                    borderColor: v2Colors.gold.champagne,
                  },
                }}
              >
                <Box>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 0.5 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: v2Colors.ivory.warm }}>
                      {b.name}
                    </Typography>
                    <Chip label={b.region} size="small" sx={{ fontSize: '0.65rem', height: 20, borderRadius: 0, backgroundColor: v2Colors.maroon.burgundy, color: v2Colors.gold.pale }} />
                  </Stack>
                  <Typography variant="body2" sx={{ color: v2Colors.ivory.muted, fontSize: '0.82rem' }}>
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
                      border: `1px solid ${v2Colors.gold.hairline}`,
                      color: v2Colors.ivory.warm,
                      textDecoration: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textAlign: 'center',
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
                      backgroundColor: v2Colors.gold.antique,
                      color: v2Colors.obsidian.black,
                      textDecoration: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textAlign: 'center',
                    }}
                  >
                    Directions
                  </Box>
                </Stack>
              </Box>
            ))}

            {modalFilteredBranches.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="body2" sx={{ color: v2Colors.ivory.muted }}>
                  No outlets found matching "{searchQuery}".
                </Typography>
              </Box>
            )}
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
