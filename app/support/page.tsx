'use client';

import Link from 'next/link';
import { Headphones, Mail, MessageSquare, Phone, BookOpen, Users, Calendar, Settings, Lock, ShieldCheck, Heart, ArrowRight, Clock, Sparkles, CircleCheck, Github, FileText, ExternalLink } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';

const contactMethods = [
  { title: 'Email Support', icon: Mail, description: 'support@soapboxsuperapp.com', note: 'Replies within 1 business day', color: 'amber' },
  { title: 'Live Chat', icon: MessageSquare, description: 'In-app chat support', note: 'Mon–Fri, 9am–6pm PT', color: 'purple' },
  { title: 'Schedule a Call', icon: Phone, description: 'Book Support Call', note: 'Ministry tech advisors', color: 'blue' },
];

const helpTopics = [
  { title: 'Prayer Wall & Prayer Circles', icon: Heart, href: '/help#prayer-wall' },
  { title: 'S.O.A.P. Journaling', icon: BookOpen, href: '/help#journaling' },
  { title: 'Event Scheduling & RSVPs', icon: Calendar, href: '/help#events' },
  { title: 'Church Admin Dashboard', icon: Settings, href: '/help#admin-dashboard' },
];

const popularGuides = [
  'Getting Started with Your Church Account',
  'How to Invite and Manage Church Staff',
  'Understanding Privacy & Visibility Settings',
  'Sharing Devotionals on Social Feed',
  'Setting Expiration Dates for Posts',
  'Account & Billing Management',
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-purple-200/80">
                  Support Center
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                We're Here to Help
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2">
                Get the support you need to help your ministry thrive with technology that's simple, secure, and sacred.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 animate-fade-slide-in stagger-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-neutral-400">24hr response time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span className="text-sm text-neutral-400">98% satisfaction</span>
                </div>
              </div>
            </div>

            {/* Right: Animated Support Visual */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              <div className="relative">
                {/* Rotating rings */}
                <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
                  <div className="absolute inset-8 rounded-full border border-dashed border-purple-500/10" />
                  <div className="absolute inset-16 rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                </div>

                {/* Main support icon */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent border border-purple-500/30 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(168,85,247,0.5)] animate-breathe">
                  <Headphones className="w-16 h-16 text-purple-400" />
                </div>

                {/* Orbiting icons */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-float">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <MessageSquare className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                    <Heart className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Support</h2>
            <p className="text-neutral-400">Choose how you'd like to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => {
              const colorClasses: Record<string, { border: string; bg: string; text: string; spotlight: string }> = {
                amber: { border: 'border-amber-500/20 hover:border-amber-500/40', bg: 'bg-amber-500/10', text: 'text-amber-400', spotlight: 'rgba(245, 158, 11, 0.1)' },
                purple: { border: 'border-purple-500/20 hover:border-purple-500/40', bg: 'bg-purple-500/10', text: 'text-purple-400', spotlight: 'rgba(168, 85, 247, 0.1)' },
                blue: { border: 'border-blue-500/20 hover:border-blue-500/40', bg: 'bg-blue-500/10', text: 'text-blue-400', spotlight: 'rgba(59, 130, 246, 0.1)' },
              };
              const colors = colorClasses[method.color];

              return (
                <SpotlightCard
                  key={i}
                  className={`p-8 rounded-2xl border ${colors.border} bg-white/[0.02] text-center transition-all group`}
                  spotlightColor={colors.spotlight}
                >
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className={`${colors.text} font-medium mb-1`}>{method.description}</p>
                  <p className="text-sm text-neutral-500">{method.note}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Support Dashboard - Nebula Style */}
      <section className="py-24 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Automation/License Support Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
              <div className="p-6 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Priority Support</h3>
                    <p className="text-xs text-neutral-500">For churches and ministry teams</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  As a SoapBox community member requiring dedicated assistance, please fill out a support request form or email us directly.
                </p>
              </div>
              <div className="p-6 bg-white/[0.01]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span className="text-white text-sm">support@soapboxsuperapp.com</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-medium">active</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500/20 transition-colors flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  Open Support Request
                </button>
              </div>
            </div>

            {/* Right: Documentation/Access Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10">
              <div className="p-6 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Documentation & Resources</h3>
                    <p className="text-xs text-neutral-500">Guides, tutorials, and API docs</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  With your SoapBox account, you receive access to comprehensive documentation, video tutorials, and community resources.
                </p>
              </div>
              <div className="p-6 bg-white/[0.01]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-purple-400" />
                    <span className="text-neutral-400 text-sm">Community resources & integrations</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/help" className="py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium hover:bg-purple-500/20 transition-colors flex items-center justify-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Help Center
                  </Link>
                  <Link href="/faq" className="py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Support Status Bar */}
          <div className="mt-6 glass-panel rounded-xl p-4 border border-white/10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CircleCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-white text-sm font-medium">Support Status</span>
                <span className="text-emerald-400 text-sm hidden sm:inline">All channels operational</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-xs">Avg Response</span>
                  <span className="text-white text-xs font-mono">&lt;2hrs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-xs">Satisfaction</span>
                  <span className="text-emerald-400 text-xs font-mono">98.5%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-xs">Open Tickets</span>
                  <span className="text-amber-400 text-xs font-mono">24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help With */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Need Help With...</h2>
            <p className="text-neutral-400">Quick access to common topics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {helpTopics.map((topic, i) => (
              <Link
                key={i}
                href={topic.href}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-amber-500/30 hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <topic.icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-neutral-300 group-hover:text-white transition-colors">{topic.title}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/help">
              <ShinyButton>
                <BookOpen className="w-4 h-4 mr-2" />
                Visit Help Center
              </ShinyButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Popular Guides</h2>
            <p className="text-neutral-400">Most helpful articles for getting started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularGuides.map((guide, i) => (
              <Link
                key={i}
                href={`/help#${guide.toLowerCase().replace(/\s/g, '-')}`}
                className="flex items-center justify-between p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all group"
              >
                <span className="text-neutral-300 group-hover:text-white transition-colors">{guide}</span>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Security & Privacy</h2>
            <p className="text-neutral-400">Your trust is sacred to us</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/privacy#data-security"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Lock className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-neutral-300 group-hover:text-white transition-colors">How We Keep Your Data Secure</span>
            </Link>
            <Link
              href="/privacy#privacy-controls"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-neutral-300 group-hover:text-white transition-colors">Privacy Controls for Churches & Members</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Join the SoapBox Community</h2>
            <p className="text-neutral-400">Connect with other church leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Church Leader Forum', desc: 'Share insights and best practices', color: 'amber' },
              { title: 'Monthly Tips & Tools', desc: 'Stay inspired and informed', color: 'purple' },
              { title: 'Suggest a Feature', desc: 'Help us grow and improve', color: 'blue' },
            ].map((item, i) => {
              const colorClasses: Record<string, string> = {
                amber: 'border-amber-500/20 hover:border-amber-500/40',
                purple: 'border-purple-500/20 hover:border-purple-500/40',
                blue: 'border-blue-500/20 hover:border-blue-500/40',
              };

              return (
                <SpotlightCard
                  key={i}
                  className={`p-6 rounded-2xl border ${colorClasses[item.color]} bg-white/[0.02] text-center transition-all`}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[10px] uppercase tracking-widest font-medium text-rose-200/80">
              Let's Walk Together
            </span>
          </div>
          <h2 className="text-3xl font-semibold text-white mb-4">Still Stuck? Let's Pray and Proceed Together.</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Sometimes a little faith (and help) goes a long way. If you're feeling overwhelmed, we're here to walk with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ShinyButton>
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </ShinyButton>
            <Link href="/contact" className="px-6 py-3 border border-rose-500/30 text-rose-400 font-medium rounded-full hover:bg-rose-500/10 transition-colors flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2" />
              Submit Prayer Request
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
