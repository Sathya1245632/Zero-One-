import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollInkText } from './ui/ScrollInkText';
import { PROJECTS, ProjectItem } from '../data/studioConfig';
import { ArrowUpRight } from 'lucide-react';

interface IdeaSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

interface TensionNode {
  id: string;
  index: string;
  label: string;
  detail: string;
  previewImage: string;
  previewCaption: string;
  x: number;
  y: number;
}

const TENSION_NODES: TensionNode[] = [
  {
    id: 'strategy',
    index: '01',
    label: 'STRATEGY & POSITIONING',
    detail: 'Positioning, audience clarity & conversion narrative.',
    previewImage: '/images/projects/finsmith.jpg',
    previewCaption: 'Brand Architecture & Positioning',
    x: 54,
    y: 15,
  },
  {
    id: 'ux',
    index: '02',
    label: 'UX ARCHITECTURE',
    detail: 'Effortless flows where every click feels obvious.',
    previewImage: '/images/projects/vantline.jpg',
    previewCaption: 'Structured Flows & Spatial Clarity',
    x: 63,
    y: 37,
  },
  {
    id: 'ui',
    index: '03',
    label: 'EDITORIAL UI SYSTEMS',
    detail: 'Bespoke typography, spatial rhythm & visual authority.',
    previewImage: '/images/projects/siaara.jpg',
    previewCaption: 'Tactile Craft & Design Systems',
    x: 61,
    y: 59,
  },
  {
    id: 'tech',
    index: '04',
    label: 'TECH & STORYTELLING',
    detail: '60fps motion engineering & interactive narratives.',
    previewImage: '/images/projects/aivinci.jpg',
    previewCaption: 'Interactive Motion & Applied AI',
    x: 52,
    y: 80,
  },
];

