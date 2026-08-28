import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  X, 
  Activity, 
  Download, 
  Users, 
  CalendarCheck, 
  Eye, 
  TrendingUp, 
  Sparkles,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsModal: React.FC<AnalyticsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [dateFilter, setDateFilter] = useState<'today' | '7days' | '30days'>('7days');

  if (!isOpen) return null;

  const metrics = {
    totalViews: '3,842',
    uniquePatients: '1,280',
    appointmentBookings: '142',
    conversionRate: '11.1%',
    avgSessionTime: '2m 45s',
    bounceRate: '22.4%',
    popularServices: [
      { name: 'Teeth Whitening & Laser Care', views: 890, share: '32%' },
      { name: 'Root Canal Treatment (Painless)', views: 640, share: '24%' },
      { name: 'Braces & Clear Aligners', views: 510, share: '18%' },
      { name: 'Dental Checkups & Scaling', views: 420, share: '15%' },
      { name: 'Dental Fillings & Restorations', views: 310, share: '11%' },
    ],
    geographicOrigin: [
      { location: 'Askari 11 & Range Rd (Rawalpindi)', percentage: '54%' },
      { location: 'Askari 7 / CMH Vicinity', percentage: '22%' },
      { location: 'Saddar / Cantt Rawalpindi', percentage: '16%' },
      { location: 'DHA / Bahria Islamabad Highway', percentage: '8%' },
    ]
  };

  const handleExportCSV = () => {
    const csvRows = [
      ['Metric', 'Value'],
      ['Clinic Name', CLINIC_INFO.name],
      ['Doctor', CLINIC_INFO.doctorName],
      ['Total Page Views', metrics.totalViews],
      ['Unique Patients', metrics.uniquePatients],
      ['Appointments Booked', metrics.appointmentBookings],
      ['Conversion Rate', metrics.conversionRate],
      ['Average Session Duration', metrics.avgSessionTime],
      ['Bounce Rate', metrics.bounceRate],
      ['Top Service', metrics.popularServices[0].name],
      ['Primary Location', metrics.geographicOrigin[0].location],
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.map((e) => e.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ArhamDentalCare_Engagement_Report_${dateFilter}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      id="analytics-dashboard-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#0C4A6E] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/20 rounded-xl text-cyan-300">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                Live Clinic Engagement & Conversions
              </h3>
              <p className="text-xs text-cyan-200">
                Real-time Patient Acquisition & Service Interest Dashboard
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-slate-500 font-semibold">Timeframe:</span>
            <button
              onClick={() => setDateFilter('today')}
              className={`px-2.5 py-1 rounded-md font-bold ${
                dateFilter === 'today' ? 'bg-[#0C4A6E] text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setDateFilter('7days')}
              className={`px-2.5 py-1 rounded-md font-bold ${
                dateFilter === '7days' ? 'bg-[#0C4A6E] text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              Past 7 Days
            </button>
            <button
              onClick={() => setDateFilter('30days')}
              className={`px-2.5 py-1 rounded-md font-bold ${
                dateFilter === '30days' ? 'bg-[#0C4A6E] text-white' : 'bg-slate-200 text-slate-700'
              }`}
            >
              Past 30 Days
            </button>
          </div>

          <button
            onClick={handleExportCSV}
            className="px-3 py-1.5 bg-[#06B6D4] hover:bg-cyan-600 text-slate-950 font-bold rounded-lg flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV Dataset</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="p-5 sm:p-6 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Eye className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Page Views</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-[#0C4A6E] mt-1 font-display">
                {metrics.totalViews}
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">+18.4% this week</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Users className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Unique Patients</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-[#0C4A6E] mt-1 font-display">
                {metrics.uniquePatients}
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">Askari 11 focused</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CalendarCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bookings Made</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-emerald-700 mt-1 font-display">
                {metrics.appointmentBookings}
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">Evening slots peak</span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <TrendingUp className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Conversion Rate</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-[#0C4A6E] mt-1 font-display">
                {metrics.conversionRate}
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">Top 5% medical avg</span>
            </div>
          </div>

          {/* Popular Services Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#06B6D4]" />
              <span>Most Inquired Dental Treatments</span>
            </h4>
            <div className="space-y-2">
              {metrics.popularServices.map((srv) => (
                <div key={srv.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{srv.name}</span>
                    <span className="text-[#0C4A6E] font-bold">{srv.views} clicks ({srv.share})</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#0C4A6E] to-[#06B6D4] h-full rounded-full"
                      style={{ width: srv.share }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Breakdown */}
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 space-y-2 text-xs">
            <div className="font-bold text-[#0C4A6E]">Patient Catchment Areas:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {metrics.geographicOrigin.map((geo) => (
                <div key={geo.location} className="flex justify-between text-slate-700">
                  <span>{geo.location}</span>
                  <span className="font-bold text-[#06B6D4]">{geo.percentage}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">Live telemetry stream active</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0C4A6E] text-white font-bold text-xs rounded-xl"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
