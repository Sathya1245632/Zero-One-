import React from 'react';
import { GeometricLogo } from './GeometricLogo';

interface RollButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline-light';
  withYouBadge?: boolean;
  trailingIcon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

export const RollButton: React.FC<RollButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  withYouBadge = false,
  trailingIcon,
  className = '',
  type = 'button',
}) => {
  const baseStyles =
    'group relative inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full font-display font-medium text-[15px] tracking-[-0.01em] transition-all duration-300 cursor-pointer select-none active:scale-[0.98]';

  const variantStyles: Record<string, string> = {
    primary:
      'bg-[#F8FAFC] text-[#0F172A] hover:bg-white px-6 py-3 shadow-[0_10px_32px_rgba(255,255,255,0.14)]',
    secondary:
      'bg-[#10131C] text-[#F8FAFC] border border-white/15 hover:border-white/35 hover:bg-[#161A26] px-6 py-3',
    dark: 'bg-[#0F172A] text-white hover:bg-[#1E293B] px-6 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.2)]',
    'outline-light':
      'bg-[#0F172A]/[0.05] text-[#0F172A] border border-[#0F172A]/20 hover:border-[#0F172A]/45 hover:bg-[#0F172A]/[0.09] px-5 py-2.5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {withYouBadge && (
        <span className="inline-flex items-center -space-x-2 mr-0.5">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black ring-2 ring-white">
            <GeometricLogo size={14} />
          </span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e6e7ea] text-[9px] font-semibold text-black ring-2 ring-white">
            You
          </span>
        </span>
      )}

      <span className="roll-text h-[1.25em]">
        <span className="roll-text-inner">
          <span>{label}</span>
          <span aria-hidden="true">{label}</span>
        </span>
      </span>

      {trailingIcon && (
        <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {trailingIcon}
        </span>
      )}
    </button>
  );
};
