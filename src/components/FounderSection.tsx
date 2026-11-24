import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { STUDIO_BRAND } from '../data/studioConfig';
import { ScrollInkText } from './ui/ScrollInkText';

interface FounderSectionProps {
  founderName: string;
  brandName: string;
  onOpenContact: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  founderName,
  brandName,
  onOpenContact,
}) => {
  const [bioOpen, setBioOpen] = useState(false);

  return (
    <section
      id="founder-teaser"
      data-nav-theme="light"
      className="bg-white text-[#0F172A] py-20 sm:py-32 border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1344px] px-4 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Column: Split Badge + Display Name + Geometric Strip */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Split Badge */}
            <div className="inline-flex items-center border border-[#0F172A]/20 font-display text-[11px] font-semibold uppercase tracking-[0.18em] rounded-md overflow-hidden">
              <span className="bg-[#0F172A] text-white px-3 py-1.5">
                THE PERSON BEHIND
              </span>
              <span className="bg-white text-[#0F172A] px-3 py-1.5">
                {brandName}
              </span>
            </div>

            {/* Oversized Tight-Tracked Display Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="font-display text-[clamp(3.6rem,10vw,8.2rem)] font-normal tracking-[-0.055em] leading-[0.9] bg-gradient-to-b from-[#0F172A] via-[#0F172A]/90 to-[#334155] bg-clip-text text-transparent select-none"
            >
              {founderName}
            </motion.h2>

            {/* Roles */}
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-[#475569]">
              {STUDIO_BRAND.founderRoles}
            </p>

            {/* Animated SVG Geometric Journey Strip */}
            <div className="pt-3 max-w-[440px]">
              <svg
                viewBox="0 0 420 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                aria-hidden="true"
              >
                <motion.polygon
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  points="4,48 16,24 16,42"
                  fill="#0F172A"
                />
                <motion.path
                  pathLength={1}
                  strokeDasharray="1 1"
                  initial={{ strokeDashoffset: 1 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  d="M28 42 C48 10, 108 10, 128 42"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polygon points="140,24 152,48 140,42" fill="#0F172A" />
                <motion.path
                  pathLength={1}
                  strokeDasharray="1 1"
                  initial={{ strokeDashoffset: 1 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  d="M162 44 H178 V35 H194 V26 H210 V17 H226"
                  stroke="#0F172A"
                  strokeWidth="1.8"
                  strokeLinecap="square"
                />
                <path
                  d="M234 17 Q254 40 278 32 T324 34 T364 30"
                  stroke="rgba(15,23,42,0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <polygon points="270,29 294,31 282,42" fill="#FF334B" />
                <motion.polygon
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  points="374,50 392,14 410,50"
                  fill="#0F172A"
                />
              </svg>
            </div>
          </div>

          {/* Right Column: Vertical Divider + Orange Quote + Scroll-Ink Quote */}
          <div className="lg:col-span-6 lg:border-l lg:border-slate-200 lg:pl-12 space-y-5">
            <div className="text-5xl font-serif leading-none text-[#F97316] select-none">
              “
            </div>

            <ScrollInkText
              text={`${STUDIO_BRAND.founderQuoteLead} ${STUDIO_BRAND.founderQuoteTail}`}
              className="font-display text-[clamp(1.65rem,3.4vw,2.7rem)] font-normal tracking-[-0.035em] leading-[1.16]"
              isLightMode
            />

            <div className="pt-2">
              <button
                onClick={() => setBioOpen((v) => !v)}
                className="cursor-pointer group inline-flex min-h-[44px] items-center gap-2 font-display text-[15px] font-semibold text-[#0F172A] border-b-2 border-[#0F172A]/40 pb-1 hover:border-[#FF334B] hover:text-[#FF334B] transition-colors"
              >
                <span>{bioOpen ? 'Hide founder story' : 'Meet the founder'}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Founder Story Drawer Panel */}
        <AnimatePresence>
          {bioOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 36 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="rounded-[28px] bg-[#F8FAFC] border border-slate-200 p-6 sm:p-10 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316]">
                      FOUNDER NOTE
                    </span>
                    <h3 className="font-display mt-1 text-2xl sm:text-3xl font-normal tracking-[-0.03em] text-[#0F172A]">
                      Building digital worlds with taste &amp; precision.
                    </h3>
                  </div>
                  <button
                    onClick={() => setBioOpen(false)}
                    aria-label="Close founder story"
                    className="cursor-pointer inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white border border-slate-200 text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base leading-[1.65] text-[#334155]">
                  {STUDIO_BRAND.founderBio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[#475569]">
                    DIRECT COLLABORATION · ZERO MIDDLEMEN
                  </span>
                  <button
                    onClick={onOpenContact}
                    className="cursor-pointer inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#0F172A] text-white px-5 py-2.5 font-display text-[13.5px] font-medium hover:bg-[#FF334B] transition-colors"
                  >
                    Work directly with {founderName}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
