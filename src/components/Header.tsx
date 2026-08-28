import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO, TRANSLATIONS } from '../data/clinicData';
import { LanguageCode } from '../types';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  Clock, 
  Globe, 
  Eye, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';

interface HeaderProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  isHighContrast: boolean;
  onToggleHighContrast: () => void;
  onOpenBooking: (serviceId?: string) => void;
  onOpenSecurity: () => void;
  onOpenAnalytics: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  isHighContrast,
  onToggleHighContrast,
  onOpenBooking,
  onOpenSecurity,
  onOpenAnalytics
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = TRANSLATIONS[currentLanguage];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.beforeAfter, href: '#before-after' },
    { label: t.nav.location, href: '#location' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 h-[60px] sm:h-[64px] flex items-center'
          : 'bg-white border-b border-slate-200 h-[64px] sm:h-[68px] flex items-center'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Left: Exact Logo */}
        <a 
          href="#home" 
          id="header-brand-logo"
          className="flex items-center gap-1.5 group shrink-0 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-0.5"
          aria-label="Arham Dental Care Home"
        >
          <Logo size="sm" />
        </a>

        {/* Center-Left: Single Line Doctor Badge */}
        <div 
          id="header-doctor-badge"
          className="hidden md:flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full shrink-0"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-[#0C4A6E] whitespace-nowrap">
            {CLINIC_INFO.doctorName}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-semibold text-[#06B6D4] whitespace-nowrap">
            Askari 11 (5 PM - 10 PM)
          </span>
        </div>

        {/* Center: Desktop Navigation Bar with Professional Polish underline indicators */}
        <nav 
          id="header-desktop-nav"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600"
          aria-label="Primary Navigation"
        >
          {navItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className={`py-1 transition-all duration-150 whitespace-nowrap focus:outline-none ${
                idx === 0 
                  ? 'text-[#0C4A6E] font-bold border-b-2 border-[#0C4A6E]' 
                  : 'hover:text-[#0C4A6E] text-slate-600 hover:border-b-2 hover:border-[#06B6D4]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Section */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Analytics Trigger */}
          <button
            id="header-analytics-btn"
            onClick={onOpenAnalytics}
            className="hidden sm:inline-flex p-1.5 text-slate-500 hover:text-[#0C4A6E] hover:bg-slate-100 rounded-lg transition-colors text-xs items-center gap-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
            title="Clinic Engagement & Telemetry"
          >
            <Activity className="w-4 h-4 text-[#06B6D4]" />
            <span className="hidden xl:inline font-semibold">Stats</span>
          </button>

          {/* Security Trigger */}
          <button
            id="header-security-btn"
            onClick={onOpenSecurity}
            className="hidden sm:inline-flex p-1.5 text-slate-500 hover:text-[#0C4A6E] hover:bg-slate-100 rounded-lg transition-colors text-xs items-center gap-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
            title="Patient Portal & 2FA Security"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="hidden xl:inline font-semibold">Portal</span>
          </button>

          {/* High Contrast Mode Toggle (Desktop & Tablet) */}
          <button
            id="header-contrast-toggle"
            onClick={onToggleHighContrast}
            className={`hidden sm:flex p-1.5 rounded-lg border text-xs items-center gap-1 transition-colors ${
              isHighContrast 
                ? 'bg-slate-900 text-white border-slate-700' 
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title="Toggle Accessibility Contrast"
            aria-label="Toggle High Contrast"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>

          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              id="header-language-btn"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="px-2 sm:px-2.5 py-1 sm:py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-[11px] sm:text-xs font-bold text-slate-700 flex items-center gap-1 transition-colors"
              aria-expanded={langMenuOpen}
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span className="uppercase">{currentLanguage}</span>
            </button>

            {langMenuOpen && (
              <div 
                id="language-dropdown-menu"
                className="absolute right-0 mt-1.5 w-32 bg-white rounded-xl shadow-xl border border-slate-200 py-1 z-50 animate-in fade-in zoom-in-95 duration-100"
              >
                <button
                  onClick={() => {
                    onLanguageChange('en');
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-sky-50 transition-colors ${
                    currentLanguage === 'en' ? 'text-[#0C4A6E] font-bold bg-sky-50/50' : 'text-slate-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    onLanguageChange('ur');
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-sky-50 transition-colors ${
                    currentLanguage === 'ur' ? 'text-[#0C4A6E] font-bold bg-sky-50/50' : 'text-slate-700'
                  }`}
                >
                  اردو (Urdu)
                </button>
                <button
                  onClick={() => {
                    onLanguageChange('roman');
                    setLangMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-sky-50 transition-colors ${
                    currentLanguage === 'roman' ? 'text-[#0C4A6E] font-bold bg-sky-50/50' : 'text-slate-700'
                  }`}
                >
                  Roman Urdu
                </button>
              </div>
            )}
          </div>

          {/* Quick Call Button */}
          <a
            id="header-call-btn"
            href={`tel:${CLINIC_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#0C4A6E] bg-sky-50 hover:bg-sky-100 rounded-full border border-sky-100 transition-colors"
            title="Call Clinic Reception"
          >
            <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span className="hidden xl:inline">{CLINIC_INFO.phone}</span>
            <span className="xl:hidden">Call</span>
          </a>

          {/* Responsive Book Appointment Button - Compact on Mobile, Full on Desktop */}
          <button
            id="header-book-appointment-cta"
            onClick={() => onOpenBooking()}
            className="bg-[#0C4A6E] text-white px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow hover:bg-[#075985] transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <Calendar className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
            <span className="hidden sm:inline">{t.nav.bookAppointment}</span>
            <span className="sm:hidden">{currentLanguage === 'ur' ? 'بکنگ' : 'Book'}</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            id="header-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-700 hover:text-[#0C4A6E] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="header-mobile-nav-drawer"
          className="lg:hidden px-4 pt-3 pb-5 bg-white border-b border-slate-200 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {/* Doctor Status Bar */}
          <div className="flex items-center justify-between p-2.5 bg-sky-50/90 border border-sky-100 rounded-xl text-xs font-semibold text-[#0C4A6E]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {CLINIC_INFO.doctorName}
            </span>
            <span className="text-[#06B6D4] font-bold">5:00 PM – 10:00 PM</span>
          </div>

          {/* Full Book Appointment CTA inside mobile menu */}
          <button
            onClick={() => {
              onOpenBooking();
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 bg-[#0C4A6E] hover:bg-[#075985] text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#06B6D4]" />
            <span>{t.nav.bookAppointment}</span>
          </button>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-[#0C4A6E] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Call & Security Controls */}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2 text-xs font-bold text-[#0C4A6E] bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors"
            >
              <Phone className="w-4 h-4 text-[#06B6D4]" />
              Call Reception: {CLINIC_INFO.phoneDisplay}
            </a>
            
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => { onOpenSecurity(); setMobileMenuOpen(false); }}
                className="py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-1 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Portal</span>
              </button>

              <button
                onClick={() => { onOpenAnalytics(); setMobileMenuOpen(false); }}
                className="py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center gap-1 transition-colors"
              >
                <Activity className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Stats</span>
              </button>

              <button
                onClick={() => { onToggleHighContrast(); setMobileMenuOpen(false); }}
                className={`py-2 text-xs font-medium rounded-xl flex items-center justify-center gap-1 border transition-colors ${
                  isHighContrast 
                    ? 'bg-slate-900 text-white border-slate-700' 
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{isHighContrast ? 'Contrast ON' : 'Contrast'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
