import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { v2Theme } from '../theme/v2/theme';
import { NavbarV2 } from '../components/v2/layout/NavbarV2';
import { HeroV2 } from '../components/v2/home/HeroV2';
import { LegacyV2 } from '../components/v2/home/LegacyV2';
import { RoyalKitchenV2 } from '../components/v2/home/RoyalKitchenV2';
import { MaharajaExperienceV2 } from '../components/v2/home/MaharajaExperienceV2';
import { FortHeritageV2 } from '../components/v2/home/FortHeritageV2';
import { BranchesV2 } from '../components/v2/home/BranchesV2';
import { GalleryV2 } from '../components/v2/home/GalleryV2';
import { RoyalInvitationV2 } from '../components/v2/home/RoyalInvitationV2';
import { FooterV2 } from '../components/v2/layout/FooterV2';

export const HomePageV2: React.FC = () => {
  return (
    <ThemeProvider theme={v2Theme}>
      <Box
        component="div"
        sx={{
          backgroundColor: '#0C0A09',
          color: '#F5EFE4',
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <NavbarV2 />
        <Box component="main">
          {/* Chapter 1: The Royal Court & Split-Screen Hero */}
          <HeroV2 />

          {/* Chapter 2: The Founding Chronicles */}
          <LegacyV2 />

          {/* Chapter 3: The Royal Kitchen (Food as Hero) */}
          <RoyalKitchenV2 />

          {/* Chapter 4: The Maharaja Experience */}
          <MaharajaExperienceV2 />

          {/* Chapter 5: Fort & Deccan Architecture */}
          <FortHeritageV2 />

          {/* Chapter 6: The Royal House Across Maharashtra */}
          <BranchesV2 />

          {/* Chapter 7: The Curated Gallery */}
          <GalleryV2 />

          {/* Chapter 8: Royal Invitation (Final CTA) */}
          <RoyalInvitationV2 />
        </Box>
        <FooterV2 />
      </Box>
    </ThemeProvider>
  );
};
