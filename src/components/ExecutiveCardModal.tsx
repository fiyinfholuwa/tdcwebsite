import React, { useState, useEffect } from 'react';
import { X, Copy, Check, MessageCircle, Phone, Mail, Globe, Download, Sparkles } from 'lucide-react';
import { TdcLogo } from './TdcLogo';

interface ExecutiveCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveCardModal: React.FC<ExecutiveCardModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);

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

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
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
    link.setAttribute('download', 'Dr_Alfred_Adeniyi_Atiba.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Corporate Credential</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Dr. Alfred Adeniyi Atiba — Executive Card
          </h3>
          <p className="text-xs text-slate-400">
            Managing Director · The Dr.3pleA Company (TDC)
          </p>
        </div>

        {/* The Exact Business Card Replica */}
        <div className="bg-white rounded-2xl border-2 border-slate-300 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-12 min-h-[290px]">
            {/* Left Crimson Panel */}
            <div className="col-span-4 bg-gradient-to-b from-red-700 via-red-800 to-red-950 p-4 sm:p-5 flex flex-col justify-between text-white">
              <div className="space-y-3">
                {/* White Rounded Badge with Logo */}
                <div className="bg-white rounded-xl p-3 shadow-md flex flex-col items-center justify-center text-center">
                  <TdcLogo variant="mark" size="sm" />
                  <div className="text-[12px] font-black text-red-700 tracking-tighter mt-1">
                    TDC
                  </div>
                  <div className="text-[8px] font-extrabold text-slate-800 tracking-widest uppercase">
                    GROUP
                  </div>
                </div>

                <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-red-100 text-center">
                  THE DR.3PLEA COMPANY
                </div>
              </div>

              <div className="space-y-1 text-[7px] sm:text-[8px] font-bold uppercase tracking-wider text-red-200 border-t border-red-600/60 pt-3">
                <div>EXECUTIVE COACHING</div>
                <div>PERFORMANCE MANAGEMENT</div>
                <div>PEOPLE DEVELOPMENT</div>
              </div>
            </div>

            {/* Right Card Body */}
            <div className="col-span-8 p-5 sm:p-6 flex flex-col justify-between bg-white text-slate-900">
              <div className="space-y-2">
                <div>
                  <h4 className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    ALFRED ADENIYI ATIBA
                  </h4>
                  <div className="text-[11px] sm:text-xs font-bold text-red-700 tracking-widest uppercase">
                    MANAGING DIRECTOR
                  </div>
                </div>

                <div className="text-xs text-slate-600 pt-1">
                  <div className="font-bold text-slate-900">TDC — The Dr.3pleA Company</div>
                  <div className="text-[11px] text-slate-500">
                    Executive Coaching • Performance Management • People Development
                  </div>
                </div>

                {/* Direct Detail Lines */}
                <div className="pt-3 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <span className="font-bold text-slate-800">WhatsApp:</span>
                    <a
                      href="https://wa.me/2347055778282"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-emerald-700"
                    >
                      +234 705 577 8282
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <span className="font-bold text-slate-800">Mobile:</span>
                    <a href="tel:+2348063833657" className="text-slate-700 hover:text-red-700">
                      +234 806 383 3657
                    </a>
                  </div>

                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <span className="font-bold text-slate-800">Email:</span>
                    <a
                      href="mailto:alfred.atiba@gmail.com"
                      className="text-slate-700 hover:text-red-700 truncate"
                    >
                      alfred.atiba@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <span className="font-bold text-slate-800">Web:</span>
                    <a
                      href="https://thehpcatalyst.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-red-700 truncate"
                    >
                      https://thehpcatalyst.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Geo footer on card */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[9px] font-bold tracking-wider uppercase text-slate-500">
                <span>LAGOS · IBADAN · CANADA · UK · GHANA · RWANDA</span>
                <span className="w-1.5 h-3.5 bg-red-700 rounded-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons for Mobile / Desktop Users */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <a
            href="https://wa.me/2347055778282?text=Hello%20Dr.%20Alfred%20Atiba,%20I%20am%20reaching%20out%20via%20The%20Dr.3pleA%20Company%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+2348063833657"
            className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
          >
            <Phone className="w-4 h-4" />
            <span>Call Mobile</span>
          </a>

          <button
            onClick={downloadVCard}
            className="py-2.5 px-3 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow"
          >
            <Download className="w-4 h-4" />
            <span>Save Contact</span>
          </button>
        </div>

        {/* Quick copy indicator */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCopy('+2347055778282', 'WhatsApp')}
              className="hover:text-white transition-colors"
            >
              {copied === 'WhatsApp' ? '✓ Copied WA' : 'Copy WA'}
            </button>
            <button
              onClick={() => handleCopy('alfred.atiba@gmail.com', 'Email')}
              className="hover:text-white transition-colors"
            >
              {copied === 'Email' ? '✓ Copied Email' : 'Copy Email'}
            </button>
          </div>
          <span>Official Identity Verification</span>
        </div>
      </div>
    </div>
  );
};
