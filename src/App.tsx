import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ProjectItem, STUDIO_BRAND } from './data/studioConfig';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IdeaSection } from './components/IdeaSection';
import { ServicesSection } from './components/ServicesSection';
import { BelieveSection } from './components/BelieveSection';
import { FounderSection } from './components/FounderSection';
import { AgencySection } from './components/AgencySection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { StudioAssistant } from './components/StudioAssistant';

export const App: React.FC = () => {
  const [brandName, setBrandName] = useState<string>(STUDIO_BRAND.name);
  const [lightNav, setLightNav] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [contactProjectRef, setContactProjectRef] = useState<string | undefined>(
    undefined
  );
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Adaptive header light/dark detector & active nav section tracker
  useEffect(() => {
    const handleScroll = () => {
      const headerSampleY = 84;
      const themedSections = document.querySelectorAll<HTMLElement>(
        '[data-nav-theme]'
      );

      let detectedLight = false;
      let currentSectionId = 'hero';

      themedSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= headerSampleY && rect.bottom > headerSampleY) {
          detectedLight = sec.getAttribute('data-nav-theme') === 'light';
          if (sec.id) {
            currentSectionId =
              sec.id === 'founder-teaser'
                ? 'believe'
                : sec.id === 'footer-cta'
                ? 'faq'
                : sec.id;
          }
        }
      });

      setLightNav(detectedLight);
      setActiveSection(currentSectionId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openContact = (projectRef?: string) => {
    setContactProjectRef(projectRef);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#06070A] text-[#F8FAFC] selection:bg-[#FF334B] selection:text-white">
      <Header
        lightNav={lightNav}
        activeSection={activeSection}
        onOpenContact={() => openContact()}
        onNavigate={scrollToSection}
        brandName={brandName}
      />

      <main>
        <HeroSection
          onOpenContact={() => openContact()}
          onSelectProject={(project) => setSelectedProject(project)}
          onScrollToWork={() => scrollToSection('work-showcase')}
        />

        <IdeaSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ServicesSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenContact={() => openContact()}
        />

        <BelieveSection
          brandName={brandName}
          onScrollToAgency={() => scrollToSection('agency')}
        />

        <FounderSection
          founderName={
            brandName === 'TESERACT' ? 'Gireesh' : STUDIO_BRAND.founderName
          }
          brandName={brandName}
          onOpenContact={() => openContact()}
        />

        <AgencySection
          brandName={brandName}
          onOpenContact={() => openContact()}
          onScrollToFaq={() => scrollToSection('faq')}
        />

        <FaqSection onOpenContact={() => openContact()} />
      </main>

      <FooterSection
        brandName={brandName}
        onChangeBrandName={(next) => setBrandName(next)}
        onOpenContact={() => openContact()}
        onSelectProject={(project) => setSelectedProject(project)}
        onNavigate={scrollToSection}
      />

      {/* Interactive Modals & Floating Studio Assistant */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        brandName={brandName}
        initialProjectRef={contactProjectRef}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilar={(title) => openContact(title)}
      />

      <StudioAssistant
        brandName={brandName}
        onOpenContact={() => openContact()}
      />
    </div>
  );
};

export default App;
