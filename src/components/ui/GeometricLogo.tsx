import React from 'react';

interface GeometricLogoProps {
  className?: string;
  size?: number;
  inverted?: boolean;
}

export const GeometricLogo: React.FC<GeometricLogoProps> = ({
  className = '',
  size = 28,
  inverted = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer faceted hexagon / tesseract mark */}
      <polygon
        points="32,3 58,18 58,46 32,61 6,46 6,18"
        fill={inverted ? '#000000' : '#ffffff'}
        stroke={inverted ? '#000000' : '#ffffff'}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Top inner triangle */}
      <polygon
        points="32,12 49,22 15,22"
        fill={inverted ? '#ffffff' : '#000000'}
        opacity="0.92"
      />
      {/* Center diamond core */}
      <polygon
        points="32,23 48,35 32,51 16,35"
        fill={inverted ? '#ffffff' : '#000000'}
      />
      {/* Inner faceted highlight */}
      <polygon
        points="32,26 42,35 32,45 22,35"
        fill={inverted ? '#000000' : '#ffffff'}
      />
      {/* Center void */}
      <polygon
        points="32,30 37,35 32,40 27,35"
        fill={inverted ? '#ffffff' : '#000000'}
      />
    </svg>
  );
};

interface BrandMarkProps {
  name: string;
  subname: string;
  lightTheme?: boolean;
  compact?: boolean;
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  name,
  subname,
  lightTheme = false,
  compact = false,
}) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <GeometricLogo size={compact ? 26 : 30} inverted={lightTheme} />
      <div className="flex flex-col leading-none">
        <span
          className={`font-wordmark text-[15px] font-semibold uppercase tracking-[0.28em] transition-colors duration-300 ${
            lightTheme ? 'text-[#0F172A]' : 'text-[#F8FAFC]'
          }`}
        >
          {name}
        </span>
        <span
          className={`mt-1 text-[9px] font-medium tracking-[0.24em] transition-colors duration-300 ${
            lightTheme ? 'text-[#475569]' : 'text-[#94A3B8]'
          }`}
        >
          {subname}
        </span>
      </div>
    </div>
  );
};
