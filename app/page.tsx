'use client';

import { Flame, Check, Shield, Clock, Heart, Sparkles, Eye, MessageSquare, Lightbulb, BookOpen, Mic, Video, Users, Calendar, HandHeart, Share2, Megaphone, ChevronRight, Activity, Zap, Globe, TrendingUp, CircleCheck, Radio, ArrowRight } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import LogoMarquee from '@/components/LogoMarquee';
import Link from 'next/link';

const digitalMinistryFeatures = [
  {
    icon: Heart,
    title: 'Prayer Wall for Church Communities',
    description: 'Create a sacred space where members can share prayer requests and receive community support 24/7.',
  },
  {
    icon: Users,
    title: 'Digital Community Hub for Churches',
    description: 'Build deeper relationships with automated small group formation and engagement tracking that grows participation by 40%.',
  },
  {
    icon: Calendar,
    title: 'Church Event Management System',
    description: 'Easily schedule services and automate reminders across all ministries, saving 5+ hours weekly on coordination.',
  },
  {
    icon: BookOpen,
    title: 'Bible Study Tools for Modern Ministries',
    description: 'ORA™-powered study guides and S.O.A.P. journaling that help members engage with Scripture 3x more consistently.',
  },
  {
    icon: HandHeart,
    title: 'Church Volunteer Management Hub',
    description: 'Match members with their calling through smart volunteer matching, increasing ministry participation by 60%.',
  },
  {
    icon: Megaphone,
    title: 'Digital Ministry Outreach Platform',
    description: 'Amplify your message with one-click publishing to 11+ platforms and personalized outreach that doubles engagement.',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Secure & Private',
    description: "We treat your church's data with the sacred care it deserves—secure, private, and always under your control.",
  },
  {
    icon: Clock,
    title: 'Easy to Use',
    description: 'Intuitive design that works for all ages and technical abilities. Get started in minutes, not hours.',
  },
  {
    icon: Heart,
    title: 'Built for Faith',
    description: 'Every feature is designed with spiritual communities in mind, supporting your unique needs and values.',
  },
];

const oraFeatures = [
  {
    icon: Eye,
    title: 'Observe',
    description: 'ORA™ helps you notice key themes, patterns, and insights in Scripture, prayers, and spiritual practices.',
  },
  {
    icon: MessageSquare,
    title: 'Reflect',
    description: 'Get personalized questions and prompts that deepen your understanding and connect Scripture to your daily life.',
  },
  {
    icon: Lightbulb,
    title: 'Act',
    description: 'Receive practical suggestions for applying biblical wisdom to real-world situations and spiritual growth.',
  },
];

const oraPowers = [
  { icon: BookOpen, title: 'S.O.A.P. Journal', description: 'ORA™-powered reflections and insights on your daily Scripture readings' },
  { icon: BookOpen, title: 'Bible Reading', description: 'Personalized verse insights and contextual commentary' },
  { icon: Heart, title: 'Prayer Wall', description: 'Prayer guidance and spiritual support for requests' },
  { icon: Video, title: 'Pro Studio', description: 'Video editing with Colorize, Upscale, and Transcription' },
];

