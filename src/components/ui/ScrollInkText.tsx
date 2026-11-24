import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollInkWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isLightMode?: boolean;
  highlightAccent?: boolean;
}

const ScrollInkWord: React.FC<ScrollInkWordProps> = ({
  word,
  progress,
  range,
  isLightMode = false,
  highlightAccent = false,
}) => {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <span className="relative inline-block mr-[0.24em]">
      <span
        className={
          isLightMode ? 'text-[#0F172A]/20' : 'text-white/20'
        }
        aria-hidden="true"
      >
        {word}
      </span>
      <motion.span
        style={{ opacity }}
        className={`absolute left-0 top-0 ${
          highlightAccent
            ? 'text-[#FF334B]'
            : isLightMode
            ? 'text-[#0F172A]'
            : 'text-[#F8FAFC]'
        }`}
      >
        {word}
      </motion.span>
    </span>
  );
};

interface ScrollInkTextProps {
  text: string;
  className?: string;
  isLightMode?: boolean;
  accentWord?: string;
}

export const ScrollInkText: React.FC<ScrollInkTextProps> = ({
  text,
  className = '',
  isLightMode = false,
  accentWord,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.88', 'end 0.45'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, idx) => {
        const start = idx / words.length;
        const end = start + 1 / words.length;
        const isAccent =
          accentWord && word.toLowerCase().includes(accentWord.toLowerCase());
        return (
          <ScrollInkWord
            key={`${word}-${idx}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
            isLightMode={isLightMode}
            highlightAccent={Boolean(isAccent)}
          />
        );
      })}
    </p>
  );
};
