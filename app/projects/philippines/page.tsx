'use client';

import { Heart, BookOpen, Users, Building, ArrowRight, MapPin, Home } from 'lucide-react';
import ShinyButton from '@/components/ShinyButton';
import Link from 'next/link';

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
                Philippines Initiative
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white animate-fade-slide-in stagger-1">
              Philippines Initiative
            </h1>

            <p className="text-xl text-neutral-400 animate-fade-slide-in stagger-2 leading-relaxed">
              Stories, testimonies, and invitations to join what God is doing in the Philippines. Through serving the poor, strengthening churches, and building a discipleship base, we believe God is shaping a generation of laborers for His harvest.
            </p>
          </div>
        </div>
      </section>

      {/* Growing Church Family */}
      <section className="py-16 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">A Growing Church Family</h2>
          <p className="text-xl text-neutral-400 leading-relaxed mb-6">
            The church in the Philippines is alive and full of potential. Together, we can encourage pastors, equip believers, and reach communities with the gospel. Your partnership helps the Kingdom advance in powerful ways.
          </p>
          <blockquote className="text-2xl font-light text-brand-teal italic">
            "Go and make disciples…" — Matthew 28:19–20
          </blockquote>
        </div>
      </section>

      {/* Image Gallery with Stories */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {/* Paul Norris - Teaching */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://tiev.global/wp-content/uploads/2025/12/IMG_3335-1.jpg"
                    alt="Paul Norris Teaching"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-4">Paul Norris — Teaching Under the Trees</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  Paul's heart for discipleship and encouragement has impacted many communities. Even under the trees, the Word is being sown. You can join us in raising up leaders who will carry the gospel to their own people.
                </p>
              </div>
            </div>

            {/* Honoring Elders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group lg:order-2">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.15.09-768x1024.jpeg"
                    alt="Church Elders"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl font-semibold text-white mb-4">Honoring the Elders of the Church</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  These elders carry wisdom, joy, and decades of faithfulness. Strengthening local churches is at the core of our mission. By partnering with us, you help uplift the spiritual mothers and fathers of this nation.
                </p>
              </div>
            </div>

            {/* Household of Faith */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://tiev.global/wp-content/uploads/2025/10/Group-768x1024.jpg"
                    alt="Household of Faith"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-4">A Household of Faith</h3>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  God is moving in homes all across the Philippines. Families are being strengthened, faith is being shared, and hearts are opening. You can join us in helping households become centers of worship and discipleship.
                </p>
              </div>
            </div>

            {/* The Road Into the Harvest */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group lg:order-2">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://tiev.global/wp-content/uploads/2025/12/IMG_7413-scaled.jpg"
                    alt="Mountain Road"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl font-semibold text-white mb-4">The Road Into the Harvest</h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                  God is opening doors in places once overlooked. Every curve of this mountain road reminds us that the gospel is advancing into hidden regions. We invite you to stand with us in prayer and partnership as we prepare the land for a discipleship base that will send workers into the harvest fields.
                </p>
                <blockquote className="border-l-4 border-brand-teal pl-4 italic text-brand-teal">
                  "Prepare the way of the Lord…" — Isaiah 40:3
                </blockquote>
              </div>
            </div>

            {/* Treasured in His Eyes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.20.49-768x1024.jpeg"
                    alt="Children in Community"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-4">Treasured in His Eyes</h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                  In simple neighborhoods like this one, we meet children who remind us of the treasure Jesus sees in every person. Your support helps us bring meals, discipleship, and hope to families in need.
                </p>
                <blockquote className="border-l-4 border-brand-teal pl-4 italic text-brand-teal">
                  "God has chosen the poor… to be rich in faith." — James 2:5
                </blockquote>
              </div>
            </div>

            {/* Land for Future Base */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group lg:order-2">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://tiev.global/wp-content/uploads/2025/10/WhatsApp-Image-2025-09-15-at-06.20.52-1-768x1024.jpeg"
                    alt="Future Discipleship Base"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl font-semibold text-white mb-4">Land for the Future Discipleship Base</h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                  This open field will one day host worship, teaching, and missionary training. We invite you to be part of laying the foundations—spiritually and physically—for a place where lives will be transformed and leaders will be sent out.
                </p>
                <blockquote className="border-l-4 border-brand-teal pl-4 italic text-brand-teal">
                  "Enlarge the place of your tent…" — Isaiah 54:2–3
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
            Support the Work in Philippines
          </h2>
          <p className="text-neutral-400 mb-10 max-w-2xl mx-auto text-lg">
            Join us in raising up a generation of Filipino leaders and church planters who will transform their nation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/donate">
              <ShinyButton>
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Donate to the Philippines
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
