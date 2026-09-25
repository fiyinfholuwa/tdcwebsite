import React from 'react';
import { TdcLogo } from './TdcLogo';
import { ArrowUp, Phone, Mail, Globe, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenBusinessCard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenBusinessCard }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col - 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <TdcLogo variant="white" size="md" />
            <p className="text-slate-400 leading-relaxed font-normal max-w-sm">
              The Dr.3pleA Company (TDC) helps organisations develop better leaders, strengthen
              people performance, build high-performing teams, and translate human potential into
              measurable business results.
            </p>
            <div className="text-[11px] text-slate-500 font-medium">
              Founded by Dr. Alfred Adeniyi Atiba — The High Performance Catalyst.
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenBusinessCard}
                className="text-xs font-semibold text-red-400 hover:text-white underline underline-offset-4"
              >
                View Dr. Alfred's Executive Contact Card →
              </button>
            </div>
          </div>

          {/* Core Services Nav - 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-xs">
              Core Capabilities
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Executive Coaching
                </a>
              </li>
              <li>
                <a href="#framework" className="hover:text-white transition-colors">
                  Performance Management Framework
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Leadership Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Management Development (Equip Managers)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  People Development Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Culture & Organisational Performance
                </a>
              </li>
            </ul>
          </div>

          {/* Programmes & Speaking - 2 cols */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-xs">
              Delivery Formats
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  Flagship Masterclass
                </a>
              </li>
              <li>
                <a href="#speaking" className="hover:text-white transition-colors">
                  Keynote Addresses
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  Executive Retreats
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  Leadership Academies
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Sector Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Locations & Contact - 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold uppercase tracking-wider text-white text-xs">
              Connect & Operations
            </div>
            <div className="space-y-2 text-slate-400">
              <div>
                <span className="text-slate-200 font-semibold">Geographies:</span> <br />
                Lagos · Ibadan · Canada · UK · Ghana · Rwanda
              </div>
              <div>
                <span className="text-slate-200 font-semibold">WhatsApp:</span>{' '}
                <a
                  href="https://wa.me/2347055778282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-slate-300"
                >
                  +234 705 577 8282
                </a>
              </div>
              <div>
                <span className="text-slate-200 font-semibold">Telephone:</span>{' '}
                <a href="tel:+2348063833657" className="hover:text-white text-slate-300">
                  +234 806 383 3657
                </a>
              </div>
              <div>
                <span className="text-slate-200 font-semibold">Email:</span>{' '}
                <a href="mailto:alfred.atiba@gmail.com" className="hover:text-white text-slate-300">
                  alfred.atiba@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-200 font-semibold">Web:</span>{' '}
                <a
                  href="https://thehpcatalyst.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-slate-300"
                >
                  thehpcatalyst.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} The Dr.3pleA Company (TDC). All Rights Reserved. Executive
            Coaching · Performance Management · People Development.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenConsultation}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Request Corporate RFP
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
