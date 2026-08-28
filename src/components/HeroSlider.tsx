import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES, CLINIC_INFO, TRANSLATIONS } from '../data/clinicData';
import { LanguageCode } from '../types';
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HeroSliderProps {
  currentLanguage: LanguageCode;
  onOpenBooking: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  currentLanguage,
  onOpenBooking
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const t = TRANSLATIONS[currentLanguage];
  const AUTO_PLAY_INTERVAL = 5000; // 5000ms strict requirement

  // Smooth Auto-Play carousel every 5000ms
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    setProgress(0);
    const stepTime = 50; // update progress every 50ms
    const totalSteps = AUTO_PLAY_INTERVAL / stepTime;
    let currentStep = 0;

    progressIntervalRef.current = setInterval(() => {
      currentStep++;
      setProgress((currentStep / totalSteps) * 100);
    }, stepTime);

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      currentStep = 0;
      setProgress(0);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentSlide, isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  return (
    <section 
      id="home"
      className="relative w-full overflow-hidden bg-slate-900 min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center"
      aria-label="Dental Clinic Hero Carousel"
    >
      {/* 100% Full-Width Automated Background Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            {/* Optimized High-Performance Image */}
            <img
              src={slide.image}
              alt={slide.title}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Professional Medical Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E]/95 via-[#0C4A6E]/80 to-transparent sm:to-[#0C4A6E]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />
          </div>
        );
      })}

      {/* Hero Content Overlay Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl text-white space-y-5 sm:space-y-6">
          {/* Clinic & Location Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-cyan-200 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-ping"></span>
            <span>Askari 11 • Range Road, Rawalpindi</span>
          </div>

          {/* Main Heading (Strict Step 3 Requirement) */}
          <h1 
            id="hero-main-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm font-display"
          >
            {t.hero.heading}
          </h1>

          {/* Sub-heading (Strict Step 3 Requirement: Dr. Samina Anjum | Mon-Sat (5 PM - 10 PM)) */}
          <div 
            id="hero-doctor-subheading"
            className="flex flex-wrap items-center gap-2 sm:gap-3 text-base sm:text-xl font-medium text-cyan-100 bg-black/20 backdrop-blur-sm p-3 rounded-xl border border-white/10"
          >
            <span className="font-bold text-white text-lg sm:text-xl">
              {CLINIC_INFO.doctorName}
            </span>
            <span className="text-cyan-400 font-bold hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-cyan-200 text-sm sm:text-base font-semibold">
              <Clock className="w-4 h-4 text-[#06B6D4]" />
              Mon-Sat (5:00 PM - 10:00 PM)
            </span>
          </div>

          {/* Key Clinical Trust Badges */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 pt-1">
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>100% Sterile & Painless</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>Class-B Autoclave Clean</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
              <span>Digital Diagnostic X-Ray</span>
            </div>
          </div>

          {/* Call to Action Button Group (Strict Step 3 Requirement: Prominent "Call Now / Book Appointment" button) */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              id="hero-book-appointment-cta"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#06B6D4] hover:bg-[#0891B2] text-slate-950 font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>{t.hero.ctaBook}</span>
            </button>

            <a
              id="hero-call-now-cta"
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm sm:text-base rounded-xl border border-white/30 hover:border-white/60 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <Phone className="w-5 h-5 text-[#06B6D4]" />
              <span>{t.hero.ctaCall}</span>
            </a>

            <a
              id="hero-maps-link-btn"
              href={CLINIC_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-900/60 hover:bg-slate-900/80 text-cyan-200 text-xs sm:text-sm font-semibold rounded-xl border border-cyan-500/30 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#06B6D4]" />
              <span>{t.hero.ctaLocation}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Controls & Accessibility Floating Bar */}
      <div className="absolute bottom-4 right-4 sm:right-8 z-30 flex items-center gap-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/15">
        {/* Play / Pause Toggle for Accessibility */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          title={isPaused ? 'Resume 5s Slideshow' : 'Pause Slideshow'}
          aria-label={isPaused ? 'Resume Auto-Play' : 'Pause Auto-Play'}
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>

        {/* Previous Slide */}
        <button
          onClick={handlePrev}
          className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Indicators with Progress Fill */}
        <div className="flex items-center gap-1.5 px-1">
          {HERO_SLIDES.map((_, idx) => {
            const isCurrent = idx === currentSlide;
            return (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setProgress(0);
                }}
                className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 ${
                  isCurrent ? 'w-8 bg-white/30' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {isCurrent && (
                  <span
                    className="absolute top-0 left-0 bottom-0 bg-[#06B6D4] rounded-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Next Slide */}
        <button
          onClick={handleNext}
          className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
