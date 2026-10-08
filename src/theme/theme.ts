import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { heritageColors } from './colors';
import { typographyTokens } from './typography';

let baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: heritageColors.charcoal.main,
      dark: heritageColors.charcoal.darkest,
      light: heritageColors.charcoal.surface,
      contrastText: heritageColors.parchment.light,
    },
    secondary: {
      main: heritageColors.maroon.main,
      dark: heritageColors.maroon.deep,
      light: heritageColors.maroon.rich,
      contrastText: heritageColors.parchment.light,
    },
    background: {
      default: heritageColors.parchment.light,
      paper: heritageColors.parchment.pure,
    },
    text: {
      primary: heritageColors.text.primaryDark,
      secondary: heritageColors.text.secondaryDark,
    },
    divider: heritageColors.gold.border,
  },
  typography: {
    fontFamily: typographyTokens.fontFamilySans,
    h1: {
      fontFamily: typographyTokens.fontFamilySerif,
      fontWeight: 700,
      letterSpacing: '0.02em',
      lineHeight: 1.15,
      color: heritageColors.charcoal.main,
    },
    h2: {
      fontFamily: typographyTokens.fontFamilySerif,
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: 1.25,
      color: heritageColors.charcoal.main,
    },
    h3: {
      fontFamily: typographyTokens.fontFamilySerif,
      fontWeight: 600,
      letterSpacing: '0.02em',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: typographyTokens.fontFamilySerif,
      fontWeight: 600,
      letterSpacing: '0.02em',
      lineHeight: 1.35,
    },
    h5: {
      fontFamily: typographyTokens.fontFamilyEditorial,
      fontWeight: 600,
      letterSpacing: '0.01em',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: typographyTokens.fontFamilySans,
      fontWeight: 600,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      fontSize: '0.9rem',
    },
    subtitle1: {
      fontFamily: typographyTokens.fontFamilyEditorial,
      fontSize: '1.25rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    subtitle2: {
      fontFamily: typographyTokens.fontFamilySans,
      fontSize: '0.8rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: heritageColors.gold.dark,
    },
    body1: {
      fontFamily: typographyTokens.fontFamilySans,
      fontSize: '1rem',
      lineHeight: 1.7,
      color: heritageColors.text.secondaryDark,
    },
    body2: {
      fontFamily: typographyTokens.fontFamilySans,
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: heritageColors.text.mutedDark,
    },
    button: {
      fontFamily: typographyTokens.fontFamilySans,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontSize: '0.875rem',
    },
  },
  shape: {
    borderRadius: 2,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: heritageColors.parchment.light,
          color: heritageColors.text.primaryDark,
          overflowX: 'hidden',
          scrollbarColor: `${heritageColors.gold.main} ${heritageColors.charcoal.main}`,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: heritageColors.charcoal.main,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: heritageColors.gold.main,
            borderRadius: '2px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 28px',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          position: 'relative',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: heritageColors.charcoal.main,
            color: heritageColors.gold.pale,
            border: `1px solid ${heritageColors.gold.dark}`,
            '&:hover': {
              backgroundColor: heritageColors.maroon.main,
              borderColor: heritageColors.gold.light,
              color: '#FFFFFF',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(74, 23, 24, 0.35)',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: heritageColors.maroon.main,
            color: heritageColors.parchment.pure,
            border: `1px solid ${heritageColors.gold.main}`,
            '&:hover': {
              backgroundColor: heritageColors.maroon.rich,
              borderColor: heritageColors.gold.highlight,
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 24px rgba(74, 23, 24, 0.4)',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderColor: heritageColors.gold.main,
            color: heritageColors.gold.main,
            '&:hover': {
              borderColor: heritageColors.gold.highlight,
              backgroundColor: 'rgba(176, 138, 69, 0.08)',
              color: heritageColors.gold.highlight,
              transform: 'translateY(-2px)',
            },
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme, {
  factor: 2.5,
});
