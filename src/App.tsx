import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme/theme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { CustomCursor } from './components/common/CustomCursor';
import { VersionSwitcher } from './components/common/VersionSwitcher';
import { HomePage } from './pages/HomePage';
import { HomePageV2 } from './pages/HomePageV2';
import { HomePageV3 } from './pages/HomePageV3';

// Version 1 Container (Preserved exactly as is)
const Version1Page: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <HomePage />
    <Footer />
  </ThemeProvider>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ScrollProgress />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Version1Page />} />
        <Route path="/v1" element={<Version1Page />} />
        <Route path="/version-1" element={<Version1Page />} />
        <Route path="/v2" element={<HomePageV2 />} />
        <Route path="/version-2" element={<HomePageV2 />} />
        <Route path="/v3" element={<HomePageV3 />} />
        <Route path="/version-3" element={<HomePageV3 />} />
        <Route path="*" element={<Version1Page />} />
      </Routes>
      <VersionSwitcher />
    </BrowserRouter>
  );
};

export default App;
