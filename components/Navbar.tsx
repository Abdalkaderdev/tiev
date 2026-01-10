'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects', icon: Globe },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed left-1/2 -translate-x-1/2 flex shadow-black/50 transition-all duration-300 hover:border-brand-teal/20 hover:shadow-brand-teal/10 bg-[#0a0a0a]/80 w-fit max-w-[95vw] z-50 rounded-full border border-white/10 pt-2 pr-2 pb-2 pl-6 top-6 shadow-2xl backdrop-blur-md items-center justify-between">

        {/* Logo Area */}
        <Link href="/" className="flex gap-2.5 items-center mr-4 md:mr-8">
          <div className="relative flex items-center justify-center w-6 h-6">
            <Globe className="w-5 h-5 text-brand-teal" />
          </div>
          <span className="font-medium text-sm tracking-tight text-white">TIEV</span>
        </Link>

        {/* Network Status Dot (Vyral Style) */}
        <div className="hidden lg:flex items-center gap-2 mr-6 px-3 py-1 rounded-full bg-white/5 border border-white/5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-mono text-emerald-500/80 tracking-wider">NET.ACTIVE</span>
        </div>

        {/* Links (Hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-6 mr-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium transition-colors flex items-center gap-1 ${isActive(link.href)
                ? 'text-brand-teal'
                : 'text-white/50 hover:text-white'
                }`}
            >
              {link.icon && <link.icon className="w-3 h-3" />}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Button - Hidden on very small screens */}
        <Link
          href="/donate"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal text-white text-xs font-semibold hover:bg-brand-teal/80 transition-colors group"
        >
          Donate
          <Heart className="w-3 h-3 group-hover:scale-110 transition-transform" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors ml-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl z-50 p-6 transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive(link.href)
                ? 'bg-brand-teal/10 text-brand-teal'
                : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
            >
              {link.icon && <link.icon className="w-4 h-4" />}
              <span className="font-medium">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-brand-teal text-white font-semibold hover:bg-brand-teal/80 transition-colors"
          >
            Support Our Mission
            <Heart className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
