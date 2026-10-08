import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Button,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { v3Colors } from '../../../theme/v3/colors';

const v3NavItems = [
  { label: 'Home', href: '#v3-hero' },
  { label: 'Legacy', href: '#v3-legacy' },
  { label: 'Menu', href: '#v3-menu' },
  { label: 'Experience', href: '#v3-experience' },
  { label: 'Heritage', href: '#v3-heritage' },
  { label: 'Branches', href: '#v3-branches' },
  { label: 'Gallery', href: '#v3-gallery' },
  { label: 'Contact', href: '#v3-contact' },
];

export const NavbarV3: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('#v3-hero');

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        '#v3-hero',
        '#v3-legacy',
        '#v3-menu',
        '#v3-experience',
        '#v3-heritage',
        '#v3-branches',
        '#v3-gallery',
        '#v3-contact',
      ];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el && (el as HTMLElement).offsetTop <= scrollPos) {
          setActiveHash(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 10 : 0}
      sx={{
        backgroundColor: scrolled
          ? 'rgba(11, 10, 9, 0.94)'
          : 'rgba(11, 10, 9, 0.35)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${
          scrolled ? 'rgba(185, 147, 79, 0.22)' : 'rgba(185, 147, 79, 0.08)'
        }`,
        boxShadow: scrolled ? '0 16px 40px rgba(0, 0, 0, 0.8)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        zIndex: 1200,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 72, md: scrolled ? 74 : 88 },
            py: { xs: 1, md: scrolled ? 0.6 : 1.4 },
            transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          {/* 1. LEFT: Contemporary Editorial Brand Lockup */}
          <Box
            component="a"
            href="#v3-hero"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: 1.8,
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/images/shivraj_logo.png"
              alt="Hotel Shivraj Dhaba Logo"
              sx={{
                height: scrolled ? 38 : 46,
                width: 'auto',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
                transition: 'height 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  color: v3Colors.gold.antique,
                  fontSize: '0.62rem',
                  letterSpacing: '0.26em',
                  lineHeight: 1,
                  display: 'block',
                  fontWeight: 800,
                }}
              >
                CONTEMPORARY ROYAL • KARAD
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: '"Bodoni Moda", "Cinzel", Georgia, serif',
                  fontWeight: 900,
                  fontSize: scrolled ? '1.1rem' : '1.25rem',
                  letterSpacing: '0.04em',
                  color: v3Colors.neutral.ivory,
                  lineHeight: 1.15,
                  mt: 0.2,
                  whiteSpace: 'nowrap',
                  transition: 'font-size 0.35s ease',
                }}
              >
                HOTEL SHIVRAJ
              </Typography>
            </Box>
          </Box>

          {/* 2. CENTER: Clean Spacious Editorial Navigation */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', lg: 'flex' },
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: { lg: 3.8, xl: 4.8 },
            }}
          >
            {v3NavItems.map((item) => {
              const isActive = activeHash === item.href;

              return (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    color: isActive
                      ? v3Colors.gold.champagne
                      : 'rgba(246, 240, 230, 0.82)',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    py: 0.8,
                    whiteSpace: 'nowrap',
                    transition: 'color 0.25s ease, transform 0.25s ease',
                    '&:hover': {
                      color: v3Colors.gold.champagne,
                      transform: 'translateY(-1px)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: isActive ? '100%' : '0%',
                      height: '1.5px',
                      backgroundColor: v3Colors.gold.antique,
                      transition: 'all 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
          </Box>

          {/* 3. RIGHT: Focused High-End CTA */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              flexShrink: 0,
            }}
          >
            <Button
              component="a"
              href="#v3-branches"
              endIcon={
                <LocationOnOutlinedIcon
                  className="v3-nav-icon"
                  sx={{
                    fontSize: '1.1rem !important',
                    transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
              }
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                height: 42,
                px: 2.8,
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                backgroundColor: v3Colors.gold.antique,
                color: v3Colors.obsidian.pure,
                boxShadow: '0 4px 16px rgba(185, 147, 79, 0.3)',
                '&:hover': {
                  backgroundColor: v3Colors.gold.champagne,
                  transform: 'scale(1.02)',
                  boxShadow: '0 8px 24px rgba(185, 147, 79, 0.5)',
                  '& .v3-nav-icon': {
                    transform: 'translateX(3px)',
                  },
                },
              }}
            >
              Find a Branch
            </Button>

            {/* Mobile Hamburger Toggle */}
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="open navigation menu"
              sx={{
                display: { lg: 'none' },
                color: v3Colors.neutral.ivory,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${v3Colors.gold.hairline}`,
                p: 1.2,
                '&:hover': {
                  backgroundColor: 'rgba(185, 147, 79, 0.15)',
                  color: v3Colors.gold.champagne,
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Responsive Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '84vw', sm: 380 },
              backgroundColor: v3Colors.obsidian.surface,
              backgroundImage: 'radial-gradient(circle at top right, rgba(66,18,23,0.5), transparent 70%)',
              borderLeft: `1px solid ${v3Colors.gold.hairline}`,
              p: 3.5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            },
          },
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
              <Box component="img" src="/images/shivraj_logo.png" alt="Hotel Shivraj" sx={{ height: 38 }} />
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: '"Bodoni Moda", serif',
                  fontWeight: 800,
                  color: v3Colors.neutral.ivory,
                  fontSize: '1rem',
                }}
              >
                Hotel Shivraj
              </Typography>
            </Box>
            <IconButton onClick={handleDrawerToggle} aria-label="close navigation" sx={{ color: v3Colors.neutral.ivory }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ py: 1 }}>
            {v3NavItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    py: 1.4,
                    px: 2,
                    borderLeft: activeHash === item.href ? `3px solid ${v3Colors.gold.antique}` : '3px solid transparent',
                    backgroundColor: activeHash === item.href ? 'rgba(185, 147, 79, 0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(185, 147, 79, 0.12)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Bodoni Moda", serif',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: activeHash === item.href ? v3Colors.gold.champagne : v3Colors.neutral.ivory,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ pt: 3, borderTop: `1px solid ${v3Colors.gold.hairline}` }}>
          <Button
            component="a"
            href="#v3-branches"
            fullWidth
            onClick={() => setMobileOpen(false)}
            endIcon={<ArrowForwardIcon />}
            sx={{
              py: 1.6,
              backgroundColor: v3Colors.gold.antique,
              color: v3Colors.obsidian.pure,
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.12em',
              mb: 2,
              '&:hover': {
                backgroundColor: v3Colors.gold.champagne,
              },
            }}
          >
            Locate Nearest Branch
          </Button>
          <Typography variant="caption" sx={{ color: v3Colors.neutral.ash, textAlign: 'center', display: 'block' }}>
            24x7 Highway Free Ambulance: 9822533444
          </Typography>
        </Box>
      </Drawer>
    </AppBar>
  );
};
