import React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { heritageColors } from '../../theme/colors';

interface HeritageFrameProps {
  children: React.ReactNode;
  mode?: 'light' | 'dark';
  padding?: number | string | object;
  sx?: SxProps<Theme>;
}

export const HeritageFrame: React.FC<HeritageFrameProps> = ({
  children,
  mode = 'light',
  padding = { xs: 2.5, sm: 3.5, md: 4.5 },
  sx,
}) => {
  const isDark = mode === 'dark';
  const borderColor = isDark
    ? 'rgba(176, 138, 69, 0.28)'
    : 'rgba(176, 138, 69, 0.35)';
  const cornerColor = isDark
    ? heritageColors.gold.highlight
    : heritageColors.gold.main;

  return (
    <Box
      sx={[
        {
          position: 'relative',
          border: `1px solid ${borderColor}`,
          p: padding,
          backgroundColor: isDark
            ? 'rgba(23, 18, 14, 0.75)'
            : 'rgba(252, 249, 244, 0.75)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.35s ease',
          '&:hover': {
            borderColor: isDark ? 'rgba(212, 176, 106, 0.5)' : 'rgba(176, 138, 69, 0.6)',
            boxShadow: isDark
              ? '0 12px 36px rgba(0, 0, 0, 0.45)'
              : '0 12px 36px rgba(74, 23, 24, 0.08)',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {/* Top Left Corner Bracket */}
      <Box
        sx={{
          position: 'absolute',
          top: -2,
          left: -2,
          width: 14,
          height: 14,
          borderTop: `2px solid ${cornerColor}`,
          borderLeft: `2px solid ${cornerColor}`,
          pointerEvents: 'none',
        }}
      />

      {/* Top Right Corner Bracket */}
      <Box
        sx={{
          position: 'absolute',
          top: -2,
          right: -2,
          width: 14,
          height: 14,
          borderTop: `2px solid ${cornerColor}`,
          borderRight: `2px solid ${cornerColor}`,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom Left Corner Bracket */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -2,
          left: -2,
          width: 14,
          height: 14,
          borderBottom: `2px solid ${cornerColor}`,
          borderLeft: `2px solid ${cornerColor}`,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom Right Corner Bracket */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -2,
          right: -2,
          width: 14,
          height: 14,
          borderBottom: `2px solid ${cornerColor}`,
          borderRight: `2px solid ${cornerColor}`,
          pointerEvents: 'none',
        }}
      />

      {children}
    </Box>
  );
};
