'use client';

import { useRef, ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  id?: string;
  variant?: 'glass' | 'matte';
}

export default function SpotlightCard({ children, className = '', spotlightColor = 'emerald', id, variant = 'glass' }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  // Color mapping for spotlight
  const colorMap: Record<string, string> = {
    amber: 'rgba(0, 131, 130, 0.15)', // Remapped to Teal
    purple: 'rgba(168, 85, 247, 0.08)',
    emerald: 'rgba(0, 131, 130, 0.08)', // TIEV Teal equivalent
  };

  const borderColorMap: Record<string, string> = {
    amber: 'rgba(0, 131, 130, 0.3)', // Remapped to Teal
    purple: 'rgba(168, 85, 247, 0.3)',
    emerald: 'rgba(0, 131, 130, 0.3)', // TIEV Teal
  };

  const glowColor = colorMap[spotlightColor] || colorMap.emerald;
  const borderColor = borderColorMap[spotlightColor] || borderColorMap.emerald;

  const baseStyles = variant === 'matte'
    ? 'bg-zinc-900/40 border-white/5 backdrop-blur-md' // Nexus Cloud "Matte"
    : 'glass-panel'; // Standard "Glass"

  return (
    <div
      ref={cardRef}
      id={id}
      className={`spotlight-card group relative ${baseStyles} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 40%)`,
        }}
      />

      {/* Spotlight Border Effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          border: `1px solid ${borderColor}`,
          maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
          WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
        }}
      />

      {/* Hover Top Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />

      {children}
    </div>
  );
}
