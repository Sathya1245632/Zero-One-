import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Compass,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Grid,
  Layers,
  Layout,
  MonitorSmartphone,
  MousePointerClick,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react';
import {
  BENTO_SERVICES,
  FEATURED_SERVICES,
  PROJECTS,
  ProjectItem,
  ServiceCard,
} from '../data/studioConfig';
import { RollButton } from './ui/RollButton';

interface ServicesSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenContact: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-3.5 h-3.5" />,
  GitBranch: <GitBranch className="w-3.5 h-3.5" />,
  Layout: <Layout className="w-3.5 h-3.5" />,
  Layers: <Layers className="w-3.5 h-3.5" />,
  MonitorSmartphone: <MonitorSmartphone className="w-3.5 h-3.5" />,
  MousePointerClick: <MousePointerClick className="w-3.5 h-3.5" />,
  Grid: <Grid className="w-3.5 h-3.5" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5" />,
  Globe: <Globe className="w-3.5 h-3.5" />,
  Building2: <Building2 className="w-3.5 h-3.5" />,
  Zap: <Zap className="w-3.5 h-3.5" />,
  Database: <Database className="w-3.5 h-3.5" />,
  Wand2: <Wand2 className="w-3.5 h-3.5" />,
  Cpu: <Cpu className="w-3.5 h-3.5" />,
};

