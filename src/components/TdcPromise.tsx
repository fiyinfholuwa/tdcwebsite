import React from 'react';
import { Target, TrendingUp, Users2, CheckCircle2 } from 'lucide-react';

export const TdcPromise: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-700">
            The TDC Promise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            PEOPLE ARE YOUR BIGGEST PERFORMANCE ADVANTAGE.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 font-medium pt-2">
            <span>Strategy matters.</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Systems matter.</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Technology matters.</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-red-700 font-bold">Ultimately, people execute strategy.</span>
          </div>
          <p className="text-slate-600 text-base leading-relaxed pt-1">
            At TDC, we help organisations strengthen the human capabilities required to turn strategy
            into execution and potential into performance.
          </p>
        </div>

        {/* 3 Core Intersection Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Leadership */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-red-200 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Pillar 01</div>
                <h3 className="text-xl font-bold text-slate-900">LEADERSHIP</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Developing leaders who can think strategically, lead people with empathy and vision,
                and consistently deliver business results.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Strategic decision-making & influence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Executive presence & clarity</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Performance */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-red-200 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Pillar 02</div>
                <h3 className="text-xl font-bold text-slate-900">PERFORMANCE</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Helping organisations create cultures of clarity, accountability, measurable KPIs,
                and continuous capability improvement.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>From appraisal to performance leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Manager accountability & check-in rhythms</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: People */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-red-200 transition-all shadow-sm hover:shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold">
                <Users2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Pillar 03</div>
                <h3 className="text-xl font-bold text-slate-900">PEOPLE</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building the capabilities, behaviours, emotional intelligence, and growth mindset
                required for sustainable organisational success.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Supervisory & managerial mastery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Collaborative team dynamics & ownership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Intersection Callout */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-red-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-bold text-red-700 uppercase tracking-wider">
              The TDC Brand Essence
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900">
              TDC HELPS ORGANISATIONS TURN PEOPLE POTENTIAL INTO BUSINESS PERFORMANCE.
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              We develop the leaders. We strengthen the managers. We build the capability. We improve
              the conversations. We strengthen accountability.
            </p>
          </div>
          <div className="shrink-0 text-sm font-semibold text-red-700 border-l-2 border-red-600 pl-4">
            Practical Leadership. <br />
            Measurable Performance.
          </div>
        </div>
      </div>
    </section>
  );
};
