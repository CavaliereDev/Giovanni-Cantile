import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialShowcase from './components/SocialShowcase';
import CostCalculator from './components/CostCalculator';
import ProtocolSection from './components/ProtocolSection';
import FounderSection from './components/FounderSection';
import MissionSection from './components/MissionSection';
import GuidesSection from './components/GuidesSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyModal from './components/PrivacyModal';
import ConsultationModal from './components/ConsultationModal';
import { ArrowUp, MessageSquare, Calculator } from 'lucide-react';
import { SITE_CONFIG } from './data/content';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'social', 'chi-sono', 'protocollo', 'calcolatore', 'guide', 'faq', 'contatti'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollTo}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Sections */}
      <main style={{ flex: 1 }}>
        <Hero
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onScrollToIntake={() => scrollTo('contatti')}
          onScrollToCalculator={() => scrollTo('calcolatore')}
        />

        <SocialShowcase
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        <CostCalculator
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        <ProtocolSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        <FounderSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        <MissionSection />

        <GuidesSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        <FaqSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        <ContactSection
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollTo}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Modals */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Floating Action Badge & Scroll to Top */}
      <div
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.75rem',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          alignItems: 'flex-end',
        }}
      >
        {/* Floating Quick WhatsApp & Intake Trigger */}
        <button
          onClick={() => scrollTo('contatti')}
          className="btn-gold"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            borderRadius: '9999px',
            fontSize: '0.88rem',
            fontWeight: 700,
          }}
        >
          <MessageSquare size={16} />
          <span>Fai il Check-Up</span>
        </button>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              color: 'var(--emerald-950)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d4a737';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = 'var(--emerald-950)';
            }}
            aria-label="Torna all'inizio"
          >
            <ArrowUp size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
