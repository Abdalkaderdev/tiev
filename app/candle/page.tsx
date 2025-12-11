'use client';

import { Flame, Sun, Share2, TrendingUp, Gift, Calendar, Check, Users, Church, Star, Zap, ArrowRight, Sparkles, Heart, BookOpen, Video, MessageSquare, Trophy, Target, UserPlus, ThumbsUp } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

export default function CandlePage() {
  return (
    <>
      {/* Hero Section - Completely Redesigned */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />

        {/* Animated Glow Backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amber-600/20 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/15 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="max-w-xl z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span className="text-xs uppercase tracking-widest font-medium text-amber-200/80">
                  Spiritual Rewards System
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 animate-fade-slide-in stagger-1">
                <span className="text-white">Light Your</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                  Faith Journey
                </span>
              </h1>

              <p className="text-xl text-neutral-300 mb-8 leading-relaxed animate-fade-slide-in stagger-2">
                Earn <span className="text-amber-400 font-medium">Candles</span> through spiritual engagement. Spend them on AI-powered tools. Watch your faith community grow.
              </p>

              {/* Stats Row */}
              <div className="flex items-center gap-6 mb-10 animate-fade-slide-in stagger-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">250</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Free Start</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">+250</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Monthly</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">∞</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">Earn More</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-slide-in stagger-4">
                <Link href="/get-started">
                  <ShinyButton>
                    <span className="flex items-center gap-2">
                      <Flame className="w-[18px] h-[18px] candle-glow" />
                      Get 250 Free Candles
                    </span>
                  </ShinyButton>
                </Link>
                <button className="px-6 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all flex items-center gap-2">
                  <span>See How It Works</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Candle Visual System */}
            <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center animate-fade-slide-in stagger-2">
              {/* Central Candle Orb */}
              <div className="relative z-20">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-4 rounded-full border border-amber-500/30 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  <div className="absolute inset-8 rounded-full border border-amber-500/40 animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }} />
                </div>

                {/* Main Candle Circle */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/30 flex items-center justify-center shadow-[0_0_100px_-20px_rgba(251,191,36,0.5)] animate-breathe">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-600/20 border border-amber-400/40 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/50 to-orange-500/30 border border-amber-300/50 flex items-center justify-center shadow-[inset_0_0_30px_rgba(251,191,36,0.3)]">
                      <Flame className="w-12 h-12 text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] animate-flicker" />
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 w-72 h-72 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                      <Sun className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-rose-400" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Inner Orbit */}
                <div className="absolute inset-0 w-56 h-56 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
                  <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-8 right-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-3 animate-float" style={{ animationDuration: '6s' }}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Welcome Bonus</div>
                  <div className="text-lg font-bold text-white">+250 <span className="text-amber-400 text-sm">Candles</span></div>
                </div>
              </div>

              <div className="absolute bottom-16 left-0 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-3 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Monthly Refresh</div>
                  <div className="text-lg font-bold text-white">+250 <span className="text-emerald-400 text-sm">Candles</span></div>
                </div>
              </div>

              <div className="absolute top-1/2 right-8 -translate-y-1/2 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-xl animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-purple-300 font-medium">ORA™ Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Candles Work - Interactive Visual */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/10 bg-amber-500/5 mb-6">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] uppercase tracking-widest font-medium text-amber-200/80">The Candle Economy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              How Candles Work
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A simple three-step cycle that rewards your spiritual growth and empowers your ministry
            </p>
          </div>

          {/* Three Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: '01',
                icon: Sun,
                title: 'Earn',
                subtitle: 'Through Engagement',
                description: 'Complete spiritual activities, engage with your community, and grow in faith to earn Candles.',
                color: 'amber',
                examples: ['Daily devotions', 'Prayer requests', 'Community posts'],
              },
              {
                step: '02',
                icon: Zap,
                title: 'Spend',
                subtitle: 'On AI Features',
                description: 'Use your Candles to access powerful AI tools that enhance your worship and ministry.',
                color: 'purple',
                examples: ['ORA™ insights', 'Video editing', 'Sermon prep'],
              },
              {
                step: '03',
                icon: Share2,
                title: 'Share',
                subtitle: 'With Others',
                description: 'Gift Candles to friends, family, or donate to churches and ministries in need.',
                color: 'emerald',
                examples: ['Gift to friends', 'Support churches', 'Fund missions'],
              },
            ].map((item, i) => {
              const colorClasses = {
                amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', hoverBorder: 'hover:border-amber-500/40', text: 'text-amber-400', spotlight: 'rgba(245, 158, 11, 0.15)' },
                purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', hoverBorder: 'hover:border-purple-500/40', text: 'text-purple-400', spotlight: 'rgba(168, 85, 247, 0.15)' },
                emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', hoverBorder: 'hover:border-emerald-500/40', text: 'text-emerald-400', spotlight: 'rgba(16, 185, 129, 0.15)' },
              };
              const colors = colorClasses[item.color as keyof typeof colorClasses];
              const staggerClass = `stagger-${i + 1}`;

              return (
                <SpotlightCard
                  key={i}
                  className={`p-8 rounded-3xl border ${colors.border} bg-white/[0.02] ${colors.hoverBorder} transition-all group animate-fade-slide-in ${staggerClass} relative overflow-hidden`}
                  spotlightColor={colors.spotlight}
                >
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/5">{item.step}</div>

                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-6 border ${colors.border} group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  <div className="mb-2">
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className={`text-sm ${colors.text}`}>{item.subtitle}</p>
                  </div>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">{item.description}</p>

                  <div className="space-y-2">
                    {item.examples.map((ex, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-neutral-500">
                        <Check className={`w-3.5 h-3.5 ${colors.text}`} />
                        {ex}
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Connection Line */}
          <div className="hidden md:flex items-center justify-center gap-4 -mt-8 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="w-3 h-3 rounded-full bg-amber-500/30 border border-amber-500/50" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            <div className="w-3 h-3 rounded-full bg-purple-500/30 border border-purple-500/50" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Live Candle Counter Demo */}
      <section className="py-24 relative border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Demo Interface */}
            <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-xs text-white/30 font-mono">candle-wallet.app</span>
              </div>

              <div className="p-8">
                {/* Balance Display */}
                <div className="text-center mb-8">
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Your Candle Balance</div>
                  <div className="flex items-center justify-center gap-3">
                    <Flame className="w-10 h-10 text-amber-400 animate-flicker" />
                    <span className="text-6xl font-bold text-white">1,247</span>
                  </div>
                  <div className="text-sm text-emerald-400 mt-2">+127 this week</div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Recent Activity</div>
                  {[
                    { action: 'Completed Daily Devotion', amount: '+25', icon: BookOpen, color: 'amber', time: '2h ago' },
                    { action: 'Posted Prayer Request', amount: '+10', icon: Heart, color: 'rose', time: '5h ago' },
                    { action: 'Used ORA™ for Bible Study', amount: '-15', icon: Sparkles, color: 'purple', time: '1d ago' },
                    { action: '7-Day Streak Bonus!', amount: '+50', icon: Trophy, color: 'emerald', time: '1d ago' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-${item.color}-500/10 flex items-center justify-center`}>
                          <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                        </div>
                        <div>
                          <div className="text-sm text-white">{item.action}</div>
                          <div className="text-[10px] text-neutral-500">{item.time}</div>
                        </div>
                      </div>
                      <span className={`text-sm font-semibold ${item.amount.startsWith('+') ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
                Watch Your Candles Grow
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Every spiritual activity earns you Candles. Track your balance, see your growth over time, and celebrate milestones in your faith journey.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: 'Real-time balance updates', desc: 'See your Candles change as you engage' },
                  { label: 'Activity history', desc: 'Track every earn and spend transaction' },
                  { label: 'Streak bonuses', desc: 'Earn bonus Candles for consistent engagement' },
                  { label: 'Monthly refresh', desc: 'Get 250 free Candles every month' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{item.label}</div>
                      <div className="text-sm text-neutral-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/get-started">
                <ShinyButton>
                  <span className="flex items-center gap-2">
                    Start Earning Today
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Earn Candles Section - Enhanced */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Ways to Earn Candles
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              Every meaningful interaction with your faith community earns you Candles
            </p>
          </div>

          {/* Community Engagement */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <MessageSquare className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Community Engagement</h3>
                <p className="text-xs text-neutral-500">Connect and interact with your faith family</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: UserPlus, title: 'Add A Contact', candles: 25, badge: 'Connector', color: 'blue' },
                { icon: Target, title: 'Attend An Event', candles: 25, badge: 'Active Member', color: 'blue' },
                { icon: MessageSquare, title: 'Post A Discussion', candles: 20, badge: 'Community Builder', color: 'blue' },
                { icon: ThumbsUp, title: 'Like/Amen/Share', candles: 5, badge: 'Encourager', color: 'blue' },
              ].map((item, i) => {
                const staggerClass = `stagger-${(i % 4) + 1}`;
                return (
                  <SpotlightCard key={i} className={`p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40 transition-all group animate-fade-slide-in ${staggerClass}`} spotlightColor="rgba(59, 130, 246, 0.15)">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">{item.badge}</span>
                    </div>
                    <h4 className="text-sm font-medium text-white mb-1">{item.title}</h4>
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 font-bold">{item.candles}</span>
                      <span className="text-neutral-500 text-xs">Candles</span>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>

          {/* Spiritual Habits */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                <Heart className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Spiritual Habits</h3>
                <p className="text-xs text-neutral-500">Deepen your faith through daily practices</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Trophy, title: 'Finish A Reading Plan', candles: 50, badge: 'Devoted Reader', color: 'rose' },
                { icon: Flame, title: '7-Day Streak', candles: 50, badge: 'Disciplined', color: 'rose' },
                { icon: BookOpen, title: 'Post S.O.A.P. Journal', candles: 25, badge: 'Reflective', color: 'rose' },
                { icon: Heart, title: 'Request A Prayer', candles: 10, badge: 'Prayer Warrior', color: 'rose' },
              ].map((item, i) => {
                const staggerClass = `stagger-${(i % 4) + 1}`;
                return (
                  <SpotlightCard key={i} className={`p-5 rounded-2xl border border-rose-500/20 bg-rose-500/5 hover:border-rose-500/40 transition-all group animate-fade-slide-in ${staggerClass}`} spotlightColor="rgba(244, 63, 94, 0.15)">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-rose-400" />
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">{item.badge}</span>
                    </div>
                    <h4 className="text-sm font-medium text-white mb-1">{item.title}</h4>
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 font-bold">{item.candles}</span>
                      <span className="text-neutral-500 text-xs">Candles</span>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>

          {/* Growth & Leadership */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <Star className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Growth & Leadership</h3>
                <p className="text-xs text-neutral-500">Big rewards for big commitments</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Users, title: 'Complete Profile', candles: 250, badge: 'Committed', highlight: true },
                { icon: Gift, title: 'Refer A Friend', candles: 250, badge: 'Evangelist', highlight: true },
                { icon: Church, title: 'Create A Church', candles: 100, badge: 'Church Builder', highlight: false },
                { icon: Users, title: 'Create A Ministry', candles: 50, badge: 'Founder', highlight: false },
              ].map((item, i) => {
                const staggerClass = `stagger-${(i % 4) + 1}`;
                return (
                  <SpotlightCard
                    key={i}
                    className={`p-5 rounded-2xl border ${item.highlight ? 'border-amber-500/30 bg-amber-500/10' : 'border-emerald-500/20 bg-emerald-500/5'} ${item.highlight ? 'hover:border-amber-500/50' : 'hover:border-emerald-500/40'} transition-all group animate-fade-slide-in ${staggerClass}`}
                    spotlightColor={item.highlight ? "rgba(245, 158, 11, 0.2)" : "rgba(16, 185, 129, 0.15)"}
                  >
                    {item.highlight && (
                      <div className="absolute top-2 right-2">
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-500/30 text-amber-200 font-bold uppercase">Bonus</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl ${item.highlight ? 'bg-amber-500/20' : 'bg-emerald-500/20'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-5 h-5 ${item.highlight ? 'text-amber-400' : 'text-emerald-400'}`} />
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.highlight ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'} border`}>{item.badge}</span>
                    </div>
                    <h4 className="text-sm font-medium text-white mb-1">{item.title}</h4>
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 font-bold text-lg">{item.candles}</span>
                      <span className="text-neutral-500 text-xs">Candles</span>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>

          <p className="text-center text-xs text-neutral-500 mt-8">
            *Candles are awarded upon completion. Maximum 5,000 Candles per person per month.
          </p>
        </div>
      </section>

      {/* Spend Your Candles */}
      <section className="py-24 relative border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Spend Your Candles
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              Unlock powerful AI features that enhance your worship, study, and ministry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: 'ORA™ Insights', desc: 'AI-powered Scripture analysis and spiritual guidance', cost: '5-15', color: 'purple' },
              { icon: Video, title: 'Pro Studio', desc: 'Professional video editing and content creation', cost: '10-50', color: 'amber' },
              { icon: BookOpen, title: 'Study Tools', desc: 'Advanced Bible study and sermon preparation', cost: '5-20', color: 'blue' },
              { icon: MessageSquare, title: 'Content AI', desc: 'Social media posts and ministry content', cost: '5-25', color: 'emerald' },
            ].map((item, i) => {
              const colorClasses = {
                purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', hoverBorder: 'hover:border-purple-500/40', text: 'text-purple-400' },
                amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', hoverBorder: 'hover:border-amber-500/40', text: 'text-amber-400' },
                blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', hoverBorder: 'hover:border-blue-500/40', text: 'text-blue-400' },
                emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', hoverBorder: 'hover:border-emerald-500/40', text: 'text-emerald-400' },
              };
              const colors = colorClasses[item.color as keyof typeof colorClasses];
              const staggerClass = `stagger-${(i % 4) + 1}`;

              return (
                <SpotlightCard key={i} className={`p-6 rounded-2xl border ${colors.border} bg-white/[0.02] ${colors.hoverBorder} transition-all group animate-fade-slide-in ${staggerClass}`}>
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 border ${colors.border} group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 font-semibold">{item.cost}</span>
                    <span className="text-neutral-500">Candles per use</span>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Share the Light */}
      <section className="py-24 relative border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Share the Light
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              Gift your Candles to bless others in their faith journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Gift to Friends', desc: 'Send Candles to friends and family who need AI features for their spiritual growth', color: 'blue' },
              { icon: Church, title: 'Support Churches', desc: 'Donate to churches and help them access powerful ministry tools', color: 'purple' },
              { icon: Heart, title: 'Fund Missions', desc: 'Empower missionaries and ministry teams with collaborative Candle pools', color: 'emerald' },
            ].map((item, i) => {
              const colorClasses = {
                blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', hoverBorder: 'hover:border-blue-500/40', text: 'text-blue-400', spotlight: 'rgba(59, 130, 246, 0.15)' },
                purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', hoverBorder: 'hover:border-purple-500/40', text: 'text-purple-400', spotlight: 'rgba(168, 85, 247, 0.15)' },
                emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', hoverBorder: 'hover:border-emerald-500/40', text: 'text-emerald-400', spotlight: 'rgba(16, 185, 129, 0.15)' },
              };
              const colors = colorClasses[item.color as keyof typeof colorClasses];
              const staggerClass = `stagger-${i + 1}`;

              return (
                <SpotlightCard key={i} className={`p-8 rounded-3xl border ${colors.border} bg-white/[0.02] ${colors.hoverBorder} transition-all group text-center animate-fade-slide-in ${staggerClass}`} spotlightColor={colors.spotlight}>
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${colors.bg} flex items-center justify-center mb-6 border ${colors.border} group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center relative overflow-hidden border-t border-white/5 bg-[#080808]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/10 flex items-center justify-center mb-8 border border-amber-500/30 animate-breathe shadow-[0_0_60px_-15px_rgba(251,191,36,0.5)]">
            <Flame className="w-12 h-12 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 text-white">
            Start Your Candle Journey
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of believers earning and using Candles to enhance their faith journey with AI-powered tools.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started">
              <ShinyButton>
                <span className="flex items-center gap-2">
                  <Flame className="w-[18px] h-[18px] candle-glow" />
                  Get 250 Free Candles
                </span>
              </ShinyButton>
            </Link>
            <Link href="/pricing" className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all">
              View Pricing Plans
            </Link>
          </div>

          <p className="text-xs text-neutral-500 mt-6">
            No credit card required • 250 Candles refresh monthly
          </p>
        </div>
      </section>
    </>
  );
}
