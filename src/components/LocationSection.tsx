import React from 'react';
import { CLINIC_INFO, TRANSLATIONS } from '../data/clinicData';
import { LanguageCode } from '../types';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Phone, 
  Clock, 
  Car, 
  CheckCircle2,
  Building2,
  Share2
} from 'lucide-react';

interface LocationSectionProps {
  currentLanguage: LanguageCode;
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  currentLanguage,
  onOpenBooking
}) => {
  const t = TRANSLATIONS[currentLanguage];

  const handleShareLocation = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Arham Dental Care Location',
        text: 'Visit Arham Dental Care - Dr. Samina Anjum in Askari 11 Rawalpindi',
        url: CLINIC_INFO.mapsLink,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(CLINIC_INFO.mapsLink);
      alert('Google Maps link copied to clipboard!');
    }
  };

  return (
    <section 
      id="location" 
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80"
      aria-label="Clinic Location and Google Maps Directions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-sky-50 border border-sky-200 text-[#0C4A6E] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Visit Arham Dental Care</span>
          </div>
          
          <h2 
            id="location-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C4A6E] tracking-tight font-display"
          >
            {t.location.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Conveniently located in Askari 11 on Range Road with seamless accessibility and dedicated parking.
          </p>
        </div>

        {/* Location Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Detailed Address Card & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#0C4A6E] text-white rounded-2xl shadow-sm shrink-0">
                  <Building2 className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {CLINIC_INFO.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#06B6D4]">
                    {CLINIC_INFO.doctorName}
                  </p>
                </div>
              </div>

              {/* Exact Address block (STRICT REQUIREMENT) */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#06B6D4]" />
                  <span>Physical Address</span>
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
              </div>

              {/* Key Landmark & Parking Highlights */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Landmark:</strong> {t.location.landmark}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <Car className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <span><strong>Parking:</strong> {t.location.parkingInfo}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                  <span><strong>Consultation Hours:</strong> Monday – Saturday: 5:00 PM to 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Clickable Google Maps Action Button (STRICT STEP 6 REQUIREMENT) */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <a
                id="location-google-maps-btn"
                href={CLINIC_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#0C4A6E] hover:bg-[#082F49] text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <Navigation className="w-4 h-4 text-[#06B6D4] group-hover:scale-110 transition-transform" />
                <span>{t.location.openMaps}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>

              <div className="flex gap-2">
                <a
                  id="location-call-btn"
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>Call Reception</span>
                </a>

                <button
                  id="location-share-btn"
                  onClick={handleShareLocation}
                  className="py-2.5 px-3.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  title="Share Clinic Location"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>Share</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right: Interactive Maps Frame & Visual Directions Guide */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-md flex flex-col bg-slate-100 min-h-[380px] relative">
            
            {/* Embedded Google Maps Container */}
            <div className="w-full h-full min-h-[320px] relative">
              <iframe
                title="Arham Dental Care Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13292.355152865917!2d73.0135!3d33.5684!2m3!1f0!2f0!3f0!3m2!1i1024!2i786!4f13.1!3m3!1m2!1s0x38df937b4ec10f7d%3A0x86b0337f7634f40f!2sAskari%20XI%2C%20Rawalpindi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Floating Quick Maps Badge on Top Left of Map */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-200/80 max-w-[260px]">
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#0C4A6E]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Askari 11 Clinic</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-1 font-medium leading-tight">
                  Log Welfare Shopping Complex, Range Rd, Rawalpindi
                </div>
                <a
                  href={CLINIC_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#06B6D4] hover:underline"
                >
                  <span>Open Full Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bottom Quick Directions Strip */}
            <div className="bg-slate-900 text-white p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">Driving Distance:</span>
                <span className="text-slate-300">5 min from CMH / Mall Rd • 10 min from Saddar</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 bg-[#06B6D4] text-slate-950 font-bold rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Book Appointment
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
