import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { themeV3 } from '../theme/v3/theme';
import { NavbarV3 } from '../components/v3/layout/NavbarV3';
import { HeroV3 } from '../components/v3/home/HeroV3';
import { LegacyV3 } from '../components/v3/home/LegacyV3';
import { FoodExperienceV3 } from '../components/v3/home/FoodExperienceV3';
import { ExperienceStorytellingV3 } from '../components/v3/home/ExperienceStorytellingV3';
import { RootedHeritageV3 } from '../components/v3/home/RootedHeritageV3';
import { BranchesV3 } from '../components/v3/home/BranchesV3';
import { GalleryV3 } from '../components/v3/home/GalleryV3';
import { RoyalInvitationV3 } from '../components/v3/home/RoyalInvitationV3';
import { FooterV3 } from '../components/v3/layout/FooterV3';

export const HomePageV3: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <ThemeProvider theme={themeV3}>
      <Box sx={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
        <NavbarV3 />
        <main>
          <HeroV3 />
          <LegacyV3 />
          <FoodExperienceV3 />
          <ExperienceStorytellingV3 />
          <RootedHeritageV3 />
          <BranchesV3 />
          <GalleryV3 />
          <RoyalInvitationV3 />
        </main>
        <FooterV3 />
      </Box>
    </ThemeProvider>
  );
};
