'use client';

import { Heart, Users, Calendar, BookOpen, HandHelping, Share2, Shield, Zap, Church, Eye, Brain, Sparkles, Flame, TrendingUp } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

const oraFeatures = [
  {
    icon: Eye,
    title: 'Observe',
    description: 'ORA™ helps you notice key themes, patterns, and insights in Scripture, prayers, and spiritual practices.',
  },
  {
    icon: Brain,
    title: 'Reflect',
    description: 'Get personalized questions and prompts that deepen your understanding and connect Scripture to your daily life.',
  },
  {
    icon: Sparkles,
    title: 'Act',
    description: 'Receive practical suggestions for applying biblical wisdom to real-world situations and spiritual growth.',
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400">
                  Platform Features
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                A Digital Ministry Hub
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2">
                Comprehensive tools designed specifically for faith communities to grow, connect, and thrive together.
              </p>
            </div>

            {/* Right: Animated Feature Grid */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              {/* Central Hub */}
              <div className="relative">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 w-72 h-72 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  <div className="absolute inset-8 rounded-full border border-amber-500/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
                </div>

                {/* Central circle */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-transparent border border-purple-500/30 flex items-center justify-center shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)] animate-breathe">
                  <Church className="w-12 h-12 text-purple-400" />
                </div>

                {/* Orbiting feature icons */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
                    <Heart className="w-6 h-6 text-rose-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -right-8 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <BookOpen className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -left-8 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                    <Calendar className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute -top-8 -right-8">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
                <div className="absolute -bottom-8 -left-8">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <Share2 className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Prayer Wall */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-rose-500/30 transition-all group animate-fade-slide-in stagger-1">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 group-hover:border-rose-500/40 group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)] transition-all">
                  <Heart className="w-6 h-6 text-rose-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-emerald-400 font-medium">Live</span>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Prayer Wall for Church Communities</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">Create a sacred space where members can share prayer requests and receive community support 24/7.</p>
              <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5">24/7</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Real-time</span>
              </div>
            </SpotlightCard>

            {/* Digital Community Hub */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all group animate-fade-slide-in stagger-2">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all">
                  <Users className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="text-[10px] text-blue-400 font-medium">+40%</span>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Digital Community Hub for Churches</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">Build deeper relationships with automated small group formation and engagement tracking that grows participation by 40%.</p>
              <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5">Groups</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Analytics</span>
              </div>
            </SpotlightCard>

            {/* Event Management */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all group animate-fade-slide-in stagger-3">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
                  <Calendar className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <span className="text-[10px] text-purple-400 font-medium">5+ hrs saved</span>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Church Event Management System</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">Easily schedule services and automate reminders across all ministries, saving 5+ hours weekly on coordination.</p>
              <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5">Scheduling</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Reminders</span>
              </div>
            </SpotlightCard>

            {/* Bible Study Tools */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all group animate-fade-slide-in stagger-4">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
                  <BookOpen className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span className="text-[10px] text-amber-400 font-medium">ORA™</span>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Bible Study Tools for Modern Ministries</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">ORA™-powered study guides and S.O.A.P. journaling that help members engage with Scripture 3x more consistently.</p>
              <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5">S.O.A.P.</span>
                <span className="px-2 py-0.5 rounded bg-white/5">AI-Powered</span>
              </div>
            </SpotlightCard>

            {/* Volunteer Management */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 transition-all group animate-fade-slide-in stagger-5">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all">
                  <HandHelping className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[10px] text-emerald-400 font-medium">+60%</span>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Church Volunteer Management Hub</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">Match members with their calling through smart volunteer matching, increasing ministry participation by 60%.</p>
              <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5">Matching</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Scheduling</span>
              </div>
            </SpotlightCard>

            {/* Digital Outreach */}
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/30 transition-all group animate-fade-slide-in stagger-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
                  <Share2 className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  <span className="text-[10px] text-cyan-400 font-medium">11+ platforms</span>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">Digital Ministry Outreach Platform</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">Amplify your message with one-click publishing to 11+ platforms and personalized outreach that doubles engagement.</p>
              <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                <span className="px-2 py-0.5 rounded bg-white/5">Multi-platform</span>
                <span className="px-2 py-0.5 rounded bg-white/5">2x Reach</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Why Faith Communities Choose Us
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              Built specifically for spiritual communities with the features that matter most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Secure & Private */}
            <SpotlightCard className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center group animate-fade-slide-in stagger-1" spotlightColor="emerald">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)] transition-all">
                <Shield className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Secure & Private</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">We treat your church's data with the sacred care it deserves—secure, private, and always under your control.</p>
            </SpotlightCard>

            {/* Easy to Use */}
            <SpotlightCard className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center group animate-fade-slide-in stagger-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all">
                <Zap className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Easy to Use</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Intuitive design that works for all ages and technical abilities. Get started in minutes, not hours.</p>
            </SpotlightCard>

            {/* Built for Faith */}
            <SpotlightCard className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center group animate-fade-slide-in stagger-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:border-amber-500/40 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all">
                <Church className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Built for Faith</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Every feature is designed with spiritual communities in mind, supporting your unique needs and values.</p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ORA Section */}
      <section className="py-24 border-t border-white/5 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-[100%] blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-[0.2em]">AI-Powered</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Meet ORA™ — Your AI Spiritual Guide
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
              Experience personalized spiritual insights powered by artificial intelligence. ORA™ helps you Observe, Reflect, and Act on your faith journey.
            </p>
            <Link href="/ora" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
              Explore ORA™ in depth
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* ORA Interactive Demo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Left: O-R-A Cards */}
            <div className="space-y-4">
              {oraFeatures.map((item, i) => (
                <SpotlightCard
                  key={i}
                  className={`p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-all group animate-fade-slide-in stagger-${i + 1}`}
                  spotlightColor="rgba(168, 85, 247, 0.15)"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all shrink-0">
                      <item.icon className="w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {i === 0 ? 'Step 1' : i === 1 ? 'Step 2' : 'Step 3'}
                        </span>
                      </div>
                      <p className="text-purple-200/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Right: Live Chat Demo */}
            <div className="rounded-2xl border border-purple-500/20 bg-[#0a0a0a] overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-purple-500/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white">ORA™</span>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-[10px] text-emerald-400">Online</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-white/30">Demo</span>
              </div>

              <div className="p-4 space-y-4 h-[320px] overflow-y-auto">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-amber-500/20 border border-amber-500/30 rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
                    <p className="text-sm text-white">Help me understand John 3:16</p>
                  </div>
                </div>

                {/* ORA response */}
                <div className="flex justify-start">
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-bl-md px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-white/90 mb-3">
                      <span className="text-purple-400 font-medium">Observe:</span> John 3:16 reveals God's immense love - He gave His only Son for humanity's salvation.
                    </p>
                    <p className="text-sm text-white/90 mb-3">
                      <span className="text-purple-400 font-medium">Reflect:</span> What does "eternal life" mean to you personally? How does knowing God's sacrifice impact your daily choices?
                    </p>
                    <p className="text-sm text-white/90">
                      <span className="text-purple-400 font-medium">Act:</span> Share this verse with someone today, or journal about how God's love has transformed your life.
                    </p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 border-t border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Ask ORA™ anything..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50"
                    disabled
                  />
                  <button className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ORA Powers Dashboard */}
          <div className="rounded-3xl border border-white/10 bg-[#0a0a08] overflow-hidden">
            <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">ORA™ Powers Your Spiritual Journey</h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">All Systems Active</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {[
                { icon: BookOpen, name: 'S.O.A.P. Journal', desc: 'AI-powered reflections', color: 'purple', stat: '3x deeper' },
                { icon: BookOpen, name: 'Bible Reading', desc: 'Verse commentary', color: 'blue', stat: '100+ versions' },
                { icon: Heart, name: 'Prayer Wall', desc: 'Prayer guidance', color: 'rose', stat: '24/7 support' },
                { icon: Flame, name: 'Pro Studio', desc: 'Video editing AI', color: 'amber', stat: '10x faster' },
              ].map((item, i) => (
                <div key={i} className="px-6 py-6 hover:bg-white/[0.02] transition-colors group text-center">
                  <div className={`w-12 h-12 mx-auto rounded-xl mb-3 flex items-center justify-center border
                    ${item.color === 'purple' ? 'bg-purple-500/10 border-purple-500/20' : ''}
                    ${item.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20' : ''}
                    ${item.color === 'rose' ? 'bg-rose-500/10 border-rose-500/20' : ''}
                    ${item.color === 'amber' ? 'bg-amber-500/10 border-amber-500/20' : ''}
                  `}>
                    <item.icon className={`w-6 h-6
                      ${item.color === 'purple' ? 'text-purple-400' : ''}
                      ${item.color === 'blue' ? 'text-blue-400' : ''}
                      ${item.color === 'rose' ? 'text-rose-400' : ''}
                      ${item.color === 'amber' ? 'text-amber-400' : ''}
                    `} />
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">{item.name}</h4>
                  <p className="text-white/40 text-xs mb-2">{item.desc}</p>
                  <span className={`text-[10px] font-semibold
                    ${item.color === 'purple' ? 'text-purple-400' : ''}
                    ${item.color === 'blue' ? 'text-blue-400' : ''}
                    ${item.color === 'rose' ? 'text-rose-400' : ''}
                    ${item.color === 'amber' ? 'text-amber-400' : ''}
                  `}>{item.stat}</span>
                </div>
              ))}
            </div>

            <div className="px-8 py-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
              <p className="text-xs text-white/30">
                Available with <span className="text-amber-400">Servant</span> and <span className="text-amber-400">Torchbearer</span> tiers
              </p>
              <Link href="/ora" className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                Learn more about ORA™
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 animate-breathe">
            <Flame className="w-8 h-8 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Ready to Strengthen Your Community?
          </h2>
          <p className="text-neutral-400 mb-10">
            Join thousands of churches growing together online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started">
              <ShinyButton>Get Started Free</ShinyButton>
            </Link>
            <Link href="/pricing" className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
