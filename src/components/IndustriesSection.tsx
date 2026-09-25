import React, { useState } from 'react';
import {
  Flame,
  Landmark,
  UtensilsCrossed,
  GraduationCap,
  Building,
  Globe2,
  Check,
  ArrowRight,
} from 'lucide-react';

interface IndustriesSectionProps {
  onOpenConsultation: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('banking');

  const industries = [
    {
      id: 'oil-gas',
      name: 'Oil & Gas / Energy',
      tagline: 'High-Stakes Operational & Safety-Conscious Leadership',
      description:
        'In hazardous and capital-intensive environments, leadership discipline and accountability are matter-of-life-and-death operational priorities. We build supervisors and managers who foster safety-first cultures without compromising execution speed.',
      capabilities: [
        'Safety-conscious leadership & hazard accountability',
        'Field supervisory capability & shift handoffs',
        'Cross-cultural engineering team alignment',
        'Crisis leadership & decisive decision-making',
        'Managing high-pressure contractor & vendor relationships',
      ],
      icon: Flame,
    },
    {
      id: 'banking',
      name: 'Banking & Financial Services',
      tagline: 'Sales Performance, Regulatory Precision & Service Excellence',
      description:
        'In an increasingly competitive fintech and commercial banking terrain, managers must balance aggressive revenue targets with customer experience and compliance. We transform bankers into relationship leaders.',
      capabilities: [
        'High-performance sales leadership & pipeline accountability',
        'Customer experience & executive client negotiation',
        'Branch & departmental performance management',
        'Emotional intelligence in high-stress financial environments',
        'Developing future commercial & retail banking leaders',
      ],
      icon: Landmark,
    },
    {
      id: 'hospitality',
      name: 'Hospitality & Tourism',
      tagline: 'Service Excellence, Guest Experience & Frontline Morale',
      description:
        'Hospitality lives and dies on frontline human interactions. We equip general managers, supervisors, and guest-facing staff with emotional intelligence, high service standards, and operational resilience.',
      capabilities: [
        'World-class customer service & service recovery',
        'Frontline supervisory leadership & employee engagement',
        'Reducing staff turnover through empathetic management',
        'Operational consistency across guest touchpoints',
        'Building a pride-driven service culture',
      ],
      icon: UtensilsCrossed,
    },
    {
      id: 'education',
      name: 'Education & Academic Institutions',
      tagline: 'Educator Effectiveness, Faculty Leadership & Institutional Growth',
      description:
        'Educational institutions require visionary academic leadership and supportive educator management. We help schools, universities, and training institutes foster teacher effectiveness and collaborative institutional leadership.',
      capabilities: [
        'Academic & administrative leadership development',
        'Educator effectiveness & constructive classroom coaching',
        'Emotional intelligence for administrators and staff',
        'Institutional culture & stakeholder communication',
        'Managing academic performance and student outcomes',
      ],
      icon: GraduationCap,
    },
    {
      id: 'corporate',
      name: 'Corporate & Professional Services',
      tagline: 'Executive Development, Client Trust & Organisational Agility',
      description:
        'For consulting, legal, accounting, and technology firms, intellectual capital and partner leadership are paramount. We groom technical subject-matter experts into persuasive commercial leaders.',
      capabilities: [
        'Partner & director executive presence and coaching',
        'Transitioning technical stars into people managers',
        'Strategic client communication and influence',
        'Billable performance & cross-functional collaboration',
        'Retention of high-performing young professionals',
      ],
      icon: Building,
    },
    {
      id: 'public',
      name: 'Public & Development Sector',
      tagline: 'Capacity Development, Public Governance & Impact Delivery',
      description:
        'Government ministries, parastatals, NGOs, and multilateral development agencies require sustainable capability building that delivers measurable public value and donor accountability.',
      capabilities: [
        'Public sector leadership & governance ethics',
        'Capacity development & institutional strengthening',
        'Project team effectiveness & cross-agency collaboration',
        'Stakeholder engagement & change management',
        'Performance improvement in bureaucratic systems',
      ],
      icon: Globe2,
    },
  ];

  const current = industries.find((i) => i.id === selectedIndustry) || industries[0];
  const CurrentIcon = current.icon;

  return (
    <section id="industries" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-red-700">
            06. Industries We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PERFORMANCE SOLUTIONS FOR DIFFERENT BUSINESS ENVIRONMENTS
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            TDC understands that people and performance dynamics differ drastically across sectors.
            We tailor every intervention to the commercial and regulatory reality of your industry.
          </p>
        </div>

        {/* Industry Interactive Filter Bar */}
        <div className="mt-12 flex flex-wrap gap-2 pb-2">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = selectedIndustry === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-red-400' : 'text-slate-500'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Card */}
        <div className="mt-8 bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-red-700">
                    Industry Tailored Architecture
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{current.name}</h3>
                </div>
              </div>

              <div className="text-sm font-semibold text-slate-800 italic">
                "{current.tagline}"
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-4 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Target Capabilities Addressed:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {current.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-2.5 rounded border border-slate-200/80">
                      <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 space-y-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Industry Intervention Delivery
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We begin every sector engagement with our diagnostic discovery to understand your
                unique organisational culture, operational KPIs, and workforce demographic before
                facilitating our first session.
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Typical Audience:</span>
                  <span className="font-semibold text-slate-900">Executive & Management</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Format:</span>
                  <span className="font-semibold text-slate-900">Executive Retreat / Custom Academy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Follow-through:</span>
                  <span className="font-semibold text-slate-900">90-Day Application Reviews</span>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full mt-4 py-2.5 px-4 text-xs font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request {current.name} Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
