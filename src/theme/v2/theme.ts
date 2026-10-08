import { createTheme } from '@mui/material/styles';
import { v2Colors } from './colors';

export const v2Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: v2Colors.obsidian.black,
      contrastText: v2Colors.ivory.warm,
    },
    secondary: {
      main: v2Colors.maroon.burgundy,
      contrastText: v2Colors.ivory.warm,
    },
    background: {
      default: v2Colors.obsidian.black,
      paper: v2Colors.obsidian.surface,
    },
    text: {
      primary: v2Colors.text.primaryLight,
      secondary: v2Colors.text.secondaryLight,
    },
    divider: v2Colors.obsidian.border,
  },
  typography: {
    fontFamily: '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Cinzel", Georgia, serif',
      fontWeight: 800,
      letterSpacing: '0.04em',
      lineHeight: 1.05,
      color: v2Colors.ivory.warm,
    },
    h2: {
      fontFamily: '"Cinzel", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: 1.15,
      color: v2Colors.ivory.warm,
    },
    h3: {
      fontFamily: '"Cinzel", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: 1.25,
      color: v2Colors.ivory.warm,
    },
    h4: {
      fontFamily: '"Cinzel", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '0.02em',
      color: v2Colors.ivory.warm,
    },
    h5: {
      fontFamily: '"Cinzel", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: v2Colors.ivory.warm,
    },
    h6: {
      fontFamily: '"Cinzel", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: v2Colors.gold.champagne,
    },
    subtitle1: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.04em',
      color: v2Colors.text.secondaryLight,
    },
    subtitle2: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      color: v2Colors.gold.antique,
    },
    body1: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 400,
      lineHeight: 1.8,
      color: v2Colors.text.secondaryLight,
    },
    body2: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 400,
      lineHeight: 1.7,
      color: v2Colors.ivory.muted,
    },
    button: {
      fontFamily: '"Manrope", sans-serif',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 28px',
          transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          border: `1px solid ${v2Colors.gold.antique}`,
          backgroundColor: v2Colors.obsidian.surface,
        },
      },
    },
  },
});
