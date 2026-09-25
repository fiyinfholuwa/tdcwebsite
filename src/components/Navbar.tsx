import React, { useState, useEffect } from 'react';
import { TdcLogo } from './TdcLogo';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenBusinessCard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenBusinessCard }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Framework', href: '#framework' },
    { label: 'Industries', href: '#industries' },
    { label: 'Training', href: '#training' },
    { label: 'Speaking', href: '#speaking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Single element brand mark */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            aria-label="The Dr.3pleA Company - Home"
          >
            <TdcLogo size="sm" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-red-700 transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenBusinessCard}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 whitespace-nowrap"
              title="View Dr. Alfred Atiba's Executive Card"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              Founder Card
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-red-700 hover:bg-red-800 active:bg-red-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-red-600"
            >
              <span>Work With TDC</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-red-700 hover:bg-slate-100 rounded-lg focus-visible:outline-2 focus-visible:outline-red-600"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-red-700 hover:bg-red-50/60 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBusinessCard();
                  }}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md"
                >
                  View Founder Executive Card
                </button>
                <a
                  href="https://wa.me/2347055778282?text=Hello%20TDC,%20I%20would%20like%20to%20inquire%20about%20your%20leadership%20and%20performance%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-md hover:bg-emerald-100"
                >
                  <PhoneCall className="w-4 h-4" />
                  Direct WhatsApp: +234 705 577 8282
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
