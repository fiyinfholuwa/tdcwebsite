import React, { useState } from 'react';
import {
  HelpCircle,
  Compass,
  Zap,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  FileCheck2,
  SlidersHorizontal,
} from 'lucide-react';

interface ApproachSectionProps {
  onOpenConsultation: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onOpenConsultation }) => {
  const [selectedDiagnostic, setSelectedDiagnostic] = useState<number>(0);

  const approachSteps = [
    {
      step: '01',
      title: 'THE PERFORMANCE GAP',
      question: 'What is happening now?',
      desc: 'We audit the existing friction, output blockages, and behavioural drag across your teams.',
    },
    {
      step: '02',
      title: 'THE DESIRED STATE',
      question: 'What should be happening?',
      desc: 'We define the clear, measurable operational benchmarks and business outcomes expected.',
    },
    {
      step: '03',
      title: 'THE CAPABILITY GAP',
      question: 'What is missing?',
      desc: 'We isolate whether the root cause is knowledge, skills, managerial behaviour, or system design.',
    },
    {
      step: '04',
      title: 'THE INTERVENTION',
      question: 'What creates the change?',
      desc: 'We design bespoke workshops, executive coaching, or performance frameworks tailored to your team.',
    },
    {
      step: '05',
      title: 'THE APPLICATION',
      question: 'How do people apply it?',
      desc: 'We embed workplace tools, accountability check-ins, and 30-60-90 day implementation commitments.',
    },
    {
      step: '06',
      title: 'THE OUTCOME',
      question: 'What is the measured ROI?',
      desc: 'We review behavioural change, improved conversation quality, and hard business metrics.',
    },
  ];

  const diagnosticScenarios = [
    {
      title: 'Managers Avoid Difficult Conversations',
      symptom: 'Underperformance festers because supervisors are afraid of conflict or hurting feelings.',
      rootCause:
        'Capability and Psychological Safety Gap. Managers lack structured conversational frameworks and fear damaging relationships.',
      recommendation:
        'Management Development: Module on Courageous Workplace Conversations & The 4-Step SBI Feedback Protocol.',
    },
    {
      title: 'Annual Appraisals Bring Shocks & Frustration',
      symptom: 'Employees are blindsided during year-end reviews, causing demoralisation and attrition.',
      rootCause:
        'Systemic Check-in Failure. Performance management is treated as an event rather than an everyday cadence.',
      recommendation:
        'Performance Management for Managers: Deploying the TDC 7-Stage Engine and Bi-weekly Check-in Scorecards.',
    },
    {
      title: 'Promoted Technical Stars Struggle as People Managers',
      symptom: 'Top engineers or accountants are promoted to manager but micromanage or fail to delegate.',
      rootCause:
        'Identity & Skill Transition Gap. They are still operating as solo individual contributors.',
      recommendation:
        'Executive Coaching & New Manager Transition Academy: Delegation, Emotional Intelligence, and Influence.',
    },
    {
      title: 'Departmental Silos & Lack of Ownership',
      symptom: 'Teams point fingers when deadlines are missed, waiting for executives to resolve every dispute.',
      rootCause:
        'Accountability & Culture Architecture. No shared cultural covenants or peer accountability mechanisms.',
      recommendation:
        'Culture & Organisational Performance Intervention: Values in Action, Mutual Accountability Covenants.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-red-700">
            07. Our Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            WE DON'T DO "TRAINING FOR TRAINING'S SAKE."
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Every TDC engagement begins with a simple question:{' '}
            <strong className="text-slate-900">What needs to change?</strong> We move through a
            rigorous 6-step diagnostic sequence to ensure every dollar invested delivers verifiable
            workplace performance.
          </p>
        </div>

        {/* 6-Step Visual Flow */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approachSteps.map((st) => (
            <div
              key={st.step}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 hover:border-red-300 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-red-50 group-hover:text-red-700">
                  STEP {st.step}
                </span>
                <span className="text-xs text-red-700 font-semibold">{st.question}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{st.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Diagnostic Selector */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Interactive Organisational Diagnostic</span>
          </div>

          <div className="max-w-2xl space-y-1">
            <h3 className="text-2xl font-bold text-slate-900">
              Where is your organisation experiencing friction?
            </h3>
            <p className="text-xs text-slate-600">
              Select a common organizational scenario to preview how TDC diagnoses and solves it:
            </p>
          </div>

          {/* Scenario tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {diagnosticScenarios.map((sc, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDiagnostic(idx)}
                className={`p-3.5 text-left rounded-xl text-xs font-semibold border transition-all ${
                  selectedDiagnostic === idx
                    ? 'bg-slate-900 text-white border-slate-900 shadow'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {sc.title}
              </button>
            ))}
          </div>

          {/* Diagnostic Result Box */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Observed Symptom:
                </div>
                <p className="text-xs text-slate-800 font-medium">
                  "{diagnosticScenarios[selectedDiagnostic].symptom}"
                </p>
                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-red-700">
                    TDC Root Cause Analysis:
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {diagnosticScenarios[selectedDiagnostic].rootCause}
                  </p>
                </div>
              </div>

              <div className="md:col-span-6 bg-white p-5 rounded-lg border border-red-200/80 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-red-600" />
                  <span>Recommended TDC Solution:</span>
                </div>
                <p className="text-xs font-semibold text-slate-900">
                  {diagnosticScenarios[selectedDiagnostic].recommendation}
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="w-full mt-2 py-2 px-3 text-xs font-bold text-white bg-red-700 hover:bg-red-800 rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Discuss Your Diagnostic Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Area High Performance Approach Framework */}
        <div className="mt-16 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-red-700">
              Section 10 · The High Performance Approach
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              FROM POTENTIAL TO PERFORMANCE
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              At TDC, we believe high performance is not an accident. It is built through intentional
              leadership, capability, clarity, and consistent execution across 5 critical areas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="text-red-700 font-extrabold text-lg">CLARITY</div>
              <p className="text-xs text-slate-600 font-medium">People understand what matters.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="text-red-700 font-extrabold text-lg">CAPABILITY</div>
              <p className="text-xs text-slate-600 font-medium">People know how to deliver.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="text-red-700 font-extrabold text-lg">CULTURE</div>
              <p className="text-xs text-slate-600 font-medium">
                People understand how work should be done.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="text-red-700 font-extrabold text-lg">ACCOUNTABILITY</div>
              <p className="text-xs text-slate-600 font-medium">People take ownership of results.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 text-center space-y-2">
              <div className="text-red-700 font-extrabold text-lg">CONTINUOUS IMPROVEMENT</div>
              <p className="text-xs text-slate-600 font-medium">
                People consistently seek better ways to perform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
