import React, { useState } from 'react';
import { Mic2, Presentation, Calendar, Award, Sparkles, Check, ArrowRight } from 'lucide-react';
import founderImg from '../assets/images/founder_dr_alfred_atiba_1790322482796.jpg';

interface SpeakingSectionProps {
  onBookSpeaker: () => void;
  onOpenConsultation: () => void;
}

export const SpeakingSection: React.FC<SpeakingSectionProps> = ({
  onBookSpeaker,
  onOpenConsultation,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('High Performance');

  const topics = [
    {
      title: 'High Performance & Personal Effectiveness',
      desc: 'How leaders and professionals transition from unchanneled potential to predictable, compounding performance.',
      audience: 'Conferences, Annual General Meetings, C-Suite retreats',
    },
    {
      title: 'Performance Management vs Appraisal',
      desc: 'Dismantling toxic annual appraisal anxiety and building everyday performance leadership.',
      audience: 'HR summits, Executive committees, Leadership retreats',
    },
    {
      title: 'Leading People Through Disruption',
      desc: 'How to maintain clarity, empathy, and strategic focus when market variables fluctuate wildly.',
      audience: 'Board retreats, Industry conferences, Executive forums',
    },
    {
      title: 'Emotional Intelligence & Executive Influence',
      desc: 'Mastering the human dynamics of decision-making, stakeholder alignment, and boardroom gravitas.',
      audience: 'Senior management seminars, Director roundtables',
    },
    {
      title: 'Culture is What Happens When No One is Watching',
      desc: 'Building self-regulating corporate cultures anchored on mutual accountability and customer devotion.',
      audience: 'All-hands gatherings, Enterprise kick-offs',
    },
    {
      title: 'Developing Future Leaders',
      desc: 'Bridging generational work styles and mentoring high-potential stars into strategic organizational pillars.',
      audience: 'Talent conferences, Management conventions',
    },
  ];

  const deliveryFormats = [
    { name: 'Keynote Addresses', duration: '45–90 Mins', focus: 'Conferences & Corporate Gatherings' },
    { name: 'Executive Retreats', duration: '1–3 Days', focus: 'Board & Senior Executive Alignment' },
    { name: 'Leadership Academies', duration: 'Modular', focus: 'Long-term capability pipelines' },
    { name: 'Interactive Workshops', duration: 'Half / Full Day', focus: 'Intensive skill and tool acquisition' },
  ];

  return (
    <section id="speaking" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-red-700">
            12. Speaking & Facilitation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            IDEAS THAT MOVE PEOPLE TO ACTION.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Dr. Alfred Adeniyi Atiba is a leadership and high-performance speaker and facilitator
            who brings energy, practical experience, and powerful ideas to corporate audiences.
          </p>
        </div>

        {/* 2-Column Speaker Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Speaker Portrait & Credential Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[4/5] group">
              <img
                src={founderImg}
                alt="Dr. Alfred Adeniyi Atiba Keynote Speaker"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs uppercase font-bold text-red-400">
                  Keynote Speaker & Lead Facilitator
                </div>
                <h3 className="text-xl font-bold">Dr. Alfred Adeniyi Atiba</h3>
                <p className="text-xs text-slate-300">
                  The High Performance Catalyst · 23+ Years Global Stage Experience
                </p>
                <div className="pt-3">
                  <button
                    onClick={onBookSpeaker}
                    className="w-full py-2.5 px-4 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow"
                  >
                    <Mic2 className="w-3.5 h-3.5" />
                    <span>Book Dr. Alfred Atiba</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Speaking attributes */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 grid grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-600" />
                <span>Storytelling & Wit</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-600" />
                <span>Audience Engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-600" />
                <span>Actionable Frameworks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-red-600" />
                <span>Real-World Case Studies</span>
              </div>
            </div>
          </div>

          {/* Key Topics & Formats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Keynote & Facilitation Repertoire:
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Tailored Addresses for Forward-Thinking Enterprises
              </h3>
            </div>

            <div className="space-y-3">
              {topics.map((t, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-red-200 transition-all space-y-1.5 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">{t.title}</span>
                    <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">
                      {t.audience}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>

            {/* Formats Grid */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Available Delivery Formats:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {deliveryFormats.map((f, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900">{f.name}</div>
                    <div className="text-[11px] text-red-700 font-semibold">{f.duration}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onBookSpeaker}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all"
              >
                Check Dr. Alfred's Speaking Availability
              </button>
              <button
                onClick={onOpenConsultation}
                className="text-xs font-semibold text-red-700 hover:text-red-800 underline underline-offset-4"
              >
                Inquire About Custom Retreat Facilitation →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