const FolderBadge: React.FC<{ index: string }> = ({ index }) => (
  <div className="relative h-14 w-14 select-none">
    <div className="absolute top-0 left-1 h-4 w-7 rounded-t-md bg-slate-300" />
    <div className="absolute top-2 inset-x-0 bottom-0 rounded-xl bg-slate-200 border border-slate-300" />
    <div className="absolute left-2 right-2 top-1 bottom-4 rounded-lg bg-white border border-slate-300 px-2 pt-1.5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1.5">
      <div className="flex items-center justify-between">
        <span className="font-display text-[9.5px] font-bold tracking-wider text-[#0F172A]">
          {index}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF334B]" />
      </div>
      <div className="mt-1.5 h-0.5 w-6 rounded bg-slate-300" />
      <div className="mt-1 h-0.5 w-4 rounded bg-slate-200" />
    </div>
    <div className="absolute bottom-0 inset-x-0 h-7 rounded-b-xl rounded-t-sm bg-gradient-to-b from-slate-200 to-slate-300 border-t border-white/80 shadow-inner" />
  </div>
);

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectProject,
  onOpenContact,
}) => {
  const openLinkedProject = (card: ServiceCard) => {
    const found = PROJECTS.find((p) => p.id === card.linkedProjectIds[0]);
    if (found) onSelectProject(found);
  };

  return (
    <section
      id="services"
      data-nav-theme="light"
      className="bg-[#F8FAFC] text-[#0F172A] py-20 sm:py-32"
    >
      <div className="mx-auto max-w-[1344px] px-4 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[780px] mx-auto">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-slate-200 px-4 py-1.5 font-display text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#334155] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF334B]" />
            WHAT WE CREATE
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF334B]" />
          </div>

          <h2 className="font-display mt-6 text-[clamp(2.35rem,5.4vw,4.5rem)] font-normal tracking-head text-[#0F172A]">
            Digital experiences built
            <br />
            <span className="font-serif italic font-normal text-[#0F172A]">
              around your business.
            </span>
          </h2>

          <p className="mt-5 mx-auto max-w-[540px] text-base sm:text-[17px] leading-[1.65] text-[#475569]">
            We don’t believe in fixed packages. Every business has different
            goals, audiences and challenges. So we build what makes sense for
            you.
          </p>
        </div>

        {/* 2 Featured Full-Width Bento Rows (01, 02) */}
        <div className="mt-14 sm:mt-16 space-y-6">
          {FEATURED_SERVICES.map((row) => (
            <motion.div
              key={row.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="group rounded-[32px] bg-[#F1F5F9] border border-slate-200/90 p-2.5 sm:p-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5">
                {/* Left Content Card */}
                <div className="lg:col-span-6 rounded-[24px] bg-white border border-slate-200/80 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <FolderBadge index={row.index} />
                    <h3 className="font-display mt-6 sm:mt-7 text-[26px] sm:text-[32px] font-medium tracking-[-0.03em] text-[#0F172A]">
                      {row.title}
                    </h3>
                    <p className="mt-3 text-base leading-[1.65] text-[#475569]">
                      <strong className="font-semibold text-[#0F172A]">
                        {row.lead}
                      </strong>{' '}
                      {row.description}
                    </p>
                  </div>

                  {/* Capability Chips */}
                  <div className="mt-7 sm:mt-8 flex flex-wrap gap-2">
                    {row.chips.map((chip) => (
                      <span
                        key={chip.label}
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3.5 py-1.5 text-[12.5px] font-medium text-[#334155]"
                      >
                        <span className="text-[#FF334B]">
                          {ICON_MAP[chip.iconName]}
                        </span>
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Interactive Stage Card */}
                <div className="lg:col-span-6 rounded-[24px] overflow-hidden min-h-[280px] sm:min-h-[340px] relative">
                  {row.previewType === 'design' ? (
                    <div className="h-full w-full bg-gradient-to-br from-[#E2CFC4] via-[#C8A28E] to-[#8D624F] p-5 sm:p-8 flex items-center justify-center">
                      <div className="w-full max-w-[440px]">
                        <div className="rounded-2xl bg-[#0B0D13] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] border border-black/30">
                          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#2A120A] via-[#7C2D12] to-[#EA580C] p-5 text-white">
                            <div className="flex items-center justify-between font-display text-[10px] tracking-[0.2em] uppercase text-white/85">
                              <span>MODU</span>
                              <span>STUDIO PREVIEW</span>
                            </div>
                            <h4 className="font-display mt-5 sm:mt-6 text-xl sm:text-2xl font-normal tracking-[-0.03em] leading-tight max-w-[260px]">
                              {row.previewTitle}
                            </h4>
                            <p className="mt-2 text-xs text-white/85">
                              {row.previewSubtitle}
                            </p>
                            <div className="mt-5 grid grid-cols-3 gap-2">
                              {['Clarity', 'Rhythm', 'System'].map((tag) => (
                                <div
                                  key={tag}
                                  className="rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-2 text-[11px] font-medium"
                                >
                                  {tag}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mx-auto h-5 w-16 bg-gradient-to-b from-[#2b2b2b] to-[#111]" />
                        <div className="mx-auto h-1.5 w-32 rounded-full bg-[#1a1a1a]" />
                      </div>
                    </div>
                  ) : (
                    <div className="h-full w-full bg-[#0B0D13] text-[#F8FAFC] p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                      <div
                        className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full opacity-25 blur-3xl"
                        style={{ backgroundColor: '#FF334B' }}
                      />
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-display rounded-full bg-white/10 px-3 py-1 text-[10.5px] tracking-[0.18em] uppercase text-[#E2E8F0]">
                          PRODUCTION BUILD
                        </span>
                        <span className="font-mono text-xs font-semibold text-emerald-400">
                          100 / 100 VITALS
                        </span>
                      </div>
                      <div className="relative z-10 my-auto space-y-3 py-4">
                        <div className="rounded-xl border border-white/12 bg-white/[0.04] p-3.5 sm:p-4 font-mono text-xs text-[#E2E8F0] overflow-x-auto">
                          <div className="text-[#94A3B8] mb-1">
                            // Responsive Architecture
                          </div>
                          <div className="whitespace-nowrap">
                            <span className="text-[#FF334B]">export const</span>{' '}
                            Experience = () =&gt;{' '}
                            <span className="text-emerald-300">
                              &lt;BespokeCraft fps=&#123;60&#125; /&gt;
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {[
                            { k: 'First Paint', v: '0.4s' },
                            { k: 'Motion', v: 'Spring' },
                            { k: 'Uptime', v: '99.99%' },
                          ].map((stat) => (
                            <div
                              key={stat.k}
                              className="rounded-xl border border-white/12 bg-white/[0.04] py-2.5"
                            >
                              <div className="font-display text-sm font-semibold text-white">
                                {stat.v}
                              </div>
                              <div className="text-[11px] text-[#94A3B8]">
                                {stat.k}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="relative z-10 text-xs text-[#94A3B8]">
                        {row.previewSubtitle}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 6 Bento Service Cards (3-column grid) */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENTO_SERVICES.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.06 }}
              className="group rounded-[28px] bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-[0_6px_24px_rgba(15,23,42,0.03)] transition-colors duration-200 hover:border-slate-300"
            >
              <div>
                <h3 className="font-display text-[22px] font-medium tracking-[-0.02em] text-[#0F172A]">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-base leading-[1.6] text-[#475569]">
                  <strong className="font-semibold text-[#0F172A]">
                    {card.lead}
                  </strong>{' '}
                  {card.description}
                </p>

                {/* Chips */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {card.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-medium text-[#334155]"
                    >
                      {chip}
                    </span>
                  ))}
                  <button
                    onClick={() => openLinkedProject(card)}
                    aria-label={`View ${card.title} projects`}
                    className="cursor-pointer inline-flex min-h-[32px] items-center gap-1 rounded-full bg-[#0F172A] text-white px-3 py-1 text-xs font-display font-medium hover:bg-[#FF334B] transition-colors duration-200"
                  >
                    <span>{card.extraCount}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card Bottom Visual Preview */}
              <button
                onClick={() => openLinkedProject(card)}
                className="cursor-pointer mt-7 relative h-44 w-full rounded-[18px] overflow-hidden border border-slate-200 bg-slate-50 text-left focus:outline-none"
              >
                {card.visualType === 'ecommerce' && (
                  <div className="h-full w-full bg-[#E2E8F0] p-4 flex items-center justify-center gap-3 relative overflow-hidden">
                    <div className="w-28 h-32 rounded-xl bg-[#2a1d14] text-white p-3 -rotate-6 shadow-md transition-transform duration-300 group-hover:-rotate-12 flex flex-col justify-between">
                      <span className="font-display text-[9px] uppercase tracking-widest text-white/75">
                        SIAARA
                      </span>
                      <span className="text-xs font-medium">Handloom Silk</span>
                    </div>
                    <div className="w-28 h-32 rounded-xl bg-[#0B0D13] text-white p-3 rotate-6 shadow-lg transition-transform duration-300 group-hover:rotate-12 flex flex-col justify-between">
                      <span className="font-display text-[9px] uppercase tracking-widest text-[#FF334B]">
                        VYRN
                      </span>
                      <span className="text-xs font-medium">Drop 04 Cart</span>
                    </div>
                  </div>
                )}

                {card.visualType === 'interactive3d' && (
                  <div className="h-full w-full bg-[#0B0D13] text-white p-4 flex flex-col justify-between relative">
                    <div
                      className="absolute inset-0 opacity-50"
                      style={{
                        background:
                          'radial-gradient(circle at 60% 45%, rgba(249,115,22,0.5), transparent 65%)',
                      }}
                    />
                    <span className="relative z-10 font-display text-[10px] tracking-[0.2em] text-[#CBD5E1]">
                      OBSCURA · SPATIAL WEB
                    </span>
                    <div className="relative z-10 flex items-end justify-between">
                      <span className="font-display text-lg font-normal">
                        Vesper Light
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white text-[#0F172A] px-2.5 py-1 text-[10.5px] font-display font-semibold">
                        {card.badgeLabel} <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )}

                {card.visualType === 'brandkit' && (
                  <div className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-200 p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-6 w-6 rounded-md bg-[#0F172A]" />
                      <span className="h-6 w-6 rounded-md bg-[#FF334B]" />
                      <span className="h-6 w-6 rounded-md bg-[#06B6D4]" />
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-display text-[10px] uppercase tracking-widest text-[#475569]">
                          IDENTITY SYSTEM
                        </p>
                        <p className="font-display text-base font-semibold text-[#0F172A]">
                          Finsmith Guidelines
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#0F172A]" />
                    </div>
                  </div>
                )}

                {card.visualType === 'apps' && (
                  <div className="h-full w-full bg-[#0F172A] text-white p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between font-display text-[10.5px] text-[#CBD5E1]">
                      <span>SAGEWELL · VANTLINE</span>
                      <span className="text-lime-400 font-semibold">
                        ● Live App
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[65, 88, 52].map((val, i) => (
                        <div
                          key={i}
                          className="rounded-lg bg-white/[0.07] border border-white/12 p-2"
                        >
                          <div className="font-display text-sm font-semibold">
                            {val}%
                          </div>
                          <div className="mt-1 h-1.5 rounded bg-white/15">
                            <div
                              className="h-full rounded bg-lime-400"
                              style={{ width: `${val}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {card.visualType === 'ai' && (
                  <div className="h-full w-full bg-gradient-to-br from-[#16100e] via-[#0B0D13] to-[#06070A] text-white p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[10.5px] font-semibold tracking-widest uppercase text-[#F97316]">
                        AGENT WORKFLOW
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[#F97316] animate-pulse" />
                    </div>
                    <div className="flex items-center gap-2 font-display text-[11px]">
                      <span className="rounded-lg bg-white/12 px-2.5 py-1.5">
                        Input
                      </span>
                      <span className="h-[1px] flex-1 bg-white/25" />
                      <span className="rounded-lg bg-[#F97316]/20 border border-[#F97316]/60 px-2.5 py-1.5 text-[#F97316] font-semibold">
                        Reason
                      </span>
                      <span className="h-[1px] flex-1 bg-white/25" />
                      <span className="rounded-lg bg-white/12 px-2.5 py-1.5">
                        Ship
                      </span>
                    </div>
                  </div>
                )}

                {card.visualType === 'strategy' && (
                  <div className="h-full w-full bg-[#0F172A] text-white p-4 flex flex-col justify-between">
                    <span className="font-display text-[10px] tracking-[0.2em] uppercase text-[#94A3B8]">
                      POSITIONING MATRIX
                    </span>
                    <div className="flex items-end justify-between">
                      <span className="font-display text-lg font-normal">
                        Clarity Before Code
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white text-[#0F172A] px-2.5 py-1 text-[10.5px] font-display font-semibold">
                        {card.badgeLabel} <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <RollButton
            label="Discuss your scope →"
            variant="dark"
            onClick={onOpenContact}
          />
        </div>
      </div>
    </section>
  );
};
