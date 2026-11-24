import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, RotateCcw, X } from 'lucide-react';
import { FAQS, PROJECTS, STUDIO_BRAND } from '../data/studioConfig';
import { GeometricLogo } from './ui/GeometricLogo';

interface StudioAssistantProps {
  brandName: string;
  onOpenContact: () => void;
}

interface ChatMessage {
  id: string;
  role: 'assistant' | 'user';
  text: string;
}

const SUGGESTED_PROMPTS = [
  'What services do you build?',
  'Do you offer fixed packages?',
  'Tell me about the founder',
  'How do we start a project?',
];

export const StudioAssistant: React.FC<StudioAssistantProps> = ({
  brandName,
  onOpenContact,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: `Hi — I’m the ${brandName} Studio Assistant. Ask me anything about what we create, how projects work, our portfolio, or founder ${STUDIO_BRAND.founderName}.`,
    },
  ]);

  const generateReply = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('package') || q.includes('price') || q.includes('cost')) {
      return 'We don’t believe in fixed bronze/silver/gold packages. Every business has different goals and challenges, so we scope custom builds around your exact needs. Click "Start a Project" to share your timeline and goals.';
    }
    if (
      q.includes('founder') ||
      q.includes('zero one') ||
      q.includes('sathya') ||
      q.includes('gireesh') ||
      q.includes('who')
    ) {
      return `${STUDIO_BRAND.founderName} (${STUDIO_BRAND.founderRoles}) leads ${brandName} Creative Studios. Every client works directly with the founder and builders — no layers of middlemen.`;
    }
    if (
      q.includes('service') ||
      q.includes('create') ||
      q.includes('build') ||
      q.includes('offer')
    ) {
      return 'We design and build custom Websites, Web Applications, E-commerce storefronts (like SIAARA & VYRN), Interactive & 3D experiences, SaaS platforms (like Sagewell & Vantline), AI workflows, and Brand Identity Kits.';
    }
    if (q.includes('start') || q.includes('contact') || q.includes('hire')) {
      return `You don’t need a formal brief! Just click "Start a Project" or email ${STUDIO_BRAND.email} with your rough idea and we’ll take it from there.`;
    }
    if (q.includes('work') || q.includes('project') || q.includes('portfolio')) {
      const sample = PROJECTS.slice(0, 5)
        .map((p) => p.title)
        .join(', ');
      return `Our selected portfolio spans 16+ bespoke builds including ${sample}, and more. Click any project card in the showcase grid to inspect its challenge, solution, and metrics.`;
    }

    // Match against FAQ knowledge base
    const matchedFaq = FAQS.find(
      (f) =>
        f.question.toLowerCase().includes(q) ||
        q
          .split(' ')
          .filter((w) => w.length > 3)
          .some((w) => f.question.toLowerCase().includes(w))
    );
    if (matchedFaq) {
      return matchedFaq.answer;
    }

    return `At ${brandName} Creative Studios, everything starts from zero around your brand, audience, and vision. Feel free to ask about our services, process, or click "Start a Project" to talk with ${STUDIO_BRAND.founderName}.`;
  };

  const sendQuery = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };
    const replyMsg: ChatMessage = {
      id: `a-${Date.now() + 1}`,
      role: 'assistant',
      text: generateReply(trimmed),
    };
    setMessages((prev) => [...prev, userMsg, replyMsg]);
    setInput('');
  };

  const resetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        text: `Hi — I’m the ${brandName} Studio Assistant. Ask me anything about what we create, how projects work, our portfolio, or founder ${STUDIO_BRAND.founderName}.`,
      },
    ]);
  };

  return (
    <>
      {/* Floating Bottom-Right Trigger Pill / Button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={`Ask ${brandName} studio assistant`}
        className="fixed bottom-6 right-6 z-[70] group inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#0d0d0d] text-white shadow-[0_12px_36px_rgba(0,0,0,0.65)] transition-all duration-300 hover:scale-105 hover:border-white/40 cursor-pointer"
      >
        <GeometricLogo size={26} />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full border border-white/15 bg-black/90 px-3.5 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Ask {brandName}
        </span>
      </button>

      {/* Studio Assistant Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-label={`Ask ${brandName} Studio Assistant`}
            className="fixed bottom-24 right-4 sm:right-6 z-[70] w-[calc(100vw-2rem)] max-w-[390px] rounded-[28px] border border-white/15 bg-[#0d0d0d]/95 backdrop-blur-2xl text-[#f4f4f2] shadow-[0_28px_80px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.07] border border-white/10">
                  <GeometricLogo size={16} />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-white leading-none">
                    Ask {brandName}
                  </h3>
                  <p className="mt-1 text-[11px] text-white/45 leading-none">
                    Studio assistant · answers from this website
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={resetChat}
                  aria-label="Reset conversation"
                  title="Reset conversation"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/55 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close assistant"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/55 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Feed */}
            <div className="max-h-[320px] overflow-y-auto p-5 space-y-3.5">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13px] leading-[1.55] ${
                      msg.role === 'user'
                        ? 'bg-white text-black font-medium'
                        : 'bg-[#161618] border border-white/10 text-white/85'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Suggested Quick Prompts */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendQuery(prompt)}
                    className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/70 hover:border-white/30 hover:text-white transition-colors text-left"
                  >
                    {prompt}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContact();
                  }}
                  className="rounded-full border border-[#fb2629]/40 bg-[#fb2629]/15 px-3 py-1.5 text-[11px] font-medium text-[#fb2629] hover:bg-[#fb2629] hover:text-white transition-colors"
                >
                  Start a Project ↗
                </button>
              </div>
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendQuery(input);
              }}
              className="border-t border-white/10 p-3 flex items-center gap-2 bg-[#0a0a0a]"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask about ${brandName}...`}
                className="flex-1 rounded-full border border-white/12 bg-[#141414] px-4 py-2.5 text-xs text-white placeholder:text-white/35 focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send question"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black hover:bg-[#fb2629] hover:text-white transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};
