'use client';

import { Heart, Shield, Users, Sparkles, Globe, Flame, Church, Cross, HandHeart } from 'lucide-react';
import { ChristianCross } from '@/components/icons/ChristianCross';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

const historyTimeline = [
  {
    year: '2012',
    title: 'The Beginning',
    description: 'TIEV was founded with a vision to reach the unreached in the 10/40 window, starting with a small team in Iraq.',
  },
  {
    year: '2015',
    title: 'Expansion to Pakistan',
    description: 'Launched brick-kiln redemption projects, providing freedom and education to enslaved families.',
  },
  {
    year: '2018',
    title: 'Philippines Partnership',
    description: 'Began leadership training and church strengthening initiatives across the islands.',
  },
  {
    year: '2022',
    title: 'Japan Initiative',
    description: 'Established bridge-building ministries to reach one of the most secular nations on earth.',
  },
];

const coreValues = [
  {
    icon: Flame,
    title: 'Humility & Glory',
    description: 'The "cracked earthen vessel" symbolizes our human weakness and brokenness, yet it is filled with divine purpose. We are imperfect containers displaying His perfect power.',
  },
  {
    icon: Globe,
    title: 'Global Mission',
    description: 'We carry a mission to the nations. Every tribe and tongue is represented in the Father\'s heart, and we go to discover that treasure in them.',
  },
  {
    icon: ChristianCross,
    title: 'Divine Presence',
    description: 'Our identity is found in being vessels for the presence of God. We carry His light into the darkest places, letting His glory shine through our cracks.',
  },
];

const leadershipTeam = [
  {
    name: 'David & Sarah',
    role: 'Founders & Directors',
    bio: 'Serving in the Middle East since 2012, leading the vision of TIEV.',
  },
  {
    name: 'James Chen',
    role: 'Field Director - Asia',
    bio: 'Overseeing church planting and leadership training across the Philippines and Japan.',
  },
  {
    name: 'Amara Hussein',
    role: 'Operations Manager',
    bio: 'Coordinating logistics and partner relations to ensure mission effectiveness.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-teal/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-teal/10 bg-brand-teal/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-medium text-brand-teal">
                  Who We Are
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
                Treasures in<br />Earthen Vessels
              </h1>
              <p className="text-xl text-neutral-400 max-w-xl animate-fade-slide-in stagger-2 italic">
                "We have this treasure in jars of clay to show that this all-surpassing power is from God and not from us."
                <br />
                <span className="text-sm font-medium not-italic text-brand-teal mt-2 block">— 2 Corinthians 4:7</span>
              </p>
            </div>

            {/* Right: Abstract Globe Visual */}
            <div className="relative flex items-center justify-center animate-fade-slide-in stagger-3">
              <div className="relative">
                {/* Central Globe */}
                <div className="relative">
                  {/* Orbit rings */}
                  <div className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <div className="absolute inset-0 rounded-full border border-brand-teal/20 animate-spin-slow" style={{ animationDuration: '30s' }} />
                    <div className="absolute inset-6 rounded-full border border-dashed border-brand-teal/10" />
                    <div className="absolute inset-12 rounded-full border border-brand-teal/20 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                  </div>

                  {/* Globe center */}
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-brand-teal/20 via-emerald-500/10 to-transparent border border-brand-teal/30 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(0,131,130,0.5)] animate-breathe">
                    <Globe className="w-16 h-16 text-brand-teal" />
                  </div>

                  {/* Orbiting icons - Linked */}
                  <Link href="/donate" className="absolute -top-8 left-1/2 -translate-x-1/2 hover:scale-110 transition-transform cursor-pointer z-20">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center animate-float">
                      <Heart className="w-5 h-5 text-brand-teal" />
                    </div>
                  </Link>
                  <Link href="/projects" className="absolute bottom-4 -right-12 hover:scale-110 transition-transform cursor-pointer z-20">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '0.6s' }}>
                      <Users className="w-5 h-5 text-emerald-400" />
                    </div>
                  </Link>
                  <Link href="/contact" className="absolute bottom-4 -left-12 hover:scale-110 transition-transform cursor-pointer z-20">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center animate-float" style={{ animationDelay: '1.2s' }}>
                      <HandHeart className="w-5 h-5 text-teal-400" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
              Our Story
            </h2>
            <div className="prose prose-invert mx-auto text-lg text-neutral-400 leading-relaxed">
              <p className="mb-6">
                Treasures in Earthen Vessels (TIEV) began in 2012 with a simple but profound conviction: that the Gospel is the greatest treasure entrusted to ordinary people.
              </p>
              <p className="mb-6">
                What started as a small team serving in Northern Iraq has grown into a global family of missionaries, local partners, and supporters united by a single purpose—to see God's glory revealed in the darkest places.
              </p>
              <p>
                We believe that true transformation happens through long-term presence. We don't just visit; we stay. We build relationships, learn languages, and walk alongside communities as they discover the hope found in Jesus.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {historyTimeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Vertical Line for mobile */}
                <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10 md:hidden" />

                <SpotlightCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row gap-6 md:items-center group hover:border-brand-teal/30 transition-all">
                  <div className="text-brand-teal font-mono text-xl font-bold md:w-24 shrink-0">{item.year}</div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              The principles that guide every decision, project, and partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <SpotlightCard
                key={i}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center group hover:border-brand-teal/30 transition-all"
                spotlightColor="emerald"
                variant="matte"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-6 border border-brand-teal/20 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{value.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith Section (New Phase 12) */}
      <section className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
              What We Believe
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Our foundation is built on the unshakeable truth of Scripture.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { title: 'The Bible', content: 'We believe the Bible is the inspired, only infallible, authoritative Word of God.' },
              { title: 'The Trinity', content: 'We believe that there is one God, eternally existent in three persons: Father, Son, and Holy Spirit.' },
              { title: 'Salvation', content: 'We believe specifically in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and in His personal return in power and glory.' },
              { title: 'The Great Commission', content: 'We believe in the present ministry of the Holy Spirit by whose indwelling the Christian is enabled to live a godly life and empower them for the mission of reaching the nations.' }
            ].map((item, i) => (
              <details key={i} className="group border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden open:bg-white/[0.04] transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg font-medium text-white group-hover:text-brand-teal transition-colors">{item.title}</span>
                  <span className="text-neutral-500 transition-transform group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed animate-fade-slide-in">
                  {item.content}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
              Leadership Team
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Faithful servants dedicated to the vision of seeing nations transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <Users className="w-16 h-16 text-white/10 group-hover:text-brand-teal/20 transition-colors duration-500" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-brand-teal text-sm font-medium uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed px-2">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
            Join Our Team
          </h2>
          <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-lg">
            Whether you are called to go, to give, or to pray, there is a place for you in this mission. Let's build the Kingdom together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <ShinyButton>
                Get Involved
              </ShinyButton>
            </Link>
            <Link href="/donate" className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all">
              Support Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
