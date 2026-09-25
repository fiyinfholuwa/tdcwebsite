import React from 'react';
import {
  Sparkles,
  Layers,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  MessageSquareQuote,
  Target,
  Users,
} from 'lucide-react';

export const LearningExperience: React.FC = () => {
  const experiences = [
    'Facilitated discussions',
    'Business case studies',
    'Industry scenarios',
    'Role plays',
    'Manager simulations',
    'Group problem-solving',
    'Coaching exercises',
    'Structured reflection',
    'Peer-to-peer learning',
    '30-60-90 Day action planning',
    'Workplace application toolkits',
  ];

  const whyTdcReasons = [
    {
      title: 'Practical Experience',
      desc: 'Our work is grounded in real-world corporate leadership, management, and organisational challenges — not textbook hypotheticals.',
    },
    {
      title: 'Business-Relevant',
      desc: 'We connect people development directly to strategic board priorities, EBITDA margins, and measurable business performance.',
    },
    {
      title: 'Customised Architecture',
      desc: 'We reject one-size-fits-all training packs. Every intervention is custom-architected around your unique cultural landscape.',
    },
    {
      title: 'Highly Engaging',
      desc: 'Our programmes involve participants actively in simulations, debates, and peer critiques rather than passive slide lectures.',
    },
    {
      title: 'Action-Oriented',
      desc: 'Participants depart with concrete accountability commitments and actionable frameworks they can execute tomorrow morning.',
    },
    {
      title: 'Human-Centred',
      desc: 'We elevate bottom-line performance without losing sight of empathy, psychological safety, and the people behind the numbers.',
    },
  ];

  const resultsEvidence = [
    'Better conversations across executive and frontline ranks',
    'Stronger leadership behaviour and executive presence',
    'Improved accountability with zero missed delivery milestones',
    'Greater employee ownership and initiative',
    'Systematic, predictable performance management rhythms',
    'Stronger cross-functional team collaboration',
    'Increased managerial confidence in difficult situations',
    'Demonstrable workplace application beyond the workshop room',
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 08: Learning Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-red-700">
                08. Our Learning Experience
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                PRACTICAL. RELEVANT. ENGAGING. TRANSFORMATIONAL.
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              TDC programmes are deliberately engineered to move participants far beyond passive
              listening. We create high-engagement immersion environments where habits are challenged
              and practical capabilities are forged.
            </p>

            {/* Experience ingredients pill-free tags */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Intervention Modalities:
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {experiences.map((exp, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 py-1 px-3 bg-slate-100 rounded text-slate-800 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span>{exp}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Philosophy Manifesto Box */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-800 space-y-6">
            <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
              The TDC Learning Philosophy
            </div>
            <div className="space-y-3 font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-tight">
              <div>LESS THEORY.</div>
              <div className="text-red-400">MORE APPLICATION.</div>
              <div>BETTER CONVERSATIONS.</div>
              <div className="text-red-400">STRONGER LEADERS.</div>
              <div className="text-white">HIGHER PERFORMANCE.</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
              When we change the quality of conversations leaders have with their teams, we immediately
              change the performance outcomes of the organisation.
            </p>
          </div>
        </div>

        {/* Section 09: Why TDC */}
        <div className="mt-24 pt-16 border-t border-slate-200 space-y-12">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-red-700">
              09. Why TDC
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              WHY ORGANISATIONS WORK WITH US
            </h3>
            <p className="text-sm text-slate-600">
              Six core operational reasons corporate boards, human resource executives, and managing
              directors partner with The Dr.3pleA Company:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyTdcReasons.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-red-200 transition-all space-y-2"
              >
                <div className="text-xs font-mono font-bold text-red-700">0{idx + 1}</div>
                <h4 className="text-base font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 15: Results Section */}
        <div className="mt-24 p-8 sm:p-12 rounded-2xl bg-red-900 text-white relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="text-xs font-bold uppercase tracking-widest text-red-200">
              15. Results & Evidence
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              WE MEASURE SUCCESS BY WHAT CHANGES AFTER THE TRAINING.
            </h3>
            <p className="text-sm text-red-100 leading-relaxed font-normal">
              A successful intervention is not simply one where participants say:{' '}
              <em className="text-white">"That was a great session."</em> We look for concrete evidence of
              permanent operational and behavioral shift in the workplace:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-xs text-white">
              {resultsEvidence.map((ev, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-300 shrink-0" />
                  <span>{ev}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-red-800 text-sm font-bold tracking-wider uppercase text-red-200">
              OUR GOAL: LEARNING THAT BECOMES BEHAVIOUR. BEHAVIOUR THAT IMPROVES PERFORMANCE.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
