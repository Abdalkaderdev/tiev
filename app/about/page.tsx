'use client';

import { Heart, Shield, Users, Lock, Sparkles, Church, Smartphone, BookOpen, MessageSquare, Calendar, CreditCard, UserCheck, Building, User, Quote, Check, Globe, Flame } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

const missionPillars = [
  {
    icon: Heart,
    title: 'Faith-First Technology',
    description: 'Built exclusively for churches, not adapted from secular platforms.',
    color: 'rose',
    status: 'Core Value',
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Strengthening relationships and building deeper spiritual bonds.',
    color: 'blue',
    status: 'Core Value',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Privacy-first design with no data reselling or ad tracking.',
    color: 'emerald',
    status: 'Core Value',
  },
];

const whatWeDo = [
  {
    icon: BookOpen,
    title: 'Share Devotionals & Sermons',
    description: 'Distribute spiritual content and teachings to your community.',
  },
  {
    icon: Heart,
    title: 'Create Prayer Walls',
    description: 'Foster community prayer with moderated prayer request walls.',
  },
  {
    icon: BookOpen,
    title: 'Bible Reading & S.O.A.P.',
    description: 'Host Bible reading plans and Scripture journaling tools.',
  },
  {
    icon: MessageSquare,
    title: 'Connect Members',
    description: 'Messaging, discussion boards, and community announcements.',
  },
  {
    icon: Calendar,
    title: 'Organize Events',
    description: 'Plan small groups, events, and volunteer activities.',
  },
  {
    icon: CreditCard,
    title: 'Accept Donations',
    description: 'Secure online giving with comprehensive analytics.',
  },
];

const whoWeServe = [
  {
    icon: UserCheck,
    title: 'Church Leaders',
    description: 'Pastors and leaders seeking digital transformation for their ministry.',
  },
  {
    icon: Building,
    title: 'Administrators',
    description: 'Church staff and volunteers managing daily operations and programs.',
  },
  {
    icon: Church,
    title: 'All Church Sizes',
    description: 'Faith communities from small groups to megachurches of every size.',
  },
  {
    icon: User,
    title: 'Individuals',
    description: 'Christians seeking to grow in faith and connect with community.',
  },
];

