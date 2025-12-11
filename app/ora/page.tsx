'use client';

import { useState } from 'react';
import { Eye, Brain, Sparkles, BookOpen, Heart, MessageSquare, Flame, Play, ChevronRight, Check, Zap, Users, Calendar, Shield, Star, Quote, ArrowRight, Send, Church, Mic, Image as ImageIcon, Radio, CircleCheck, Activity, Globe } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

const oraSteps = [
  {
    letter: 'O',
    title: 'Observe',
    icon: Eye,
    description: 'ORA™ helps you notice key themes, patterns, and insights in Scripture, prayers, and spiritual practices.',
    details: [
      'Identify recurring biblical themes',
      'Spot connections across passages',
      'Highlight historical context',
      'Surface key Greek/Hebrew meanings',
    ],
    demo: {
      input: 'Reading: Psalm 23',
      output: 'Key themes identified: Divine protection, provision, guidance. The "valley of shadow of death" connects to Exodus journey imagery...',
    },
  },
  {
    letter: 'R',
    title: 'Reflect',
    icon: Brain,
    description: 'Get personalized questions and prompts that deepen your understanding and connect Scripture to your daily life.',
    details: [
      'Personalized reflection questions',
      'Connect Scripture to life situations',
      'Journal prompts for deeper insight',
      'Discussion starters for groups',
    ],
    demo: {
      input: 'How does this apply to me?',
      output: 'Consider: When have you felt like you were walking through a "valley"? How did you experience God\'s presence during that time?',
    },
  },
  {
    letter: 'A',
    title: 'Act',
    icon: Sparkles,
    description: 'Receive practical suggestions for applying biblical wisdom to real-world situations and spiritual growth.',
    details: [
      'Practical daily applications',
      'Habit-forming suggestions',
      'Prayer points and practices',
      'Community engagement ideas',
    ],
    demo: {
      input: 'What should I do next?',
      output: 'This week: Share your "green pastures" moment with someone. Start each morning acknowledging God as your Shepherd.',
    },
  },
];

const oraFeatures = [
  {
    icon: BookOpen,
    title: 'S.O.A.P. Journal',
    description: 'Scripture, Observation, Application, Prayer - enhanced with AI insights',
    color: 'purple',
    stat: '3x deeper engagement',
  },
  {
    icon: BookOpen,
    title: 'Bible Study',
    description: 'Personalized commentary and cross-references powered by ORA™',
    color: 'blue',
    stat: '100+ Bible versions',
  },
  {
    icon: Heart,
    title: 'Prayer Assistant',
    description: 'Guided prayers, intercession prompts, and prayer journaling',
    color: 'rose',
    stat: '24/7 available',
  },
  {
    icon: Flame,
    title: 'Pro Studio',
    description: 'AI-powered sermon prep, social content, and video editing',
    color: 'amber',
    stat: '10x faster creation',
  },
];

const testimonials = [
  {
    quote: "ORA™ helped me see connections in Scripture I'd never noticed in 20 years of ministry.",
    author: "Pastor Michael T.",
    role: "Senior Pastor, Grace Community",
  },
  {
    quote: "The reflection questions feel so personal - like having a spiritual director in my pocket.",
    author: "Sarah K.",
    role: "Small Group Leader",
  },
  {
    quote: "My daily devotional time went from 10 minutes to 30+ because I'm actually engaged.",
    author: "David R.",
    role: "Church Member",
  },
];

const useCases = [
  {
    title: 'Personal Devotions',
    description: 'Start your day with AI-guided Scripture study that meets you where you are spiritually.',
    icon: BookOpen,
    color: 'purple',
    image: 'devotion',
    features: ['Daily verse suggestions', 'Personalized insights', 'Journal prompts'],
  },
  {
    title: 'Sermon Preparation',
    description: 'Research, outline, and develop messages with intelligent assistance that saves hours.',
    icon: MessageSquare,
    color: 'amber',
    image: 'sermon',
    features: ['Cross-references', 'Historical context', 'Illustration ideas'],
  },
  {
    title: 'Small Group Studies',
    description: 'Generate discussion questions and study guides tailored to your group dynamics.',
    icon: Users,
    color: 'blue',
    image: 'group',
    features: ['Discussion questions', 'Ice breakers', 'Application exercises'],
  },
  {
    title: 'Prayer Ministry',
    description: 'Organize prayer requests and receive guidance for powerful intercession.',
    icon: Heart,
    color: 'rose',
    image: 'prayer',
    features: ['Prayer templates', 'Scripture prayers', 'Intercession guides'],
  },
];

