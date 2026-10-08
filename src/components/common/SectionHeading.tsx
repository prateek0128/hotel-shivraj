import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { heritageColors } from '../../theme/colors';
import { HeritageDivider } from './HeritageDivider';

interface SectionHeadingProps {
  eyebrow: string;
  marathiEyebrow?: string;
  title: string;
  marathiTitle?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  mode?: 'light' | 'dark';
  hideDivider?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  marathiEyebrow,
  title,
  marathiTitle,
  subtitle,
  align = 'center',
  mode = 'light',
  hideDivider = false,
}) => {
  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: align === 'center' ? 780 : '100%',
        mx: align === 'center' ? 'auto' : 0,
        mb: { xs: 4, md: 6 },
      }}
    >
      {/* Eyebrow */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          alignItems: 'center',
          justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
          mb: 1.5,
        }}
      >
        <Box
          sx={{
            width: 24,
            height: '1px',
            backgroundColor: heritageColors.gold.main,
            opacity: 0.7,
            display: { xs: 'none', sm: 'block' },
          }}
        />
        <Typography
          variant="subtitle2"
          component="span"
          sx={{
            color: isDark ? heritageColors.gold.highlight : heritageColors.gold.dark,
            letterSpacing: '0.18em',
            fontSize: { xs: '0.72rem', sm: '0.8rem' },
            fontWeight: 700,
          }}
        >
          {eyebrow}
          {marathiEyebrow && (
            <Box
              component="span"
              sx={{
                ml: 1,
                opacity: 0.85,
                fontWeight: 500,
                color: isDark ? heritageColors.parchment.stone : heritageColors.maroon.main,
              }}
            >
              • {marathiEyebrow}
            </Box>
          )}
        </Typography>
        <Box
          sx={{
            width: 24,
            height: '1px',
            backgroundColor: heritageColors.gold.main,
            opacity: 0.7,
            display: { xs: 'none', sm: 'block' },
          }}
        />
      </Stack>

      {/* Main Title */}
      <Typography
        variant="h2"
        sx={{
          color: isDark ? heritageColors.parchment.pure : heritageColors.charcoal.main,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3.15rem' },
          fontWeight: 700,
          lineHeight: 1.2,
          mb: marathiTitle ? 1 : 1.5,
        }}
      >
        {title}
      </Typography>

      {/* Optional Marathi Sub-title */}
      {marathiTitle && (
        <Typography
          component="p"
          sx={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontStyle: 'italic',
            fontSize: { xs: '1.25rem', sm: '1.45rem', md: '1.65rem' },
            color: isDark ? heritageColors.gold.pale : heritageColors.maroon.rich,
            mb: 1.5,
            fontWeight: 600,
            letterSpacing: '0.02em',
          }}
        >
          {marathiTitle}
        </Typography>
      )}

      {/* Divider */}
      {!hideDivider && (
        <Box sx={{ my: 1.5 }}>
          <HeritageDivider mode={mode} maxWidth={160} />
        </Box>
      )}

      {/* Subtitle / Description */}
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: isDark ? heritageColors.text.secondaryLight : heritageColors.text.secondaryDark,
            fontSize: { xs: '0.95rem', sm: '1.05rem' },
            maxWidth: 680,
            mx: align === 'center' ? 'auto' : 0,
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};
