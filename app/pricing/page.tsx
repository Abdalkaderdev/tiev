'use client';

import { Check, Flame, Crown, Sparkles, Users, Building, Zap, TrendingUp, Gift } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400">
                  Pricing Plans
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2">
                Choose the perfect plan for your faith community
              </p>
            </div>

            {/* Right: Animated Pricing Visual */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              <div className="relative">
                {/* Central price circle */}
                <div className="relative">
                  {/* Rotating rings */}
                  <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
                    <div className="absolute inset-6 rounded-full border border-dashed border-amber-500/10" />
                    <div className="absolute inset-12 rounded-full border border-emerald-500/20 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                  </div>

                  {/* Main orb */}
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-emerald-500/20 via-amber-500/10 to-transparent border border-emerald-500/30 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(16,185,129,0.5)] animate-breathe">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">$0</div>
                      <div className="text-xs text-emerald-400">to start</div>
                    </div>
                  </div>

                  {/* Orbiting tier icons */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-float">
                      <Check className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                      <Flame className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                      <Sparkles className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -left-6 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                      <Building className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute -top-6 -right-6 w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center animate-pulse">
                    <Crown className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <Gift className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Plans */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-4">
              <Users className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Individual Plans</span>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">Individual Members</h2>
            <p className="text-neutral-400">Goal: Spiritual growth and belonging</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Disciple Plan */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] group animate-fade-slide-in stagger-1 hover:border-emerald-500/30 transition-all" spotlightColor="emerald">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Disciple Plan</h4>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[10px] text-emerald-400 font-medium">Free</span>
                </div>
              </div>
              <p className="text-neutral-500 text-xs italic mb-4">"Walk with Christ each day"</p>
              <div className="text-3xl font-bold text-white mb-2">Free</div>
              <p className="text-amber-400 text-sm mb-6 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                250 Candles/month
              </p>
              <ul className="space-y-2 text-sm text-neutral-400 mb-6">
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />S.O.A.P. Journal</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Prayer Wall</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Basic Spiritual Gifts Assessment</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Daily Bible Reading</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />28 Beginner Reading Plans</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Ad-free experience</li>
              </ul>
              <Link href="/get-started" className="block w-full text-center py-2.5 rounded-full border border-white/10 text-neutral-300 hover:bg-white/5 hover:border-emerald-500/30 transition-all text-sm">
                Get Started Free
              </Link>
            </SpotlightCard>

            {/* Servant Plan - Most Popular */}
            <SpotlightCard className="p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 relative group animate-fade-slide-in stagger-2 hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-xs font-semibold rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Servant Plan</h4>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <span className="text-[10px] text-amber-400 font-medium">Best Value</span>
                </div>
              </div>
              <p className="text-neutral-500 text-xs italic mb-4">"Serve faithfully and grow deeply"</p>
              <div className="text-3xl font-bold text-white mb-2">$10<span className="text-lg font-normal text-neutral-400">/mo</span></div>
              <p className="text-amber-400 text-sm mb-6 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                1,000 Candles/mo
              </p>
              <ul className="space-y-2 text-sm text-neutral-400 mb-6">
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Everything in Disciple</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Comprehensive Gifts Assessment (120 questions)</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Bible Study Tools</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />53 Reading Plans</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Group creation & management</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />ORA™ Engagement Analytics</li>
              </ul>
              <Link href="/get-started">
                <ShinyButton className="w-full justify-center text-sm">Begin Your Journey</ShinyButton>
              </Link>
            </SpotlightCard>

            {/* Torchbearer Plan */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] group animate-fade-slide-in stagger-3 hover:border-purple-500/30 transition-all" spotlightColor="purple">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Torchbearer Plan</h4>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <span className="text-[10px] text-purple-400 font-medium">Pro</span>
                </div>
              </div>
              <p className="text-neutral-500 text-xs italic mb-4">"Shine your light further."</p>
              <div className="text-3xl font-bold text-white mb-2">$20<span className="text-lg font-normal text-neutral-400">/mo</span></div>
              <p className="text-amber-400 text-sm mb-6 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                2,000 Candles/mo
              </p>
              <ul className="space-y-2 text-sm text-neutral-400 mb-6">
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Everything in Servant</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />All 69 Reading Plans</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Custom Reading Plan Generator</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />ORA™-Powered Audio Bible</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />ORA™ Video Generation</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Priority Support</li>
              </ul>
              <Link href="/get-started" className="block w-full text-center py-2.5 rounded-full border border-white/10 text-neutral-300 hover:bg-white/5 hover:border-purple-500/30 transition-all text-sm">
                Step Deeper
              </Link>
            </SpotlightCard>
          </div>

          <p className="text-center text-xs text-neutral-500 mt-8">
            * Annual bonuses are granted only when subscribing and paying for an annual plan.
          </p>
        </div>
      </section>

      {/* Candles Explainer */}
      <section className="py-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-panel-glow rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 animate-breathe">
              <Flame className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">What Are Candles?</h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Candles are your spiritual engagement rewards and ORA™ feature credits. Earn them through prayer, Bible study, and community participation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-amber-500/30 transition-all">
                <div className="w-10 h-10 mx-auto rounded-lg bg-amber-500/10 flex items-center justify-center mb-3 border border-amber-500/20 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
                  <Flame className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-sm font-medium text-white mb-1">Earn Candles</h4>
                <p className="text-xs text-neutral-500">Through prayer, Bible reading, engagement</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-purple-500/30 transition-all">
                <div className="w-10 h-10 mx-auto rounded-lg bg-purple-500/10 flex items-center justify-center mb-3 border border-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-sm font-medium text-white mb-1">Spend on ORA™</h4>
                <p className="text-xs text-neutral-500">Unlock sermon help, prayer assistance</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-emerald-500/30 transition-all">
                <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 border border-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all">
                  <Check className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-sm font-medium text-white mb-1">Grow Spiritually</h4>
                <p className="text-xs text-neutral-500">Deepen your faith with personalized tools</p>
              </div>
            </div>
            <Link href="/candle" className="text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors">
              Learn More About Candles →
            </Link>
          </div>
        </div>
      </section>

      {/* Church Plans */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-4">
              <Building className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Church Plans</span>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">Church Plans</h2>
            <p className="text-neutral-400">Goal: Engagement & Growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shepherd Plan */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] group animate-fade-slide-in stagger-1 hover:border-emerald-500/30 transition-all" spotlightColor="emerald">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🐑</div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[10px] text-emerald-400 font-medium">Starter</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Shepherd Plan</h3>
              <p className="text-sm text-neutral-500 italic mb-4">"Guide your flock with love"</p>
              <div className="text-3xl font-bold text-white mb-2">FREE</div>
              <p className="text-amber-400 text-sm mb-6 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                1,000 Candles/mo
              </p>
              <ul className="space-y-2 text-sm text-neutral-400 mb-6">
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Up to 100 Active Members</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />5 Active Roles</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />5 Ministries</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />25GB Storage</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Single Campus</li>
              </ul>
              <Link href="/get-started" className="block w-full text-center py-2.5 rounded-full border border-white/10 text-neutral-300 hover:bg-white/5 hover:border-emerald-500/30 transition-all text-sm">
                Get Started Free
              </Link>
            </SpotlightCard>

            {/* Beacon Plan - Recommended */}
            <SpotlightCard className="p-6 rounded-2xl border border-blue-500/30 bg-blue-500/5 relative group animate-fade-slide-in stagger-2 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Recommended
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🔦</div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="text-[10px] text-blue-400 font-medium">Growth</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Beacon Plan</h3>
              <p className="text-sm text-neutral-500 italic mb-4">"Shine brighter, reach farther"</p>
              <div className="text-3xl font-bold text-white mb-2">$100<span className="text-lg font-normal text-neutral-400">/mo</span></div>
              <p className="text-amber-400 text-sm mb-6 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                10,000 Candles/mo
              </p>
              <ul className="space-y-2 text-sm text-neutral-400 mb-6">
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Up to 250 Active Members</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />7 Active Roles</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />10 Ministries</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />50GB Storage</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Multi-Campus (up to 5)</li>
              </ul>
              <Link href="/get-started">
                <ShinyButton className="w-full justify-center text-sm">Expand Your Reach</ShinyButton>
              </Link>
            </SpotlightCard>

            {/* Kingdom Plan */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] group animate-fade-slide-in stagger-3 hover:border-amber-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">👑</div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <span className="text-[10px] text-amber-400 font-medium">Enterprise</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Kingdom Plan</h3>
              <p className="text-sm text-neutral-500 italic mb-4">"Lead with vision, empower the body"</p>
              <div className="text-3xl font-bold text-white mb-2">$200<span className="text-lg font-normal text-neutral-400">/mo</span></div>
              <p className="text-amber-400 text-sm mb-6 flex items-center gap-2">
                <Flame className="w-4 h-4" />
                20,000 Candles/mo
              </p>
              <ul className="space-y-2 text-sm text-neutral-400 mb-6">
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Up to 500 Active Members</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />10 Active Roles</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />20 Ministries</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />100GB Storage</li>
                <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Multi-Campus (up to 10)</li>
              </ul>
              <Link href="/get-started" className="block w-full text-center py-2.5 rounded-full border border-white/10 text-neutral-300 hover:bg-white/5 hover:border-amber-500/30 transition-all text-sm">
                Transform Your Calling
              </Link>
            </SpotlightCard>
          </div>

          <p className="text-center text-xs text-neutral-500 mt-8">
            * Annual bonuses are granted only when subscribing and paying for an annual plan.
          </p>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6">
          <SpotlightCard className="rounded-3xl p-8 md:p-12 text-center border border-white/10 bg-white/[0.02] group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all">
              <Crown className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Large Church or Multi-Campus Ministry?
            </h2>
            <p className="text-neutral-400 mb-8">
              Need custom features, enhanced analytics, or comprehensive staff and member management tools?
            </p>
            <Link href="/contact">
              <ShinyButton>Contact Enterprise Sales</ShinyButton>
            </Link>
          </SpotlightCard>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 animate-breathe">
            <Flame className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Ready to Transform Your Community?
          </h2>
          <p className="text-neutral-400 mb-10">
            Join thousands of faith communities worldwide
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link href="/get-started">
              <ShinyButton>Start Free Today</ShinyButton>
            </Link>
            <Link href="/contact" className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all">
              Schedule Demo
            </Link>
          </div>
          <p className="text-xs text-neutral-500">No credit card required • Free to get started</p>
        </div>
      </section>
    </>
  );
}
