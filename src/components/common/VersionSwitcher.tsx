import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const VersionSwitcher: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isV3 = location.pathname.startsWith('/v3') || location.pathname.startsWith('/version-3');
  const isV2 = !isV3 && (location.pathname.startsWith('/v2') || location.pathname.startsWith('/version-2'));
  const isV1 = !isV2 && !isV3;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, sm: 28 },
        right: { xs: 16, sm: 28 },
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        p: 0.6,
        backgroundColor: 'rgba(11, 10, 9, 0.94)',
        border: '1px solid rgba(185, 147, 79, 0.45)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.85)',
      }}
    >
      {/* V1 Button */}
      <Box
        onClick={() => {
          if (!isV1) navigate('/');
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.8,
          px: { xs: 1.4, sm: 1.8 },
          py: 0.8,
          cursor: 'pointer',
          backgroundColor: isV1 ? '#B08A45' : 'transparent',
          color: isV1 ? '#17120E' : '#D8C7AD',
          fontWeight: 700,
          fontSize: '0.74rem',
          letterSpacing: '0.06em',
          transition: 'all 0.25s ease',
          '&:hover': {
            color: isV1 ? '#17120E' : '#FAF6EF',
          },
        }}
      >
        <AccountBalanceIcon sx={{ fontSize: 15 }} />
        <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase' }}>
          V1 Heritage
        </Typography>
      </Box>

      {/* V2 Button */}
      <Box
        onClick={() => {
          if (!isV2) navigate('/v2');
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.8,
          px: { xs: 1.4, sm: 1.8 },
          py: 0.8,
          cursor: 'pointer',
          backgroundColor: isV2 ? '#C39A52' : 'transparent',
          color: isV2 ? '#0C0A09' : '#D7C7AE',
          fontWeight: 700,
          fontSize: '0.74rem',
          letterSpacing: '0.06em',
          transition: 'all 0.25s ease',
          '&:hover': {
            color: isV2 ? '#0C0A09' : '#F5EFE4',
          },
        }}
      >
        <AutoAwesomeIcon sx={{ fontSize: 15 }} />
        <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase' }}>
          V2 Maharaja
        </Typography>
      </Box>

      {/* V3 Button */}
      <Box
        onClick={() => {
          if (!isV3) navigate('/v3');
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.8,
          px: { xs: 1.4, sm: 1.8 },
          py: 0.8,
          cursor: 'pointer',
          backgroundColor: isV3 ? '#E1C88B' : 'transparent',
          color: isV3 ? '#0B0A09' : '#D9CCB8',
          fontWeight: 800,
          fontSize: '0.74rem',
          letterSpacing: '0.06em',
          transition: 'all 0.25s ease',
          '&:hover': {
            color: isV3 ? '#0B0A09' : '#F6F0E6',
          },
        }}
      >
        <AutoAwesomeIcon sx={{ fontSize: 15, color: isV3 ? '#0B0A09' : '#E1C88B' }} />
        <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase' }}>
          V3 Contemporary
        </Typography>
      </Box>
    </Box>
  );
};
