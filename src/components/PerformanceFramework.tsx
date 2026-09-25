import React, { useState } from 'react';
import {
  Eye,
  MessageSquare,
  CalendarCheck,
  RotateCcw,
  FileCheck,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface PerformanceFrameworkProps {
  onOpenConsultation: () => void;
}

export const PerformanceFramework: React.FC<PerformanceFrameworkProps> = ({
  onOpenConsultation,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      name: 'CLARITY',
      headline: 'Set Clear Expectations & Measurable Goals',
      objective:
        'Eliminate ambiguity. Ensure every individual understands what success looks like, what is expected of them, and how their role directly impacts corporate strategy.',
      managerTools: [
        'SMART Goals & KPI Alignment Matrix',
        'Role expectation charters',
        'Priority calibration frameworks',
      ],
      businessOutcome:
        '100% alignment between strategic goals and frontline priorities; zero misunderstanding of accountability.',
      icon: Eye,
    },
    {
      step: '02',
      name: 'COACHING',
      headline: 'Coaching for Daily Performance & Capability',
      objective:
        'Move from directive instruction to empowering enquiry. Enable managers to ask high-leverage questions that unlock problem-solving in real-time.',
      managerTools: [
        'The TDC Catalyst Coaching Model',
        'Solution-focused questioning scripts',
        'Empowerment vs micromanagement guardrails',
      ],
      businessOutcome:
        'Autonomous teams that resolve workplace bottlenecks faster without constant executive escalation.',
      icon: MessageSquare,
    },
    {
      step: '03',
      name: 'CHECK-INS',
      headline: 'Cadenced, Predictable Performance Conversations',
      objective:
        'Replace once-a-year panic with lightweight, structured weekly or bi-weekly check-ins that address hurdles before they become quarterly failures.',
      managerTools: [
        '15-minute 1-on-1 check-in templates',
        'Obstacle removal protocols',
        'Progress tracking scorecards',
      ],
      businessOutcome:
        'Continuous visibility into progress; elimination of end-of-quarter delivery surprises.',
      icon: CalendarCheck,
    },
    {
      step: '04',
      name: 'FEEDBACK',
      headline: 'Timely, Actionable, & Candid Feedback Culture',
      objective:
        'Normalize constructive feedback as an everyday tool for growth, eliminating fear and defensiveness while maintaining psychological safety.',
      managerTools: [
        'Non-confrontational feedback frameworks',
        'The Situation-Behaviour-Impact-Action model',
        'Positive reinforcement techniques',
      ],
      businessOutcome:
        'Accelerated behavioral correction and a culture where high standards are welcomed rather than resented.',
      icon: RotateCcw,
    },
    {
      step: '05',
      name: 'REVIEW',
      headline: 'Objective, Data-Grounded Performance Reviews',
      objective:
        'Conduct objective evaluations based on documented evidence and milestones rather than recency bias or subjective impressions.',
      managerTools: [
        'Evidence-based review rubrics',
        'Bias-reduction evaluation sheets',
        'Collaborative performance scoring',
      ],
      businessOutcome:
        'Fair, transparent appraisals that reinforce trust between employees, managers, and HR leadership.',
      icon: FileCheck,
    },
    {
      step: '06',
      name: 'IMPROVEMENT',
      headline: 'Diagnosing Underperformance & Remediation',
      objective:
        'Quickly diagnose root causes of lag (skill gap vs will gap vs system blocker) and construct precise Performance Improvement Plans (PIPs).',
      managerTools: [
        'Underperformance diagnostic flowcharts',
        '30-60-90 Day PIP agreements',
        'Clear milestone recovery roadmaps',
      ],
      businessOutcome:
        'Rapid turnaround of underperforming assets or clean, legally defensible, dignified organizational exits.',
      icon: TrendingUp,
    },
    {
      step: '07',
      name: 'ACCOUNTABILITY',
      headline: 'Sustained Ownership & High-Performance Culture',
      objective:
        'Establish firm managerial and employee accountability where consequences, recognition, and performance are consistently honoured.',
      managerTools: [
        'Ownership agreements',
        'High-performance cultural covenants',
        'Merit-based recognition models',
      ],
      businessOutcome:
        'Self-regulating high-performance culture where excellence is standard and mediocrity cannot hide.',
      icon: ShieldAlert,
    },
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="framework" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-red-700">
            TDC Intellectual Property
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            THE TDC PERFORMANCE MANAGEMENT FRAMEWORK
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            From appraisal to performance leadership. Our proven 7-stage engine turns performance
            management from an annual administrative burden into an everyday driver of revenue and growth.
          </p>
        </div>

        {/* 7-Step Interactive Flow Line */}
        <div className="mt-12 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center min-w-[760px] justify-between gap-1">
            {steps.map((st, idx) => {
              const isSelected = idx === activeStep;
              return (
                <React.Fragment key={st.step}>
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`flex-1 flex flex-col items-center p-3 rounded-xl border text-center transition-all group ${
                      isSelected
                        ? 'bg-red-700 border-red-700 text-white shadow-md shadow-red-900/20 ring-2 ring-red-600/30'
                        : 'bg-slate-50 hover:bg-white border-slate-200 text-slate-700 hover:border-red-300'
                    }`}
                  >
                    <span
                      className={`text-[11px] font-mono font-bold mb-1 ${
                        isSelected ? 'text-red-200' : 'text-slate-400 group-hover:text-red-700'
                      }`}
                    >
                      {st.step}
                    </span>
                    <span
                      className={`text-xs font-extrabold tracking-wide ${
                        isSelected ? 'text-white' : 'text-slate-800'
                      }`}
                    >
                      {st.name}
                    </span>
                  </button>

                  {idx < steps.length - 1 && (
                    <div className="text-slate-300 px-1 font-bold text-sm shrink-0">
                      →
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Deep Dive on the Selected Stage */}
        <div className="mt-8 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left 7 cols */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center font-bold">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
                    STAGE {current.step} OF 07 · THE PERFORMANCE ENGINE
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {current.name}: {current.headline}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed pt-2">
                {current.objective}
              </p>

              {/* Manager practical toolkit */}
              <div className="pt-4 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Manager Tools & Practical Toolkits:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                  {current.managerTools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-800/80 px-3 py-2 rounded border border-slate-700/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols - Business impact container */}
            <div className="lg:col-span-5 bg-slate-800/90 border border-slate-700 rounded-xl p-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Measurable Business Outcome</span>
              </div>

              <p className="text-sm font-semibold text-white leading-relaxed">
                "{current.businessOutcome}"
              </p>

              <div className="pt-4 border-t border-slate-700/80 space-y-3">
                <div className="text-xs text-slate-400">
                  Ready to deploy this framework in your organization?
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-4 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Build This System With TDC</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stepper Navigation Indicator */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div>
              Click any stage above to inspect manager tools and business outcomes.
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