export const IdeaSection: React.FC<IdeaSectionProps> = ({ onSelectProject }) => {
  const [activeNode, setActiveNode] = useState<string>('strategy');
  const vyrnProject = PROJECTS.find((p) => p.id === 'vyrn') || PROJECTS[0];
  const currentNode =
    TENSION_NODES.find((n) => n.id === activeNode) || TENSION_NODES[0];

  return (
    <section
      id="idea"
      data-nav-theme="dark"
      className="relative bg-[#0B0D13] text-[#F8FAFC] py-20 sm:py-32 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="mx-auto max-w-[1344px] px-4 sm:px-10 lg:px-12">
        {/* Top Row: Micro label & Massive H2 */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-display text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[#FF334B]">
            01 · WHO WE ARE
          </span>
          <span className="font-display text-[11.5px] font-medium uppercase tracking-[0.22em] text-[#94A3B8]">
            CREATIVE STUDIOS
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="font-display max-w-[940px] text-[clamp(2.35rem,6.2vw,5.4rem)] font-normal tracking-editorial text-[#F8FAFC]"
        >
          Your business is unique.{' '}
          <span className="font-serif italic font-normal text-white">
            Your website should be too.
          </span>
        </motion.h2>

        {/* Interactive Tension Strings & Studio Visual Stage */}
        <div className="relative mt-12 sm:mt-20 rounded-[28px] border border-white/[0.14] bg-[#06070A] overflow-hidden p-5 sm:p-8 lg:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.75)]">
          {/* Full-bleed bespoke 3D crimson-filament dark studio backdrop */}
          <img
            src="/images/idea-stage.jpg"
            alt="Sculptural crimson and obsidian 3D tension filaments in a dark studio space"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left-bottom opacity-65 select-none"
          />

          {/* Directional obsidian scrim so interactive lines & right-hand pins read with crisp contrast */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(96deg, rgba(6,7,10,0.42) 0%, rgba(8,10,16,0.76) 46%, rgba(6,7,10,0.92) 100%)',
            }}
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08] rounded-[28px]" />

          {/* Desktop Interactive Visual Canvas (md+) */}
          <div className="hidden md:block relative h-[480px] lg:h-[510px]">
            {/* SVG Radiating Tension Strings from left focal card connector (33%, 50%) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
            >
              {TENSION_NODES.map((node) => {
                const isHighlighted = activeNode === node.id;
                return (
                  <g key={node.id}>
                    <motion.line
                      x1="33"
                      y1="50"
                      x2={node.x}
                      y2={node.y}
                      stroke={
                        isHighlighted ? '#FF334B' : 'rgba(255,255,255,0.22)'
                      }
                      strokeWidth={isHighlighted ? '0.34' : '0.15'}
                      pathLength={1}
                      strokeDasharray="1 1"
                      initial={{ strokeDashoffset: 1, opacity: 0.3 }}
                      whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: 'easeOut' }}
                    />
                    <line
                      x1={node.x}
                      y1={node.y}
                      x2={Math.min(96, node.x + (node.x - 33) * 0.42)}
                      y2={Math.max(4, Math.min(96, node.y + (node.y - 50) * 0.42))}
                      stroke="rgba(255,255,255,0.07)"
                      strokeWidth="0.1"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Left Sculptural Studio Showcase Frame (5% left + 28% width => right edge exactly at 33%) */}
            <div className="absolute left-[4%] top-1/2 -translate-y-1/2 w-[29%] z-20">
              <div className="relative rounded-[22px] border border-white/15 bg-[#0B0D13]/85 backdrop-blur-xl p-2.5 lg:p-3 shadow-[0_28px_70px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-[15px] bg-[#06070A]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentNode.id}
                      src={currentNode.previewImage}
                      alt={currentNode.previewCaption}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06070A]/90 via-transparent to-black/35" />

                  <div className="relative z-10 flex h-full flex-col justify-between p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-white/90">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF334B] animate-pulse" />
                        {currentNode.index} / 04
                      </span>
                      <span className="font-display text-[9.5px] uppercase tracking-[0.18em] text-white/70">
                        ZERO ONE CRAFT
                      </span>
                    </div>

                    <div>
                      <p className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF334B]">
                        {currentNode.label}
                      </p>
                      <p className="mt-0.5 font-display text-sm lg:text-[15px] font-normal tracking-[-0.02em] text-white leading-snug">
                        {currentNode.previewCaption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Glowing Crimson Nexus Anchor on right border at exact (33%, 50%) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center"
                >
                  <span className="absolute inset-0 rounded-full bg-[#FF334B]/35 animate-ping" />
                  <span className="relative h-3 w-3 rounded-full bg-[#FF334B] ring-4 ring-[#0B0D13] shadow-[0_0_16px_rgba(255,51,75,0.95)]" />
                </span>
              </div>
            </div>

            {/* Right Spatial Node Pins (generously spaced vertically with z-index priority so tooltips never collide) */}
            {TENSION_NODES.map((node) => {
              const isSelected = activeNode === node.id;
              return (
                <button
                  key={node.id}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onClick={() => setActiveNode(node.id)}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  className={`cursor-pointer group absolute -translate-x-1.5 -translate-y-2 text-left focus:outline-none ${
                    isSelected ? 'z-30' : 'z-20'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`relative flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isSelected
                          ? 'bg-[#FF334B] shadow-[0_0_16px_rgba(255,51,75,0.9)]'
                          : 'bg-white group-hover:bg-[#FF334B]'
                      }`}
                    >
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-50" />
                    </span>
                    <span
                      className={`font-display text-xs font-semibold tracking-[0.14em] uppercase transition-colors ${
                        isSelected
                          ? 'text-white'
                          : 'text-[#CBD5E1] group-hover:text-white'
                      }`}
                    >
                      <span className="font-mono text-[10.5px] text-[#FF334B] mr-1.5">
                        {node.index}
                      </span>
                      {node.label}
                    </span>
                  </span>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 ml-6 w-[215px] lg:w-[255px] rounded-xl border border-white/15 bg-[#0B0D13]/95 backdrop-blur-md px-3.5 py-2.5 text-xs leading-relaxed text-[#E2E8F0] shadow-[0_14px_34px_rgba(0,0,0,0.85)]"
                    >
                      {node.detail}
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile & Tablet Touch-Friendly Visual + Discipline Grid (md:hidden) */}
          <div className="md:hidden relative z-10 space-y-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0B0D13]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentNode.id}
                  src={currentNode.previewImage}
                  alt={currentNode.previewCaption}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06070A]/95 via-[#06070A]/35 to-black/30" />
              <div className="relative z-10 flex h-full flex-col justify-between p-4">
                <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF334B] animate-pulse" />
                  {currentNode.index} / 04 · ZERO ONE CRAFT
                </span>
                <div>
                  <div className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-[#FF334B]">
                    {currentNode.label}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[#F8FAFC]">
                    {currentNode.detail}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {TENSION_NODES.map((node) => {
                const isSelected = activeNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className={`cursor-pointer min-h-[48px] rounded-2xl border px-4 py-3 text-left transition-colors duration-200 flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'border-[#FF334B] bg-[#FF334B]/15 text-white'
                        : 'border-white/12 bg-[#0B0D13]/75 backdrop-blur-sm text-[#CBD5E1]'
                    }`}
                  >
                    <span className="font-display text-xs font-semibold tracking-[0.12em] uppercase">
                      {node.index} · {node.label}
                    </span>
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                        isSelected ? 'bg-[#FF334B]' : 'bg-white/30'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom 2-Column Craft Manifesto + 3D Perspective Laptop Stage */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Scroll-Ink Copy */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollInkText
              text="You don’t need another template. You don’t need a website that looks like everyone else’s. You need something that feels like you. That’s what we build."
              className="font-display text-[clamp(1.65rem,3vw,2.55rem)] font-normal tracking-[-0.03em] leading-[1.18]"
              accentWord="you."
            />
            <p className="max-w-[540px] text-base sm:text-[17px] leading-[1.65] text-[#CBD5E1]">
              We combine strategy, design, technology, interaction and
              storytelling to create websites and digital experiences made
              specifically for your brand.
            </p>
          </div>

          {/* 3D-Warped Laptop Mockup Stage */}
          <div className="lg:col-span-6 laptop-stage flex justify-center px-2 sm:px-0">
            <div
              onClick={() => onSelectProject(vyrnProject)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(vyrnProject);
                }
              }}
              aria-label="Inspect VYRN flagship launch project"
              className="relative w-full max-w-[520px] cursor-pointer group focus:outline-none"
            >
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-14 rounded-full bg-[#FF334B]/10 blur-2xl" />

              {/* 3D Laptop Chassis */}
              <div className="laptop-screen-3d rounded-[22px] border border-white/20 bg-gradient-to-b from-[#1E2434] to-[#0B0D13] p-2.5 sm:p-3 shadow-[0_36px_80px_rgba(0,0,0,0.9)]">
                {/* Screen bezel */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#06070A] border border-white/12 p-4 sm:p-5 flex flex-col justify-between">
                  <img
                    src={vyrnProject.image}
                    alt={vyrnProject.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[50%_22%] opacity-65 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(125deg, rgba(6,7,10,0.9) 0%, rgba(6,7,10,0.45) 52%, rgba(255,51,75,0.22) 100%)',
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-between font-display text-[10px] tracking-[0.2em] text-[#CBD5E1] uppercase">
                    <span>VYRN · DROP 04</span>
                    <span className="inline-flex items-center gap-1.5 text-white font-semibold">
                      <span className="h-2 w-2 rounded-full bg-[#FF334B] animate-pulse" />
                      LIVE FILM
                    </span>
                  </div>

                  <div className="relative z-10 my-auto py-2">
                    <p className="font-display text-[10.5px] uppercase tracking-[0.22em] text-[#94A3B8] mb-1.5">
                      FLAGSHIP CASE STUDY
                    </p>
                    <h3 className="font-display text-2xl sm:text-4xl font-normal tracking-[-0.04em] text-white">
                      VYRN
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#CBD5E1] max-w-[260px]">
                      Kinetic streetwear e-commerce &amp; spatial launch film.
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between border-t border-white/12 pt-3">
                    <span className="text-xs text-[#CBD5E1]">
                      Tap to explore build breakdown
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0F172A] transition-colors duration-200 group-hover:bg-[#FF334B] group-hover:text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Laptop aluminum deck base */}
              <div className="mx-auto mt-1 h-2.5 sm:h-3 w-[92%] rounded-b-xl bg-gradient-to-r from-[#1E2434] via-[#475569] to-[#1E2434] opacity-85 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
