import React, { useState, useRef } from 'react';
import { BEFORE_AFTER_CASES, TRANSLATIONS } from '../data/clinicData';
import { LanguageCode } from '../types';
import { 
  Sparkles, 
  Clock, 
  CalendarCheck, 
  FileText, 
  CheckCircle, 
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Eye
} from 'lucide-react';

interface BeforeAfterSectionProps {
  currentLanguage: LanguageCode;
  onOpenBooking: (serviceId?: string) => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  currentLanguage,
  onOpenBooking
}) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];
  const t = TRANSLATIONS[currentLanguage];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <section 
      id="before-after" 
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80"
      aria-label="Before and After Dental Treatment Comparisons"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-200 text-[#0C4A6E] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Clinical Results & Transformations</span>
          </div>
          <h2 
            id="before-after-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C4A6E] tracking-tight font-display"
          >
            {t.beforeAfter.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.beforeAfter.subtitle}
          </p>

          {/* Case Navigation Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {BEFORE_AFTER_CASES.map((item, idx) => {
              const isSelected = idx === activeCaseIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveCaseIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                    isSelected
                      ? 'bg-[#0C4A6E] text-white shadow-md shadow-sky-950/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
          
          {/* Left / Center: Interactive Visual Comparison */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* View Mode Toggle Controls */}
            <div className="w-full flex items-center justify-between mb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-600">View Style:</span>
                <button
                  onClick={() => setViewMode('slider')}
                  className={`px-2.5 py-1 rounded-md font-bold transition-colors ${
                    viewMode === 'slider' ? 'bg-[#06B6D4] text-slate-950' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  Interactive Slider
                </button>
                <button
                  onClick={() => setViewMode('side-by-side')}
                  className={`px-2.5 py-1 rounded-md font-bold transition-colors ${
                    viewMode === 'side-by-side' ? 'bg-[#06B6D4] text-slate-950' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  Side-by-Side
                </button>
              </div>

              <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                Zero Latency • High-Resolution WebP
              </span>
            </div>

            {viewMode === 'slider' ? (
              /* Split Comparison Slider */
              <div
                ref={containerRef}
                onPointerDown={() => setIsDragging(true)}
                onPointerUp={() => setIsDragging(false)}
                onPointerLeave={() => setIsDragging(false)}
                onPointerMove={handlePointerMove}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden shadow-md select-none touch-none border border-slate-300 bg-slate-200 cursor-ew-resize"
              >
                {/* AFTER Image (Full background) */}
                <img
                  src={activeCase.afterImage}
                  alt={`${activeCase.title} - After Treatment`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />

                {/* AFTER Label Tag */}
                <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-emerald-700/90 backdrop-blur-md text-white text-xs font-extrabold rounded-md shadow flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{t.beforeAfter.afterLabel}</span>
                </div>

                {/* BEFORE Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImage}
                    alt={`${activeCase.title} - Before Treatment`}
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      height: containerRef.current ? `${containerRef.current.clientHeight}px` : '100%',
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* BEFORE Label Tag */}
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold rounded-md shadow">
                    <span>{t.beforeAfter.beforeLabel}</span>
                  </div>
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Circular Slider Button Handle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#06B6D4] text-slate-950 rounded-full border-2 border-white shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ) : (
              /* Side-by-Side Dual View */
              <div className="grid grid-cols-2 gap-3 w-full aspect-[4/3] sm:aspect-[16/10]">
                {/* Before Box */}
                <div className="relative rounded-xl overflow-hidden border border-slate-300 bg-slate-200">
                  <img
                    src={activeCase.beforeImage}
                    alt={`${activeCase.title} - Before`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 bg-slate-900/80 text-white text-[11px] font-bold rounded">
                    {t.beforeAfter.beforeLabel}
                  </div>
                </div>
                {/* After Box */}
                <div className="relative rounded-xl overflow-hidden border border-emerald-400 bg-slate-200">
                  <img
                    src={activeCase.afterImage}
                    alt={`${activeCase.title} - After`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 right-2 px-2.5 py-0.5 bg-emerald-700 text-white text-[11px] font-bold rounded flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-300" />
                    {t.beforeAfter.afterLabel}
                  </div>
                </div>
              </div>
            )}

            {/* Slider Range Input for keyboard & accessibility */}
            <div className="w-full mt-4 px-2">
              <input
                id="before-after-range-control"
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                aria-label="Comparison slider percentage"
                className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#06B6D4]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-1">
                <span>← {t.beforeAfter.beforeLabel}</span>
                <span>{t.beforeAfter.dragHint}</span>
                <span>{t.beforeAfter.afterLabel} →</span>
              </div>
            </div>
          </div>

          {/* Right: Clinical Procedure Details & Doctor Note */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-100/70 text-[#0C4A6E] rounded-md text-xs font-bold mb-2">
                <span>{activeCase.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                {activeCase.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {activeCase.description}
              </p>
            </div>

            {/* Procedure Facts Grid */}
            <div className="grid grid-cols-2 gap-3 py-2">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>Duration</span>
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {activeCase.duration}
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <CalendarCheck className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>Sessions</span>
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {activeCase.sessions} {activeCase.sessions === 1 ? 'Session' : 'Visits'}
                </div>
              </div>
            </div>

            {/* Doctor Note Card */}
            <div className="bg-sky-50/70 border border-sky-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0C4A6E]">
                <FileText className="w-4 h-4 text-[#06B6D4]" />
                <span>Dr. Samina Anjum's Clinical Notes</span>
              </div>
              <p className="text-xs text-slate-700 mt-1.5 italic leading-relaxed">
                "{activeCase.doctorNotes}"
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {activeCase.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-slate-200/80 text-slate-700 text-[11px] font-semibold rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Book CTA */}
            <button
              id="before-after-book-treatment-btn"
              onClick={() => onOpenBooking(activeCase.id)}
              className="w-full py-3 px-4 bg-[#0C4A6E] hover:bg-[#082F49] text-white font-bold text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <span>Book Consultation for this Treatment</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#06B6D4]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
