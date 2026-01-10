'use client';

import { useState } from 'react';
import { Mail, MapPin, Heart } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  return (
    <>
      {/* Contact Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 radial-glow-teal -z-10" />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="text-brand-teal text-sm font-mono tracking-wider uppercase mb-4 block animate-fade-slide-in">Get In Touch</span>
          <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-6 animate-fade-slide-in stagger-1">
            Contact Us
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-slide-in stagger-2">
            Have questions? Want to learn more about partnering with TIEV?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 outline-none transition-colors"
                  >
                    <option value="" className="bg-neutral-900">Select a topic</option>
                    <option value="general" className="bg-neutral-900">General Inquiry</option>
                    <option value="giving" className="bg-neutral-900">Giving & Donations</option>
                    <option value="partnership" className="bg-neutral-900">Partnership Opportunities</option>
                    <option value="prayer" className="bg-neutral-900">Prayer Request</option>
                    <option value="missions" className="bg-neutral-900">Short-Term Missions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal/50 outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full px-6 py-3 rounded-lg bg-brand-teal text-white font-semibold hover:bg-brand-teal/80 transition-colors"
                >
                  Send Message
                </button>
                <p className="text-white/40 text-sm text-center">
                  We typically respond within 2-3 business days.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-8">Other Ways to Connect</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-brand-teal" />
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                  </div>
                  <p className="text-white/60">info@tiev.global</p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-brand-teal" />
                    <h3 className="text-lg font-semibold text-white">Mailing Address</h3>
                  </div>
                  <p className="text-white/60">
                    Treasures in Earthen Vessels<br />
                    PO Box 15579<br />
                    Colorado Springs, CO 80935
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-5 h-5 text-brand-teal" />
                    <h3 className="text-lg font-semibold text-white">Prayer Requests</h3>
                  </div>
                  <p className="text-white/60">
                    We would be honored to pray for you. Share your request
                    through the form or email us directly.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
