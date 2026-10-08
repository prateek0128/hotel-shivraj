/**
 * Hotel Shivraj Dhaba — Version 3 Color System
 * Creative Direction: "CONTEMPORARY ROYAL HOSPITALITY"
 * A balanced editorial palette alternating between dramatic Obsidian/Burgundy
 * and spacious Warm Ivory/Stone editorial spreads.
 */

export const v3Colors = {
  // Primary Dark Foundations
  obsidian: {
    pure: '#0B0A09', // Deep basalt obsidian
    surface: '#13110F', // Elevated dark surface
    card: '#1A1715', // Rich card backdrop
    border: 'rgba(185, 147, 79, 0.16)', // Hairline gold
    borderStrong: 'rgba(185, 147, 79, 0.35)',
  },

  // Royal Reds & Burgundy
  burgundy: {
    deep: '#421217', // Rich royal wine
    royal: '#5A1820', // Vibrant Maratha crimson
    dark: '#2A0B0E', // Shadow undertone
    glow: 'rgba(66, 18, 23, 0.45)',
  },

  // Architectural Golds & Champagne
  gold: {
    antique: '#B9934F', // Editorial antique gold
    champagne: '#E1C88B', // Bright champagne highlight
    pale: '#F2E2C2', // Softest gold tint
    hairline: 'rgba(185, 147, 79, 0.22)',
    subtle: 'rgba(185, 147, 79, 0.08)',
  },

  // Neutrals & Stone
  neutral: {
    ivory: '#F6F0E6', // Warm editorial ivory
    stone: '#D9CCB8', // Natural Deccan stone
    mutedBrown: '#6D5440', // Earthy Maratha soil
    ash: '#8E8272', // Mid-tone caption text
    offWhite: '#FAF7F2',
  },

  // Alternating Light Section Palette (for editorial contrast)
  lightSection: {
    bg: '#FAF6F0', // Ultra-premium editorial parchment
    surface: '#FFFFFF', // Crisp card surface
    border: 'rgba(109, 84, 64, 0.14)',
    textPrimary: '#151210', // Editorial near-black
    textSecondary: '#5C5248', // Warm charcoal subtitle
    accent: '#421217', // Deep burgundy accent
    stonePill: '#EFE8DE',
  },

  // Text Hierarchy
  text: {
    lightPrimary: '#F6F0E6',
    lightSecondary: '#D9CCB8',
    lightMuted: '#8E8272',
    darkPrimary: '#151210',
    darkSecondary: '#5C5248',
    darkMuted: '#7A6E63',
  },

  // Gradients
  gradients: {
    goldText: 'linear-gradient(135deg, #F2E2C2 0%, #E1C88B 50%, #B9934F 100%)',
    burgundyGlow: 'radial-gradient(circle at center, rgba(66, 18, 23, 0.6) 0%, rgba(11, 10, 9, 0.95) 75%)',
    editorialDark: 'linear-gradient(180deg, #0B0A09 0%, #151011 50%, #0B0A09 100%)',
    editorialLight: 'linear-gradient(180deg, #FAF6F0 0%, #F5EFE5 100%)',
  },
};