const steps = [
  {
    number: '1',
    title: 'Create Your Free Account',
    description: 'Sign up at soapboxsuperapp.com with your email or social login. No credit card required to start.',
  },
  {
    number: '2',
    title: 'Add or Join Your Community',
    description: 'Create a new community for your church, ministry, or group, or search and join an existing community using an invite code.',
  },
  {
    number: '3',
    title: 'Invite Members to Connect',
    description: 'Share your community invite link via email, SMS, or social media. Members can join instantly with one click.',
  },
  {
    number: '4',
    title: 'Start Engaging and Growing Together',
    description: 'Post updates, share prayer requests, join events, participate in Bible studies, and build meaningful connections with your faith community.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Interactive Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Unicorn Studio Background */}
        <div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{ maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)' }}>
          <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
            <div data-us-project="FixNvEwvWwbu3QX9qC3F" className="absolute w-full h-full left-0 top-0 -z-10"></div>
          </div>
        </div>
        
        {/* Interactive Orange/Amber Background - Similar to Aura's blue */}
        <div className="absolute inset-0 radial-glow-amber -z-10" />

        {/* Grid Background */}
        <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

        {/* Animated Glow Orbs */}
        <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[150px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-orange-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container lg:px-12 min-h-[800px] flex flex-col lg:flex-row z-10 mx-auto pt-24 px-6 relative items-center">
          {/* Left Column: Copy */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-12 pb-20 lg:py-0">
            <div className="flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase">Faith Community Platform</span>
            </div>

            <h1 className="text-5xl lg:text-7xl leading-[1.1] text-amber-400 text-glow-amber tracking-tight font-semibold mb-6">
              Unite Your Faith<br />
              <span className="text-white opacity-90">with SoapBox.</span>
            </h1>

            <p className="text-xl lg:text-2xl font-light text-white/70 leading-relaxed tracking-tight max-w-xl mb-12">
              Powerful tools for prayer, Bible study, events, and meaningful connections that strengthen faith and community bonds.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link href="/get-started">
                <ShinyButton>
                  <span className="flex items-center gap-2">
                    <Flame className="w-[18px] h-[18px] candle-glow" />
                    Get Started Free
                  </span>
                </ShinyButton>
              </Link>

              <button className="hover:bg-white/10 hover:text-white transition-all flex text-sm font-medium text-slate-300 bg-white/5 rounded-full py-3 px-6 gap-2 items-center group border border-white/10">
                <span className="text-sm font-medium tracking-tight">Schedule Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>

            <p className="text-sm text-white/30 mt-8 font-mono">
              Join thousands of faith communities worldwide
            </p>
          </div>

          {/* Right Column: Abstract UI Visualization with Sonar */}
          <div className="lg:w-1/2 lg:h-[700px] flex w-full h-[400px] relative items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 600 600">
              <defs>
                <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0 }} />
                </radialGradient>
                <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0 }} />
                </linearGradient>
              </defs>

              {/* Connecting Beams */}
              <g>
                <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
                <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="beam-line animate-beam opacity-60" />
              </g>
              <g>
                <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
                <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-1s' }} />
              </g>
              <g>
                <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
                <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-2s' }} />
              </g>
              <g>
                <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]" />
                <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="#f59e0b" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-1.5s' }} />
              </g>

              {/* Central Node with Sonar */}
              <g transform="translate(300, 300)">
                <circle r="120" fill="url(#center-glow)" className="animate-pulse" />
                <circle r="20" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.5" className="animate-sonar" />
                <circle r="20" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.5" className="animate-sonar delay-1000" />
                <circle r="20" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.5" className="animate-sonar delay-2000" />
                <circle r="100" fill="none" stroke="white" strokeOpacity="0.05" strokeWidth="1" />
                <circle r="65" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="10 20" className="animate-spin-slow" />
                <circle r="45" fill="none" stroke="#f59e0b" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 6" className="animate-spin-slow-reverse" />
                <circle r="8" fill="#0A0A0A" stroke="#f59e0b" strokeWidth="2" />
                <circle r="4" fill="#f59e0b" className="animate-pulse-fast" />
              </g>
            </svg>

            {/* Orbiting Icons Container */}
            <div className="absolute w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] animate-spin-slow">
              {/* Prayer Icon - Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-[#0a0a08] border border-amber-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all cursor-pointer group">
                  <Heart className="w-5 h-5 text-amber-400/70 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
              {/* Bible Icon - Right */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-[#0a0a08] border border-amber-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all cursor-pointer group">
                  <BookOpen className="w-5 h-5 text-amber-400/70 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
              {/* Community Icon - Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-[#0a0a08] border border-amber-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all cursor-pointer group">
                  <Users className="w-5 h-5 text-amber-400/70 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
              {/* Calendar Icon - Left */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-[#0a0a08] border border-amber-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all cursor-pointer group">
                  <Calendar className="w-5 h-5 text-amber-400/70 group-hover:text-amber-400 transition-colors" />
                </div>
              </div>
            </div>

            {/* Inner Orbit with smaller icons */}
            <div className="absolute w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] animate-spin-slow-reverse">
              {/* Sparkles - Top Right */}
              <div className="absolute top-[15%] right-[15%]">
                <div className="w-8 h-8 rounded-full bg-[#0a0a08] border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  <Sparkles className="w-4 h-4 text-purple-400/70" />
                </div>
              </div>
              {/* Shield - Bottom Left */}
              <div className="absolute bottom-[15%] left-[15%]">
                <div className="w-8 h-8 rounded-full bg-[#0a0a08] border border-emerald-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                  <Shield className="w-4 h-4 text-emerald-400/70" />
                </div>
              </div>
            </div>

            {/* Center: The Flame Icon */}
            <div className="relative z-20 w-32 h-32 rounded-full glass-panel-glow flex flex-col items-center justify-center shadow-[0_0_60px_-15px_rgba(251,191,36,0.3)] animate-float animate-breathe">
              <Flame className="w-12 h-12 text-amber-400 candle-glow" />
            </div>

            {/* Floating Labels */}
            <div className="absolute top-[12%] lg:top-[15%] left-[5%] lg:left-[10%] flex flex-col items-end animate-fade-slide-in stagger-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
                <Heart className="w-3 h-3 text-amber-400" />
                <span className="text-xs font-mono text-amber-400 tracking-widest">PRAYER</span>
              </div>
              <div className="h-[1px] w-16 bg-gradient-to-l from-amber-500/50 to-transparent" />
            </div>

            <div className="absolute bottom-[12%] lg:bottom-[15%] right-[5%] lg:right-[10%] flex flex-col items-start animate-fade-slide-in stagger-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
                <Users className="w-3 h-3 text-amber-400" />
                <span className="text-xs font-mono text-amber-400 tracking-widest">COMMUNITY</span>
              </div>
              <div className="h-[1px] w-16 bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>

            <div className="absolute top-[45%] right-[2%] lg:right-[5%] flex flex-col items-start animate-fade-slide-in stagger-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
                <BookOpen className="w-3 h-3 text-amber-400" />
                <span className="text-xs font-mono text-amber-400 tracking-widest">STUDY</span>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>

            <div className="absolute top-[45%] left-[2%] lg:left-[5%] flex flex-col items-end animate-fade-slide-in stagger-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2">
                <Calendar className="w-3 h-3 text-amber-400" />
                <span className="text-xs font-mono text-amber-400 tracking-widest">EVENTS</span>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-l from-amber-500/50 to-transparent" />
            </div>

            {/* Status Indicator */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">Network Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="border-t border-white/5 bg-[#050402]/80 backdrop-blur-sm">
        <LogoMarquee />
      </section>

      {/* Community Pulse - Live Activity Dashboard */}
      <section className="py-24 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] uppercase tracking-widest font-medium text-emerald-200/80">Live Community Pulse</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              SoapBox Community <span className="text-amber-400">Activity</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Real-time insights into how faith communities are growing and connecting worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Live Activity Feed */}
            <div className="lg:col-span-1 glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-white">Live Activity</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-emerald-400 font-medium">Live</span>
                </div>
              </div>

              <div className="space-y-3 max-h-[320px] overflow-hidden">
                {[
                  { action: 'Prayer answered', user: 'Sarah K.', community: 'Grace Chapel', time: '2m ago', icon: Heart, color: 'rose' },
                  { action: 'New member joined', user: 'Michael R.', community: 'Faith Community', time: '5m ago', icon: Users, color: 'blue' },
                  { action: 'Bible study completed', user: 'Emma L.', community: 'Hope Church', time: '8m ago', icon: BookOpen, color: 'purple' },
                  { action: 'Event created', user: 'Pastor John', community: 'Living Word', time: '12m ago', icon: Calendar, color: 'amber' },
                  { action: 'Devotion shared', user: 'Rachel M.', community: 'Cornerstone', time: '15m ago', icon: Sparkles, color: 'emerald' },
                  { action: 'Prayer request', user: 'David W.', community: 'New Life', time: '18m ago', icon: Heart, color: 'rose' },
                ].map((item, i) => {
                  const colorMap: Record<string, string> = {
                    rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
                    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
                    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
                    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
                    emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
                  };
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all animate-fade-slide-in"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className={`w-8 h-8 rounded-lg ${colorMap[item.color]} flex items-center justify-center border shrink-0`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm truncate">{item.action}</p>
                        <p className="text-neutral-500 text-[10px] truncate">{item.user} · {item.community}</p>
                      </div>
                      <span className="text-neutral-600 text-[10px] shrink-0">{item.time}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-white/5">
                <Link href="/features" className="text-amber-400 text-xs hover:text-amber-300 transition-colors flex items-center gap-1">
                  View all activity <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Middle Column: Stats Dashboard */}
            <div className="lg:col-span-1 glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-white">Community Growth</span>
                </div>
                <div className="flex gap-1">
                  {['1D', '1W', '1M'].map((period, i) => (
                    <button
                      key={period}
                      className={`px-2 py-1 text-[10px] rounded-md transition-colors ${i === 1 ? 'bg-amber-500/20 text-amber-400' : 'text-neutral-500 hover:text-white'}`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Stat */}
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-1">12,847</div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-neutral-400 text-sm">Active Communities</span>
                  <span className="text-emerald-400 text-xs flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />
                    +18.2%
                  </span>
                </div>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Prayers Today', value: '24.5K', change: '+12%', icon: Heart },
                  { label: 'Active Members', value: '892K', change: '+8%', icon: Users },
                  { label: 'Events This Week', value: '3.2K', change: '+24%', icon: Calendar },
                  { label: 'ORA™ Sessions', value: '156K', change: '+31%', icon: Sparkles },
                ].map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-3 h-3 text-amber-400/60" />
                      <span className="text-[10px] text-neutral-500">{stat.label}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-semibold text-white">{stat.value}</span>
                      <span className="text-[10px] text-emerald-400">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-3 h-3" /> Pray
                </button>
                <button className="flex-1 py-2.5 px-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium hover:bg-purple-500/20 transition-colors flex items-center justify-center gap-2">
                  <Sparkles className="w-3 h-3" /> Study
                </button>
                <button className="flex-1 py-2.5 px-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium hover:bg-blue-500/20 transition-colors flex items-center justify-center gap-2">
                  <Users className="w-3 h-3" /> Connect
                </button>
              </div>
            </div>

            {/* Right Column: Service Status */}
            <div className="lg:col-span-1 glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-white">Platform Status</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <CircleCheck className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-medium">All Systems Operational</span>
                </div>
              </div>

              {/* Service Status Rows */}
              <div className="space-y-3 mb-6">
                {[
                  { service: 'Prayer Wall', region: 'global', latency: '12ms', status: 'active' },
                  { service: 'ORA™ AI Engine', region: 'us-east-1', latency: '45ms', status: 'active' },
                  { service: 'Event Sync', region: 'global-edge', latency: '8ms', status: 'active' },
                  { service: 'Community Hub', region: 'multi-region', latency: '15ms', status: 'active' },
                  { service: 'Media Storage', region: 'cdn-global', latency: '22ms', status: 'active' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <div>
                        <p className="text-white text-sm">{item.service}</p>
                        <p className="text-neutral-600 text-[10px]">{item.region}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-400 text-xs font-mono">{item.latency}</p>
                      <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-emerald-500/50 rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Uptime Stats */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">99.99%</div>
                  <div className="text-[10px] text-neutral-500">Uptime</div>
                </div>
                <div className="text-center border-x border-white/5">
                  <div className="text-xl font-bold text-white">&lt;50ms</div>
                  <div className="text-[10px] text-neutral-500">Avg Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">24/7</div>
                  <div className="text-[10px] text-neutral-500">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started - Nebula Style */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Feature Card */}
          <div className="group overflow-hidden glass-panel rounded-[2.5rem] relative">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent opacity-40 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Text Content */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-amber-400" />
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                  Start Your Faith Journey in Minutes
                </h2>

                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    Join thousands of faith communities already transforming how they connect, grow, and serve together on SoapBox.
                  </p>
                  <p>
                    Our guided setup walks you through everything—from creating your profile to joining your first community. No technical expertise required.
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {['Free to Start', '2-Min Setup', 'No Credit Card', '24/7 Support'].map((feature, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Link href="/get-started">
                    <ShinyButton>
                      <span className="flex items-center gap-2">
                        Get Started Free
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </ShinyButton>
                  </Link>
                </div>
              </div>

              {/* App Preview - Visual Content */}
              <div className="relative min-h-[500px] lg:min-h-[600px] bg-zinc-950/50 border-t lg:border-t-0 lg:border-l border-white/5 overflow-hidden">
                {/* Fake Code Editor Background */}
                <div className="absolute inset-0 p-6 md:p-8 text-xs leading-relaxed text-neutral-600 select-none opacity-30 pointer-events-none font-mono">
                  <div className="flex gap-1.5 mb-6 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  </div>
                  <div className="space-y-1 text-[10px] md:text-xs">
                    <p><span className="text-purple-400">import</span> {'{'} <span className="text-amber-300">SoapBox</span> {'}'} <span className="text-purple-400">from</span> <span className="text-emerald-400">&quot;@soapbox/app&quot;</span>;</p>
                    <p className="h-4" />
                    <p><span className="text-blue-400">const</span> community = <span className="text-purple-400">new</span> <span className="text-amber-300">SoapBox</span>({'{'}</p>
                    <p className="pl-4">name: <span className="text-emerald-400">&quot;Grace Community&quot;</span>,</p>
                    <p className="pl-4">type: <span className="text-emerald-400">&quot;church&quot;</span>,</p>
                    <p className="pl-4">features: [<span className="text-emerald-400">&quot;prayer&quot;</span>, <span className="text-emerald-400">&quot;events&quot;</span>]</p>
                    <p>{'}'});</p>
                    <p className="h-4" />
                    <p><span className="text-purple-400">async function</span> <span className="text-blue-400">connect</span>() {'{'}</p>
                    <p className="pl-4"><span className="text-blue-400">await</span> community.<span className="text-blue-400">invite</span>(members);</p>
                    <p className="pl-4"><span className="text-neutral-500">// Building faith together...</span></p>
                    <p>{'}'}</p>
                  </div>
                </div>

                {/* Floating App Card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm z-10">
                  <div className="rounded-2xl bg-zinc-900/95 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-700 group-hover:scale-[1.02]">
                    {/* Header */}
                    <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                          <Flame className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-medium">SoapBox</h4>
                          <p className="text-emerald-400 text-[10px]">Ready to connect</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[10px] text-emerald-400">Online</span>
                      </div>
                    </div>

                    {/* Content Rows */}
                    <div className="divide-y divide-white/5">
                      {[
                        { icon: Users, label: 'Join Community', desc: 'Grace Chapel', color: 'blue', time: 'Step 1' },
                        { icon: Heart, label: 'Prayer Wall', desc: 'Share requests', color: 'rose', time: 'Step 2' },
                        { icon: BookOpen, label: 'Daily Devotion', desc: 'Start S.O.A.P.', color: 'purple', time: 'Step 3' },
                        { icon: Sparkles, label: 'Meet ORA™', desc: 'AI Guide ready', color: 'amber', time: 'Step 4' },
                      ].map((item, i) => {
                        const colorMap: Record<string, string> = {
                          blue: 'bg-blue-500/10 text-blue-400',
                          rose: 'bg-rose-500/10 text-rose-400',
                          purple: 'bg-purple-500/10 text-purple-400',
                          amber: 'bg-amber-500/10 text-amber-400',
                        };
                        return (
                          <div
                            key={i}
                            className="p-3.5 flex items-center justify-between hover:bg-white/[0.02] transition-colors animate-fade-slide-in"
                            style={{ animationDelay: `${i * 0.15}s` }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg ${colorMap[item.color]} flex items-center justify-center`}>
                                <item.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="text-white text-sm">{item.label}</span>
                                <p className="text-neutral-500 text-[10px]">{item.desc}</p>
                              </div>
                            </div>
                            <span className="text-neutral-600 text-[10px] font-mono">{item.time}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-gradient-to-r from-amber-500/5 to-transparent border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-500 text-xs">Setup Progress</span>
                        <span className="text-amber-400 text-xs font-mono">100%</span>
                      </div>
                      <div className="mt-2 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-amber-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-12 left-8 w-16 h-16 bg-purple-500/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Digital Ministry Hub */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-[0.2em]">Core Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              A Digital Ministry Hub
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Comprehensive tools designed specifically for faith communities to grow, connect, and thrive together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Prayer Wall */}
            <SpotlightCard className={`p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-rose-500/30 transition-all group animate-fade-slide-in stagger-1`}>
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
            <SpotlightCard className={`p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all group animate-fade-slide-in stagger-2`}>
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
            <SpotlightCard className={`p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all group animate-fade-slide-in stagger-3`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
                  <Calendar className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <span className="text-[10px] text-amber-400 font-medium">5+ hrs saved</span>
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
            <SpotlightCard className={`p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all group animate-fade-slide-in stagger-4`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
                  <BookOpen className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <span className="text-[10px] text-purple-400 font-medium">ORA™</span>
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
            <SpotlightCard className={`p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 transition-all group animate-fade-slide-in stagger-5`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] transition-all">
                  <HandHeart className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
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
            <SpotlightCard className={`p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-500/30 transition-all group animate-fade-slide-in stagger-6`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all">
                  <Megaphone className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
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

      {/* Why Faith Communities Choose Us */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Why Faith Communities Choose Us
            </h2>
            <p className="text-neutral-400">
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
                <Clock className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Easy to Use</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Intuitive design that works for all ages and technical abilities. Get started in minutes, not hours.</p>
            </SpotlightCard>

            {/* Built for Faith */}
            <SpotlightCard className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center group animate-fade-slide-in stagger-3">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:border-amber-500/40 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all">
                <Heart className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Built for Faith</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Every feature is designed with spiritual communities in mind, supporting your unique needs and values.</p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Meet ORA™ */}
      <section className="py-24 border-t border-white/5 bg-[#080808] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-[0.2em]">AI-Powered</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">
              Meet ORA™ — Your AI Spiritual Guide
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Experience personalized spiritual insights powered by artificial intelligence.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

            {/* Left: Central Hub Visualization */}
            <div className="relative flex items-center justify-center min-h-[500px]">
              {/* Background Glow */}
              <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

              {/* Sonar Rings */}
              <div className="absolute w-72 h-72 border border-purple-500/10 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
              <div className="absolute w-56 h-56 border border-purple-500/20 rounded-full animate-ping opacity-30" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />

              {/* Outer Rotating Ring */}
              <div className="absolute w-64 h-64 border border-white/10 rounded-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              </div>

              {/* Middle Dashed Ring */}
              <div className="absolute w-48 h-48 border border-purple-500/20 border-dashed rounded-full animate-spin-slow-reverse" />

              {/* Orbiting Feature Icons */}
              <div className="absolute w-72 h-72 animate-spin-slow" style={{ animationDuration: '20s' }}>
                {/* Observe - Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0a08] border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:border-purple-500/60 transition-all">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-purple-400 whitespace-nowrap">OBSERVE</span>
                </div>
                {/* Reflect - Bottom Right */}
                <div className="absolute bottom-[13%] right-[13%] group">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0a08] border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:border-purple-500/60 transition-all">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-purple-400 whitespace-nowrap">REFLECT</span>
                </div>
                {/* Act - Bottom Left */}
                <div className="absolute bottom-[13%] left-[13%] group">
                  <div className="w-14 h-14 rounded-2xl bg-[#0a0a08] border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover:border-purple-500/60 transition-all">
                    <Lightbulb className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-purple-400 whitespace-nowrap">ACT</span>
                </div>
              </div>

              {/* Center Hub */}
              <div className="relative z-10 w-24 h-24 rounded-3xl bg-[#0a0a08] border border-purple-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.3)] animate-breathe">
                <Sparkles className="w-10 h-10 text-purple-400" />
                {/* Scanner Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent animate-pulse" />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-purple-500/20 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                <span className="text-[10px] font-mono text-purple-400 tracking-widest uppercase type-writer">ORA™ Active</span>
              </div>
            </div>

            {/* Right: Chat Demo UI */}
            <div className="relative">
              <SpotlightCard className="rounded-3xl border border-white/10 bg-[#0a0a08] overflow-hidden" spotlightColor="purple">
                {/* Chat Header */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">ORA™ Assistant</h4>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        <span className="text-[10px] text-emerald-400">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-white/30">v2.0</div>
                </div>

                {/* Chat Messages */}
                <div className="p-6 space-y-4 min-h-[350px]">
                  {/* User Message */}
                  <div className="flex justify-end animate-fade-slide-in">
                    <div className="max-w-[80%] bg-white/10 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 py-3 border border-white/5">
                      <p className="text-sm text-white/90">
                        Help me understand <span className="text-amber-400">Romans 8:28</span> and how it applies to my current struggles.
                      </p>
                    </div>
                  </div>

                  {/* ORA Response */}
                  <div className="flex justify-start animate-fade-slide-in stagger-2">
                    <div className="max-w-[85%] bg-purple-500/10 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-4 border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-3 text-purple-400">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-[10px] font-mono uppercase tracking-wider">ORA™ Insight</span>
                      </div>
                      <p className="text-sm text-white/80 mb-3 leading-relaxed">
                        Romans 8:28 reminds us that God orchestrates all circumstances for the good of those who love Him. Even in your struggles, He is working purposefully.
                      </p>
                      <div className="bg-black/30 rounded-lg p-3 border border-white/5">
                        <p className="text-xs text-white/60 italic">
                          "And we know that in all things God works for the good of those who love him..."
                        </p>
                      </div>

                      {/* Reflection Prompt */}
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <p className="text-xs text-purple-300 font-medium mb-2">💭 Reflection Questions:</p>
                        <ul className="space-y-1 text-xs text-white/60">
                          <li>• What "good" might God be developing in you through this trial?</li>
                          <li>• How can you trust His timing today?</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex justify-start animate-fade-slide-in stagger-4">
                    <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 border border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-purple-400/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                        <span className="text-[10px] text-white/40">Generating action steps...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Ask ORA™ anything about Scripture..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                      disabled
                    />
                    <button className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* ORA Powers Status Dashboard */}
          <div className="rounded-3xl border border-white/10 bg-[#0a0a08] overflow-hidden">
            {/* Dashboard Header */}
            <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">ORA™ System Status</h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">All Systems Operational</span>
              </div>
            </div>

            {/* Status Rows */}
            <div className="divide-y divide-white/5">
              {/* S.O.A.P. Journal */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">S.O.A.P. Journal</h4>
                    <p className="text-white/40 text-xs">Scripture reflections & insights</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-white/40">12ms</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-4 bg-emerald-500 rounded-full" />
                      <div className="w-1 h-4 bg-emerald-500/60 rounded-full" />
                      <div className="w-1 h-4 bg-emerald-500/30 rounded-full" />
                    </div>
                    <span className="text-xs text-emerald-400 font-medium">Active</span>
                  </div>
                </div>
              </div>

              {/* Bible Reading */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Bible Reading</h4>
                    <p className="text-white/40 text-xs">Personalized verse commentary</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-white/40">18ms</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-4 bg-emerald-500 rounded-full" />
                      <div className="w-1 h-4 bg-emerald-500/60 rounded-full" />
                      <div className="w-1 h-4 bg-emerald-500/30 rounded-full" />
                    </div>
                    <span className="text-xs text-emerald-400 font-medium">Active</span>
                  </div>
                </div>
              </div>

              {/* Prayer Wall */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center border border-rose-500/20 group-hover:border-rose-500/40 transition-colors">
                    <Heart className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Prayer Wall</h4>
                    <p className="text-white/40 text-xs">Prayer guidance & support</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-white/40">15ms</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-4 bg-emerald-500 rounded-full" />
                      <div className="w-1 h-4 bg-emerald-500/60 rounded-full" />
                      <div className="w-1 h-4 bg-emerald-500/30 rounded-full" />
                    </div>
                    <span className="text-xs text-emerald-400 font-medium">Active</span>
                  </div>
                </div>
              </div>

              {/* Pro Studio */}
              <div className="px-8 py-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-colors">
                    <Video className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">Pro Studio</h4>
                    <p className="text-white/40 text-xs">Video editing & transcription</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono text-white/40">45ms</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-4 bg-emerald-500 rounded-full" />
                      <div className="w-1 h-4 bg-emerald-500/60 rounded-full" />
                      <div className="w-1 h-4 bg-emerald-500/30 rounded-full" />
                    </div>
                    <span className="text-xs text-emerald-400 font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-white/5 bg-white/[0.01] flex items-center justify-between">
              <p className="text-xs text-white/30">
                Available with <span className="text-amber-400">Servant</span> and <span className="text-amber-400">Torchbearer</span> subscription tiers
              </p>
              <Link href="/pricing" className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                View Plans
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-neutral-400">
              Choose the perfect plan for your faith community
            </p>
          </div>

          {/* Individual Plans */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">Individual Members</h3>
              <p className="text-neutral-500 text-sm">Goal: Spiritual growth and belonging</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Disciple */}
              <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] group animate-fade-slide-in stagger-1 hover:border-emerald-500/30 transition-all">
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
                  <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Daily Bible Reading</li>
                  <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />28 Beginner Reading Plans</li>
                </ul>
                <Link href="/get-started" className="block w-full text-center py-2.5 rounded-full border border-white/10 text-neutral-300 hover:bg-white/5 hover:border-emerald-500/30 transition-all text-sm">
                  Get Started Free
                </Link>
              </SpotlightCard>

              {/* Servant - Most Popular */}
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
                  <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />53 Reading Plans</li>
                  <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Bible Study Tools</li>
                  <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />ORA™ Analytics</li>
                </ul>
                <Link href="/get-started">
                  <ShinyButton className="w-full justify-center text-sm">Begin Your Journey</ShinyButton>
                </Link>
              </SpotlightCard>

              {/* Torchbearer */}
              <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] group animate-fade-slide-in stagger-3 hover:border-purple-500/30 transition-all">
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
                  <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />ORA™ Video Generation</li>
                  <li className="flex items-start gap-2 group/item"><Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />Priority Support</li>
                </ul>
                <Link href="/get-started" className="block w-full text-center py-2.5 rounded-full border border-white/10 text-neutral-300 hover:bg-white/5 hover:border-purple-500/30 transition-all text-sm">
                  Step Deeper
                </Link>
              </SpotlightCard>
            </div>
          </div>

          {/* Candle Banner - Interactive Live Feed */}
          <div className="glass-panel-glow rounded-3xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Animated Candle Visualization */}
              <div className="relative p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-amber-500/5 to-transparent min-h-[300px]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15),transparent_70%)]" />

                {/* Floating embers */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-amber-400/60 rounded-full animate-float"
                      style={{
                        left: `${20 + i * 12}%`,
                        bottom: '20%',
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Central Candle */}
                <div className="relative z-10">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-8 rounded-full bg-amber-500/10 animate-pulse" style={{ animationDuration: '3s' }} />
                  <div className="absolute -inset-4 rounded-full bg-amber-500/20 animate-pulse" style={{ animationDuration: '2s' }} />

                  {/* Candle icon container */}
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/30 shadow-[0_0_60px_rgba(245,158,11,0.3)] animate-breathe">
                    <Flame className="w-12 h-12 text-amber-400 candle-glow animate-flicker" />

                    {/* Sparkle accents */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-400/80 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-amber-500/60 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  </div>

                  {/* Counter badge */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-amber-500/30">
                    <span className="text-amber-400 font-mono text-sm font-semibold">+250/mo</span>
                  </div>
                </div>
              </div>

              {/* Right: Live Activity Feed */}
              <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-semibold text-white">What Are Candles?</h3>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-medium">Live</span>
                  </div>
                </div>

                <p className="text-neutral-400 text-sm mb-6">
                  Spiritual engagement rewards that power your faith journey. Earn through daily activities, spend on ORA™ features.
                </p>

                {/* Live Activity Feed */}
                <div className="space-y-3 mb-6">
                  {[
                    { action: 'Completed morning devotion', candles: '+5', icon: BookOpen, color: 'purple', time: '2m ago' },
                    { action: 'Shared a prayer request', candles: '+3', icon: Heart, color: 'rose', time: '5m ago' },
                    { action: 'Joined Bible study group', candles: '+10', icon: Users, color: 'blue', time: '12m ago' },
                    { action: 'Used ORA™ for reflection', candles: '-2', icon: Sparkles, color: 'purple', time: '15m ago' },
                  ].map((item, i) => {
                    const colorMap: Record<string, string> = {
                      purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
                      rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
                      blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
                    };
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors animate-fade-slide-in"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${colorMap[item.color]} flex items-center justify-center border`}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-white text-sm">{item.action}</p>
                            <p className="text-neutral-500 text-[10px]">{item.time}</p>
                          </div>
                        </div>
                        <span className={`font-mono text-sm font-semibold ${item.candles.startsWith('+') ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {item.candles}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <Link href="/candle" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium text-sm group">
                  Learn More About Candles
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* View Full Pricing */}
          <div className="text-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors">
              View Full Pricing & Church Plans →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Ready to Transform Your Community?
          </h2>
          <p className="text-neutral-400 mb-10">
            Join thousands of faith communities worldwide
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started">
              <ShinyButton>Start Free Today</ShinyButton>
            </Link>
            <button className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all">
              Schedule Demo
            </button>
          </div>
          <p className="text-sm text-neutral-500 mt-6">
            No credit card required • Free to get started
          </p>
        </div>
      </section>
    </>
  );
}
