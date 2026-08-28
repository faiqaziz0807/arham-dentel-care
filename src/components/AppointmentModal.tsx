import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import { AppointmentData } from '../types';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles,
  Download,
  Share2,
  AlertCircle
} from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

const EVENING_SLOTS = [
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
  '08:30 PM',
  '09:00 PM',
  '09:30 PM',
];

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [formData, setFormData] = useState<AppointmentData>({
    patientName: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'checkup',
    doctor: CLINIC_INFO.doctorName,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '05:30 PM',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomRef = 'ADC-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 600);
  };

  const handleDownloadPass = () => {
    const textContent = `
ARHAM DENTAL CARE - APPOINTMENT PASS
-------------------------------------
Booking Ref: ${bookingRef}
Doctor: ${CLINIC_INFO.doctorName}
Patient Name: ${formData.patientName}
Phone: ${formData.phone}
Service: ${SERVICES_DATA.find((s) => s.id === formData.serviceId)?.title || 'Dental Consultation'}
Date: ${formData.date}
Time Slot: ${formData.timeSlot}
Location: ${CLINIC_INFO.address}
Google Maps: ${CLINIC_INFO.mapsLink}
Clinic Timings: ${CLINIC_INFO.timings}
-------------------------------------
Please arrive 10 minutes prior to your time slot.
    `;
    const element = document.createElement('a');
    const file = new Blob([textContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `ArhamDentalCare_Appointment_${bookingRef}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleSendWhatsApp = () => {
    const serviceName = SERVICES_DATA.find((s) => s.id === formData.serviceId)?.title || 'Consultation';
    const text = encodeURIComponent(
      `Hello Arham Dental Care, I booked an appointment.\nRef: ${bookingRef}\nPatient: ${formData.patientName}\nDate: ${formData.date} at ${formData.timeSlot}\nService: ${serviceName}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div 
      id="appointment-scheduler-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200 relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0C4A6E] to-[#075985] p-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Booking Desk</span>
          </div>

          <h3 className="text-xl font-bold font-display text-white">
            Book Appointment
          </h3>
          <p className="text-xs text-cyan-100 mt-0.5">
            {CLINIC_INFO.doctorName} • {CLINIC_INFO.addressShort}
          </p>
        </div>

        {/* Modal Content */}
        {!isConfirmed ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            
            {/* Doctor Info Callout */}
            <div className="p-3 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <div>
                  <span className="text-slate-500 block text-[10px]">Attending Doctor</span>
                  <span className="font-bold text-[#0C4A6E]">{CLINIC_INFO.doctorName}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-slate-500 block text-[10px]">Clinic Timings</span>
                <span className="font-bold text-[#06B6D4]">5:00 PM – 10:00 PM</span>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Select Dental Service *
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
              >
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.title} ({srv.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Appointment Date *
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Evening Time Slot *
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                >
                  {EVENING_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Patient Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Muhammad Usman"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Contact Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="0333 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Any Specific Dental Symptoms / Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Toothache on upper molar, need routine scaling..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
              />
            </div>

            {/* Trust note */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Your medical information is strictly confidential and protected.</span>
            </div>

            {/* Submit Button */}
            <button
              id="appointment-submit-btn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-[#0C4A6E] hover:bg-[#082F49] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Confirming Slot...</span>
              ) : (
                <>
                  <Calendar className="w-4 h-4 text-[#06B6D4]" />
                  <span>Confirm Appointment Reservation</span>
                </>
              )}
            </button>
          </form>
        ) : (
          /* Confirmation Pass Screen */
          <div className="p-6 text-center space-y-5 animate-in fade-in duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-emerald-600 font-extrabold">
                Appointment Confirmed
              </div>
              <h4 className="text-xl font-extrabold text-[#0C4A6E] font-display mt-1">
                See You Soon, {formData.patientName}!
              </h4>
              <div className="inline-block px-3 py-1 bg-sky-50 border border-sky-200 text-[#0C4A6E] font-mono text-xs font-bold rounded-lg mt-2">
                Booking ID: {bookingRef}
              </div>
            </div>

            {/* Summary Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Doctor:</span>
                <span className="font-bold text-slate-800">{CLINIC_INFO.doctorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-800">
                  {SERVICES_DATA.find((s) => s.id === formData.serviceId)?.title}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-bold text-emerald-700">{formData.date} at {formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-bold text-slate-800 truncate max-w-[200px]">{CLINIC_INFO.addressShort}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleDownloadPass}
                className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Pass</span>
              </button>

              <button
                onClick={handleSendWhatsApp}
                className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>WhatsApp Notice</span>
              </button>
            </div>

            <button
              onClick={() => {
                setIsConfirmed(false);
                onClose();
              }}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Done / Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
