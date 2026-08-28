import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { AboutDoctor } from './components/AboutDoctor';
import { TimingsBlock } from './components/TimingsBlock';
import { ServicesGrid } from './components/ServicesGrid';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { StickyBookingBar } from './components/StickyBookingBar';
import { AppointmentModal } from './components/AppointmentModal';
import { SecurityPortalModal } from './components/SecurityPortalModal';
import { AnalyticsModal } from './components/AnalyticsModal';
import { LanguageCode } from './types';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);
  const [isSecurityOpen, setIsSecurityOpen] = useState<boolean>(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState<boolean>(false);

  // Sync high-contrast mode class with document body for accessibility
  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  const handleOpenBooking = (serviceId?: string) => {
    setBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col ${currentLanguage === 'ur' ? 'font-sans' : ''}`}>
      {/* Skip to Main Content Link for WCAG Screen Readers & Keyboard Navigation */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0C4A6E] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* STEP 2: Compact Single-Line Header with Exact Logo, Dr. Samina Anjum, and CTA */}
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(!isHighContrast)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenSecurity={() => setIsSecurityOpen(true)}
        onOpenAnalytics={() => setIsAnalyticsOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 pb-16">
        {/* STEP 3: Hero Section with 100% Full-Width 5000ms Auto-Slider */}
        <HeroSlider
          currentLanguage={currentLanguage}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* STEP 6.2: Timings & Working Hours Block (Mon-Sat 5:00 PM to 10:00 PM) */}
        <TimingsBlock
          currentLanguage={currentLanguage}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* STEP 6.1: About Doctor Section (Dr. Samina Anjum & Askari 11 Clinic) */}
        <AboutDoctor
          currentLanguage={currentLanguage}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* STEP 6.3: Specialized Services Grid */}
        <ServicesGrid
          currentLanguage={currentLanguage}
          onOpenBooking={handleOpenBooking}
        />

        {/* STEP 4: Interactive Before & After Treatment Section */}
        <BeforeAfterSection
          currentLanguage={currentLanguage}
          onOpenBooking={handleOpenBooking}
        />

        {/* STEP 6.4: Location & Google Maps Section */}
        <LocationSection
          currentLanguage={currentLanguage}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* STEP 6.5: Clean Single-Line Footer with Exact Logo & Timings */}
      <Footer
        currentLanguage={currentLanguage}
        onOpenBooking={handleOpenBooking}
        onOpenSecurity={() => setIsSecurityOpen(true)}
        onOpenAnalytics={() => setIsAnalyticsOpen(true)}
      />

      {/* Sticky Bottom Booking Bar for instant appointment access throughout page */}
      <StickyBookingBar
        currentLanguage={currentLanguage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Appointment Scheduler Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingServiceId}
      />

      {/* STEP 6.7 & 6.11: Patient Security & Multi-Factor Authentication Portal */}
      <SecurityPortalModal
        isOpen={isSecurityOpen}
        onClose={() => setIsSecurityOpen(false)}
      />

      {/* STEP 6.8: Real-Time Telemetry & Conversion Analytics Dashboard */}
      <AnalyticsModal
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
      />
    </div>
  );
}
