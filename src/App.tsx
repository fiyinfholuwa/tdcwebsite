import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TdcPromise } from './components/TdcPromise';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PerformanceFramework } from './components/PerformanceFramework';
import { FeatureProgramme } from './components/FeatureProgramme';
import { IndustriesSection } from './components/IndustriesSection';
import { ApproachSection } from './components/ApproachSection';
import { LearningExperience } from './components/LearningExperience';
import { SpeakingSection } from './components/SpeakingSection';
import { FounderSection } from './components/FounderSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ExecutiveCardModal } from './components/ExecutiveCardModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isBusinessCardOpen, setIsBusinessCardOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('Executive Coaching');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForModal(serviceName);
    }
    setIsConsultationOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookSpeaker = () => {
    setSelectedServiceForModal('Speaking & Keynote Address');
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-700 selection:text-white flex flex-col">
      {/* 3-Zone Navigation Header */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenBusinessCard={() => setIsBusinessCardOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreServices={handleExploreServices}
          onOpenBusinessCard={() => setIsBusinessCardOpen(true)}
        />

        {/* 2. The TDC Promise */}
        <TdcPromise />

        {/* 3. About TDC & 4. Our Experience */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenBusinessCard={() => setIsBusinessCardOpen(true)}
        />

        {/* 5. What We Do - Our Core Services */}
        <ServicesSection
          onSelectService={(svc) => handleOpenConsultation(svc)}
        />

        {/* TDC Performance Management Framework (CLARITY → COACHING → CHECK-INS → FEEDBACK → REVIEW → IMPROVEMENT → ACCOUNTABILITY) */}
        <PerformanceFramework
          onOpenConsultation={() => handleOpenConsultation('Performance Management Systems')}
        />

        {/* 14. Flagship Masterclass Spotlight: Performance Management for Managers */}
        <FeatureProgramme
          onOpenConsultation={() => handleOpenConsultation('Performance Management for Managers')}
        />

        {/* 6. Industries We Serve */}
        <IndustriesSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 7. Our Approach ("We don't do training for training's sake") & 10. The High Performance Approach */}
        <ApproachSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 8. Our Learning Experience, 9. Why TDC, & 15. Results Section */}
        <LearningExperience />

        {/* 12. Speaking & Facilitation & 13. Corporate Training */}
        <SpeakingSection
          onBookSpeaker={handleBookSpeaker}
          onOpenConsultation={() => handleOpenConsultation('Executive Retreats & Training')}
        />

        {/* 16. About The Founder - Dr. Alfred Adeniyi Atiba & Interactive Executive Card */}
        <FounderSection
          onOpenConsultation={() => handleOpenConsultation('Executive Coaching')}
          onBookSpeaker={handleBookSpeaker}
        />

        {/* 17. Testimonials & 18. Verified Client Sectors */}
        <TestimonialsSection />

        {/* 19. Call to Action & 20. Contact Section */}
        <ContactSection preselectedSubject={selectedServiceForModal} />
      </main>

      {/* Corporate Quiet Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenBusinessCard={() => setIsBusinessCardOpen(true)}
      />

      {/* Floating Instant WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/2347055778282?text=Hello%20The%20Dr.3pleA%20Company,%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-950/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-xs font-bold"
          aria-label="Direct WhatsApp Contact with TDC"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp TDC</span>
        </a>
      </div>

      {/* Interactive Consultation / Proposal / Speaker Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={selectedServiceForModal}
      />

      {/* Interactive Founder Digital Executive Card Modal */}
      <ExecutiveCardModal
        isOpen={isBusinessCardOpen}
        onClose={() => setIsBusinessCardOpen(false)}
      />
    </div>
  );
}
