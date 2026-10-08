import React from 'react';
import { Box } from '@mui/material';
import { heritageColors } from '../../theme/colors';

interface HeritageDividerProps {
  mode?: 'light' | 'dark';
  maxWidth?: number | string;
  spacing?: number;
}

export const HeritageDivider: React.FC<HeritageDividerProps> = ({
  mode = 'light',
  maxWidth = 180,
  spacing = 2,
}) => {
  const isDark = mode === 'dark';
  const lineColor = isDark
    ? 'rgba(176, 138, 69, 0.45)'
    : 'rgba(176, 138, 69, 0.35)';
  const diamondColor = heritageColors.gold.main;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
        width: '100%',
        maxWidth,
        mx: 'auto',
        my: spacing,
      }}
    >
      {/* Left tapered line */}
      <Box
        sx={{
          flex: 1,
          height: '1px',
          background: `linear-gradient(90deg, transparent 0%, ${lineColor} 100%)`,
        }}
      />

      {/* Central Maratha diamond motif */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <Box
          sx={{
            width: 4,
            height: 4,
            backgroundColor: diamondColor,
            transform: 'rotate(45deg)',
            opacity: 0.6,
          }}
        />
        <Box
          sx={{
            width: 7,
            height: 7,
            backgroundColor: diamondColor,
            transform: 'rotate(45deg)',
            boxShadow: `0 0 6px ${heritageColors.gold.glow}`,
          }}
        />
        <Box
          sx={{
            width: 4,
            height: 4,
            backgroundColor: diamondColor,
            transform: 'rotate(45deg)',
            opacity: 0.6,
          }}
        />
      </Box>

      {/* Right tapered line */}
      <Box
        sx={{
          flex: 1,
          height: '1px',
          background: `linear-gradient(90deg, ${lineColor} 0%, transparent 100%)`,
        }}
      />
    </Box>
  );
};
