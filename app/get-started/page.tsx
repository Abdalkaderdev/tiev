'use client';

import { Flame, Mail, Lock, User, Check, UserPlus, Users, Share2, Heart, Clock, ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import Link from 'next/link';
import ShinyButton from '@/components/ShinyButton';
import SpotlightCard from '@/components/SpotlightCard';

const steps = [
  {
    number: '1',
    title: 'Create Your Free Account',
    description: 'Sign up at soapboxsuperapp.com with your email or social login. No credit card required to start.',
    icon: UserPlus,
    time: '30 sec',
    color: 'amber',
    status: 'Start Here',
  },
  {
    number: '2',
    title: 'Add or Join Your Community',
    description: 'Create a new community for your church, ministry, or group, or search and join an existing community using an invite code.',
    icon: Users,
    time: '1 min',
    color: 'blue',
    status: 'Connect',
  },
  {
    number: '3',
    title: 'Invite Members to Connect',
    description: 'Share your community invite link via email, SMS, or social media. Members can join instantly with one click.',
    icon: Share2,
    time: '30 sec',
    color: 'purple',
    status: 'Share',
  },
  {
    number: '4',
    title: 'Start Engaging and Growing Together',
    description: 'Post updates, share prayer requests, join events, participate in Bible studies, and build meaningful connections with your faith community.',
    icon: Heart,
    time: 'Ongoing',
    color: 'emerald',
    status: 'Grow',
  },
];

export default function GetStartedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/10 bg-amber-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-amber-200/80">
                  Free to Start
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                Unite Your Faith
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl mb-10 animate-fade-slide-in stagger-2">
                SoapBox Super App brings your congregation together with powerful tools for prayer, Bible study, events, and meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-slide-in stagger-3">
                <ShinyButton>
                  <span className="flex items-center gap-2">
                    <Flame className="w-[18px] h-[18px] candle-glow" />
                    Get Started Free
                  </span>
                </ShinyButton>
                <button className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all">
                  Schedule Demo
                </button>
              </div>
              <p className="text-sm text-neutral-500 mt-6 animate-fade-slide-in stagger-4">
                Join thousands of faith communities worldwide
              </p>
            </div>

            {/* Right: Animated Launch Visual */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              <div className="relative">
                {/* Rocket/Launch Visual */}
                <div className="relative">
                  {/* Trail particles */}
                  <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-amber-500/50 to-transparent animate-pulse" />
                    <div className="absolute bottom-4 left-[40%] w-1 h-12 bg-gradient-to-t from-orange-500/30 to-transparent animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="absolute bottom-4 left-[60%] w-1 h-12 bg-gradient-to-t from-orange-500/30 to-transparent animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>

                  {/* Main rocket circle */}
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/30 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(245,158,11,0.5)] animate-float">
                    <div className="relative">
                      <Zap className="w-16 h-16 text-amber-400" />
                      <div className="absolute -top-1 -right-1">
                        <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Orbiting benefits - spread out more */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 animate-float">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-emerald-400">Free Forever</span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-24">
                    <div className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 animate-float" style={{ animationDelay: '0.5s' }}>
                      <Flame className="w-4 h-4 text-amber-400" />
                      <span className="text-xs text-amber-400">250 Candles</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 -right-20">
                    <div className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-purple-400">ORA™ Access</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 -left-20">
                    <div className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-blue-400">Community</span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -left-24">
                    <div className="px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                      <Heart className="w-4 h-4 text-rose-400" />
                      <span className="text-xs text-rose-400">Prayer Wall</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="absolute -top-16 -right-8 w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                  <div className="absolute -top-8 -left-16 w-1.5 h-1.5 rounded-full bg-amber-400/60 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute -bottom-8 -right-12 w-1.5 h-1.5 rounded-full bg-purple-400/60 animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>

                {/* Setup time badge */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-neutral-300">Setup in <span className="text-amber-400 font-semibold">2 minutes</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-600/5 rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/10 bg-amber-500/5 mb-6 backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] uppercase tracking-widest font-medium text-amber-200/80">
                Setup in under 2 minutes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Getting Started Guide
            </h2>
            <p className="text-neutral-400">
              Join your faith community in just four simple steps
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Vertical line for mobile, horizontal for desktop */}
            <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500/50 via-blue-500/50 via-purple-500/50 to-emerald-500/50" />
            <div className="lg:hidden absolute top-0 bottom-0 left-8 w-[2px] bg-gradient-to-b from-amber-500/50 via-blue-500/50 via-purple-500/50 to-emerald-500/50" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
              {steps.map((step, i) => {
                const colorConfig: Record<string, { gradient: string; border: string; text: string; bg: string; shadow: string }> = {
                  amber: { gradient: 'from-amber-500 to-orange-500', border: 'border-amber-500/30', text: 'text-amber-400', bg: 'bg-amber-500/10', shadow: 'shadow-amber-500/20' },
                  blue: { gradient: 'from-blue-500 to-cyan-500', border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/10', shadow: 'shadow-blue-500/20' },
                  purple: { gradient: 'from-purple-500 to-pink-500', border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/10', shadow: 'shadow-purple-500/20' },
                  emerald: { gradient: 'from-emerald-500 to-teal-500', border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/10', shadow: 'shadow-emerald-500/20' },
                };
                const colors = colorConfig[step.color];

                return (
                  <div key={i} className={`relative animate-fade-slide-in stagger-${i + 1}`}>
                    {/* Step Number Circle - positioned on the line */}
                    <div className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0">
                      {/* Number badge on timeline */}
                      <div className="relative z-10 lg:mb-8">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg ${colors.shadow} group-hover:scale-110 transition-transform`}>
                          <span className="text-2xl font-bold text-white">{step.number}</span>
                        </div>
                        {/* Connector dot */}
                        <div className={`hidden lg:block absolute -bottom-[26px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br ${colors.gradient}`} />
                      </div>

                      {/* Content Card */}
                      <div className={`flex-1 lg:flex-none p-6 rounded-2xl border ${colors.border} bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all group`}>
                        {/* Icon + Time */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border} group-hover:scale-110 transition-transform`}>
                            <step.icon className={`w-5 h-5 ${colors.text}`} />
                          </div>
                          <span className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                            <Clock className="w-3.5 h-3.5" />
                            {step.time}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>

                        {/* Hover arrow */}
                        <div className={`flex items-center gap-1 text-xs ${colors.text} mt-4 opacity-0 group-hover:opacity-100 transition-opacity`}>
                          <span>Get started</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Arrow connector for desktop */}
                    {i < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-[30px] -right-3 z-20">
                        <ArrowRight className="w-6 h-6 text-white/20" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col items-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-emerald-500/10 border border-white/10 mb-6">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <Check className="w-3 h-3 text-amber-400" />
                </div>
                <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-400" />
                </div>
                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  <Check className="w-3 h-3 text-purple-400" />
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
              <span className="text-sm text-neutral-300">Complete all steps in</span>
              <span className="text-sm font-semibold text-amber-400">under 2 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-lg mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-white mb-2">Create Your Account</h2>
            <p className="text-neutral-400 text-sm">Start your faith journey today</p>
          </div>

          <div className="glass-panel rounded-3xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">First Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                    <input
                      type="text"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
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
              <div className="space-y-3 text-sm">
                <label className="flex items-start gap-3 text-neutral-400">
                  <input type="checkbox" className="rounded border-white/20 bg-white/5 mt-0.5" />
                  <span>I agree to the <a href="#" className="text-amber-400">Terms of Service</a> and <a href="#" className="text-amber-400">Privacy Policy</a></span>
                </label>
              </div>
              <ShinyButton className="w-full justify-center">
                <span className="flex items-center gap-2">
                  Create Account & Get 250 Free Candles
                </span>
              </ShinyButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-neutral-500 text-sm">
                Already have an account?{' '}
                <Link href="/signin" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-neutral-500">
              Setup takes less than 2 minutes • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Quick Setup Guides */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Quick Setup Guides</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SpotlightCard className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all group animate-fade-slide-in stagger-1" spotlightColor="rgba(245, 158, 11, 0.15)">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">For Church Leaders</h3>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                  </span>
                  Quick Setup
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  'Set up your church profile',
                  'Configure ministries & groups',
                  'Schedule events & services',
                  'Enable prayer wall & discussions',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-400 text-sm">
                    <Check className="w-4 h-4 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>

            <SpotlightCard className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all group animate-fade-slide-in stagger-2" spotlightColor="rgba(168, 85, 247, 0.15)">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">For Members</h3>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
                  </span>
                  Get Started
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  'Complete your profile',
                  'Join groups & ministries',
                  'Follow other members',
                  'Start your daily devotion',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-400 text-sm">
                    <Check className="w-4 h-4 text-purple-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-amber-400 font-medium">
              Start Your Journey Today
            </p>
            <p className="text-xs text-neutral-500 mt-1">
              Setup takes less than 2 minutes • No credit card required
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
