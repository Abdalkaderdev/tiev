'use client';

import Link from 'next/link';
import { Shield, Lock, Eye, FileText, UserCheck, Globe } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-emerald-200/80">
                  Your Data is Sacred
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                Privacy Policy
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2">
                We treat your church's data with the sacred care it deserves—secure, private, and always under your control.
              </p>
              <p className="text-sm text-neutral-500 mt-4 animate-fade-slide-in stagger-3">
                Last updated: November 2025
              </p>
            </div>

            {/* Right: Animated Shield Visual */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              <div className="relative">
                {/* Rotating rings */}
                <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
                  <div className="absolute inset-8 rounded-full border border-dashed border-emerald-500/10" />
                  <div className="absolute inset-16 rounded-full border border-emerald-500/20 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                </div>

                {/* Main shield */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(16,185,129,0.5)] animate-breathe">
                  <Shield className="w-16 h-16 text-emerald-400" />
                </div>

                {/* Orbiting icons */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-float">
                    <Lock className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <Eye className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <UserCheck className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                    <FileText className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(16, 185, 129, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Shield className="w-4 h-4 text-emerald-400" />
                </div>
                Our Commitment
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Your privacy is important to us. It is SoapBox Super App's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(59, 130, 246, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Eye className="w-4 h-4 text-blue-400" />
                </div>
                Information Collection
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(168, 85, 247, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Lock className="w-4 h-4 text-purple-400" />
                </div>
                Data Protection
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(245, 158, 11, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <UserCheck className="w-4 h-4 text-amber-400" />
                </div>
                Data Sharing
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                We don't share any personally identifying information publicly or with third-parties, except when required to by law.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(16, 185, 129, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Globe className="w-4 h-4 text-emerald-400" />
                </div>
                External Links
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(59, 130, 246, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <FileText className="w-4 h-4 text-blue-400" />
                </div>
                Your Rights
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">contact us</Link>.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </>
  );
}
