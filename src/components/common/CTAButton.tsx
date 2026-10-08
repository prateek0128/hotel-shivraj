import React from 'react';
import { Button, Box } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { motion } from 'framer-motion';
import { heritageColors } from '../../theme/colors';

interface CTAButtonProps extends Omit<ButtonProps, 'variant'> {
  variantType?: 'gold-filled' | 'gold-outlined' | 'maroon-filled';
  icon?: React.ReactNode;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variantType = 'gold-filled',
  icon,
  children,
  sx,
  ...props
}) => {
  let customStyles = {};

  if (variantType === 'gold-filled') {
    customStyles = {
      backgroundColor: heritageColors.gold.main,
      color: heritageColors.charcoal.darkest,
      border: `1px solid ${heritageColors.gold.highlight}`,
      fontWeight: 700,
      boxShadow: '0 4px 14px rgba(176, 138, 69, 0.25)',
      '&:hover': {
        backgroundColor: heritageColors.gold.highlight,
        color: heritageColors.charcoal.darkest,
        boxShadow: `0 6px 20px rgba(176, 138, 69, 0.45)`,
        transform: 'translateY(-2px)',
      },
    };
  } else if (variantType === 'gold-outlined') {
    customStyles = {
      backgroundColor: 'rgba(23, 18, 14, 0.35)',
      color: heritageColors.gold.pale,
      border: `1px solid ${heritageColors.gold.main}`,
      backdropFilter: 'blur(8px)',
      '&:hover': {
        backgroundColor: 'rgba(176, 138, 69, 0.18)',
        borderColor: heritageColors.gold.highlight,
        color: '#FFFFFF',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 16px rgba(176, 138, 69, 0.2)',
      },
    };
  } else if (variantType === 'maroon-filled') {
    customStyles = {
      backgroundColor: heritageColors.maroon.main,
      color: heritageColors.parchment.pure,
      border: `1px solid ${heritageColors.gold.main}`,
      boxShadow: '0 4px 16px rgba(74, 23, 24, 0.3)',
      '&:hover': {
        backgroundColor: heritageColors.maroon.rich,
        borderColor: heritageColors.gold.highlight,
        boxShadow: '0 8px 24px rgba(74, 23, 24, 0.5)',
        transform: 'translateY(-2px)',
      },
    };
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      style={{ display: 'inline-flex' }}
    >
      <Button
        endIcon={
          icon ? (
            <Box
              component="span"
              className="cta-icon-wrapper"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'transform 0.25s cubic-bezier(0.2, 0, 0, 1)',
              }}
            >
              {icon}
            </Box>
          ) : undefined
        }
        sx={{
          letterSpacing: '0.1em',
          px: { xs: 3, sm: 3.8 },
          py: { xs: 1.25, sm: 1.5 },
          fontSize: { xs: '0.8rem', sm: '0.875rem' },
          borderRadius: 0,
          textTransform: 'uppercase',
          transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
          '&:hover .cta-icon-wrapper': {
            transform: 'translateX(4px)',
          },
          ...customStyles,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};
