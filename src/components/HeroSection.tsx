import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { STUDIO_BRAND, DISCIPLINES, PROJECTS, ProjectItem } from '../data/studioConfig';
import { GeometricLogo } from './ui/GeometricLogo';
import { RollButton } from './ui/RollButton';
import { ProjectMockup } from './ui/ProjectMockup';

interface HeroSectionProps {
  onOpenContact: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onScrollToWork: () => void;
}

type CategoryFilter = 'all' | 'ecommerce' | 'saas-ai' | 'interactive' | 'editorial';

const CATEGORY_FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Work (16)' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'saas-ai', label: 'SaaS & AI' },
  { id: 'interactive', label: 'Interactive & Spatial' },
  { id: 'editorial', label: 'Brand & Editorial' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onSelectProject,
  onScrollToWork,
}) => {
  const [pillIdx, setPillIdx] = useState(0);
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [mobileShowAll, setMobileShowAll] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPillIdx((prev) => (prev + 1) % STUDIO_BRAND.heroPills.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const matchesFilter = (p: ProjectItem): boolean => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ecommerce') {
      return p.mockupType === 'fashion' || p.mockupType === 'ecommerce';
    }
    if (activeFilter === 'saas-ai') {
      return p.mockupType === 'saas' || p.mockupType === 'ai';
    }
    if (activeFilter === 'interactive') {
      return (
        p.mockupType === 'architecture' ||
        p.mockupType === 'travel' ||
        p.mockupType === 'cinema'
      );
    }
    return (
      p.mockupType === 'editorial' ||
      p.mockupType === 'brand' ||
      p.mockupType === 'agency'
    );
  };

  const filteredProjects = PROJECTS.filter(matchesFilter);

  const col1 = filteredProjects.filter((_, i) =>
    activeFilter === 'all' ? filteredProjects[i].column === 1 : i % 4 === 0
  );
  const col2 = filteredProjects.filter((_, i) =>
    activeFilter === 'all' ? filteredProjects[i].column === 2 : i % 4 === 1
  );
  const col3 = filteredProjects.filter((_, i) =>
    activeFilter === 'all' ? filteredProjects[i].column === 3 : i % 4 === 2
  );
  const col4 = filteredProjects.filter((_, i) =>
    activeFilter === 'all' ? filteredProjects[i].column === 4 : i % 4 === 3
  );

  const columns = [
    { items: col1, offsetClass: 'lg:mt-0' },
    { items: col2, offsetClass: 'lg:mt-8' },
    { items: col3, offsetClass: 'lg:mt-2' },
    { items: col4, offsetClass: 'lg:mt-10' },
  ];

  const mobileProjects =
    mobileShowAll || activeFilter !== 'all'
      ? filteredProjects
      : filteredProjects.slice(0, 6);

  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative bg-[#06070A] text-[#F8FAFC] pt-[116px] sm:pt-[136px] pb-20 sm:pb-24 overflow-hidden"
    >
      {/* Multi-layered ambient studio spotlight */}
      <div
        className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 h-[440px] w-[860px] rounded-full opacity-35 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,51,75,0.22) 0%, rgba(6,182,212,0.12) 48%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-[1344px] px-4 sm:px-10 lg:px-12 text-center">
        {/* Rotating Micro-Banner Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-[#10131C]/90 pl-2 pr-4 py-1.5 mb-6 sm:mb-7 shadow-[0_0_32px_rgba(255,51,75,0.08)]"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.08] border border-white/15">
            <GeometricLogo size={14} />
          </span>
          <div className="h-5 overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={pillIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-[13px] font-serif italic text-[#E2E8F0] tracking-[0.01em] whitespace-nowrap"
              >
                {STUDIO_BRAND.heroPills[pillIdx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display text-[11.5px] font-semibold uppercase tracking-[0.26em] text-[#94A3B8] mb-4 sm:mb-5"
        >
          WEBSITE DESIGN &amp; DEVELOPMENT STUDIO
        </motion.p>

        {/* Hero Display H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.14 }}
          className="font-display mx-auto max-w-[920px] text-[clamp(2.55rem,7.2vw,6.1rem)] font-normal tracking-editorial text-[#F8FAFC]"
        >
          We don’t build
          <br />
          <span className="font-serif italic font-normal text-white">
            ordinary
          </span>{' '}
          websites.
        </motion.h1>

        {/* Two-Tier Subcopy (Minimum 16px body text on mobile per UI/UX Pro Max) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mx-auto mt-6 sm:mt-7 max-w-[600px] space-y-3.5"
        >
          <p className="text-base sm:text-[18px] leading-[1.6] text-[#F8FAFC] font-normal">
            We create interactive, thoughtful and tailor-made digital experiences
            for businesses that want to stand apart.
          </p>
          <p className="text-base sm:text-[16px] leading-[1.65] text-[#94A3B8]">
            From the first idea to the final interaction, we design and build
            your digital presence around your business, your audience and your
            vision.
          </p>
        </motion.div>

        {/* CTA Pair — full width on small mobile, side-by-side on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-[420px] sm:max-w-none mx-auto"
        >
          <RollButton
            label="Start a Project"
            variant="primary"
            withYouBadge
            onClick={onOpenContact}
            className="w-full sm:w-auto"
          />
          <RollButton
            label="Explore Our Work"
            variant="secondary"
            onClick={onScrollToWork}
            className="w-full sm:w-auto"
          />
        </motion.div>

        {/* Micro-label */}
        <p className="mt-6 font-display text-[11px] font-medium uppercase tracking-[0.22em] text-[#94A3B8]">
          BUILD BEYOND THE ORDINARY
        </p>
      </div>

      {/* Discipline Infinite Ticker */}
      <div className="relative mt-14 sm:mt-16 mb-10 border-y border-white/[0.1] bg-[#0B0D13]/60 py-4 overflow-hidden select-none">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#06070A] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#06070A] to-transparent z-10" />

        <div className="animate-marquee flex items-center">
          {[0, 1, 2, 3].map((loop) => (
            <div key={loop} className="flex items-center">
              {DISCIPLINES.map((disc) => (
                <div key={`${loop}-${disc}`} className="flex items-center">
                  <span className="mx-6 sm:mx-8 font-display text-[14.5px] sm:text-[15.5px] font-normal tracking-[-0.01em] text-[#CBD5E1] hover:text-white transition-colors">
                    {disc}
                  </span>
                  <GeometricLogo size={14} className="opacity-35" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Projects Showcase with Touch-Friendly Category Filter Bar */}
      <div
        id="work-showcase"
        className="mx-auto max-w-[1392px] px-4 sm:px-8 lg:px-10 pt-2"
      >
        {/* Filter Pill Bar */}
        <div className="mb-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF334B]" />
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#CBD5E1]">
              Selected Works Showcase
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0"
          >
            {CATEGORY_FILTERS.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`cursor-pointer shrink-0 min-h-[44px] rounded-full px-4 py-2 text-[13px] font-display font-medium transition-colors duration-200 ${
                    active
                      ? 'bg-[#F8FAFC] text-[#0F172A] shadow-sm'
                      : 'bg-[#10131C] text-[#CBD5E1] border border-white/12 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Curated Grid (< 640px) — avoids 16-card scroll fatigue on phones */}
        <div className="sm:hidden space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {mobileProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                aria-label={`Open case study for ${project.title}`}
                className="group relative aspect-[4/4.2] w-full rounded-[22px] overflow-hidden border border-white/[0.12] bg-[#10131C] cursor-pointer transition-colors duration-200 active:scale-[0.99]"
              >
                <ProjectMockup project={project} />
              </article>
            ))}
          </div>

          {activeFilter === 'all' && filteredProjects.length > 6 && (
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => setMobileShowAll((v) => !v)}
                className="cursor-pointer inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-[#10131C] px-6 py-3 font-display text-[14px] font-medium text-[#F8FAFC] hover:bg-[#161A26] transition-colors"
              >
                <span>
                  {mobileShowAll
                    ? 'Show Fewer Projects'
                    : `View All ${filteredProjects.length} Case Studies`}
                </span>
                {mobileShowAll ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Tablet & Desktop 4-Column Staggered Grid (sm+) */}
        <div className="hidden sm:grid relative grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          <span className="hidden lg:block absolute -top-2 left-0 h-1.5 w-1.5 rounded-full bg-white/80" />
          <span className="hidden lg:block absolute -top-2 right-0 h-1.5 w-1.5 rounded-full bg-white/80" />

          {columns.map((col, colIndex) => (
            <div key={colIndex} className={`flex flex-col gap-4 ${col.offsetClass}`}>
              {col.items.map((project, itemIdx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: itemIdx * 0.05 }}
                  onClick={() => onSelectProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProject(project);
                    }
                  }}
                  aria-label={`Open case study for ${project.title}`}
                  className={`group relative ${project.aspectClass} w-full rounded-[22px] overflow-hidden border border-white/[0.12] bg-[#10131C] cursor-pointer transition-colors duration-200 hover:border-white/35 hover:shadow-[0_24px_60px_rgba(0,0,0,0.85)] focus:outline-none`}
                >
                  <ProjectMockup project={project} />
                </motion.article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
