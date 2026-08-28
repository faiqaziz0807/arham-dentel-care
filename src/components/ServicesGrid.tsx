import React, { useState } from 'react';
import { SERVICES_DATA, TRANSLATIONS, CLINIC_INFO } from '../data/clinicData';
import { ServiceItem, LanguageCode } from '../types';
import { 
  Sparkles, 
  Sun, 
  ShieldAlert, 
  Smile, 
  HeartHandshake, 
  Crown, 
  Clock, 
  Check, 
  ArrowRight, 
  X,
  Calendar,
  ShieldCheck,
  Bandage
} from 'lucide-react';

interface ServicesGridProps {
  currentLanguage: LanguageCode;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  currentLanguage,
  onOpenBooking
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const t = TRANSLATIONS[currentLanguage];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Sun':
        return <Sun className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Smile':
        return <Smile className="w-5 h-5" />;
      case 'Bandage':
        return <Bandage className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80"
      aria-label="Dental Clinic Medical Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-sky-50 border border-sky-200 text-[#0C4A6E] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Comprehensive Dental Treatments</span>
          </div>
          
          <h2 
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C4A6E] tracking-tight font-display"
          >
            {t.services.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.services.subtitle}
          </p>
        </div>

        {/* 6 Specialized Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col group hover:-translate-y-1"
            >
              {/* Card Image Header */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[#0C4A6E] text-[11px] font-extrabold shadow">
                  {service.category}
                </div>

                {/* Pain Level Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#0C4A6E]/90 backdrop-blur-md text-cyan-300 text-[11px] font-bold shadow flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#06B6D4]" />
                  <span>{service.painLevel}</span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2.5 text-[#0C4A6E] mb-2">
                    <div className="p-2 rounded-lg bg-sky-50 text-[#06B6D4] group-hover:bg-[#06B6D4] group-hover:text-white transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      {currentLanguage === 'ur' && service.titleUrdu ? service.titleUrdu : service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Quick Benefits */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors text-center focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {t.services.viewDetails}
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="py-2 px-3.5 bg-[#0C4A6E] hover:bg-[#082F49] text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#0C4A6E]"
                    title="Book this treatment"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#06B6D4]" />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          id="service-details-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150"
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150 relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header Image */}
            <div className="relative h-48 bg-slate-900">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                  {selectedService.category} Dental Care
                </span>
                <h3 className="text-xl font-bold font-display text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedService.fullDescription}
              </p>

              <div className="bg-sky-50/70 p-3.5 rounded-xl border border-sky-100 space-y-1">
                <div className="text-xs font-bold text-[#0C4A6E]">Recommended For:</div>
                <p className="text-xs text-slate-600">{selectedService.recommendedFor}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Clinical Benefits:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-500 block">Procedure Time:</span>
                  <span className="font-bold text-slate-800">{selectedService.duration}</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-500 block">Comfort / Pain:</span>
                  <span className="font-bold text-slate-800">{selectedService.painLevel}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onOpenBooking(sId);
                }}
                className="px-5 py-2.5 bg-[#0C4A6E] hover:bg-[#082F49] text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#06B6D4]" />
                <span>Book Appointment for {selectedService.title}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
