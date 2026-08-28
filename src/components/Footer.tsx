import React from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO, TRANSLATIONS } from '../data/clinicData';
import { LanguageCode } from '../types';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Heart,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  currentLanguage: LanguageCode;
  onOpenBooking: (serviceId?: string) => void;
  onOpenSecurity: () => void;
  onOpenAnalytics: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage,
  onOpenBooking,
  onOpenSecurity,
  onOpenAnalytics
}) => {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <footer 
      id="main-footer"
      className="bg-[#0C4A6E] text-white border-t border-sky-900/50"
      aria-label="Footer and Clinic Information"
    >
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <Logo size="md" textColor="light" />
            <p className="text-xs text-sky-200 leading-relaxed">
              Gentle, high-precision, and sterile dental care provided by {CLINIC_INFO.doctorName} in Askari 11, Rawalpindi.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>12+ Years Clinical Excellence</span>
            </div>
          </div>

          {/* Column 2: Clinic Timings & Schedule (STRICT REQUIREMENT) */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Clinic Timings</span>
            </h4>
            <div className="p-3.5 bg-sky-950/40 rounded-xl border border-sky-800/60 space-y-1.5 text-xs text-sky-100">
              <div className="font-bold text-white">
                Monday to Saturday
              </div>
              <div className="text-cyan-300 font-extrabold text-sm">
                5:00 PM – 10:00 PM
              </div>
              <div className="text-[11px] text-amber-300 pt-1 border-t border-sky-800/40">
                Sunday: Closed (Emergency on Call)
              </div>
            </div>
          </div>

          {/* Column 3: Exact Location & Address (STRICT REQUIREMENT) */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Clinic Address</span>
            </h4>
            <p className="text-xs text-sky-200 leading-relaxed">
              {CLINIC_INFO.address}
            </p>
            <a
              id="footer-maps-link"
              href={CLINIC_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06B6D4] hover:text-cyan-200 transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Column 4: Direct Appointment & Fast Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-cyan-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Fast Booking</span>
            </h4>
            <p className="text-xs text-sky-200">
              Reserve your evening appointment with Dr. Samina Anjum with zero waiting time.
            </p>
            <button
              id="footer-book-appointment-btn"
              onClick={() => onOpenBooking()}
              className="w-full py-2.5 px-4 bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-extrabold text-xs rounded-xl shadow transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Appointment</span>
            </button>
            <div className="flex gap-2 text-[11px] text-sky-300 pt-1 justify-center">
              <button onClick={onOpenSecurity} className="hover:underline">Security</button>
              <span>•</span>
              <button onClick={onOpenAnalytics} className="hover:underline">Analytics</button>
            </div>
          </div>

        </div>
      </div>

      {/* STRICT REQUIREMENT: Clean single-line copyright, clinic timings, and embedded info */}
      <div className="border-t border-sky-900/80 bg-[#082F49] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-sky-300 text-center md:text-left">
          {/* Single Line Copyright */}
          <div>
            © {new Date().getFullYear()} <span className="text-white font-bold">{CLINIC_INFO.name}</span> by {CLINIC_INFO.doctorName}. {t.footer.rights}
          </div>

          {/* Single line timing & location snippet */}
          <div className="flex items-center gap-3 text-[11px] text-sky-200">
            <span>{CLINIC_INFO.workingHoursShort}</span>
            <span>•</span>
            <span>Askari 11, Rawalpindi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
