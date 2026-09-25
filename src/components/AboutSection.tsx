import React from 'react';
import { Check, Compass, Award, Building, Sparkles, ArrowRight } from 'lucide-react';
import founderImg from '../assets/images/founder_dr_alfred_atiba_1790322482796.jpg';

interface AboutSectionProps {
  onOpenConsultation: () => void;
  onOpenBusinessCard: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultation,
  onOpenBusinessCard,
}) => {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column - 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[3/4] group">
              <img
                src={founderImg}
                alt="Dr. Alfred Adeniyi Atiba - The High Performance Catalyst"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              {/* Bottom Card Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-xs uppercase tracking-widest text-red-400 font-bold mb-1">
                  Founder & Managing Director
                </div>
                <h3 className="text-xl font-bold">Dr. Alfred Adeniyi Atiba</h3>
                <p className="text-xs text-slate-300 font-medium mt-0.5">
                  The High Performance Catalyst
                </p>

                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                  <span className="text-[11px] text-slate-300">
                    23+ Years Practical Leadership
                  </span>
                  <button
                    onClick={onOpenBusinessCard}
                    className="text-xs font-semibold text-red-300 hover:text-white underline underline-offset-2 flex items-center gap-1"
                  >
                    View Executive Card
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick trust bar below photo */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between text-xs text-slate-600">
              <span className="font-semibold text-slate-900">Geographic Operations:</span>
              <span className="text-slate-700">Lagos · Ibadan · Canada · UK · Ghana · Rwanda</span>
            </div>
          </div>

          {/* Copy Column - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-red-700">
                03. About TDC
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                WE DEVELOP PEOPLE WHO DELIVER.
              </h2>
            </div>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              <strong>The Dr.3pleA Company (TDC)</strong> is a management consulting, leadership
              development, executive coaching, and people development firm focused on helping
              organisations and leaders achieve higher levels of performance.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Founded by <strong>Dr. Alfred Adeniyi Atiba — The High Performance Catalyst</strong>, TDC
              combines practical industry experience, leadership development, coaching, behavioural
              insight, and performance management to create learning experiences that translate into
              workplace action.
            </p>

            {/* Deliberately Practical callout */}
            <div className="p-5 rounded-xl bg-red-50/70 border-l-4 border-red-700 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-red-900">
                Our Deliberately Practical Philosophy
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                We do not believe organisations need more training that participants enjoy for two days
                and forget on Monday. We design interventions that help people think differently, lead
                differently, and perform differently.
              </p>
            </div>

            {/* Practical Experience Highlights */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                EXPERIENCE THAT GOES BEYOND THE CLASSROOM
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Executive & C-Suite Coaching:</strong> Strategic
                    thinking, influence, emotional intelligence, and execution.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Performance Architecture:</strong> Replacing
                    annual appraisals with daily and weekly performance leadership.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Managerial Capability:</strong> Equipping
                    technical experts with the human skills to manage and lead teams.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900">Cross-Sector Fluency:</strong> Banking, Energy,
                    Hospitality, Education, and Corporate Services across 6 countries.
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all"
              >
                Schedule an Executive Discovery Call
              </button>
              <button
                onClick={onOpenBusinessCard}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-red-700 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-all"
              >
                View Dr. Alfred's Direct Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
