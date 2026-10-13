import React from 'react';
import { CheckCircle2, Calendar, Clock, MonitorPlay, Award, ArrowRight } from 'lucide-react';
import workshopImg from '../assets/images/real/hero3.png';

interface FeatureProgrammeProps {
  onOpenConsultation: () => void;
}

export const FeatureProgramme: React.FC<FeatureProgrammeProps> = ({ onOpenConsultation }) => {
  const programmeModules = [
    {
      title: 'Module 1: Setting Clear Expectations & OKRs',
      description: 'Translating corporate targets into unambiguous team and individual commitments.',
    },
    {
      title: 'Module 2: The Coaching Manager',
      description: 'Moving from task assigner to developmental coach through high-impact enquiry.',
    },
    {
      title: 'Module 3: Check-in Cadence & Fast Feedback',
      description: 'Structuring weekly touchpoints that pre-empt bottlenecks and eliminate fear.',
    },
    {
      title: 'Module 4: Managing Difficult Conversations & Conflict',
      description: 'Handling poor performance, emotional resistance, and interpersonal tension with poise.',
    },
    {
      title: 'Module 5: Diagnosing Lag & Building PIPs',
      description: 'Differentiating competence gaps from commitment issues with structured remediation.',
    },
    {
      title: 'Module 6: Embedding Mutual Accountability',
      description: 'Creating high-trust, high-accountability peer cultures that consistently hit quotas.',
    },
  ];

  return (
    <section id="training" className="py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flagship Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-red-400">
              Flagship TDC Masterclass
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              PERFORMANCE MANAGEMENT FOR MANAGERS
            </h2>
            <div className="text-lg sm:text-xl font-medium text-slate-300">
              From Appraisal to Performance Leadership
            </div>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-lg shadow-red-900/40 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Request Masterclass Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Facilitation photo & delivery specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative aspect-[16/10]">
              <img
                src={workshopImg}
                alt="TDC Corporate Management Workshop Facilitation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-200">
                Interactive workplace simulations, case studies & peer coaching
              </div>
            </div>

            {/* Delivery Specifications Grid */}
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-5 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Flexible Delivery Architecture:
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Full-Day / Multi-Day</span>
                </div>
                <div className="flex items-center gap-2">
                  <MonitorPlay className="w-4 h-4 text-red-400 shrink-0" />
                  <span>In-Person / Virtual / Hybrid</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Executive Retreats</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Leadership Academies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Modules & Objectives */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">
                What Managers Are Equipped To Deliver:
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                A highly practical management development programme designed to equip managers with
                the tools to diagnose underperformance, coach employees, give effective feedback, and
                consistently produce results through others.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {programmeModules.map((mod, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5 hover:border-slate-600 transition-colors"
                >
                  <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>{mod.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom summary statement */}
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/40 flex items-center justify-between gap-4">
              <div className="text-xs text-slate-200">
                <strong className="text-white">Core Principle:</strong> "Learning that becomes
                behaviour. Behaviour that improves performance."
              </div>
              <button
                onClick={onOpenConsultation}
                className="text-xs font-bold text-red-400 hover:text-white shrink-0 underline underline-offset-4"
              >
                Inquire For Your Team →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
