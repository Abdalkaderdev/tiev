'use client';

import { Heart, HandHeart, BookOpen, Users, Unlock, ArrowRight, MapPin, Cross } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

const ministryAreas = [
  {
    icon: BookOpen,
    title: 'Discipleship & Pastoral Training',
    description: 'Equipping local pastors and evangelists through mentorship and biblical teaching, supporting leaders who minister in brick-kiln communities and rural churches.',
  },
  {
    icon: HandHeart,
    title: 'Poor, Orphans & Widows',
    description: 'Feeding families, providing aid to widows, and caring for vulnerable children with both practical help and spiritual support.',
  },
  {
    icon: Unlock,
    title: 'Brick-Kiln Outreach',
    description: 'Supporting Christian families trapped in generational debt slavery by bringing the Gospel, prayer, food packages, and children\'s outreach.',
  },
  {
    icon: Cross,
    title: 'Gospel Evangelism & Crusades',
    description: 'Supporting gatherings, evangelistic meetings, and testimony-based ministry that strengthens new believers and local churches.',
  },
  {
    icon: Users,
    title: 'Leadership Development',
    description: 'Training young leaders, evangelists, and worship leaders, creating safe places for young people to encounter Jesus.',
  },
];

export default function PakistanProjectPage() {
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
                Pakistan Initiative
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
              Pakistan Initiative
            </h1>

            <p className="text-xl text-neutral-400 animate-fade-slide-in stagger-2 leading-relaxed">
              Treasure in Earthen Vessels (TIEV) partners with indigenous leaders across Pakistan to strengthen the church, raise up disciples, and serve vulnerable communities with the compassion and power of Jesus. Our work is rooted in prayer, worship, the Gospel, and intentional discipleship.
            </p>
          </div>
        </div>
      </section>

      {/* Scripture Quote */}
      <section className="py-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic mb-4">
            "If the Son sets you free, you will be free indeed."
          </blockquote>
          <cite className="text-brand-teal text-sm font-medium">— John 8:36</cite>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
            Jesus is transforming lives in brick kiln communities. Many come from generational bondage, yet the gospel brings freedom.
          </p>
        </div>
      </section>

      {/* Key Areas of Ministry */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
              Key Areas of Ministry In Pakistan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-neutral-400 leading-relaxed text-sm">{item.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Our Vision Moving Forward</h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Strengthening the Pakistani church through increased humanitarian projects, discipleship training, leadership development, and Gospel proclamation.
          </p>
        </div>
      </section>

      {/* Image Gallery with Scripture */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feeding the Poor */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[4/3] relative">
                <img
                  src="https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.20.49-768x1024.jpeg"
                  alt="Feeding the Poor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-medium mb-2">Feeding the Poor</h3>
                  <p className="text-white/80 text-sm mb-2">Large pots of food prepared for the poor—an expression of Christ's compassion.</p>
                  <cite className="text-brand-teal text-xs italic">"You gave me something to eat." — Matthew 25:35</cite>
                </div>
              </div>
            </div>

            {/* Strengthening Leaders */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[4/3] relative">
                <img
                  src="https://tiev.global/wp-content/uploads/2025/12/IMG_7413-scaled.jpg"
                  alt="Strengthening Leaders"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-medium mb-2">Strengthening Leaders</h3>
                  <p className="text-white/80 text-sm mb-2">We invest deeply in local pastors so the gospel goes forth with authority.</p>
                  <cite className="text-brand-teal text-xs italic">"Equip the saints…" — Ephesians 4:12</cite>
                </div>
              </div>
            </div>

            {/* Preparing Crusade Grounds */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[4/3] relative">
                <img
                  src="https://tiev.global/wp-content/uploads/2025/10/Group-768x1024.jpg"
                  alt="Preparing Crusade Grounds"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-medium mb-2">Preparing Crusade Grounds</h3>
                  <p className="text-white/80 text-sm mb-2">Workers set up tents where thousands will hear the gospel.</p>
                  <cite className="text-brand-teal text-xs italic">"How will they hear without a preacher?" — Romans 10:14</cite>
                </div>
              </div>
            </div>

            {/* Raising Disciples */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[4/3] relative">
                <img
                  src="https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.15.09-768x1024.jpeg"
                  alt="Raising Disciples"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-medium mb-2">Raising Disciples</h3>
                  <p className="text-white/80 text-sm mb-2">Leaders and young believers gather to be strengthened and sent.</p>
                  <cite className="text-brand-teal text-xs italic">"Go and make disciples…" — Matthew 28:19</cite>
                </div>
              </div>
            </div>

            {/* Set Free from Bonded Labor */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[4/3] relative">
                <img
                  src="https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.20.52-1-768x1024.jpeg"
                  alt="Set Free from Bonded Labor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-medium mb-2">Set Free from Bonded Labor</h3>
                  <p className="text-white/80 text-sm mb-2">Families thank God after being freed from brick slavery.</p>
                  <cite className="text-brand-teal text-xs italic">"Proclaim liberty…" — Isaiah 61:1</cite>
                </div>
              </div>
            </div>

            {/* Families in Bondage */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[4/3] relative">
                <img
                  src="https://tiev.global/wp-content/uploads/2025/12/IMG_3335-1.jpg"
                  alt="Families in Bondage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-medium mb-2">Families in Bondage</h3>
                  <p className="text-white/80 text-sm mb-2">Jesus sees every family working in the brick kilns. Hope is rising.</p>
                  <cite className="text-brand-teal text-xs italic">"He lifts the needy…" — Psalm 113:7</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
            Support the Work in Pakistan
          </h2>
          <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-lg">
            Your gift can literally buy freedom for a family and bring the hope of the Gospel to those in bondage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate">
              <ShinyButton>
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Support Pakistan Initiative
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
