import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  X, 
  ShieldCheck, 
  Key, 
  Lock, 
  Smartphone, 
  CheckCircle2, 
  AlertCircle,
  FileCheck,
  Zap,
  Server
} from 'lucide-react';

interface SecurityPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityPortalModal: React.FC<SecurityPortalModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'mfa' | 'scans' | 'compliance'>('mfa');
  const [mfaCode, setMfaCode] = useState('');
  const [mfaVerified, setMfaVerified] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);

  if (!isOpen) return null;

  const handleVerifyMfa = (e: React.FormEvent) => {
    e.preventDefault();
    if (mfaCode.length >= 4) {
      setMfaVerified(true);
    }
  };

  const handleRunSecurityScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1200);
  };

  return (
    <div 
      id="security-portal-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#0C4A6E] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-500/20 rounded-xl text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">
                Clinic Security & Patient Portal
              </h3>
              <p className="text-xs text-cyan-200">
                Encrypted Authentication & Automated Vulnerability Guard
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

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 pt-2 gap-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('mfa')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'mfa' ? 'border-[#06B6D4] text-[#0C4A6E]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            OAuth & 2FA / MFA
          </button>
          <button
            onClick={() => setActiveTab('scans')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'scans' ? 'border-[#06B6D4] text-[#0C4A6E]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Vulnerability Scans
          </button>
          <button
            onClick={() => setActiveTab('compliance')}
            className={`pb-2.5 px-3 border-b-2 transition-colors ${
              activeTab === 'compliance' ? 'border-[#06B6D4] text-[#0C4A6E]' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            HIPAA & SSL Status
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {activeTab === 'mfa' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-100 text-xs text-[#0C4A6E] flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Zero-Trust Patient Data Encryption</span>
                  <span>All dental records, X-rays, and prescription history are protected with 256-bit AES encryption.</span>
                </div>
              </div>

              {!mfaVerified ? (
                <form onSubmit={handleVerifyMfa} className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-[#06B6D4]" />
                    <span>Multi-Factor (MFA) Verification Simulation</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Enter the 6-digit one-time passcode sent to your registered phone (e.g. 786110).
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={6}
                      placeholder="e.g. 786110"
                      value={mfaCode}
                      onChange={(e) => setMfaCode(e.target.value)}
                      className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs font-mono font-bold tracking-widest text-center"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#0C4A6E] text-white font-bold text-xs rounded-lg hover:bg-[#082F49]"
                    >
                      Verify MFA
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Multi-Factor Identity Verified (Authenticated Session)</span>
                  </div>
                  <p className="text-[11px] text-emerald-700">
                    Patient portal session established under encrypted token: <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">ADC_SEC_7894A</code>.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block">OAuth 2.0 / OpenID:</span>
                  <span className="font-bold text-emerald-700">Active & Enforced</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block">Session Timeout:</span>
                  <span className="font-bold text-slate-800">15 min idle lock</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scans' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Automated Pipeline Vulnerability Scan</h4>
                  <p className="text-[11px] text-slate-500">Continuous static analysis & runtime attack prevention</p>
                </div>
                <button
                  onClick={handleRunSecurityScan}
                  disabled={isScanning}
                  className="px-3 py-1.5 bg-[#06B6D4] hover:bg-cyan-600 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{isScanning ? 'Scanning...' : 'Run Scan'}</span>
                </button>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-600">SQL Injection / NoSQL Injection Check:</span>
                  <span className="font-bold text-emerald-600">Passed (0 Vulnerabilities)</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-600">Cross-Site Scripting (XSS) Sanitization:</span>
                  <span className="font-bold text-emerald-600">Enforced</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-600">Cross-Origin Resource Sharing (CORS):</span>
                  <span className="font-bold text-emerald-600">Restricted</span>
                </div>
                <div className="py-2 flex items-center justify-between">
                  <span className="text-slate-600">TLS 1.3 / HTTPS Encryption:</span>
                  <span className="font-bold text-emerald-600">A+ Rating</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Medical Confidentiality Standards</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Patient contact numbers, medical histories, and treatment logs are never shared with third-party advertisers.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-[#06B6D4]" />
                  <span>High-Availability Cloud Architecture</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Distributed cloud CDN ensures 99.99% uptime and instant zero-latency page loads worldwide.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0C4A6E] text-white font-bold text-xs rounded-xl"
          >
            Close Security View
          </button>
        </div>
      </div>
    </div>
  );
};
