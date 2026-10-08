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
  Stack,
  useScrollTrigger,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { heritageColors } from '../../theme/colors';
import { navigationItems, contactInfo } from '../../data/navigation';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('#hero');

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // Track active section on scroll for subtle indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#hero', '#heritage-intro', '#signature-food', '#maratha-experience', '#branches', '#gallery', '#contact'];
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
      elevation={scrolled ? 6 : 0}
      sx={{
        backgroundColor: scrolled
          ? 'rgba(23, 18, 14, 0.96)'
          : 'rgba(23, 18, 14, 0.42)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${
          scrolled ? 'rgba(176, 138, 69, 0.28)' : 'rgba(176, 138, 69, 0.12)'
        }`,
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.55)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
        zIndex: 1200,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 70, md: scrolled ? 76 : 88 },
            py: { xs: 1, md: scrolled ? 0.8 : 1.4 },
            transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 1.5, md: 2, lg: 3 },
          }}
        >
          {/* ========================================================= */}
          {/* 1. LEFT: Compact Logo & Heritage Branding (~18-20% width) */}
          {/* ========================================================= */}
          <Box
            component="a"
            href="#hero"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: 1.4,
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/images/shivraj_logo.png"
              alt="Hotel Shivraj Logo"
              sx={{
                height: scrolled ? { xs: 38, md: 40 } : { xs: 42, md: 46 },
                width: 'auto',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.45))',
                transition: 'all 0.3s ease',
              }}
            />
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  color: heritageColors.gold.light,
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  lineHeight: 1,
                  display: 'block',
                  fontWeight: 600,
                }}
              >
                कराड • ESTD. KARAD
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  fontWeight: 800,
                  fontSize: scrolled
                    ? { xs: '1rem', md: '1.15rem' }
                    : { xs: '1.05rem', md: '1.25rem' },
                  letterSpacing: '0.04em',
                  color: heritageColors.parchment.pure,
                  lineHeight: 1.15,
                  mt: 0.2,
                  transition: 'font-size 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                HOTEL SHIVRAJ
              </Typography>
            </Box>
          </Box>

          {/* ========================================================= */}
          {/* 2. CENTER: Clean, Spacious Single-Line Nav (~60-65% width) */}
          {/* ========================================================= */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', lg: 'flex' },
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: { lg: 3.2, xl: 4.2 },
            }}
          >
            {navigationItems.map((item) => {
              const isActive = activeHash === item.href;

              return (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    color: isActive
                      ? heritageColors.gold.highlight
                      : heritageColors.parchment.light,
                    textDecoration: 'none',
                    fontSize: '0.84rem',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    py: 0.8,
                    whiteSpace: 'nowrap',
                    transition: 'color 0.22s ease',
                    '&:hover': {
                      color: heritageColors.gold.highlight,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: isActive ? '100%' : '0%',
                      height: '1.5px',
                      backgroundColor: heritageColors.gold.highlight,
                      transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
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

          {/* ========================================================= */}
          {/* 3. RIGHT: Compact Find a Branch CTA (~12-15% width)       */}
          {/* ========================================================= */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              flexShrink: 0,
            }}
          >
            {/* Desktop CTA Button */}
            <Button
              component="a"
              href="#branches"
              endIcon={
                <LocationOnOutlinedIcon
                  className="nav-cta-icon"
                  sx={{
                    fontSize: '1.1rem !important',
                    transition: 'transform 0.25s cubic-bezier(0.2, 0, 0, 1)',
                  }}
                />
              }
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                width: { sm: 160, md: 175 },
                height: 40,
                px: 2.2,
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                backgroundColor: heritageColors.gold.main,
                color: heritageColors.charcoal.darkest,
                borderRadius: 0,
                border: `1px solid ${heritageColors.gold.highlight}`,
                boxShadow: '0 4px 14px rgba(176, 138, 69, 0.22)',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                '&:hover': {
                  backgroundColor: heritageColors.gold.highlight,
                  boxShadow: '0 6px 18px rgba(176, 138, 69, 0.4)',
                  transform: 'translateY(-1px)',
                  '& .nav-cta-icon': {
                    transform: 'translateX(3px)',
                  },
                },
              }}
            >
              Find a Branch
            </Button>

            {/* Mobile / Tablet Menu Icon (< lg) */}
            <IconButton
              color="inherit"
              aria-label="open navigation drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: 'flex', lg: 'none' },
                color: heritageColors.gold.pale,
                border: `1px solid ${heritageColors.gold.border}`,
                p: 0.8,
                borderRadius: 0,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: heritageColors.gold.highlight,
                  borderColor: heritageColors.gold.highlight,
                  backgroundColor: 'rgba(176, 138, 69, 0.1)',
                },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* ========================================================= */}
      {/* 4. MOBILE DRAWER: Spacious, Organized with Staggered Entrance */}
      {/* ========================================================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '85%', sm: 340 },
              backgroundColor: heritageColors.charcoal.main,
              backgroundImage: 'radial-gradient(circle at top right, rgba(74,23,24,0.45), transparent 70%)',
              borderLeft: `1px solid ${heritageColors.gold.border}`,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            },
          },
        }}
      >
        <Box>
          {/* Drawer Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
              <Box
                component="img"
                src="/images/shivraj_logo.png"
                alt="Logo"
                sx={{ height: 38, width: 'auto' }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  color: heritageColors.gold.pale,
                  fontSize: '0.98rem',
                  letterSpacing: '0.05em',
                  fontWeight: 700,
                }}
              >
                HOTEL SHIVRAJ
              </Typography>
            </Box>
            <IconButton
              onClick={handleDrawerToggle}
              size="small"
              sx={{ color: heritageColors.gold.pale, border: `1px solid ${heritageColors.gold.border}`, borderRadius: 0 }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box
            sx={{
              height: '1px',
              background: `linear-gradient(90deg, ${heritageColors.gold.border}, transparent)`,
              mb: 2,
            }}
          />

          {/* Staggered Navigation List */}
          <List sx={{ pt: 0.5 }}>
            <AnimatePresence>
              {mobileOpen &&
                navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.04, duration: 0.25 }}
                  >
                    <ListItem disablePadding sx={{ mb: 0.8 }}>
                      <ListItemButton
                        component="a"
                        href={item.href}
                        onClick={handleDrawerToggle}
                        sx={{
                          py: 1.1,
                          px: 1.5,
                          borderBottom: '1px solid rgba(176, 138, 69, 0.1)',
                          '&:hover': {
                            backgroundColor: 'rgba(176, 138, 69, 0.1)',
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: activeHash === item.href ? heritageColors.gold.highlight : heritageColors.parchment.pure,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {item.label}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                ))}
            </AnimatePresence>
          </List>
        </Box>

        {/* Drawer Footer Actions */}
        <Box sx={{ pt: 2, borderTop: `1px solid ${heritageColors.gold.border}` }}>
          <Stack spacing={1.5}>
            <Button
              component="a"
              href="#branches"
              fullWidth
              onClick={handleDrawerToggle}
              endIcon={<LocationOnOutlinedIcon />}
              sx={{
                py: 1.2,
                backgroundColor: heritageColors.gold.main,
                color: heritageColors.charcoal.darkest,
                fontWeight: 700,
                fontSize: '0.82rem',
                letterSpacing: '0.08em',
                borderRadius: 0,
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundColor: heritageColors.gold.highlight,
                },
              }}
            >
              Find a Branch
            </Button>

            {/* Compact Ambulance Helpline item inside mobile drawer */}
            <Box
              component="a"
              href={`tel:${contactInfo.ambulancePhone}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                py: 1,
                border: '1px solid rgba(176,138,69,0.3)',
                backgroundColor: 'rgba(74, 23, 24, 0.45)',
                color: heritageColors.gold.pale,
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              <MedicalServicesIcon sx={{ fontSize: 16, color: heritageColors.gold.highlight }} />
              24x7 Ambulance: {contactInfo.ambulancePhone}
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
};
