'use client';

import { Heart, Home, BookOpen, Users, Shield, ArrowRight, MapPin, Flame } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

const ministryAreas = [
  {
    icon: Flame,
    title: 'Worship & Prayer Community',
    description: 'A growing community gathers weekly for worship, prayer, and discipleship — lifting up the name of Jesus in Northern Iraq.',
  },
  {
    icon: BookOpen,
    title: 'Discipleship & Local Training',
    description: 'We invest deeply in local believers — teaching Scripture, building leaders, and training disciples who will impact families, neighborhoods, and future generations.',
    points: ['Bible foundations', 'Leadership development', 'Prayer & pastoral care', 'Raising local leaders']
  },
  {
    icon: Users,
    title: 'Outreach, Projects & Creativity',
    description: 'We support practical projects and creative ideas that bless families, strengthen communities, and create opportunities to share hope.',
  },
];

export default function IraqProjectPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-teal/10 rounded-[100%] blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-teal/10 bg-brand-teal/5 mb-8 backdrop-blur-sm animate-fade-slide-in">
              <MapPin className="w-3 h-3 text-brand-teal" />
              <span className="text-[10px] uppercase tracking-widest font-medium text-teal-200/80">
                Iraq Initiative
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
              Iraq Initiative
            </h1>

            <p className="text-xl text-neutral-400 animate-fade-slide-in stagger-2 leading-relaxed">
              Here in the nation of Iraq, Treasure In Earthen Vessels (TIEV) is honored to partner with Restore Iraq. Encountering Jesus in the heart of the Middle East through worship, discipleship, community, and mission.
            </p>
          </div>
        </div>
      </section>

      {/* The Heart of the Middle East */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">The Heart of the Middle East</h2>
          <div className="prose prose-lg prose-invert text-neutral-400 leading-relaxed space-y-4">
            <p>
              At the core of everything we do is prayer and worship, discipleship, evangelism, and community—all carried by a team committed to exalting Jesus with unwavering obedience and boldness in this land.
            </p>
            <p>
              Currently, there are three church plants located in 3 major cities of Iraq, with a growing vision to expand across the entire Mesopotamian region.
            </p>
            <p>
              In Erbil, we serve alongside a House of Prayer, where weekly intercession and corporate gatherings are open to the public. These rhythms anchor us in God's presence and strengthen the spiritual foundation for everything else we do.
            </p>
            <p>
              We are also pioneering kingdom-minded business ventures that will provide employment for local believers and generate sustainable revenue for the ministry. In addition, we engage in projects that serve the poor, orphans, and widows. It is our heart to care for the least of these—to love those whom Jesus deeply cares for and to demonstrate the compassion of Christ through practical action.
            </p>
            <p>
              Each year, people from all over the world travel to Iraq to join our team for 50-hour and 100-hour gatherings of prayer, worship, and evangelism throughout the region. These holy, consecrated gatherings serve as fuel for the long-term work, igniting faith for what God desires to do in this nation.
            </p>
            <p>
              Our desire is to build an altar unto the Lord in Iraq, a land where many are bowing their knee to false gods. We are praying and proclaiming that the One True God, Jesus Christ, will be lifted high and draw all people to Himself. Iraq is rich with biblical history. Here lies the ancient city of Babylon—modern-day Baghdad—and the ancient city of Nineveh, now known as Mosul.
            </p>
            <p>
              It is a profound privilege to serve this nation and its people. Treasure In Earthen Vessels is based in Northern Iraq (Kurdistan), from where we launch into the other nations in which we are involved.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {/* Worship and Prayer Community */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://tiev.global/wp-content/uploads/2025/11/Iraq_WordPress_Style_Layout-derek-teaching-768x1024.jpg"
                    alt="Worship and Prayer Community"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-4">Worship & Prayer Community</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  A growing community gathers weekly for worship, prayer, and discipleship — lifting up the name of Jesus in Northern Iraq.
                </p>
              </div>
            </div>

            {/* Ministry and Discipleship */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group lg:order-2">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://tiev.global/wp-content/uploads/2025/12/IMG_7413-scaled.jpg"
                    alt="Ministry and Discipleship"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl font-semibold text-white mb-4">Relational Ministry</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Ministry here is relational. Shared meals, shared life, and shared faith — friendships are the bridge for discipleship and mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Areas */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ministryAreas.map((item, i) => (
              <SpotlightCard
                key={i}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] group hover:border-brand-teal/30 transition-all"
                spotlightColor="emerald"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-6 border border-brand-teal/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm mb-4">{item.description}</p>
                {item.points && (
                  <ul className="space-y-1 text-neutral-500 text-sm">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-teal mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Partner */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
              Ways to Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard className="p-8 text-center border border-white/10 bg-white/[0.02]" spotlightColor="emerald">
              <Flame className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Pray</h3>
              <p className="text-neutral-400 text-sm">
                Join the prayer movement for Iraq and the Muslim world.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-8 text-center border border-white/10 bg-white/[0.02]" spotlightColor="emerald">
              <Heart className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Partner</h3>
              <p className="text-neutral-400 text-sm">
                Support the ministry financially to strengthen discipleship, outreach, and projects.
              </p>
              <Link href="/donate" className="inline-block mt-4">
                <ShinyButton>Donate Today</ShinyButton>
              </Link>
            </SpotlightCard>

            <SpotlightCard className="p-8 text-center border border-white/10 bg-white/[0.02]" spotlightColor="emerald">
              <Users className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Go</h3>
              <p className="text-neutral-400 text-sm">
                Learn about serving short-term or long-term with our team.
              </p>
              <Link href="/contact" className="inline-block mt-4 text-brand-teal hover:text-brand-teal/80 transition-colors text-sm font-medium">
                Join The Team →
              </Link>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
            Support the Work in Iraq
          </h2>
          <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-lg">
            Partner with us in building an altar unto the Lord in the heart of the Middle East.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate">
              <ShinyButton>
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Support Iraq Initiative
                </span>
              </ShinyButton>
            </Link>
            <Link href="/projects" className="px-8 py-3.5 text-sm font-medium text-neutral-300 border border-white/10 rounded-full hover:bg-white/5 hover:text-white transition-all flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
