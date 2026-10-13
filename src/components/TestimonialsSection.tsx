import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import accessBankLogo from '../assets/images/partners/access-bank.png';
import leadCityUniversityLogo from '../assets/images/partners/lead-city-university.jpg';
import undpLogo from '../assets/images/partners/undp.jpg';
import niitLogo from '../assets/images/partners/niit.jpeg';
import athleticsFederationLogo from '../assets/images/partners/athletics-federation-nigeria.jpg';
import nationalBureauOfStatisticsLogo from '../assets/images/partners/national-bureau-of-statistics.jpg';
import entLogo from '../assets/images/partners/ent.jpeg';
import beyondLogo from '../assets/images/partners/beyond.jpeg';
import hustleLogo from '../assets/images/partners/hustle.jpeg';
import jaliaLogo from '../assets/images/partners/jalia.jpeg';
import strengthLogo from '../assets/images/partners/strength.jpeg';
import kitchenLogo from '../assets/images/partners/kitchen.jpg';
import testimonial1 from '../assets/images/testimonials/test1.jpeg';
import testimonial2 from '../assets/images/testimonials/test2.jpeg';
import testimonial3 from '../assets/images/testimonials/test3.jpeg';
import testimonial4 from '../assets/images/testimonials/test4.jpeg';
import testimonial5 from '../assets/images/testimonials/test5.jpeg';
import testimonial6 from '../assets/images/testimonials/test6.jpeg';

export const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      image: testimonial2,
      quote:
        'Working with Dr. TripleA on our Technology Integration & Customer Relationship Management at Presken Hotel was both impressive and deeply motivating. His outstanding professionalism, combined with his unique integration of behavioral psychology and leadership science, delivered sustainable organizational improvements that continue to benefit us today.',
      author: 'Aderonke Kalejaye',
      position: 'F&B',
      organisation: 'Hospitality Industry, West Africa',
    },
    {
      image: testimonial1,
      quote:
        "Dr. Atiba's executive retreat facilitation was transformational for our core team. His strategic approach to performance acceleration delivered measurable outcomes that strengthened our competitive advantage.",
      author: 'Adetunji Adekunle Wonders',
      position: 'PRESIDENT',
      organisation: 'Professional Event Planners and Vendors Association of Nigeria',
    },
    {
      image: testimonial3,
      quote:
        'Working with Coach Atiba has been a game-changer for my business. As I position myself and navigate the route to building a good foundation for a successful business, his expertise and strategic guidance has helped me navigate complex challenges and unlock new opportunities. Coach Atiba\'s supportive and insightful approach has empowered me to achieve my goals and take my business to the next level. I highly recommend him to anyone seeking a trusted advisor and catalyst for growth.',
      author: 'Temitope Osimokun',
      position: 'CEO',
      organisation: 'Founder, LearnForward Leadership · Education Industry, UK',
    },
    {
      image: testimonial4,
      quote:
        'Dr. Atiba embodies the skills of a transformational leader—offering sharp analytical thinking, brand scaling strategies, and practical restructuring ideas that drive lasting impact. Because of the value I have received, I have confidently referred him to other organizations in need of growth, leadership restructuring, and sustainable business solutions.',
      author: 'Gwendolyn OSHONIYI',
      position: 'CEO / Creative Director',
      organisation: 'LadyGwen Media',
    },
    {
      image: testimonial5,
      quote:
        'Dr. Atiba is one of our global network of coaches for our Aspiring Entrepreneurs Program where he has supported women across Africa to start and scale their businesses profitably and sustainably. His outcomes-focused approach to mentoring helped our participants achieve tangible outcomes during the program.',
      author: 'Oluwaseyi Kehinde-Peters',
      position: 'Executive Director',
      organisation: 'PAWEN',
    },
    {
      image: testimonial6,
      quote:
        "Dr. Atiba's contributions have had a direct and measurable impact on our success. His blend of expertise, professionalism, and genuine commitment to client outcomes sets him apart. I highly recommend him to any organization looking to grow with clarity, purpose, and confidence.",
      author: 'Enoch Durotoye',
      position: 'CEO',
      organisation: 'Leadership Quotient International',
    },
  ];

  const currentTestimonial = testimonials[activeTestimonial];

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  const trustedSectors = [
    { name: 'Commercial Banking & Capital Markets', count: '14+ Institutions' },
    { name: 'Upstream & Midstream Energy', count: '8 Multinational Operators' },
    { name: 'Luxury Hospitality & Leisure', count: '22+ Properties' },
    { name: 'Higher Education & Academies', count: '10+ Institutions' },
    { name: 'Public Sector & Development Agencies', count: 'Regional Ministries' },
    { name: 'Technology & Corporate Professional Firms', count: '30+ Enterprises' },
  ];

  const partnerOrganizations = [
    { name: 'Access Bank', image: accessBankLogo },
    { name: 'Lead City University', image: leadCityUniversityLogo },
    { name: 'United Nations Development Programme', image: undpLogo },
    { name: 'NIIT', image: niitLogo },
    { name: 'Athletics Federation Nigeria', image: athleticsFederationLogo },
    { name: 'National Bureau of Statistics', image: nationalBureauOfStatisticsLogo },
    { name: 'ENT', image: entLogo },
    { name: 'Beyond', image: beyondLogo },
    { name: 'Hustle', image: hustleLogo },
    { name: 'Jalia', image: jaliaLogo },
    { name: 'Strength', image: strengthLogo },
    { name: 'Kitchen', image: kitchenLogo },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Success Stories */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-red-700">
              Testimonials
          </div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Client Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by people who lead.
            </h2>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <div className="min-w-16 text-sm font-semibold text-slate-500 tabular-nums">
              {String(activeTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </div>
            <button
              type="button"
              onClick={showPreviousTestimonial}
              className="h-11 w-11 rounded-full border border-slate-300 text-slate-700 flex items-center justify-center hover:border-red-700 hover:text-red-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={showNextTestimonial}
              className="h-11 w-11 rounded-full bg-red-700 text-white flex items-center justify-center hover:bg-red-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12">
          <article className="grid grid-cols-1 lg:grid-cols-[minmax(250px,0.72fr)_1.28fr] gap-8 lg:gap-12 bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-sm">
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={currentTestimonial.image}
                alt={`Portrait for testimonial from ${currentTestimonial.author}`}
                className="absolute inset-0 h-full w-full object-contain object-top"
              />
            </div>

            <div className="flex flex-col justify-between gap-8 py-2 sm:py-4">
              <div className="space-y-6">
                <Quote className="h-10 w-10 text-red-200" aria-hidden="true" />
                <p className="text-lg sm:text-xl leading-relaxed text-slate-700">
                  “{currentTestimonial.quote}”
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <div className="text-base font-bold text-slate-900">{currentTestimonial.author}</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-red-700">
                  {currentTestimonial.position}
                </div>
                <div className="mt-1 text-sm text-slate-500">{currentTestimonial.organisation}</div>
              </div>
            </div>
          </article>
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

          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Partner Organizations
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                ORGANIZATIONS WE HAVE WORKED WITH
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {partnerOrganizations.map((partner) => (
                <div
                  key={partner.name}
                  className="h-28 rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-center shadow-2xs"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-h-20 max-w-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
