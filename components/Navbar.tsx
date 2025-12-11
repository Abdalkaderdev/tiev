'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, ArrowRight, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/candle', label: 'Candles', icon: Flame },
    { href: '/ora', label: 'ORA™', icon: Sparkles, purple: true },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed left-1/2 -translate-x-1/2 flex shadow-black/50 transition-all duration-300 hover:border-white/20 hover:shadow-amber-500/5 bg-gradient-to-br from-white/10 to-white/0 w-fit max-w-[90vw] z-50 rounded-full ring-white/10 ring-1 pt-1.5 pr-1.5 pb-1.5 pl-4 top-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl items-center justify-between">

        {/* Logo Area */}
        <Link href="/" className="flex gap-2.5 items-center mr-4 md:mr-8">
          <div className="relative flex items-center justify-center w-6 h-6">
            <Flame className="w-5 h-5 text-amber-500" />
          </div>
          <span className="font-medium text-sm tracking-tight text-white">SoapBox</span>
        </Link>

        {/* Links (Hidden on small screens) */}
        <div className="hidden lg:flex items-center gap-6 mr-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium transition-colors flex items-center gap-1 ${
                isActive(link.href)
                  ? (link.purple ? 'text-purple-400' : 'text-amber-400')
                  : (link.purple ? 'text-white/50 hover:text-purple-300' : 'text-white/50 hover:text-white')
              }`}
            >
              {link.icon && <link.icon className="w-3 h-3" />}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Button - Hidden on very small screens */}
        <Link
          href="/get-started"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-amber-400 transition-colors group"
        >
          Get Started
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl z-50 p-6 transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                isActive(link.href)
                  ? (link.purple ? 'bg-purple-500/10 text-purple-400' : 'bg-amber-500/10 text-amber-400')
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
            href="/get-started"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
