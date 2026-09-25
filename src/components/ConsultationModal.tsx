import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Phone, Mail } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Executive Coaching',
}) => {
  const [activeTab, setActiveTab] = useState<'consultation' | 'proposal' | 'speaker'>(
    initialService.includes('Speaking') ? 'speaker' : 'consultation'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    role: '',
    service: initialService,
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const services = [
    'Executive Coaching',
    'Performance Management Systems',
    'Leadership Development Programme',
    'Management Development (Equip Managers)',
    'People Development & Culture',
    'Speaking & Keynote Address',
    'Custom Corporate Academy / Retreat',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">Inquiry Received</h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Dr. Alfred Atiba and the TDC advisory
                team will review your requirements for <strong>{formData.organisation}</strong> and
                respond promptly.
              </p>
            </div>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={`https://wa.me/2347055778282?text=Hello%20Dr.%20Alfred,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(
                  formData.organisation || 'our company'
                )}%20regarding%20${encodeURIComponent(formData.service)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Follow up immediately via WhatsApp
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-slate-500 hover:text-slate-900 py-1"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-1 pr-6">
              <div className="text-xs font-bold uppercase tracking-widest text-red-700">
                The Dr.3pleA Company
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {activeTab === 'consultation'
                  ? 'Book Executive Consultation'
                  : activeTab === 'proposal'
                  ? 'Request Corporate Proposal'
                  : 'Book Dr. Alfred Atiba'}
              </h3>
              <p className="text-xs text-slate-600">
                Let's discuss how TDC can translate your people potential into measurable business
                performance.
              </p>
            </div>

            {/* Segmented Mode Selector */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveTab('consultation')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
                  activeTab === 'consultation'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Consultation
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('proposal')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
                  activeTab === 'proposal'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Corporate RFP
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('speaker')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
                  activeTab === 'speaker'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Keynote / Speaking
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Samuel Ade"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organisation *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="Organisation Name"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-red-600 outline-none bg-white"
                >
                  {services.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Brief Overview of Requirements
                </label>
                <textarea
                  rows={2}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about the challenge or event date..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-red-600 outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <span>{submitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href="https://wa.me/2347055778282?text=Hello%20TDC,%20I%20would%20like%20to%20discuss%20an%20executive%20programme."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Or connect instantly on WhatsApp (+234 705 577 8282)
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
