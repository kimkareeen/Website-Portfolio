/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { ClientHubCRM } from './components/ClientHubCRM';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BrandPaletteBar } from './components/BrandPaletteBar';

function PortfolioApp() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (planName?: string) => {
    setSelectedPlanForModal(planName);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedPlanForModal(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#1C1917] transition-colors duration-300">
      {/* Sticky Top Navigation */}
      <Navbar onBookCallClick={() => handleOpenBookingModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero onBookCallClick={() => handleOpenBookingModal()} />

        {/* 2. ABOUT */}
        <About />

        {/* 3. SERVICES */}
        <Services onBookCallClick={() => handleOpenBookingModal()} />

        {/* 4. CASE STUDIES */}
        <CaseStudies onBookCallClick={() => handleOpenBookingModal()} />

        {/* 5. INTERACTIVE CLIENT HUB & DELIVERY CRM */}
        <ClientHubCRM />

        {/* 6. PRICING */}
        <Pricing onBookCallClick={(planName) => handleOpenBookingModal(planName)} />

        {/* 6. TESTIMONIALS */}
        <Testimonials />

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. CONTACT */}
        <Contact onBookCallClick={() => handleOpenBookingModal()} />
      </main>

      {/* 9. FOOTER */}
      <Footer />

      {/* Interactive Booking / Discovery Call Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        selectedPlan={selectedPlanForModal}
      />

      {/* Live Brand Palette & Theme Selector */}
      <BrandPaletteBar />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
