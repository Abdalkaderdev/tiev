'use client';

import Link from 'next/link';
import { HelpCircle, Search, BookOpen, Users, Church, Heart, Mail, MessageSquare, ChevronRight, Sparkles, Settings, Calendar } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';

const helpCategories = [
  { title: 'Getting Started', icon: Sparkles, color: 'amber', items: ['What is SoapBox Super App?', 'How to Create a Church or Join One', 'How to Create a Ministry', 'Ministry Approval Process', 'Roles Explained', 'How to Invite Church Members'] },
  { title: 'Features', icon: Settings, color: 'purple', items: ['Prayer Wall', 'S.O.A.P. Journaling', 'Candle Token System', 'ORA™ AI Assistant', 'Event Scheduling', 'Bible Study Groups'] },
  { title: 'Community', icon: Users, color: 'blue', items: ['Managing Members', 'Privacy Settings', 'Moderation Tools', 'Group Messaging', 'Announcements'] },
  { title: 'Events', icon: Calendar, color: 'emerald', items: ['Creating Events', 'RSVPs & Attendance', 'Recurring Events', 'Event Notifications', 'Calendar Integration'] },
];

export default function HelpPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-amber-200/80">
                  Help Center
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                How Can We Help?
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2">
                Find answers, tutorials, and guides to help you make the most of SoapBox Super App.
              </p>

              {/* Search Bar */}
              <div className="mt-8 animate-fade-slide-in stagger-3">
                <div className="relative max-w-md lg:max-w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                  <input
                    type="text"
                    placeholder="Search help articles..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Right: Animated Help Visual */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              <div className="relative">
                {/* Rotating rings */}
                <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-spin-slow" style={{ animationDuration: '25s' }} />
                  <div className="absolute inset-8 rounded-full border border-dashed border-amber-500/10" />
                  <div className="absolute inset-16 rounded-full border border-amber-500/20 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                </div>

                {/* Main help icon */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(245,158,11,0.5)] animate-breathe">
                  <HelpCircle className="w-16 h-16 text-amber-400" />
                </div>

                {/* Orbiting icons */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center animate-float">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                    <Church className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Browse by Category</h2>
            <p className="text-neutral-400">Find the help you need organized by topic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, i) => {
              const colorClasses: Record<string, { border: string; bg: string; text: string; spotlight: string }> = {
                amber: { border: 'border-amber-500/20 hover:border-amber-500/40', bg: 'bg-amber-500/10', text: 'text-amber-400', spotlight: 'rgba(245, 158, 11, 0.1)' },
                purple: { border: 'border-purple-500/20 hover:border-purple-500/40', bg: 'bg-purple-500/10', text: 'text-purple-400', spotlight: 'rgba(168, 85, 247, 0.1)' },
                blue: { border: 'border-blue-500/20 hover:border-blue-500/40', bg: 'bg-blue-500/10', text: 'text-blue-400', spotlight: 'rgba(59, 130, 246, 0.1)' },
                emerald: { border: 'border-emerald-500/20 hover:border-emerald-500/40', bg: 'bg-emerald-500/10', text: 'text-emerald-400', spotlight: 'rgba(16, 185, 129, 0.1)' },
              };
              const colors = colorClasses[category.color];

              return (
                <SpotlightCard
                  key={i}
                  className={`p-6 rounded-2xl border ${colors.border} bg-white/[0.02] transition-all group`}
                  spotlightColor={colors.spotlight}
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.slice(0, 4).map((item, j) => (
                      <li key={j}>
                        <Link href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group/item">
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          <span>{item}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {category.items.length > 4 && (
                    <p className={`text-xs ${colors.text} mt-3`}>+{category.items.length - 4} more articles</p>
                  )}
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <SpotlightCard className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02]" spotlightColor="rgba(245, 158, 11, 0.1)">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-medium text-amber-400">
                Featured Guide
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">How to Create a Ministry Under Your Church</h3>
            <p className="text-neutral-400 mb-6">
              Ministries are specialized groups within your church (Youth Ministry, Women's Ministry, Music Ministry, etc.). Learn how to set up and manage ministries effectively.
            </p>

            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-amber-400">📋</span> Step-by-Step Process
            </h4>
            <ol className="space-y-4 mb-8">
              {[
                { step: 'Navigate to Communities → Create New Community', desc: 'Access the community creation page from your dashboard' },
                { step: "Select 'Ministry' as the Community Type", desc: 'Choose the ministry option from the available community types' },
                { step: 'Select Parent Church', desc: "The dropdown shows all churches you're a member of" },
                { step: 'Fill in ministry details', desc: 'Name, Ministry Type, Privacy Settings, Category, and Admin email' },
                { step: 'Submit for approval', desc: 'Church administrators will review your request' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-semibold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.step}</p>
                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-emerald-400 text-sm">
                <strong>Tip:</strong> New ministries require approval from your parent church administrators before becoming active. You'll receive email notifications when your ministry is approved.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
            <Heart className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-[10px] uppercase tracking-widest font-medium text-purple-200/80">
              We're Here For You
            </span>
          </div>
          <h2 className="text-3xl font-semibold text-white mb-4">Still Need Help?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you succeed with SoapBox Super App.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <ShinyButton>
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </ShinyButton>
            </Link>
            <button className="px-6 py-3 border border-purple-500/30 text-purple-400 font-medium rounded-full hover:bg-purple-500/10 transition-colors flex items-center justify-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
