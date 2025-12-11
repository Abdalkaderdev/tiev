'use client';

import { Church, BookOpen, Heart, Users, Calendar, Shield } from 'lucide-react';

const partners = [
  { name: 'Grace Community', icon: Church },
  { name: 'Living Faith', icon: Heart },
  { name: 'New Hope Church', icon: BookOpen },
  { name: 'Unity Fellowship', icon: Users },
  { name: 'Harvest Chapel', icon: Calendar },
  { name: 'Cornerstone', icon: Shield },
  { name: 'Lighthouse', icon: Church },
  { name: 'Redeemer', icon: Heart },
];

export default function LogoMarquee() {
  return (
    <div className="w-full py-12 overflow-hidden">
      <p className="text-xs text-center text-white/40 font-mono uppercase tracking-[0.2em] mb-8">
        Trusted by faith communities worldwide
      </p>

      <div className="relative w-full group">
        {/* Gradient masks for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050402] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050402] to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* First set */}
          {partners.map((partner, i) => (
            <div
              key={`first-${i}`}
              className="flex items-center gap-2 mx-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
            >
              <partner.icon className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm whitespace-nowrap">{partner.name}</span>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {partners.map((partner, i) => (
            <div
              key={`second-${i}`}
              className="flex items-center gap-2 mx-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
            >
              <partner.icon className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm whitespace-nowrap">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
