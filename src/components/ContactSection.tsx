import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Calendar,
  Building,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { TdcLogo } from './TdcLogo';

interface ContactSectionProps {
  preselectedSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedSubject }) => {
  const [formType, setFormType] = useState<'consultation' | 'proposal' | 'speaker'>(
    preselectedSubject?.includes('Speaking') ? 'speaker' : 'consultation'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    role: '',
    workforceSize: '50-250',
    serviceInterest: preselectedSubject || 'Executive Coaching',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-grade immediate confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const servicesList = [
    'Executive Coaching',
    'Performance Management Systems',
    'Leadership Development Programme',
    'Management Development (Equip Managers)',
    'People Development & Culture',
    'Speaking & Keynote Address',
    'Custom Corporate Academy / Retreat',
  ];

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 19: High-Impact Call to Action Banner */}
        <div className="bg-gradient-to-r from-red-800 via-red-700 to-rose-800 text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="text-xs font-bold uppercase tracking-widest text-red-200">
              19. Next Step
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              READY TO DEVELOP YOUR PEOPLE?
            </h2>
            <p className="text-base sm:text-lg text-red-100 leading-relaxed font-normal">
              Your organisation does not need another generic training programme. It needs the right
              intervention for the performance challenge you are trying to solve.
            </p>
            <p className="text-sm text-red-100">
              Whether you need to develop leaders, strengthen managers, improve performance, or build
              a stronger people culture, TDC can design an intervention around your objectives.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setFormType('consultation');
                  document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-red-800 bg-white hover:bg-red-50 rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                Book a Consultation
              </button>
              <button
                onClick={() => {
                  setFormType('proposal');
                  document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-red-950/70 hover:bg-red-950 border border-red-400/40 rounded-lg transition-colors whitespace-nowrap"
              >
                Request a Corporate Proposal
              </button>
              <button
                onClick={() => {
                  setFormType('speaker');
                  document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
              >
                Book Dr. Alfred Atiba
              </button>
            </div>
          </div>
        </div>

        {/* Section 20: Contact Information & Interactive Form */}
        <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-red-700">
                20. Contact Section
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                LET'S BUILD HIGHER-PERFORMING ORGANISATIONS.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Reach out to The Dr.3pleA Company today. Our team responds to executive inquiries
                within 24 business hours.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-2">
              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/2347055778282?text=Hello%20The%20Dr.3pleA%20Company,%20we%20are%20interested%20in%20discussing%20a%20people%20and%20performance%20engagement."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950">Direct WhatsApp Channel</div>
                    <div className="text-sm font-extrabold text-emerald-800">+234 705 577 8282</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 underline group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </a>

              {/* Direct Telephone */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>Direct Telephone / Mobile</span>
                </div>
                <div className="text-sm font-bold text-slate-900 pl-6">
                  <a href="tel:+2348063833657" className="hover:text-red-700">
                    +234 806 383 3657
                  </a>{' '}
                  <span className="text-slate-400 font-normal">/</span>{' '}
                  <a href="tel:+2347055778282" className="hover:text-red-700">
                    +234 705 577 8282
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-red-600" />
                  <span>Executive Email</span>
                </div>
                <div className="text-sm font-bold text-slate-900 pl-6">
                  <a href="mailto:alfred.atiba@gmail.com" className="hover:text-red-700">
                    alfred.atiba@gmail.com
                  </a>
                </div>
              </div>

              {/* Web Domain */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <Globe className="w-4 h-4 text-red-600" />
                  <span>Official Website</span>
                </div>
                <div className="text-sm font-bold text-slate-900 pl-6">
                  <a
                    href="https://thehpcatalyst.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-700"
                  >
                    https://thehpcatalyst.com
                  </a>
                </div>
              </div>

              {/* Global Footprint */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Operational Geographies</span>
                </div>
                <p className="text-xs text-slate-700 font-semibold pl-6">
                  Lagos · Ibadan · Canada · United Kingdom · Ghana · Rwanda
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column - 7 cols */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            {/* Form Intent Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg mb-6">
              <button
                type="button"
                onClick={() => setFormType('consultation')}
                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                  formType === 'consultation'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Book Consultation
              </button>
              <button
                type="button"
                onClick={() => setFormType('proposal')}
                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                  formType === 'proposal'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Request Proposal
              </button>
              <button
                type="button"
                onClick={() => setFormType('speaker')}
                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                  formType === 'speaker'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Book Keynote
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold text-slate-900">Thank You, {formData.name}</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your request for <strong>{formData.organisation || 'your organization'}</strong> has
                    been received. Dr. Alfred Atiba and the TDC executive team will review your
                    objectives and connect with you shortly.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        organisation: '',
                        role: '',
                        workforceSize: '50-250',
                        serviceInterest: 'Executive Coaching',
                        message: '',
                      });
                    }}
                    className="text-xs font-bold text-red-700 hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Adeyemi Adeleke"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Organisation / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Zenith Holdings"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Position / Role
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Managing Director / HR Director"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Focus Area
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors bg-white"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Describe Your Current People or Performance Challenge
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what needs to change in your organisation..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 text-sm font-bold text-white bg-red-700 hover:bg-red-800 active:bg-red-900 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>
                      {isSubmitting
                        ? 'Transmitting Request...'
                        : formType === 'consultation'
                        ? 'Book Executive Consultation'
                        : formType === 'proposal'
                        ? 'Submit Proposal Request'
                        : 'Inquire for Speaking'}
                    </span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Confidential executive inquiry</span>
                  <span>Direct founder response</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
