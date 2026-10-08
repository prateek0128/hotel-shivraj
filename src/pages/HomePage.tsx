import React from 'react';
import { Box } from '@mui/material';
import { HeroSection } from '../components/home/HeroSection';
import { HeritageIntro } from '../components/home/HeritageIntro';
import { SignatureFood } from '../components/home/SignatureFood';
import { HeritageExperience } from '../components/home/HeritageExperience';
import { BranchesPreview } from '../components/home/BranchesPreview';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { FinalCTA } from '../components/home/FinalCTA';
import { SectionTransition } from '../components/common/SectionTransition';

export const HomePage: React.FC = () => {
  return (
    <Box component="main">
      {/* CHAPTER 1: THE FORT ARRIVAL */}
      <HeroSection />

      <SectionTransition type="dark-to-light" />

      {/* CHAPTER 2: THE SHIVRAJ LEGACY & KARAD ORIGINS */}
      <HeritageIntro />

      <SectionTransition type="light-to-dark" />

      {/* CHAPTER 3: CULINARY TREASURES & SIGNATURE AKKHA MASOOR */}
      <SignatureFood />

      <SectionTransition type="dark-to-light" />

      {/* CHAPTER 4: THE ROYAL MARATHA HOSPITALITY EXPERIENCE */}
      <HeritageExperience />

      <SectionTransition type="light-to-dark" />

      {/* CHAPTER 5: JOURNEY ACROSS MAHARASHTRA (BRANCHES) */}
      <BranchesPreview />

      {/* CHAPTER 6: VISUAL STORY (EDITORIAL GALLERY) */}
      <GalleryPreview />

      {/* CHAPTER 7: ROYAL INVITATION (FINAL CTA) */}
      <FinalCTA />
    </Box>
  );
};
