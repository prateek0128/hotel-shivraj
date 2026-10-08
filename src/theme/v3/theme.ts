import { createTheme } from '@mui/material/styles';
import { v3Colors } from './colors';

export const themeV3 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: v3Colors.gold.antique,
      light: v3Colors.gold.champagne,
      dark: v3Colors.neutral.mutedBrown,
      contrastText: v3Colors.obsidian.pure,
    },
    secondary: {
      main: v3Colors.burgundy.deep,
      light: v3Colors.burgundy.royal,
      dark: v3Colors.burgundy.dark,
      contrastText: v3Colors.neutral.ivory,
    },
    background: {
      default: v3Colors.obsidian.pure,
      paper: v3Colors.obsidian.surface,
    },
    text: {
      primary: v3Colors.text.lightPrimary,
      secondary: v3Colors.text.lightSecondary,
    },
    divider: v3Colors.gold.hairline,
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
      fontWeight: 800,
      letterSpacing: '0.02em',
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
      fontWeight: 800,
      letterSpacing: '0.03em',
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: 1.15,
    },
    h4: {
      fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '0.04em',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '0.04em',
    },
    h6: {
      fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    subtitle1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontStyle: 'italic',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    subtitle2: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      fontSize: '0.78rem',
    },
    body1: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.8,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: '"Manrope", sans-serif',
      fontSize: '0.88rem',
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    button: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          padding: '12px 28px',
          fontWeight: 700,
          letterSpacing: '0.12em',
          transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: '"Manrope", sans-serif',
          fontWeight: 700,
          letterSpacing: '0.08em',
        },
      },
    },
  },
});
