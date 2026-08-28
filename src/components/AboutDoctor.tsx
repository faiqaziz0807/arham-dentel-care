import React from 'react';
import { CLINIC_INFO, CLINIC_HIGHLIGHTS, TRANSLATIONS } from '../data/clinicData';
import { LanguageCode } from '../types';
import { 
  Award, 
  HeartHandshake, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  Calendar,
  GraduationCap
} from 'lucide-react';

interface AboutDoctorProps {
  currentLanguage: LanguageCode;
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({
  currentLanguage,
  onOpenBooking
}) => {
  const t = TRANSLATIONS[currentLanguage];

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80"
      aria-label="About Dr. Samina Anjum and Arham Dental Care"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Doctor & Clinic Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Background Accent Frame */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#0C4A6E] to-[#06B6D4] rounded-3xl opacity-15 transform -rotate-1 blur-sm" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
                alt="Dr. Samina Anjum - Arham Dental Care"
                className="w-full h-auto aspect-[4/5] object-cover object-top"
                loading="lazy"
                decoding="async"
              />
              
              {/* Doctor Credentials Card Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0C4A6E] via-[#0C4A6E]/90 to-transparent p-5 text-white">
                <div className="flex items-center gap-1 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  <span>Lead Dental Surgeon</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {CLINIC_INFO.doctorName}
                </h3>
                <p className="text-xs text-cyan-100 mt-0.5">
                  {CLINIC_INFO.doctorCredentials}
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-white/90">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{CLINIC_INFO.doctorExperience}</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Pill */}
            <div className="absolute -bottom-5 -right-3 sm:right-4 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#06B6D4]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-[#0C4A6E]">100% Sterile Clinic</div>
                <div className="text-[11px] text-slate-500 font-medium">Class-B Hospital Standard</div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-[#0C4A6E] border border-sky-200 rounded-full text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Patient-First Philosophy</span>
              </div>
              
              <h2 
                id="about-doctor-heading"
                className="text-3xl sm:text-4xl font-extrabold text-[#0C4A6E] tracking-tight font-display"
              >
                {t.about.title}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-[#06B6D4]">
                {t.about.role} • {CLINIC_INFO.addressShort}
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.about.bio}
            </p>

            {/* Doctor Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 bg-sky-50 rounded-lg text-[#06B6D4] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">BDS & Clinical Dentistry</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Comprehensive diagnostic, cosmetic and restorative dentistry.</p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 bg-sky-50 rounded-lg text-[#06B6D4] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Aesthetic Smile Design</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Laser teeth whitening, composite bonding, and ceramic veneers.</p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 bg-sky-50 rounded-lg text-[#06B6D4] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">5:00 PM – 10:00 PM Timings</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Monday to Saturday evening consultations in Askari 11.</p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                <div className="p-2 bg-sky-50 rounded-lg text-[#06B6D4] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Askari 11 Complex</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Log Welfare Shopping Complex, Range Road Rawalpindi.</p>
                </div>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="p-4 bg-sky-50/60 border-l-4 border-[#06B6D4] rounded-r-xl">
              <p className="text-xs sm:text-sm text-[#0C4A6E] font-medium italic">
                "{t.about.philosophy}"
              </p>
            </div>

            {/* Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                id="about-schedule-consultation-btn"
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#0C4A6E] hover:bg-[#082F49] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all duration-150 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#06B6D4]" />
                <span>Schedule Consultation with Dr. Samina Anjum</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
