'use client';

import { HandHeart, BookOpen, Users, Building, ArrowRight, MapPin } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

const initiatives = [
  {
    icon: BookOpen,
    title: 'Pastor Training',
    description: 'Equipping local pastors with theological education and leadership skills to effectively shepherd their congregations.',
  },
  {
    icon: Building,
    title: 'Church Planting',
    description: 'Establishing new faith communities in rural and unreached areas to bring the hope of the Gospel.',
  },
  {
    icon: Users,
    title: 'Youth Discipleship',
    description: 'Mentoring the next generation of leaders, fostering spiritual growth and community engagement.',
  },
];

const stats = [
  { value: '150+', label: 'Pastors Trained' },
  { value: '20', label: 'New Churches' },
  { value: '500+', label: 'Youth Discipled' },
  { value: '3', label: 'Conferences' },
];

export default function PhilippinesProjectPage() {
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
                Project Focus: Philippines
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
              Empowering the Church,<br />
              <span className="text-brand-teal text-glow-teal">Leadership Development</span>
            </h1>

            <p className="text-xl text-neutral-400 animate-fade-slide-in stagger-2 leading-relaxed">
              Strengthening local churches and equipping leaders to build vibrant, self-sustaining faith communities across the Philippines.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Stats */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">The Need & The Vision</h2>
              <div className="prose prose-invert text-neutral-400 leading-relaxed">
                <p className="mb-4">
                  While the church in the Philippines is growing, many rural and urban poor communities lack trained leaders and resources. Pastors often serve with little to no formal theological training.
                </p>
                <p>
                  TIEV comes alongside these local leaders to provide the training, encouragement, and resources they need. By strengthening the leadership, we strengthen the whole church, enabling them to reach their own communities more effectively.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <SpotlightCard key={i} className="p-6 text-center border border-white/10 bg-white/[0.02]" spotlightColor="emerald">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-brand-teal uppercase tracking-wider font-medium">{stat.label}</div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
              Key Initiatives
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Strategic areas where we are investing to build a stronger future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((item, i) => (
              <SpotlightCard
                key={i}
                className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] group hover:border-brand-teal/30 transition-all"
                spotlightColor="emerald"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-6 border border-brand-teal/20 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
            Equip Leaders
          </h2>
          <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-lg">
            Your support provides training materials, conference fees, and resources for pastors and church planters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate">
              <ShinyButton>
                <span className="flex items-center gap-2">
                  <HandHeart className="w-5 h-5" />
                  Support Leadership
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
