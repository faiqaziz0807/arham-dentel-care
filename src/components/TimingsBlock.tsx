import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, TRANSLATIONS } from '../data/clinicData';
import { LanguageCode } from '../types';
import { 
  Clock, 
  Calendar, 
  Phone, 
  AlertCircle, 
  CheckCircle2, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

interface TimingsBlockProps {
  currentLanguage: LanguageCode;
  onOpenBooking: () => void;
}

export const TimingsBlock: React.FC<TimingsBlockProps> = ({
  currentLanguage,
  onOpenBooking
}) => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentTimePKT, setCurrentTimePKT] = useState('');
  const t = TRANSLATIONS[currentLanguage];

  useEffect(() => {
    const updateTimeStatus = () => {
      // Calculate current Pakistan Standard Time (UTC+5)
      const now = new Date();
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const pktDate = new Date(utcTime + (3600000 * 5));

      const day = pktDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hours = pktDate.getHours();
      const minutes = pktDate.getMinutes();

      // Open Mon-Sat (day 1 to 6) between 17:00 (5 PM) and 22:00 (10 PM)
      const isDayOpen = day >= 1 && day <= 6;
      const isTimeOpen = hours >= 17 && hours < 22;

      setIsOpenNow(isDayOpen && isTimeOpen);
      
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Karachi'
      });
      setCurrentTimePKT(timeFormatter.format(pktDate));
    };

    updateTimeStatus();
    const interval = setInterval(updateTimeStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const weeklySchedule = [
    { day: 'Monday', hours: '5:00 PM – 10:00 PM', status: 'Open', isSpecial: false },
    { day: 'Tuesday', hours: '5:00 PM – 10:00 PM', status: 'Open', isSpecial: false },
    { day: 'Wednesday', hours: '5:00 PM – 10:00 PM', status: 'Open', isSpecial: false },
    { day: 'Thursday', hours: '5:00 PM – 10:00 PM', status: 'Open', isSpecial: false },
    { day: 'Friday', hours: '5:00 PM – 10:00 PM', status: 'Open', isSpecial: false },
    { day: 'Saturday', hours: '5:00 PM – 10:00 PM', status: 'Open', isSpecial: false },
    { day: 'Sunday', hours: 'Closed (Emergency On-Call)', status: 'Closed', isSpecial: true },
  ];

  return (
    <section 
      id="timings" 
      className="py-16 bg-white border-b border-slate-200/80"
      aria-label="Clinic Timings and Operating Hours"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <div className="bg-gradient-to-br from-[#0C4A6E] via-[#075985] to-[#0369A1] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl shadow-sky-950/10 relative overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-cyan-200">
                <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
                <span>{isOpenNow ? t.timings.statusOpen : t.timings.statusClosed}</span>
                {currentTimePKT && (
                  <span className="text-white/60 text-[11px] font-normal hidden sm:inline">
                    • PKT Time: {currentTimePKT}
                  </span>
                )}
              </div>

              <h2 
                id="timings-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white"
              >
                {t.timings.title}
              </h2>

              {/* Highlight Timings Callout */}
              <div className="p-4 sm:p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 space-y-2">
                <div className="text-xs uppercase tracking-widest text-cyan-300 font-bold">
                  {t.timings.monSat}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide font-display">
                  {CLINIC_INFO.timings}
                </div>
                <div className="text-xs text-cyan-100 flex items-center gap-1.5 pt-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>{CLINIC_INFO.sundayStatus}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-cyan-50/90 leading-relaxed">
                Consultations are conducted by {CLINIC_INFO.doctorName} during evening hours to accommodate working professionals and families.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  id="timings-book-appointment-btn"
                  onClick={onOpenBooking}
                  className="px-5 py-3 bg-[#06B6D4] hover:bg-[#0891B2] text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-transform hover:scale-[1.02] flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Reserve an Evening Slot</span>
                </button>

                <a
                  id="timings-emergency-call-btn"
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-300" />
                  <span>Emergency On-Call</span>
                </a>
              </div>
            </div>

            {/* Right Weekly Timetable Matrix */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#0C4A6E] uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-[#06B6D4]" />
                    <span>Weekly Consultation Schedule</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Evening Clinic
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {weeklySchedule.map((item) => (
                    <div
                      key={item.day}
                      className={`py-2.5 flex items-center justify-between text-xs sm:text-sm transition-colors ${
                        item.isSpecial ? 'bg-amber-50/60 px-2 rounded-lg text-amber-900 font-semibold' : 'hover:bg-sky-50/50 px-2 rounded-lg'
                      }`}
                    >
                      <span className="font-bold text-slate-800">{item.day}</span>
                      
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs ${item.isSpecial ? 'text-amber-800 font-medium' : 'text-slate-600 font-semibold'}`}>
                          {item.hours}
                        </span>
                        
                        <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-full ${
                          item.isSpecial 
                            ? 'bg-amber-200 text-amber-900' 
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Prior appointment recommended</span>
                  </span>
                  <span className="font-semibold text-[#0C4A6E]">Dr. Samina Anjum</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
