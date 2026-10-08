import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  Tabs,
  Tab,
  Chip,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsIcon from '@mui/icons-material/Directions';
import { v3Colors } from '../../../theme/v3/colors';
import { v3Ease, v3Viewport } from '../../../theme/v3/motion';
import { branchesData } from '../../../data/branches';
import type { Branch, BranchRegion } from '../../../types';

export const BranchesV3: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [expandedBranchId, setExpandedBranchId] = useState<string>(branchesData[0].id);

  const displayedBranches: Branch[] =
    selectedRegion === 'All'
      ? branchesData.slice(0, 6)
      : branchesData.filter((b) => b.region === (selectedRegion as BranchRegion));

  return (
    <Box
      id="v3-branches"
      sx={{
        py: { xs: 12, md: 18 },
        backgroundColor: v3Colors.lightSection.bg,
        color: v3Colors.lightSection.textPrimary,
        position: 'relative',
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
                color: v3Colors.burgundy.deep,
                letterSpacing: '0.24em',
                fontWeight: 800,
                fontSize: '0.8rem',
                mb: 1.5,
              }}
            >
              05 / EXPANSION ACROSS MAHARASHTRA
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                fontWeight: 900,
                fontSize: { xs: '2.4rem', sm: '3.6rem', md: '4.5rem' },
                letterSpacing: '0.03em',
                color: v3Colors.lightSection.textPrimary,
                lineHeight: 1.05,
                mb: 1.5,
                textTransform: 'uppercase',
              }}
            >
              The House Across Maharashtra
            </Typography>

            <Typography
              component="p"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: { xs: '1.25rem', sm: '1.55rem' },
                color: v3Colors.burgundy.deep,
                fontWeight: 600,
                mb: 2,
              }}
            >
              “कराड, पुणे, मुंबई, सांगली व साताऱ्यापर्यंत पसरलेला खवय्यांचा विश्वास”
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: v3Colors.lightSection.textSecondary,
                fontSize: '1.02rem',
                lineHeight: 1.85,
              }}
            >
              From our flagship along the NH4 Highway corridor in Karad to metropolitan outposts across Pune and Mumbai,
              discover authentic woodfire flavors wherever your travels lead.
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
                backgroundColor: v3Colors.burgundy.deep,
                height: 2,
              },
              '& .MuiTab-root': {
                color: v3Colors.lightSection.textSecondary,
                fontFamily: '"Manrope", sans-serif',
                fontSize: '0.84rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                px: { xs: 2, sm: 3 },
                py: 1.2,
                '&.Mui-selected': {
                  color: v3Colors.burgundy.deep,
                  fontWeight: 800,
                },
              },
            }}
          >
            <Tab label="Featured Outlets" value="All" />
            <Tab label="Karad & Satara" value="Karad & Satara" />
            <Tab label="Pune Corridor" value="Pune" />
            <Tab label="Mumbai Region" value="Mumbai" />
            <Tab label="Sangli & Kolhapur" value="Sangli & Kolhapur" />
            <Tab label="Konkan / Chiplun" value="Konkan" />
          </Tabs>
        </Box>

        {/* ========================================================= */}
        {/* EXPANDABLE BRANCH CARDS WITH ANIMATEPRESENCE             */}
        {/* ========================================================= */}
        <Grid container spacing={3.5}>
          {displayedBranches.map((branch, idx) => {
            const isExpanded = expandedBranchId === branch.id;

            return (
              <Grid size={{ xs: 12, md: isExpanded ? 8 : 4 }} key={branch.id}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={v3Viewport}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease: v3Ease }}
                >
                  <Box
                    onClick={() => setExpandedBranchId(branch.id)}
                    sx={{
                      p: { xs: 3, sm: 4 },
                      backgroundColor: '#FFFFFF',
                      border: `1px solid ${
                        isExpanded ? v3Colors.gold.antique : v3Colors.lightSection.border
                      }`,
                      borderTop: `3px solid ${
                        isExpanded ? v3Colors.burgundy.deep : v3Colors.gold.antique
                      }`,
                      boxShadow: isExpanded
                        ? '0 20px 48px rgba(66, 18, 23, 0.12)'
                        : '0 6px 20px rgba(109, 84, 64, 0.06)',
                      cursor: 'pointer',
                      transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                      position: 'relative',
                      opacity: isExpanded ? 1 : 0.88,
                      '&:hover': {
                        opacity: 1,
                        borderColor: v3Colors.gold.antique,
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    {/* Header: Region + Flagship Tag */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                      <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center' }}>
                        <LocationOnIcon sx={{ color: v3Colors.burgundy.deep, fontSize: 18 }} />
                        <Typography
                          variant="overline"
                          sx={{
                            color: v3Colors.gold.antique,
                            fontWeight: 800,
                            letterSpacing: '0.14em',
                            fontSize: '0.72rem',
                          }}
                        >
                          {branch.region}
                        </Typography>
                      </Stack>

                      {branch.isFlagship && (
                        <Chip
                          label="FLAGSHIP • कराड"
                          size="small"
                          sx={{
                            backgroundColor: v3Colors.burgundy.deep,
                            color: v3Colors.neutral.ivory,
                            fontSize: '0.66rem',
                            fontWeight: 800,
                            borderRadius: 0,
                          }}
                        />
                      )}
                    </Box>

                    {/* Outlet Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                        fontWeight: 800,
                        fontSize: { xs: '1.25rem', sm: '1.45rem' },
                        color: v3Colors.lightSection.textPrimary,
                        mb: 0.5,
                      }}
                    >
                      {branch.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: v3Colors.burgundy.deep,
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        mb: 2,
                      }}
                    >
                      {branch.area}, {branch.city}
                    </Typography>

                    {/* Expandable Details Container */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.45, ease: v3Ease }}
                        >
                          {branch.address && (
                            <Typography
                              variant="body2"
                              sx={{
                                color: v3Colors.lightSection.textSecondary,
                                fontSize: '0.88rem',
                                lineHeight: 1.7,
                                mb: 2.5,
                                pt: 1,
                              }}
                            >
                              {branch.address}
                            </Typography>
                          )}

                          {branch.facilities && (
                            <Stack direction="row" spacing={0.8} sx={{ mb: 3, flexWrap: 'wrap', gap: 0.8 }}>
                              {branch.facilities.map((f) => (
                                <Chip
                                  key={f}
                                  label={f}
                                  size="small"
                                  sx={{
                                    backgroundColor: v3Colors.lightSection.stonePill,
                                    color: v3Colors.lightSection.textPrimary,
                                    fontSize: '0.68rem',
                                    fontWeight: 700,
                                    borderRadius: 0,
                                  }}
                                />
                              ))}
                            </Stack>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action Bar */}
                    <Box
                      sx={{
                        pt: 2.5,
                        mt: 1,
                        borderTop: `1px solid ${v3Colors.lightSection.border}`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        component="a"
                        href={`tel:${branch.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.8,
                          color: v3Colors.lightSection.textPrimary,
                          textDecoration: 'none',
                          fontSize: '0.84rem',
                          fontWeight: 700,
                          transition: 'color 0.2s',
                          '&:hover': { color: v3Colors.burgundy.deep },
                        }}
                      >
                        <PhoneIcon sx={{ fontSize: 16, color: v3Colors.gold.antique }} />
                        <span>{branch.phone}</span>
                      </Box>

                      <Box
                        component="a"
                        href={branch.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.6,
                          color: v3Colors.burgundy.deep,
                          textDecoration: 'none',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          transition: 'color 0.2s',
                          '&:hover': { color: v3Colors.gold.antique },
                        }}
                      >
                        <span>Directions</span>
                        <DirectionsIcon sx={{ fontSize: 16 }} />
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
