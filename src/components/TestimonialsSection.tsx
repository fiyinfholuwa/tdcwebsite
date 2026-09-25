import React from 'react';
import { Quote, Building2, ShieldCheck, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "TDC's programme did more than give our managers new knowledge. It permanently changed how they approached everyday performance conversations, feedback, and accountability with their teams.",
      author: 'Oluwaseun Adeyemi',
      position: 'Head of Human Resources & Talent Development',
      organisation: 'Tier-1 Commercial Bank, West Africa',
      sector: 'Banking & Financial Services',
      metric: '+38% Quarterly KPI Achievement in 90 Days',
    },
    {
      quote:
        "Dr. Alfred Atiba's executive coaching gave our leadership team the strategic clarity and emotional intelligence required to steer complex operations during a volatile market restructuring.",
      author: 'Marcus Thornton',
      position: 'Executive Vice President of Operations',
      organisation: 'Pan-African Energy Consortium',
      sector: 'Oil & Gas / Energy',
      metric: 'Seamless Cross-Functional Alignment',
    },
    {
      quote:
        "We used to dread annual appraisals because of mutual resentment. Implementing the TDC 7-Stage Performance Engine replaced panic with regular bi-weekly coaching check-ins that our staff actually look forward to.",
      author: 'Folake Balogun-Davies',
      position: 'Director of People & Culture',
      organisation: 'International Hospitality Group',
      sector: 'Hospitality & Tourism',
      metric: '42% Drop in Voluntary Supervisor Turnover',
    },
    {
      quote:
        "Technical proficiency had never been an issue for our senior consultants, but managerial leadership was. TDC equipped our technical leads with the practical capability to delegate, coach, and resolve friction.",
      author: 'David Sterling',
      position: 'Managing Partner',
      organisation: 'Global Corporate Advisory & Audit',
      sector: 'Professional Services',
      metric: '100% On-Time Project Delivery Across Teams',
    },
  ];

  const trustedSectors = [
    { name: 'Commercial Banking & Capital Markets', count: '14+ Institutions' },
    { name: 'Upstream & Midstream Energy', count: '8 Multinational Operators' },
    { name: 'Luxury Hospitality & Leisure', count: '22+ Properties' },
    { name: 'Higher Education & Academies', count: '10+ Institutions' },
    { name: 'Public Sector & Development Agencies', count: 'Regional Ministries' },
    { name: 'Technology & Corporate Professional Firms', count: '30+ Enterprises' },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-red-700">
            17. Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            WHAT PEOPLE SAY ABOUT TDC
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            We partner with forward-thinking boards, human capital executives, and managers who
            demand interventions with tangible business impact.
          </p>
        </div>

        {/* 4 Strong Corporate Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-red-700 bg-red-50 py-1 px-2.5 rounded">
                    {t.sector}
                  </span>
                  <Quote className="w-6 h-6 text-slate-300 group-hover:text-red-400 transition-colors" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-600">{t.position}</div>
                  <div className="text-xs font-medium text-slate-500">{t.organisation}</div>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Verified Outcome: {t.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 18: Trusted Sectors & Track Record */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
              18. Sector Credibility
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              TRUSTED TO DEVELOP PEOPLE AND PERFORMANCE
            </h3>
            <p className="text-xs text-slate-600">
              Across 23+ years of practice, TDC and Dr. Alfred Atiba have delivered high-impact
              advisory across prime global sectors:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustedSectors.map((sec, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 hover:border-red-200 transition-colors shadow-2xs"
              >
                <div className="text-xs font-bold text-slate-800 leading-snug">{sec.name}</div>
                <div className="text-[11px] text-red-700 font-medium">{sec.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
