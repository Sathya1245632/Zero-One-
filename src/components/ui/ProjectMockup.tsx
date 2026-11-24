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

  const bgGradient = isLight
    ? 'bg-gradient-to-br from-[#fafafa] via-[#f0f1f3] to-[#e4e6eb] text-black'
    : isWarm
    ? 'bg-gradient-to-br from-[#231b15] via-[#17120e] to-[#0b0907] text-[#f4f4f2]'
    : 'bg-gradient-to-br from-[#161618] via-[#0d0d0e] to-[#050506] text-[#f4f4f2]';

  return (
    <div
      className={`relative w-full h-full overflow-hidden flex flex-col justify-between p-4 ${bgGradient}`}
    >
      {/* Ambient accent radial glow */}
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full blur-3xl opacity-35 transition-transform duration-700 group-hover:scale-125"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Top micro browser / header bar */}
      <div
        className={`relative z-10 flex items-center justify-between gap-2 ${
          inModal ? 'pr-14' : ''
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: project.accentColor }}
          />
          <span
            className={`text-[10px] font-medium uppercase tracking-[0.14em] ${
              isLight ? 'text-black/55' : 'text-white/55'
            }`}
          >
            {project.title}
          </span>
        </div>
        {!compact && (
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full border ${
              isLight
                ? 'border-black/10 text-black/60 bg-black/[0.03]'
                : 'border-white/10 text-white/60 bg-white/[0.04]'
            }`}
          >
            {project.year}
          </span>
        )}
      </div>

      {/* Center bespoke UI composition per mockupType */}
      <div className={`relative z-10 my-auto py-3 ${inModal ? 'pr-12' : ''}`}>
        {project.mockupType === 'fashion' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between border-b border-current/10 pb-2">
              <span className="text-[9px] tracking-[0.22em] uppercase opacity-60">
                NEW SEASON · ARCHIVE
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-widest">
                01 / 08
              </span>
            </div>
            <div className="grid grid-cols-5 gap-2 items-end">
              <div className="col-span-3">
                <p className="text-lg sm:text-xl font-light tracking-tight leading-[1.02]">
                  {project.title === 'VYRN'
                    ? 'FORM MEETS MOTION.'
                    : 'WHAT’S INSIDE MATTERS.'}
                </p>
              </div>
              <div
                className="col-span-2 aspect-[3/4] rounded-lg border border-current/15 flex items-end p-2"
                style={{
                  background: `linear-gradient(155deg, ${project.accentColor}45, ${project.secondaryColor})`,
                }}
              >
                <div className="w-full h-1.5 rounded-full bg-current/30" />
              </div>
            </div>
          </div>
        )}

        {project.mockupType === 'saas' && (
          <div className="space-y-2.5">
            <div
              className={`rounded-xl border p-3 ${
                isLight
                  ? 'bg-white border-black/10 shadow-sm'
                  : 'bg-white/[0.04] border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium opacity-70">
                  Live Decision Telemetry
                </span>
                <span
                  className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: `${project.accentColor}22`,
                    color: isLight ? '#000' : project.accentColor,
                  }}
                >
                  +42.8%
                </span>
              </div>
              {/* Mini bar visualization */}
              <div className="flex items-end gap-1.5 h-14 pt-2">
                {[38, 62, 48, 84, 70, 96, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm transition-all duration-500 group-hover:opacity-100"
                    style={{
                      height: `${h}%`,
                      backgroundColor:
                        i >= 5
                          ? project.accentColor
                          : isLight
                          ? 'rgba(0,0,0,0.14)'
                          : 'rgba(255,255,255,0.18)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {project.mockupType === 'ai' && (
          <div className="space-y-2.5">
            <p className="text-base sm:text-lg font-normal tracking-tight leading-snug">
              {project.title === 'Sagewell'
                ? 'The model that thinks before it speaks.'
                : 'Autonomous intelligence, human aesthetic.'}
            </p>
            <div
              className={`rounded-xl border p-2.5 text-[10px] flex items-center justify-between ${
                isLight
                  ? 'bg-white border-black/10 shadow-sm'
                  : 'bg-black/60 border-white/10'
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: project.accentColor }}
                />
                <span className="opacity-75">Reasoning step 03 verified</span>
              </div>
              <span className="font-mono text-[9px] opacity-50">0.42s</span>
            </div>
          </div>
        )}

        {project.mockupType === 'travel' && (
          <div className="space-y-2">
            <div className="text-xl sm:text-2xl font-light tracking-[-0.04em] leading-none">
              {project.title}
            </div>
            <p className="text-[11px] opacity-70">{project.tagline}</p>
            <div className="flex gap-1.5 pt-1">
              {['TYO', 'ZRH', 'NYC'].map((code, i) => (
                <span
                  key={code}
                  className={`px-2 py-1 rounded-md text-[9px] font-mono border ${
                    i === 1
                      ? 'border-current bg-current/10'
                      : 'border-current/15 opacity-60'
                  }`}
                >
                  {code}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.mockupType === 'architecture' && (
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-1.5">
              <div
                className="col-span-2 h-20 rounded-lg border border-white/10 p-2 flex flex-col justify-end"
                style={{
                  background: `radial-gradient(circle at 70% 20%, ${project.accentColor}65, rgba(15,12,10,0.95))`,
                }}
              >
                <span className="text-[9px] tracking-[0.2em] uppercase text-white/75">
                  SPATIAL STUDY
                </span>
              </div>
              <div className="h-20 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center">
                <div
                  className="h-8 w-8 rounded-full blur-[1px]"
                  style={{
                    background: `radial-gradient(circle, ${project.accentColor}, transparent 70%)`,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {(project.mockupType === 'editorial' ||
          project.mockupType === 'agency' ||
          project.mockupType === 'cinema' ||
          project.mockupType === 'brand' ||
          project.mockupType === 'ecommerce') && (
          <div className="space-y-2">
            <p className="text-lg sm:text-xl font-light tracking-[-0.03em] leading-[1.08]">
              {project.tagline}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <div
                className="h-[2px] w-10 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="text-[10px] uppercase tracking-[0.16em] opacity-60">
                {project.category}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom hover bar */}
      {!compact && (
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-current/10">
          <span className="text-[11px] opacity-65 truncate pr-2">
            {project.category}
          </span>
          <span
            className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${
              isLight
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      )}
    </div>
  );
};
