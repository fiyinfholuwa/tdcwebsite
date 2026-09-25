import React from 'react';
import { ArrowRight, ShieldCheck, Users, Globe2, Award, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero_executive_boardroom_1790322466897.jpg';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
  onOpenBusinessCard: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreServices,
  onOpenBusinessCard,
}) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-900 text-white">
      {/* Background visual asset with high-grade optical contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="The Dr.3pleA Company Executive Boardroom Consulting"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-75 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy - 7 cols */}
          <div className="lg:col-span-8 space-y-6">
            {/* Unboxed Brand Kicker (Anti-Pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-400">
              <span>The Dr.3pleA Company</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>TDC Corporate</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Executive Advisory</span>
            </div>

            {/* Dominant Headline (Balanced, no orphan words) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-3xl [text-wrap:balance]">
              DEVELOP PEOPLE.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-rose-400">
                ELEVATE PERFORMANCE.
              </span>{' '}
              TRANSFORM ORGANISATIONS.
            </h1>

            {/* Core Value Proposition Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              At The Dr.3pleA Company, we help organisations unlock the performance of their people
              through practical leadership development, executive coaching, performance management,
              and strategic people development solutions.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              With deep practical experience across corporate leadership, we work with organisations
              that want more than inspirational training. We help leaders perform better, teams work
              better, and organisations grow stronger.
            </p>

            {/* Actions Block */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-lg shadow-red-900/40 hover:shadow-red-900/60 transition-all flex items-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-red-500"
              >
                <span>Work With TDC</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg backdrop-blur-sm transition-all whitespace-nowrap"
              >
                Explore Our Services
              </button>

              <button
                onClick={onOpenBusinessCard}
                className="text-xs text-slate-400 hover:text-red-400 underline underline-offset-4 transition-colors py-2 px-1"
              >
                Direct Contact & Credentials →
              </button>
            </div>

            {/* Core Pillars Text Separation */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">CORE POSITIONING:</span>
              <span className="text-white font-medium">Executive Coaching</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-white font-medium">Performance Management</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-white font-medium">People Development</span>
            </div>
          </div>

          {/* Quick Credential Card - 4 cols */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl" />

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400 mb-4">
                <Sparkles className="w-4 h-4 text-red-400" />
                <span>The TDC Difference</span>
              </div>

              <h2 className="text-lg font-bold text-white mb-2 leading-snug">
                Practical Workplace Action Over Classroom Theory
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                "We do not believe organisations need more training that participants enjoy for two days
                and forget on Monday. We design interventions that help people think differently, lead
                differently, and perform differently."
              </p>

              {/* Founder quote attribution */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Dr. Alfred Adeniyi Atiba</div>
                  <div className="text-[11px] text-slate-400">The High Performance Catalyst</div>
                </div>
                <button
                  onClick={onOpenBusinessCard}
                  className="px-2.5 py-1 text-[11px] font-medium text-red-300 hover:text-white bg-red-950/60 hover:bg-red-900/80 border border-red-800/40 rounded transition-colors"
                >
                  View Card
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Metrics Ribbon */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              23+
            </div>
            <div className="text-xs font-medium text-slate-300">Years Practical Experience</div>
            <div className="text-[11px] text-slate-400">Leadership & corporate management</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              5,000+
            </div>
            <div className="text-xs font-medium text-slate-300">Professionals Reached Globally</div>
            <div className="text-[11px] text-slate-400">Executives, managers & supervisors</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              Multi-Sector
            </div>
            <div className="text-xs font-medium text-slate-300">Corporate & Organisational Impact</div>
            <div className="text-[11px] text-slate-400">Banking, Energy, Hospitality, Education</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              6 Geographies
            </div>
            <div className="text-xs font-medium text-slate-300">Global Operational Footprint</div>
            <div className="text-[11px] text-slate-400">Nigeria · UK · Canada · Ghana · Rwanda · USA</div>
          </div>
        </div>
      </div>
    </section>
  );
};