const capabilities = [
  'Scripture Analysis',
  'Prayer Guidance',
  'Sermon Prep',
  'Devotionals',
  'Bible Study',
  'Theological Insights',
  'Greek & Hebrew',
  'Cross References',
  'Journal Prompts',
  'Discussion Questions',
];

export default function ORAPage() {
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Purple Grid Overlay */}
        <div className="absolute inset-0 ora-grid-bg pointer-events-none z-0" />

        {/* Primary Purple Radial Glow - Center Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-purple-600/20 rounded-[100%] blur-[150px] pointer-events-none -z-10" />

        {/* Secondary Glow - Accent */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-[0.2em]">AI-Powered Spiritual Guide</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
            Meet <span className="text-purple-400">ORA™</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-4 animate-fade-slide-in stagger-2">
            Your AI Spiritual Guide
          </p>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-10 animate-fade-slide-in stagger-3">
            <span className="text-purple-400 font-medium">O</span>bserve. <span className="text-purple-400 font-medium">R</span>eflect. <span className="text-purple-400 font-medium">A</span>ct. — A revolutionary approach to deepening your faith through intelligent spiritual companionship.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-slide-in stagger-4">
            <ShinyButton>
              <span className="flex items-center gap-2">
                <Sparkles className="w-[18px] h-[18px]" />
                Try ORA™ Free
              </span>
            </ShinyButton>
            <button className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities Marquee */}
      <section className="relative py-8 border-y border-white/5 overflow-hidden bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303] z-10 pointer-events-none" />
        <div className="flex gap-16 items-center animate-marquee whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-500" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          {[...capabilities, ...capabilities].map((cap, i) => (
            <div key={i} className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-lg font-light text-white/80 tracking-wide">{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive O-R-A Demo Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              The ORA™ Method
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              A three-step framework that transforms how you engage with Scripture and grow in your faith.
            </p>
          </div>

          <div className="space-y-8">
            {oraSteps.map((step, i) => {
              const staggerClass = `stagger-${i + 1}`;
              return (
                <div key={i} className={`animate-fade-slide-in ${staggerClass}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* Left: Step Info */}
                    <SpotlightCard
                      className="p-8 rounded-3xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-all group"
                      spotlightColor="rgba(168, 85, 247, 0.15)"
                    >
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all">
                            <span className="text-4xl font-bold text-purple-400">{step.letter}</span>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-purple-500/30 flex items-center justify-center border border-purple-500/40">
                            <step.icon className="w-4 h-4 text-purple-300" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                              Step {i + 1}
                            </span>
                          </div>
                          <p className="text-purple-200/70 leading-relaxed mb-4">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm text-neutral-400">
                                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </SpotlightCard>

                    {/* Right: Live Demo */}
                    <div className="rounded-2xl border border-purple-500/20 bg-[#0a0a0a] overflow-hidden flex flex-col">
                      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-purple-500/5">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <span className="text-[10px] text-purple-400 font-mono">ORA™ Demo - {step.title}</span>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-center space-y-4">
                        {/* Input */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                            <span className="text-amber-400 text-xs font-bold">You</span>
                          </div>
                          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl rounded-tl-md px-4 py-3">
                            <p className="text-sm text-white">{step.demo.input}</p>
                          </div>
                        </div>

                        {/* Output */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-tl-md px-4 py-3 flex-1">
                            <p className="text-sm text-white/90 leading-relaxed">{step.demo.output}</p>
                          </div>
                        </div>

                        {/* Typing indicator */}
                        <div className="flex items-start gap-3 opacity-50">
                          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                            <Sparkles className="w-4 h-4 text-purple-400/50" />
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-md px-4 py-3">
                            <div className="flex items-center gap-1">
                              <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Use Cases with Sticky Panel */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[10px] uppercase tracking-widest font-medium text-purple-200/80">Use Cases</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Built for Every Believer
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Whether you're a pastor preparing sermons or a new believer exploring Scripture, ORA™ meets you where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Sticky Demo Panel */}
            <div className="lg:sticky lg:top-32 hidden lg:block">
              <div className="rounded-3xl border border-purple-500/20 bg-[#0a0a0a] overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5 bg-purple-500/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                        {(() => {
                          const Icon = useCases[activeUseCase].icon;
                          return <Icon className="w-5 h-5 text-purple-400" />;
                        })()}
                      </div>
                      <div>
                        <span className="text-white font-medium">{useCases[activeUseCase].title}</span>
                        <p className="text-xs text-purple-400">ORA™ Demo</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-medium border border-emerald-500/30">
                      Live Preview
                    </span>
                  </div>
                </div>

                <div className="p-8 min-h-[400px] flex flex-col justify-center">
                  {/* Dynamic content based on active use case */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl rounded-tl-md px-4 py-4 flex-1">
                        <p className="text-sm text-white/90 mb-3">
                          I can help you with <span className="text-purple-400 font-medium">{useCases[activeUseCase].title.toLowerCase()}</span>. Here's what I can do:
                        </p>
                        <ul className="space-y-2">
                          {useCases[activeUseCase].features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                              <Check className="w-4 h-4 text-purple-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Simulated interaction */}
                    <div className="flex justify-end">
                      <div className="bg-amber-500/20 border border-amber-500/30 rounded-2xl rounded-br-md px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-white">Help me get started</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-md px-4 py-3">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder={`Ask about ${useCases[activeUseCase].title.toLowerCase()}...`}
                      className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50"
                      disabled
                    />
                    <button className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Use Case Cards */}
            <div className="space-y-4">
              {useCases.map((useCase, i) => {
                const colorClasses: Record<string, { bg: string; border: string; activeBorder: string; text: string; spotlight: string }> = {
                  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', activeBorder: 'border-purple-500/50', text: 'text-purple-400', spotlight: 'rgba(168, 85, 247, 0.15)' },
                  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', activeBorder: 'border-blue-500/50', text: 'text-blue-400', spotlight: 'rgba(59, 130, 246, 0.15)' },
                  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', activeBorder: 'border-rose-500/50', text: 'text-rose-400', spotlight: 'rgba(244, 63, 94, 0.15)' },
                  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', activeBorder: 'border-amber-500/50', text: 'text-amber-400', spotlight: 'rgba(245, 158, 11, 0.15)' },
                };
                const colors = colorClasses[useCase.color];
                const isActive = activeUseCase === i;

                return (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border ${isActive ? colors.activeBorder : 'border-white/10'} bg-white/[0.02] hover:bg-white/[0.04] transition-all cursor-pointer group`}
                    onMouseEnter={() => setActiveUseCase(i)}
                  >
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border} group-hover:scale-110 transition-transform shrink-0`}>
                        <useCase.icon className={`w-7 h-7 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
                          <ChevronRight className={`w-5 h-5 ${isActive ? colors.text : 'text-white/20'} transition-colors`} />
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-3">{useCase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {useCase.features.map((feature, j) => (
                            <span key={j} className={`text-[10px] px-2 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Powered by ORA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              ORA™ Powers Everything
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Our AI is woven throughout SoapBox, enhancing every aspect of your spiritual journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oraFeatures.map((feature, i) => {
              const staggerClass = `stagger-${(i % 4) + 1}`;
              const colorClasses = {
                purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', hoverBorder: 'hover:border-purple-500/40', text: 'text-purple-400', spotlight: 'rgba(168, 85, 247, 0.15)' },
                blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', hoverBorder: 'hover:border-blue-500/40', text: 'text-blue-400', spotlight: 'rgba(59, 130, 246, 0.15)' },
                rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', hoverBorder: 'hover:border-rose-500/40', text: 'text-rose-400', spotlight: 'rgba(244, 63, 94, 0.15)' },
                amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', hoverBorder: 'hover:border-amber-500/40', text: 'text-amber-400', spotlight: 'rgba(245, 158, 11, 0.15)' },
              };
              const colors = colorClasses[feature.color as keyof typeof colorClasses];

              return (
                <SpotlightCard
                  key={i}
                  className={`p-6 rounded-2xl border ${colors.border} bg-white/[0.02] ${colors.hoverBorder} transition-all group animate-fade-slide-in ${staggerClass}`}
                  spotlightColor={colors.spotlight}
                >
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 border ${colors.border} group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{feature.description}</p>
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                    <Sparkles className="w-3 h-3" />
                    {feature.stat}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORA System Status Dashboard */}
      <section className="py-24 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] uppercase tracking-widest font-medium text-emerald-200/80">System Status</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              ORA™ <span className="text-purple-400">Infrastructure</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Enterprise-grade AI infrastructure with guaranteed uptime and lightning-fast responses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: API Status Panel */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-white">API Status</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <CircleCheck className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] text-emerald-400 font-medium">All Systems Operational</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { service: 'ORA™ Core API', region: 'us-east-1', latency: '23ms', status: 'active', load: 92 },
                  { service: 'Scripture Analysis', region: 'global-edge', latency: '45ms', status: 'active', load: 88 },
                  { service: 'Prayer Generation', region: 'us-west-2', latency: '38ms', status: 'active', load: 95 },
                  { service: 'Reflection Engine', region: 'eu-west-1', latency: '52ms', status: 'active', load: 78 },
                  { service: 'Content Studio', region: 'cdn-global', latency: '18ms', status: 'active', load: 85 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <div>
                        <p className="text-white text-sm">{item.service}</p>
                        <p className="text-neutral-600 text-[10px] font-mono">{item.region}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-emerald-400 text-xs font-mono">{item.latency}</p>
                        <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                          <div className="h-full bg-purple-500/50 rounded-full transition-all" style={{ width: `${item.load}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Uptime Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-neutral-500 text-xs">Last 90 days uptime</span>
                <span className="text-emerald-400 text-sm font-mono font-bold">99.99%</span>
              </div>
            </div>

            {/* Right: Live Metrics + Support */}
            <div className="space-y-6">
              {/* Live Metrics Card */}
              <div className="glass-panel rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-6">
                  <Activity className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-white">Live Metrics</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Requests/sec', value: '2.4K', trend: '+12%' },
                    { label: 'Avg Response', value: '34ms', trend: '-8%' },
                    { label: 'Active Sessions', value: '156K', trend: '+24%' },
                  ].map((metric, i) => (
                    <div key={i} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-[10px] text-neutral-500 mb-1">{metric.label}</div>
                      <div className={`text-[10px] ${metric.trend.startsWith('+') ? 'text-emerald-400' : 'text-blue-400'}`}>
                        {metric.trend}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature Badges */}
                <div className="flex flex-wrap gap-2">
                  {['zk-Proofs', 'Auto-scale', 'Edge Compute', 'Multi-region'].map((badge, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-medium">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Support Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel rounded-xl p-4 border border-white/10 hover:border-purple-500/30 transition-all group">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                      <MessageSquare className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-white text-sm font-medium">Support</span>
                  </div>
                  <p className="text-neutral-500 text-xs mb-3">Need help with ORA™? Our team is here 24/7.</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-[10px]">support@soapbox.com</span>
                  </div>
                </div>

                <div className="glass-panel rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all group">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-white text-sm font-medium">Documentation</span>
                  </div>
                  <p className="text-neutral-500 text-xs mb-3">API docs, guides, and integration examples.</p>
                  <Link href="/help" className="text-blue-400 text-[10px] flex items-center gap-1 hover:text-blue-300 transition-colors">
                    View Docs <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Activity Log */}
              <div className="glass-panel rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-neutral-400">Live Logs</span>
                  <span className="text-[10px] text-neutral-600">View all</span>
                </div>
                <div className="space-y-2">
                  {[
                    { action: 'Scripture Analysis', id: 'req_8f2...', time: '12ms ago' },
                    { action: 'Prayer Generated', id: 'req_3a1...', time: '45ms ago' },
                    { action: 'Reflection Created', id: 'req_9c4...', time: '120ms ago' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between text-[10px] py-1.5 border-b border-white/5 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-purple-400 rounded-full" />
                        <span className="text-white">{log.action}</span>
                        <span className="text-neutral-600 font-mono">{log.id}</span>
                      </div>
                      <span className="text-neutral-500">{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
              Lives Transformed
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Hear from believers who have deepened their faith with ORA™.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => {
              const staggerClass = `stagger-${i + 1}`;
              return (
                <SpotlightCard
                  key={i}
                  className={`p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all group animate-fade-slide-in ${staggerClass}`}
                  spotlightColor="rgba(168, 85, 247, 0.1)"
                >
                  <Quote className="w-8 h-8 text-purple-500/30 mb-4" />
                  <p className="text-white/90 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 text-sm font-bold">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{testimonial.author}</p>
                      <p className="text-neutral-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20 animate-breathe">
            <Sparkles className="w-10 h-10 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
            Ready to Deepen Your Faith?
          </h2>
          <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
            Join thousands of believers who are experiencing Scripture in a whole new way with ORA™.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-started">
              <ShinyButton>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-[18px] h-[18px]" />
                  Start Free Today
                </span>
              </ShinyButton>
            </Link>
            <Link href="/pricing" className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all">
              View Pricing
            </Link>
          </div>
          <p className="text-xs text-neutral-500 mt-6">
            250 free Candles included • No credit card required
          </p>
        </div>
      </section>

    </>
  );
}
