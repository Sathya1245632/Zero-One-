import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { ProjectItem } from '../data/studioConfig';
import { ProjectMockup } from './ui/ProjectMockup';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onStartSimilar,
}) => {
  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-[75] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Case Study Panel */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-[880px] rounded-[32px] border border-white/15 bg-[#0d0d0d] text-[#f4f4f2] overflow-hidden shadow-[0_32px_90px_rgba(0,0,0,0.92)] my-auto"
          >
            {/* Top Visual Banner */}
            <div className="relative h-64 sm:h-72 w-full border-b border-white/10">
              <ProjectMockup project={project} inModal />
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/75 border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study Details */}
            <div className="p-6 sm:p-10 space-y-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
                    {project.category} · {project.year}
                  </span>
                  <h2
                    id="project-modal-title"
                    className="mt-1 text-3xl sm:text-4xl font-light tracking-head text-white"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-2 text-base text-white/75">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-white/10 bg-[#141414] p-4"
                  >
                    <div
                      className="text-2xl sm:text-3xl font-light tracking-tight"
                      style={{ color: project.accentColor }}
                    >
                      {m.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
                  <span className="text-[10.5px] uppercase tracking-[0.2em] text-white/45">
                    THE CHALLENGE
                  </span>
                  <p className="text-sm leading-relaxed text-white/75">
                    {project.challenge}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
                  <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#fb2629]">
                    OUR APPROACH &amp; SOLUTION
                  </span>
                  <p className="text-sm leading-relaxed text-white/75">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables & CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
                <div className="flex flex-wrap items-center gap-2">
                  {project.deliverables.map((del) => (
                    <span
                      key={del}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-3 py-1 text-xs text-white/75"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#fb2629]" />
                      {del}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const title = project.title;
                    onClose();
                    onStartSimilar(title);
                  }}
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-[#fb2629] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Build something like this</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
