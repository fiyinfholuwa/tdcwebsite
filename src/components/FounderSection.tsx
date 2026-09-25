import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  Award,
  Sparkles,
  MapPin,
  QrCode,
} from 'lucide-react';
import founderImg from '../assets/images/founder_dr_alfred_atiba_1790322482796.jpg';
import { TdcLogo } from './TdcLogo';

interface FounderSectionProps {
  onOpenConsultation: () => void;
  onBookSpeaker: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onOpenConsultation,
  onBookSpeaker,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Dr. Alfred Adeniyi Atiba
N:Atiba;Alfred;Adeniyi;Dr.;
ORG:The Dr.3pleA Company (TDC)
TITLE:Managing Director & The High Performance Catalyst
TEL;TYPE=CELL,VOICE:+2348063833657
TEL;TYPE=WORK,VOICE:+2347055778282
EMAIL;TYPE=WORK:alfred.atiba@gmail.com
URL:https://thehpcatalyst.com
NOTE:Executive Coaching · Performance Management · People Development
ADR;TYPE=WORK:;;Lagos · Ibadan;Nigeria;;;
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Dr_Alfred_Atiba_TDC.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-2 mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-red-700">
            16. About The Founder
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            DR. ALFRED ADENIYI ATIBA
          </h2>
          <div className="text-lg font-bold text-red-700">
            THE HIGH PERFORMANCE CATALYST
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography & Philosophy - 6 cols */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              <strong>Dr. Alfred Adeniyi Atiba</strong> is a leadership development professional,
              executive coach, management consultant, speaker, and people-development practitioner with
              over two decades of practical experience across global organizations.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              He has worked with organisations, boardrooms, and leaders across multiple sectors and
              geographies, helping individuals and teams develop the clarity, capacity, and leadership
              capability required to perform at an exceptional standard.
            </p>

