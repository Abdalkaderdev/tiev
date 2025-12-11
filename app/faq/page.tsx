'use client';

import { useState } from 'react';
import { Search, ChevronDown, ChevronRight, HelpCircle, Mail, MessageSquare, ArrowLeft } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'features', label: 'Features' },
  { id: 'churches', label: 'Churches' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'privacy', label: 'Privacy & Safety' },
  { id: 'technical', label: 'Technical' },
];

const faqs = [
  {
    category: 'general',
    question: 'What is the SoapBox Super App?',
    answer: 'SoapBox Super App is an all-in-one digital ministry platform designed exclusively for faith communities. It brings together prayer walls, Bible study tools, event management, community chat, volunteer coordination, and giving—all in one secure, faith-first application.',
  },
  {
    category: 'general',
    question: 'Who is the app designed for?',
    answer: 'SoapBox is designed for churches of all sizes, ministry leaders, pastors, church staff, volunteers, and individual believers seeking to grow in faith and connect with their spiritual community.',
  },
  {
    category: 'general',
    question: "Can I use it even if my church hasn't joined?",
    answer: "Yes! You can create a personal account and access individual features like Bible reading plans, S.O.A.P. journaling, and prayer requests. You can also invite your church leaders to join and set up your church's community.",
  },
  {
    category: 'general',
    question: 'How do I join a church on the app?',
    answer: 'After creating your account, you can search for your church by name or enter an invite code provided by your church. Once you find your church, simply request to join and a church admin will approve your membership.',
  },
  {
    category: 'general',
    question: 'How is SoapBox different from regular social media?',
    answer: "Unlike mainstream social media, SoapBox is built exclusively for faith communities with privacy-first design. There's no ad tracking, no data selling, and no algorithm manipulation. Every feature is designed to support spiritual growth and genuine community connection.",
  },
  {
    category: 'features',
    question: 'Can I connect with people outside my church?',
    answer: 'Yes, SoapBox allows you to connect with believers from other communities while maintaining appropriate privacy boundaries. You can follow other users, share prayer requests publicly or privately, and participate in inter-church events.',
  },
  {
    category: 'technical',
    question: 'What if I need help using the app?',
    answer: 'We offer multiple support channels: in-app help guides, email support at support@soapboxsuperapp.com, live chat during business hours (9am-5pm PT weekdays), and a comprehensive Help Center with tutorials and FAQs.',
  },
  {
    category: 'general',
    question: "Can I use SoapBox if I'm not a church leader?",
    answer: 'Absolutely! SoapBox is designed for everyone in the faith community—from senior pastors to new believers. Individual members can access personal devotional tools, join groups, participate in discussions, and grow in their faith journey.',
  },
  {
    category: 'general',
    question: 'What makes SoapBox different from other church apps?',
    answer: "SoapBox is purpose-built for faith communities, not adapted from secular platforms. We offer AI-powered spiritual tools through ORA™, privacy-first data handling, comprehensive ministry management, and a reward system (Candles) that encourages meaningful engagement.",
  },
  {
    category: 'technical',
    question: 'How do I sign up for SoapBox?',
    answer: 'Visit soapboxsuperapp.com or download our mobile app. You can sign up with your email address or use Google login for faster access. No credit card is required to start with our free Disciple plan.',
  },
  {
    category: 'technical',
    question: 'How does Google login work?',
    answer: 'Google login allows you to sign in securely using your existing Google account. We only access your basic profile information (name and email) to create your account. Your Google password is never shared with us.',
  },
  {
    category: 'technical',
    question: 'What are the username requirements?',
    answer: 'Usernames must be 3-30 characters long, can include letters, numbers, and underscores, and must be unique. Choose something that represents you well in the faith community.',
  },
  {
    category: 'technical',
    question: 'What happens during the onboarding process?',
    answer: "After signing up, you'll complete a brief onboarding that includes setting up your profile, taking an optional Spiritual Gifts Assessment, joining or creating a church community, and customizing your notification preferences.",
  },
  {
    category: 'features',
    question: 'What is the Prayer Wall?',
    answer: 'The Prayer Wall is a dedicated space where community members can share prayer requests and receive support from fellow believers. Requests can be public or private, and members can respond with prayers, encouragement, and "Amen" reactions.',
  },
  {
    category: 'features',
    question: 'What is S.O.A.P. journaling?',
    answer: 'S.O.A.P. stands for Scripture, Observation, Application, and Prayer. It\'s a structured Bible study method that helps you engage deeply with God\'s Word. Our app provides guided prompts and ORA™-powered insights to enhance your study.',
  },
  {
    category: 'features',
    question: 'What is ORA™?',
    answer: 'ORA™ (Observe, Reflect, Act) is our AI spiritual guide that provides personalized insights, Scripture commentary, prayer guidance, and content creation tools. ORA™ is designed with spiritual discernment to support—not replace—your faith journey.',
  },
  {
    category: 'pricing',
    question: 'What are Candles?',
    answer: 'Candles are spiritual engagement rewards and ORA™ feature credits. You earn them through prayer, Bible study, community participation, and spiritual growth activities. Use them to unlock premium AI features and tools.',
  },
  {
    category: 'pricing',
    question: 'Is SoapBox free to use?',
    answer: 'Yes! Our Disciple plan is completely free and includes essential features like S.O.A.P. journaling, Prayer Wall access, daily Bible reading, and 250 Candles per month. Paid plans offer additional features and more Candles.',
  },
  {
    category: 'pricing',
    question: 'What are the different pricing tiers?',
    answer: 'We offer Individual plans (Disciple - Free, Servant - $10/mo, Torchbearer - $20/mo) and Church plans (Shepherd - Free, Beacon - $100/mo, Kingdom - $200/mo). Each tier includes increasing features, storage, and Candles.',
  },
  {
    category: 'churches',
    question: 'How do I set up my church on SoapBox?',
    answer: "Create an account, then select 'Create Church' from the menu. You'll enter your church details, upload a logo, and configure your community settings. You can then invite members and set up ministries, groups, and events.",
  },
  {
    category: 'churches',
    question: 'Can I manage multiple campuses?',
    answer: 'Yes! Our Beacon plan supports up to 5 campuses, and Kingdom plan supports up to 10. Each campus can have its own events, groups, and staff while sharing the main church identity and resources.',
  },
  {
    category: 'churches',
    question: 'How does volunteer management work?',
    answer: 'Our Volunteer Hub uses smart matching to connect members with service opportunities based on their spiritual gifts, interests, and availability. Leaders can schedule volunteers, send reminders, and track participation.',
  },
  {
    category: 'privacy',
    question: 'Is my data safe on SoapBox?',
    answer: "Absolutely. We use bank-level encryption, never sell your data to third parties, and don't use ad tracking. Your spiritual journey and personal information are treated with sacred care.",
  },
  {
    category: 'privacy',
    question: 'Who can see my prayer requests?',
    answer: "You control the visibility of every prayer request. Choose 'Public' to share with your community, 'Church Only' to limit to your church members, or 'Private' to share only with specific people or church leaders.",
  },
  {
    category: 'privacy',
    question: 'Can I delete my account?',
    answer: 'Yes, you can delete your account at any time from your profile settings. This will permanently remove your personal data from our servers in accordance with our privacy policy.',
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Back Link */}
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6">
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
                Frequently Asked<br />
                <span className="text-amber-400">Questions</span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2">
                Find answers to common questions about SoapBox Super App
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start animate-fade-slide-in stagger-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{faqs.length}+</div>
                  <div className="text-xs text-neutral-500">Questions Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{categories.length - 1}</div>
                  <div className="text-xs text-neutral-500">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">24/7</div>
                  <div className="text-xs text-neutral-500">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right: Animated Visual */}
            <div className="relative flex items-center justify-center min-h-[350px] hidden lg:flex">
              {/* Background glow */}
              <div className="absolute w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Orbiting question marks */}
              <div className="absolute w-64 h-64 animate-spin-slow" style={{ animationDuration: '20s' }}>
                {['?', '?', '?', '?'].map((q, i) => (
                  <div
                    key={i}
                    className="absolute w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400/60 font-bold text-lg"
                    style={{
                      top: i === 0 ? '0' : i === 2 ? '100%' : '50%',
                      left: i === 1 ? '100%' : i === 3 ? '0' : '50%',
                      transform: `translate(-50%, -50%)`,
                    }}
                  >
                    {q}
                  </div>
                ))}
              </div>

              {/* Middle ring */}
              <div className="absolute w-48 h-48 border border-amber-500/20 border-dashed rounded-full animate-spin-slow-reverse" />

              {/* Center icon */}
              <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.2)] animate-breathe">
                <HelpCircle className="w-12 h-12 text-amber-400" />
              </div>

              {/* Floating category badges */}
              <div className="absolute top-4 right-8 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs animate-float" style={{ animationDelay: '0s' }}>
                Features
              </div>
              <div className="absolute bottom-8 left-4 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs animate-float" style={{ animationDelay: '1s' }}>
                Pricing
              </div>
              <div className="absolute top-1/2 right-0 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs animate-float" style={{ animationDelay: '2s' }}>
                Privacy
              </div>
              <div className="absolute bottom-4 right-12 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs animate-float" style={{ animationDelay: '0.5s' }}>
                Churches
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-black'
                    : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all hover:border-white/20"
              >
                <button
                  onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  {expandedQuestion === index ? (
                    <ChevronDown className="w-5 h-5 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-neutral-500 shrink-0" />
                  )}
                </button>
                {expandedQuestion === index && (
                  <div className="px-6 pb-5">
                    <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Still Need Help?</h2>
          <p className="text-neutral-400 mb-10">
            Can't find what you're looking for? Our support team is here to help!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-amber-500/30 transition-all group animate-fade-slide-in stagger-1" spotlightColor="rgba(245, 158, 11, 0.15)">
              <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 border border-amber-500/20 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Contact Support</h3>
              <p className="text-neutral-500 text-sm">Get help from our team</p>
            </SpotlightCard>

            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-blue-500/30 transition-all group animate-fade-slide-in stagger-2" spotlightColor="rgba(59, 130, 246, 0.15)">
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <a href="mailto:support@soapboxsuperapp.com" className="text-amber-400 text-sm hover:text-amber-300 transition-colors">
                support@soapboxsuperapp.com
              </a>
            </SpotlightCard>

            <SpotlightCard className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center hover:border-emerald-500/30 transition-all group animate-fade-slide-in stagger-3" spotlightColor="rgba(16, 185, 129, 0.15)">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Live Chat</h3>
              <p className="text-neutral-500 text-sm">Weekdays 9am-5pm PT</p>
            </SpotlightCard>
          </div>
        </div>
      </section>

    </>
  );
}
