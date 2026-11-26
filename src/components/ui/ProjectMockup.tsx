import React from 'react';
import { ProjectItem } from '../../data/studioConfig';
import { ArrowUpRight } from 'lucide-react';

interface ProjectMockupProps {
  project: ProjectItem;
  compact?: boolean;
  inModal?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  project,
  compact = false,
  inModal = false,
}) => {
  const isLight = project.bgTone === 'light';
  const isWarm = project.bgTone === 'warm';

  const fallbackBg = isLight
    ? 'bg-[#f1f3f5] text-[#0F172A]'
    : isWarm
    ? 'bg-[#17120e] text-[#F8FAFC]'
    : 'bg-[#0b0d13] text-[#F8FAFC]';

  const imagePosition = project.imagePosition ?? 'object-center';

  // Compact orbiting tile (Footer 108x108 ring)
  if (compact) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${fallbackBg}`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${imagePosition} transition-transform duration-700 ease-out group-hover:scale-110`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/15" />
        <div className="relative z-10 flex h-full flex-col justify-between p-2.5 text-left">
          <span
            className="h-2 w-2 rounded-full ring-2 ring-black/40"
            style={{ backgroundColor: project.accentColor }}
          />
          <span className="font-display text-[9px] font-medium uppercase tracking-[0.12em] text-white/95 truncate drop-shadow-sm">
            {project.title}
          </span>
        </div>
      </div>
    );
  }

  // Case-Study Modal hero banner (wide 880x288 crop)
  if (inModal) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#0b0d13] text-[#F8FAFC]">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="eager"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${imagePosition}`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/35 to-black/40" />
        <div
          className="pointer-events-none absolute -top-12 -right-12 h-52 w-52 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: project.accentColor }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
          <div className="flex items-center gap-2 pr-14">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-md border border-white/15 px-3 py-1 text-[10.5px] font-display font-medium uppercase tracking-[0.16em] text-white/90">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              {project.title}
            </span>
            <span className="inline-flex items-center rounded-full bg-black/50 backdrop-blur-md border border-white/15 px-2.5 py-1 text-[10px] font-mono text-white/75">
              {project.year}
            </span>
          </div>

          <p className="font-display max-w-[560px] text-lg sm:text-xl font-normal tracking-[-0.025em] leading-snug text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
            {project.tagline}
          </p>
        </div>
      </div>
    );
  }

  // Default Selected Works Showcase card
  return (
    <div
      className={`relative w-full h-full overflow-hidden flex flex-col justify-between p-4 ${fallbackBg}`}
    >
      {/* Full-bleed bespoke editorial photograph */}
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${imagePosition} transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]`}
      />

      {/* Top protective atmospheric veil */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[34%] ${
          isLight
            ? 'bg-gradient-to-b from-white/85 via-white/35 to-transparent'
            : 'bg-gradient-to-b from-black/75 via-black/25 to-transparent'
        }`}
      />

      {/* Bottom editorial caption gradient scrim — leaves middle photography unobstructed */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[52%] ${
          isLight
            ? 'bg-gradient-to-t from-[#F8FAFC]/96 via-[#F8FAFC]/75 to-transparent'
            : 'bg-gradient-to-t from-[#06070A]/96 via-[#06070A]/68 to-transparent'
        }`}
      />

      {/* Subtle hover accent glow */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Inner editorial hairline frame */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ${
          isLight ? 'ring-black/[0.08]' : 'ring-white/[0.08]'
        }`}
      />

      {/* Top micro header bar */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 backdrop-blur-md border ${
            isLight
              ? 'bg-white/75 border-black/10 text-[#0F172A]'
              : 'bg-black/45 border-white/15 text-white'
          }`}
        >
          <span
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: project.accentColor }}
          />
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.14em] truncate">
            {project.title}
          </span>
        </div>

        <span
          className={`text-[10px] font-mono px-2.5 py-1 rounded-full backdrop-blur-md border ${
            isLight
              ? 'border-black/10 text-[#0F172A]/75 bg-white/75'
              : 'border-white/15 text-white/80 bg-black/45'
          }`}
        >
          {project.year}
        </span>
      </div>

      {/* Bottom editorial caption & metadata row */}
      <div className="relative z-10 mt-auto space-y-2.5">
        <p
          className={`font-display text-[15px] sm:text-[16.5px] font-normal tracking-[-0.025em] leading-[1.22] line-clamp-2 ${
            isLight ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}
        >
          {project.tagline}
        </p>

        <div
          className={`flex items-center justify-between pt-2.5 border-t ${
            isLight ? 'border-black/12' : 'border-white/15'
          }`}
        >
          <span
            className={`text-[11px] font-medium truncate pr-2 ${
              isLight ? 'text-[#334155]' : 'text-white/75'
            }`}
          >
            {project.category}
          </span>
          <span
            className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105 ${
              isLight
                ? 'bg-[#0F172A] text-white group-hover:bg-[#FF334B]'
                : 'bg-white text-[#0F172A] group-hover:bg-[#FF334B] group-hover:text-white'
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
