import React from 'react';
import { Box } from '@mui/material';
import { heritageColors } from '../../theme/colors';

interface SectionTransitionProps {
  type: 'dark-to-light' | 'light-to-dark';
  height?: { xs: number; md: number };
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  type,
  height = { xs: 40, md: 60 },
}) => {
  const isDarkToLight = type === 'dark-to-light';

  return (
    <Box
      sx={{
        width: '100%',
        height,
        position: 'relative',
        zIndex: 3,
        mt: { xs: -2, md: -3 },
        mb: { xs: -2, md: -3 },
        pointerEvents: 'none',
        background: isDarkToLight
          ? `linear-gradient(180deg, ${heritageColors.charcoal.main} 0%, rgba(244, 235, 221, 0.4) 60%, ${heritageColors.parchment.main} 100%)`
          : `linear-gradient(180deg, ${heritageColors.parchment.main} 0%, rgba(23, 18, 14, 0.5) 60%, ${heritageColors.charcoal.main} 100%)`,
      }}
    >
      {/* Centered delicate ornamental jewel */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          opacity: 0.75,
        }}
      >
        <Box
          sx={{
            width: { xs: 30, sm: 60 },
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${heritageColors.gold.main})`,
          }}
        />
        <Box
          sx={{
            width: 7,
            height: 7,
            backgroundColor: heritageColors.gold.highlight,
            transform: 'rotate(45deg)',
            border: `1px solid ${heritageColors.charcoal.main}`,
            boxShadow: '0 0 4px rgba(176, 138, 69, 0.5)',
          }}
        />
        <Box
          sx={{
            width: { xs: 30, sm: 60 },
            height: '1px',
            background: `linear-gradient(90deg, ${heritageColors.gold.main}, transparent)`,
          }}
        />
      </Box>
    </Box>
  );
};
