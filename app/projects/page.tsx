'use client';

import Link from 'next/link';
import { MapPin, ArrowRight, Heart } from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyButton from '@/components/ShinyButton';

const projects = [
    {
        country: 'Philippines',
        focus: 'Discipleship & Church Strengthening',
        description: 'Raising a new generation of leaders through house churches and training future laborers to impact their communities.',
        link: '/projects/philippines',
    },
    {
        country: 'Pakistan',
        focus: 'Brick-Kiln Outreach',
        description: 'Serving alongside local leaders to disciple believers and provide aid to families trapped in brick-kiln labor.',
        link: '/projects/pakistan',
    },
    {
        country: 'Iraq',
        focus: 'Prayer & Church Planting',
        description: 'Establishing houses of prayer and church plants in Erbil, Baghdad, and Mosul through intercession and mercy.',
        link: '/projects/iraq',
    },
    {
        country: 'Middle East',
        focus: 'Missionary Discipleship',
        description: 'Equipping individuals for missionary service through immersive discipleship and hands-on ministry in the region.',
        link: '/projects/middle-east',
    },
];

export default function ProjectsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-24">
                <div className="absolute inset-0 radial-glow-teal -z-10" />
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <span className="text-brand-teal text-sm font-mono tracking-wider uppercase mb-4 block">Our Work</span>
                    <h1 className="text-4xl lg:text-6xl font-semibold text-white mb-6">
                        Where We Serve
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Across the 10/40 window, we partner with local believers to reach
                        the unreached and care for the most vulnerable.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="relative py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <Link href={project.link} key={index}>
                                <SpotlightCard className="p-8 h-full group cursor-pointer">
                                    <div className="flex flex-col h-full">
                                        <div className="flex items-center gap-2 mb-3">
                                            <MapPin className="w-4 h-4 text-brand-teal" />
                                            <span className="text-brand-teal text-sm font-mono tracking-wider uppercase">{project.focus}</span>
                                        </div>
                                        <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-brand-teal transition-colors">
                                            {project.country}
                                        </h2>
                                        <p className="text-white/60 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center gap-2 mt-4 text-brand-teal text-sm font-medium">
                                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* "The Need" Bento Grid (New Phase 12) */}
            <section className="py-24 border-y border-white/5 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
                        {/* Large Card: The 10/40 Window */}
                        <SpotlightCard className="col-span-1 lg:col-span-2 row-span-2 p-10 flex flex-col justify-end relative overflow-hidden group" variant="matte">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547471080-752890c9471b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            <div className="relative z-10 w-full">
                                <span className="inline-block px-3 py-1 bg-brand-teal/20 border border-brand-teal/30 rounded-full text-brand-teal text-xs font-mono mb-4 backdrop-blur-md">THE 10/40 WINDOW</span>
                                <h3 className="text-3xl font-semibold text-white mb-2">The Unreached Billions</h3>
                                <p className="text-white/70 max-w-lg text-lg">
                                    97% of the unreached live in this window. It's home to the majority of the world's Muslims, Hindus, and Buddhists, yet receives the least amount of missionary focus.
                                </p>
                            </div>
                        </SpotlightCard>

                        {/* Top Right: Poverty */}
                        <SpotlightCard className="p-8 flex flex-col justify-between" variant="matte">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <Heart className="w-6 h-6 text-white/60" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Extreme Poverty</h3>
                                <p className="text-white/60 text-sm">Serving communities where basic needs like clean water, food, and education are daily struggles.</p>
                            </div>
                        </SpotlightCard>

                        {/* Bottom Right: Persecution */}
                        <SpotlightCard className="p-8 flex flex-col justify-between" variant="matte">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                                <MapPin className="w-6 h-6 text-white/60" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Persecution</h3>
                                <p className="text-white/60 text-sm">Supporting believers who face immense pressure, discrimination, and danger for their faith.</p>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px]" />
                </div>
                <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl font-semibold text-white mb-6">
                        Support Our Global Work
                    </h2>
                    <p className="text-xl text-white/70 mb-10">
                        Your generosity makes it possible to reach more communities across
                        the 10/40 window with hope and help.
                    </p>
                    <Link href="/donate">
                        <ShinyButton>
                            <span className="flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Give Today
                            </span>
                        </ShinyButton>
                    </Link>
                </div>
            </section>
        </>
    );
}
