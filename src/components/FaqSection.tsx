import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FAQS, STUDIO_BRAND } from '../data/studioConfig';
import { RollButton } from './ui/RollButton';

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="faq"
      data-nav-theme="dark"
      className="bg-[#06070A] text-[#F8FAFC] pt-6"
    >
      <div className="rounded-t-[36px] sm:rounded-t-[44px] bg-[#0B0D13] border-t border-white/[0.1] py-20 sm:py-28">
        <div className="mx-auto max-w-[1344px] px-4 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sticky Aside */}
            <div className="lg:col-span-5 lg:sticky lg:top-[108px] space-y-6">
              <span className="font-display inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CBD5E1]">
                FAQS
              </span>

              <h2 className="font-display text-[clamp(2.35rem,4.5vw,3.9rem)] font-normal tracking-head text-white">
                Have{' '}
                <span className="font-serif italic font-normal">
                  questions?
                </span>
              </h2>

              <div className="rounded-[24px] border border-white/12 bg-[#10131C] p-6 sm:p-7 space-y-5">
                <div className="space-y-2.5">
                  <h3 className="font-display text-lg font-medium text-white">
                    Don’t have everything figured out? That’s okay.
                  </h3>
                  <p className="text-base leading-[1.65] text-[#CBD5E1]">
                    You don’t need a perfect brief. Tell us what you have in
                    mind. We’ll take it from there.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`mailto:${STUDIO_BRAND.email}`}
                    className="group relative inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-[#161A26] px-5 py-2.5 font-display text-[14px] font-medium text-white hover:border-white/40 transition-colors overflow-hidden"
                  >
                    <span className="roll-text h-[1.25em]">
                      <span className="roll-text-inner">
                        <span>Email Us</span>
                        <span aria-hidden="true" className="text-white/90">
                          {STUDIO_BRAND.email}
                        </span>
                      </span>
                    </span>
                  </a>

                  <RollButton
                    label="Start a Project"
                    variant="primary"
                    onClick={onOpenContact}
                  />
                </div>
              </div>
            </div>

            {/* Right 16-Item Accordion */}
            <div className="lg:col-span-7 divide-y divide-white/[0.1] border-y border-white/[0.1]">
              {FAQS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="py-1">
                    <button
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      className="cursor-pointer w-full min-h-[56px] py-4 sm:py-5 flex items-center justify-between gap-4 sm:gap-6 text-left group focus:outline-none"
                    >
                      <span
                        className={`font-display text-[16.5px] sm:text-[18px] font-normal tracking-[-0.015em] transition-colors ${
                          isOpen
                            ? 'text-white'
                            : 'text-[#E2E8F0] group-hover:text-white'
                        }`}
                      >
                        {item.question}
                      </span>

                      <span
                        className={`shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 ${
                          isOpen
                            ? 'border-[#FF334B]/50 bg-[#FF334B]/15 text-[#FF334B] rotate-45'
                            : 'border-white/20 text-[#CBD5E1] group-hover:border-white/40 group-hover:text-white'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-4 sm:pr-10 text-base leading-[1.65] text-[#CBD5E1]">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
