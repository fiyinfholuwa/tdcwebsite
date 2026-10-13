import React, { useState } from 'react';
import {
  Briefcase,
  TrendingUp,
  Award,
  Users,
  UserCheck,
  Building2,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import coachingImg from '../assets/images/real/transform.png';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('01');

  const services = [
    {
      id: '01',
      number: '01',
      title: 'Executive Coaching',
      tagline: 'DEVELOP LEADERS WHO CAN THINK, LEAD AND DELIVER.',
      description:
        'Leadership becomes increasingly complex as responsibility increases. Our executive coaching engagements help leaders strengthen self-awareness, strategic thinking, communication, emotional intelligence, decision-making, influence and execution.',
      focusAreas: [
        'Executive leadership',
        'Leadership effectiveness',
        'Strategic thinking',
        'Emotional intelligence',
        'Communication and influence',
        'Decision-making',
        'Performance leadership',
        'Executive presence',
        'Personal effectiveness',
        'Leadership transition',
      ],
      ctaText: 'Explore Executive Coaching',
      badge: 'C-Suite & Senior Leaders',
      icon: Briefcase,
    },
    {
      id: '02',
      number: '02',
      title: 'Performance Management',
      tagline: 'TURN PERFORMANCE MANAGEMENT INTO PERFORMANCE LEADERSHIP.',
      description:
        'Performance management should not begin and end with an annual appraisal. TDC helps organisations build practical performance management systems and equip managers to create cultures of clarity, feedback, coaching and accountability.',
      focusAreas: [
        'Performance expectations & KPI alignment',
        'SMART goals and scorecards',
        'Courageous performance conversations',
        'Coaching for daily performance',
        'Constructive feedback culture',
        'Cadenced performance check-ins',
        'Objective performance reviews',
        'Diagnosing & managing underperformance',
        'Performance Improvement Plans (PIPs)',
        'Manager accountability & high-performance cultures',
      ],
      ctaText: 'Build a High-Performance Culture',
      badge: 'Organisational Architecture',
      icon: TrendingUp,
    },
    {
      id: '03',
      number: '03',
      title: 'Leadership Development',
      tagline: 'BUILD LEADERS FOR THE REAL WORLD OF WORK.',
      description:
        'Leadership is not simply about holding a position. It is the ability to create clarity, influence people, make sound decisions, build trust and produce results through others. Our programmes equip emerging, middle and senior leaders for complex environments.',
      focusAreas: [
        'Leadership fundamentals',
        'Leading high-performing teams',
        'Strategic leadership',
        'People leadership & empathy',
        'Emotional intelligence in action',
        'High-impact communication',
        'Conflict management',
        'Difficult workplace conversations',
        'Accountability & ownership',
        'Leading change & developing future leaders',
      ],
      ctaText: 'Design Leadership Programme',
      badge: 'Emerging & Middle Leaders',
      icon: Award,
    },
    {
      id: '04',
      number: '04',
      title: 'People Development',
      tagline: 'DEVELOP CAPABILITY. BUILD CONFIDENCE. IMPROVE PERFORMANCE.',
      description:
        'Organisations grow when their people grow. TDC designs customised learning and development interventions that address the real capability requirements of organisations, combining workplace scenarios, reflection, and rigorous action planning.',
      focusAreas: [
        'Management & supervisory development',
        'Employee capability enhancement',
        'Cross-functional communication',
        'Emotional intelligence at work',
        'Customer experience excellence',
        'Team effectiveness & psychological safety',
        'Personal effectiveness & time mastery',
        'Workplace relationships & collaboration',
        'Professional & career development',
        'High-performance mindset',
      ],
      ctaText: 'Upskill Your Workforce',
      badge: 'All-Staff Capability',
      icon: Users,
    },
    {
      id: '05',
      number: '05',
      title: 'Management Development',
      tagline: 'EQUIP MANAGERS TO MANAGE.',
      description:
        'Technical competence does not automatically make someone a good manager. TDC helps organisations develop managers who can effectively lead people, manage performance, communicate expectations and handle the realities of the workplace.',
      focusAreas: [
        'Effective delegation without micromanagement',
        'Coaching team members to autonomy',
        'Constructive continuous feedback',
        'Practical performance management',
        'Handling difficult conversations',
        'Constructive conflict management',
        'Team leadership & trust building',
        'Managerial accountability',
        'Objective decision-making',
        'Employee engagement & retention',
      ],
      ctaText: 'Equip Your Managers',
      badge: 'People Managers & Supervisors',
      icon: UserCheck,
    },
    {
      id: '06',
      number: '06',
      title: 'Culture & Organisational Performance',
      tagline: 'CULTURE IS WHAT PEOPLE DO WHEN NO ONE IS WATCHING.',
      description:
        'A strong organisational culture does not happen by accident. TDC works with organisations to strengthen the behaviours, leadership practices and people systems that influence how work gets done, creating conditions for people to perform at their best.',
      focusAreas: [
        'Leadership culture & executive alignment',
        'Accountability frameworks',
        'Employee workplace behaviour',
        'Team dynamics & mutual trust',
        'Transparent communication channels',
        'Translating corporate values into action',
        'Customer-centric service orientation',
        'Performance culture & meritocracy',
        'Cross-departmental collaboration',
        'Change readiness & resilience',
      ],
      ctaText: 'Transform Workplace Culture',
      badge: 'Enterprise Transformation',
      icon: Building2,
    },
  ];

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-red-700">
            05. What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            OUR CORE SERVICES
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            We provide practical, results-driven interventions structured across six core pillars of
            organisational excellence.
          </p>
        </div>

        {/* Desktop Interactive Layout: Left selector list + Right deep-dive card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services Selector Column - 5 cols */}
          <div className="lg:col-span-5 space-y-2">
            {services.map((svc) => {
              const Icon = svc.icon;
              const isActive = activeTab === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActiveTab(svc.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-center justify-between group ${
                    isActive
                      ? 'bg-white border-red-300 shadow-md text-slate-900'
                      : 'bg-white/60 hover:bg-white border-slate-200/80 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                        isActive
                          ? 'bg-red-700 text-white'
                          : 'bg-slate-100 text-slate-500 group-hover:text-red-700'
                      }`}
                    >
                      {svc.number}
                    </span>
                    <div className="truncate">
                      <div className="text-sm font-bold truncate">{svc.title}</div>
                      <div className="text-xs text-slate-500 truncate">{svc.badge}</div>
                    </div>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isActive ? 'bg-red-50 text-red-700' : 'text-slate-400 group-hover:translate-x-1'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Detail Showcase - 7 cols */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono font-bold text-red-700 uppercase">
                    SERVICE {currentService.number} OF 06
                  </span>
                  <span>{currentService.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentService.title}
                </h3>
                <div className="text-sm font-bold uppercase tracking-wider text-red-700">
                  {currentService.tagline}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentService.description}
              </p>

              {/* Photo highlight for Executive Coaching */}
              {currentService.id === '01' && (
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-200 relative">
                  <img
                    src={coachingImg}
                    alt="Executive Coaching at The Dr.3pleA Company"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded text-xs flex justify-between items-center">
                    <span>1-on-1 Confidential Senior Leadership Advisory</span>
                    <span className="text-red-400 font-semibold">TDC Executive Suite</span>
                  </div>
                </div>
              )}

              {/* Focus areas grid */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Core Focus & Capabilities Developed
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {currentService.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onSelectService(currentService.title)}
                  className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-red-700 hover:bg-red-800 rounded-lg shadow-sm transition-all flex items-center gap-2"
                >
                  <span>{currentService.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500">
                  Available in-person, virtual, or hybrid formats
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
