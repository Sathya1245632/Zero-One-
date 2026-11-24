import React, { useEffect, useState } from 'react';
import { DISCIPLINES, PROJECTS, ProjectItem, STUDIO_BRAND } from '../data/studioConfig';
import { BrandMark } from './ui/GeometricLogo';
import { RollButton } from './ui/RollButton';
import { ProjectMockup } from './ui/ProjectMockup';
import { NAV_ITEMS } from './Header';

interface FooterSectionProps {
  brandName: string;
  onChangeBrandName: (name: string) => void;
  onOpenContact: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (id: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  brandName,
  onChangeBrandName,
  onOpenContact,
  onSelectProject,
  onNavigate,
}) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const update = () => {
      setTimeStr(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const ringProjects = PROJECTS;
  const ringRadius = 415;

  return (
    <footer
      id="footer-cta"
      data-nav-theme="dark"
      style={{ overflow: 'clip' }}
      className="relative bg-[#06070A] text-[#F8FAFC]"
    >
      {/* Orbiting Project Card Ring Stage */}
      <div
        style={{ overflow: 'clip' }}
        className="relative min-h-[580px] sm:min-h-[680px] flex flex-col items-center justify-center py-20 sm:py-24"
      >
        {/* Diagonal subtle studio light rays */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              'linear-gradient(125deg, transparent 28%, rgba(255,51,75,0.09) 46%, transparent 62%)',
          }}
        />

        {/* Isolated clipped layer for the rotating 960x960 project ring */}
        <div
          style={{ overflow: 'clip' }}
          className="pointer-events-none absolute inset-0"
        >
          <div
            style={{
              width: 960,
              height: 960,
              left: '50%',
              top: '62%',
              transform: 'translate(-50%, -50%)',
            }}
            className="absolute"
          >
            <div className="relative h-full w-full animate-orbit-ring">
              {ringProjects.map((project, idx) => {
                const angleDeg = (idx / ringProjects.length) * 360;
                const rad = (angleDeg * Math.PI) / 180;
                const x = Math.cos(rad) * ringRadius;
                const y = Math.sin(rad) * ringRadius;

                return (
                  <button
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    style={{
                      left: `calc(50% + ${x}px - 54px)`,
                      top: `calc(50% + ${y}px - 54px)`,
                      transform: `rotate(${angleDeg + 90}deg)`,
                    }}
                    aria-label={`View ${project.title}`}
                    className="pointer-events-auto group absolute h-[108px] w-[108px] rounded-[24px] overflow-hidden border border-white/15 bg-[#10131C] shadow-[0_14px_40px_rgba(0,0,0,0.85)] transition-colors duration-200 hover:border-white/45 cursor-pointer"
                  >
                    <ProjectMockup project={project} compact />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Soft center & bottom vignette masks */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 56%, rgba(6,7,10,0.96) 0%, rgba(6,7,10,0.85) 26%, rgba(6,7,10,0.18) 50%, rgba(6,7,10,0.88) 86%)',
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#06070A]/85 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#06070A] via-[#06070A]/80 to-transparent" />

        {/* Center CTA Content positioned right inside the hollow arch of the orbiting ring */}
        <div className="relative z-10 mx-auto max-w-[600px] px-4 text-center pt-12 sm:pt-16">
          <p className="font-mono text-xs sm:text-[13px] tracking-[0.06em] text-[#94A3B8]">
            {timeStr || '12:00:00 PM'} — your local time
          </p>

          <h2 className="font-display mt-4 text-[clamp(2.6rem,6vw,5.1rem)] font-normal tracking-editorial text-white">
            Have an{' '}
            <span className="font-serif italic font-normal">idea?</span>
          </h2>

          <p className="mt-5 mx-auto max-w-[460px] text-base leading-[1.65] text-[#CBD5E1]">
            You don’t need a perfect brief. You don’t need to know exactly what
            you need.{' '}
            <strong className="font-semibold text-white">
              Just bring us the idea. We’ll figure out the rest together.
            </strong>
          </p>

          <div className="mt-8 flex justify-center">
            <RollButton
              label="Start a Project"
              variant="primary"
              withYouBadge
              onClick={onOpenContact}
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer Navigation Bar */}
      <div className="relative z-10 border-t border-white/[0.1] bg-[#0B0D13]">
        <div className="mx-auto max-w-[1344px] px-4 sm:px-10 lg:px-12 py-10 space-y-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3">
              <BrandMark
                name={brandName}
                subname={STUDIO_BRAND.subname}
                compact
              />
              <p className="text-sm text-[#94A3B8]">{STUDIO_BRAND.tagline}</p>
            </div>

            <div className="space-y-3 lg:text-center">
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1 font-display text-[13.5px] text-[#CBD5E1]">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="cursor-pointer min-h-[40px] px-1 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={onOpenContact}
                  className="cursor-pointer min-h-[40px] px-1 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
              <p className="text-xs text-[#94A3B8] tracking-wide">
                {DISCIPLINES.join(' · ')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-5 font-display text-[13.5px] text-[#CBD5E1]">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="min-h-[40px] inline-flex items-center hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="min-h-[40px] inline-flex items-center hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="min-h-[40px] inline-flex items-center hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={`mailto:${STUDIO_BRAND.email}`}
                className="min-h-[40px] inline-flex items-center hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/[0.08] pt-6 text-xs text-[#94A3B8]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>
                © {new Date().getFullYear()} {brandName} Creative Studios. All
                rights reserved.
              </span>
              <button
                onClick={() =>
                  onChangeBrandName(
                    brandName === 'Zero One' ? 'TESERACT' : 'Zero One'
                  )
                }
                className="cursor-pointer underline decoration-white/30 hover:text-white transition-colors"
                title="Preview another studio wordmark live"
              >
                Switch Brand Preview (
                {brandName === 'Zero One' ? 'TESERACT' : 'Zero One'})
              </button>
            </div>

            <span className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
              BUILT DIFFERENT. BUILT FOR YOU.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
