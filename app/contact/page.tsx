'use client';

import { Mail, MessageSquare, Phone, MapPin, Clock, HelpCircle, Calendar, Building, Heart, ExternalLink, Send, Headphones, Users } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/10 bg-emerald-500/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-emerald-200/80">
                  Get In Touch
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                Let's Grow Your Ministry — Together
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2">
                Get answers, request support, or explore how SoapBox can serve your church.
              </p>
            </div>

            {/* Right: Animated Contact Visual */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              <div className="relative">
                {/* Central Message Bubble */}
                <div className="relative">
                  {/* Expanding rings */}
                  <div className="absolute inset-0 w-56 h-56 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="absolute inset-0 rounded-full border border-emerald-500/10 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute inset-4 rounded-full border border-emerald-500/15 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                    <div className="absolute inset-8 rounded-full border border-emerald-500/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }} />
                  </div>

                  {/* Main bubble */}
                  <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent border border-emerald-500/30 flex items-center justify-center shadow-[0_0_60px_-15px_rgba(16,185,129,0.5)] animate-breathe rotate-12">
                    <Send className="w-12 h-12 text-emerald-400 -rotate-12" />
                  </div>

                  {/* Floating contact icons */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center animate-float shadow-lg">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-10 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '0.5s' }}>
                      <MessageSquare className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                      <Headphones className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 -left-10 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1.5s' }}>
                      <Heart className="w-6 h-6 text-rose-400" />
                    </div>
                  </div>

                  {/* Small accent dots */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-emerald-500/50 animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-blue-500/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-amber-500/50 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-white mb-12 text-center">Contact Methods</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Support & Technical Help */}
            <SpotlightCard className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all group animate-fade-slide-in stagger-1" spotlightColor="rgba(59, 130, 246, 0.15)">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Support & Technical Help</h3>
              <p className="text-neutral-500 text-sm mb-6">Need help using the app or reporting an issue?</p>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Email Support</div>
                  <a href="mailto:support@soapboxsuperapp.com" className="text-amber-400 hover:text-amber-300 transition-colors text-sm">
                    support@soapboxsuperapp.com
                  </a>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Live Chat</div>
                  <p className="text-neutral-300 text-sm">Weekdays 9am–5pm PT</p>
                  <p className="text-neutral-500 text-xs">(bottom right corner of screen)</p>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Help Center</div>
                  <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-1">
                    Visit Help Docs <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </SpotlightCard>

            {/* Church Partnerships & Demos */}
            <SpotlightCard className="p-8 rounded-3xl border border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40 transition-all group animate-fade-slide-in stagger-2" spotlightColor="rgba(245, 158, 11, 0.15)">
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                  <Calendar className="w-7 h-7 text-amber-500" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                  </span>
                  Recommended
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Church Partnerships & Demos</h3>
              <p className="text-neutral-500 text-sm mb-6">Interested in bringing SoapBox Super App to your church or ministry?</p>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Schedule a Demo</div>
                  <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-1">
                    Book a Time <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Talk to Sales</div>
                  <a href="tel:+18053422940" className="text-neutral-300 hover:text-white transition-colors text-sm block">
                    (805) 342-2940
                  </a>
                  <a href="mailto:sales@soapboxsuperapp.com" className="text-amber-400 hover:text-amber-300 transition-colors text-sm">
                    sales@soapboxsuperapp.com
                  </a>
                </div>
              </div>
            </SpotlightCard>

            {/* General Inquiries */}
            <SpotlightCard className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all group animate-fade-slide-in stagger-3" spotlightColor="rgba(168, 85, 247, 0.15)">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
              <p className="text-neutral-500 text-sm mb-6">For press, partnerships, or anything else:</p>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">General Email</div>
                  <a href="mailto:hello@soapboxsuperapp.com" className="text-amber-400 hover:text-amber-300 transition-colors text-sm">
                    hello@soapboxsuperapp.com
                  </a>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Mailing Address</div>
                  <p className="text-neutral-300 text-sm">
                    SoapBox Super App<br />
                    1130 E. Clark Street, #150-204<br />
                    Orcutt, CA 93455<br />
                    USA
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Send Us a Message</h2>
            <p className="text-neutral-400">We'd love to hear from you and support your ministry journey.</p>
          </div>

          <div className="glass-panel rounded-3xl p-8 md:p-10">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Name <span className="text-amber-500">*</span></label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Email <span className="text-amber-500">*</span></label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Message <span className="text-amber-500">*</span></label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                  placeholder="How can we help you and your ministry?"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-3 text-neutral-400 text-sm cursor-pointer">
                  <input type="checkbox" className="rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500/50" />
                  <span>I am a church leader</span>
                </label>
                <p className="text-neutral-500 text-xs mt-1 ml-7">This helps us tailor our response to your ministry needs.</p>
              </div>
              <ShinyButton className="w-full justify-center">Send My Message</ShinyButton>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Find answers to common questions about SoapBox Super App features, pricing, church administration, technical support, and more in our comprehensive FAQ section.
          </p>
          <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors">
            View All Frequently Asked Questions
            <ExternalLink className="w-4 h-4" />
          </Link>
          <p className="text-neutral-500 text-sm mt-4">
            40+ questions covering features, pricing, technical support, and church administration
          </p>
        </div>
      </section>

      {/* Follow Us & Prayer */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Follow Us */}
            <SpotlightCard className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-blue-500/30 transition-all group animate-fade-slide-in stagger-1" spotlightColor="rgba(59, 130, 246, 0.15)">
              <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
              <p className="text-neutral-400 mb-6">Stay connected and inspired:</p>
              <div className="flex flex-wrap gap-3">
                {['Facebook', 'Instagram', 'Twitter / X', 'LinkedIn'].map((platform, i) => (
                  <a
                    key={i}
                    href="#"
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-neutral-300 text-sm hover:bg-white/10 hover:text-white hover:border-amber-500/30 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </SpotlightCard>

            {/* Need Prayer */}
            <SpotlightCard className="p-8 rounded-3xl border border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40 transition-all group animate-fade-slide-in stagger-2" spotlightColor="rgba(245, 158, 11, 0.15)">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Need Prayer?</h3>
              </div>
              <p className="text-neutral-400 mb-4">
                Visit our Prayer Wall and let our community lift you up in prayer.
              </p>
              <blockquote className="border-l-2 border-amber-500/50 pl-4 mb-6">
                <p className="text-neutral-300 italic text-sm mb-2">
                  "For where two or three gather in My name, there am I with them."
                </p>
                <cite className="text-amber-400 text-sm">— Matthew 18:20</cite>
              </blockquote>
              <Link href="#" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium">
                Visit Prayer Wall <ExternalLink className="w-4 h-4" />
              </Link>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
            Our Mission to Serve You
          </h2>
          <p className="text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our mission is to serve faith communities like yours with technology that empowers connection, digital discipleship, community prayer, and Gospel-centered growth. We're here to support your ministry every step of the way.
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
