'use client';

import { ReactNode } from 'react';

interface ShinyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function ShinyButton({ children, onClick, className = '' }: ShinyButtonProps) {
  return (
    <button className={`shiny-cta group ${className}`} onClick={onClick}>
      {/* Rotating Border Beam */}
      <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#f59e0b_360deg)] animate-border-spin" />
        <div className="absolute inset-[1px] rounded-full bg-[#050402]" />
      </div>

      {/* Inner Background & Effects */}
      <div className="absolute inset-[2px] -z-10 overflow-hidden bg-[#0a0a08] rounded-full">
        {/* Light Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-transparent" />

        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay animate-dots-move"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '12px 12px'
          }}
        />

        {/* Amber Glow on Hover */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-amber-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-amber-500/30" />
      </div>

      {/* Content */}
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">{children}</span>
    </button>
  );
}
