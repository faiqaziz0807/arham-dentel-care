import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: 'dark' | 'light';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  textColor = 'dark',
  className = ''
}) => {
  const iconDimensions = {
    sm: { width: 34, height: 34 },
    md: { width: 42, height: 42 },
    lg: { width: 56, height: 56 },
    xl: { width: 72, height: 72 },
  }[size];

  const textSize = {
    sm: { title: 'text-base font-extrabold tracking-wider', sub: 'text-[9px] font-bold tracking-[0.2em]' },
    md: { title: 'text-xl font-extrabold tracking-wider', sub: 'text-[11px] font-bold tracking-[0.22em]' },
    lg: { title: 'text-2xl font-extrabold tracking-wider', sub: 'text-xs font-bold tracking-[0.25em]' },
    xl: { title: 'text-3xl font-extrabold tracking-wider', sub: 'text-sm font-bold tracking-[0.28em]' },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* High Fidelity Exact Vector Recreation of Arham Dental Care Logo */}
      <svg
        width={iconDimensions.width}
        height={iconDimensions.height}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="Arham Dental Care Logo"
      >
        <defs>
          <linearGradient id="toothGradient" x1="50" y1="20" x2="150" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0C4A6E" />
          </linearGradient>
          <linearGradient id="waveTopGradient" x1="20" y1="90" x2="180" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="40%" stopColor="#06B6D4" />
            <stop offset="80%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="waveBottomGradient" x1="30" y1="110" x2="170" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0C4A6E" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#06B6D4" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Heart-Tooth Base Silhouette with Roots */}
        <path
          d="M100 45 C75 22 45 35 45 75 C45 105 60 125 70 160 C75 178 85 178 90 155 C95 130 105 130 110 155 C115 178 125 178 130 160 C140 125 155 105 155 75 C155 35 125 22 100 45 Z"
          fill="#FFFFFF"
          stroke="url(#toothGradient)"
          strokeWidth="9"
          strokeLinejoin="round"
          filter="url(#softGlow)"
        />

        {/* Upper Left Highlight Contour */}
        <path
          d="M60 70 C60 48 80 40 95 50"
          stroke="#E0F2FE"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Lower Wave Ribbon (Deep Turquoise to Blue) */}
        <path
          d="M38 116 C65 92 130 148 165 98 C145 128 85 88 38 116 Z"
          fill="url(#waveBottomGradient)"
        />

        {/* Upper Dynamic Flow Wave Ribbon (Vibrant Cyan / Sky) */}
        <path
          d="M32 102 C68 76 135 136 172 82 C152 114 88 74 32 102 Z"
          fill="url(#waveTopGradient)"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`${textSize.title} font-serif tracking-widest font-black ${
              textColor === 'dark' ? 'text-[#0C4A6E]' : 'text-white'
            }`}
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '0.08em' }}
          >
            ARHAM
          </span>
          <span
            className={`${textSize.sub} uppercase font-bold text-[#06B6D4] mt-0.5`}
            style={{ letterSpacing: '0.22em' }}
          >
            DENTAL CARE
          </span>
        </div>
      )}
    </div>
  );
};
