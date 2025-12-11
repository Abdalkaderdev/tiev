'use client';

import { Flame, Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import ShinyButton from '@/components/ShinyButton';

export default function SignInPage() {
  return (
    <section className="relative min-h-screen pt-36 pb-24 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-md mx-auto px-6 w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 animate-fade-slide-in animate-breathe">
            <Flame className="w-8 h-8 text-amber-500 candle-glow" />
          </div>
          <h1 className="text-3xl font-semibold text-white mb-2 animate-fade-slide-in stagger-1">Welcome Back</h1>
          <p className="text-neutral-400 animate-fade-slide-in stagger-2">Sign in to continue your faith journey</p>
        </div>

        <div className="glass-panel rounded-3xl p-8 animate-fade-slide-in stagger-3">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="password"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-neutral-400">
                <input type="checkbox" className="rounded border-white/20 bg-white/5" />
                Remember me
              </label>
              <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                Forgot password?
              </a>
            </div>
            <ShinyButton className="w-full justify-center">Sign In</ShinyButton>
          </form>

          <div className="mt-6 text-center">
            <p className="text-neutral-500 text-sm">
              Don't have an account?{' '}
              <Link href="/get-started" className="text-amber-400 hover:text-amber-300 transition-colors">
                Get Started Free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
