import React from 'react';

interface TdcLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const TdcLogo: React.FC<TdcLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const sizeMap = {
    sm: { height: 32, textScale: 'text-lg', subScale: 'text-[9px]' },
    md: { height: 42, textScale: 'text-2xl', subScale: 'text-[11px]' },
    lg: { height: 56, textScale: 'text-3xl', subScale: 'text-xs' },
    xl: { height: 72, textScale: 'text-4xl', subScale: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* 3D Cyclone Swirl Emblem inspired by TDC identity */}
      <svg
        height={currentSize.height}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-12"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="tdcRedSphere" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FF4B4B" />
            <stop offset="45%" stopColor="#DC2626" />
            <stop offset="85%" stopColor="#991B1B" />
            <stop offset="100%" stopColor="#450A0A" />
          </radialGradient>
          <linearGradient id="tdcBladeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#B91C1C" />
            <stop offset="100%" stopColor="#7F1D1D" />
          </linearGradient>
          <linearGradient id="tdcSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <filter id="tdcDropShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.35" floodColor="#7F1D1D" />
          </filter>
        </defs>

        <g filter="url(#tdcDropShadow)">
          {/* Swirling blades ring */}
          <path
            d="M60 10C73 10 88 17 96 28C91 29 80 32 70 38C75 30 73 20 60 10Z"
            fill="url(#tdcSilverGrad)"
          />
          <path
            d="M96 28C108 42 110 59 104 74C97 68 87 64 76 63C84 54 89 42 96 28Z"
            fill="url(#tdcBladeGrad1)"
          />
          <path
            d="M104 74C97 90 84 104 68 109C69 101 68 89 61 79C73 83 87 83 104 74Z"
            fill="url(#tdcSilverGrad)"
          />
          <path
            d="M68 109C52 113 35 107 23 96C28 92 36 84 41 73C33 81 24 88 68 109Z"
            fill="url(#tdcBladeGrad1)"
          />
          <path
            d="M23 96C12 83 9 65 15 50C22 55 33 60 44 61C36 70 30 82 23 96Z"
            fill="url(#tdcBladeGrad1)"
          />
          <path
            d="M15 50C20 33 34 20 49 14C49 22 51 33 58 42C46 39 32 39 15 50Z"
            fill="url(#tdcSilverGrad)"
          />

          {/* Dynamic inner vortex curls */}
          <path
            d="M60 22 C78 22 92 34 94 52 C82 46 72 45 61 50 C67 38 65 28 60 22 Z"
            fill="url(#tdcBladeGrad1)"
          />
          <path
            d="M94 52 C96 71 85 87 69 94 C71 81 67 71 58 64 C72 68 83 65 94 52 Z"
            fill="url(#tdcBladeGrad1)"
          />
          <path
            d="M69 94 C51 98 34 89 26 74 C38 78 49 76 58 68 C50 80 43 89 69 94 Z"
            fill="url(#tdcBladeGrad1)"
          />
          <path
            d="M26 74 C21 57 29 39 44 30 C44 43 49 53 59 60 C44 55 33 59 26 74 Z"
            fill="url(#tdcSilverGrad)"
          />

          {/* Central High Performance Catalyst Orb */}
          <circle cx="60" cy="60" r="23" fill="url(#tdcRedSphere)" />
          {/* Gloss highlight on sphere */}
          <ellipse cx="53" cy="50" rx="9" ry="5" fill="#FFFFFF" opacity="0.65" transform="rotate(-25 53 50)" />
        </g>
      </svg>

      {/* TDC Lettermark & Brand name */}
      {variant !== 'mark' && (
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span
              className={`font-black tracking-tighter ${
                variant === 'white' ? 'text-white' : 'text-red-700'
              } ${currentSize.textScale} font-sans leading-none`}
              style={{
                letterSpacing: '-0.04em',
                textShadow: variant === 'white' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none',
              }}
            >
              TDC
            </span>
          </div>
          <span
            className={`font-bold tracking-wider uppercase ${
              variant === 'white' ? 'text-slate-300' : 'text-slate-900'
            } ${currentSize.subScale} leading-none mt-1`}
          >
            The Dr.3pleA Company
          </span>
        </div>
      )}
    </div>
  );
};
