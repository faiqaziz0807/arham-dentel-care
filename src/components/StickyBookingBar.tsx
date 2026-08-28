import React from 'react';
import { CLINIC_INFO, TRANSLATIONS } from '../data/clinicData';
import { LanguageCode } from '../types';
import { Calendar, Phone, Clock, MessageSquare } from 'lucide-react';

interface StickyBookingBarProps {
  currentLanguage: LanguageCode;
  onOpenBooking: () => void;
}

export const StickyBookingBar: React.FC<StickyBookingBarProps> = ({
  currentLanguage,
  onOpenBooking
}) => {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <div 
      id="sticky-booking-bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2 sm:py-2.5 px-3 sm:px-6 transition-all duration-200"
      aria-label="Sticky Appointment Booking Bar"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        
        {/* Left: Quick clinic info */}
        <div className="hidden sm:flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-[#0C4A6E]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{CLINIC_INFO.doctorName}</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1 text-slate-600 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Mon–Sat (5:00 PM – 10:00 PM)</span>
          </div>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span className="text-slate-500 hidden md:inline">Askari 11, Rawalpindi</span>
        </div>

        {/* Mobile Left: Clinic Name Badge */}
        <div className="sm:hidden text-xs shrink min-w-0 pr-1">
          <div className="font-extrabold text-[#0C4A6E] truncate text-[11px]">
            Arham Dental Care
          </div>
          <div className="text-[9px] text-emerald-600 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            5 PM – 10 PM
          </div>
        </div>

        {/* Right: Quick Action CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick Call */}
          <a
            id="sticky-call-btn"
            href={`tel:${CLINIC_INFO.phone}`}
            className="p-1.5 sm:px-3 sm:py-2 bg-sky-50 hover:bg-sky-100 text-[#0C4A6E] font-bold text-xs rounded-lg sm:rounded-xl border border-sky-200 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-sky-500 shrink-0"
            aria-label="Call clinic now"
            title="Call Reception"
          >
            <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          {/* Quick WhatsApp Link */}
          <a
            id="sticky-whatsapp-btn"
            href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hello%20Arham%20Dental%20Care,%20I%20would%20like%20to%20inquire%20about%20an%20appointment%20with%20Dr.%20Samina%20Anjum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:px-3 sm:py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs rounded-lg sm:rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 shrink-0"
            aria-label="Chat on WhatsApp"
            title="WhatsApp Chat"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Main Book Appointment CTA Button */}
          <button
            id="sticky-book-appointment-btn"
            onClick={onOpenBooking}
            className="px-3 sm:px-5 py-1.5 sm:py-2.5 bg-[#0C4A6E] hover:bg-[#082F49] text-white font-extrabold text-xs sm:text-sm rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-150 flex items-center gap-1.5 sm:gap-2 focus:outline-none focus:ring-2 focus:ring-[#0C4A6E] shrink-0 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#06B6D4]" />
            <span className="hidden xs:inline">Book Appointment</span>
            <span className="xs:hidden">Book</span>
          </button>
        </div>

      </div>
    </div>
  );
};
