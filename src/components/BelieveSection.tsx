import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BELIEVE_STATS } from '../data/studioConfig';
import { ScrollInkText } from './ui/ScrollInkText';

interface BelieveSectionProps {
  brandName: string;
  onScrollToAgency: () => void;
}

const CountUpStat: React.FC<{
  target: number;
  suffix: string;
  trigger: boolean;
}> = ({ target, suffix, trigger }) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [trigger, target]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
};

export const BelieveSection: React.FC<BelieveSectionProps> = ({
  brandName,
  onScrollToAgency,
}) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section
      id="believe"
      data-nav-theme="dark"
      className="bg-[#06070A] text-[#F8FAFC] py-20 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[1344px] px-4 sm:px-10 lg:px-12">
        {/* Eyebrow & Headline */}
        <p className="font-display text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[#FF334B]">
          WHAT WE BELIEVE
        </p>
        <h2 className="font-display mt-4 max-w-[780px] text-[clamp(2.35rem,5.5vw,4.7rem)] font-normal tracking-editorial text-[#F8FAFC]">
          Simple for people.
          <br />
          <span className="font-serif italic font-normal text-white">
            Powerful for business.
          </span>
        </h2>

        {/* Horizontal Editorial Poster Strip */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Poster 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[24px] bg-[#10131C] border border-white/12 p-6 sm:p-7 min-h-[260px] sm:min-h-[280px] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center justify-between font-display text-[11px] font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
              <span>01 · POSTER</span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF334B]" />
            </div>
            <div className="my-auto py-4">
              <p className="font-display text-3xl sm:text-4xl font-normal tracking-[-0.04em] leading-[1.08] text-white">
                People first.
                <br />
                <span className="font-serif italic text-[#CBD5E1]">
                  Stories always.
                </span>
              </p>
            </div>
            <p className="font-display text-[11.5px] text-[#94A3B8] uppercase tracking-[0.16em]">
              EMPATHY BEFORE AESTHETICS
            </p>
          </motion.div>

          {/* Poster 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[24px] bg-[#F8FAFC] text-[#0F172A] border border-slate-200 p-6 sm:p-7 min-h-[260px] sm:min-h-[280px] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center justify-between font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-[#475569]">
              <span>02 · CLARITY</span>
              <span>NO OVERLOAD</span>
            </div>
            <div className="my-auto py-4 space-y-2">
              <div className="text-xs font-mono text-[#64748B] line-through">
                Popups · Clutter · Templates
              </div>
              <p className="font-display text-3xl font-normal tracking-[-0.04em] leading-tight text-[#0F172A]">
                Signal over visual noise.
              </p>
            </div>
            <div className="h-1.5 w-14 rounded-full bg-[#FF334B]" />
          </motion.div>

          {/* Poster 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="rounded-[24px] bg-gradient-to-br from-[#1E1018] via-[#10131C] to-[#06070A] border border-white/12 p-6 sm:p-7 min-h-[260px] sm:min-h-[280px] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center justify-between font-display text-[11px] font-medium uppercase tracking-[0.2em] text-[#94A3B8]">
              <span>03 · CRAFT</span>
              <span>CUSTOM ENGINEERED</span>
            </div>
            <svg viewBox="0 0 220 90" fill="none" className="w-full h-20 opacity-90">
              <line
                x1="20"
                y1="8"
                x2="70"
                y2="68"
                stroke="rgba(255,255,255,0.32)"
                strokeWidth="1"
              />
              <line
                x1="110"
                y1="5"
                x2="110"
                y2="68"
                stroke="#FF334B"
                strokeWidth="1.4"
              />
              <line
                x1="200"
                y1="8"
                x2="150"
                y2="68"
                stroke="rgba(255,255,255,0.32)"
                strokeWidth="1"
              />
              <rect
                x="48"
                y="64"
                width="124"
                height="22"
                rx="6"
                fill="rgba(255,255,255,0.08)"
                stroke="rgba(255,255,255,0.25)"
              />
            </svg>
            <p className="font-display text-[11.5px] text-[#CBD5E1] uppercase tracking-[0.16em]">
              DIGITAL EXPERIENCES BUILT AROUND YOUR BUSINESS
            </p>
          </motion.div>
        </div>

        {/* Index 01 + Large Scroll-Ink Philosophy Statement */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start border-t border-white/12 pt-12 sm:pt-14">
          <div className="lg:col-span-2">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#10131C] text-xs font-mono text-[#E2E8F0]">
              01
            </span>
          </div>
          <div className="lg:col-span-10 space-y-5">
            <ScrollInkText
              text="A WEBSITE SHOULD NOT MAKE PEOPLE THINK TOO HARD."
              className="font-display text-[clamp(1.85rem,4.5vw,3.9rem)] font-normal tracking-editorial uppercase"
            />
            <p className="max-w-[540px] text-base sm:text-[18px] leading-[1.65] text-[#CBD5E1]">
              It should be easy to understand, easy to explore and easy to
              remember.
            </p>
          </div>
        </div>

        {/* Two-Column Details: Philosophy + Numbers */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-white/12 pt-12 sm:pt-14">
          <div className="lg:col-span-6 space-y-4">
            <p className="font-display text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
              {brandName} CREATIVE STUDIOS PHILOSOPHY
            </p>
            <p className="max-w-[460px] text-lg sm:text-[19px] leading-[1.55] text-[#F8FAFC] font-normal">
              Behind every beautiful experience, there should be a clear
              purpose. We make complex things feel simple.
            </p>
            <button
              onClick={onScrollToAgency}
              className="cursor-pointer group inline-flex min-h-[44px] items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-[#FF334B] hover:text-white transition-colors"
            >
              <span>READ HOW WE THINK</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <p className="font-display text-[11.5px] font-semibold uppercase tracking-[0.2em] text-[#94A3B8]">
              OUR NUMBERS
            </p>
            <p className="max-w-[500px] text-base leading-[1.65] text-[#CBD5E1]">
              What started with an idea has grown into a community, a portfolio
              and a growing network of founders and teams who believe digital
              experiences can be built better.
            </p>
          </div>
        </div>

        {/* Count-Up Stats Row */}
        <div
          ref={statsRef}
          className="mt-12 sm:mt-14 relative rounded-[24px] border border-white/12 bg-[#10131C] p-6 sm:p-10 overflow-hidden"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={statsInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="origin-left absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF334B] via-[#FF334B]/70 to-transparent"
          />

          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BELIEVE_STATS.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <dd className="font-display text-[clamp(1.9rem,4vw,3.3rem)] font-normal tracking-[-0.04em] text-white">
                  {stat.displayOnly ? (
                    stat.toText
                  ) : (
                    <CountUpStat
                      target={stat.toNum!}
                      suffix={stat.suffix!}
                      trigger={statsInView}
                    />
                  )}
                </dd>
                <dt className="font-display text-xs font-medium uppercase tracking-[0.16em] text-[#94A3B8]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
