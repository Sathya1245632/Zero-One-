import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  x: number;
  y: number;
}

const TENSION_NODES: TensionNode[] = [
  {
    id: 'strategy',
    index: '01',
    label: 'STRATEGY & POSITIONING',
    detail: 'Positioning, audience clarity & conversion narrative.',
    x: 54,
    y: 26,
  },
  {
    id: 'ux',
    index: '02',
    label: 'UX ARCHITECTURE',
    detail: 'Effortless flows where every click feels obvious.',
    x: 72,
    y: 52,
  },
  {
    id: 'ui',
    index: '03',
    label: 'EDITORIAL UI SYSTEMS',
    detail: 'Bespoke typography, spatial rhythm & visual authority.',
    x: 64,
    y: 78,
  },
  {
    id: 'tech',
    index: '04',
    label: 'TECH & STORYTELLING',
    detail: '60fps motion engineering & interactive narratives.',
    x: 78,
    y: 34,
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

        {/* Interactive Tension Strings & Sculpted Focal Point Stage */}
        <div className="relative mt-12 sm:mt-20 rounded-[28px] border border-white/[0.12] bg-gradient-to-b from-[#10131C] to-[#06070A] overflow-hidden p-5 sm:p-10">
          {/* Subtle ambient glow */}
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full opacity-25 blur-[90px]"
            style={{
              background: 'radial-gradient(circle, #FF334B, transparent 70%)',
            }}
          />

          {/* Visual Canvas (Desktop interactive pins + Mobile clean sculptural visual) */}
          <div className="relative min-h-[220px] sm:min-h-[340px] md:min-h-[420px]">
            {/* SVG Radiating Tension Strings from bottom-left focal origin (22%, 72%) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {TENSION_NODES.map((node) => {
                const isHighlighted = activeNode === node.id;
                return (
                  <g key={node.id}>
                    <motion.line
                      x1="22"
                      y1="72"
                      x2={node.x}
                      y2={node.y}
                      stroke={
                        isHighlighted ? '#FF334B' : 'rgba(255,255,255,0.22)'
                      }
                      strokeWidth={isHighlighted ? '0.32' : '0.15'}
                      pathLength={1}
                      strokeDasharray="1 1"
                      initial={{ strokeDashoffset: 1, opacity: 0.3 }}
                      whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: 'easeOut' }}
                    />
                    <line
                      x1="22"
                      y1="72"
                      x2={node.x + (node.x - 22) * 0.35}
                      y2={node.y + (node.y - 72) * 0.35}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="0.1"
                    />
                  </g>
                );
              })}
              <line
                x1="22"
                y1="72"
                x2="35"
                y2="8"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.12"
              />
              <line
                x1="22"
                y1="72"
                x2="10"
                y2="98"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.12"
              />
              <line
                x1="22"
                y1="72"
                x2="48"
                y2="96"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="0.12"
              />
            </svg>

            {/* Sculpted Minimalist Precision Hand / Focal Pinch Emblem */}
            <div className="absolute left-[4%] sm:left-[10%] bottom-2 sm:bottom-6 w-36 sm:w-52 pointer-events-none select-none">
              <svg
                viewBox="0 0 220 180"
                fill="none"
                className="w-full h-auto drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]"
              >
                <path
                  d="M15 168 C45 135, 68 104, 88 92 C108 80, 134 74, 152 84 C162 90, 158 101, 145 103 C129 105, 117 104, 108 112 C125 114, 140 124, 138 135 C136 144, 121 142, 105 139 C92 137, 78 148, 62 174 Z"
                  fill="url(#sculptHand)"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1.2"
                />
                <path
                  d="M84 95 C92 66, 114 48, 132 45 C142 43, 148 51, 141 59 C129 73, 116 82, 105 94"
                  fill="url(#sculptHand)"
                  stroke="rgba(255,255,255,0.24)"
                  strokeWidth="1.2"
                />
                <circle cx="144" cy="96" r="4.5" fill="#FF334B" />
                <circle
                  cx="144"
                  cy="96"
                  r="10"
                  stroke="rgba(255,51,75,0.5)"
                  strokeWidth="1"
                />
                <defs>
                  <linearGradient
                    id="sculptHand"
                    x1="15"
                    y1="45"
                    x2="155"
                    y2="174"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E2E8F0" />
                    <stop offset="0.5" stopColor="#64748B" />
                    <stop offset="1" stopColor="#0F172A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Desktop Spatial Node Pins (md+) */}
            <div className="hidden md:block">
              {TENSION_NODES.map((node) => {
                const isSelected = activeNode === node.id;
                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onClick={() => setActiveNode(node.id)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="cursor-pointer group absolute -translate-x-1.5 -translate-y-1.5 text-left focus:outline-none"
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`relative flex h-3.5 w-3.5 items-center justify-center rounded-full transition-colors duration-200 ${
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
                        {node.label}
                      </span>
                    </span>
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 ml-6 max-w-[240px] rounded-xl border border-white/15 bg-[#0B0D13]/95 backdrop-blur-md px-3.5 py-2.5 text-xs leading-relaxed text-[#E2E8F0] shadow-xl"
                      >
                        {node.detail}
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Touch-Friendly Discipline Grid (md:hidden) — Prevents edge clipping on 375px */}
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3">
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
                        : 'border-white/12 bg-white/[0.03] text-[#CBD5E1]'
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

            <div className="rounded-2xl border border-white/12 bg-[#10131C] p-4">
              <div className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-[#FF334B]">
                {currentNode.label}
              </div>
              <p className="mt-1 text-base leading-[1.6] text-[#E2E8F0]">
                {currentNode.detail}
              </p>
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
                  <div
                    className="pointer-events-none absolute inset-0 opacity-45"
                    style={{
                      background:
                        'radial-gradient(circle at 75% 25%, rgba(255,51,75,0.38), transparent 55%), radial-gradient(circle at 20% 80%, rgba(6,182,212,0.16), transparent 50%)',
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
