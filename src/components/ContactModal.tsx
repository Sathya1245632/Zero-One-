import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, X } from 'lucide-react';
import { DISCIPLINES, STUDIO_BRAND } from '../data/studioConfig';
import { GeometricLogo } from './ui/GeometricLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  initialProjectRef?: string;
}

const TIMELINES = ['ASAP (2–4 weeks)', '1–2 months', '3+ months', 'Flexible'];

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  brandName,
  initialProjectRef,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Web Design',
    'Development',
  ]);
  const [timeline, setTimeline] = useState<string>(TIMELINES[1]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [brief, setBrief] = useState(
    initialProjectRef
      ? `Interested in building something with the craft and feel of ${initialProjectRef}.`
      : ''
  );
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const buildMailtoHref = () => {
    const servicesText = selectedServices.join(', ') || 'Custom Project';
    const subject = `Project Inquiry · ${name.trim()}${
      company.trim() ? ` (${company.trim()})` : ''
    }`;
    const bodyLines = [
      `Hi ${STUDIO_BRAND.founderName},`,
      '',
      brief.trim() || 'I would like to discuss a new project.',
      '',
      '--- Project Details ---',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      company.trim() ? `Company / Brand: ${company.trim()}` : null,
      `Scope: ${servicesText}`,
      `Target Timeline: ${timeline}`,
    ].filter((line): line is string => line !== null);

    return `mailto:${STUDIO_BRAND.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    window.location.href = buildMailtoHref();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[740px] rounded-[32px] border border-white/15 bg-[#0d0d0d] p-6 sm:p-10 text-[#f4f4f2] shadow-[0_32px_90px_rgba(0,0,0,0.9)] my-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10.5px] uppercase tracking-[0.2em] text-white/70">
                  <GeometricLogo size={13} />
                  <span>START A PROJECT · {brandName}</span>
                </div>
                <h2
                  id="contact-modal-title"
                  className="text-3xl sm:text-4xl font-light tracking-head text-white"
                >
                  Let’s build something different.
                </h2>
                <p className="text-[14px] text-white/55">
                  No formal RFP needed. Share your direction and we’ll respond
                  within 24 hours.
                </p>
              </div>

              <button
                onClick={resetAndClose}
                aria-label="Close project brief modal"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-[24px] border border-white/15 bg-[#141414] p-8 text-center space-y-5"
              >
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-light tracking-tight text-white">
                  Brief received, {name}.
                </h3>
                <p className="mx-auto max-w-[440px] text-sm text-white/65 leading-relaxed">
                  We’ve logged your inquiry for{' '}
                  <span className="text-white font-medium">
                    {selectedServices.join(', ') || 'Custom Project'}
                  </span>
                  . Your email client has been opened addressed to{' '}
                  <a
                    href={buildMailtoHref()}
                    className="text-white underline"
                  >
                    {STUDIO_BRAND.email}
                  </a>{' '}
                  so {STUDIO_BRAND.founderName} can reply to{' '}
                  <span className="text-white">{email}</span> directly.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={buildMailtoHref()}
                    className="rounded-full border border-white/20 bg-white/[0.06] text-white px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition-colors"
                  >
                    Email {STUDIO_BRAND.email}
                  </a>
                  <button
                    onClick={resetAndClose}
                    className="rounded-full bg-white text-black px-6 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
                  >
                    Back to studio
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-6">
                {/* Service Chips */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2.5">
                    WHAT ARE WE CREATING TOGETHER?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {DISCIPLINES.map((srv) => {
                      const active = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium border transition-all ${
                            active
                              ? 'bg-white text-black border-white'
                              : 'bg-white/[0.03] text-white/65 border-white/15 hover:border-white/35'
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeline Selector */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] text-white/50 mb-2.5">
                    TARGET TIMELINE
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINES.map((item) => {
                      const active = timeline === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setTimeline(item)}
                          className={`rounded-full px-3.5 py-1.5 text-[12px] border transition-all ${
                            active
                              ? 'bg-[#fb2629] text-white border-[#fb2629]'
                              : 'bg-white/[0.03] text-white/60 border-white/12 hover:border-white/30'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-display text-[11px] uppercase tracking-[0.16em] text-[#94A3B8] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Rivera"
                      className="w-full min-h-[46px] rounded-2xl border border-white/15 bg-[#10131C] px-4 py-3 text-base sm:text-sm text-white placeholder:text-[#64748B] focus:border-white/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-display text-[11px] uppercase tracking-[0.16em] text-[#94A3B8] mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full min-h-[46px] rounded-2xl border border-white/15 bg-[#10131C] px-4 py-3 text-base sm:text-sm text-white placeholder:text-[#64748B] focus:border-white/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block font-display text-[11px] uppercase tracking-[0.16em] text-[#94A3B8] mb-1.5"
                    >
                      Company / Brand
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Optional"
                      className="w-full min-h-[46px] rounded-2xl border border-white/15 bg-[#10131C] px-4 py-3 text-base sm:text-sm text-white placeholder:text-[#64748B] focus:border-white/50 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Project Brief */}
                <div>
                  <label
                    htmlFor="contact-brief"
                    className="block font-display text-[11px] uppercase tracking-[0.16em] text-[#94A3B8] mb-1.5"
                  >
                    Tell us about your idea
                  </label>
                  <textarea
                    id="contact-brief"
                    rows={3}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="What are you building, and what should people feel when they experience it?"
                    className="w-full rounded-2xl border border-white/15 bg-[#10131C] px-4 py-3 text-base sm:text-sm text-white placeholder:text-[#64748B] focus:border-white/50 focus:outline-none resize-none"
                  />
                </div>

                {/* Submit Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
                  <span className="text-xs text-white/45">
                    Or email directly:{' '}
                    <a
                      href={`mailto:${STUDIO_BRAND.email}`}
                      className="text-white/80 underline"
                    >
                      {STUDIO_BRAND.email}
                    </a>
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-[#fb2629] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Send Project Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