            {/* The 4-Pillar Intersection Box */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                His Work Sits At The Strategic Intersection Of:
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm font-extrabold text-slate-900">
                <span className="px-3 py-1 bg-white rounded border border-slate-200 text-red-700">
                  Leadership
                </span>
                <span className="text-slate-400">+</span>
                <span className="px-3 py-1 bg-white rounded border border-slate-200 text-slate-900">
                  People
                </span>
                <span className="text-slate-400">+</span>
                <span className="px-3 py-1 bg-white rounded border border-slate-200 text-red-700">
                  Performance
                </span>
                <span className="text-slate-400">+</span>
                <span className="px-3 py-1 bg-white rounded border border-slate-200 text-slate-900">
                  Growth
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Through TDC, Dr. Alfred continues to partner with financial institutions, energy giants,
                conglomerates, and educational bodies to build resilient leaders and accountability-first
                cultures.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-sm transition-all"
              >
                Schedule Executive Coaching with Dr. Alfred
              </button>
              <button
                onClick={onBookSpeaker}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
              >
                Book Speaking Engagement
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Digital Business Card - 6 cols */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
              <span>Official Executive Business Card</span>
              <button
                onClick={downloadVCard}
                className="text-xs text-red-700 hover:text-red-800 font-semibold underline underline-offset-2"
              >
                Save Contact (vCard)
              </button>
            </div>

            {/* Replicated Card Container from the user upload */}
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl overflow-hidden">
              <div className="grid grid-cols-12 min-h-[300px]">
                {/* Red Left Accent Column (matching user's uploaded business card) */}
                <div className="col-span-4 bg-gradient-to-b from-red-700 via-red-800 to-red-900 p-4 sm:p-5 flex flex-col justify-between text-white relative">
                  <div className="space-y-4">
                    {/* TDC Group Badge */}
                    <div className="bg-white rounded-lg p-2.5 shadow-md flex flex-col items-center justify-center text-center">
                      <TdcLogo variant="mark" size="sm" />
                      <div className="text-[10px] font-black text-red-700 tracking-tighter mt-1">
                        TDC
                      </div>
                      <div className="text-[7px] font-bold text-slate-700 tracking-widest uppercase">
                        GROUP
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[8px] sm:text-[9px] font-bold tracking-wider uppercase text-red-100">
                        THE DR.3PLEA COMPANY
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 text-[7px] sm:text-[8px] uppercase tracking-wider text-red-200 font-semibold border-t border-red-600/60 pt-3">
                    <div>EXECUTIVE COACHING</div>
                    <div>PERFORMANCE MANAGEMENT</div>
                    <div>PEOPLE DEVELOPMENT</div>
                  </div>
                </div>

                {/* White Main Details Column */}
                <div className="col-span-8 p-5 sm:p-6 flex flex-col justify-between bg-white text-slate-900">
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                        ALFRED ADENIYI ATIBA
                      </h4>
                      <div className="text-xs font-bold text-red-700 tracking-wider uppercase">
                        MANAGING DIRECTOR
                      </div>
                    </div>

                    <div className="text-[11px] sm:text-xs text-slate-600 pt-1">
                      <strong className="text-slate-800">TDC — The Dr.3pleA Company</strong>
                      <div className="text-[10px] text-slate-500">
                        Executive Coaching • Performance Management • People Development
                      </div>
                    </div>

                    {/* Direct Contact Links */}
                    <div className="pt-3 space-y-2 text-xs">
                      {/* WhatsApp */}
                      <div className="flex items-center justify-between group">
                        <a
                          href="https://wa.me/2347055778282?text=Hello%20Dr.%20Alfred%20Atiba,%20I%20am%20reaching%20out%20via%20The%20Dr.3pleA%20Company%20website."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition-colors font-medium truncate"
                        >
                          <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                          <span className="font-semibold text-slate-900">WhatsApp:</span>
                          <span className="text-slate-600">+234 705 577 8282</span>
                        </a>
                        <button
                          onClick={() => copyToClipboard('+2347055778282', 'WhatsApp')}
                          className="text-[10px] text-slate-400 hover:text-red-700 px-1"
                          title="Copy WhatsApp"
                        >
                          {copiedField === 'WhatsApp' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>

                      {/* Mobile */}
                      <div className="flex items-center justify-between group">
                        <a
                          href="tel:+2348063833657"
                          className="flex items-center gap-2 text-slate-700 hover:text-red-700 transition-colors font-medium truncate"
                        >
                          <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                          <span className="font-semibold text-slate-900">Mobile:</span>
                          <span className="text-slate-600">+234 806 383 3657</span>
                        </a>
                        <button
                          onClick={() => copyToClipboard('+2348063833657', 'Mobile')}
                          className="text-[10px] text-slate-400 hover:text-red-700 px-1"
                          title="Copy Mobile"
                        >
                          {copiedField === 'Mobile' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>

                      {/* Email */}
                      <div className="flex items-center justify-between group">
                        <a
                          href="mailto:alfred.atiba@gmail.com"
                          className="flex items-center gap-2 text-slate-700 hover:text-red-700 transition-colors font-medium truncate"
                        >
                          <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                          <span className="text-slate-600">alfred.atiba@gmail.com</span>
                        </a>
                        <button
                          onClick={() => copyToClipboard('alfred.atiba@gmail.com', 'Email')}
                          className="text-[10px] text-slate-400 hover:text-red-700 px-1"
                          title="Copy Email"
                        >
                          {copiedField === 'Email' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                      </div>

                      {/* Website */}
                      <div className="flex items-center justify-between group">
                        <a
                          href="https://thehpcatalyst.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-slate-700 hover:text-red-700 transition-colors font-medium truncate"
                        >
                          <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                          <span className="text-slate-600">https://thehpcatalyst.com</span>
                        </a>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Footnote Bar on card */}
                  <div className="pt-4 mt-3 border-t border-slate-200 flex items-center justify-between text-[9px] font-bold tracking-wider uppercase text-slate-500">
                    <span>LAGOS · IBADAN · CANADA · UK · GHANA · RWANDA</span>
                    <span className="w-1.5 h-3 bg-red-700 rounded-xs" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Pills */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>{copiedField ? `Copied ${copiedField} to clipboard!` : 'Click to dial, chat, or copy credentials'}</span>
              <a
                href="https://wa.me/2347055778282?text=Hello%20Dr.%20Alfred%20Atiba,%20I%20would%20like%20to%20schedule%20a%20conversation."
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
