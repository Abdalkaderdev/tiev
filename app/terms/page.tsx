'use client';

import { FileText, Scale, AlertTriangle, Link as LinkIcon, RefreshCw, Gavel, CheckCircle, XCircle } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-blue-200/80">
                  Legal Agreement
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                Terms of Service
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2">
                Please read these terms carefully before using SoapBox Super App services.
              </p>
              <p className="text-sm text-neutral-500 mt-4 animate-fade-slide-in stagger-3">
                Last updated: November 2025
              </p>
            </div>

            {/* Right: Animated Document Visual */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              <div className="relative">
                {/* Rotating rings */}
                <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
                  <div className="absolute inset-8 rounded-full border border-dashed border-blue-500/10" />
                  <div className="absolute inset-16 rounded-full border border-blue-500/20 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                </div>

                {/* Main document icon */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent border border-blue-500/30 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(59,130,246,0.5)] animate-breathe">
                  <Scale className="w-16 h-16 text-blue-400" />
                </div>

                {/* Orbiting icons */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-float">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <Gavel className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                    <LinkIcon className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(59, 130, 246, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-400 font-bold text-sm">1</span>
                </div>
                Terms
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                By accessing the website at soapboxsuperapp.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(16, 185, 129, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold text-sm">2</span>
                </div>
                Use License
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on SoapBox Super App's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <span>Use the materials for any commercial purpose, or for any public display</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <span>Attempt to decompile or reverse engineer any software</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <span>Remove any copyright or other proprietary notations</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                </li>
              </ul>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(245, 158, 11, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <span className="text-amber-400 font-bold text-sm">3</span>
                </div>
                Disclaimer
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                The materials on SoapBox Super App's website are provided on an 'as is' basis. SoapBox Super App makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Further, SoapBox Super App does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(239, 68, 68, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                  <span className="text-rose-400 font-bold text-sm">4</span>
                </div>
                Limitations
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                In no event shall SoapBox Super App or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SoapBox Super App's website, even if SoapBox Super App or a SoapBox Super App authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(168, 85, 247, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <span className="text-purple-400 font-bold text-sm">5</span>
                </div>
                Accuracy of Materials
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                The materials appearing on SoapBox Super App's website could include technical, typographical, or photographic errors. SoapBox Super App does not warrant that any of the materials on its website are accurate, complete or current. SoapBox Super App may make changes to the materials contained on its website at any time without notice.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(59, 130, 246, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <span className="text-blue-400 font-bold text-sm">6</span>
                </div>
                Links
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                SoapBox Super App has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SoapBox Super App of the site. Use of any such linked website is at the user's own risk.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(16, 185, 129, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold text-sm">7</span>
                </div>
                Modifications
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                SoapBox Super App may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(245, 158, 11, 0.1)">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <span className="text-amber-400 font-bold text-sm">8</span>
                </div>
                Governing Law
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </>
  );
}
