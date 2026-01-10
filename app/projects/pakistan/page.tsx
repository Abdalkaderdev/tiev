'use client';

import { Heart, HandHeart, BookOpen, Stethoscope, Unlock, ArrowRight, MapPin } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

const initiatives = [
  {
    icon: Unlock,
    title: 'Debt Relief',
    description: 'Paying off generational debts to free families from bonded labor in brick kilns, restoring their dignity and freedom.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Building schools and providing teachers for children who would otherwise be working in the kilns alongside their parents.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Camps',
    description: 'Bringing mobile healthcare clinics to remote kiln areas to treat illness, injury, and provide preventative care.',
  },
];

const stats = [
  { value: '50+', label: 'Families Freed' },
  { value: '3', label: 'Schools Built' },
  { value: '200+', label: 'Students' },
  { value: '5,000+', label: 'Patients Treated' },
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
                Project Focus: Pakistan
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
              Breaking Chains,<br />
              <span className="text-brand-teal text-glow-teal">Building Hope</span>
            </h1>

            <p className="text-xl text-neutral-400 animate-fade-slide-in stagger-2 leading-relaxed">
              In the brick kilns of Pakistan, thousands of families are trapped in generational slavery. We are working to break the cycle of debt and poverty through the love of Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Overview & Stats */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">The Crisis & The Call</h2>
              <div className="prose prose-invert text-neutral-400 leading-relaxed">
                <p className="mb-4">
                  Generational bonded labor is a modern-day form of slavery. Families take small loans for medical emergencies or survival, and are then forced to work in brick kilns for generations to pay it back—a debt that never ends.
                </p>
                <p>
                  TIEV steps into this darkness with practical light. By paying off these debts, we grant immediate physical freedom. By building schools and churches, we offer eternal hope and a future for their children.
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

            {/* Hero Image */}
            <div className="mt-16 relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,131,130,0.1)] group max-w-4xl mx-auto">
              <div className="aspect-[16/10] relative">
                <img
                  src="https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.20.49-768x1024.jpeg"
                  alt="Brick Kiln Outreach in Pakistan"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
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
              Our holistic approach to freedom and restoration.
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
            Support Freedom
          </h2>
          <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-lg">
            Your gift can literally buy freedom for a family. Join us in breaking the chains of slavery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate">
              <ShinyButton>
                <span className="flex items-center gap-2">
                  <HandHeart className="w-5 h-5" />
                  Support Freedom Projects
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