const faithTechFeatures = [
  {
    icon: Lock,
    title: 'Privacy-First',
    description: "We protect your church's data with faith-first privacy—no ad tracking, no data resale, ever.",
  },
  {
    icon: Sparkles,
    title: 'AI-Assisted',
    description: 'Designed with spiritual discernment—AI supports your mission without replacing it.',
  },
  {
    icon: Church,
    title: 'Church-Built',
    description: 'Purpose-built church technology—not a generic business platform in disguise.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Ready',
    description: 'Reach members anywhere with mobile-ready worship tools and prayer communities.',
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; hoverBorder: string }> = {
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-500', hoverBorder: 'hover:border-rose-500/30' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-500', hoverBorder: 'hover:border-blue-500/30' },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-500', hoverBorder: 'hover:border-emerald-500/30' },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-blue-200/80">
                  About Us
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                About SoapBox Super App
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2">
                Faith-Based Church App for Digital Ministry & Community Engagement
              </p>
            </div>

            {/* Right: Animated Community Visual */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              <div className="relative">
                {/* Central Globe */}
                <div className="relative">
                  {/* Orbit rings */}
                  <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow" style={{ animationDuration: '30s' }} />
                    <div className="absolute inset-6 rounded-full border border-dashed border-blue-500/10" />
                    <div className="absolute inset-12 rounded-full border border-blue-500/20 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                  </div>

                  {/* Globe center */}
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent border border-blue-500/30 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(59,130,246,0.5)] animate-breathe">
                    <Globe className="w-16 h-16 text-blue-400" />
                  </div>

                  {/* Orbiting community members - spread out */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center animate-float">
                      <Heart className="w-5 h-5 text-rose-400" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-10">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.3s' }}>
                      <Flame className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 -right-12">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.6s' }}>
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.9s' }}>
                      <Sparkles className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 -left-12">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.2s' }}>
                      <Users className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div className="absolute -top-2 -left-10">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                      <Church className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                </div>

                {/* Connection lines effect */}
                <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 pointer-events-none">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
              Our Mission
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              To build technology for the Church that strengthens relationships, enhances spiritual formation, and supports meaningful ministry in every season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPillars.map((pillar, i) => {
              const colors = colorClasses[pillar.color];
              const staggerClass = i === 0 ? 'stagger-1' : i === 1 ? 'stagger-2' : 'stagger-3';
              return (
                <SpotlightCard
                  key={i}
                  className={`p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center ${colors.hoverBorder} transition-all group animate-fade-slide-in ${staggerClass}`}
                  spotlightColor={pillar.color === 'rose' ? 'rgba(244, 63, 94, 0.15)' : pillar.color === 'blue' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)'}
                >
                  {/* Status Badge */}
                  <div className="flex justify-center mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                      <span className="relative flex h-1.5 w-1.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pillar.color === 'rose' ? 'bg-rose-400' : pillar.color === 'blue' ? 'bg-blue-400' : 'bg-emerald-400'} opacity-75`} />
                        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${pillar.color === 'rose' ? 'bg-rose-500' : pillar.color === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
                      </span>
                      {pillar.status}
                    </span>
                  </div>
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${colors.bg} flex items-center justify-center mb-6 border ${colors.border} group-hover:scale-110 transition-transform`}>
                    <pillar.icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{pillar.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{pillar.description}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="py-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 glass-panel flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-purple-600/20 to-blue-600/20" />
            <div className="relative z-10 text-center px-6">
              <p className="text-lg text-neutral-300 italic mb-2">Community prayer circle - diverse believers united in faith</p>
              <div className="flex justify-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30" />
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30" />
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30" />
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Digital Ministry Platform */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Complete Digital Ministry Platform
            </h2>
            <p className="text-neutral-400 max-w-3xl mx-auto">
              SoapBox Super App is the all-in-one platform designed to help churches, ministries, and faith-based communities grow, connect, and thrive in today's digital world.
            </p>
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-12 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <h3 className="text-xl font-semibold text-white">Digital Tools for Modern Ministry</h3>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">What We Do</h3>
            <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
              SoapBox Super App is more than a church management system. It's a complete digital ministry platform that helps churches connect hearts, amplify worship, and extend the reach of the Gospel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeDo.map((item, i) => {
                const staggerClass = `stagger-${(i % 6) + 1}`;
                return (
                  <SpotlightCard
                    key={i}
                    className={`p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all group animate-fade-slide-in ${staggerClass}`}
                    spotlightColor="rgba(245, 158, 11, 0.15)"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-amber-500" />
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <Check className="w-3 h-3 text-amber-500" />
                        <span className="text-[10px] text-amber-400 font-medium">Active</span>
                      </div>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-neutral-400 text-sm">{item.description}</p>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>

          {/* Who We Serve */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-12 text-center">Who We Serve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoWeServe.map((item, i) => {
                const staggerClass = `stagger-${(i % 4) + 1}`;
                return (
                  <SpotlightCard
                    key={i}
                    className={`p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-purple-500/30 transition-all group animate-fade-slide-in ${staggerClass}`}
                    spotlightColor="rgba(168, 85, 247, 0.15)"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20 group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-purple-500" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-neutral-400 text-sm">{item.description}</p>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
              Our Story
            </h2>
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              SoapBox began as a simple idea: <span className="text-white font-medium">What if the Church had a tech platform built exclusively for its mission—not adapted from secular tools?</span>
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Founded by believers with backgrounds in software engineering, ministry, and nonprofit leadership, SoapBox Super App was created to serve faith, not profit. Today, it's used by churches and ministries to connect hearts, amplify worship, and extend the reach of the Gospel.
            </p>
          </div>

          {/* Testimonial */}
          <div className="relative">
            <div className="glass-panel-glow rounded-3xl p-8 md:p-12 text-center">
              <Quote className="w-10 h-10 text-amber-500/30 mx-auto mb-6" />
              <blockquote className="text-xl text-white font-light leading-relaxed mb-6 italic">
                "SoapBox Super App has brought our church together in ways we never imagined. It's like having a digital sanctuary for our community."
              </blockquote>
              <div className="text-amber-400 font-semibold">Pastor L.</div>
              <div className="text-neutral-500 text-sm">California</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faith-Based Technology Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Faith-Based Technology That's Safe, Secure & Spirit-Led
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              SoapBox Super App is built for churches—prioritizing your privacy, values, and faith journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faithTechFeatures.map((item, i) => {
              const staggerClass = `stagger-${(i % 4) + 1}`;
              return (
                <SpotlightCard
                  key={i}
                  className={`p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-amber-500/30 transition-all group animate-fade-slide-in ${staggerClass}`}
                  spotlightColor="rgba(245, 158, 11, 0.15)"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-neutral-400 text-sm">{item.description}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Join the Faith Tech Movement
          </h2>
          <p className="text-neutral-400 mb-4">
            Ready to unify your faith community? Experience where faith meets functionality.
          </p>
          <p className="text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">
            Empower your church to grow, connect, pray, reflect, and serve using AI-assisted digital ministry tools designed for spiritual communities.
          </p>
          <p className="text-amber-400 font-medium mb-8">
            SoapBox Super App: Faith Meets Functionality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started">
              <ShinyButton>Start Free Today</ShinyButton>
            </Link>
            <button className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
