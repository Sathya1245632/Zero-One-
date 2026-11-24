import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AGENCY_CALLOUTS } from '../data/studioConfig';
import { RollButton } from './ui/RollButton';

interface AgencySectionProps {
  brandName: string;
  onOpenContact: () => void;
  onScrollToFaq: () => void;
}

export const AgencySection: React.FC<AgencySectionProps> = ({
  brandName,
  onOpenContact,
  onScrollToFaq,
}) => {
  const topLeft = AGENCY_CALLOUTS.find((c) => c.position === 'top-left')!;
  const topRight = AGENCY_CALLOUTS.find((c) => c.position === 'top-right')!;
  const bottomLeft = AGENCY_CALLOUTS.find((c) => c.position === 'bottom-left')!;
  const bottomRight = AGENCY_CALLOUTS.find((c) => c.position === 'bottom-right')!;

  return (
    <section
      id="agency"
      data-nav-theme="light"
      className="bg-[#F8FAFC] text-[#0F172A] pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden border-t border-slate-200"
    >
      <div className="mx-auto max-w-[1344px] px-4 sm:px-10 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="font-display text-center text-[clamp(2.35rem,5.5vw,4.5rem)] font-normal tracking-head text-[#0F172A]"
        >
          A Different Kind of{' '}
          <span className="font-serif italic font-normal">Agency.</span>
        </motion.h2>

        {/* Central Astronaut + Red Splash Callout Stage */}
        <div className="relative mt-10 sm:mt-16 min-h-[340px] sm:min-h-[460px] lg:min-h-[660px] flex items-center justify-center">
          {/* Desktop SVG Connector Lines with '+' Crosshairs */}
          <svg
            viewBox="0 0 1200 660"
            fill="none"
            className="hidden lg:block pointer-events-none absolute inset-0 w-full h-full z-10"
            aria-hidden="true"
          >
            <motion.path
              pathLength={1}
              strokeDasharray="1 1"
              initial={{ strokeDashoffset: 1 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              d="M110 85 H260 L355 15"
              stroke="rgba(15,23,42,0.25)"
              strokeWidth="1.2"
            />
            <motion.path
              pathLength={1}
              strokeDasharray="1 1"
              initial={{ strokeDashoffset: 1 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
              d="M845 78 H920"
              stroke="rgba(15,23,42,0.25)"
              strokeWidth="1.2"
            />
            <motion.path
              pathLength={1}
              strokeDasharray="1 1"
              initial={{ strokeDashoffset: 1 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.2 }}
              d="M110 385 H360 L405 425 H468"
              stroke="rgba(15,23,42,0.25)"
              strokeWidth="1.2"
            />
            <motion.path
              pathLength={1}
              strokeDasharray="1 1"
              initial={{ strokeDashoffset: 1 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.3 }}
              d="M720 432 H795 L865 502 H935"
              stroke="rgba(15,23,42,0.25)"
              strokeWidth="1.2"
            />
            {[
              [845, 78],
              [485, 425],
              [700, 432],
            ].map(([cx, cy], idx) => (
              <g key={idx} stroke="#0F172A" strokeWidth="1.5">
                <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} />
                <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} />
              </g>
            ))}
          </svg>

          {/* Radial Glow Behind Astronaut */}
          <div
            className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 h-[320px] sm:h-[380px] w-[340px] sm:w-[420px] rounded-full opacity-35 blur-[70px]"
            style={{
              background:
                'radial-gradient(circle, rgba(255,51,75,0.55) 0%, rgba(255,51,75,0.12) 55%, transparent 78%)',
            }}
          />

          {/* Center Stylized Leaping Astronaut & Liquid Splash Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-[260px] sm:w-[360px] lg:w-[440px] select-none"
          >
            <svg
              viewBox="0 0 460 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto drop-shadow-[0_28px_40px_rgba(15,23,42,0.18)]"
            >
              <g>
                <path
                  d="M178 135 C120 110, 92 48, 134 22 C164 4, 198 42, 224 38 C252 34, 274 2, 314 18 C354 34, 344 96, 298 118 C332 108, 368 122, 352 148 C338 170, 292 152, 266 164 C244 174, 212 158, 178 135 Z"
                  fill="url(#crimsonSplash)"
                />
                <circle cx="105" cy="72" r="9" fill="#FF334B" />
                <circle cx="348" cy="48" r="6" fill="#9F1239" />
                <circle cx="292" cy="176" r="5" fill="#FF334B" />
                <circle cx="155" cy="162" r="4.5" fill="#FF334B" />
                <path
                  d="M196 105 C215 72, 255 68, 285 92 C258 106, 222 120, 196 105 Z"
                  fill="#9F1239"
                  opacity="0.7"
                />
              </g>

              <rect
                x="232"
                y="218"
                width="74"
                height="108"
                rx="22"
                transform="rotate(8 232 218)"
                fill="#CBD5E1"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <path
                d="M190 232 C152 240, 118 242, 84 236 L76 254 C115 266, 158 266, 194 256 Z"
                fill="url(#suitShade)"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <path
                d="M276 232 C314 238, 354 246, 392 244 L388 264 C350 268, 306 262, 272 254 Z"
                fill="url(#suitShade)"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <path
                d="M196 226 L266 232 L258 318 L192 312 Z"
                fill="url(#suitLight)"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <path d="M214 226 L210 315" stroke="#BE123C" strokeWidth="7" />
              <path d="M248 228 L244 317" stroke="#BE123C" strokeWidth="7" />
              <rect x="190" y="294" width="76" height="16" rx="4" fill="#0F172A" />

              <path
                d="M192 312 L152 388 L178 468 L206 462 L188 394 L222 332 Z"
                fill="url(#suitShade)"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <path
                d="M224 316 L248 394 L214 486 L242 496 L282 398 L254 316 Z"
                fill="url(#suitLight)"
                stroke="#0F172A"
                strokeWidth="2"
              />
              <rect
                x="148"
                y="382"
                width="32"
                height="14"
                rx="4"
                transform="rotate(-12 148 382)"
                fill="#FF334B"
              />
              <rect
                x="242"
                y="388"
                width="34"
                height="14"
                rx="4"
                transform="rotate(14 242 388)"
                fill="#FF334B"
              />

              <ellipse
                cx="212"
                cy="186"
                rx="34"
                ry="38"
                fill="#F8FAFC"
                stroke="#0F172A"
                strokeWidth="2.2"
              />
              <path
                d="M180 182 C178 164, 198 156, 214 164 C226 172, 224 198, 206 206 C190 212, 181 198, 180 182 Z"
                fill="url(#visorGrad)"
              />
              <path
                d="M188 172 C192 164, 204 164, 210 170"
                stroke="rgba(255,255,255,0.65)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <ellipse
                cx="215"
                cy="526"
                rx="115"
                ry="14"
                fill="rgba(255,51,75,0.18)"
              />

              <defs>
                <linearGradient
                  id="crimsonSplash"
                  x1="120"
                  y1="15"
                  x2="340"
                  y2="165"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF334B" />
                  <stop offset="0.55" stopColor="#E11D48" />
                  <stop offset="1" stopColor="#881337" />
                </linearGradient>
                <linearGradient
                  id="suitLight"
                  x1="180"
                  y1="220"
                  x2="280"
                  y2="490"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFFFFF" />
                  <stop offset="1" stopColor="#CBD5E1" />
                </linearGradient>
                <linearGradient
                  id="suitShade"
                  x1="90"
                  y1="230"
                  x2="230"
                  y2="470"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E2E8F0" />
                  <stop offset="1" stopColor="#94A3B8" />
                </linearGradient>
                <linearGradient
                  id="visorGrad"
                  x1="180"
                  y1="160"
                  x2="220"
                  y2="208"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#334155" />
                  <stop offset="0.5" stopColor="#0F172A" />
                  <stop offset="1" stopColor="#1E293B" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* 4 Corner Callout Blocks (Desktop positioned) */}
          <div className="hidden lg:block">
            <div className="absolute top-6 left-0 max-w-[260px]">
              <span className="text-xs font-mono font-semibold text-[#FF334B]">
                {topLeft.index}
              </span>
              <h3 className="font-display mt-2 text-[28px] font-normal tracking-[-0.03em] leading-[1.08] text-[#0F172A]">
                {topLeft.quote}
              </h3>
              <p className="font-display mt-3 text-xs font-medium uppercase tracking-[0.14em] text-[#475569] leading-relaxed">
                {topLeft.sublabel}
              </p>
            </div>

            <div className="absolute top-6 right-0 max-w-[260px]">
              <span className="text-xs font-mono font-semibold text-[#FF334B]">
                {topRight.index}
              </span>
              <h3 className="font-display mt-2 text-[28px] font-normal tracking-[-0.03em] leading-[1.08] text-[#0F172A]">
                {topRight.quote}
              </h3>
              <p className="font-display mt-3 text-xs font-medium uppercase tracking-[0.14em] text-[#475569] leading-relaxed">
                {topRight.sublabel}
              </p>
            </div>

            <div className="absolute bottom-24 left-0 max-w-[260px]">
              <span className="text-xs font-mono font-semibold text-[#FF334B]">
                {bottomLeft.index}
              </span>
              <h3 className="font-display mt-2 text-[28px] font-normal tracking-[-0.03em] leading-[1.08] text-[#0F172A]">
                {bottomLeft.quote}
              </h3>
              <p className="font-display mt-3 text-xs font-medium uppercase tracking-[0.14em] text-[#475569] leading-relaxed">
                {bottomLeft.sublabel}
              </p>
            </div>

            <div className="absolute bottom-14 right-0 max-w-[280px]">
              <span className="text-xs font-mono font-semibold text-[#FF334B]">
                {bottomRight.index}
              </span>
              <h3 className="font-display mt-2 text-[28px] font-normal tracking-[-0.03em] leading-[1.08] text-[#0F172A]">
                {bottomRight.quote}
              </h3>
              <p className="font-display mt-3 text-xs font-medium uppercase tracking-[0.14em] text-[#475569] leading-relaxed">
                {bottomRight.sublabel}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Callout Grid */}
        <div className="lg:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AGENCY_CALLOUTS.map((item) => (
            <div
              key={item.index}
              className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm"
            >
              <span className="text-xs font-mono font-semibold text-[#FF334B]">
                {item.index}
              </span>
              <h3 className="font-display mt-2 text-2xl font-normal tracking-[-0.03em] text-[#0F172A]">
                {item.quote}
              </h3>
              <p className="font-display mt-2 text-xs font-medium uppercase tracking-[0.14em] text-[#475569]">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Collaboration Sub-section: "We work closely with our clients." */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center border-t border-slate-200 pt-14 sm:pt-16">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-[clamp(2rem,4vw,3.3rem)] font-normal tracking-[-0.04em] leading-[1.08] text-[#0F172A]">
              We work closely
              <br />
              with our clients.
            </h3>

            <div className="flex items-start gap-4">
              <div className="mt-1.5 h-12 w-1 rounded-full bg-[#FF334B] shrink-0" />
              <p className="text-base sm:text-[17px] leading-[1.65] text-[#334155] max-w-[460px]">
                We understand what they’re trying to achieve and build around
                that — turning raw ambition into sharp digital clarity.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              <RollButton
                label="Start a Project"
                variant="dark"
                onClick={onOpenContact}
              />
              <button
                onClick={onScrollToFaq}
                className="cursor-pointer group inline-flex min-h-[44px] items-center gap-2 font-display text-[14.5px] font-medium text-[#334155] hover:text-[#0F172A] transition-colors"
              >
                <span>Who we are and why {brandName} exists</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Visual: Architectural Round-Table Collaboration */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] bg-white border border-slate-200 p-6 sm:p-10 shadow-sm overflow-hidden min-h-[280px] flex flex-col justify-between">
              <svg
                viewBox="0 0 420 220"
                fill="none"
                className="w-full h-auto"
                aria-hidden="true"
              >
                <circle
                  cx="210"
                  cy="115"
                  r="76"
                  fill="#F8FAFC"
                  stroke="rgba(15,23,42,0.18)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="210"
                  cy="115"
                  r="58"
                  stroke="rgba(15,23,42,0.1)"
                  strokeDasharray="4 4"
                />
                <circle cx="116" cy="115" r="14" fill="#0F172A" />
                <circle cx="304" cy="115" r="14" fill="#FF334B" />
                <motion.path
                  pathLength={1}
                  strokeDasharray="1 1"
                  initial={{ strokeDashoffset: 1 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  d="M168 115 H252"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="210" cy="115" r="6" fill="#FF334B" />
                <motion.path
                  pathLength={1}
                  strokeDasharray="1 1"
                  initial={{ strokeDashoffset: 1 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.35 }}
                  d="M275 44 C248 48, 232 68, 224 94"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.14em] text-[#0F172A]">
                  LISTEN. UNDERSTAND. DESIGN.
                </span>
                <span className="font-display text-xs font-medium uppercase tracking-widest text-[#475569]">
                  WEEKLY PREVIEWS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
