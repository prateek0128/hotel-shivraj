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
import { v2Colors } from '../../../theme/v2/colors';
import { contactInfo } from '../../../data/navigation';

const v2NavItems = [
  { label: 'Home', href: '#v2-hero' },
  { label: 'Legacy', href: '#v2-legacy' },
  { label: 'Kitchen', href: '#v2-kitchen' },
  { label: 'Experience', href: '#v2-experience' },
  { label: 'Forts', href: '#v2-forts' },
  { label: 'Branches', href: '#v2-branches' },
  { label: 'Gallery', href: '#v2-gallery' },
];

export const NavbarV2: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('#v2-hero');

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#v2-hero', '#v2-legacy', '#v2-kitchen', '#v2-experience', '#v2-forts', '#v2-branches', '#v2-gallery'];
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
      elevation={scrolled ? 8 : 0}
      sx={{
        backgroundColor: scrolled
          ? 'rgba(12, 10, 9, 0.96)'
          : 'rgba(12, 10, 9, 0.4)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${
          scrolled ? 'rgba(195, 154, 82, 0.25)' : 'rgba(195, 154, 82, 0.1)'
        }`,
        boxShadow: scrolled ? '0 12px 32px rgba(0, 0, 0, 0.7)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.2, 0, 0, 1)',
        zIndex: 1200,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 72, md: scrolled ? 76 : 90 },
            py: { xs: 1, md: scrolled ? 0.8 : 1.5 },
            transition: 'all 0.35s cubic-bezier(0.2, 0, 0, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          {/* 1. LEFT: Modern Maharaja Logo Lockup */}
          <Box
            component="a"
            href="#v2-hero"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: 1.6,
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/images/shivraj_logo.png"
              alt="Hotel Shivraj Logo"
              sx={{
                height: scrolled ? 38 : 46,
                width: 'auto',
                filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.6))',
                transition: 'all 0.3s ease',
              }}
            />
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  color: v2Colors.gold.antique,
                  fontSize: '0.62rem',
                  letterSpacing: '0.24em',
                  lineHeight: 1,
                  display: 'block',
                  fontWeight: 700,
                }}
              >
                MODERN MAHARAJA • KARAD
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: '"Cinzel", Georgia, serif',
                  fontWeight: 900,
                  fontSize: scrolled ? '1.05rem' : '1.2rem',
                  letterSpacing: '0.06em',
                  color: v2Colors.ivory.warm,
                  lineHeight: 1.15,
                  mt: 0.3,
                  whiteSpace: 'nowrap',
                }}
              >
                HOTEL SHIVRAJ
              </Typography>
            </Box>
          </Box>

          {/* 2. CENTER: Clean Single-Line Editorial Nav */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', lg: 'flex' },
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: { lg: 3.5, xl: 4.5 },
            }}
          >
            {v2NavItems.map((item) => {
              const isActive = activeHash === item.href;

              return (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    color: isActive
                      ? v2Colors.gold.champagne
                      : 'rgba(245, 239, 228, 0.85)',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontFamily: '"Manrope", sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    py: 0.8,
                    whiteSpace: 'nowrap',
                    transition: 'color 0.25s ease',
                    '&:hover': {
                      color: v2Colors.gold.champagne,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: isActive ? '100%' : '0%',
                      height: '1.5px',
                      backgroundColor: v2Colors.gold.antique,
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

          {/* 3. RIGHT: Compact Royal Button */}
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
              href="#v2-branches"
              endIcon={
                <LocationOnOutlinedIcon
                  className="v2-nav-cta-icon"
                  sx={{
                    fontSize: '1.1rem !important',
                    transition: 'transform 0.25s cubic-bezier(0.2, 0, 0, 1)',
                  }}
                />
              }
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                width: { sm: 165, md: 180 },
                height: 42,
                px: 2.5,
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                backgroundColor: v2Colors.gold.antique,
                color: v2Colors.obsidian.black,
                borderRadius: 0,
                border: `1px solid ${v2Colors.gold.champagne}`,
                boxShadow: '0 4px 16px rgba(195, 154, 82, 0.25)',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
                '&:hover': {
                  backgroundColor: v2Colors.gold.champagne,
                  boxShadow: '0 6px 22px rgba(195, 154, 82, 0.45)',
                  transform: 'translateY(-1px)',
                  '& .v2-nav-cta-icon': {
                    transform: 'translateX(3px)',
                  },
                },
              }}
            >
              Find a Branch
            </Button>

            {/* Mobile / Tablet Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open v2 navigation drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: 'flex', lg: 'none' },
                color: v2Colors.gold.champagne,
                border: `1px solid ${v2Colors.gold.hairline}`,
                p: 0.8,
                borderRadius: 0,
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: v2Colors.gold.antique,
                  backgroundColor: 'rgba(195, 154, 82, 0.1)',
                },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* 4. MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '85%', sm: 340 },
              backgroundColor: v2Colors.obsidian.black,
              backgroundImage: 'radial-gradient(circle at top right, rgba(82,22,28,0.5), transparent 75%)',
              borderLeft: `1px solid ${v2Colors.gold.hairline}`,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            },
          },
        }}
      >
        <Box>
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
                  color: v2Colors.gold.champagne,
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                  fontWeight: 800,
                }}
              >
                HOTEL SHIVRAJ
              </Typography>
            </Box>
            <IconButton
              onClick={handleDrawerToggle}
              size="small"
              sx={{ color: v2Colors.gold.antique, border: `1px solid ${v2Colors.gold.hairline}`, borderRadius: 0 }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box
            sx={{
              height: '1px',
              background: `linear-gradient(90deg, ${v2Colors.gold.antique}, transparent)`,
              mb: 2,
            }}
          />

          <List sx={{ pt: 0.5 }}>
            <AnimatePresence>
              {mobileOpen &&
                v2NavItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
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
                          borderBottom: '1px solid rgba(195, 154, 82, 0.1)',
                          '&:hover': {
                            backgroundColor: 'rgba(195, 154, 82, 0.1)',
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Manrope", sans-serif',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            color: activeHash === item.href ? v2Colors.gold.champagne : v2Colors.ivory.warm,
                            letterSpacing: '0.1em',
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

        <Box sx={{ pt: 2, borderTop: `1px solid ${v2Colors.gold.hairline}` }}>
          <Stack spacing={1.5}>
            <Button
              component="a"
              href="#v2-branches"
              fullWidth
              onClick={handleDrawerToggle}
              endIcon={<LocationOnOutlinedIcon />}
              sx={{
                py: 1.2,
                backgroundColor: v2Colors.gold.antique,
                color: v2Colors.obsidian.black,
                fontWeight: 700,
                fontSize: '0.82rem',
                letterSpacing: '0.1em',
                borderRadius: 0,
                textTransform: 'uppercase',
                '&:hover': {
                  backgroundColor: v2Colors.gold.champagne,
                },
              }}
            >
              Find a Branch
            </Button>

            <Box
              component="a"
              href={`tel:${contactInfo.ambulancePhone}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                py: 1,
                border: `1px solid ${v2Colors.gold.hairline}`,
                backgroundColor: 'rgba(82, 22, 28, 0.45)',
                color: v2Colors.gold.champagne,
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              <MedicalServicesIcon sx={{ fontSize: 16, color: v2Colors.gold.champagne }} />
              24x7 Ambulance: {contactInfo.ambulancePhone}
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
};
